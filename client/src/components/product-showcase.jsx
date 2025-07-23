import { useState } from "react";
import { Link } from "wouter";

export default function ProductShowcase() {
  const products = [
    {
      id: 1,
      name: "original",
      slug: "original",
      description: "A soft, light, and clean canvas.",
      color: "#E8B4A6", // Matching the original wrap color
      textColor: "text-[#E8B4A6]",
      imageUrl: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67e17e6ef78f84f6fb1b73ad_egglife-original-wrap-front.webp",
      hoverImageUrl: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe8c0d_wrap-01.webp"
    },
    {
      id: 2,
      name: "roasted garlic & herb",
      slug: "roasted-garlic-herb", 
      description: "A flavorful combination of roasted garlic and chives with a refreshing blend of basil, parsley, and rosemary.",
      color: "#7CAA6D", // Green color matching the herb wrap
      textColor: "text-[#7CAA6D]",
      imageUrl: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67e17d45f3f5d43d2fbccf96_egglife-roasted-garlic-herb-wrap-front.webp",
      hoverImageUrl: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe944a_rgh-wrap-hover_v2.webp"
    },
    {
      id: 3,
      name: "everything bagel",
      slug: "everything-bagel",
      description: "A mouth-watering mixture of garlic, onion, poppy seed, hemp seed, and sea salt.",
      color: "#D4A574", // Tan/brown color matching everything bagel
      textColor: "text-[#D4A574]",
      imageUrl: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67e17e0cf1c15b8775a11ca9_egglife-everything-wrap-front.webp",
      hoverImageUrl: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe9449_ec-wrap-hover_v2.webp"
    },
    {
      id: 4,
      name: "sweet cinnamon",
      slug: "sweet-cinnamon",
      description: "A sweet sprinkle of cinnamon and vanilla, naturally sweetened with monk fruit.",
      color: "#C67B47", // Cinnamon brown color
      textColor: "text-[#C67B47]",
      imageUrl: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67e17d2ca9260403af628532_egglife-cinnamon-wrap-front.webp",
      hoverImageUrl: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe8c0b_wrap-05.webp"
    },
    {
      id: 5,
      name: "garden salsa",
      slug: "garden-salsa",
      description: "A zesty mix of just-picked flavors including peppers, onion, and garlic.",
      color: "#E74C3C", // Red color matching salsa
      textColor: "text-[#E74C3C]",
      imageUrl: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67e17d1e43bad76657f1fed9_egglife-garden-salsa-wrap-front.webp",
      hoverImageUrl: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe93ba_garden-salsa-wrap.webp"
    },
    {
      id: 6,
      name: "southwest",
      slug: "southwest",
      description: "A flavorful blend of cumin, garlic, onion, and peppers.",
      color: "#F39C12", // Orange/yellow color matching southwest
      textColor: "text-[#F39C12]",
      imageUrl: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67e17d69c67c308cb11d1369_egglife-southwest-wrap-front.webp",
      hoverImageUrl: "https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe88c1/67d46f1ca88fba5bdcfe8c07_wrap-03.webp"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Header Section - Matching exact EggLife styling */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
            <span className="block text-gray-900">Simple.</span>
            <span className="block text-gray-900">Delicious.</span>
            <span className="block text-gray-900">Nutrition.</span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-600 font-light max-w-5xl mx-auto leading-relaxed mt-12">
            A versatile, protein-powered way to reimagine your favorite meals.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/product/${product.slug}`}>
      <div
        className="group cursor-pointer relative overflow-hidden rounded-2xl bg-gray-50 transition-all duration-500 hover:scale-105"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container with Oval Hover Effect */}
        <div className="relative h-80 overflow-hidden">
          {/* Regular Product Image */}
          <img
            src={product.imageUrl}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              isHovered ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
            }`}
          />
          
          {/* Oval Egg-shaped Hover Image */}
          <div
            className={`absolute inset-0 ${
              isHovered ? 'animate-oval-expand opacity-100' : 'animate-oval-contract opacity-0'
            }`}
            style={{
              background: `url(${product.hoverImageUrl}) center/cover no-repeat`,
              clipPath: 'ellipse(0% 0% at 50% 50%)'
            }}
          />
          
          {/* Overlay for better text readability */}
          <div 
            className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500 ${
              isHovered ? 'opacity-70' : 'opacity-0'
            }`}
          />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Product Name - Matching product color */}
          <h3 className={`text-2xl font-bold mb-4 capitalize transition-colors duration-300 ${product.textColor}`}>
            {product.name}
          </h3>
          
          {/* Product Name repeated 3 times as in reference */}
          <div className={`text-sm font-medium mb-4 space-y-1 ${product.textColor} opacity-60`}>
            <div>{product.name}</div>
            <div>{product.name}</div>
            <div>{product.name}</div>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Hover Border Effect */}
        <div 
          className={`absolute inset-0 border-2 rounded-2xl transition-all duration-300 ${
            isHovered ? 'border-opacity-50' : 'border-transparent'
          }`}
          style={{ borderColor: isHovered ? product.color : 'transparent' }}
        />
      </div>
    </Link>
  );
}