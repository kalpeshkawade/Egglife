import { Link } from "wouter";
import ProductCarousel from "./product-carousel";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-orange-50 to-yellow-50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-dark mb-6">
            The Perfect Wrap<sup className="text-sm">®</sup>
          </h1>
          <div className="text-xl lg:text-2xl text-gray-medium mb-8 space-y-2">
            <div>for <span className="text-orange-primary font-semibold">extra protein</span></div>
            <div><span className="text-green-accent font-semibold">gluten free</span></div>
            <div><span className="text-blue-500 font-semibold">low carb</span></div>
            <div><span className="text-purple-500 font-semibold">eating better</span></div>
            <div><span className="text-pink-500 font-semibold">minding macros</span></div>
          </div>
          <p className="text-lg text-gray-medium mb-8">Wraps made with egg whites, not flour.</p>
          <Link href="/where-to-buy">
            <button className="bg-orange-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
              Find where to buy
            </button>
          </Link>
        </div>

        <ProductCarousel />
      </div>
    </section>
  );
}
