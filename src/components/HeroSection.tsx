
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Refs for animated elements
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const featureListRef = useRef<HTMLUListElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add animation classes after component mounts
    const elements = [
      { ref: headingRef, delay: 100 },
      { ref: subheadingRef, delay: 300 },
      { ref: featureListRef, delay: 500 },
      { ref: ctaRef, delay: 700 },
    ];

    elements.forEach(({ ref, delay }) => {
      if (ref.current) {
        setTimeout(() => {
          ref.current?.classList.add("opacity-100", "translate-y-0");
        }, delay);
      }
    });
  }, []);

  return (
    <section className="pt-28 md:pt-32 pb-20 md:pb-28 bg-gradient-to-b from-white to-aero-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute -top-10 right-0 w-96 h-96 bg-aero-lightblue/10 rounded-full filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-aero-blue/10 rounded-full filter blur-3xl opacity-60"></div>
        
        <div className="relative grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-block px-3 py-1 bg-aero-gray rounded-full text-sm font-medium text-aero-blue mb-6">
              Pioneering Innovations in Aerospace Technology
            </div>
            
            <h1 
              ref={headingRef}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 opacity-0 translate-y-8 transition-all duration-700"
            >
              <span className="text-gradient">Innovate. Engineer.</span> <br />Excel.
            </h1>
            
            <p 
              ref={subheadingRef}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg opacity-0 translate-y-8 transition-all duration-700"
            >
              At Wings of Aero, we are dedicated to revolutionizing aeronautical engineering and technology. From research & development to aerospace training and industry collaboration, we help shape the future of aviation.
            </p>
            
            <ul 
              ref={featureListRef}
              className="space-y-3 mb-8 opacity-0 translate-y-8 transition-all duration-700"
            >
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-aero-blue/20 text-aero-blue flex items-center justify-center">✓</span>
                <span>Advanced Aerospace Research & Development</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-aero-blue/20 text-aero-blue flex items-center justify-center">✓</span>
                <span>Aeronautical Engineering Training & Certifications</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-aero-blue/20 text-aero-blue flex items-center justify-center">✓</span>
                <span>Innovative UAV & Space Systems Design</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-aero-blue/20 text-aero-blue flex items-center justify-center">✓</span>
                <span>Industry Partnerships & Consultancy</span>
              </li>
            </ul>
            
            <div 
              ref={ctaRef}
              className="flex flex-col sm:flex-row gap-4 items-center opacity-0 translate-y-8 transition-all duration-700"
            >
              <Button 
                className="bg-aero-blue hover:bg-aero-lightblue text-white px-8 py-6 rounded-lg transition-all duration-300 w-full sm:w-auto flex items-center gap-2"
                onClick={scrollToServices}
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
              <p className="text-sm text-muted-foreground">
                Join Us in Pushing the Boundaries of Aerospace Innovation!
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="absolute inset-0 bg-aero-blue/5 rounded-2xl -rotate-3 transform-gpu"></div>
            <div className="glass-card p-1 rounded-2xl rotate-3 transform-gpu mb-4 relative animate-float">
              <img 
                src="https://images.unsplash.com/photo-1559297434-fae8a1916a79?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Advanced aerospace technology" 
                className="rounded-xl object-cover w-full h-full aspect-[4/3]"
                loading="lazy"
              />
            </div>
            <div className="absolute -right-4 -bottom-4 p-4 glass-card rounded-xl shadow-lg max-w-[200px] animate-float" style={{animationDelay: "1s"}}>
              <p className="text-sm font-medium">Shaping the Future of Aviation with Advanced Engineering</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
