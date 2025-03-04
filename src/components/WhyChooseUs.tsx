
import { useRef, useEffect } from "react";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FeatureProps {
  title: string;
  description: string;
  index: number;
}

const FeatureItem = ({ title, description, index }: FeatureProps) => {
  const itemRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            itemRef.current?.classList.add("opacity-100", "translate-x-0");
          }, index * 150);
        }
      },
      { threshold: 0.1 }
    );
    
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    
    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, [index]);
  
  return (
    <div 
      ref={itemRef}
      className={`feature-item opacity-0 ${
        index % 2 === 0 ? "translate-x-10" : "-translate-x-10"
      } transition-all duration-700`}
    >
      <div className="mt-1 flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-aero-blue/10 flex items-center justify-center text-aero-blue">
          <Check className="h-5 w-5" />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          titleRef.current?.classList.add("opacity-100", "translate-y-0");
          setTimeout(() => {
            imageRef.current?.classList.add("opacity-100", "translate-y-0");
          }, 300);
          setTimeout(() => {
            ctaRef.current?.classList.add("opacity-100", "translate-y-0");
          }, 800);
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
  
  const features = [
    {
      title: "Expert-Led Research & Development",
      description: "Pioneering breakthroughs in aerospace technology with our team of industry experts."
    },
    {
      title: "Comprehensive Training Programs",
      description: "Industry-relevant courses & certifications designed to build the next generation of aerospace professionals."
    },
    {
      title: "State-of-the-Art Facilities",
      description: "Cutting-edge labs & simulation tools that enable innovation and precise engineering."
    },
    {
      title: "Global Industry Collaborations",
      description: "Partnering with top aerospace companies to deliver solutions that meet international standards."
    },
    {
      title: "Innovation-Driven Approach",
      description: "Solving real-world aviation challenges through creative thinking and advanced technology."
    }
  ];
  
  return (
    <section id="why-choose" ref={sectionRef} className="py-24 bg-aero-gray relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-40 left-10 w-60 h-60 bg-aero-blue/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-aero-lightblue/10 rounded-full filter blur-3xl"></div>
        
        <h2 
          ref={titleRef}
          className="text-3xl md:text-4xl font-display font-bold mb-16 text-center opacity-0 translate-y-8 transition-all duration-700"
        >
          Why Choose <span className="text-gradient">Wings of Aero</span>?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            {features.map((feature, index) => (
              <FeatureItem 
                key={index}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
          
          <div 
            ref={imageRef}
            className="relative opacity-0 translate-y-12 transition-all duration-700"
          >
            <div className="absolute inset-0 bg-aero-blue/5 rounded-2xl rotate-3 transform-gpu"></div>
            <div className="glass-card p-1 rounded-2xl -rotate-3 transform-gpu relative">
              <img 
                src="https://images.unsplash.com/photo-1566055909643-a51b4271d2bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Aerospace technology and innovation" 
                className="rounded-xl object-cover w-full h-full aspect-[4/3]"
                loading="lazy"
              />
            </div>
            <div className="absolute -left-6 -bottom-6 p-5 glass-card rounded-xl shadow-lg max-w-[240px]">
              <p className="text-sm font-medium mb-2">Be a Part of the Future in Aeronautics!</p>
              <div className="h-1 w-20 bg-aero-blue/30 rounded-full"></div>
            </div>
          </div>
        </div>
        
        <div 
          ref={ctaRef}
          className="mt-16 text-center opacity-0 translate-y-8 transition-all duration-700"
        >
          <Button className="bg-aero-blue hover:bg-aero-lightblue text-white px-8 py-6 rounded-lg transition-all duration-300 flex items-center gap-2 mx-auto">
            <span>Get Started</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
