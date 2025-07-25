// Product images - imported locally for faster loading
import originalFront from './original-front.webp';
import originalHover from './original-hover.webp';
import roastedGarlicHerbFront from './roasted-garlic-herb-front.webp';
import roastedGarlicHerbHover from './roasted-garlic-herb-hover.webp';
import everythingBagelFront from './everything-bagel-front.webp';
import everythingBagelHover from './everything-bagel-hover.webp';
import sweetCinnamonFront from './sweet-cinnamon-front.webp';
import sweetCinnamonHover from './sweet-cinnamon-hover.webp';
import gardenSalsaFront from './garden-salsa-front.webp';
import gardenSalsaHover from './garden-salsa-hover.webp';
import southwestFront from './southwest-front.webp';
import southwestHover from './southwest-hover.webp';

export const productImages = {
  original: {
    front: originalFront,
    hover: originalHover
  },
  'roasted-garlic-herb': {
    front: roastedGarlicHerbFront,
    hover: roastedGarlicHerbHover
  },
  'everything-bagel': {
    front: everythingBagelFront,
    hover: everythingBagelHover
  },
  'sweet-cinnamon': {
    front: sweetCinnamonFront,
    hover: sweetCinnamonHover
  },
  'garden-salsa': {
    front: gardenSalsaFront,
    hover: gardenSalsaHover
  },
  southwest: {
    front: southwestFront,
    hover: southwestHover
  }
};

// Helper function to get product images by slug
export const getProductImages = (slug: string) => {
  return productImages[slug as keyof typeof productImages] || productImages.original;
};