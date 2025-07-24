import { useState, useEffect } from 'react';
import { Link } from "wouter";

export default function FoodFreedomSection() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('food-freedom-section');
    if (section) {
      observer.observe(section);
    }

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (section) observer.unobserve(section);
    };
  }, []);

  // Calculate scroll-based transform values
  const parallaxOffset = scrollY * 0.03;

  return (
    <section 
      id="food-freedom-section"
      className="relative bg-white py-20 overflow-hidden"
    >
      {/* Background animated elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-full h-full bg-gradient-to-bl from-green-50/30 to-transparent"
          style={{ 
            transform: `translateY(${parallaxOffset}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        
        {/* Floating animation elements */}
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-green-accent/20 rounded-full animate-float" />
        <div className="absolute bottom-1/3 right-1/5 w-3 h-3 bg-orange-primary/15 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content section */}
          <div 
            className={`space-y-8 transition-all duration-700 ${
              isVisible ? 'animate-fade-in' : 'opacity-0 translate-x-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-dark leading-tight tracking-tight">
              We stand for food‍ freedom
            </h2>
            
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-medium leading-relaxed font-normal">
              Taste and nutrition are not mutually exclusive. Enjoy the foods you love and flavors you crave, regardless of dietary lifestyle.
            </p>
            
            {/* Animated CTA button with wavy text effect */}
            <div 
              className={`pt-4 transition-all duration-700 ${
                isVisible ? 'animate-text-fade-in' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: '0.2s' }}
            >
              <Link href="/learn/why-we-do-it">
                <button className="group relative bg-orange-primary text-white px-8 py-4 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden">
                  <span className="relative z-10 flex">
                    {['W', 'h', 'y', ' ', 'w', 'e', ' ', 'd', 'o', ' ', 'i', 't'].map((letter, index) => (
                      <span
                        key={index}
                        className="inline-block transition-all duration-500 ease-in-out group-hover:animate-wavy-text"
                        style={{ 
                          animationDelay: `${index * 0.1}s`,
                          animationDuration: '1.5s',
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

            {/* Mobile dietary stickers */}
            <div 
              className={`lg:hidden pt-8 transition-all duration-700 ${
                isVisible ? 'animate-text-fade-in' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: '0.4s' }}
            >
              <img 
                src="https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe889a/67d46f1ca88fba5bdcfe89d5_Stickers-mobile.svg"
                alt="collection of dietary stickers" 
                className="w-full max-w-md mx-auto ml-[30px] mr-[30px]"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=200";
                }}
              />
            </div>
          </div>
          
          {/* Image section */}
          <div 
            className={`relative transition-all duration-700 ${
              isVisible ? 'animate-fade-in' : 'opacity-0 translate-x-10'
            }`}
            style={{ animationDelay: '0.1s' }}
          >
            {/* Main hand holding wrap image with overlapping stickers */}
            <div className="relative mb-8">
              <img 
                src="https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe889a/67d46f1ca88fba5bdcfe894c_hand.webp"
                alt="hand holding a breakfast burrito made from an egglife egg white wrap" 
                className="w-3/5 md:w-1/2 lg:w-2/5 xl:w-1/3 h-auto mx-auto rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400";
                }}
              />
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-green-accent/5 to-transparent rounded-xl pointer-events-none" />
              
              {/* Desktop dietary stickers - overlapping at bottom */}
              <div 
                className={`hidden lg:block absolute -bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-700 ${
                  isVisible ? 'animate-text-fade-in' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: '0.3s' }}
              >
                <img 
                  src="https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe889a/67d46f1ca88fba5bdcfe89d5_Stickers-mobile.svg"
                  alt="collection of dietary stickers" 
                  className="w-72 md:w-80 lg:w-96 xl:w-[28rem] h-auto transform hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=200";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}