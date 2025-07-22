import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function LearnFAQ() {
  const faqs = [
    {
      category: "Product Information",
      questions: [
        {
          question: "What are EggLife wraps made of?",
          answer: "EggLife wraps are made primarily from egg whites with natural flavors and minimal additional ingredients like xanthan gum for texture. Each flavor has specific seasonings - for example, our Everything Bagel wrap contains garlic, onion, poppy seed, hemp seed, and sea salt."
        },
        {
          question: "How many carbs are in EggLife wraps?",
          answer: "Most EggLife wraps contain just 1g of carbs per wrap, with our Sweet Cinnamon variety containing 2g. This makes them perfect for low-carb, keto, and diabetic-friendly diets."
        },
        {
          question: "Are EggLife wraps gluten-free?",
          answer: "Yes! All EggLife wraps are naturally gluten-free since they're made from egg whites instead of wheat flour. They're also grain-free, making them suitable for paleo diets."
        },
        {
          question: "How much protein is in each wrap?",
          answer: "Each EggLife wrap contains 5g of complete protein from egg whites. Our Grab & Go varieties contain even more protein (12-15g) due to the added protein-rich fillings."
        }
      ]
    },
    {
      category: "Storage & Preparation",
      questions: [
        {
          question: "How should I store EggLife wraps?",
          answer: "Keep EggLife wraps refrigerated at all times. They should be stored in their original packaging and used by the expiration date. Do not freeze the wraps as this can affect their texture."
        },
        {
          question: "Do I need to heat EggLife wraps before eating?",
          answer: "No, EggLife wraps can be enjoyed cold right from the refrigerator. However, many people prefer to warm them for 10-15 seconds in the microwave or briefly in a dry pan for better flexibility when rolling."
        },
        {
          question: "How long do EggLife wraps last once opened?",
          answer: "Once opened, use EggLife wraps within 5-7 days for best quality. Keep them in their original packaging and ensure they stay refrigerated."
        },
        {
          question: "Can I freeze EggLife wraps?",
          answer: "We don't recommend freezing EggLife wraps as it can change their texture and make them less pliable. For best results, keep them refrigerated and use by the expiration date."
        }
      ]
    },
    {
      category: "Dietary & Health",
      questions: [
        {
          question: "Are EggLife wraps keto-friendly?",
          answer: "Absolutely! With only 1-2g of carbs and 5g of protein per wrap, EggLife wraps fit perfectly into ketogenic diet macros. They're a great way to enjoy wraps and sandwiches while staying in ketosis."
        },
        {
          question: "Are EggLife wraps suitable for diabetics?",
          answer: "Yes, EggLife wraps are diabetic-friendly due to their very low carbohydrate content and high protein content, which helps maintain stable blood sugar levels. However, always consult with your healthcare provider about dietary choices."
        },
        {
          question: "Do EggLife wraps contain cholesterol?",
          answer: "No, EggLife wraps contain zero cholesterol because they're made from egg whites only. All the cholesterol in eggs is found in the yolk, which we don't use."
        },
        {
          question: "Are EggLife wraps suitable for children?",
          answer: "Yes, EggLife wraps are a nutritious option for children, providing high-quality protein without excessive carbs or additives. However, ensure your child doesn't have an egg allergy before serving."
        }
      ]
    },
    {
      category: "Cooking & Recipes",
      questions: [
        {
          question: "Can I cook with EggLife wraps?",
          answer: "Yes! EggLife wraps are very versatile. You can use them in quesadillas, wraps, roll-ups, and even as a pizza base. They hold up well to light cooking but avoid high heat for extended periods."
        },
        {
          question: "What's the best way to make a quesadilla with EggLife wraps?",
          answer: "Heat a non-stick pan over medium-low heat. Place cheese and your favorite fillings on half the wrap, fold it over, and cook for 1-2 minutes per side until the cheese melts and the wrap is lightly golden."
        },
        {
          question: "Can I use EggLife wraps as bread replacement?",
          answer: "While EggLife wraps have a different texture than bread, they make an excellent low-carb substitute for many bread-based dishes like sandwiches, pizza crusts, and even 'pasta' when cut into strips."
        },
        {
          question: "Do you have recipe suggestions?",
          answer: "Yes! Visit our recipe hub for over 150 recipe ideas using EggLife wraps. We have everything from breakfast burritos and lunch wraps to dinner ideas and even dessert recipes."
        }
      ]
    },
    {
      category: "Availability & Purchasing",
      questions: [
        {
          question: "Where can I buy EggLife wraps?",
          answer: "EggLife wraps are available at major retailers including Walmart, Target, Kroger, Publix, Safeway, and Whole Foods. You can also order online through various grocery delivery services. Use our store locator to find the nearest location."
        },
        {
          question: "Are EggLife wraps available online?",
          answer: "Yes, you can purchase EggLife wraps through online grocery services like Amazon Fresh, Instacart, Walmart+, and Target+ for home delivery or pickup."
        },
        {
          question: "What if I can't find EggLife wraps at my local store?",
          answer: "If you can't find our products locally, try asking your store manager to stock them. You can also check our store locator for other nearby locations or order online for delivery."
        },
        {
          question: "Do you offer coupons or samples?",
          answer: "Yes! Join our newsletter to receive exclusive coupons and offers. We often have promotions that can save you money on your first purchase."
        }
      ]
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
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-gray-medium mb-8">
                Find answers to common questions about EggLife products, storage, nutrition, and more
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {faqs.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-dark mb-6 pb-2 border-b-2 border-orange-primary">
                    {category.category}
                  </h2>
                  
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, questionIndex) => (
                      <AccordionItem 
                        key={questionIndex} 
                        value={`${categoryIndex}-${questionIndex}`}
                        className="bg-gray-50 rounded-lg px-6"
                      >
                        <AccordionTrigger className="text-left text-gray-dark font-medium hover:text-orange-primary py-4">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-medium pb-4">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-dark mb-6">
                Still Have Questions?
              </h2>
              <p className="text-lg text-gray-medium mb-8">
                Can't find what you're looking for? We're here to help! Contact our customer service team or explore more about our products.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="font-bold text-gray-dark mb-2">Customer Service</h3>
                  <p className="text-gray-medium text-sm mb-4">Get help from our support team</p>
                  <Button variant="outline" className="w-full">
                    Contact Support
                  </Button>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="font-bold text-gray-dark mb-2">Store Locator</h3>
                  <p className="text-gray-medium text-sm mb-4">Find EggLife products near you</p>
                  <Link href="/where-to-buy">
                    <Button variant="outline" className="w-full">
                      Find Stores
                    </Button>
                  </Link>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="font-bold text-gray-dark mb-2">Recipe Ideas</h3>
                  <p className="text-gray-medium text-sm mb-4">Discover new ways to use our wraps</p>
                  <Link href="/recipes-hub">
                    <Button variant="outline" className="w-full">
                      Browse Recipes
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-dark mb-4">
                  Join Our Community
                </h3>
                <p className="text-gray-medium mb-6">
                  Stay updated with new products, recipes, and exclusive offers by joining our newsletter.
                </p>
                <Link href="/">
                  <Button className="bg-orange-primary hover:bg-orange-600 px-8 py-3">
                    Subscribe to Newsletter
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
