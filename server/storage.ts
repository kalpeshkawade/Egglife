import { products, recipes, newsletters, type Product, type Recipe, type Newsletter, type InsertProduct, type InsertRecipe, type InsertNewsletter } from "@shared/schema";

export interface IStorage {
  // Products
  getProducts(): Promise<Product[]>;
  getProductById(id: number): Promise<Product | undefined>;
  getProductBySlug(slug: string): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  // Recipes
  getRecipes(mealType?: string): Promise<Recipe[]>;
  getRecipeById(id: number): Promise<Recipe | undefined>;
  getRecipeBySlug(slug: string): Promise<Recipe | undefined>;
  createRecipe(recipe: InsertRecipe): Promise<Recipe>;
  
  // Newsletter
  subscribeToNewsletter(newsletter: InsertNewsletter): Promise<Newsletter>;
  getNewsletterSubscriptions(): Promise<Newsletter[]>;
}

export class MemStorage implements IStorage {
  private products: Map<number, Product>;
  private recipes: Map<number, Recipe>;
  private newsletters: Map<number, Newsletter>;
  private currentProductId: number;
  private currentRecipeId: number;
  private currentNewsletterId: number;

  constructor() {
    this.products = new Map();
    this.recipes = new Map();
    this.newsletters = new Map();
    this.currentProductId = 1;
    this.currentRecipeId = 1;
    this.currentNewsletterId = 1;
    
    this.seedData();
  }

