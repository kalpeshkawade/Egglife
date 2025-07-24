import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function LearnOurWraps() {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["/api/products"],
  });

  // Separate wraps from grab-and-go products
  const wrapProducts = products.filter(product => product.category === "wrap");
  const grabGoProducts = products.filter(product => product.category === "grab-and-go");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-50 to-yellow-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-dark mb-4">
                Our Wraps
              </h1>
              <p className="text-lg text-gray-medium mb-8">
                Discover our complete line of egg white wraps made with simple, clean ingredients
              </p>
            </div>
          </div>
        </section>

        {/* Nutrition Comparison */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-dark mb-6">
                How We Stack Up
              </h2>
              <p className="text-lg text-gray-medium mb-8">
                See how our egg white wraps compare to traditional flour tortillas
              </p>
              
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="bg-orange-primary text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                      1g
                    </div>
                    <h3 className="font-bold text-gray-dark text-xl mb-2">CARBS</h3>
                    <p className="text-gray-medium">vs 15g in flour tortillas</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-green-accent text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                      5g
                    </div>
                    <h3 className="font-bold text-gray-dark text-xl mb-2">PROTEIN</h3>
                    <p className="text-gray-medium">vs 2g in flour tortillas</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-blue-500 text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                      25
                    </div>
                    <h3 className="font-bold text-gray-dark text-xl mb-2">CALORIES</h3>
                    <p className="text-gray-medium">vs 150 in flour tortillas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dietary Benefits */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-dark mb-12 text-center">
                Made for Every Lifestyle
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 font-bold text-sm">✓</span>
                  </div>
                  <h3 className="font-bold text-gray-dark text-sm">Gluten Free</h3>
                </div>
                
                <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold text-sm">✓</span>
                  </div>
                  <h3 className="font-bold text-gray-dark text-sm">Keto Friendly</h3>
                </div>
                
                <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-600 font-bold text-sm">✓</span>
                  </div>
                  <h3 className="font-bold text-gray-dark text-sm">Low Carb</h3>
                </div>
                
                <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-orange-600 font-bold text-sm">✓</span>
                  </div>
                  <h3 className="font-bold text-gray-dark text-sm">High Protein</h3>
                </div>
                
                <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-pink-600 font-bold text-sm">✓</span>
                  </div>
                  <h3 className="font-bold text-gray-dark text-sm">Grain Free</h3>
                </div>
                
                <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-yellow-600 font-bold text-sm">✓</span>
                  </div>
                  <h3 className="font-bold text-gray-dark text-sm">Kosher</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wrap Varieties */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-dark mb-12 text-center">
                Six Delicious Flavors
              </h2>
              
              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-8">
                      <div className="h-48 bg-gray-200 rounded mb-4 animate-pulse"></div>
                      <div className="h-6 bg-gray-200 rounded mb-2 animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {wrapProducts.map((product) => (
                    <div key={product.id} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                      <div className="text-center mb-6">
                        <img 
                          src={product.imageUrl} 
                          alt={product.name}
                          className="w-full h-48 object-contain mb-4"
                        />
                        <h3 className="text-xl font-bold text-gray-dark mb-2">
                          {product.name}
                        </h3>
                        <p className="text-gray-medium text-sm">
                          {product.description}
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center py-2 border-b border-gray-200">
                          <span className="text-gray-medium text-sm">Carbs</span>
                          <span className="font-bold text-gray-dark">{product.nutrition.carbs}g</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-200">
                          <span className="text-gray-medium text-sm">Protein</span>
                          <span className="font-bold text-gray-dark">{product.nutrition.protein}g</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="text-gray-medium text-sm">Calories</span>
                          <span className="font-bold text-gray-dark">{product.nutrition.calories}</span>
                        </div>
                      </div>
                      
                      <Link href={`/product/${product.slug}`}>
                        <button className="group relative w-full mt-6 bg-orange-primary text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden">
                          <span className="relative z-10 flex justify-center">
                            {['L', 'e', 'a', 'r', 'n', ' ', 'M', 'o', 'r', 'e'].map((letter, index) => (
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
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Grab & Go Section */}
        {grabGoProducts.length > 0 && (
          <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-dark mb-12 text-center">
                  Grab & Go Convenience
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {grabGoProducts.map((product) => (
                    <div key={product.id} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex flex-col md:flex-row items-center gap-6">
                        <img 
                          src={product.imageUrl} 
                          alt={product.name}
                          className="w-48 h-48 object-contain"
                        />
                        <div className="flex-1">
                          <Badge className="bg-orange-primary mb-4">GRAB & GO</Badge>
                          <h3 className="text-2xl font-bold text-gray-dark mb-3">
                            {product.name}
                          </h3>
                          <p className="text-gray-medium mb-4">
                            {product.description}
                          </p>
                          
                          <div className="grid grid-cols-3 gap-4 mb-6">
                            <div className="text-center">
                              <div className="font-bold text-gray-dark text-lg">{product.nutrition.carbs}g</div>
                              <div className="text-gray-medium text-sm">Carbs</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold text-gray-dark text-lg">{product.nutrition.protein}g</div>
                              <div className="text-gray-medium text-sm">Protein</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold text-gray-dark text-lg">{product.nutrition.calories}</div>
                              <div className="text-gray-medium text-sm">Calories</div>
                            </div>
                          </div>
                          
                          <Link href={`/product/${product.slug}`}>
                            <button className="group relative bg-orange-primary text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden">
                              <span className="relative z-10 flex">
                                {['L', 'e', 'a', 'r', 'n', ' ', 'M', 'o', 'r', 'e'].map((letter, index) => (
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
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-dark mb-6">
                Ready to Try EggLife?
              </h2>
              <p className="text-lg text-gray-medium mb-8">
                Find our products at a store near you or explore our recipe collection for inspiration.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/where-to-buy">
                  <button className="group relative bg-orange-primary text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden">
                    <span className="relative z-10 flex">
                      {['F', 'i', 'n', 'd', ' ', 'W', 'h', 'e', 'r', 'e', ' ', 't', 'o', ' ', 'B', 'u', 'y'].map((letter, index) => (
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
                <Link href="/recipes-hub">
                  <button className="group relative bg-transparent border-2 border-orange-primary text-orange-primary px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden hover:bg-orange-primary hover:text-white">
                    <span className="relative z-10 flex">
                      {['B', 'r', 'o', 'w', 's', 'e', ' ', 'R', 'e', 'c', 'i', 'p', 'e', 's'].map((letter, index) => (
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
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
