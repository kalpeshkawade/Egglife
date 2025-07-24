import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { productColors } from "../data/products.js";

export default function AnimatedProductDisplay({ currentProductIndex }) {
  const [currentIndex, setCurrentIndex] = useState(currentProductIndex || 0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["/api/products"],
  });

  // Filter only wrap products that have matching brand colors
  const wrapProducts = products.filter(product => 
    product.category === "wrap" && productColors[product.slug]
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
  const currentColors = productColors[currentProduct?.slug] || productColors.original;

  return (
    <div 
      className="relative w-screen transition-all duration-1000 ease-in-out"
      style={{
        backgroundColor: currentColors.background,
        marginLeft: 'calc(-50vw + 50%)',
        minHeight: '80vh'
      }}
    >
      <div className="flex justify-center items-end relative overflow-hidden min-h-[80vh]">
      
      {/* Single Product Display */}
      <div className="relative w-full mx-auto z-10">
        {/* Large white semicircle background from bottom matching original website */}
        <div className="relative h-[600px] flex items-end justify-center">
          <div 
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[150vw] h-[75vh] bg-white shadow-2xl transition-all duration-1000 ease-in-out"
            style={{
              clipPath: 'ellipse(50% 100% at 50% 100%)',
              boxShadow: `0 -40px 120px ${currentColors.primary}15, 0 0 200px ${currentColors.background}20`
            }}
          />
          
          <div 
            key={`${currentProduct.id}-${currentIndex}`}
            className={`relative z-10 transition-all duration-800 ease-out ${
              isAnimating 
                ? "opacity-0 transform scale-95 translate-y-8" 
                : "opacity-100 transform scale-100 translate-y-0 animate-product-reveal"
            }`}
          >
            {/* Product image positioned above semicircle as in original website */}
            <div className="relative animate-float">
              <div className="flex items-end justify-center relative pb-20">
                <img 
                  src={currentProduct.imageUrl} 
                  alt={`${currentProduct.name} Egg White Wraps`} 
                  className="w-96 h-[28rem] object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105 relative z-20"
                  style={{ 
                    transform: 'translateY(-60px)' // Makes image sit above semicircle
                  }}
                />
              </div>
            </div>

            {/* Product name positioned on the semicircle */}
            <div className="text-center absolute bottom-32 left-1/2 transform -translate-x-1/2 z-30">
              <h3 
                className="text-4xl font-bold mb-4 animate-text-fade-in transition-colors duration-700"
                style={{ color: currentColors.primary }}
              >
                {currentProduct.name}
              </h3>
              <p className="text-gray-medium text-lg leading-relaxed animate-text-fade-in delay-100 max-w-lg mx-auto">
                {currentProduct.description}
              </p>
            </div>
          </div>
        </div>

        {/* Product indicator dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {wrapProducts.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (index !== currentIndex) {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setCurrentIndex(index);
                    setIsAnimating(false);
                  }, 400);
                }
              }}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex 
                  ? "w-8 h-3 shadow-lg" 
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400 hover:scale-110"
              }`}
              style={index === currentIndex ? {
                backgroundColor: currentColors.primary,
                boxShadow: `0 4px 12px ${currentColors.primary}40`
              } : {}}
            >
              {index === currentIndex && (
                <div 
                  className="w-full h-full rounded-full animate-pulse"
                  style={{ backgroundColor: `${currentColors.primary}50` }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}