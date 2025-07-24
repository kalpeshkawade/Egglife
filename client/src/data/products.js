// Product data for EggLife website
// This centralizes product information for easier maintenance

export const productCategories = {
  WRAP: 'wrap',
  GRAB_AND_GO: 'grab-and-go'
};

export const productFlavors = {
  ORIGINAL: 'original',
  SOUTHWEST: 'southwest',
  EVERYTHING_BAGEL: 'everything-bagel',
  ROASTED_GARLIC_HERB: 'roasted-garlic-herb',
  SWEET_CINNAMON: 'sweet-cinnamon',
  GARDEN_SALSA: 'garden-salsa'
};

export const nutritionData = {
  // Standard wrap nutrition (most flavors)
  standard: {
    carbs: 1,
    protein: 5,
    calories: 25,
    serving_size: "1 wrap"
  },
  // Sweet cinnamon has slightly more carbs
  sweetCinnamon: {
    carbs: 2,
    protein: 5,
    calories: 30,
    serving_size: "1 wrap"
  },
  // Grab & go products have more protein and calories
  grabAndGoRGH: {
    carbs: 3,
    protein: 12,
    calories: 180,
    serving_size: "1 wrap"
  },
  grabAndGoEB: {
    carbs: 3,
    protein: 15,
    calories: 160,
    serving_size: "1 wrap"
  }
};

export const productImages = {
  original: {
    front: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67e17e6ef78f84f6fb1b73ad_egglife-original-wrap-front.webp",
    hover: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe8c0d_wrap-01.webp"
  },
  roastedGarlicHerb: {
    front: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67e17d45f3f5d43d2fbccf96_egglife-roasted-garlic-herb-wrap-front.webp",
    hover: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe944a_rgh-wrap-hover_v2.webp"
  },
  everythingBagel: {
    front: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67e17e0cf1c15b8775a11ca9_egglife-everything-wrap-front.webp",
    hover: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe9449_ec-wrap-hover_v2.webp"
  },
  sweetCinnamon: {
    front: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67e17d2ca9260403af628532_egglife-cinnamon-wrap-front.webp",
    hover: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe8c0b_wrap-05.webp"
  },
  gardenSalsa: {
    front: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67e17d1e43bad76657f1fed9_egglife-garden-salsa-wrap-front.webp",
    hover: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe93ba_garden-salsa-wrap.webp"
  },
  southwest: {
    front: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67e17d69c67c308cb11d1369_egglife-southwest-wrap-front.webp",
    hover: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe8c07_wrap-03.webp"
  },
  grabGoRGH: {
    front: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/684c625bc594f4f46e88d72f_grab-n-go-roasted-garlic-herb-front-smaller.webp",
    hover: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/6847b45e92b57e2bc4a7cfca_grab-n-go-roasted-garlic-herb-final.webp"
  },
  grabGoEB: {
    front: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/684c624bf33900b588262b2b_grab-n-go-everything-bagel-front-smaller.webp",
    hover: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/6847b4730504c168d7256b46_grab-n-go-everything-bagel-final.webp"
  }
};

export const dietaryBadges = [
  'Gluten Free',
  'Keto Friendly', 
  'Low Carb',
  'High Protein',
  'Grain Free',
  'Kosher',
  'Vegetarian',
  'Dairy Free'
];

// Product brand colors matching the original website with authentic hex codes
// Colors from original EggLife website: #FFCC12, #9FCB30, #00A3D8, #AF2650, #F87402, #7CC22D
export const productColors = {
  original: {
    primary: '#AF2650',
    secondary: '#AF2650', 
    background: '#AF2650'
  },
  southwest: {
    primary: '#F87402',
    secondary: '#F87402',
    background: '#F87402'
  },
  everythingBagel: {
    primary: '#00A3D8',
    secondary: '#00A3D8',
    background: '#00A3D8'
  },
  roastedGarlicHerb: {
    primary: '#9FCB30',
    secondary: '#9FCB30',
    background: '#9FCB30'
  },
  sweetCinnamon: {
    primary: '#FFCC12',
    secondary: '#FFCC12',
    background: '#FFCC12'
  },
  gardenSalsa: {
    primary: '#AF2650',
    secondary: '#AF2650',
    background: '#AF2650'
  }
};

// Helper function to get product by slug
export const getProductBySlug = (products, slug) => {
  return products.find(product => product.slug === slug);
};

// Helper function to filter products by category
export const getProductsByCategory = (products, category) => {
  return products.filter(product => product.category === category);
};

// Helper function to get featured products (first 4 wraps)
export const getFeaturedProducts = (products) => {
  return products
    .filter(product => product.category === productCategories.WRAP)
    .slice(0, 4);
};
