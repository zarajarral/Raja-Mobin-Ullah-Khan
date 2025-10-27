import { Globe, Cpu, GraduationCap } from "lucide-react";

const AboutSection = () => {
  const expertise = [
    {
      icon: Globe,
      title: "Geopolitics",
      description:
        "Deep analysis of international relations, power dynamics, and strategic interventions that shape global affairs.",
    },
    {
      icon: Cpu,
      title: "Technology",
      description:
        "Examining the intersection of technology, surveillance, and power in the modern digital age.",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description:
        "Critical perspectives on educational systems and their role in shaping societal understanding.",
    },
  ];

  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">About</span>{" "}
              <span className="text-accent">Raja Mobin Ullah Khan</span>
            </h2>
            <div className="h-1 w-24 bg-accent mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A researcher and analyst dedicated to uncovering the hidden narratives 
              of geopolitical strategy, technological influence, and educational reform. 
              With a focus on Western interventions and covert operations, my work 
              reveals the untold stories that shape our understanding of the modern world.
            </p>
          </div>

          {/* Expertise Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="group relative animate-fade-in-slow"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-accent/50 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                <div className="relative p-8 bg-card border border-border rounded-lg hover:border-accent/50 transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-lg mb-6 group-hover:bg-accent/20 transition-colors">
                    <item.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