  private seedData() {
    // Seed products
    const productsData = [
      {
        name: "Original",
        slug: "original",
        description: "A soft, light, and clean canvas.",
        category: "wrap",
        flavor: "original",
        imageUrl: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67e17e6ef78f84f6fb1b73ad_egglife-original-wrap-front.webp",
        hoverImageUrl: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe8c0d_wrap-01.webp",
        nutrition: { carbs: 1, protein: 5, calories: 25, serving_size: "1 wrap" },
        ingredients: ["Egg whites", "Natural flavor", "Xanthan gum", "Salt"],
        isAvailable: true,
      },
      {
        name: "Roasted Garlic & Herb",
        slug: "roasted-garlic-herb",
        description: "A flavorful combination of roasted garlic and chives with a refreshing blend of basil, parsley, and rosemary.",
        category: "wrap",
        flavor: "roasted-garlic-herb",
        imageUrl: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67e17d45f3f5d43d2fbccf96_egglife-roasted-garlic-herb-wrap-front.webp",
        hoverImageUrl: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe944a_rgh-wrap-hover_v2.webp",
        nutrition: { carbs: 1, protein: 5, calories: 25, serving_size: "1 wrap" },
        ingredients: ["Egg whites", "Roasted garlic", "Chives", "Basil", "Parsley", "Rosemary", "Salt"],
        isAvailable: true,
      },
      {
        name: "Everything Bagel",
        slug: "everything-bagel",
        description: "A mouth-watering mixture of garlic, onion, poppy seed, hemp seed, and sea salt.",
        category: "wrap",
        flavor: "everything-bagel",
        imageUrl: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67e17e0cf1c15b8775a11ca9_egglife-everything-wrap-front.webp",
        hoverImageUrl: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe9449_ec-wrap-hover_v2.webp",
        nutrition: { carbs: 1, protein: 5, calories: 25, serving_size: "1 wrap" },
        ingredients: ["Egg whites", "Garlic", "Onion", "Poppy seed", "Hemp seed", "Sea salt"],
        isAvailable: true,
      },
      {
        name: "Sweet Cinnamon",
        slug: "sweet-cinnamon",
        description: "A sweet sprinkle of cinnamon and vanilla, naturally sweetened with monk fruit.",
        category: "wrap",
        flavor: "sweet-cinnamon",
        imageUrl: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67e17d2ca9260403af628532_egglife-cinnamon-wrap-front.webp",
        hoverImageUrl: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe8c0b_wrap-05.webp",
        nutrition: { carbs: 2, protein: 5, calories: 30, serving_size: "1 wrap" },
        ingredients: ["Egg whites", "Cinnamon", "Vanilla", "Monk fruit", "Natural flavor"],
        isAvailable: true,
      },
      {
        name: "Garden Salsa",
        slug: "garden-salsa",
        description: "A zesty mix of just-picked flavors including peppers, onion, and garlic.",
        category: "wrap",
        flavor: "garden-salsa",
        imageUrl: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67e17d1e43bad76657f1fed9_egglife-garden-salsa-wrap-front.webp",
        hoverImageUrl: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe93ba_garden-salsa-wrap.webp",
        nutrition: { carbs: 1, protein: 5, calories: 25, serving_size: "1 wrap" },
        ingredients: ["Egg whites", "Peppers", "Onion", "Garlic", "Tomato", "Natural flavor"],
        isAvailable: true,
      },
      {
        name: "Southwest",
        slug: "southwest",
        description: "A flavorful blend of cumin, garlic, onion, and peppers.",
        category: "wrap",
        flavor: "southwest",
        imageUrl: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67e17d69c67c308cb11d1369_egglife-southwest-wrap-front.webp",
        hoverImageUrl: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe8c07_wrap-03.webp",
        nutrition: { carbs: 1, protein: 5, calories: 25, serving_size: "1 wrap" },
        ingredients: ["Egg whites", "Cumin", "Garlic", "Onion", "Peppers", "Paprika"],
        isAvailable: true,
      },
      {
        name: "Grab & Go Roasted Garlic & Herb",
        slug: "grab-go-roasted-garlic-herb",
        description: "Egg white wrap with uncured pepperoni & cream cheese.",
        category: "grab-and-go",
        flavor: "roasted-garlic-herb",
        imageUrl: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/684c625bc594f4f46e88d72f_grab-n-go-roasted-garlic-herb-front-smaller.webp",
        hoverImageUrl: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/6847b45e92b57e2bc4a7cfca_grab-n-go-roasted-garlic-herb-final.webp",
        nutrition: { carbs: 3, protein: 12, calories: 180, serving_size: "1 wrap" },
        ingredients: ["Egg white wrap", "Uncured pepperoni", "Cream cheese", "Roasted garlic", "Herbs"],
        isAvailable: true,
      },
      {
        name: "Grab & Go Everything Bagel",
        slug: "grab-go-everything-bagel",
        description: "Egg white wrap with roasted turkey & cream cheese.",
        category: "grab-and-go",
        flavor: "everything-bagel",
        imageUrl: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/684c624bf33900b588262b2b_grab-n-go-everything-bagel-front-smaller.webp",
        hoverImageUrl: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/6847b4730504c168d7256b46_grab-n-go-everything-bagel-final.webp",
        nutrition: { carbs: 3, protein: 15, calories: 160, serving_size: "1 wrap" },
        ingredients: ["Egg white wrap", "Roasted turkey", "Cream cheese", "Everything bagel seasoning"],
        isAvailable: true,
      },
    ];

    productsData.forEach(product => {
      const id = this.currentProductId++;
      this.products.set(id, { ...product, id });
    });

    // Seed recipes
    const recipesData = [
      {
        title: "Turkey Pinwheels",
        slug: "turkey-pinwheels",
        description: "Delicious turkey and cream cheese pinwheels perfect for snacking or appetizers.",
        mealType: "appetizer",
        imageUrl: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe8cdf_646211cfa349c349937b8321_dww882thx1gjn8n9ufnfdeb3cznaj2k1.webp",
        prepTime: 15,
        cookTime: 0,
        servings: 4,
        difficulty: "easy",
        ingredients: [
          "1 EggLife Original wrap",
          "4 oz cream cheese, softened",
          "4 slices deli turkey",
          "1/4 cup spinach leaves",
          "2 tbsp dried cranberries"
        ],
        instructions: [
          "Spread cream cheese evenly over the egg white wrap",
          "Layer turkey slices on top of cream cheese",
          "Add spinach leaves and cranberries",
          "Roll wrap tightly from one end",
          "Slice into 1-inch pinwheels",
          "Serve immediately or refrigerate"
        ],
        nutrition: { calories: 180, protein: 12, carbs: 6, fat: 8 },
        tags: ["gluten-free", "low-carb", "protein-rich"],
        productId: 1,
      },
      {
        title: "Turkey Bacon Club",
        slug: "turkey-bacon-club",
        description: "A classic club sandwich made healthier with egg white wraps.",
        mealType: "lunch",
        imageUrl: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe90c3_64621254b3a33482303a77a2_4d357unh8ha4zb6rdvprv2j4huxra42c.webp",
        prepTime: 10,
        cookTime: 5,
        servings: 1,
        difficulty: "easy",
        ingredients: [
          "1 EggLife Original wrap",
          "3 slices turkey bacon",
          "2 slices deli turkey",
          "2 tbsp mayo",
          "2 lettuce leaves",
          "2 tomato slices"
        ],
        instructions: [
          "Cook turkey bacon until crispy",
          "Spread mayo on the egg white wrap",
          "Layer turkey, bacon, lettuce, and tomato",
          "Roll up tightly",
          "Cut in half and serve"
        ],
        nutrition: { calories: 320, protein: 28, carbs: 8, fat: 18 },
        tags: ["gluten-free", "low-carb", "protein-rich"],
        productId: 1,
      },
      {
        title: "Buffalo Cauliflower Tacos",
        slug: "buffalo-cauliflower-tacos",
        description: "Spicy buffalo cauliflower wrapped in egg white wraps for a healthy twist on tacos.",
        mealType: "dinner",
        imageUrl: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe92a7_6462128b5ba944b514f5601d_r1c1akz2v2nrukrewm3vfjgrmp84t3zk.webp",
        prepTime: 20,
        cookTime: 25,
        servings: 4,
        difficulty: "medium",
        ingredients: [
          "4 EggLife Southwest wraps",
          "1 head cauliflower, cut into florets",
          "1/2 cup buffalo sauce",
          "1/4 cup Greek yogurt",
          "1/4 cup diced celery",
          "2 tbsp blue cheese crumbles"
        ],
        instructions: [
          "Preheat oven to 425°F",
          "Toss cauliflower with buffalo sauce",
          "Roast for 20-25 minutes until tender",
          "Warm wraps in microwave for 30 seconds",
          "Fill wraps with buffalo cauliflower",
          "Top with yogurt, celery, and blue cheese"
        ],
        nutrition: { calories: 140, protein: 8, carbs: 12, fat: 6 },
        tags: ["vegetarian", "gluten-free", "low-carb", "spicy"],
        productId: 6,
      },
      {
        title: "Chocolate Hazelnut Raspberry Wrap",
        slug: "chocolate-hazelnut-raspberry-wrap",
        description: "A sweet dessert wrap with chocolate hazelnut spread and fresh raspberries.",
        mealType: "dessert",
        imageUrl: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe92b1_646212ad12ceb68346b61655_2guaqywjrkd11fk31rdbvzuquan4pj13.webp",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        difficulty: "easy",
        ingredients: [
          "1 EggLife Sweet Cinnamon wrap",
          "2 tbsp chocolate hazelnut spread",
          "1/4 cup fresh raspberries",
          "1 tbsp chopped hazelnuts",
          "Powdered sugar for dusting"
        ],
        instructions: [
          "Spread chocolate hazelnut spread on wrap",
          "Add raspberries and hazelnuts",
          "Roll up gently",
          "Dust with powdered sugar",
          "Serve immediately"
        ],
        nutrition: { calories: 250, protein: 8, carbs: 18, fat: 16 },
        tags: ["vegetarian", "gluten-free", "dessert"],
        productId: 4,
      },
      {
        title: "Personal Pepperoni Pizza",
        slug: "personal-pepperoni-pizza",
        description: "Individual pizza made with egg white wrap as the crust.",
        mealType: "dinner",
        imageUrl: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe91d9_646212863bc2427ba31f028a_d6r0qpefh7zk8a2v5kccedm0gb44xv2k.webp",
        prepTime: 10,
        cookTime: 12,
        servings: 1,
        difficulty: "easy",
        ingredients: [
          "1 EggLife Original wrap",
          "1/4 cup pizza sauce",
          "1/3 cup mozzarella cheese",
          "8-10 pepperoni slices",
          "Italian seasoning"
        ],
        instructions: [
          "Preheat oven to 400°F",
          "Place wrap on baking sheet",
          "Spread pizza sauce evenly",
          "Sprinkle with cheese and pepperoni",
          "Season with Italian herbs",
          "Bake 10-12 minutes until cheese melts"
        ],
        nutrition: { calories: 290, protein: 20, carbs: 8, fat: 20 },
        tags: ["gluten-free", "low-carb", "protein-rich"],
        productId: 1,
      },
      {
        title: "Everything Bagel Dog",
        slug: "everything-bagel-dog",
        description: "Hot dog wrapped in everything bagel flavored egg white wrap.",
        mealType: "lunch",
        imageUrl: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe92ac_646212a461c0072298d5a21d_vm0xuu47zz9a3a3z7hf5772p8v7bnew4.webp",
        prepTime: 5,
        cookTime: 8,
        servings: 1,
        difficulty: "easy",
        ingredients: [
          "1 EggLife Everything Bagel wrap",
          "1 all-beef hot dog",
          "1 tbsp mustard",
          "1 tbsp ketchup",
          "2 tbsp diced onions"
        ],
        instructions: [
          "Cook hot dog according to package directions",
          "Warm wrap in microwave for 30 seconds",
          "Place hot dog in center of wrap",
          "Add mustard, ketchup, and onions",
          "Roll up and serve immediately"
        ],
        nutrition: { calories: 280, protein: 15, carbs: 6, fat: 22 },
        tags: ["gluten-free", "low-carb"],
        productId: 3,
      },
      {
        title: "Chicken Enchiladas",
        slug: "chicken-enchiladas",
        description: "Healthy chicken enchiladas using egg white wraps instead of tortillas.",
        mealType: "dinner",
        imageUrl: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe90d6_64621240bef0231c4ea2b930_h2yazavynk4p6rz3jmd66urq5tbaghk3.webp",
        prepTime: 30,
        cookTime: 25,
        servings: 6,
        difficulty: "medium",
        ingredients: [
          "6 EggLife Southwest wraps",
          "2 cups cooked shredded chicken",
          "1 cup enchilada sauce",
          "1 cup Mexican cheese blend",
          "1/4 cup diced onions",
          "2 tbsp cilantro"
        ],
        instructions: [
          "Preheat oven to 375°F",
          "Mix chicken with half the enchilada sauce",
          "Fill each wrap with chicken mixture",
          "Roll and place seam-side down in baking dish",
          "Top with remaining sauce and cheese",
          "Bake 20-25 minutes until heated through",
          "Garnish with cilantro"
        ],
        nutrition: { calories: 220, protein: 25, carbs: 6, fat: 10 },
        tags: ["gluten-free", "low-carb", "protein-rich", "mexican"],
        productId: 6,
      },
      {
        title: "Pasta with Homemade Bolognese",
        slug: "pasta-with-homemade-bolognese",
        description: "Egg white wrap pasta with rich homemade bolognese sauce.",
        mealType: "dinner",
        imageUrl: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe8ca4_64621259764f82c8642eaacc_g037rkp4j90ug56284gr8z0gpdaw7yzj.webp",
        prepTime: 15,
        cookTime: 45,
        servings: 4,
        difficulty: "medium",
        ingredients: [
          "4 EggLife Original wraps, cut into strips",
          "1 lb ground beef",
          "1 onion, diced",
          "2 cloves garlic, minced",
          "1 can crushed tomatoes",
          "2 tbsp tomato paste",
          "1/2 cup red wine",
          "Fresh basil and parmesan"
        ],
        instructions: [
          "Cut wraps into fettuccine-like strips",
          "Brown ground beef in large pan",
          "Add onion and garlic, cook until soft",
          "Stir in tomato paste and cook 2 minutes",
          "Add wine, tomatoes, and seasonings",
          "Simmer 30 minutes",
          "Quickly sauté wrap strips for 2-3 minutes",
          "Serve with bolognese and parmesan"
        ],
        nutrition: { calories: 340, protein: 32, carbs: 12, fat: 18 },
        tags: ["gluten-free", "low-carb", "protein-rich", "italian"],
        productId: 1,
      }
    ];

    recipesData.forEach(recipe => {
      const id = this.currentRecipeId++;
      this.recipes.set(id, { ...recipe, id });
    });
  }

