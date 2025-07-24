import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import NotFound from "./not-found";

export default function ProductDetail() {
  const [match, params] = useRoute("/product/:slug");
  
  const { data: product, isLoading, error } = useQuery({
    queryKey: ["/api/products", params?.slug],
    queryFn: () => fetch(`/api/products/${params?.slug}`).then(res => {
      if (!res.ok) throw new Error("Product not found");
      return res.json();
    }),
    enabled: !!params?.slug,
  });

  const { data: recipes = [] } = useQuery({
    queryKey: ["/api/recipes"],
    queryFn: () => fetch("/api/recipes").then(res => res.json()),
    enabled: !!product,
  });

  // Filter recipes that use this product
  const relatedRecipes = recipes.filter(recipe => recipe.productId === product?.id);

  if (!match) return <NotFound />;
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="animate-pulse">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="h-96 bg-gray-200 rounded"></div>
              <div>
                <div className="h-8 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-8"></div>
                <div className="h-32 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !product) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Product Detail Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Product Image */}
                <div className="relative">
                  <img 
                    src={product.imageUrl} 
                    alt={`${product.name} Egg White Wraps`}
                    className="w-full h-96 object-contain rounded-xl"
                  />
                  {product.category === "grab-and-go" && (
                    <Badge className="absolute top-4 left-4 bg-orange-primary">
                      GRAB & GO
                    </Badge>
                  )}
                </div>

                {/* Product Info */}
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-dark mb-4">
                    {product.name}
                  </h1>
                  
                  <p className="text-lg text-gray-medium mb-8">
                    {product.description}
                  </p>

                  {/* Nutrition Facts */}
                  <div className="bg-gray-50 rounded-xl p-6 mb-8">
                    <h3 className="text-xl font-bold text-gray-dark mb-4">
                      Nutrition Facts
                    </h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="bg-orange-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mx-auto mb-2">
                          {product.nutrition.carbs}g
                        </div>
                        <span className="text-gray-medium text-sm font-medium">Carbs</span>
                      </div>
                      <div className="text-center">
                        <div className="bg-green-accent text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mx-auto mb-2">
                          {product.nutrition.protein}g
                        </div>
                        <span className="text-gray-medium text-sm font-medium">Protein</span>
                      </div>
                      <div className="text-center">
                        <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mx-auto mb-2">
                          {product.nutrition.calories}
                        </div>
                        <span className="text-gray-medium text-sm font-medium">Calories</span>
                      </div>
                    </div>
                    <p className="text-gray-medium text-sm mt-4">
                      Per {product.nutrition.serving_size}
                    </p>
                  </div>

                  {/* Ingredients */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-dark mb-4">
                      Ingredients
                    </h3>
                    <p className="text-gray-medium">
                      {product.ingredients?.join(", ")}
                    </p>
                  </div>

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
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Recipes */}
        {relatedRecipes.length > 0 && (
          <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-dark mb-8 text-center">
                  Recipes featuring {product.name}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {relatedRecipes.slice(0, 6).map((recipe) => (
                    <Link key={recipe.id} href={`/recipes/${recipe.slug}`}>
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow cursor-pointer">
                        <img 
                          src={recipe.imageUrl} 
                          alt={recipe.title} 
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                        />
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-dark mb-2">
                            {recipe.title}
                          </h3>
                          <p className="text-gray-medium text-sm mb-3">
                            {recipe.description}
                          </p>
                          <div className="flex items-center text-sm text-gray-medium">
                            <span>{recipe.prepTime + (recipe.cookTime || 0)} min</span>
                            <span className="mx-2">•</span>
                            <span>{recipe.servings} servings</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
