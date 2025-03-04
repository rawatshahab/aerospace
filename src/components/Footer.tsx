
import { useState, useRef, useEffect } from "react";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  ArrowRight 
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const footerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          footerRef.current?.classList.add("opacity-100");
        }
      },
      { threshold: 0.1 }
    );
    
    if (footerRef.current) {
      observer.observe(footerRef.current);
    }
    
    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribed with:", email);
    setEmail("");
    alert("Thank you for subscribing to our newsletter!");
  };
  
  return (
    <footer 
      ref={footerRef}
      className="bg-aero-blue text-white pt-16 opacity-0 transition-opacity duration-1000"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-display font-bold mb-6">Wings of Aero</h3>
            <p className="mb-6 text-white/80">
              Pioneering innovations in aerospace technology. Shaping the future of aviation with advanced engineering & research.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">Projects</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">Aerospace Research</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">Engineering Training</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">UAV Development</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">Industry Consultancy</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">Space Systems</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="mb-4 text-white/80">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="px-4 py-2 rounded-l-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder:text-white/60 flex-grow"
              />
              <button
                type="submit"
                className="bg-white text-aero-blue px-4 rounded-r-lg hover:bg-white/90 transition-colors flex items-center justify-center"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            &copy; {new Date().getFullYear()} Wings of Aero. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/70 text-sm hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/70 text-sm hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/70 text-sm hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
