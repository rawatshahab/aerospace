import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Star, Quote, User, Building, Tag, ChevronDown, ChevronUp, Filter } from 'lucide-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';

interface Testimonial {
  id: string;
  content: string;
  author: string;
  position: string;
  company: string;
  rating: number;
  industry: string;
  service: string;
  image?: string;
  featured?: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    content: "Wings of Aero provided us with cutting-edge solutions for UAV development. Their expertise in aerodynamics and avionics is unparalleled! The team's dedication to pushing boundaries while maintaining safety standards impressed our entire organization.",
    author: "Michael Johnson",
    position: "Chief Technology Officer",
    company: "Aerospace Dynamics Inc.",
    rating: 5,
    industry: "Defense",
    service: "UAV Development",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    featured: true
  },
  {
    id: '2',
    content: "The training programs offered by Wings of Aero are top-notch! The hands-on experience and expert guidance have significantly boosted my career in aeronautics. I can confidently say I wouldn't be where I am today without their comprehensive curriculum.",
    author: "Sarah Williams",
    position: "Graduate",
    company: "Aerospace Engineering Program",
    rating: 5,
    industry: "Education",
    service: "Training Programs",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: '3',
    content: "Their consultancy services helped us optimize our aerospace manufacturing processes, resulting in significant cost savings and improved efficiency. The ROI we've seen from implementing their recommendations has been exceptional.",
    author: "David Chen",
    position: "Operations Director",
    company: "Aviation Manufacturing Ltd.",
    rating: 5,
    industry: "Manufacturing",
    service: "Consultancy",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: '4',
    content: "Working with Wings of Aero on our satellite communications project was a game-changer. Their innovative approach and technical expertise exceeded our expectations and helped us meet critical mission objectives.",
    author: "Emma Rodriguez",
    position: "Project Manager",
    company: "Space Systems Corp",
    rating: 5,
    industry: "Space",
    service: "Satellite Systems",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: '5',
    content: "The team at Wings of Aero went above and beyond in designing our new flight simulator. Their attention to detail and commitment to realism has made it an invaluable tool for our training program.",
    author: "James Wilson",
    position: "Head of Training",
    company: "Global Aviation Academy",
    rating: 5,
    industry: "Education",
    service: "Simulation Systems",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: '6',
    content: "We partnered with Wings of Aero for our sustainable aviation initiative, and they delivered innovative solutions that significantly reduced our carbon footprint while maintaining operational excellence.",
    author: "Olivia Chang",
    position: "Sustainability Director",
    company: "EcoAir Solutions",
    rating: 4,
    industry: "Sustainability",
    service: "Green Aviation",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }
];

const FeaturedTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-card overflow-hidden rounded-2xl shadow-xl border border-aero-blue/10 hover:border-aero-blue/30 transition-all duration-300"
    >
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/3 bg-gradient-to-br from-aero-blue to-aero-lightblue p-8 flex flex-col justify-center items-center text-white">
          {testimonial.image ? (
            <img 
              src={testimonial.image} 
              alt={testimonial.author} 
              className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-white/30"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center mb-6">
              <User className="h-12 w-12 text-white" />
            </div>
          )}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-1">{testimonial.author}</h3>
            <p className="text-white/80 mb-2">{testimonial.position}</p>
            <p className="text-white/80 font-medium">{testimonial.company}</p>
            <div className="flex justify-center mt-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className={`h-5 w-5 ${
                    index < testimonial.rating ? "fill-white text-white" : "text-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="lg:w-2/3 p-8 flex flex-col justify-center">
          <Quote className="h-12 w-12 text-aero-blue/20 mb-4" />
          <p className="text-xl italic mb-6 text-foreground/90 leading-relaxed">
            "{testimonial.content}"
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 bg-aero-blue/10 text-aero-blue rounded-full text-xs">
              {testimonial.industry}
            </span>
            <span className="px-3 py-1 bg-aero-blue/10 text-aero-blue rounded-full text-xs">
              {testimonial.service}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const [expanded, setExpanded] = useState(false);
  const isLongContent = testimonial.content.length > 200;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-card p-6 rounded-xl border border-aero-blue/10 hover:border-aero-blue/30 transition-all duration-300 flex flex-col h-full"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          {testimonial.image ? (
            <img 
              src={testimonial.image} 
              alt={testimonial.author} 
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-aero-blue/10 flex items-center justify-center mr-4">
              <User className="h-6 w-6 text-aero-blue" />
            </div>
          )}
          <div>
            <h3 className="font-bold">{testimonial.author}</h3>
            <p className="text-sm text-muted-foreground">{testimonial.position}</p>
          </div>
        </div>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={`h-4 w-4 ${
                index < testimonial.rating ? "fill-aero-accent text-aero-accent" : "text-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
      
      <div className="mb-4 flex-grow">
        {isLongContent && !expanded ? (
          <>
            <p className="text-foreground/90 italic">
              "{testimonial.content.substring(0, 200)}..."
            </p>
            <button 
              onClick={() => setExpanded(true)}
              className="text-aero-blue text-sm flex items-center mt-2 hover:text-aero-lightblue transition-colors"
            >
              Read more <ChevronDown className="h-4 w-4 ml-1" />
            </button>
          </>
        ) : (
          <>
            <p className="text-foreground/90 italic">"{testimonial.content}"</p>
            {isLongContent && (
              <button 
                onClick={() => setExpanded(false)}
                className="text-aero-blue text-sm flex items-center mt-2 hover:text-aero-lightblue transition-colors"
              >
                Show less <ChevronUp className="h-4 w-4 ml-1" />
              </button>
            )}
          </>
        )}
      </div>
      
      <div className="flex items-center gap-2 mt-auto pt-4 border-t border-gray-100">
        <Building className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">{testimonial.company}</span>
      </div>
      
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="px-2 py-1 bg-aero-blue/10 text-aero-blue rounded-full text-xs">
          {testimonial.industry}
        </span>
        <span className="px-2 py-1 bg-aero-blue/10 text-aero-blue rounded-full text-xs">
          {testimonial.service}
        </span>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [filter, setFilter] = useState('all');
  const featuredTestimonial = testimonials.find(testimonial => testimonial.featured);
  
  let filteredTestimonials = testimonials.filter(testimonial => !testimonial.featured);
  
  if (filter !== 'all') {
    filteredTestimonials = filteredTestimonials.filter(
      testimonial => testimonial.industry === filter || testimonial.service === filter
    );
  }
  
  const industries = Array.from(
    new Set(testimonials.map(testimonial => testimonial.industry))
  );
  
  const services = Array.from(
    new Set(testimonials.map(testimonial => testimonial.service))
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Testimonials | Wings of Aero</title>
        <meta name="description" content="See what our clients and partners say about Wings of Aero's aerospace solutions and services." />
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
            Our Client Stories
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we've helped organizations across the aerospace industry achieve their goals with innovative solutions.
          </p>
        </motion.section>
        
        <div className="container mx-auto px-4">
          {/* Filters */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <div className="flex flex-wrap gap-3 items-center justify-center">
              <Button 
                variant={filter === 'all' ? 'default' : 'outline'} 
                onClick={() => setFilter('all')}
                className={filter === 'all' ? 'bg-aero-blue text-white' : ''}
              >
                All Testimonials
              </Button>
              
              {industries.map((industry) => (
                <Button 
                  key={industry}
                  variant={filter === industry ? 'default' : 'outline'} 
                  onClick={() => setFilter(industry)}
                  className={filter === industry ? 'bg-aero-blue text-white' : ''}
                >
                  {industry}
                </Button>
              ))}
              
              {services.map((service) => (
                <Button 
                  key={service}
                  variant={filter === service ? 'default' : 'outline'} 
                  onClick={() => setFilter(service)}
                  className={filter === service ? 'bg-aero-blue text-white' : ''}
                >
                  {service}
                </Button>
              ))}
            </div>
          </motion.section>
          
          {/* Featured Testimonial */}
          {featuredTestimonial && filter === 'all' && (
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-aero-blue">Featured Testimonial</h2>
              <FeaturedTestimonial testimonial={featuredTestimonial} />
            </section>
          )}
          
          {/* Testimonials Grid */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-aero-blue">
              {filter === 'all' ? 'All Testimonials' : `${filter} Testimonials`}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </section>
          
          {/* CTA Section */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card bg-gradient-to-r from-aero-blue/5 to-aero-lightblue/5 border border-aero-blue/10 rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-4 text-aero-blue">Share Your Experience</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                We value feedback from our clients. If you've worked with us, we'd love to hear about your experience.
              </p>
              <Button className="bg-aero-blue hover:bg-aero-lightblue text-white text-lg px-8 py-6">
                Submit Your Testimonial
              </Button>
            </div>
          </motion.section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Testimonials;