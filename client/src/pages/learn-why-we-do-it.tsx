import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Heart, Users, Utensils, Target } from "lucide-react";

export default function LearnWhyWeDoIt() {
  const values = [
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Food Freedom",
      description: "Everyone deserves to enjoy the foods they love without compromising their health goals or dietary restrictions."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health Accessibility",
      description: "Making nutritious, high-protein foods accessible to people following keto, low-carb, gluten-free, and other specialized diets."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community First",
      description: "Building a supportive community where people can share recipes, tips, and celebrate their health journeys together."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation",
      description: "Continuously innovating to create products that make healthy eating easier, more convenient, and more delicious."
    }
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
                Why We Do It
              </h1>
              <p className="text-lg text-gray-medium mb-8">
                Our mission goes beyond creating great products - we're on a mission to democratize healthy eating
              </p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-dark mb-6">
                    Food Freedom for Everyone
                  </h2>
                  <p className="text-lg text-gray-medium mb-6">
                    We believe that taste and nutrition are not mutually exclusive. Too often, people feel forced 
                    to choose between foods they love and foods that support their health goals. At EggLife, we're 
                    changing that narrative.
                  </p>
                  <p className="text-lg text-gray-medium mb-6">
                    Whether you're managing diabetes, following a ketogenic diet, avoiding gluten, or simply trying 
                    to increase your protein intake, our egg white wraps let you enjoy familiar favorites like 
                    burritos, quesadillas, and sandwiches without compromising your dietary needs.
                  </p>
                  <p className="text-lg text-gray-medium">
                    Because everyone deserves food freedom - the ability to eat what they love while feeling 
                    great about their choices.
                  </p>
                </div>
                
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1559070169-a3077159ee16?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                    alt="Diverse group of people enjoying healthy meals together"
                    className="rounded-xl w-full shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-dark mb-12 text-center">
                Our Core Values
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-orange-primary">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-dark mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-medium">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* The Problem We Solve */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                    alt="Person reading nutrition labels in grocery store"
                    className="rounded-xl w-full shadow-lg"
                  />
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-gray-dark mb-6">
                    The Problem We Solve
                  </h2>
                  <p className="text-lg text-gray-medium mb-6">
                    Millions of people follow specialized diets - whether by choice or necessity. Yet the food 
                    industry has been slow to provide convenient, tasty options that fit these lifestyles.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-primary rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-gray-medium">
                        Keto dieters struggled to find convenient wrap options with under 2g carbs
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-primary rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-gray-medium">
                        People with celiac disease had limited gluten-free bread alternatives
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-primary rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-gray-medium">
                        Athletes needed portable, high-protein options without excess calories
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-primary rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-gray-medium">
                        Diabetics wanted familiar foods that wouldn't spike blood sugar
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-medium">
                    We saw this gap and knew we could do better. That's why we created EggLife.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Impact */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-dark mb-12 text-center">
                Our Impact
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white rounded-xl p-8 text-center shadow-lg">
                  <div className="text-4xl font-bold text-orange-primary mb-2">1M+</div>
                  <h3 className="text-lg font-bold text-gray-dark mb-2">People Served</h3>
                  <p className="text-gray-medium text-sm">
                    Over one million people have experienced food freedom with EggLife wraps
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-8 text-center shadow-lg">
                  <div className="text-4xl font-bold text-orange-primary mb-2">150+</div>
                  <h3 className="text-lg font-bold text-gray-dark mb-2">Recipes Created</h3>
                  <p className="text-gray-medium text-sm">
                    Our community has developed over 150 creative recipes using our wraps
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-8 text-center shadow-lg">
                  <div className="text-4xl font-bold text-orange-primary mb-2">98%</div>
                  <h3 className="text-lg font-bold text-gray-dark mb-2">Customer Satisfaction</h3>
                  <p className="text-gray-medium text-sm">
                    Nearly all our customers say EggLife has improved their eating experience
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-dark mb-6 text-center">
                  Real Stories, Real Impact
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-medium italic mb-4">
                      "As someone with celiac disease, finding convenient, tasty gluten-free options was always 
                      a challenge. EggLife wraps have completely changed my meal planning. I can finally enjoy 
                      burritos and quesadillas again!"
                    </p>
                    <div className="font-bold text-gray-dark">- Sarah M., Celiac Warrior</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-medium italic mb-4">
                      "I've been keto for three years, and EggLife wraps are a game-changer. The macros are 
                      perfect, the taste is amazing, and they make my meal prep so much easier. This is real 
                      food freedom."
                    </p>
                    <div className="font-bold text-gray-dark">- Mike R., Keto Coach</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Vision */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-dark mb-6">
                Looking Forward
              </h2>
              <p className="text-lg text-gray-medium mb-8">
                We're just getting started. Our vision is a world where everyone can enjoy delicious, 
                satisfying food that aligns with their health goals and dietary needs - without compromise.
              </p>
              
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-8 mb-8">
                <h3 className="text-xl font-bold text-gray-dark mb-4">
                  Join Our Mission
                </h3>
                <p className="text-gray-medium mb-6">
                  Every time you choose EggLife, you're not just making a healthy choice for yourself - 
                  you're supporting a movement toward better, more inclusive food options for everyone.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/learn/our-wraps">
                  <Button className="bg-orange-primary hover:bg-orange-600 px-8 py-3">
                    Explore Our Products
                  </Button>
                </Link>
                <Link href="/recipes-hub">
                  <Button variant="outline" className="px-8 py-3">
                    Get Recipe Inspiration
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
