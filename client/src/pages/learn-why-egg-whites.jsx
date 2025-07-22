import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Heart, Zap, Shield, Dumbbell } from "lucide-react";

export default function LearnWhyEggWhites() {
  const benefits = [
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: "Complete Protein",
      description: "Egg whites contain all 9 essential amino acids your body needs for muscle building and repair."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Heart Healthy",
      description: "Zero cholesterol and saturated fat, making them an excellent choice for cardiovascular health."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Quick Energy",
      description: "Easily digestible protein that provides sustained energy without blood sugar spikes."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Immune Support",
      description: "Rich in selenium and other nutrients that support immune system function."
    }
  ];

  const nutritionFacts = [
    { nutrient: "Protein", amount: "5g", percentage: "10%" },
    { nutrient: "Carbs", amount: "1g", percentage: "0%" },
    { nutrient: "Fat", amount: "0g", percentage: "0%" },
    { nutrient: "Cholesterol", amount: "0mg", percentage: "0%" },
    { nutrient: "Sodium", amount: "55mg", percentage: "2%" },
    { nutrient: "Potassium", amount: "54mg", percentage: "1%" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-50 to-yellow-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-dark mb-4">
                Why Egg Whites?
              </h1>
              <p className="text-lg text-gray-medium mb-8">
                Discover the science behind nature's perfect protein and why we chose egg whites as our foundation
              </p>
            </div>
          </div>
        </section>

        {/* The Perfect Protein */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-dark mb-6">
                    The Perfect Protein
                  </h2>
                  <p className="text-lg text-gray-medium mb-6">
                    Egg whites are considered the gold standard of protein quality. They contain the highest 
                    biological value of any whole food protein, meaning your body can use nearly 100% of the 
                    protein for essential functions.
                  </p>
                  <p className="text-lg text-gray-medium mb-8">
                    Unlike many protein sources, egg whites are naturally free from carbohydrates, fat, and 
                    cholesterol, making them ideal for anyone looking to increase protein intake without 
                    adding unwanted calories or macros.
                  </p>
                  
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-dark mb-4">Biological Value Score</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-medium">Egg Whites</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-green-500 rounded"></div>
                          <span className="font-bold text-green-600">100</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-medium">Whey Protein</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 h-2 bg-blue-400 rounded"></div>
                          <span className="font-bold text-blue-600">85</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-medium">Chicken Breast</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-yellow-500 rounded"></div>
                          <span className="font-bold text-yellow-600">79</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1569288052389-ddc8e049ed93?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                    alt="Fresh eggs showcasing natural protein source"
                    className="rounded-xl w-full shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Health Benefits */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-dark mb-12 text-center">
                Health Benefits
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-primary">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-dark mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-medium">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Nutrition Facts */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-dark mb-12 text-center">
                Nutrition Facts
              </h2>
              
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-dark mb-2">Per EggLife Wrap</h3>
                  <p className="text-gray-medium">Serving Size: 1 wrap (26g)</p>
                </div>
                
                <div className="space-y-4">
                  {nutritionFacts.map((fact, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                      <span className="font-medium text-gray-dark">{fact.nutrient}</span>
                      <div className="text-right">
                        <span className="font-bold text-gray-dark mr-4">{fact.amount}</span>
                        <span className="text-gray-medium text-sm">{fact.percentage} DV*</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <p className="text-gray-500 text-sm mt-6">
                  *Percent Daily Values are based on a 2,000 calorie diet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Science Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                    alt="Scientific research and nutrition studies"
                    className="rounded-xl w-full shadow-lg"
                  />
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-gray-dark mb-6">
                    Backed by Science
                  </h2>
                  <p className="text-lg text-gray-medium mb-6">
                    Decades of nutritional research have consistently shown that egg white protein:
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-primary rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-gray-medium">
                        Promotes muscle protein synthesis more effectively than plant proteins
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-primary rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-gray-medium">
                        Supports healthy weight management through increased satiety
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-primary rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-gray-medium">
                        Provides essential amino acids in optimal ratios for human needs
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-primary rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-gray-medium">
                        Contains bioactive compounds that support immune function
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-dark mb-6">
                Experience the EggLife Difference
              </h2>
              <p className="text-lg text-gray-medium mb-8">
                Ready to fuel your body with the perfect protein? Discover our complete line of egg white wraps.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/learn/our-wraps">
                  <Button className="bg-orange-primary hover:bg-orange-600 px-8 py-3">
                    Explore Our Products
                  </Button>
                </Link>
                <Link href="/where-to-buy">
                  <Button variant="outline" className="px-8 py-3">
                    Find Where to Buy
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
