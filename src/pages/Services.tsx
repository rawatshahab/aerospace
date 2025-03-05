import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Rocket, GraduationCap, Plane, Briefcase, Satellite, ArrowRight } from 'lucide-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';

const ServiceCard = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="glass-card rounded-xl p-6 shadow-lg border border-aero-blue/10 hover:border-aero-blue/30 transition-all duration-300"
    >
      <div className="w-14 h-14 rounded-full bg-aero-blue/10 flex items-center justify-center text-aero-blue mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-aero-blue">{title}</h3>
      <p className="text-foreground mb-6 leading-relaxed">{description}</p>
      <a href="#" className="flex items-center text-aero-blue font-medium hover:text-aero-lightblue transition-colors">
        Learn more <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </motion.div>
  );
};

const Services = () => {
  const servicesData = [
    {
      icon: <Rocket className="h-7 w-7" />,
      title: "Aerospace Research & Innovation",
      description: "We conduct cutting-edge research in aerodynamics, propulsion, and aviation systems to develop next-generation aerospace technology."
    },
    {
      icon: <GraduationCap className="h-7 w-7" />,
      title: "Aeronautical Engineering Training",
      description: "Our industry-focused training programs provide students and professionals with hands-on experience and globally recognized certifications."
    },
    {
      icon: <Plane className="h-7 w-7" />,
      title: "UAV & Drone Development",
      description: "We specialize in designing and developing high-performance unmanned aerial vehicles for defense, commercial, and research applications."
    },
    {
      icon: <Briefcase className="h-7 w-7" />,
      title: "Industry Consultancy & Solutions",
      description: "We offer consultancy services for aerospace firms, including project management, feasibility studies, and technical solutions."
    },
    {
      icon: <Satellite className="h-7 w-7" />,
      title: "Space System Engineering",
      description: "Our team is at the forefront of space exploration, developing satellite technologies and propulsion systems for future space missions."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Services | Wings of Aero</title>
        <meta name="description" content="Explore our comprehensive range of aerospace services at Wings of Aero." />
      </Helmet>
      
      <NavBar />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions for all your aerospace needs
          </p>
        </motion.section>
        
        {/* Service Intro */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="glass-card rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-aero-blue">Cutting-Edge Aerospace Services</h2>
            <p className="text-lg leading-relaxed mb-6">
              At Wings of Aero, we offer a comprehensive suite of aerospace services designed to meet the evolving needs of the aviation and space industry. Our team of experts combines decades of experience with innovative approaches to deliver exceptional results across all our service areas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2" 
                  alt="Aerospace research lab" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3" 
                  alt="Engineering workspace" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* Services Grid */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-10 text-aero-blue text-center">Our Key Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <Button className="bg-gradient-to-r from-aero-blue to-aero-lightblue hover:from-aero-blue/90 hover:to-aero-lightblue/90 text-white px-8 py-6 h-auto text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Explore All Services
            </Button>
          </motion.div>
        </motion.section>
        
        {/* Service Process */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="glass-card rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-aero-blue">Our Service Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  title: "Consultation",
                  desc: "We begin with a thorough consultation to understand your specific needs and objectives."
                },
                {
                  step: "02",
                  title: "Custom Solution Design",
                  desc: "Our experts design tailored solutions that leverage cutting-edge aerospace technology."
                },
                {
                  step: "03",
                  title: "Implementation & Support",
                  desc: "We implement the solution and provide ongoing support to ensure optimal performance."
                }
              ].map((item, index) => (
                <div key={index} className="relative pl-16 pr-4 py-4">
                  <div className="absolute left-0 top-4 w-12 h-12 bg-aero-blue/20 rounded-lg flex items-center justify-center text-aero-blue font-bold text-xl">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-aero-blue">{item.title}</h3>
                  <p className="text-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
        
        {/* Call to Action */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <div className="bg-gradient-to-r from-aero-blue to-aero-lightblue rounded-2xl p-8 shadow-xl text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Aerospace Projects?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Partner with Wings of Aero to access industry-leading expertise and innovative aerospace solutions.
            </p>
            <button className="px-8 py-3 bg-white text-aero-blue rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Request a Consultation
            </button>
          </div>
        </motion.section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;