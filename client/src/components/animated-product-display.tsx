import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { productColors } from "../data/products.js";
import { getProductImages } from "../assets/images/products/index";

export default function AnimatedProductDisplay({ currentProductIndex }) {
  const [currentIndex, setCurrentIndex] = useState(currentProductIndex || 0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["/api/products"],
  });

  // Filter only wrap products that have matching brand colors
  // Map product slugs to color keys (matching database slugs)
  const slugToColorMap = {
    'original': 'original',
    'southwest': 'southwest', 
    'everything-bagel': 'everything-bagel',
    'roasted-garlic-herb': 'roasted-garlic-herb',
    'sweet-cinnamon': 'sweet-cinnamon',
    'garden-salsa': 'garden-salsa'
  };
  
  const wrapProducts = products.filter(product => 
    product.category === "wrap" && slugToColorMap[product.slug]
  );

  // Sync with hero section product index
  useEffect(() => {
    if (currentProductIndex !== undefined && currentProductIndex !== currentIndex) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(currentProductIndex);
        setIsAnimating(false);
      }, 400);
    }
  }, [currentProductIndex, currentIndex]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="relative">
          <div className="w-64 h-64 bg-gray-200 rounded-xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-primary"></div>
          </div>
        </div>
      </div>
    );
  }

  if (wrapProducts.length === 0) {
    return (
      <div className="flex justify-center items-center h-96">
        <p className="text-gray-medium">No products available</p>
      </div>
    );
  }

  const currentProduct = wrapProducts[currentIndex];
  const colorKey = slugToColorMap[currentProduct?.slug] || 'original';
  const currentColors = productColors[colorKey] || productColors.original;
  const images = currentProduct ? getProductImages(currentProduct.slug) : null;

  return (
    <div 
      className="relative w-screen transition-all duration-1000 ease-in-out"
      style={{
        backgroundColor: currentColors.background,
        marginLeft: 'calc(-50vw + 50%)',
        minHeight: '60vh'
      }}
    >
      <div className="flex justify-center items-center relative overflow-visible min-h-[50vh] py-8">
      
      {/* Single Product Display */}
      <div className="relative w-full mx-auto z-10">
        {/* Product container */}
        <div className="relative h-[400px] flex items-center justify-center">
          
          <div 
            key={`${currentProduct.id}-${currentIndex}`}
            className={`relative z-10 transition-all duration-800 ease-out ${
              isAnimating 
                ? "opacity-0 transform scale-95 translate-y-8" 
                : "opacity-100 transform scale-100 translate-y-0 animate-product-reveal"
            }`}
          >
            {/* Larger product image positioned so half overflows outside semicircle */}
            <div className="relative animate-float">
              <div className="flex items-end justify-center relative">
                <img 
                  src={images?.front || currentProduct.imageUrl} 
                  alt={`${currentProduct.name} Egg White Wraps`} 
                  className="w-96 h-[26rem] object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105 relative z-20"
                  style={{ 
                    transform: 'translateY(20px)' // Reduced translation to prevent cutting
                  }}
                />
              </div>
            </div>


          </div>
        </div>

      </div>
      
      {/* White semicircle at bottom of section - matching original website */}
      <div 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[100vw] h-[20vh] bg-white shadow-xl transition-all duration-1000 ease-in-out z-0"
        style={{
          clipPath: 'ellipse(50% 100% at 50% 100%)',
          boxShadow: `0 -15px 40px ${currentColors.primary}10, 0 0 80px ${currentColors.background}15`
        }}
      />
      </div>
    </div>
  );
}