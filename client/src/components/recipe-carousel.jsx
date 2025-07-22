import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function RecipeCarousel() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const { data: recipes = [], isLoading } = useQuery({
    queryKey: ["/api/recipes"],
  });

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  if (isLoading) {
    return (
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-dark mb-4">
              Six flavors. Infinite possibilities.
            </h2>
            <p className="text-lg text-gray-medium mb-8">
              Over 150 ways to reimagine every meal.
            </p>
          </div>
          <div className="flex space-x-6 overflow-x-auto pb-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex-none w-80">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <div className="h-48 bg-gray-200 animate-pulse"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
                  </div>
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
            Six flavors. Infinite possibilities.
          </h2>
          <p className="text-lg text-gray-medium mb-8">
            Over 150 ways to reimagine every meal.
          </p>
          <Link href="/recipes-hub">
            <button className="bg-orange-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
              Get started
            </button>
          </Link>
        </div>

        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg ${
              canScrollLeft ? "text-gray-dark hover:bg-gray-50" : "text-gray-300 cursor-not-allowed"
            }`}
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg ${
              canScrollRight ? "text-gray-dark hover:bg-gray-50" : "text-gray-300 cursor-not-allowed"
            }`}
          >
            <ChevronRight size={24} />
          </button>

          {/* Recipe Carousel */}
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {recipes.map((recipe) => (
              <div key={recipe.id} className="flex-none w-80">
                <Link href={`/recipes/${recipe.slug}`}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow cursor-pointer">
                    <img 
                      src={recipe.imageUrl} 
                      alt={recipe.title} 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-dark">
                        {recipe.title}
                      </h3>
                      <p className="text-gray-medium text-sm mt-2">
                        {recipe.mealType} • {recipe.difficulty} • {recipe.prepTime + (recipe.cookTime || 0)} min
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