  // Products
  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProductById(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async getProductBySlug(slug: string): Promise<Product | undefined> {
    return Array.from(this.products.values()).find(product => product.slug === slug);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = this.currentProductId++;
    const product: Product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }

  // Recipes
  async getRecipes(mealType?: string): Promise<Recipe[]> {
    const allRecipes = Array.from(this.recipes.values());
    if (mealType) {
      return allRecipes.filter(recipe => 
        recipe.mealType.toLowerCase() === mealType.toLowerCase()
      );
    }
    return allRecipes;
  }

  async getRecipeById(id: number): Promise<Recipe | undefined> {
    return this.recipes.get(id);
  }

  async getRecipeBySlug(slug: string): Promise<Recipe | undefined> {
    return Array.from(this.recipes.values()).find(recipe => recipe.slug === slug);
  }

  async createRecipe(insertRecipe: InsertRecipe): Promise<Recipe> {
    const id = this.currentRecipeId++;
    const recipe: Recipe = { ...insertRecipe, id };
    this.recipes.set(id, recipe);
    return recipe;
  }

  // Newsletter
  async subscribeToNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    const id = this.currentNewsletterId++;
    const newsletter: Newsletter = { 
      ...insertNewsletter, 
      id, 
      subscribedAt: new Date().toISOString() 
    };
    this.newsletters.set(id, newsletter);
    return newsletter;
  }

  async getNewsletterSubscriptions(): Promise<Newsletter[]> {
    return Array.from(this.newsletters.values());
  }
}

export const storage = new MemStorage();
