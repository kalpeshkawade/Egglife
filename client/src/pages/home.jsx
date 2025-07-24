import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import PerfectProteinSection from "@/components/perfect-protein-section";
import ScrollAnimatedSection from "@/components/scroll-animated-section";
import FoodFreedomSection from "@/components/food-freedom-section";
import InfinitePossibilitiesSection from "@/components/infinite-possibilities-section";
import NewsletterSignup from "@/components/newsletter-signup";

export default function Home() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-[#521FCC] border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Welcome Message for Authenticated Users */}
      <div className="bg-gradient-to-r from-purple-50 to-orange-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold" style={{ color: '#521FCC' }}>
                Welcome back{user?.firstName ? `, ${user.firstName}` : ''}!
              </h2>
              <p className="text-gray-600 text-sm">
                Discover new recipes and track your protein goals
              </p>
            </div>
            <a href="/api/logout">
              <Button variant="outline" className="border-2 border-[#521FCC] text-[#521FCC] hover:bg-[#521FCC] hover:text-white rounded-full px-6">
                Sign Out
              </Button>
            </a>
          </div>
        </div>
      </div>

      <HeroSection />
      <PerfectProteinSection />
      <ScrollAnimatedSection />
      <FoodFreedomSection />
      <InfinitePossibilitiesSection />
      <NewsletterSignup />
      <Footer />
    </div>
  );
}