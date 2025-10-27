import { Button } from "@/components/ui/button";
import { BookOpen, Download, ArrowRight } from "lucide-react";
import ebookCover from "@/assets/ebook-cover.jpg";
import worldMapBg from "@/assets/world-map-bg.jpg";

const EbookSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${worldMapBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-accent">The E-Book</span>{" "}
              <span className="text-foreground">That Reveals All</span>
            </h2>
            <div className="h-1 w-24 bg-accent mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive analysis of Western-orchestrated coups and geopolitical 
              maneuvers that have shaped the modern world order
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* E-book Cover */}
            <div className="animate-fade-in">
              <div className="relative group">
                <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-all duration-500" />
                <div className="relative">
                  <img
                    src={ebookCover}
                    alt="E-book Cover"
                    className="w-full max-w-md mx-auto rounded-lg shadow-2xl border border-accent/20 transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1"
                  />
                </div>
              </div>
            </div>

            {/* E-book Details */}
            <div className="space-y-6 animate-fade-in-slow">
              <h3 className="text-3xl font-bold text-foreground">
                Unmasking the Architects of Chaos
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <p className="text-foreground/90">
                    In-depth analysis of coups and regime changes orchestrated by Western powers
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <p className="text-foreground/90">
                    Historical documentation and modern geopolitical implications
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <p className="text-foreground/90">
                    Critical insights into technology's role in shaping global power dynamics
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <p className="text-foreground/90">
                    Educational frameworks for understanding modern political landscapes
                  </p>
                </div>
              </div>

              <div className="pt-6 space-y-4">
                <Button size="lg" className="w-full sm:w-auto text-lg group">
                  <Download className="w-5 h-5 mr-2" />
                  Pre-Order Now
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>

                <p className="text-sm text-muted-foreground">
                  Available soon in digital and print formats
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6 py-4 bg-secondary/30 rounded-r-lg">
                <p className="text-foreground/90 italic">
                  "A meticulously researched examination of the covert operations 
                  and strategic interventions that have defined our geopolitical reality."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EbookSection;
