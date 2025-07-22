import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, User, ShoppingCart } from "lucide-react";
import MegaMenu from "./ui/mega-menu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <img 
                src="https://images.unsplash.com/photo-1587486913049-53fc88980cfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=40" 
                alt="EggLife Foods Logo" 
                className="h-10"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/learn/our-wraps" 
              className="text-gray-dark font-medium hover:text-orange-primary"
            >
              Our Products
            </Link>
            
            <MegaMenu 
              trigger="Recipes"
              items={[
                {
                  title: "Breakfast",
                  href: "/recipes-hub?meal=Breakfast",
                  image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64"
                },
                {
                  title: "Lunch", 
                  href: "/recipes-hub?meal=Lunch",
                  image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64"
                },
                {
                  title: "Dinner",
                  href: "/recipes-hub?meal=Dinner", 
                  image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64"
                },
                {
                  title: "Snack",
                  href: "/recipes-hub?meal=Snack",
                  image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64"
                },
                {
                  title: "Appetizer",
                  href: "/recipes-hub?meal=Appetizer", 
                  image: "https://images.unsplash.com/photo-1559054663-e9b33cfeec55?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64"
                },
                {
                  title: "Dessert",
                  href: "/recipes-hub?meal=Dessert",
                  image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64"
                }
              ]}
              allLink="/recipes-hub"
            />

            <MegaMenu 
              trigger="Learn"
              items={[
                {
                  title: "Our Wraps",
                  href: "/learn/our-wraps",
                  image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64"
                },
                {
                  title: "Why Egg Whites",
                  href: "/learn/why-egg-whites",
                  image: "https://images.unsplash.com/photo-1569288052389-ddc8e049ed93?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64"
                },
                {
                  title: "FAQs",
                  href: "/learn/faq",
                  image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64"
                },
                {
                  title: "Why We Do It",
                  href: "/learn/why-we-do-it",
                  image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64"
                }
              ]}
            />

            <Link 
              href="/where-to-buy" 
              className="text-gray-dark font-medium hover:text-orange-primary"
            >
              Where to Buy
            </Link>
          </div>

          {/* User Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-gray-dark hover:text-orange-primary">
              <User size={20} />
            </button>
            <button className="text-gray-dark hover:text-orange-primary">
              <ShoppingCart size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-2">
              <Link 
                href="/learn/our-wraps" 
                className="block py-3 text-gray-dark"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Products
              </Link>
              <Link 
                href="/recipes-hub" 
                className="block py-3 text-gray-dark"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Recipes
              </Link>
              <Link 
                href="/learn" 
                className="block py-3 text-gray-dark"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Learn
              </Link>
              <Link 
                href="/where-to-buy" 
                className="block py-3 text-gray-dark"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Where to Buy
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
