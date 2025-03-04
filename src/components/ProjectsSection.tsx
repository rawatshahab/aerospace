
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

const ProjectCard = ({ title, description, image, index }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            cardRef.current?.classList.add("opacity-100", "translate-y-0");
          }, index * 200);
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
      className="glass-card group overflow-hidden rounded-2xl opacity-0 translate-y-12 transition-all duration-700"
    >
      <div className="relative overflow-hidden">
        <div className="aspect-[16/9] overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
      </div>
      
      <div className="p-6 relative">
        <h3 className="text-xl font-bold mb-3 group-hover:text-aero-blue transition-colors">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <a 
          href="#" 
          className="inline-flex items-center text-aero-blue font-medium hover:text-aero-lightblue transition-colors"
        >
          <span>View Project</span>
          <ArrowUpRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          titleRef.current?.classList.add("opacity-100", "translate-y-0");
          setTimeout(() => {
            subtitleRef.current?.classList.add("opacity-100", "translate-y-0");
          }, 200);
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
  
  const projects = [
    {
      title: "Project Alpha – Supersonic UAV Development",
      description: "Revolutionary unmanned aerial vehicle designed for supersonic flight with unprecedented efficiency.",
      image: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Project Orion – Next-Gen Satellite Systems",
      description: "Advanced satellite technology with enhanced communications capabilities and longer operational lifespan.",
      image: "https://images.unsplash.com/photo-1517976547714-720226b864c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Project AeroTech – Future of Smart Aviation",
      description: "Intelligent aviation systems that integrate AI and IoT for safer, more efficient air travel experiences.",
      image: "https://images.unsplash.com/photo-1562603825-77f2a45de092?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];
  
  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <div className="section-container relative">
        <div className="absolute top-20 right-20 w-80 h-80 bg-aero-blue/5 rounded-full filter blur-3xl"></div>
        
        <h2 
          ref={titleRef}
          className="text-3xl md:text-4xl font-display font-bold mb-6 text-center opacity-0 translate-y-8 transition-all duration-700"
        >
          Our Projects & Achievements
        </h2>
        <p 
          ref={subtitleRef}
          className="text-xl text-muted-foreground max-w-3xl mx-auto text-center mb-16 opacity-0 translate-y-8 transition-all duration-700"
        >
          From groundbreaking research to innovative product development, our work is shaping the future of aerospace technology.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              index={index}
            />
          ))}
        </div>
        
        <div 
          ref={ctaRef}
          className="mt-16 text-center opacity-0 translate-y-8 transition-all duration-700"
        >
          <Button className="bg-aero-blue hover:bg-aero-lightblue text-white transition-all duration-300">
            View Our Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
