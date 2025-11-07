import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookOpen, Download, ArrowRight, ChevronRight, X } from "lucide-react";
import ebookCover from "@/assets/ebook-cover.jpg";
import ebookCover2 from "@/assets/ebook-cover2.jpg";
import worldMapBg from "@/assets/world-map-bg.jpg";

const EbookSection = () => {
  const [language, setLanguage] = useState<'english' | 'urdu'>('english');
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  const bookContent = {
    english: {
      cover: ebookCover2,
      title: "The Western Illusion: What They Never Told Us About the West",
      pdfFile: "/The-Western-Illusion.pdf",
      fileName: "The-Western-Illusion.pdf",
      description: [
        "This book journeys through 75 years of global power, tracing how empires changed their flags but not their ways. From Africa to Latin America and from Asia to Europe, it exposes how the West redrew the world's borders while speaking the language of freedom.",
        "Every story in these pages comes from Western records and their own media. No theories, no guesses, only the evidence they left behind. Read it, and decide for yourself what democracy and freedom have really meant in our time."
      ]
    },
    urdu: {
      cover: ebookCover,
      title: "فریبِ مغرب: جو کچھ انہوں نے مغرب کے بارے میں کبھی نہیں بتایا",
      pdfFile: "/The-Western-Illusion-Urdu.pdf", 
      fileName: "فریبِ-مغرب.pdf",
      description: [
        "یہ کتاب 75 سال کی عالمی طاقت کا سفر ہے، یہ بتاتا ہے کہ کیسے سلطنتوں نے اپنے جھنڈے تبدیل کیے لیکن اپنے طریقے نہیں۔ افریقہ سے لاطینی امریکہ تک اور ایشیا سے یورپ تک، یہ ظاہر کرتا ہے کہ کیسے مغرب نے آزادی کی زبان بولتے ہوئے دنیا کی سرحدیں دوبارہ کھینچیں۔",
        "ان صفحات کی ہر کہانی مغربی ریکارڈ اور ان کے اپنے میڈیا سے آتی ہے۔ کوئی نظریات نہیں، کوئی اندازے نہیں، صرف وہ ثبوت جو انہوں نے چھوڑے ہیں۔ اسے پڑھیں، اور خود فیصلہ کریں کہ ہمارے وقت میں جمہوریت اور آزادی کا واقعی کیا مطلب رہا ہے۔"
      ]
    }
  };

  const currentBook = bookContent[language];

  // Handle PDF download for specific language
  const handleDownloadEbook = (selectedLanguage: 'english' | 'urdu') => {
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

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'english' ? 'urdu' : 'english');
  };

  const openDownloadModal = () => {
    setShowDownloadModal(true);
  };

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
                    src={currentBook.cover}
                    alt="E-book Cover"
                    className="w-full max-w-md mx-auto rounded-lg shadow-2xl border border-accent/20 transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
                  />
                </div>
              </div>
            </div>

            {/* E-book Details */}
            <div className="space-y-6 animate-fade-in-slow">
              {/* Book Name */}
              <h3 className="text-3xl font-bold text-foreground">
                {currentBook.title}
              </h3>

              {/* Book Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                  Geopolitics
                </span>
                <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                  International Relations
                </span>
                <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                  Political Analysis
                </span>
                <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                  History
                </span>
                <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                  Non-Fiction
                </span>
              </div>

              {/* Language Toggle */}
              <div className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4 text-foreground/80" />
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-2 text-sm font-medium text-foreground/80 hover:text-accent transition-colors group"
                >
                  <span>Language: {language === 'english' ? 'English' : 'اردو'}</span>
                  <ChevronRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              {/* Book Description */}
              <div className="space-y-4">
                {currentBook.description.map((paragraph, index) => (
                  <p key={index} className="text-foreground/90 leading-relaxed" style={{
                    direction: language === 'urdu' ? 'rtl' : 'ltr',
                    textAlign: language === 'urdu' ? 'right' : 'left'
                  }}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Book Download Button */}
              <div className="pt-6 space-y-4">
                <Button size="lg" className="w-full sm:w-auto text-lg group" onClick={openDownloadModal}>
                  <Download className="w-5 h-5 mr-2" />
                  Download E-Book
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>

                <p className="text-sm text-muted-foreground">
                  PDF format • Available for instant download
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

export default EbookSection;
