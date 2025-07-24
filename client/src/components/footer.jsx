import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-dark text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          
          {/* Left Side - Community Section */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              JOIN OUR COMMUNITY
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Get access to new recipes, exciting updates, and get $2.00 back on your first in-store purchase of egglife egg white wraps
            </p>
            <Link href="/newsletter">
              <button className="bg-orange-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 mb-8">
                Join the community
              </button>
            </Link>
            
            {/* EggLife Logo */}
            <div className="mt-8">
              <img 
                src="https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe8983_egglife-logo-white.svg" 
                alt="EggLife Foods Logo" 
                className="h-12 w-auto"
              />
            </div>
          </div>

          {/* Right Side - Navigation Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* More Info Column */}
            <div>
              <h3 className="font-bold text-white text-lg mb-6 uppercase tracking-wider">
                MORE INFO
              </h3>
              <ul className="space-y-3 text-gray-300">
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
              <h3 className="font-bold text-white text-lg mb-6 uppercase tracking-wider">
                REACH OUT
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li><Link href="/contact" className="hover:text-orange-primary transition-colors">Contact Us</Link></li>
                <li><Link href="/registered-dietitian" className="hover:text-orange-primary transition-colors">Registered Dietitian Program</Link></li>
                <li><Link href="/kale-creator" className="hover:text-orange-primary transition-colors">Kale Creator Program</Link></li>
                <li><Link href="/community" className="hover:text-orange-primary transition-colors">Customer Community</Link></li>
              </ul>
            </div>
            
            {/* Resources Column */}
            <div>
              <h3 className="font-bold text-white text-lg mb-6 uppercase tracking-wider">
                RESOURCES
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li><Link href="/terms" className="hover:text-orange-primary transition-colors">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-orange-primary transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Section with Logos and Copyright */}
        <div className="border-t border-gray-600 pt-8">
          {/* Social Media and Partner Logos */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            {/* Social Media Icons */}
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-300 hover:text-orange-primary transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-primary transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-primary transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-primary transition-colors">
                <Youtube size={24} />
              </a>
            </div>
            
            {/* Partner/Certification Logos */}
            <div className="flex space-x-8 items-center">
              <img 
                src="https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe897d_logo-non-gmo-project.png" 
                alt="Non-GMO Project Verified" 
                className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
              <img 
                src="https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe897e_logo-keto-certified.png" 
                alt="Keto Certified" 
                className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-300 text-sm">
              © Egglife Foods, Inc 2025. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
