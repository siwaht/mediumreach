import type { Express } from "express";
import { createServer, type Server } from "http";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export async function registerRoutes(app: Express): Promise<Server> {
  const httpServer = createServer(app);

  app.post("/api/contact", async (req, res) => {
    const { name, email, company, message } = req.body;
    const webhookUrl = process.env.WEBHOOK_URL;

    if (!webhookUrl) {
      return res.status(500).json({ message: "Webhook URL not configured" });
    }

    try {
      await axios.post(webhookUrl, {
        name,
        email,
        company,
        message,
        timestamp: new Date().toISOString(),
      });
      res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
      console.error("Error sending message:", error);
      res.status(500).json({ message: "Failed to send message" });
    }
  });

  return httpServer;
}
