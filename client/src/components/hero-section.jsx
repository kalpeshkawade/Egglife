import { Link } from "wouter";
import ProductCarousel from "./product-carousel";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-orange-50 to-yellow-50 py-16 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-dark mb-6">
            The Perfect Wrap<sup className="text-sm">®</sup>
          </h1>
          <div className="text-xl lg:text-2xl text-gray-medium mb-8 space-y-2">
            <div>for <span className="text-orange-primary font-semibold animate-pulse">extra protein</span></div>
            <div><span className="text-green-accent font-semibold animate-pulse">gluten free</span></div>
            <div><span className="text-blue-500 font-semibold animate-pulse">low carb</span></div>
            <div><span className="text-purple-500 font-semibold animate-pulse">eating better</span></div>
            <div><span className="text-pink-500 font-semibold animate-pulse">minding macros</span></div>
          </div>
          <p className="text-lg text-gray-medium mb-8">Wraps made with egg whites, not flour.</p>
          <Link href="/where-to-buy">
            <button className="bg-orange-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Find where to buy
            </button>
          </Link>
        </div>

        <ProductCarousel />
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-yellow-200 rounded-full opacity-30 animate-bounce delay-1000"></div>
      <div className="absolute top-1/2 right-10 w-12 h-12 bg-green-200 rounded-full opacity-25 animate-bounce delay-500"></div>
    </section>
  );
}
