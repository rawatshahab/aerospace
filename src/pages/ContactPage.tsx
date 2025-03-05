import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Mail, Phone, MapPin, Clock, Send, Check, AlertCircle } from 'lucide-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: 'general'
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: 'general'
      });
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });
    }, 1500);
  };
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Contact Us | Wings of Aero</title>
        <meta name="description" content="Get in touch with our aerospace experts to discuss your project or inquire about our services." />
      </Helmet>
      
      <NavBar />
      
      <main className="pt-28 pb-20">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 mb-20 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions or want to discuss your aerospace project? Our team is ready to help.
          </p>
        </motion.section>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:w-1/3"
            >
              <div className="glass-card rounded-xl p-8 h-full">
                <h2 className="text-2xl font-bold mb-6 text-aero-blue">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-aero-blue/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-aero-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email Us</h3>
                      <a href="mailto:info@wingsofaero.com" className="text-aero-blue hover:underline">
                        info@wingsofaero.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-aero-blue/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-aero-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Call Us</h3>
                      <a href="tel:+12025550157" className="text-aero-blue hover:underline">
                        +1 (202) 555-0157
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-aero-blue/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-aero-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Visit Us</h3>
                      <address className="not-italic text-muted-foreground">
                        1234 Innovation Way<br />
                        Aero Park, CA 90210<br />
                        United States
                      </address>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-aero-blue/10 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-aero-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9AM - 5PM<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="font-medium mb-3">Connect With Us</h3>
                  <div className="flex gap-4">
                    <a 
                      href="#" 
                      className="bg-aero-blue/10 p-3 rounded-full hover:bg-aero-blue hover:text-white transition-colors duration-300"
                      aria-label="LinkedIn"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="bg-aero-blue/10 p-3 rounded-full hover:bg-aero-blue hover:text-white transition-colors duration-300"
                      aria-label="Twitter"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="bg-aero-blue/10 p-3 rounded-full hover:bg-aero-blue hover:text-white transition-colors duration-300"
                      aria-label="Facebook"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="bg-aero-blue/10 p-3 rounded-full hover:bg-aero-blue hover:text-white transition-colors duration-300"
                      aria-label="Instagram"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:w-2/3"
            >
              <div className="glass-card rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-aero-blue">Send Us a Message</h2>
                
                {isSubmitted ? (
                  <div className="bg-aero-blue/10 border border-aero-blue/20 rounded-lg p-6 flex flex-col items-center text-center">
                    <div className="bg-aero-blue text-white p-3 rounded-full mb-4">
                      <Check className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-aero-blue">Message Sent!</h3>
                    <p className="mb-6 text-muted-foreground">
                      Thank you for reaching out. Our team will contact you shortly.
                    </p>
                    <Button 
                      onClick={() => setIsSubmitted(false)} 
                      className="bg-aero-blue hover:bg-aero-lightblue text-white"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block mb-2 font-medium">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.name ? 'border-red-400' : 'border-gray-200'
                          } focus:outline-none focus:ring-2 focus:ring-aero-blue`}
                          placeholder="Your name"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-500 flex items-center">
                            <AlertCircle className="h-3 w-3 mr-1" /> {errors.name}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block mb-2 font-medium">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.email ? 'border-red-400' : 'border-gray-200'
                          } focus:outline-none focus:ring-2 focus:ring-aero-blue`}
                          placeholder="your.email@example.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500 flex items-center">
                            <AlertCircle className="h-3 w-3 mr-1" /> {errors.email}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block mb-2 font-medium">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-aero-blue"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block mb-2 font-medium">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formState.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-aero-blue"
                          placeholder="Your company name"
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <label htmlFor="service" className="block mb-2 font-medium">
                          Service of Interest
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formState.service}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-aero-blue"
                        >
                          <option value="general">General Inquiry</option>
                          <option value="consulting">Aerospace Consulting</option>
                          <option value="development">Product Development</option>
                          <option value="training">Training Programs</option>
                          <option value="research">Research Collaboration</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div className="md:col-span-2">
                        <label htmlFor="message" className="block mb-2 font-medium">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleInputChange}
                          rows={5}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.message ? 'border-red-400' : 'border-gray-200'
                          } focus:outline-none focus:ring-2 focus:ring-aero-blue`}
                          placeholder="Please describe how we can help you..."
                        />
                        {errors.message && (
                          <p className="mt-1 text-sm text-red-500 flex items-center">
                            <AlertCircle className="h-3 w-3 mr-1" /> {errors.message}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full py-6 bg-aero-blue hover:bg-aero-lightblue text-white text-lg flex items-center justify-center gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Processing...</>
                      ) : (
                        <>
                          Send Message <Send className="h-5 w-5 ml-1" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
          
          {/* Map Section */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20"
          >
            <h2 className="text-3xl font-bold mb-8 text-aero-blue">Our Location</h2>
            <div className="rounded-xl overflow-hidden shadow-lg h-[400px] bg-gray-100">
              {/* Replace with actual map implementation */}
              <div className="w-full h-full flex items-center justify-center bg-aero-blue/5 text-muted-foreground">
                <div className="text-center">
                  <MapPin className="h-10 w-10 mx-auto mb-4 text-aero-blue" />
                  <p className="text-lg font-medium text-aero-blue">Map location: 1234 Innovation Way, Aero Park, CA 90210</p>
                  <p className="mt-2">
                    (GOOGLE MAP)
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
          
          {/* FAQ Section */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20"
          >
            <h2 className="text-3xl font-bold mb-8 text-aero-blue text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto glass-card rounded-xl p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">What services does Wings of Aero offer?</h3>
                  <p className="text-muted-foreground">
                    We offer a comprehensive range of aerospace services including research and development, consultation, training programs, and specialized project development for various sectors of the aerospace industry.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">How quickly can I expect a response to my inquiry?</h3>
                  <p className="text-muted-foreground">
                    We strive to respond to all inquiries within 24-48 business hours. For urgent matters, please call our office directly.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Do you offer services internationally?</h3>
                  <p className="text-muted-foreground">
                    Yes, we work with clients globally and have experience managing international aerospace projects and partnerships.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Can you provide references from past clients?</h3>
                  <p className="text-muted-foreground">
                    Absolutely! We're happy to provide references and case studies upon request, subject to confidentiality agreements with our clients.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;