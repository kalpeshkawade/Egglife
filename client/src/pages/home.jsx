import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import PerfectProteinSection from "@/components/perfect-protein-section";
import ScrollAnimatedSection from "@/components/scroll-animated-section";
import FoodFreedomSection from "@/components/food-freedom-section";
import InfinitePossibilitiesSection from "@/components/infinite-possibilities-section";
import NewsletterSignup from "@/components/newsletter-signup";
import ProductShowcase from "../components/product-showcase";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Welcome Message */}
      <div className="bg-gradient-to-r from-purple-50 to-orange-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold" style={{ color: '#521FCC' }}>
                Welcome to EggLife!
              </h2>
              <p className="text-gray-600 text-sm">
                Explore our protein-packed recipes and products
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>

      <HeroSection />
      <NewsletterSignup />
      <ProductShowcase />
      <ScrollAnimatedSection />
      <PerfectProteinSection />
      <FoodFreedomSection />
      <InfinitePossibilitiesSection />
      <Footer />
    </div>
  );
}