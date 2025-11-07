import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import worldMapBg from "@/assets/world-map-bg.jpg";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      slug: "western-intelligence",
      title: "The Western Intelligence System",
      excerpt:
        "How the Five Eyes alliance transformed from WWII codebreaking cooperation into the backbone of Western information supremacy and global surveillance.",
      date: "November 5, 2025",
      category: "Intelligence",
      readTime: "15 min read",
    },
    {
      id: 2,
      slug: "selective-morality",
      title: "Power and Principle: The West's Selective Morality",
      excerpt:
        "Examining the contradiction between Western promotion of democracy and human rights, and their abandonment when national interests are at stake.",
      date: "November 4, 2025",
      category: "Geopolitics",
      readTime: "12 min read",
    },
    {
      id: 3,
      slug: "sacred-alliances",
      title: "Sacred Alliances: West's Use of Religion as a Weapon",
      excerpt:
        "How Western powers strategically weaponized religion during the Cold War, from the Catholic Church in Poland to mujahideen in Afghanistan.",
      date: "November 3, 2025",
      category: "Religion & Politics",
      readTime: "13 min read",
    },
    {
      id: 4,
      slug: "weaponized-economics",
      title: "West's Weaponized Economics: How sanctions shape and shatter nations",
      excerpt:
        "From Cuba to Iran, examining how economic sanctions became the West's preferred tool of coercion, often causing more humanitarian damage than political change.",
      date: "November 5, 2024",
      category: "Economics",
      readTime: "10 min read",
    },
    {
      id: 5,
      slug: "debt-dependency",
      title: "Debt and Dependency: The Real Price of International Financial Aid",
      excerpt:
        "How the IMF and World Bank transformed from post-war reconstruction tools into instruments of Western control through structural adjustment programs and debt diplomacy.",
      date: "November 5, 2024",
      category: "Financial Policy",
      readTime: "11 min read",
    },
    {
      id: 6,
      slug: "convenient-tyrants",
      title: "Convenient Tyrants: How Western Support for Dictators Undermined Democracy",
      excerpt:
        "From Pinochet to Suharto, examining how Western powers systematically supported brutal dictatorships while claiming to champion democratic values worldwide.",
      date: "November 5, 2024",
      category: "Democracy",
      readTime: "9 min read",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `url(${worldMapBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-accent">Insights &</span>{" "}
              <span className="text-foreground">Analysis</span>
            </h1>
            <div className="h-1 w-24 bg-accent mx-auto mb-6" />
            <p className="text-xl text-muted-foreground">
              Deep dives into geopolitics, technology, and the narratives that shape our world
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group animate-fade-in-slow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <article className="h-full">
                  <div className="relative h-full">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-accent/50 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                    <div className="relative h-full p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition-all duration-300 flex flex-col">
                      <div className="mb-4">
                        <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                          {post.category}
                        </span>
                      </div>

                      <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-foreground/70 mb-4 flex-grow leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>

                      <div className="mt-4 flex items-center text-accent font-medium group-hover:translate-x-2 transition-transform">
                        Read more
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">Want deeper insights?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get exclusive analysis and comprehensive research in the upcoming e-book
            </p>
            <Button size="lg" className="text-lg">
              Pre-Order the E-Book
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
