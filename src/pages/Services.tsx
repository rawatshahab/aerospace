import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  Rocket, 
  GraduationCap, 
  Plane, 
  Briefcase, 
  Satellite,
  ArrowRight 
} from 'lucide-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ServiceDetail from '../components/ServiceDetail';
import { Button } from '@/components/ui/button';

const Services = () => {
  const servicesData = [
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Aerospace Research & Innovation",
      subtitle: "Advancing the future of aerospace through cutting-edge research and breakthrough innovations.",
      benefits: [
        "Conducting in-depth research in aerodynamics, propulsion, and avionics",
        "Developing futuristic aircraft and space vehicle technologies",
        "Collaborating with global aerospace firms and universities",
        "Providing research support for students and professionals"
      ],
      ctaText: "Transform Ideas into Aerospace Innovations!",
      ctaLink: "#research",
      imageUrl: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2"
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Aeronautical Engineering Training",
      subtitle: "Comprehensive training programs to shape the next generation of aerospace professionals.",
      benefits: [
        "Industry-focused certification courses in aerodynamics, avionics, and propulsion",
        "Hands-on experience with aircraft design, simulation, and flight testing",
        "Expert-led workshops and online learning opportunities",
        "Internship and placement support for aspiring aeronautical engineers"
      ],
      ctaText: "Upgrade Your Skills for an Exciting Aerospace Career!",
      ctaLink: "#training",
      imageUrl: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      reverse: true
    },
    {
      icon: <Plane className="h-6 w-6" />,
      title: "UAV & Drone Development",
      subtitle: "Engineering high-performance UAVs and drone systems for commercial and defense applications.",
      benefits: [
        "Design and development of autonomous and semi-autonomous drones",
        "Custom UAV solutions for surveillance, mapping, and research",
        "Training programs on drone technology, flight operations, and regulations",
        "Advanced software integration for UAV navigation and control"
      ],
      ctaText: "Discover the Future of Unmanned Aerial Systems!",
      ctaLink: "#drones",
      imageUrl: "https://images.unsplash.com/photo-1508444845599-5c89863b1c44"
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Industry Consultancy & Solutions",
      subtitle: "Providing expert guidance and project solutions for aerospace enterprises.",
      benefits: [
        "Consulting services for aerospace design, manufacturing, and testing",
        "Technical feasibility studies and research analysis",
        "Aerospace project management and execution strategies",
        "Compliance with international aviation safety standards"
      ],
      ctaText: "Optimize Your Aerospace Projects with Our Expertise!",
      ctaLink: "#consultancy",
      imageUrl: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      reverse: true
    },
    {
      icon: <Satellite className="h-6 w-6" />,
      title: "Space System Engineering",
      subtitle: "Innovating satellite and propulsion systems to explore the universe.",
      benefits: [
        "Development of next-gen satellites and space propulsion technologies",
        "Research in space exploration, orbital mechanics, and mission planning",
        "Custom solutions for satellite communication and deep-space missions",
        "Collaboration with space agencies and research institutions"
      ],
      ctaText: "Pushing the Limits of Space Exploration!",
      ctaLink: "#space",
      imageUrl: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Services | Wings of Aero</title>
        <meta name="description" content="Explore our comprehensive range of aerospace services at Wings of Aero." />
      </Helmet>
      
      <NavBar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-aero-blue/5 to-white pt-32 pb-20">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed">
                Empowering Aerospace Innovation with Cutting-Edge Solutions
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
                At Wings of Aero, we are committed to revolutionizing the aerospace industry through research, training, and technological advancements. Our specialized services cater to students, professionals, and organizations, helping them push the boundaries of aerospace engineering and innovation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-aero-blue hover:bg-aero-lightblue text-white px-6 py-3 h-auto text-lg">
                  Schedule a Consultation
                </Button>
                <Button variant="outline" className="border-aero-blue text-aero-blue hover:bg-aero-blue/5 px-6 py-3 h-auto text-lg">
                  View Success Stories
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Services Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-6 text-aero-blue">Our Key Services</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Discover our comprehensive range of aerospace services designed to meet the evolving needs of students, professionals, and organizations in the industry.
              </p>
            </motion.div>
            
            <div className="space-y-4">
              {servicesData.map((service, index) => (
                <ServiceDetail
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  subtitle={service.subtitle}
                  benefits={service.benefits}
                  ctaText={service.ctaText}
                  ctaLink={service.ctaLink}
                  imageUrl={service.imageUrl}
                  reverse={service.reverse}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 bg-aero-blue/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-aero-blue to-aero-lightblue rounded-2xl p-10 text-white text-center max-w-5xl mx-auto shadow-xl"
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Aerospace Projects?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Partner with Wings of Aero to access industry-leading expertise and innovative aerospace solutions tailored to your specific needs.
              </p>
              <Button className="bg-white text-aero-blue hover:bg-white/90 px-8 py-3 h-auto text-lg font-bold">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;