import { Link } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Learn() {
  const learnSections = [
    {
      title: "Our Wraps",
      description: "Learn about our complete line of egg white wraps and their nutritional benefits.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      href: "/learn/our-wraps"
    },
    {
      title: "Why Egg Whites",
      description: "Discover why egg whites are the perfect protein for your healthy lifestyle.",
      image: "https://images.unsplash.com/photo-1569288052389-ddc8e049ed93?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      href: "/learn/why-egg-whites"
    },
    {
      title: "FAQs",
      description: "Get answers to frequently asked questions about our products and company.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      href: "/learn/faq"
    },
    {
      title: "Why We Do It",
      description: "Learn about our mission and commitment to food freedom for everyone.",
      image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      href: "/learn/why-we-do-it"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-50 to-yellow-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-dark mb-4">
                Learn
              </h1>
              <p className="text-lg text-gray-medium">
                Everything you need to know about EggLife and our mission
              </p>
            </div>
          </div>
        </section>

        {/* Learn Sections */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {learnSections.map((section, index) => (
                <Link key={index} href={section.href}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow cursor-pointer">
                    <img 
                      src={section.image}
                      alt={section.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-dark mb-4">
                        {section.title}
                      </h3>
                      <p className="text-gray-medium">
                        {section.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
