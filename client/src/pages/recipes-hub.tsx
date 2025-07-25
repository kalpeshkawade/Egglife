import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const mealTypes = [
  { label: "All", value: "" },
  { label: "Breakfast", value: "breakfast" },
  { label: "Lunch", value: "lunch" },
  { label: "Dinner", value: "dinner" },
  { label: "Snack", value: "snack" },
  { label: "Appetizer", value: "appetizer" },
  { label: "Dessert", value: "dessert" },
];

export default function RecipesHub() {
  const [location] = useLocation();
  const [selectedMeal, setSelectedMeal] = useState("");

  // Parse URL query parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const mealParam = urlParams.get("meal");
    if (mealParam) {
      setSelectedMeal(mealParam.toLowerCase());
    }
  }, [location]);

  const { data: recipes = [], isLoading } = useQuery({
    queryKey: ["/api/recipes", selectedMeal],
    queryFn: () => {
      const url = selectedMeal ? `/api/recipes?meal=${selectedMeal}` : "/api/recipes";
      return fetch(url).then(res => res.json());
    },
  });

  const handleMealFilter = (mealType) => {
    setSelectedMeal(mealType);
    const url = mealType ? `/recipes-hub?meal=${mealType}` : "/recipes-hub";
    window.history.pushState({}, "", url);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-50 to-yellow-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-dark mb-4">
                Recipe Hub
              </h1>
              <p className="text-lg text-gray-medium mb-8">
                Over 150 ways to reimagine every meal with egg white wraps
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="bg-white py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {mealTypes.map((meal) => (
                <Button
                  key={meal.value}
                  variant={selectedMeal === meal.value ? "default" : "outline"}
                  onClick={() => handleMealFilter(meal.value)}
                  className={selectedMeal === meal.value ? "bg-orange-primary hover:bg-orange-600" : ""}
                >
                  {meal.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Recipes Grid */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="h-48 bg-gray-200 animate-pulse"></div>
                    <div className="p-6">
                      <div className="h-6 bg-gray-200 rounded mb-2 animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : recipes.length === 0 ? (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold text-gray-dark mb-4">
                  No recipes found
                </h3>
                <p className="text-gray-medium">
                  Try selecting a different meal type or check back later for new recipes.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {recipes.map((recipe) => (
                  <Link key={recipe.id} href={`/recipes/${recipe.slug}`}>
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow cursor-pointer">
                      <img 
                        src={recipe.imageUrl} 
                        alt={recipe.title} 
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="secondary" className="text-xs">
                            {recipe.mealType}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {recipe.difficulty}
                          </Badge>
                        </div>
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
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
