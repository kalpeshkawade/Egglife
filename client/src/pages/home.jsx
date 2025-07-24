import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import NewsletterSignup from "@/components/newsletter-signup";
import ProductShowcase from "@/components/product-showcase";
import ScrollAnimatedSection from "@/components/scroll-animated-section";
import PerfectProteinSection from "@/components/perfect-protein-section";
import FoodFreedomSection from "@/components/food-freedom-section";
import RecipeCarousel from "@/components/recipe-carousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <HeroSection />
        <NewsletterSignup />
        <ProductShowcase />
        <ScrollAnimatedSection />
        <PerfectProteinSection />
        <FoodFreedomSection />

        <RecipeCarousel />
      </main>
      
      <Footer />
    </div>
  );
}
