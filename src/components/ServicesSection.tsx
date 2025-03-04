
import { useState, useEffect, useRef } from "react";
import { Rocket, Globe, UserCog, Building2, Satellite } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ icon, title, description, index }: ServiceProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            cardRef.current?.classList.add("opacity-100", "translate-y-0");
          }, index * 100);
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);
  
  return (
    <div 
      ref={cardRef}
      className="glass-card p-8 opacity-0 translate-y-10 transition-all duration-700"
    >
      <div className="w-14 h-14 rounded-full bg-aero-blue/10 flex items-center justify-center text-aero-blue mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      <a href="#" className="link-with-hover text-sm font-medium">Learn more</a>
    </div>
  );
};

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => {
            titleRef.current?.classList.add("opacity-100", "translate-y-0");
          }, 100);
          setTimeout(() => {
            subtitleRef.current?.classList.add("opacity-100", "translate-y-0");
          }, 300);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const services = [
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Aerospace Research & Innovation",
      description: "Advanced R&D in aviation and space technology, pushing the boundaries of aerospace engineering."
    },
    {
      icon: <UserCog className="h-6 w-6" />,
      title: "Aeronautical Engineering Training",
      description: "Specialized programs for students & professionals, designed to build expertise in aerospace."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "UAV & Drone Development",
      description: "Custom-designed unmanned aerial systems for various applications and industries."
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Industry Consultancy & Solutions",
      description: "Aerospace project management & support for businesses looking to innovate in aviation."
    },
    {
      icon: <Satellite className="h-6 w-6" />,
      title: "Space System Engineering",
      description: "Designing next-gen satellite & propulsion systems for the modern space industry."
    }
  ];
  
  return (
    <section id="services" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-aero-blue/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-aero-lightblue/5 rounded-full filter blur-3xl"></div>
      
      <div className="section-container relative">
        <h2 
          ref={titleRef}
          className="text-3xl md:text-4xl font-display font-bold mb-6 text-center opacity-0 translate-y-8 transition-all duration-700"
        >
          Our Key Services
        </h2>
        <p 
          ref={subtitleRef}
          className="text-xl text-muted-foreground max-w-3xl mx-auto text-center mb-16 opacity-0 translate-y-8 transition-all duration-700"
        >
          Pioneering solutions in aerospace technology with our comprehensive range of specialized services.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button className="bg-aero-blue hover:bg-aero-lightblue text-white transition-all duration-300">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
