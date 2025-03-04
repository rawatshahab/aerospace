
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-display font-bold text-aero-blue">
                Wings of Aero
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-aero-blue font-medium transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("why-choose")}
              className="text-foreground hover:text-aero-blue font-medium transition-colors"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-aero-blue font-medium transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-foreground hover:text-aero-blue font-medium transition-colors"
            >
              Testimonials
            </button>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-aero-blue hover:bg-aero-lightblue text-white transition-all duration-300"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground p-2 rounded-md"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            <button
              onClick={() => scrollToSection("services")}
              className="py-3 text-foreground hover:text-aero-blue font-medium transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("why-choose")}
              className="py-3 text-foreground hover:text-aero-blue font-medium transition-colors"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="py-3 text-foreground hover:text-aero-blue font-medium transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="py-3 text-foreground hover:text-aero-blue font-medium transition-colors"
            >
              Testimonials
            </button>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="mt-2 bg-aero-blue hover:bg-aero-lightblue text-white transition-all duration-300"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
