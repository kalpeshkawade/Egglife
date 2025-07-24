import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-orange-50">
      {/* Header */}
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-primary to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-3xl font-bold text-gray-dark tracking-wide">
                Egg<span className="text-orange-primary">Life</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Welcome to <span style={{ color: '#521FCC' }}>Egg</span><span className="text-orange-primary">Life</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
              The perfect protein-packed wraps made with egg whites, not flour
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Benefits */}
            <div>
              <h2 className="text-3xl font-bold mb-8" style={{ color: '#521FCC' }}>
                Why Choose EggLife?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">5g</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1" style={{ color: '#521FCC' }}>
                      5g Protein Per Wrap
                    </h3>
                    <p className="text-gray-600">
                      Complete protein to fuel your day and support your fitness goals
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">0</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1" style={{ color: '#521FCC' }}>
                      Zero Carbs
                    </h3>
                    <p className="text-gray-600">
                      Perfect for keto, low-carb, and diabetic-friendly diets
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1" style={{ color: '#521FCC' }}>
                      Clean Ingredients
                    </h3>
                    <p className="text-gray-600">
                      Made with cage-free egg whites and simple, recognizable ingredients
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">∞</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1" style={{ color: '#521FCC' }}>
                      Endless Possibilities
                    </h3>
                    <p className="text-gray-600">
                      From breakfast to dinner, perfect for any meal or snack
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Login Card */}
            <div>
              <Card className="shadow-2xl border-0 bg-white">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-2" style={{ color: '#521FCC' }}>
                      Get Started
                    </h2>
                    <p className="text-gray-600">
                      Join thousands of people living healthier with EggLife
                    </p>
                  </div>

                  <div className="space-y-4">
                    <a href="/api/login" className="block">
                      <Button className="w-full bg-[#521FCC] hover:bg-[#4318A6] text-white py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        Sign In / Sign Up
                      </Button>
                    </a>
                    
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">or explore as guest</span>
                      </div>
                    </div>

                    <Button 
                      variant="outline" 
                      className="w-full border-2 border-gray-300 text-gray-700 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:border-orange-primary hover:text-orange-primary"
                      onClick={() => {
                        // Create a fake user session for guest mode
                        window.location.href = "/";
                      }}
                    >
                      Continue as Guest
                    </Button>
                  </div>

                  <div className="mt-8 text-center">
                    <p className="text-xs text-gray-500">
                      By signing in, you agree to our{' '}
                      <a href="/terms" className="text-[#521FCC] hover:underline">
                        Terms of Service
                      </a>{' '}
                      and{' '}
                      <a href="/privacy" className="text-[#521FCC] hover:underline">
                        Privacy Policy
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Product Preview */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8" style={{ color: '#521FCC' }}>
              Discover Our <span style={{ color: '#ec4899' }}>Flavors</span>
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center">
                  <span className="text-orange-primary font-bold">O</span>
                </div>
                <p className="text-sm font-medium text-gray-700">Original</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">S</span>
                </div>
                <p className="text-sm font-medium text-gray-700">Southwest</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center">
                  <span className="text-red-600 font-bold">I</span>
                </div>
                <p className="text-sm font-medium text-gray-700">Italian</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600 font-bold">R</span>
                </div>
                <p className="text-sm font-medium text-gray-700">Rye</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-8 text-center">
        <p className="text-gray-500 text-sm">
          © 2025 EggLife Foods. All rights reserved.
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="fixed bottom-10 right-10 opacity-20 pointer-events-none">
        <img
          src="https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe889a/67e688cd90020d679ef23923_protein-sticker-02.svg"
          alt="Protein Sticker"
          className="w-16 h-16 animate-bounce"
        />
      </div>
      <div className="fixed top-20 left-10 opacity-20 pointer-events-none">
        <img
          src="https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe889a/67e688cd44f8642076065aa5_protein-sticker-01.svg"
          alt="Protein Sticker"
          className="w-20 h-20 animate-pulse"
        />
      </div>
    </div>
  );
}