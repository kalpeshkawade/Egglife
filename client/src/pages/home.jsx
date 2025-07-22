import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import NewsletterSignup from "@/components/newsletter-signup";
import ProductShowcase from "@/components/product-showcase";
import NutritionGoals from "@/components/nutrition-goals";
import RecipeCarousel from "@/components/recipe-carousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <HeroSection />
        <NewsletterSignup />
        <ProductShowcase />
        <NutritionGoals />
        
        {/* Protein Benefits Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-dark mb-6">
                  The perfect protein
                </h2>
                <p className="text-lg text-gray-medium mb-8">
                  Heart-healthy and packed with necessary nutrients, egg whites are the ultimate protein for every body.
                </p>
                <button className="bg-orange-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                  Why egg whites
                </button>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1569288052389-ddc8e049ed93?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="stack of eggs" 
                  className="rounded-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Food Freedom Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="hand holding a breakfast burrito made from an egglife egg white wrap" 
                  className="rounded-xl w-full"
                />
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-dark mb-6">
                  We stand for food freedom
                </h2>
                <p className="text-lg text-gray-medium mb-8">
                  Taste and nutrition are not mutually exclusive. Enjoy the foods you love and flavors you crave, regardless of dietary lifestyle.
                </p>
                <button className="bg-orange-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                  Why we do it
                </button>
                <div className="mt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=200" 
                    alt="collection of dietary stickers" 
                    className="w-full max-w-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <RecipeCarousel />
      </main>
      
      <Footer />
    </div>
  );
}
