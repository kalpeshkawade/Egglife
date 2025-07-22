// Recipe data for EggLife website
// This centralizes recipe information for easier maintenance

export const mealTypes = {
  BREAKFAST: 'breakfast',
  LUNCH: 'lunch', 
  DINNER: 'dinner',
  SNACK: 'snack',
  APPETIZER: 'appetizer',
  DESSERT: 'dessert'
};

export const difficultyLevels = {
  EASY: 'easy',
  MEDIUM: 'medium',
  HARD: 'hard'
};

export const dietaryTags = {
  GLUTEN_FREE: 'gluten-free',
  LOW_CARB: 'low-carb',
  PROTEIN_RICH: 'protein-rich',
  VEGETARIAN: 'vegetarian',
  KETO: 'keto',
  SPICY: 'spicy',
  MEXICAN: 'mexican',
  ITALIAN: 'italian',
  DESSERT: 'dessert'
};

export const recipeImages = {
  turkeyPinwheels: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe8cdf_646211cfa349c349937b8321_dww882thx1gjn8n9ufnfdeb3cznaj2k1.webp",
  turkeyBaconClub: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe90c3_64621254b3a33482303a77a2_4d357unh8ha4zb6rdvprv2j4huxra42c.webp",
  buffaloTacos: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe92a7_6462128b5ba944b514f5601d_r1c1akz2v2nrukrewm3vfjgrmp84t3zk.webp",
  chocolateWrap: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe92b1_646212ad12ceb68346b61655_2guaqywjrkd11fk31rdbvzuquan4pj13.webp",
  pepperoniPizza: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe91d9_646212863bc2427ba31f028a_d6r0qpefh7zk8a2v5kccedm0gb44xv2k.webp",
  bagelDog: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe92ac_646212a461c0072298d5a21d_vm0xuu47zz9a3a3z7hf5772p8v7bnew4.webp",
  chickenEnchiladas: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe90d6_64621240bef0231c4ea2b930_h2yazavynk4p6rz3jmd66urq5tbaghk3.webp",
  pastaBolognese: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe8ca4_64621259764f82c8642eaacc_g037rkp4j90ug56284gr8z0gpdaw7yzj.webp"
};

// Helper function to get recipes by meal type
export const getRecipesByMealType = (recipes, mealType) => {
  if (!mealType) return recipes;
  return recipes.filter(recipe => 
    recipe.mealType.toLowerCase() === mealType.toLowerCase()
  );
};

// Helper function to get recipes by difficulty
export const getRecipesByDifficulty = (recipes, difficulty) => {
  return recipes.filter(recipe => recipe.difficulty === difficulty);
};

// Helper function to get recipes by tag
export const getRecipesByTag = (recipes, tag) => {
  return recipes.filter(recipe => 
    recipe.tags && recipe.tags.includes(tag)
  );
};

// Helper function to get featured recipes (for carousels)
export const getFeaturedRecipes = (recipes, count = 8) => {
  return recipes.slice(0, count);
};

// Helper function to get recipe by slug
export const getRecipeBySlug = (recipes, slug) => {
  return recipes.find(recipe => recipe.slug === slug);
};

// Helper function to calculate total time
export const getTotalTime = (recipe) => {
  return recipe.prepTime + (recipe.cookTime || 0);
};

// Helper function to get recipes for a specific product
export const getRecipesForProduct = (recipes, productId) => {
  return recipes.filter(recipe => recipe.productId === productId);
};

// Recipe categories for filtering
export const recipeCategories = [
  { label: "All", value: "" },
  { label: "Breakfast", value: mealTypes.BREAKFAST },
  { label: "Lunch", value: mealTypes.LUNCH },
  { label: "Dinner", value: mealTypes.DINNER },
  { label: "Snack", value: mealTypes.SNACK },
  { label: "Appetizer", value: mealTypes.APPETIZER },
  { label: "Dessert", value: mealTypes.DESSERT }
];

// Common ingredients used across recipes
export const commonIngredients = {
  EGGLIFE_ORIGINAL: "1 EggLife Original wrap",
  EGGLIFE_SOUTHWEST: "1 EggLife Southwest wrap", 
  EGGLIFE_EVERYTHING: "1 EggLife Everything Bagel wrap",
  EGGLIFE_CINNAMON: "1 EggLife Sweet Cinnamon wrap",
  CREAM_CHEESE: "cream cheese, softened",
  TURKEY_SLICES: "deli turkey slices",
  SHREDDED_CHEESE: "shredded cheese",
  SPINACH: "fresh spinach leaves"
};
