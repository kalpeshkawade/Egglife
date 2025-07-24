import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-dark text-white py-16">
      <div className="container mx-auto px-4">
        {/* Newsletter Section - matching original website */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Join our culinary community
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get access to new recipes, exciting updates, and get $2.00 back on your first in-store purchase of egglife egg white wraps
          </p>
          <Link href="/newsletter">
            <button className="bg-orange-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105">
              Join the community
            </button>
          </Link>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
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
        
        {/* Bottom Copyright */}
        <div className="border-t border-gray-600 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © Egglife Foods, Inc 2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
