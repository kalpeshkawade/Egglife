import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["/api/products"],
  });

  // Filter to show only main wrap products (not grab-and-go)
  const wrapProducts = products.filter(product => product.category === "wrap");

  useEffect(() => {
    if (wrapProducts.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === wrapProducts.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [wrapProducts.length]);

  if (isLoading) {
    return (
      <div className="relative max-w-4xl mx-auto">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-primary"></div>
        </div>
      </div>
    );
  }

  if (wrapProducts.length === 0) {
    return (
      <div className="relative max-w-4xl mx-auto">
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-medium">No products available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="flex justify-center space-x-4 overflow-hidden">
        {wrapProducts.map((product, index) => (
          <div
            key={product.id}
            className={`transition-all duration-500 ${
              index === currentIndex 
                ? "transform scale-110 opacity-100" 
                : "transform scale-90 opacity-70"
            }`}
          >
            <img 
              src={product.imageUrl} 
              alt={`${product.name} Egg White Wraps`} 
              className="h-64 object-contain"
            />
          </div>
        ))}
      </div>
      
      {/* Carousel indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {wrapProducts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex 
                ? "bg-orange-primary" 
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
