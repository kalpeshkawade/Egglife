import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Users } from "lucide-react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const newsletterMutation = useMutation({
    mutationFn: (email) => apiRequest("POST", "/api/newsletter/subscribe", { email }),
    onSuccess: () => {
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive $2.00 back on your first purchase and delicious recipes in your inbox.",
      });
      setEmail("");
    },
    onError: (error) => {
      toast({
        title: "Subscription failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      toast({
        title: "Email required",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    newsletterMutation.mutate(email);
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <div className="bg-orange-primary rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <Users className="text-white" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-gray-dark mb-4">
              Join our culinary community
            </h2>
            <p className="text-lg text-gray-medium mb-8">
              Stay up to date, discover delicious recipes, and get $2.00 back on your first in-store purchase of egglife egg white wraps
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-primary" 
                required 
              />
              <button 
                type="submit" 
                disabled={newsletterMutation.isPending}
                className="bg-orange-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors disabled:opacity-50"
              >
                {newsletterMutation.isPending ? "Joining..." : "Join the community"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
