import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <div className="relative py-32 bg-gradient-to-br from-purple-50 to-orange-50 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            <span style={{ color: '#521FCC' }}>About</span> EggLife
          </h1>
          <p className="text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing the way the world thinks about wraps, one egg white at a time
          </p>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 opacity-20">
          <img
            src="https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe889a/67e688cd90020d679ef23923_protein-sticker-02.svg"
            alt="Protein Sticker"
            className="w-24 h-24 animate-pulse"
          />
        </div>
        <div className="absolute bottom-20 left-10 opacity-20">
          <img
            src="https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe889a/67e688cd44f8642076065aa5_protein-sticker-01.svg"
            alt="Protein Sticker"
            className="w-32 h-32 animate-bounce"
          />
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8" style={{ color: '#521FCC' }}>
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  EggLife was founded with a simple yet revolutionary idea: to create the perfect wrap using egg whites instead of traditional flour. What started as a quest for a healthier, protein-packed alternative has grown into a movement that's changing how people think about their food choices.
                </p>
                <p>
                  Our journey began when we realized that most wraps on the market were filled with empty carbs and lacking in nutritional value. We knew there had to be a better way – a way to enjoy the foods we love while nourishing our bodies with real, wholesome ingredients.
                </p>
                <p>
                  Today, EggLife egg white wraps are enjoyed by millions of people who refuse to compromise between taste and nutrition. We're proud to offer a product that's not just better for you, but better for your lifestyle.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe889a/67d46f1ca88fba5bdcfe8a24_why-dd.webp"
                alt="EggLife Manufacturing"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Values Section */}
      <div className="py-20" style={{ backgroundColor: '#EAE5FA' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16" style={{ color: '#521FCC' }}>
            Mission & Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission Card */}
            <Card className="bg-white border-0 shadow-xl h-full">
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-primary to-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">M</span>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#521FCC' }}>
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed flex-grow">
                  To revolutionize the food industry by creating innovative, protein-rich alternatives that help people live healthier, more fulfilling lives without sacrificing taste or convenience.
                </p>
              </CardContent>
            </Card>

            {/* Innovation Card */}
            <Card className="bg-white border-0 shadow-xl h-full">
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">I</span>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#521FCC' }}>
                  Innovation
                </h3>
                <p className="text-gray-700 leading-relaxed flex-grow">
                  We continuously push the boundaries of food science to create products that are not just nutritious, but delicious and versatile enough to fit any lifestyle.
                </p>
              </CardContent>
            </Card>

            {/* Quality Card */}
            <Card className="bg-white border-0 shadow-xl h-full">
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-pink-500 to-pink-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">Q</span>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#521FCC' }}>
                  Quality
                </h3>
                <p className="text-gray-700 leading-relaxed flex-grow">
                  Every EggLife product is made with the highest quality ingredients and manufactured to the strictest standards, ensuring consistency and excellence in every bite.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* The EggLife Difference Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16" style={{ color: '#521FCC' }}>
            The EggLife <span style={{ color: '#ec4899' }}>Difference</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe889a/67d46f1ca88fba5bdcfe8943_hm-protein%20.webp"
                alt="EggLife Protein Content"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#521FCC' }}>
                      5g of Protein Per Wrap
                    </h3>
                    <p className="text-gray-700">
                      Each EggLife wrap delivers 5 grams of complete protein, giving you sustained energy and helping you reach your nutrition goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#521FCC' }}>
                      Zero Carbs
                    </h3>
                    <p className="text-gray-700">
                      Unlike traditional flour-based wraps, EggLife wraps contain zero carbs, making them perfect for keto, low-carb, and diabetic-friendly diets.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#521FCC' }}>
                      Clean Ingredients
                    </h3>
                    <p className="text-gray-700">
                      Made with simple, recognizable ingredients – no artificial preservatives, colors, or flavors. Just real food, the way it should be.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#521FCC' }}>
                      Versatile & Delicious
                    </h3>
                    <p className="text-gray-700">
                      From breakfast burritos to lunch wraps to creative dinner solutions – EggLife wraps adapt to your culinary imagination.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20" style={{ backgroundColor: '#EAE5FA' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8" style={{ color: '#521FCC' }}>
            Join Our <span style={{ color: '#ec4899' }}>Team</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
            We're always looking for passionate individuals who share our commitment to innovation, quality, and making a positive impact on people's lives through better nutrition.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Culture Values */}
            <Card className="bg-white border-0 shadow-xl">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#521FCC' }}>
                  Innovation Culture
                </h3>
                <p className="text-gray-700">
                  We encourage creative thinking and bold ideas that push the boundaries of what's possible.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-xl">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#521FCC' }}>
                  Work-Life Balance
                </h3>
                <p className="text-gray-700">
                  We believe in supporting our team members' personal and professional growth.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-xl">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#521FCC' }}>
                  Impact-Driven
                </h3>
                <p className="text-gray-700">
                  Every role contributes directly to our mission of revolutionizing nutrition.
                </p>
              </CardContent>
            </Card>
          </div>

          <a href="https://secure4.saashr.com/ta/6106820.careers?CareersSearch&ein_id=68281472" target="_blank" rel="noopener noreferrer">
            <Button className="bg-orange-primary hover:bg-orange-600 text-white px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Explore Career Opportunities
            </Button>
          </a>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#521FCC' }}>
            Ready to Learn More?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Have questions about our story, our products, or want to get in touch? We'd love to hear from you.
          </p>
          <a href="/contact-us">
            <Button className="bg-orange-primary hover:bg-orange-600 text-white px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Contact Us
            </Button>
          </a>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}