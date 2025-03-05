import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>About Us | Wings of Aero</title>
        <meta name="description" content="Learn about Wings of Aero - a pioneering force in aerospace innovation and technology." />
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
            About Wings of Aero
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pioneering the future of aerospace technology and innovation
          </p>
        </motion.section>
        
        {/* Who We Are Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="glass-card p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-aero-blue">Who We Are</h2>
            <p className="text-lg leading-relaxed mb-6">
              Wings of Aero is a pioneering force in the aerospace industry, dedicated to pushing the boundaries of aviation technology and innovation. Established with a vision to advance aeronautical research and education, we bring together experts, researchers, and industry leaders to create groundbreaking solutions in the field of aerospace engineering.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                  alt="Aerospace research" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="Aerospace technology" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 rounded-2xl shadow-lg"
          >
            <div className="flex items-center mb-4">
              <div className="mr-4 bg-aero-blue p-3 rounded-full text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-aero-blue">Our Mission</h2>
            </div>
            <p className="text-lg leading-relaxed">
              Our mission is to revolutionize the aerospace sector by fostering research, innovation, and education. We aim to equip future aeronautical engineers and professionals with the knowledge and skills needed to lead the industry forward.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 rounded-2xl shadow-lg"
          >
            <div className="flex items-center mb-4">
              <div className="mr-4 bg-aero-lightblue p-3 rounded-full text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-aero-lightblue">Our Vision</h2>
            </div>
            <p className="text-lg leading-relaxed">
              To be a global leader in aerospace innovation, shaping the future of aviation and space technology through cutting-edge research, advanced training programs, and strategic collaborations.
            </p>
          </motion.div>
        </div>
        
        {/* What We Do Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="glass-card p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-aero-blue">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Conduct advanced research in aeronautics, UAVs, and space systems.",
                "Provide world-class training programs and certifications.",
                "Develop state-of-the-art drones and aerospace technology.",
                "Collaborate with global aerospace firms for innovative projects."
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="mt-1 mr-4 text-aero-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <div className="inline-block bg-gradient-to-r from-aero-blue to-aero-lightblue px-6 py-3 rounded-full text-white text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                🚀 Join us in shaping the future of aerospace!
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* Team Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="glass-card p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-aero-blue">Our Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="text-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 border-4 border-aero-blue/20">
                    <img 
                      src={`https://images.unsplash.com/photo-151847742${item * 10}-e2cf5dc2ef${item * 10}`} 
                      alt="Team member" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6";
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-bold">Dr. Jane Doe</h3>
                  <p className="text-aero-blue">Aerospace Engineer</p>
                  <p className="mt-2 text-sm text-muted-foreground">Ph.D. in Aeronautical Engineering with 15+ years of industry experience.</p>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Mission?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Connect with us to learn more about our research, training programs, and collaboration opportunities.
            </p>
            <button className="px-8 py-3 bg-white text-aero-blue rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Contact Us Today
            </button>
          </div>
        </motion.section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;