import { Facebook, Instagram, Mail, ExternalLink, Share2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import worldMapBg from "@/assets/world-map-bg.jpg";

const AboutSection = () => {
  const [copied, setCopied] = useState(false);

  const socialLinks = [
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/share/1CgmwraiCW/",
      description: "Follow on Facebook"
    },
    {
      icon: Instagram,
      label: "Instagram", 
      href: "https://www.instagram.com/rajamobinullahkhan?igsh=ZzJyMHdpZHFiYnR1",
      description: "Follow on Instagram"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:mobin72@gmail.com",
      description: "Send an email"
    }
  ];

  // Handle copy site link functionality
  const handleShareSite = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(window.location.origin);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = window.location.origin;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  return (
    <section className="relative py-24 bg-secondary/20 overflow-hidden">
      {/* Background with subtle world map */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${worldMapBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-secondary/20 to-secondary/30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-accent">About the Author</span>
            </h2>
            <div className="h-1 w-24 bg-accent mx-auto mb-8" />
            
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
              Raja Mobin Ullah Khan
            </h3>
            
            <p className="text-lg text-foreground/90 max-w-3xl mx-auto leading-relaxed mb-12">
              Raja Mobin Ullah Khan is a writer and thinker who explores the realities behind modern power, perception, and global politics. His work challenges common narratives and invites readers to see the world without filters.
            </p>
          </div>

          {/* Connect Section */}
          <div className="bg-card/50 backdrop-blur-sm border border-accent/20 rounded-2xl p-8 md:p-12 animate-fade-in-slow">
            <div className="text-center mb-8">
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Follow his work or reach out through:
              </h4>
              
              {/* Social Links Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    title={link.description}
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-accent/50 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                    <div className="relative flex flex-col items-center p-4 bg-background/80 backdrop-blur border border-accent/20 rounded-lg hover:border-accent/50 transition-all duration-300 group-hover:bg-accent/5">
                      <link.icon className="w-6 h-6 text-accent mb-2 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium text-foreground/80 group-hover:text-accent transition-colors">
                        {link.label}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="border-t border-accent/20 pt-8 text-center">
              <p className="text-foreground/80 mb-6 italic">
                If you found this book valuable, share it with others who think deeply about the world we live in.
              </p>
              
              <Button variant="secondary" size="lg" className="group" onClick={handleShareSite}>
                {copied ? (
                  <Check className="w-5 h-5 mr-2" />
                ) : (
                  <Share2 className="w-5 h-5 mr-2" />
                )}
                {copied ? 'Link Copied!' : 'Share This Work'}
                <ExternalLink className="w-4 h-4 ml-2 opacity-60 group-hover:opacity-100 transition-opacity" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
