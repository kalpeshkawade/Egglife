import { useState, useEffect } from "react";

export default function RollingLogo() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const rollingTexts = [
    "extraprotein",
    "glutenfree", 
    "lowcarb",
    "eatingbetter",
    "mindingmacros"
  ];

  // Auto-rotate text every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => 
        prevIndex === rollingTexts.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [rollingTexts.length]);

  return (
    <div className="text-center mb-8">
      {/* Main Logo Text */}
      <div className="mb-4">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">
          ThePerfectWrap
          <sup className="text-2xl">®</sup>
        </h1>
        
        {/* Rolling Text */}
        <div className="text-2xl lg:text-3xl font-semibold text-white/90 h-12 flex items-center justify-center">
          <span className="mr-2">for</span>
          <div className="relative overflow-hidden h-10 w-48">
            <div 
              className="absolute inset-0 transition-transform duration-500 ease-in-out flex flex-col"
              style={{ 
                transform: `translateY(-${currentTextIndex * 2.5}rem)` 
              }}
            >
              {rollingTexts.map((text, index) => (
                <div 
                  key={index}
                  className="h-10 flex items-center justify-center text-orange-300 font-bold"
                >
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Images Rolling */}
      <div className="flex justify-center space-x-4 opacity-80">
        <img 
          src="https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe889a/67e17faa3dcd5c7ddc5817eb_Original.avif"
          alt="Original wrap"
          className="w-16 h-16 object-contain animate-bounce"
          style={{ animationDelay: '0s' }}
        />
        <img 
          src="https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe889a/67e181840c5c8a35d71e364a_southwest.webp"
          alt="Southwest wrap" 
          className="w-16 h-16 object-contain animate-bounce"
          style={{ animationDelay: '0.5s' }}
        />
        <img 
          src="https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe889a/67e181940b7efe9a673f9a27_everything.webp"
          alt="Everything bagel wrap"
          className="w-16 h-16 object-contain animate-bounce"
          style={{ animationDelay: '1s' }}
        />
        <img 
          src="https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe889a/67e181b4a9cdb342fec3aa0b_garlic.webp"
          alt="Garlic herb wrap"
          className="w-16 h-16 object-contain animate-bounce"
          style={{ animationDelay: '1.5s' }}
        />
        <img 
          src="https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe889a/67e181c51118b5f0ccc8308d_cinnamon.webp"
          alt="Cinnamon wrap"
          className="w-16 h-16 object-contain animate-bounce"
          style={{ animationDelay: '2s' }}
        />
      </div>
    </div>
  );
}