import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend only - no actual authentication
    console.log("Login attempted with:", { email, password });
    alert("Login functionality is frontend only - no authentication implemented");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center text-[#521FCC]">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-center">
            Sign in to your EggLife account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-full border-gray-300 focus:border-[#521FCC] focus:ring-[#521FCC]"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-full border-gray-300 focus:border-[#521FCC] focus:ring-[#521FCC]"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="rounded border-gray-300 text-[#521FCC] focus:ring-[#521FCC]"
                />
                <Label htmlFor="remember" className="text-sm">Remember me</Label>
              </div>
              <Link href="/forgot-password">
                <span className="text-sm text-[#521FCC] hover:underline cursor-pointer">
                  Forgot password?
                </span>
              </Link>
            </div>
            <Button
              type="submit"
              className="w-full rounded-full bg-[#521FCC] hover:bg-[#4118a8] text-white py-3"
            >
              Sign In
            </Button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link href="/signup">
                <span className="text-[#521FCC] hover:underline cursor-pointer font-medium">
                  Sign up
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