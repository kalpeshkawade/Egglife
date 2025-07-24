import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertNewsletterSchema } from "@shared/schema";
import { setupAuth, isAuthenticated } from "./replitAuth";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Auth middleware
  await setupAuth(app);

  // Auth routes
  app.get('/api/auth/user', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });
  // Products API
  app.get("/api/products", async (req, res) => {
    try {
      const products = await storage.getProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch products" });
    }
  });

  app.get("/api/products/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const product = await storage.getProductBySlug(slug);
      
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch product" });
    }
  });

  // Recipes API
  app.get("/api/recipes", async (req, res) => {
    try {
      const { meal } = req.query;
      const recipes = await storage.getRecipes(meal as string);
      res.json(recipes);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch recipes" });
    }
  });

  app.get("/api/recipes/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const recipe = await storage.getRecipeBySlug(slug);
      
      if (!recipe) {
        return res.status(404).json({ message: "Recipe not found" });
      }
      
      res.json(recipe);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch recipe" });
    }
  });

  // Newsletter subscription
  app.post("/api/newsletter/subscribe", async (req, res) => {
    try {
      const validation = insertNewsletterSchema.safeParse(req.body);
      
      if (!validation.success) {
        return res.status(400).json({ 
          message: "Invalid email address",
          errors: validation.error.errors 
        });
      }

      const newsletter = await storage.subscribeToNewsletter(validation.data);
      res.json({ 
        message: "Successfully subscribed to newsletter!",
        data: newsletter 
      });
    } catch (error) {
      if (error instanceof Error && error.message.includes("unique")) {
        return res.status(409).json({ message: "Email already subscribed" });
      }
      res.status(500).json({ message: "Failed to subscribe to newsletter" });
    }
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const contactSchema = z.object({
        fullName: z.string().min(1, "Full name is required"),
        email: z.string().email("Valid email is required"),
        subject: z.string().min(1, "Subject is required"),
        message: z.string().min(1, "Message is required"),
        attachments: z.array(z.any()).optional().default([])
      });

      const validation = contactSchema.safeParse(req.body);
      
      if (!validation.success) {
        return res.status(400).json({ 
          message: "Please fill in all required fields",
          errors: validation.error.errors 
        });
      }

      // In a real application, you would:
      // 1. Store the contact submission in a database
      // 2. Send email notifications to your support team
      // 3. Process any file attachments
      // For now, we'll just log it and return success
      
      console.log("Contact form submission:", validation.data);
      
      res.json({ 
        message: "Message sent successfully! We'll get back to you soon.",
        data: { 
          id: Date.now().toString(),
          submitted: new Date().toISOString(),
          ...validation.data 
        }
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ message: "Failed to send message. Please try again later." });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
