import { useState } from "react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { productColors } from "../data/products.js";

export default function ProductShowcase() {
  const { data: allProducts = [], isLoading } = useQuery({
    queryKey: ["/api/products"],
  });

  // Map product slugs to color keys
  const slugToColorMap = {
    'original-wrap': 'original',
    'southwest-wrap': 'southwest', 
    'everything-bagel-wrap': 'everything-bagel',
    'roasted-garlic-herb-wrap': 'roasted-garlic-herb',
    'sweet-cinnamon-wrap': 'sweet-cinnamon',
    'garden-salsa-wrap': 'garden-salsa'
  };

  // Transform database products to showcase format with colors
  const wrapProducts = allProducts
    .filter(product => product.category === "wrap" && slugToColorMap[product.slug])
    .map(product => {
      const colorKey = slugToColorMap[product.slug];
      const colors = productColors[colorKey] || productColors.original;
      return {
        id: product.id,
        name: product.flavor,
        slug: product.slug,
        description: product.description,
        color: colors.primary,
        textColor: `text-[${colors.primary}]`,
        imageUrl: product.imageUrl,
        hoverImageUrl: product.hoverImageUrl
      };
    });

  // Add Grab & Go products at the end
  const grabGoProducts = allProducts
    .filter(product => product.category === "grab-and-go")
    .map(product => {
      const colorKey = slugToColorMap[product.slug] || 'original';
      const colors = productColors[colorKey] || productColors.original;
      return {
        id: product.id,
        name: `GRAB & GO ${product.flavor}`,
        slug: product.slug,
        description: product.description,
        color: colors.primary,
        textColor: `text-[${colors.primary}]`,
        imageUrl: product.imageUrl,
        hoverImageUrl: product.hoverImageUrl
      };
    });

  const allShowcaseProducts = [...wrapProducts, ...grabGoProducts];

  if (isLoading) {
    return (
      <section className="py-20" style={{ backgroundColor: '#EAE5FA' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-8">
              <span className="block" style={{ color: '#521FCC' }}>Simple.</span>
              <span className="block" style={{ color: '#ec4899' }}>Delicious.</span>
              <span className="block" style={{ color: '#521FCC' }}>Nutrition.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 animate-pulse">
                <div className="h-48 bg-gray-200 rounded-xl mb-4"></div>
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20" style={{ backgroundColor: '#EAE5FA' }}>
      <div className="container mx-auto px-4">
        {/* Header Section - Matching exact EggLife styling */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            <span className="block" style={{ color: '#521FCC' }}>Simple.</span>
            <span className="block" style={{ color: '#ec4899' }}>Delicious.</span>
            <span className="block" style={{ color: '#521FCC' }}>Nutrition.</span>
          </h2>
          <p className="text-2xl md:text-3xl font-light max-w-5xl mx-auto leading-relaxed mt-12" style={{ color: '#521FCC' }}>
            A versatile, protein-powered way to reimagine your favorite meals.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allShowcaseProducts.map((product) => (
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
          {/* Main Product Image */}
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
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
          <h3 className={`text-2xl font-bold mb-6 capitalize transition-colors duration-300 ${product.textColor}`}>
            {product.name}
          </h3>

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