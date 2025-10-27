import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import worldMapBg from "@/assets/world-map-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with world map */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${worldMapBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Profile Image */}
          <div className="order-2 md:order-1 animate-fade-in flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="relative overflow-hidden rounded-full shadow-2xl">
                <img
                  src={profileImage}
                  alt="Raja Mobin Ullah Khan - Geopolitical Analyst"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="order-1 md:order-2 space-y-6 text-center md:text-left animate-fade-in-slow">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-foreground">RAJA MOBIN</span>
              <br />
              <span className="text-foreground">ULLAH KHAN</span>
            </h1>

            <p className="text-xl md:text-2xl text-foreground/70 font-light">
              Geopolitical Analyst & Author
            </p>

            <div className="h-1 w-24 bg-accent mx-auto md:mx-0" />

            <p className="text-lg text-foreground/80 leading-relaxed max-w-xl">
              Exposing the hidden machinery of Western interventions and coups that 
              reshaped nations. Dive deep into the geopolitical strategies, power dynamics, 
              and untold narratives that mainstream discourse deliberately obscures.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-lg group">
                <BookOpen className="w-5 h-5 mr-2" />
                Get the E-Book
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="secondary" className="text-lg">
                Read Latest Insights
              </Button>
            </div>

            <p className="text-accent text-sm font-medium italic pt-4">
              "The story they won't tell"
            </p>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
