import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft, Share2 } from "lucide-react";
import worldMapBg from "@/assets/world-map-bg.jpg";

const BlogPost = () => {
  const { id } = useParams();

  // Sample blog post data - in a real app, this would come from an API or CMS
  const blogPosts: Record<string, any> = {
    "1": {
      title: "The Architecture of Modern Coups: A Systematic Analysis",
      date: "October 15, 2025",
      category: "Geopolitics",
      readTime: "12 min read",
      content: [
        {
          type: "paragraph",
          text: "The modern coup d'état has evolved far beyond the traditional military takeover. Today's regime changes are sophisticated operations involving multiple layers of international coordination, media manipulation, and economic pressure.",
        },
        {
          type: "heading",
          text: "The Three Pillars of Modern Coups",
        },
        {
          type: "paragraph",
          text: "Every successful modern coup relies on three fundamental pillars: economic destabilization, media narrative control, and international legitimization. Understanding these pillars is crucial to recognizing the patterns that repeat across different nations and time periods.",
        },
        {
          type: "heading",
          text: "Economic Destabilization",
        },
        {
          type: "paragraph",
          text: "Before any physical action takes place, the target nation's economy is systematically weakened through sanctions, currency manipulation, and trade restrictions. This creates public discontent and provides the justification for 'intervention' to restore stability.",
        },
        {
          type: "paragraph",
          text: "The World Bank and IMF often play crucial roles in this phase, implementing structural adjustment programs that further weaken local industries and increase dependency on foreign aid and investment.",
        },
        {
          type: "heading",
          text: "Media Narrative Control",
        },
        {
          type: "paragraph",
          text: "Contemporary coups are as much about controlling the narrative as they are about controlling the government. Western media outlets coordinate to frame the existing government as authoritarian, corrupt, or threatening to its people, preparing international public opinion for regime change.",
        },
        {
          type: "paragraph",
          text: "Social media platforms have become new battlegrounds, with coordinated campaigns of disinformation, bot networks, and algorithmic amplification shaping public discourse both domestically and internationally.",
        },
        {
          type: "heading",
          text: "International Legitimization",
        },
        {
          type: "paragraph",
          text: "The final pillar involves securing international support or at least acquiescence. This is achieved through diplomatic pressure, strategic alliances, and the cultivation of opposition groups that can be presented as legitimate alternatives to the existing government.",
        },
        {
          type: "paragraph",
          text: "International organizations like the UN, OAS, or NATO are often leveraged to provide a veneer of legitimacy to what would otherwise be recognized as illegal interventions in sovereign nations.",
        },
        {
          type: "heading",
          text: "Case Studies and Patterns",
        },
        {
          type: "paragraph",
          text: "From Latin America to the Middle East, from Eastern Europe to Africa, these patterns repeat with remarkable consistency. Each coup follows a similar playbook, adapted to local circumstances but adhering to the same fundamental strategy.",
        },
        {
          type: "paragraph",
          text: "Understanding these patterns is not just an academic exercise—it's essential for recognizing ongoing operations and predicting future targets. The architecture of modern coups is a blueprint that continues to be deployed wherever strategic interests demand regime change.",
        },
      ],
    },
  };

  const post = blogPosts[id || "1"] || blogPosts["1"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
              to="/blogs"
              className="inline-flex items-center text-accent hover:text-accent/80 transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to all insights
            </Link>

            {/* Category Badge */}
            <div className="mb-4">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight animate-fade-in">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex items-center justify-between pb-8 mb-8 border-b border-border animate-fade-in">
              <div className="flex items-center space-x-4 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <Button variant="secondary" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>

            {/* Featured Image / Background */}
            <div className="relative h-64 md:h-96 mb-12 rounded-lg overflow-hidden animate-fade-in-slow">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `url(${worldMapBg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background/80" />
            </div>

            {/* Content */}
            <div className="prose prose-lg prose-invert max-w-none animate-fade-in-slow">
              {post.content.map((section: any, index: number) => {
                if (section.type === "heading") {
                  return (
                    <h2
                      key={index}
                      className="text-3xl font-bold text-foreground mt-12 mb-6"
                    >
                      {section.text}
                    </h2>
                  );
                }
                return (
                  <p
                    key={index}
                    className="text-lg text-foreground/90 leading-relaxed mb-6"
                  >
                    {section.text}
                  </p>
                );
              })}
            </div>

            {/* CTA Box */}
            <div className="mt-16 p-8 bg-secondary/30 border border-accent/20 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Want to dive deeper into these topics?
              </h3>
              <p className="text-foreground/80 mb-6">
                The upcoming e-book provides comprehensive analysis with extensive 
                documentation, case studies, and strategic frameworks for understanding 
                modern geopolitical operations.
              </p>
              <Button size="lg">
                Pre-Order the E-Book
              </Button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
