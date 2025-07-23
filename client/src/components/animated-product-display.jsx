import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

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

  return (
    <div className="flex justify-center items-center relative">
      {/* Single Product Display */}
      <div className="relative max-w-sm mx-auto">
        <div 
          key={`${currentProduct.id}-${currentIndex}`}
          className={`relative bg-white rounded-2xl p-8 shadow-2xl border-2 border-orange-primary/20 transition-all duration-800 ease-out ${
            isAnimating 
              ? "opacity-0 transform scale-95 translate-y-8" 
              : "opacity-100 transform scale-100 translate-y-0 animate-product-reveal"
          }`}
        >
          {/* Shimmer effect background */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer"></div>
          </div>
          
          {/* Floating glow effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-orange-400/20 via-orange-primary/30 to-orange-400/20 rounded-2xl blur-xl animate-pulse"></div>
          
          {/* Product container */}
          <div className="relative z-10">
            {/* Product image with floating animation */}
            <div className="relative mb-6 animate-float">
              <img 
                src={currentProduct.imageUrl} 
                alt={`${currentProduct.name} Egg White Wraps`} 
                className="w-full h-64 object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
              />
              
              {/* Sparkle effects */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-orange-primary rounded-full animate-pulse"></div>
              <div className="absolute bottom-6 left-6 w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-500"></div>
              <div className="absolute top-1/2 left-2 w-1.5 h-1.5 bg-green-accent rounded-full animate-pulse delay-1000"></div>
            </div>

            {/* Product name with enhanced typography */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-dark mb-2 animate-text-fade-in">
                {currentProduct.name}
              </h3>
              <p className="text-gray-medium text-sm leading-relaxed animate-text-fade-in delay-100">
                {currentProduct.description}
              </p>
            </div>

            {/* Premium badge */}
            <div className="absolute -top-3 -right-3 bg-orange-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
              Premium
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
                  ? "w-8 h-3 bg-orange-primary shadow-lg" 
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400 hover:scale-110"
              }`}
            >
              {index === currentIndex && (
                <div className="w-full h-full bg-orange-primary/50 rounded-full animate-pulse"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}