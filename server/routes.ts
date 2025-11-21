import type { Express } from "express";
import { createServer, type Server } from "http";
import axios from "axios";
import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  const httpServer = createServer(app);

  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, company, message } = contactSchema.parse(req.body);

      const webhookUrl = process.env.WEBHOOK_URL;

      if (!webhookUrl) {
        return res.status(500).json({ message: "Webhook URL not configured" });
      }

      await axios.post(webhookUrl, {
        name,
        email,
        company,
        message,
        timestamp: new Date().toISOString(),
      });
      res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid input", errors: error.errors });
      }
      console.error("Error sending message:", error);
      res.status(500).json({ message: "Failed to send message" });
    }
  });

  return httpServer;
}
