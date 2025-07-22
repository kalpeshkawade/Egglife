import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1587486913049-53fc88980cfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=40" 
              alt="EggLife Foods Logo" 
              className="h-10 mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-300">
              Made with egg whites, not flour. The perfect wrap for every meal.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/product/original" className="hover:text-white">Original</Link></li>
              <li><Link href="/product/everything-bagel" className="hover:text-white">Everything Bagel</Link></li>
              <li><Link href="/product/southwest" className="hover:text-white">Southwest</Link></li>
              <li><Link href="/product/sweet-cinnamon" className="hover:text-white">Sweet Cinnamon</Link></li>
              <li><Link href="/learn/our-wraps" className="hover:text-white">All Products</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Recipes</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/recipes-hub?meal=Breakfast" className="hover:text-white">Breakfast</Link></li>
              <li><Link href="/recipes-hub?meal=Lunch" className="hover:text-white">Lunch</Link></li>
              <li><Link href="/recipes-hub?meal=Dinner" className="hover:text-white">Dinner</Link></li>
              <li><Link href="/recipes-hub?meal=Snack" className="hover:text-white">Snacks</Link></li>
              <li><Link href="/recipes-hub" className="hover:text-white">All Recipes</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Learn</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/learn/our-wraps" className="hover:text-white">Our Wraps</Link></li>
              <li><Link href="/learn/why-egg-whites" className="hover:text-white">Why Egg Whites</Link></li>
              <li><Link href="/learn/faq" className="hover:text-white">FAQs</Link></li>
              <li><Link href="/learn/why-we-do-it" className="hover:text-white">Why We Do It</Link></li>
              <li><Link href="/where-to-buy" className="hover:text-white">Where to Buy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">&copy; 2024 EggLife Foods. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-white">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
