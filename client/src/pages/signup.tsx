import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    marketingEmails: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    
    if (!formData.agreeToTerms) {
      alert("Please agree to the terms and conditions");
      return;
    }

    // Frontend only - no actual authentication
    console.log("Signup attempted with:", formData);
    alert("Signup functionality is frontend only - no authentication implemented");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center text-[#521FCC]">
            Join EggLife
          </CardTitle>
          <CardDescription className="text-center">
            Create your account to get started
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  className="rounded-full border-gray-300 focus:border-[#521FCC] focus:ring-[#521FCC]"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  className="rounded-full border-gray-300 focus:border-[#521FCC] focus:ring-[#521FCC]"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="rounded-full border-gray-300 focus:border-[#521FCC] focus:ring-[#521FCC]"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className="rounded-full border-gray-300 focus:border-[#521FCC] focus:ring-[#521FCC]"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                className="rounded-full border-gray-300 focus:border-[#521FCC] focus:ring-[#521FCC]"
                required
              />
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                />
                <Label htmlFor="agreeToTerms" className="text-sm">
                  I agree to the{" "}
                  <Link href="/terms">
                    <span className="text-[#521FCC] hover:underline">Terms & Conditions</span>
                  </Link>
                  {" "}and{" "}
                  <Link href="/privacy">
                    <span className="text-[#521FCC] hover:underline">Privacy Policy</span>
                  </Link>
                </Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="marketingEmails"
                  checked={formData.marketingEmails}
                  onCheckedChange={(checked) => handleInputChange("marketingEmails", checked as boolean)}
                />
                <Label htmlFor="marketingEmails" className="text-sm">
                  I would like to receive marketing emails and updates
                </Label>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full rounded-full bg-[#521FCC] hover:bg-[#4118a8] text-white py-3"
            >
              Create Account
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/login">
                <span className="text-[#521FCC] hover:underline cursor-pointer font-medium">
                  Sign in
                </span>
              </Link>
            </p>
          </div>
          
          <div className="mt-4 text-center">
            <Link href="/">
              <span className="text-sm text-gray-500 hover:text-[#521FCC] cursor-pointer">
                ← Back to Home
              </span>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}