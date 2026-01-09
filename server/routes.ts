import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import axios, { AxiosError } from "axios";
import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

// Rate limiting configuration
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 5;

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

// Clean up expired entries periodically
setInterval(() => {
  const now = Date.now();
  const entries = Array.from(rateLimitStore.entries());
  for (const [key, entry] of entries) {
    if (now > entry.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}, RATE_LIMIT_WINDOW_MS);

function getRateLimitKey(req: Request): string {
  return req.ip || req.socket.remoteAddress || 'unknown';
}

function checkRateLimit(req: Request): { allowed: boolean; remaining: number; resetTime: number } {
  const key = getRateLimitKey(req);
  const now = Date.now();
  const entry = rateLimitStore.get(key);

  if (!entry || now > entry.resetTime) {
    const newEntry: RateLimitEntry = {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW_MS,
    };
    rateLimitStore.set(key, newEntry);
    return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - 1, resetTime: newEntry.resetTime };
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return { allowed: false, remaining: 0, resetTime: entry.resetTime };
  }

  entry.count++;
  return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - entry.count, resetTime: entry.resetTime };
}

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().email("Invalid email address").max(254, "Email too long"),
  company: z.string().max(100, "Company name too long").optional(),
  message: z.string().min(1, "Message is required").max(5000, "Message too long"),
});

type ContactInput = z.infer<typeof contactSchema>;

function sanitizeErrorMessage(error: unknown): string {
  if (error instanceof z.ZodError) {
    return "Please check your input and try again";
  }
  if (error instanceof AxiosError) {
    if (error.code === 'ECONNREFUSED' || error.code === 'ETIMEDOUT') {
      return "Service temporarily unavailable";
    }
  }
  if (error instanceof Error) {
    // Log the actual error but return generic message
    return "An unexpected error occurred";
  }
  return "An unexpected error occurred";
}

export async function registerRoutes(app: Express): Promise<Server> {
  const httpServer = createServer(app);

  app.post("/api/contact", async (req: Request, res: Response) => {
    // Rate limiting
    const rateLimit = checkRateLimit(req);
    res.setHeader('X-RateLimit-Remaining', rateLimit.remaining.toString());
    res.setHeader('X-RateLimit-Reset', rateLimit.resetTime.toString());

    if (!rateLimit.allowed) {
      return res.status(429).json({ 
        message: "Too many requests. Please try again later.",
        retryAfter: Math.ceil((rateLimit.resetTime - Date.now()) / 1000)
      });
    }

    try {
      const validatedData: ContactInput = contactSchema.parse(req.body);

      const webhookUrl = process.env.WEBHOOK_URL;

      if (!webhookUrl) {
        console.error("WEBHOOK_URL environment variable not configured");
        return res.status(500).json({ message: "Service configuration error" });
      }

      await axios.post(
        webhookUrl,
        {
          name: validatedData.name,
          email: validatedData.email,
          company: validatedData.company || '',
          message: validatedData.message,
          timestamp: new Date().toISOString(),
        },
        {
          timeout: 10000,
          headers: { 'Content-Type': 'application/json' },
        }
      );

      res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.errors.map(e => ({
          field: e.path.join('.'),
          message: e.message
        }));
        return res.status(400).json({ 
          message: "Invalid input", 
          errors: fieldErrors 
        });
      }

      console.error("Contact form error:", error instanceof Error ? error.message : String(error));
      res.status(500).json({ message: sanitizeErrorMessage(error) });
    }
  });

  return httpServer;
}
