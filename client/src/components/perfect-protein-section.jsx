import { useState, useEffect } from 'react';
import { Link } from "wouter";

export default function PerfectProteinSection() {
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

    const section = document.getElementById('perfect-protein-section');
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
  const parallaxOffset = scrollY * 0.05;

  return (
    <section 
      id="perfect-protein-section"
      className="relative bg-gray-50 py-20 overflow-hidden"
    >
      {/* Background animated elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-full h-full bg-gradient-to-tr from-orange-50/40 to-transparent"
          style={{ 
            transform: `translateY(${parallaxOffset}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        
        {/* Floating animation elements */}
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-orange-primary/15 rounded-full animate-float" />
        <div className="absolute bottom-1/4 left-1/5 w-2 h-2 bg-green-accent/20 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image section */}
          <div 
            className={`relative transition-all duration-700 ${
              isVisible ? 'animate-fade-in' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative">
              <img 
                src="https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe889a/67d46f1ca88fba5bdcfe8943_hm-protein%20.webp"
                alt="stack of brown eggs" 
                className="w-full h-auto rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  // Fallback to a similar image if the original fails to load
                  e.target.src = "https://images.unsplash.com/photo-1569288052389-ddc8e049ed93?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400";
                }}
              />
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-primary/5 to-transparent rounded-xl pointer-events-none" />
            </div>

            {/* Mobile version of the image */}
            <div className="lg:hidden mt-4">
              <img 
                src="https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe889a/67d46f1ca88fba5bdcfe89c4_hm-protein-mobile.webp"
                alt="a stack of 4 brown eggs, one of which is broken" 
                className="w-full h-auto rounded-xl shadow-lg"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1569288052389-ddc8e049ed93?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300";
                }}
              />
            </div>
          </div>
          
          {/* Content section */}
          <div 
            className={`space-y-8 transition-all duration-700 ${
              isVisible ? 'animate-fade-in' : 'opacity-0 translate-x-10'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-dark leading-tight tracking-tight">
              The perfect protein
            </h2>
            
            <p className="text-xl lg:text-2xl text-gray-medium leading-relaxed">
              Heart-healthy and packed with necessary nutrients, egg whites are the ultimate protein for every body.
            </p>
            
            {/* Animated CTA button with wavy text effect */}
            <div 
              className={`pt-4 transition-all duration-700 ${
                isVisible ? 'animate-text-fade-in' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: '0.4s' }}
            >
              <Link href="/learn/why-egg-whites">
                <button className="group relative bg-orange-primary text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg overflow-hidden">
                  <span className="relative z-10 flex">
                    {['W', 'h', 'y', ' ', 'e', 'g', 'g', ' ', 'w', 'h', 'i', 't', 'e', 's'].map((letter, index) => (
                      <span
                        key={index}
                        className="inline-block transition-all duration-300 group-hover:animate-wave-text"
                        style={{ 
                          animationDelay: `${index * 0.05}s`,
                          animationDuration: '0.8s'
                        }}
                      >
                        {letter === ' ' ? '\u00A0' : letter}
                      </span>
                    ))}
                  </span>
                  
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}