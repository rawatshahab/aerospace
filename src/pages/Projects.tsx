import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { ArrowUpRight, Search, Filter } from 'lucide-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  year: string;
  client?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 'supersonic-uav',
    title: 'Supersonic UAV Development',
    category: 'Research & Development',
    description: 'Revolutionary unmanned aerial vehicle designed for supersonic flight with unprecedented efficiency and maneuverability.',
    image: 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    year: '2023',
    client: 'AeroTech Innovations',
    featured: true
  },
  {
    id: 'satellite-systems',
    title: 'Next-Gen Satellite Systems',
    category: 'Space Technology',
    description: 'Advanced satellite technology with enhanced communications capabilities and longer operational lifespan in low Earth orbit.',
    image: 'https://images.unsplash.com/photo-1517976547714-720226b864c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    year: '2022',
    client: 'Global Communications Inc.'
  },
  {
    id: 'smart-aviation',
    title: 'Smart Aviation Integration',
    category: 'Aviation Technology',
    description: 'Intelligent aviation systems that integrate AI and IoT for safer, more efficient air travel experiences.',
    image: 'https://images.unsplash.com/photo-1562603825-77f2a45de092?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    year: '2023',
    client: 'SkyWays Airlines'
  },
  {
    id: 'drone-delivery',
    title: 'Urban Drone Delivery Network',
    category: 'Urban Mobility',
    description: 'Comprehensive drone delivery system designed for urban environments with advanced navigation and safety features.',
    image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    year: '2022',
    client: 'MetroDelivery Systems'
  },
  {
    id: 'vtol-aircraft',
    title: 'Electric VTOL Aircraft',
    category: 'Urban Air Mobility',
    description: 'Electric vertical takeoff and landing aircraft designed for urban commuting with zero emissions and reduced noise.',
    image: 'https://images.unsplash.com/photo-1559060017-445fb9722f2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    year: '2023',
    client: 'UrbanAir Mobility'
  },
  {
    id: 'sustainable-airport',
    title: 'Sustainable Airport Design',
    category: 'Sustainability',
    description: 'Comprehensive airport redesign focusing on sustainability, energy efficiency, and reduced environmental impact.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    year: '2021',
    client: 'GreenAir International'
  }
];

const FeaturedProject = ({ project }: { project: Project }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-card overflow-hidden rounded-2xl shadow-xl border border-aero-blue/10 hover:border-aero-blue/30 transition-all duration-300"
    >
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-64 lg:h-full object-cover"
          />
        </div>
        <div className="lg:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-aero-blue mb-2">
              <span className="text-sm font-medium">{project.category}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-aero-blue hover:text-aero-lightblue transition-colors duration-300">
              {project.title}
            </h2>
            <p className="text-foreground mb-6 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              {project.client && (
                <div>
                  <span className="font-medium">Client:</span> {project.client}
                </div>
              )}
              <div>
                <span className="font-medium">Year:</span> {project.year}
              </div>
            </div>
          </div>
          <div className="mt-6">
            <Button className="flex items-center gap-2">
              View Project Details <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-card overflow-hidden rounded-xl shadow-lg border border-aero-blue/10 hover:border-aero-blue/30 transition-all duration-300 h-full flex flex-col"
    >
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-aero-blue/90 text-white rounded-full text-xs font-medium">
            {project.category}
          </span>
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-3 text-aero-blue hover:text-aero-lightblue transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-foreground mb-4 leading-relaxed flex-1">
          {project.description}
        </p>
        <div className="mt-auto">
          <div className="flex justify-between items-center border-t border-gray-100 pt-4 mt-4">
            <span className="text-sm text-muted-foreground">{project.year}</span>
            <Button variant="ghost" className="p-0 h-auto text-aero-blue hover:text-aero-lightblue flex items-center gap-1">
              <span>Details</span>
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const featuredProject = projects.find(project => project.featured);
  const regularProjects = projects.filter(project => !project.featured);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Projects | Wings of Aero</title>
        <meta name="description" content="Explore our innovative aerospace projects and achievements." />
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
            Our Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our innovative aerospace solutions that are shaping the future of flight and space technology.
          </p>
        </motion.section>
        
        <div className="container mx-auto px-4">
          {/* Search and Filter */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-aero-gray rounded-xl p-6">
              <div className="relative w-full md:w-1/2">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <input 
                  type="text" 
                  placeholder="Search projects..." 
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-aero-blue"
                />
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <span>Filter</span>
                </Button>
                <Button className="bg-aero-blue hover:bg-aero-lightblue text-white">
                  All Projects
                </Button>
              </div>
            </div>
          </motion.section>
          
          {/* Featured Project */}
          {featuredProject && (
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-aero-blue">Featured Project</h2>
              <FeaturedProject project={featuredProject} />
            </section>
          )}
          
          {/* Project Grid */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-aero-blue">All Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} />
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
              <h2 className="text-3xl font-bold mb-4 text-aero-blue">Have a Project in Mind?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Our team of aerospace experts is ready to bring your ideas to life with innovative solutions and cutting-edge technology.
              </p>
              <Button className="bg-aero-blue hover:bg-aero-lightblue text-white text-lg px-8 py-6">
                Let's Discuss Your Project
              </Button>
            </div>
          </motion.section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;