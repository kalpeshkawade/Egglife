import { Link } from "wouter";

export default function PerfectProteinSection() {

  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Background egg image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe889a/67d46f1ca88fba5bdcfe8943_hm-protein%20.webp')",
        }}
      >
        {/* Light overlay for better text readability */}
        <div className="absolute inset-0 bg-white/40" />
      </div>
      <div className="container mx-auto px-4 relative z-10 min-h-[60vh] sm:min-h-[70vh] flex flex-col justify-between">
        {/* Title at top left */}
        <div className="flex justify-start pt-8 lg:pt-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight max-w-xs sm:max-w-md px-4 sm:px-0" style={{ color: '#521FCC' }}>
            The perfect protein
          </h2>
        </div>
        
        {/* Description and button at bottom right */}
        <div className="flex justify-center lg:justify-end pb-8 lg:pb-0">
          <div className="max-w-md text-center lg:text-right space-y-6 px-4 sm:px-0">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-normal" style={{ color: '#521FCC' }}>
              Heart-healthy and packed with necessary nutrients, egg whites are the ultimate protein for every body.
            </p>
            
            {/* Animated CTA button with wavy text effect */}
            <Link href="/learn/why-egg-whites">
              <button className="group relative bg-orange-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden">
                <span className="relative z-10 flex">
                  {['W', 'h', 'y', ' ', 'e', 'g', 'g', ' ', 'w', 'h', 'i', 't', 'e', 's'].map((letter, index) => (
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
        </div>
      </div>
    </section>
  );
}