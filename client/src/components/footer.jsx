import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-16" style={{ backgroundColor: '#EAE5FA' }}>
      <div className="container mx-auto px-4">
        {/* Main Footer Content - Two Column Layout with White Background */}
        <div className="bg-white rounded-2xl p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
            {/* Left Side - Community Section */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight" style={{ color: '#521FCC' }}>
                JOIN OUR COMMUNITY
              </h2>
              <p className="text-xl mb-8 leading-relaxed" style={{ color: '#521FCC' }}>
                Get access to new recipes, exciting updates, and get $2.00 back on your first in-store purchase of egglife egg white wraps
              </p>
              <Link href="/newsletter">
                <button className="group relative bg-orange-primary text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden mb-8">
                  <span className="relative z-10 flex">
                    {['J', 'o', 'i', 'n', ' ', 't', 'h', 'e', ' ', 'c', 'o', 'm', 'm', 'u', 'n', 'i', 't', 'y'].map((letter, index) => (
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
              
              {/* EggLife Logo */}
              <div className="mt-8">
                <Link href="/" className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-primary to-orange-600 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                    <span className="text-white font-bold text-lg">E</span>
                  </div>
                  <span className="text-2xl font-bold text-gray-dark tracking-wide">
                    Egg<span className="text-orange-primary">Life</span>
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Side - Navigation Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* More Info Column */}
              <div>
                <h3 className="font-bold text-lg mb-6 uppercase tracking-wider" style={{ color: '#521FCC' }}>
                  MORE INFO
                </h3>
                <ul className="space-y-3" style={{ color: '#521FCC' }}>
                  <li><Link href="/about" className="hover:text-orange-primary transition-colors">About Us</Link></li>
                  <li><Link href="/learn/faq" className="hover:text-orange-primary transition-colors">FAQs</Link></li>
                  <li><Link href="/blog" className="hover:text-orange-primary transition-colors">Blog</Link></li>
                  <li><Link href="/careers" className="hover:text-orange-primary transition-colors">Careers</Link></li>
                  <li><Link href="/patents" className="hover:text-orange-primary transition-colors">Patents</Link></li>
                  <li><Link href="/press" className="hover:text-orange-primary transition-colors">Press</Link></li>
                </ul>
              </div>
              
              {/* Reach Out Column */}
              <div>
                <h3 className="font-bold text-lg mb-6 uppercase tracking-wider" style={{ color: '#521FCC' }}>
                  REACH OUT
                </h3>
                <ul className="space-y-3" style={{ color: '#521FCC' }}>
                  <li><Link href="/contact" className="hover:text-orange-primary transition-colors">Contact Us</Link></li>
                  <li><Link href="/registered-dietitian" className="hover:text-orange-primary transition-colors">Registered Dietitian Program</Link></li>
                  <li><Link href="/kale-creator" className="hover:text-orange-primary transition-colors">Kale Creator Program</Link></li>
                  <li><Link href="/community" className="hover:text-orange-primary transition-colors">Customer Community</Link></li>
                </ul>
              </div>
              
              {/* Resources Column */}
              <div>
                <h3 className="font-bold text-lg mb-6 uppercase tracking-wider" style={{ color: '#521FCC' }}>
                  RESOURCES
                </h3>
                <ul className="space-y-3" style={{ color: '#521FCC' }}>
                  <li><Link href="/terms" className="hover:text-orange-primary transition-colors">Terms of Service</Link></li>
                  <li><Link href="/privacy" className="hover:text-orange-primary transition-colors">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section with Logos and Copyright */}
        <div className="border-t border-gray-300 pt-8">
          {/* Social Media and Partner Logos */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            {/* Social Media Icons */}
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-medium hover:text-orange-primary transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-medium hover:text-orange-primary transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-medium hover:text-orange-primary transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-medium hover:text-orange-primary transition-colors">
                <Youtube size={24} />
              </a>
            </div>
            
            {/* Partner/Certification Logos */}
            <div className="flex space-x-6 items-center flex-wrap gap-y-4">
              <img 
                src="https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe889a/67d46f1ca88fba5bdcfe8afc_inc-5000-fastest-growing.webp" 
                alt="Inc 5000 Fastest Growing" 
                className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
              <img 
                src="https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe889a/67d46f1ca88fba5bdcfe8afd_good-housekeeping-best-snack.webp" 
                alt="Good Housekeeping Best Snack" 
                className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
              <img 
                src="https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe889a/67d46f1ca88fba5bdcfe8b4f_ic-badge.webp" 
                alt="Non-GMO Project Verified" 
                className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
              <img 
                src="https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe889a/67ecdc13019c3ee642488ae3_v1-1a_InsurgentBrandBadges.webp" 
                alt="Keto Certified" 
                className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-medium text-sm">
              © Egglife Foods, Inc 2025. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}