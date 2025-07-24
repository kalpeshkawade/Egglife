import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { productColors } from "../data/products.js";

export default function AnimatedProductDisplay() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["/api/products"],
  });

  // Filter to show only main wrap products (not grab-and-go)
  const wrapProducts = products.filter(product => product.category === "wrap");

  // Randomly rotate products with animation
  useEffect(() => {
    if (wrapProducts.length === 0) return;
    
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      // Wait for fade out, then switch product
      setTimeout(() => {
        setCurrentIndex((prevIndex) => {
          let nextIndex;
          do {
            nextIndex = Math.floor(Math.random() * wrapProducts.length);
          } while (nextIndex === prevIndex && wrapProducts.length > 1);
          return nextIndex;
        });
        setIsAnimating(false);
      }, 400); // Half of animation duration
      
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [wrapProducts.length]);

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
    <div className="flex justify-center items-center relative overflow-hidden">
      {/* Dynamic background color that changes with product */}
      <div 
        className="absolute inset-0 transition-all duration-1000 ease-in-out"
        style={{
          background: `linear-gradient(135deg, ${currentColors.background} 0%, transparent 70%)`
        }}
      />
      
      {/* Single Product Display */}
      <div className="relative max-w-4xl mx-auto z-10">
        {/* White semicircle background matching original website */}
        <div className="relative h-[500px] flex items-center justify-center">
          <div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-[600px] h-[300px] bg-white shadow-2xl transition-all duration-1000 ease-in-out"
            style={{
              clipPath: 'ellipse(50% 100% at 50% 100%)',
              boxShadow: `0 -20px 60px ${currentColors.primary}20, 0 0 120px ${currentColors.background}`
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
            {/* Product image centered in semicircle, extending slightly above */}
            <div className="relative animate-float">
              <div className="flex items-center justify-center">
                <img 
                  src={currentProduct.imageUrl} 
                  alt={`${currentProduct.name} Egg White Wraps`} 
                  className="w-80 h-96 object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
                  style={{ marginBottom: '2rem' }}
                />
              </div>
            </div>

            {/* Product name positioned below semicircle */}
            <div className="text-center mt-12">
              <h3 
                className="text-3xl font-bold mb-3 animate-text-fade-in transition-colors duration-700"
                style={{ color: currentColors.primary }}
              >
                {currentProduct.name}
              </h3>
              <p className="text-gray-medium text-base leading-relaxed animate-text-fade-in delay-100 max-w-md mx-auto">
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
  );
}