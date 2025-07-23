import { useState, useEffect } from 'react';
import { Link } from "wouter";

export default function ScrollAnimatedSection() {
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

    const section = document.getElementById('scroll-animated-section');
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
  const parallaxOffset = scrollY * 0.1;
  const scaleValue = isVisible ? Math.min(1.1, 1 + scrollY * 0.0002) : 1;

  return (
    <section 
      id="scroll-animated-section"
      className="relative bg-white py-16 overflow-hidden"
    >
      {/* Background animated elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-full h-full bg-gradient-to-br from-orange-100/30 to-transparent"
          style={{ 
            transform: `translateY(${parallaxOffset}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        
        {/* Floating animation elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-primary/20 rounded-full animate-float" />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-green-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-orange-primary/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image with scroll-based scaling */}
          <div className="relative overflow-hidden rounded-xl">
            <div 
              className="transition-transform duration-100 ease-out"
              style={{ 
                transform: `scale(${scaleValue})`,
              }}
            >
              <img 
                src="https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe889a/67d46f1ca88fba5bdcfe8a67_hm-goals%201.webp"
                alt="Two women eating egglife wraps" 
                className="w-full h-auto rounded-xl shadow-lg"
                onError={(e) => {
                  // Fallback to a similar image if the original fails to load
                  e.target.src = "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400";
                }}
              />
            </div>
            
            {/* Image overlay with shimmer effect on scroll */}
            <div 
              className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-opacity duration-300 ${
                isVisible ? 'animate-shimmer' : 'opacity-0'
              }`}
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                animation: isVisible ? 'shimmer 3s infinite' : 'none'
              }}
            />
          </div>
          
          {/* Content with scroll-based animations */}
          <div 
            className={`space-y-8 transition-all duration-700 ${
              isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-dark leading-tight tracking-tight">
              Meet your goals one macro at a time
            </h2>
            
            {/* Animated CTA button with bounce effect */}
            <div 
              className={`transition-all duration-700 ${
                isVisible ? 'animate-text-fade-in' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: '0.2s' }}
            >
              <Link href="/learn/our-wraps">
                <button className="group relative bg-orange-primary text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg overflow-hidden">
                  <span className="relative z-10 transition-all duration-300 group-hover:animate-bounce-text">
                    See how we stack up
                  </span>
                  
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700" />
                </button>
              </Link>
            </div>
            
            {/* Large nutrition stats display */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div 
                className={`text-center transition-all duration-500 ${
                  isVisible ? 'animate-text-fade-in' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: '0.4s' }}
              >
                <div className="text-6xl lg:text-7xl font-bold text-orange-primary mb-2">
                  &lt;3g
                </div>
                <div className="text-lg font-semibold text-gray-dark uppercase tracking-wider">
                  CARBS
                </div>
                <div className="text-sm text-gray-medium">
                  per serving
                </div>
              </div>
              
              <div 
                className={`text-center transition-all duration-500 ${
                  isVisible ? 'animate-text-fade-in' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: '0.6s' }}
              >
                <div className="text-6xl lg:text-7xl font-bold text-green-accent mb-2">
                  11g+
                </div>
                <div className="text-lg font-semibold text-gray-dark uppercase tracking-wider">
                  PROTEIN
                </div>
                <div className="text-sm text-gray-medium">
                  per serving
                </div>
              </div>
              
              <div 
                className={`text-center transition-all duration-500 ${
                  isVisible ? 'animate-text-fade-in' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: '0.8s' }}
              >
                <div className="text-6xl lg:text-7xl font-bold text-blue-500 mb-2">
                  &lt;70
                </div>
                <div className="text-lg font-semibold text-gray-dark uppercase tracking-wider">
                  CALORIES
                </div>
                <div className="text-sm text-gray-medium">
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