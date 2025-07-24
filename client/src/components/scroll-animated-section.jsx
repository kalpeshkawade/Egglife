import { useState, useEffect, useRef } from 'react';
import { Link } from "wouter";

export default function ScrollAnimatedSection() {
  const [scale, setScale] = useState(1);
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !imageRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate if the section is in view and how much
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      
      // Check if section is in viewport
      if (elementTop < windowHeight && elementBottom > 0) {
        // Calculate scroll progress through the section
        const progress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + rect.height)));
        
        // Scale from 1 to 1.3 as user scrolls through section
        const newScale = 1 + (progress * 0.3);
        setScale(newScale);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-white overflow-hidden"
    >
      {/* Full-width image that scales on scroll */}
      <div className="relative w-full h-screen">
        <div 
          ref={imageRef}
          className="absolute inset-0 transition-transform duration-100 ease-out"
          style={{ 
            transform: `scale(${scale})`,
            transformOrigin: 'center center'
          }}
        >
          <img 
            src="https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe889a/67d46f1ca88fba5bdcfe8a67_hm-goals%201.webp"
            alt="Two women eating egglife wraps" 
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to a similar image if the original fails to load
              e.target.src = "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800";
            }}
          />
        </div>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Content positioned over the image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight tracking-tight">
              Meet your goals one macro at a time
            </h2>
            
            <Link href="/learn/our-wraps">
              <button className="group relative bg-orange-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden mb-8 sm:mb-12">
                <span className="relative z-10 flex">
                  {['S', 'e', 'e', ' ', 'h', 'o', 'w', ' ', 'w', 'e', ' ', 's', 't', 'a', 'c', 'k', ' ', 'u', 'p'].map((letter, index) => (
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

            {/* Nutrition stats positioned directly below button */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-1 sm:mb-2">
                  &lt;3g
                </div>
                <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white uppercase tracking-wider mb-1">
                  CARBS
                </div>
                <div className="text-sm md:text-base text-white/80">
                  per serving
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-2">
                  11g+
                </div>
                <div className="text-lg md:text-xl font-bold text-white uppercase tracking-wider mb-1">
                  PROTEIN
                </div>
                <div className="text-sm md:text-base text-white/80">
                  per serving
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-2">
                  &lt;70
                </div>
                <div className="text-lg md:text-xl font-bold text-white uppercase tracking-wider mb-1">
                  CALORIES
                </div>
                <div className="text-sm md:text-base text-white/80">
                  per serving
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

    </section>
  );
}