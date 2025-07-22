import { Link } from "wouter";

export default function NutritionGoals() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="Two women eating egglife wraps" 
              className="rounded-xl w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-dark mb-6">
              Meet your goals one macro at a time
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="bg-orange-primary text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl">
                  1g
                </div>
                <div>
                  <h3 className="font-semibold text-gray-dark">CARBS</h3>
                  <p className="text-gray-medium text-sm">per serving</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-green-accent text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl">
                  5g
                </div>
                <div>
                  <h3 className="font-semibold text-gray-dark">PROTEIN</h3>
                  <p className="text-gray-medium text-sm">per serving</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl">
                  25
                </div>
                <div>
                  <h3 className="font-semibold text-gray-dark">CALORIES</h3>
                  <p className="text-gray-medium text-sm">per serving</p>
                </div>
              </div>
            </div>
            
            <Link href="/learn/our-wraps">
              <button className="bg-orange-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                See how we stack up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
