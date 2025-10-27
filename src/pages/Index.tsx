import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import EbookSection from "@/components/EbookSection";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <EbookSection />
      <AboutSection />
    </div>
  );
};

export default Index;
