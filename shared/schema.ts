import { pgTable, text, serial, integer, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  category: text("category").notNull(), // "wrap" or "grab-and-go"
  flavor: text("flavor").notNull(),
  imageUrl: text("image_url").notNull(),
  hoverImageUrl: text("hover_image_url"),
  nutrition: jsonb("nutrition").notNull(), // {carbs, protein, calories, serving_size}
  ingredients: text("ingredients").array(),
  isAvailable: boolean("is_available").notNull().default(true),
});

export const recipes = pgTable("recipes", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  mealType: text("meal_type").notNull(), // breakfast, lunch, dinner, snack, appetizer, dessert
  imageUrl: text("image_url").notNull(),
  prepTime: integer("prep_time"), // in minutes
  cookTime: integer("cook_time"), // in minutes
  servings: integer("servings").notNull(),
  difficulty: text("difficulty").notNull(), // easy, medium, hard
  ingredients: text("ingredients").array().notNull(),
  instructions: text("instructions").array().notNull(),
  nutrition: jsonb("nutrition"), // {calories, protein, carbs, fat}
  tags: text("tags").array(), // dietary tags like "keto", "gluten-free", etc.
  productId: integer("product_id").references(() => products.id),
});

export const newsletters = pgTable("newsletters", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull().unique(),
  country: text("country").notNull(),
  zipCode: text("zip_code").notNull(),
  recipeType: text("recipe_type").notNull(),
  subscribedAt: text("subscribed_at").notNull(),
});

export const insertProductSchema = createInsertSchema(products).omit({
  id: true,
});

export const insertRecipeSchema = createInsertSchema(recipes).omit({
  id: true,
});

export const insertNewsletterSchema = createInsertSchema(newsletters).omit({
  id: true,
  subscribedAt: true,
});

export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Product = typeof products.$inferSelect;

export type InsertRecipe = z.infer<typeof insertRecipeSchema>;
export type Recipe = typeof recipes.$inferSelect;

export type InsertNewsletter = z.infer<typeof insertNewsletterSchema>;
export type Newsletter = typeof newsletters.$inferSelect;
