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
      className="py-20 overflow-hidden"
      style={{ backgroundColor: '#521FCC' }}
    >
      <div className="container mx-auto px-4">
        <div 
          className="max-w-7xl mx-auto transition-transform duration-300 ease-out"
          style={{ transform: `scale(${scale})` }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Information with EggLife Logo */}
            <div className="text-center lg:text-left">
              {/* EggLife Logo */}
              <div className="relative inline-block mb-8">
                <img 
                  src="https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe889a/67d9f02ec6d1f46ad4430fa9_fe036674a234ee67521d50fbc4945cd8_Vector.svg"
                  alt="EggLife Logo"
                  className="w-20 h-20 mx-auto"
                />
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Join our culinary community
              </h2>
              
              <div className="mb-6">
                <div className="text-orange-300 font-bold text-lg mb-2">
                  supreme protein - supreme protein
                </div>
              </div>

              <p className="text-lg text-white/90 leading-relaxed">
                Stay up to date, discover delicious recipes, and get <span className="font-bold text-orange-300">$2.00 back</span> on your first in-store purchase of egglife egg white wraps
              </p>
            </div>

            {/* Right Side - Form */}
            <div 
              className="p-8 rounded-3xl shadow-xl border-2 border-white/20"
              style={{ backgroundColor: '#521FCC' }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      First name*
                    </label>
                    <input 
                      type="text" 
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="w-full px-4 py-3 border border-purple-300/30 bg-white/10 text-white placeholder-white/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E70294] focus:border-[#E70294] transition-colors" 
                      placeholder="Enter your first name"
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Last name*
                    </label>
                    <input 
                      type="text" 
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="w-full px-4 py-3 border border-purple-300/30 bg-white/10 text-white placeholder-white/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E70294] focus:border-[#E70294] transition-colors" 
                      placeholder="Enter your last name"
                      required 
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Email address*
                  </label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-purple-300/30 bg-white/10 text-white placeholder-white/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E70294] focus:border-[#E70294] transition-colors" 
                    placeholder="Enter your email address"
                    required 
                  />
                </div>

                {/* Country and Zip */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Country*
                    </label>
                    <select 
                      value={formData.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                      className="w-full px-4 py-3 border border-purple-300/30 bg-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E70294] focus:border-[#E70294] transition-colors" 
                      required
                    >
                      <option value="" className="text-gray-800">Select country</option>
                      <option value="US" className="text-gray-800">United States</option>
                      <option value="CA" className="text-gray-800">Canada</option>
                      <option value="UK" className="text-gray-800">United Kingdom</option>
                      <option value="AU" className="text-gray-800">Australia</option>
                      <option value="Other" className="text-gray-800">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Zip code*
                    </label>
                    <input 
                      type="text" 
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange('zipCode', e.target.value)}
                      className="w-full px-4 py-3 border border-purple-300/30 bg-white/10 text-white placeholder-white/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E70294] focus:border-[#E70294] transition-colors" 
                      placeholder="Enter your zip code"
                      required 
                    />
                  </div>
                </div>

                {/* Recipe Type */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    What type of recipes are you looking for?*
                  </label>
                  <select 
                    value={formData.recipeType}
                    onChange={(e) => handleInputChange('recipeType', e.target.value)}
                    className="w-full px-4 py-3 border border-purple-300/30 bg-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E70294] focus:border-[#E70294] transition-colors" 
                    required
                  >
                    <option value="" className="text-gray-800">Select recipe type</option>
                    <option value="breakfast" className="text-gray-800">Breakfast</option>
                    <option value="lunch" className="text-gray-800">Lunch</option>
                    <option value="dinner" className="text-gray-800">Dinner</option>
                    <option value="snacks" className="text-gray-800">Snacks</option>
                    <option value="desserts" className="text-gray-800">Desserts</option>
                    <option value="all" className="text-gray-800">All recipes</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={newsletterMutation.isPending}
                  className="group relative w-full bg-orange-primary text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 disabled:opacity-50 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden"
                >
                  <span className="relative z-10 flex justify-center">
                    {newsletterMutation.isPending ? (
                      "Joining..."
                    ) : (
                      ['J', 'o', 'i', 'n', ' ', 't', 'h', 'e', ' ', 'c', 'o', 'm', 'm', 'u', 'n', 'i', 't', 'y'].map((letter, index) => (
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
                      ))
                    )}
                  </span>
                  
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
