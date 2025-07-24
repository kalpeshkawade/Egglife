import { useState, useEffect } from 'react';
import { Link } from "wouter";

export default function InfinitePossibilitiesSection() {
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

    const section = document.getElementById('infinite-possibilities-section');
    if (section) {
      observer.observe(section);
    }

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (section) observer.unobserve(section);
    };
  }, []);

  // Recipe data matching the original website
  const recipes = [
    {
      id: 1,
      title: "turkey pinwheels",
      image: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe8cdf_646211cfa349c349937b8321_dww882thx1gjn8n9ufnfdeb3cznaj2k1.webp",
      slug: "turkey-pinwheels"
    },
    {
      id: 2,
      title: "turkey bacon club",
      image: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe90c3_64621254b3a33482303a77a2_4d357unh8ha4zb6rdvprv2j4huxra42c.webp",
      slug: "turkey-bacon-club"
    },
    {
      id: 3,
      title: "pasta with homemade bolognese",
      image: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe8ca4_64621259764f82c8642eaacc_g037rkp4j90ug56284gr8z0gpdaw7yzj.webp",
      slug: "pasta-with-homemade-bolognese"
    },
    {
      id: 4,
      title: "chocolate hazelnut raspberry wrap",
      image: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe92b1_646212ad12ceb68346b61655_2guaqywjrkd11fk31rdbvzuquan4pj13.webp",
      slug: "chocolate-hazelnut-raspberry-wrap"
    },
    {
      id: 5,
      title: "buffalo cauliflower tacos",
      image: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe92a7_6462128b5ba944b514f5601d_r1c1akz2v2nrukrewm3vfjgrmp84t3zk.webp",
      slug: "buffalo-cauliflower-tacos"
    },
    {
      id: 6,
      title: "personal pepperoni pizza",
      image: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe91d9_646212863bc2427ba31f028a_d6r0qpefh7zk8a2v5kccedm0gb44xv2k.webp",
      slug: "personal-pepperoni-pizza"
    },
    {
      id: 7,
      title: "everything bagel dog",
      image: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe92ac_646212a461c0072298d5a21d_vm0xuu47zz9a3a3z7hf5772p8v7bnew4.webp",
      slug: "everything-bagel-dog"
    },
    {
      id: 8,
      title: "chicken enchiladas",
      image: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe90d6_64621240bef0231c4ea2b930_h2yazavynk4p6rz3jmd66urq5tbaghk3.webp",
      slug: "chicken-enchiladas"
    }
  ];

  const parallaxOffset = scrollY * 0.02;

  return (
    <section 
      id="infinite-possibilities-section"
      className="relative bg-gray-50 py-20 overflow-hidden"
    >
      {/* Background animated elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-full h-full bg-gradient-to-br from-orange-50/40 to-transparent"
          style={{ 
            transform: `translateY(${parallaxOffset}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        
        {/* Floating elements */}
        <div className="absolute top-1/4 right-1/6 w-2 h-2 bg-orange-primary/20 rounded-full animate-float" />
        <div className="absolute bottom-1/3 left-1/8 w-3 h-3 bg-green-accent/15 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header section */}
        <div 
          className={`text-center space-y-6 mb-16 transition-all duration-700 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-dark leading-tight tracking-tight">
            Six flavors. Infinite possibilities.
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-medium leading-relaxed max-w-2xl mx-auto">
            Over 150 ways to reimagine every meal.
          </p>
          
          {/* Animated CTA button with wavy text effect */}
          <div 
            className={`pt-4 transition-all duration-700 ${
              isVisible ? 'animate-text-fade-in' : 'opacity-0 translate-y-10'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            <Link href="/recipes-hub">
              <button className="group relative bg-orange-primary text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg overflow-hidden">
                <span className="relative z-10 flex">
                  {['G', 'e', 't', ' ', 's', 't', 'a', 'r', 't', 'e', 'd'].map((letter, index) => (
                    <span
                      key={index}
                      className="inline-block transition-all duration-300 group-hover:animate-wave-text"
                      style={{ 
                        animationDelay: `${index * 0.07}s`,
                        animationDuration: '0.9s'
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

        {/* Recipe cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipes.map((recipe, index) => (
            <div
              key={recipe.id}
              className={`transition-all duration-700 ${
                isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <Link href={`/recipes/${recipe.slug}`}>
                <div className="group cursor-pointer">
                  {/* Recipe card with border matching original */}
                  <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 overflow-hidden">
                    {/* Image container */}
                    <div className="relative overflow-hidden">
                      <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300";
                        }}
                      />
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    {/* Content */}
                    <div className="p-4">
                      <h3 className="font-bold text-gray-dark text-lg capitalize group-hover:text-orange-primary transition-colors duration-300">
                        {recipe.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}