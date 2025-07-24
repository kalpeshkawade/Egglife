import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { productColors } from "@/data/products.js";

export default function Products() {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["/api/products"],
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-50 to-yellow-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-dark mb-4">
                Our Products
              </h1>
              <p className="text-lg text-gray-medium">
                Discover our complete line of egg white wraps and grab & go options
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="h-64 bg-gray-200 animate-pulse"></div>
                    <div className="p-6">
                      <div className="h-6 bg-gray-200 rounded mb-2 animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {products.filter(product => productColors[product.slug]).map((product) => (
                  <Link key={product.id} href={`/product/${product.slug}`}>
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow cursor-pointer">
                      <div className="relative overflow-hidden">
                        <img 
                          src={product.imageUrl} 
                          alt={`${product.name} Egg White Wraps`} 
                          className="w-full h-64 object-contain p-4 group-hover:scale-105 transition-transform"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all"></div>
                      </div>
                      <div className="p-6">
                        {product.category === "grab-and-go" && (
                          <span className="text-xs bg-orange-primary text-white px-2 py-1 rounded-full mb-2 inline-block">
                            GRAB & GO
                          </span>
                        )}
                        <h3 className="text-xl font-bold text-gray-dark mb-2">
                          {product.name}
                        </h3>
                        <p className="text-gray-medium text-sm">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
