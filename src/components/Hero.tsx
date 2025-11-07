import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, X } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import worldMapBg from "@/assets/world-map-bg.jpg";

const Hero = () => {
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  // Handle PDF download for specific language
  const handleDownloadEbook = (selectedLanguage: 'english' | 'urdu') => {
    const bookContent = {
      english: {
        pdfFile: "/The-Western-Illusion.pdf",
        fileName: "The-Western-Illusion.pdf",
      },
      urdu: {
        pdfFile: "/The-Western-Illusion-Urdu.pdf", 
        fileName: "فریبِ-مغرب.pdf",
      }
    };

    const selectedBook = bookContent[selectedLanguage];
    const link = document.createElement('a');
    link.href = selectedBook.pdfFile;
    link.download = selectedBook.fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowDownloadModal(false);
  };

  const openDownloadModal = () => {
    setShowDownloadModal(true);
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Background with world map */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `url(${worldMapBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          {/* Profile Image - Top on mobile, Left on desktop */}
          <div className="order-1 md:order-1 animate-fade-in flex justify-center">
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

          {/* Text Content - Bottom on mobile, Right on desktop */}
          <div className="order-2 md:order-2 space-y-6 text-center md:text-left animate-fade-in-slow">
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
              I try to understand how power, truth, and hidden systems shape our world. I don't have all the answers, but I keep asking what freedom really means in an age built on control.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-lg group" onClick={openDownloadModal}>
                <BookOpen className="w-5 h-5 mr-2" />
                Get the E-Book
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Link to="/blogs">
                <Button size="lg" variant="secondary" className="text-lg">
                  Read Latest Insights
                </Button>
              </Link>
            </div>

            <p className="text-accent text-sm font-medium italic pt-4">
              "The story they won't tell"
            </p>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Download Modal */}
      {showDownloadModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background border border-border rounded-lg shadow-2xl max-w-md w-full mx-4 animate-fade-in">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h3 className="text-xl font-semibold text-foreground">Select Language</h3>
              <button
                onClick={() => setShowDownloadModal(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4">
              <p className="text-foreground/80 mb-6">Choose your preferred language to download the e-book:</p>
              
              {/* English Option */}
              <button
                onClick={() => handleDownloadEbook('english')}
                className="w-full p-4 rounded-lg border border-border hover:border-accent transition-all duration-200 hover:bg-accent/5 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-16 bg-accent/10 rounded border border-accent/20 flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-accent" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">English Version</h4>
                      <p className="text-sm text-muted-foreground">The Western Illusion</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-all group-hover:translate-x-1" />
                </div>
              </button>

              {/* Urdu Option */}
              <button
                onClick={() => handleDownloadEbook('urdu')}
                className="w-full p-4 rounded-lg border border-border hover:border-accent transition-all duration-200 hover:bg-accent/5 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-16 bg-accent/10 rounded border border-accent/20 flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-accent" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">اردو ورژن</h4>
                      <p className="text-sm text-muted-foreground" style={{ direction: 'rtl' }}>فریبِ مغرب</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-all group-hover:translate-x-1" />
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
