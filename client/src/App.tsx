import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import RecipesHub from "@/pages/recipes-hub";
import RecipeDetail from "@/pages/recipe-detail";
import Products from "@/pages/products";
import ProductDetail from "@/pages/product-detail";
import WhereToBuy from "@/pages/where-to-buy";
import Learn from "@/pages/learn";
import LearnOurWraps from "@/pages/learn-our-wraps";
import LearnWhyEggWhites from "@/pages/learn-why-egg-whites";
import LearnFAQ from "@/pages/learn-faq";
import LearnWhyWeDoIt from "@/pages/learn-why-we-do-it";
import ContactUs from "@/pages/contact-us";
import AboutUs from "@/pages/about-us";
import Login from "@/pages/login";
import Signup from "@/pages/signup";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/recipes-hub" component={RecipesHub} />
      <Route path="/recipes/:slug" component={RecipeDetail} />
      <Route path="/products" component={Products} />
      <Route path="/product/:slug" component={ProductDetail} />
      <Route path="/where-to-buy" component={WhereToBuy} />
      <Route path="/learn" component={Learn} />
      <Route path="/learn/our-wraps" component={LearnOurWraps} />
      <Route path="/learn/why-egg-whites" component={LearnWhyEggWhites} />
      <Route path="/learn/faq" component={LearnFAQ} />
      <Route path="/learn/why-we-do-it" component={LearnWhyWeDoIt} />
      <Route path="/contact-us" component={ContactUs} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
