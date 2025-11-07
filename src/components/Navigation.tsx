import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navigation = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-accent flex items-center justify-center font-bold text-2xl text-background border-2 border-accent transition-all duration-300 group-hover:scale-110">
              M
            </div>
            <span className="text-foreground font-semibold text-lg hidden sm:inline-block">
              Raja Mobin Ullah Khan
            </span>
          </Link>

          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-accent ${
                location.pathname === "/" ? "text-accent" : "text-foreground/80"
              }`}
            >
              Home
            </Link>
            <Link
              to="/blogs"
              className={`text-sm font-medium transition-colors hover:text-accent ${
                location.pathname.startsWith("/blog") ? "text-accent" : "text-foreground/80"
              }`}
            >
              Blogs
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
