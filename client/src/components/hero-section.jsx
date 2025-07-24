import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import AnimatedProductDisplay from "./animated-product-display";
import { productColors } from "../data/products.js";

export default function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  
  const { data: products = [] } = useQuery({
    queryKey: ["/api/products"],
  });

  // Filter only wrap products that have matching brand colors
  // Map product slugs to color keys
  const slugToColorMap = {
    'original-wrap': 'original',
    'southwest-wrap': 'southwest', 
    'everything-bagel-wrap': 'everything-bagel',
    'roasted-garlic-herb-wrap': 'roasted-garlic-herb',
    'sweet-cinnamon-wrap': 'sweet-cinnamon',
    'garden-salsa-wrap': 'garden-salsa'
  };
  
  const wrapProducts = products.filter(product => 
    product.category === "wrap" && slugToColorMap[product.slug]
  );
  
  const benefitTexts = [
    { text: "extra protein", color: "text-orange-primary" },
    { text: "gluten free", color: "text-green-accent" },
    { text: "low carb", color: "text-blue-500" },
    { text: "eating better", color: "text-purple-500" },
    { text: "minding macros", color: "text-pink-500" }
  ];

  // Rotate text and product randomly in sync
  useEffect(() => {
    if (wrapProducts.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => {
        let nextIndex;
        do {
          nextIndex = Math.floor(Math.random() * benefitTexts.length);
        } while (nextIndex === prevIndex && benefitTexts.length > 1);
        return nextIndex;
      });
      
      setCurrentProductIndex((prevIndex) => {
        let nextIndex;
        do {
          nextIndex = Math.floor(Math.random() * wrapProducts.length);
        } while (nextIndex === prevIndex && wrapProducts.length > 1);
        return nextIndex;
      });
    }, 4000); // Match product display timing

    return () => clearInterval(interval);
  }, [benefitTexts.length, wrapProducts.length]);

  // Get current product colors for background
  const currentProduct = wrapProducts[currentProductIndex];
  const colorKey = slugToColorMap[currentProduct?.slug] || 'original';
  const currentColors = productColors[colorKey] || productColors.original;

  return (
    <section 
      className="relative overflow-hidden transition-all duration-1000 ease-in-out"
      style={{ backgroundColor: currentColors.background }}
    >
      {/* Upper section with same background color as product animation for seamless transition */}
      <div 
        className="relative transition-all duration-1000 ease-in-out"
        style={{ backgroundColor: currentColors.background }}
      >
        <div className="py-8 lg:py-10">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-6">
              <div className="space-y-4 mb-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-gray-dark relative">
                  <span style={{ mixBlendMode: 'multiply' }}>The Perfect Wrap<sup className="text-sm md:text-lg">®</sup></span>
                </h1>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-dark flex flex-wrap items-center justify-center gap-x-2 md:gap-x-4">
                  <span>for</span>
                  <span 
                    key={currentTextIndex}
                    className={`${benefitTexts[currentTextIndex].color} animate-text-fade-in`}
                  >
                    {benefitTexts[currentTextIndex].text}
                  </span>
                </div>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-medium mb-10 relative px-4" style={{ mixBlendMode: 'multiply' }}>Wraps made with egg whites, not flour.</p>
              <Link href="/where-to-buy">
                <button className="group relative bg-orange-primary text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden mx-4">
                  <span className="relative z-10 flex">
                    {['F', 'i', 'n', 'd', ' ', 'w', 'h', 'e', 'r', 'e', ' ', 't', 'o', ' ', 'b', 'u', 'y'].map((letter, index) => (
                      <span
                        key={index}
                        className="inline-block transition-all duration-500 ease-in-out group-hover:animate-wavy-text"
                        style={{ 
                          animationDelay: `${index * 0.05}s`,
                          animationDuration: '1.2s',
                          animationIterationCount: 'infinite'
                        }}
                      >
                        {letter === ' ' ? '\u00A0' : letter}
                      </span>
                    ))}
                  </span>
                  
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
        
      <AnimatedProductDisplay currentProductIndex={currentProductIndex} />
      
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-yellow-200 rounded-full opacity-30 animate-bounce delay-1000"></div>
      <div className="absolute top-1/2 right-10 w-12 h-12 bg-green-200 rounded-full opacity-25 animate-bounce delay-500"></div>
    </section>
  );
}
