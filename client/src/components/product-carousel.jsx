import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["/api/products"],
  });

  // Filter to show only main wrap products (not grab-and-go)
  const wrapProducts = products.filter(product => product.category === "wrap");

  // Auto-rotate the main carousel
  useEffect(() => {
    if (wrapProducts.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === wrapProducts.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [wrapProducts.length]);

  // Continuous highlighting animation for individual products
  useEffect(() => {
    if (wrapProducts.length === 0) return;
    
    const highlightInterval = setInterval(() => {
      setHighlightedIndex((prevIndex) => 
        prevIndex === wrapProducts.length - 1 ? 0 : prevIndex + 1
      );
    }, 1500); // Faster highlighting cycle

    return () => clearInterval(highlightInterval);
  }, [wrapProducts.length]);

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
      <div className="flex justify-center space-x-6 overflow-hidden">
        {wrapProducts.map((product, index) => (
          <div
            key={product.id}
            className={`relative transition-all duration-700 ease-in-out ${
              index === currentIndex 
                ? "transform scale-110 opacity-100 z-10" 
                : "transform scale-90 opacity-75"
            }`}
          >
            {/* Highlighting ring animation */}
            <div 
              className={`absolute inset-0 rounded-lg transition-all duration-500 ${
                index === highlightedIndex
                  ? "ring-4 ring-orange-primary ring-opacity-60 shadow-2xl animate-pulse"
                  : ""
              }`}
            />
            
            {/* Glowing effect for highlighted product */}
            <div 
              className={`absolute inset-0 rounded-lg transition-all duration-500 ${
                index === highlightedIndex
                  ? "bg-gradient-to-r from-orange-100 to-yellow-100 opacity-30 blur-sm"
                  : ""
              }`}
            />
            
            {/* Product image */}
            <div className="relative bg-white rounded-lg p-4 shadow-lg">
              <img 
                src={product.imageUrl} 
                alt={`${product.name} Egg White Wraps`} 
                className={`h-64 object-contain transition-all duration-500 ${
                  index === highlightedIndex ? "brightness-110 contrast-110" : ""
                }`}
              />
              
              {/* Product name badge */}
              <div className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-sm font-medium transition-all duration-500 ${
                index === highlightedIndex 
                  ? "bg-orange-primary text-white shadow-lg scale-105" 
                  : "bg-gray-100 text-gray-700"
              }`}>
                {product.name}
              </div>

              {/* Sparkle effect for highlighted product */}
              {index === highlightedIndex && (
                <>
                  <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                  <div className="absolute top-8 left-4 w-1.5 h-1.5 bg-orange-400 rounded-full animate-ping delay-300"></div>
                  <div className="absolute bottom-12 right-6 w-1 h-1 bg-yellow-300 rounded-full animate-ping delay-700"></div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Enhanced carousel indicators with animation */}
      <div className="flex justify-center mt-8 space-x-3">
        {wrapProducts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`relative transition-all duration-300 ${
              index === currentIndex 
                ? "w-8 h-3 bg-orange-primary rounded-full" 
                : "w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400"
            }`}
          >
            {index === currentIndex && (
              <div className="absolute inset-0 bg-orange-primary rounded-full animate-pulse"></div>
            )}
          </button>
        ))}
      </div>

      {/* Product highlighting legend */}
      <div className="text-center mt-4">
        <p className="text-sm text-gray-medium">
          <span className="inline-block w-2 h-2 bg-orange-primary rounded-full mr-2 animate-pulse"></span>
          Currently highlighting: {wrapProducts[highlightedIndex]?.name}
        </p>
      </div>
    </div>
  );
}
