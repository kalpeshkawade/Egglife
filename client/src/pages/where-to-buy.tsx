import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search, Store } from "lucide-react";

export default function WhereToBuy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-50 to-yellow-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-dark mb-4">
                Where to Buy
              </h1>
              <p className="text-lg text-gray-medium mb-8">
                Find EggLife products at a store near you
              </p>
            </div>
          </div>
        </section>

        {/* Store Locator */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-bold text-gray-dark mb-6 text-center">
                  Store Locator
                </h2>
                
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1">
                    <Input 
                      placeholder="Enter your ZIP code or city"
                      className="w-full"
                    />
                  </div>
                  <Button className="bg-orange-primary hover:bg-orange-600">
                    <Search className="mr-2" size={20} />
                    Search Stores
                  </Button>
                </div>
                
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin size={48} className="mx-auto mb-4" />
                    <p>Interactive map would be displayed here</p>
                  </div>
                </div>
              </div>

              {/* Major Retailers */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg p-6 text-center border">
                  <Store size={48} className="mx-auto mb-4 text-orange-primary" />
                  <h3 className="text-xl font-bold text-gray-dark mb-2">Walmart</h3>
                  <p className="text-gray-medium text-sm">Available in stores nationwide</p>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-6 text-center border">
                  <Store size={48} className="mx-auto mb-4 text-orange-primary" />
                  <h3 className="text-xl font-bold text-gray-dark mb-2">Target</h3>
                  <p className="text-gray-medium text-sm">Find us in the refrigerated section</p>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-6 text-center border">
                  <Store size={48} className="mx-auto mb-4 text-orange-primary" />
                  <h3 className="text-xl font-bold text-gray-dark mb-2">Kroger</h3>
                  <p className="text-gray-medium text-sm">Available at select locations</p>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-6 text-center border">
                  <Store size={48} className="mx-auto mb-4 text-orange-primary" />
                  <h3 className="text-xl font-bold text-gray-dark mb-2">Publix</h3>
                  <p className="text-gray-medium text-sm">Check the dairy aisle</p>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-6 text-center border">
                  <Store size={48} className="mx-auto mb-4 text-orange-primary" />
                  <h3 className="text-xl font-bold text-gray-dark mb-2">Safeway</h3>
                  <p className="text-gray-medium text-sm">Now available in store</p>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-6 text-center border">
                  <Store size={48} className="mx-auto mb-4 text-orange-primary" />
                  <h3 className="text-xl font-bold text-gray-dark mb-2">Whole Foods</h3>
                  <p className="text-gray-medium text-sm">Premium quality selection</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Online Shopping */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-dark mb-8">
                Shop Online
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-dark mb-2">Amazon Fresh</h3>
                  <p className="text-gray-medium text-sm mb-4">Same-day delivery available</p>
                  <Button variant="outline" className="w-full">
                    Shop Now
                  </Button>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-dark mb-2">Instacart</h3>
                  <p className="text-gray-medium text-sm mb-4">Delivery from local stores</p>
                  <Button variant="outline" className="w-full">
                    Shop Now
                  </Button>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-dark mb-2">Walmart+</h3>
                  <p className="text-gray-medium text-sm mb-4">Free delivery on $35+</p>
                  <Button variant="outline" className="w-full">
                    Shop Now
                  </Button>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-dark mb-2">Target+</h3>
                  <p className="text-gray-medium text-sm mb-4">Same-day pickup & delivery</p>
                  <Button variant="outline" className="w-full">
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
