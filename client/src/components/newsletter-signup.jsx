import { useState, useEffect, useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function NewsletterSignup() {
  const [scale, setScale] = useState(1);
  const sectionRef = useRef(null);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    zipCode: "",
    recipeType: ""
  });

  // Scroll-based scaling effect
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const windowCenter = windowHeight / 2;
      
      // Calculate how close the element is to the center of the screen
      const distance = Math.abs(elementCenter - windowCenter);
      const maxDistance = windowHeight / 2;
      const proximity = Math.max(0, 1 - distance / maxDistance);
      
      // Scale slightly based on proximity to center (1.0 to 1.05)
      const newScale = 1 + (proximity * 0.05);
      setScale(newScale);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const newsletterMutation = useMutation({
    mutationFn: (data) => apiRequest("POST", "/api/newsletter/subscribe", data),
    onSuccess: () => {
      toast({
        title: "Welcome to the community!",
        description: "You'll receive $2.00 back on your first purchase and delicious recipes in your inbox.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        zipCode: "",
        recipeType: ""
      });
    },
    onError: (error) => {
      toast({
        title: "Subscription failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'country', 'zipCode', 'recipeType'];
    const missingFields = requiredFields.filter(field => !formData[field].trim());
    
    if (missingFields.length > 0) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields marked with *",
        variant: "destructive",
      });
      return;
    }
    
    newsletterMutation.mutate(formData);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section 
      ref={sectionRef}
      className="bg-white py-20 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div 
          className="max-w-7xl mx-auto transition-transform duration-300 ease-out"
          style={{ transform: `scale(${scale})` }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Information */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="relative inline-block mb-8">
                <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-full p-6">
                  <div className="bg-orange-primary rounded-full p-4">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-white">
                      <path d="M16 2L19.09 8.26L26 9L21 14.74L22.18 21.02L16 17.77L9.82 21.02L11 14.74L6 9L12.91 8.26L16 2Z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 bg-orange-primary text-white text-xs font-bold px-2 py-1 rounded-full">
                  Premium
                </div>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-dark mb-4">
                Join our culinary community
              </h2>
              
              <div className="mb-6">
                <div className="text-orange-primary font-bold text-lg mb-2">
                  supreme protein - supreme protein
                </div>
              </div>

              <p className="text-lg text-gray-medium leading-relaxed">
                Stay up to date, discover delicious recipes, and get <span className="font-bold text-orange-primary">$2.00 back</span> on your first in-store purchase of egglife egg white wraps
              </p>
            </div>

            {/* Right Side - Form */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-dark mb-2">
                      First name*
                    </label>
                    <input 
                      type="text" 
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary transition-colors" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-dark mb-2">
                      Last name*
                    </label>
                    <input 
                      type="text" 
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary transition-colors" 
                      required 
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-dark mb-2">
                    Email address*
                  </label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary transition-colors" 
                    required 
                  />
                </div>

                {/* Country and Zip */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-dark mb-2">
                      Country*
                    </label>
                    <select 
                      value={formData.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary transition-colors" 
                      required
                    >
                      <option value="">Select country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="AU">Australia</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-dark mb-2">
                      Zip code*
                    </label>
                    <input 
                      type="text" 
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange('zipCode', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary transition-colors" 
                      required 
                    />
                  </div>
                </div>

                {/* Recipe Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-dark mb-2">
                    What type of recipes are you looking for?*
                  </label>
                  <select 
                    value={formData.recipeType}
                    onChange={(e) => handleInputChange('recipeType', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary transition-colors" 
                    required
                  >
                    <option value="">Select recipe type</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                    <option value="snacks">Snacks</option>
                    <option value="desserts">Desserts</option>
                    <option value="all">All recipes</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={newsletterMutation.isPending}
                  className="w-full bg-orange-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-all duration-300 disabled:opacity-50 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {newsletterMutation.isPending ? "Joining..." : "Join the community"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
