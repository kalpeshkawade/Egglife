import { useState, useRef, useEffect } from "react";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";

export default function MegaMenu({ trigger, items, allLink }) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div 
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="text-gray-dark font-medium hover:text-orange-primary flex items-center">
        {trigger} <ChevronDown className="ml-1" size={16} />
      </button>
      
      {/* Dropdown Menu */}
      <div className={`absolute top-full left-0 mt-2 w-80 bg-white shadow-lg rounded-lg transition-all duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}>
        <div className="p-6 grid grid-cols-2 gap-4">
          {items.map((item, index) => (
            <Link key={index} href={item.href}>
              <div className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50 cursor-pointer">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-8 h-8 rounded object-cover"
                />
                <span className="text-sm font-medium">{item.title}</span>
              </div>
            </Link>
          ))}
        </div>
        {allLink && (
          <div className="border-t p-4">
            <Link href={allLink}>
              <span className="text-orange-primary font-medium hover:underline cursor-pointer">
                All {trigger.toLowerCase()}
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
