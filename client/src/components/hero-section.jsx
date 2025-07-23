import { useState, useEffect } from "react";
import { Link } from "wouter";
import ProductCarousel from "./product-carousel";

export default function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const benefitTexts = [
    { text: "extra protein", color: "text-orange-primary" },
    { text: "gluten free", color: "text-green-accent" },
    { text: "low carb", color: "text-blue-500" },
    { text: "eating better", color: "text-purple-500" },
    { text: "minding macros", color: "text-pink-500" }
  ];

  // Rotate text randomly in sync with product carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => {
        let nextIndex;
        do {
          nextIndex = Math.floor(Math.random() * benefitTexts.length);
        } while (nextIndex === prevIndex && benefitTexts.length > 1);
        return nextIndex;
      });
    }, 4000); // Match carousel timing

    return () => clearInterval(interval);
  }, [benefitTexts.length]);

  return (
    <section className="bg-gradient-to-r from-orange-50 to-yellow-50 py-16 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-dark mb-6">
            The Perfect Wrap<sup className="text-sm">®</sup>
          </h1>
          <div className="text-xl lg:text-2xl text-gray-medium mb-8 space-y-2">
            <div>for</div>
            <div className="h-8 flex items-center justify-center">
              <span 
                key={currentTextIndex}
                className={`font-semibold ${benefitTexts[currentTextIndex].color} animate-text-fade-in`}
              >
                {benefitTexts[currentTextIndex].text}
              </span>
            </div>
          </div>
          <p className="text-lg text-gray-medium mb-8">Wraps made with egg whites, not flour.</p>
          <Link href="/where-to-buy">
            <button className="relative bg-orange-primary text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 overflow-hidden group">
              <span className="relative z-10">Find where to buy</span>
              <div className="absolute inset-0 bg-orange-600 transform translate-x-full transition-transform duration-300 group-hover:translate-x-0"></div>
            </button>
          </Link>
        </div>

        <ProductCarousel />
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-yellow-200 rounded-full opacity-30 animate-bounce delay-1000"></div>
      <div className="absolute top-1/2 right-10 w-12 h-12 bg-green-200 rounded-full opacity-25 animate-bounce delay-500"></div>
    </section>
  );
}
