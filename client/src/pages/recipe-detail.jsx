import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ChefHat } from "lucide-react";
import NotFound from "./not-found";

export default function RecipeDetail() {
  const [match, params] = useRoute("/recipes/:slug");
  
  const { data: recipe, isLoading, error } = useQuery({
    queryKey: ["/api/recipes", params?.slug],
    queryFn: () => fetch(`/api/recipes/${params?.slug}`).then(res => {
      if (!res.ok) throw new Error("Recipe not found");
      return res.json();
    }),
    enabled: !!params?.slug,
  });

  if (!match) return <NotFound />;
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="h-64 bg-gray-200 rounded mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="h-6 bg-gray-200 rounded mb-4"></div>
                <div className="space-y-2">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-4 bg-gray-200 rounded"></div>
                  ))}
                </div>
              </div>
              <div>
                <div className="h-6 bg-gray-200 rounded mb-4"></div>
                <div className="space-y-2">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="h-4 bg-gray-200 rounded"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !recipe) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Recipe Header */}
        <section className="bg-gradient-to-r from-orange-50 to-yellow-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">{recipe.mealType}</Badge>
                <Badge variant="outline">{recipe.difficulty}</Badge>
                {recipe.tags?.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-dark mb-4">
                {recipe.title}
              </h1>
              
              <p className="text-lg text-gray-medium mb-8">
                {recipe.description}
              </p>
              
              <div className="flex flex-wrap gap-6 text-gray-medium">
                <div className="flex items-center gap-2">
                  <Clock size={20} />
                  <span>
                    {recipe.prepTime + (recipe.cookTime || 0)} minutes total
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={20} />
                  <span>{recipe.servings} servings</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChefHat size={20} />
                  <span>{recipe.difficulty}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recipe Image */}
        <section className="bg-white py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img 
                src={recipe.imageUrl} 
                alt={recipe.title}
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Recipe Content */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Ingredients */}
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-dark mb-6">
                    Ingredients
                  </h2>
                  <ul className="space-y-3">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-orange-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-medium">{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Instructions */}
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-dark mb-6">
                    Instructions
                  </h2>
                  <ol className="space-y-4">
                    {recipe.instructions.map((instruction, index) => (
                      <li key={index} className="flex gap-4">
                        <div className="bg-orange-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-gray-medium pt-1">{instruction}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Nutrition Info */}
              {recipe.nutrition && (
                <div className="bg-white rounded-xl p-8 shadow-lg mt-12">
                  <h2 className="text-2xl font-bold text-gray-dark mb-6">
                    Nutrition Information
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="bg-orange-primary text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-2">
                        {recipe.nutrition.calories}
                      </div>
                      <span className="text-gray-medium font-medium">Calories</span>
                    </div>
                    <div className="text-center">
                      <div className="bg-green-accent text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-2">
                        {recipe.nutrition.protein}g
                      </div>
                      <span className="text-gray-medium font-medium">Protein</span>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-2">
                        {recipe.nutrition.carbs}g
                      </div>
                      <span className="text-gray-medium font-medium">Carbs</span>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-500 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-2">
                        {recipe.nutrition.fat}g
                      </div>
                      <span className="text-gray-medium font-medium">Fat</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
