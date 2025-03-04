
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

interface TestimonialProps {
  content: string;
  author: string;
  position: string;
  rating: number;
}

const TestimonialCard = ({ content, author, position, rating }: TestimonialProps) => {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <Star 
      key={i} 
      className={`h-4 w-4 ${i < rating ? "fill-aero-accent text-aero-accent" : "text-gray-300"}`} 
    />
  ));
  
  return (
    <div className="glass-card p-8 h-full flex flex-col">
      <div className="flex mb-4">
        {stars}
      </div>
      <p className="mb-6 text-foreground/90 italic flex-grow">{content}</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-muted-foreground">{position}</p>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 2;
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          titleRef.current?.classList.add("opacity-100", "translate-y-0");
          setTimeout(() => {
            testimonialsRef.current?.classList.add("opacity-100", "translate-y-0");
          }, 300);
          setTimeout(() => {
            ctaRef.current?.classList.add("opacity-100", "translate-y-0");
          }, 600);
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
  
  const testimonials = [
    {
      content: "Wings of Aero provided us with cutting-edge solutions for UAV development. Their expertise in aerodynamics and avionics is unparalleled!",
      author: "Michael Johnson",
      position: "CTO, Aerospace Firm",
      rating: 5
    },
    {
      content: "The training programs are top-notch! The hands-on experience and expert guidance have significantly boosted my career in aeronautics.",
      author: "Sarah Williams",
      position: "Graduate, Aerospace Engineering Program",
      rating: 5
    },
    {
      content: "Their consultancy services helped us optimize our aerospace manufacturing processes, resulting in significant cost savings and improved efficiency.",
      author: "David Chen",
      position: "Operations Director, Aviation Manufacturing",
      rating: 5
    },
    {
      content: "Working with Wings of Aero on our satellite communications project was a game-changer. Their innovative approach and technical expertise exceeded our expectations.",
      author: "Emma Rodriguez",
      position: "Project Manager, Space Systems Corp",
      rating: 5
    }
  ];
  
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  
  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };
  
  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };
  
  const visibleTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );
  
  return (
    <section id="testimonials" ref={sectionRef} className="py-24 bg-aero-gray relative overflow-hidden">
      <div className="absolute top-10 left-10 w-80 h-80 bg-aero-blue/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-aero-lightblue/5 rounded-full filter blur-3xl"></div>
      
      <div className="section-container relative">
        <h2 
          ref={titleRef}
          className="text-3xl md:text-4xl font-display font-bold mb-16 text-center opacity-0 translate-y-8 transition-all duration-700"
        >
          What Our Clients & Partners Say
        </h2>
        
        <div 
          ref={testimonialsRef}
          className="opacity-0 translate-y-12 transition-all duration-700"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                content={testimonial.content}
                author={testimonial.author}
                position={testimonial.position}
                rating={testimonial.rating}
              />
            ))}
          </div>
          
          {/* Pagination controls */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12 gap-2">
              <Button 
                variant="outline" 
                onClick={handlePrevPage} 
                disabled={currentPage === 0}
                className="p-2 h-10 w-10"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              
              {Array.from({ length: totalPages }, (_, i) => (
                <Button 
                  key={i}
                  variant={i === currentPage ? "default" : "outline"}
                  onClick={() => setCurrentPage(i)}
                  className={`h-10 w-10 ${i === currentPage ? "bg-aero-blue text-white" : ""}`}
                >
                  {i + 1}
                </Button>
              ))}
              
              <Button 
                variant="outline" 
                onClick={handleNextPage} 
                disabled={currentPage === totalPages - 1}
                className="p-2 h-10 w-10"
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          )}
        </div>
        
        <div 
          ref={ctaRef}
          className="mt-16 text-center opacity-0 translate-y-8 transition-all duration-700"
        >
          <p className="text-lg mb-4">Join Our Network of Innovators!</p>
          <Button className="bg-aero-blue hover:bg-aero-lightblue text-white transition-all duration-300">
            Read More Testimonials
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
