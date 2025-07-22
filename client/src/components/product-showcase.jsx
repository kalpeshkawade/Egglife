import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";

export default function ProductShowcase() {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["/api/products"],
  });

  if (isLoading) {
    return (
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-dark mb-4">
              Simple. Delicious. Nutrition.
            </h2>
            <p className="text-lg text-gray-medium">
              A versatile, protein-powered way to reimagine your favorite meals.
            </p>
          </div>
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
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-dark mb-4">
            Simple. Delicious. Nutrition.
          </h2>
          <p className="text-lg text-gray-medium">
            A versatile, protein-powered way to reimagine your favorite meals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
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
      </div>
    </section>
  );
}
