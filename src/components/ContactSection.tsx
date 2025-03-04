
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PhoneCall, Mail, Globe, ArrowRight } from "lucide-react";

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          titleRef.current?.classList.add("opacity-100", "translate-y-0");
          setTimeout(() => {
            formRef.current?.classList.add("opacity-100", "translate-x-0");
          }, 300);
          setTimeout(() => {
            infoRef.current?.classList.add("opacity-100", "translate-x-0");
          }, 500);
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
  
  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-20 left-0 w-96 h-96 bg-aero-blue/5 rounded-full filter blur-3xl"></div>
      <div className="section-container relative">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-display font-bold mb-6 opacity-0 translate-y-8 transition-all duration-700"
          >
            Let's Elevate Aerospace Together!
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Partner with Wings of Aero for Next-Level Aeronautical Excellence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div 
            ref={formRef}
            className="opacity-0 -translate-x-12 transition-all duration-700"
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-aero-blue/30 transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-aero-blue/30 transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-aero-blue/30 transition-all"
                  ></textarea>
                </div>
                
                <Button type="submit" className="bg-aero-blue hover:bg-aero-lightblue text-white w-full py-6 transition-all duration-300 flex items-center justify-center gap-2">
                  <span>Start Your Journey With Us</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
          
          <div 
            ref={infoRef}
            className="opacity-0 translate-x-12 transition-all duration-700"
          >
            <div className="glass-card p-8 rounded-2xl h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <p className="text-muted-foreground mb-8">
                  Whether you're a student, a researcher, or an industry expert, Wings of Aero is your gateway to the future of aviation and space technology.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-aero-blue/10 flex items-center justify-center text-aero-blue flex-shrink-0">
                      <PhoneCall className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Call Us</h4>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-aero-blue/10 flex items-center justify-center text-aero-blue flex-shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <p className="text-muted-foreground">info@wingsofaero.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-aero-blue/10 flex items-center justify-center text-aero-blue flex-shrink-0">
                      <Globe className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Visit</h4>
                      <p className="text-muted-foreground">123 Innovation Blvd, Tech City, TC 12345</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <div className="h-1 w-20 bg-aero-blue/30 rounded-full mb-6"></div>
                <p className="text-sm">
                  Business Hours: Monday - Friday, 9:00 AM to 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
