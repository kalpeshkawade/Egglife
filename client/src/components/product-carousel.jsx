import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animatingIndex, setAnimatingIndex] = useState(0);
  
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["/api/products"],
  });

  // Filter to show only main wrap products (not grab-and-go)
  const wrapProducts = products.filter(product => product.category === "wrap");

  // Auto-rotate carousel with staggered animation
  useEffect(() => {
    if (wrapProducts.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex === wrapProducts.length - 1 ? 0 : prevIndex + 1;
        // Trigger animation slightly before the main transition
        setTimeout(() => setAnimatingIndex(nextIndex), 100);
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [wrapProducts.length]);

  // Initialize animating index
  useEffect(() => {
    setAnimatingIndex(currentIndex);
  }, [currentIndex]);

  if (isLoading) {
    return (
      <div className="relative max-w-5xl mx-auto">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-primary"></div>
        </div>
      </div>
    );
  }

  if (wrapProducts.length === 0) {
    return (
      <div className="relative max-w-5xl mx-auto">
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-medium">No products available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="flex justify-center space-x-6 overflow-visible">
        {wrapProducts.map((product, index) => (
          <div
            key={product.id}
            className={`relative transition-all duration-700 ease-out ${
              index === currentIndex 
                ? "transform scale-110 opacity-100 z-20 translate-y-0" 
                : "transform scale-90 opacity-50 translate-y-4"
            }`}
            style={{
              transitionDelay: index === animatingIndex ? `${index * 100}ms` : '0ms'
            }}
          >
            {/* Product container with highlight effect */}
            <div className={`relative bg-white rounded-xl p-6 transition-all duration-500 ease-out ${
              index === currentIndex 
                ? "shadow-2xl ring-2 ring-orange-primary/20 ring-offset-4" 
                : "shadow-md hover:shadow-lg"
            }`}>
              
              {/* Animated product image */}
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={product.imageUrl} 
                  alt={`${product.name} Egg White Wraps`} 
                  className={`h-64 object-contain transition-all duration-500 ease-out ${
                    index === currentIndex 
                      ? "scale-105 brightness-110" 
                      : "scale-100 brightness-95"
                  }`}
                />
                
                {/* Subtle glow effect for active product */}
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-50/30 to-transparent opacity-0 animate-fade-in"></div>
                )}
              </div>

              {/* Product name with staggered animation */}
              <div className={`mt-4 text-center transition-all duration-300 ease-out ${
                index === currentIndex 
                  ? "transform translate-y-0 opacity-100" 
                  : "transform translate-y-2 opacity-70"
              }`}
              style={{
                transitionDelay: index === currentIndex ? '200ms' : '0ms'
              }}>
                <h3 className={`font-semibold text-sm ${
                  index === currentIndex ? 'text-orange-primary' : 'text-gray-600'
                }`}>
                  {product.name}
                </h3>
              </div>

              {/* Highlight accent */}
              {index === currentIndex && (
                <div className="absolute top-2 right-2 w-3 h-3 bg-orange-primary rounded-full animate-pulse"></div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Enhanced carousel indicators */}
      <div className="flex justify-center mt-8 space-x-3">
        {wrapProducts.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setAnimatingIndex(index);
            }}
            className={`relative transition-all duration-300 ease-out ${
              index === currentIndex 
                ? "w-8 h-3 bg-orange-primary rounded-full shadow-lg" 
                : "w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400 hover:scale-110"
            }`}
          >
            {index === currentIndex && (
              <div className="absolute inset-0 bg-orange-primary/50 rounded-full animate-pulse"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
