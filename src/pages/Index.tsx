
import { useSmoothScroll } from "@/components/SmoothScroll";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Templates from "@/components/Templates";
import Footer from "@/components/Footer";

const Index = () => {
  useSmoothScroll();

  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Templates />
      <Footer />
      <ExitIntentPopup />
    </div>
  );
};

export default Index;
