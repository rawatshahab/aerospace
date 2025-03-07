import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Rocket, 
  GraduationCap,
  Plane,
  Briefcase,
  Satellite 
} from "lucide-react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

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

  // Handle smooth scroll to section or use router navigation
  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    
    // If we're on the homepage, scroll to section
    if (location.pathname === '/') {
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
    }
  };
  
  // Service items for dropdown
  const serviceItems = [
    { name: "Aerospace Research & Innovation", icon: <Rocket className="h-4 w-4 mr-2" />, path: "/services#research" },
    { name: "Aeronautical Engineering Training", icon: <GraduationCap className="h-4 w-4 mr-2" />, path: "/services#training" },
    { name: "UAV & Drone Development", icon: <Plane className="h-4 w-4 mr-2" />, path: "/services#drones" },
    { name: "Industry Consultancy & Solutions", icon: <Briefcase className="h-4 w-4 mr-2" />, path: "/services#consultancy" },
    { name: "Space System Engineering", icon: <Satellite className="h-4 w-4 mr-2" />, path: "/services#space" },
  ];

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
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-display font-bold text-aero-blue">
                Wings of Aero
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-aero-blue font-medium transition-colors focus:outline-none">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white w-72 shadow-md border border-gray-200 rounded-md p-1 z-50">
                {serviceItems.map((service, index) => (
                  <DropdownMenuItem key={index} className="p-0">
                    <Link
                      to={service.path}
                      className="flex items-center px-3 py-2.5 w-full rounded-md hover:bg-gray-100 transition-colors"
                    >
                      {service.icon}
                      <span>{service.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem className="pt-2 pb-1 border-t border-gray-100 mt-1">
                  <Link
                    to="/services"
                    className="flex justify-between items-center w-full rounded-md hover:text-aero-blue transition-colors px-3"
                  >
                    <span className="font-medium">View All Services</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link
              to="/projects"
              className="text-foreground hover:text-aero-blue font-medium transition-colors"
            >
              Projects
            </Link>
            <Link
              to="/testimonials"
              className="text-foreground hover:text-aero-blue font-medium transition-colors"
            >
              Testimonials
            </Link>
            <Link
              to="/about"
              className="text-foreground hover:text-aero-blue font-medium transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/blog"
              className="text-foreground hover:text-aero-blue font-medium transition-colors"
            >
              Blog
            </Link>
            <Link to="/contact">
              <Button 
                className="bg-aero-blue hover:bg-aero-lightblue text-white transition-all duration-300"
              >
                Get in Touch
              </Button>
            </Link>
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
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
            <div className="py-2 border-b border-gray-100">
              <div className="flex items-center mb-2 text-aero-blue font-medium">
                <span>Services</span>
              </div>
              
              {serviceItems.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="py-2 px-3 flex items-center text-foreground hover:text-aero-blue font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {service.icon}
                  <span className="text-sm">{service.name}</span>
                </Link>
              ))}
            </div>

            <Link
              to="/projects"
              className="py-3 text-foreground hover:text-aero-blue font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/testimonials"
              className="py-3 text-foreground hover:text-aero-blue font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              to="/about"
              className="py-3 text-foreground hover:text-aero-blue font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/blog"
              className="py-3 text-foreground hover:text-aero-blue font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button 
                className="mt-2 bg-aero-blue hover:bg-aero-lightblue text-white transition-all duration-300"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;