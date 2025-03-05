import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { BookOpen, Calendar, Tag, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 'future-aerospace-engineering',
    title: 'The Future of Aerospace Engineering',
    excerpt: 'Discover how emerging technologies are shaping the next generation of aerospace innovation and what it means for the industry.',
    date: 'May 15, 2023',
    readTime: '8 min read',
    tags: ['Technology', 'Future', 'Engineering'],
    image: 'https://images.unsplash.com/photo-1536697246787-1f7ae568d89a',
    featured: true
  },
  {
    id: 'drones-revolutionizing-industries',
    title: 'How Drones are Revolutionizing Industries',
    excerpt: 'From agriculture to emergency services, unmanned aerial vehicles are transforming how businesses operate and solve complex challenges.',
    date: 'April 28, 2023',
    readTime: '6 min read',
    tags: ['Drones', 'Innovation', 'Commercial'],
    image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108'
  },
  {
    id: 'ai-in-modern-aviation',
    title: 'The Role of AI in Modern Aviation',
    excerpt: 'Artificial intelligence is playing an increasingly important role in flight safety, efficiency, and the overall passenger experience.',
    date: 'April 10, 2023',
    readTime: '7 min read',
    tags: ['AI', 'Aviation', 'Technology'],
    image: 'https://images.unsplash.com/photo-1559060017-445fb9722f2a'
  },
  {
    id: 'sustainable-aerospace-practices',
    title: 'Sustainable Practices in the Aerospace Industry',
    excerpt: 'How aerospace companies are adopting green technologies and sustainable practices to reduce their environmental impact.',
    date: 'March 22, 2023',
    readTime: '5 min read',
    tags: ['Sustainability', 'Environment', 'Innovation'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa'
  },
  {
    id: 'space-tourism-reality',
    title: 'Space Tourism: From Science Fiction to Reality',
    excerpt: 'Exploring the rapid development of commercial space travel and what it means for the future of human space exploration.',
    date: 'March 5, 2023',
    readTime: '9 min read',
    tags: ['Space', 'Tourism', 'Commercial'],
    image: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031'
  }
];

const FeaturedPost = ({ post }: { post: BlogPost }) => {
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
            src={`${post.image}?q=80&w=800&auto=format&fit=crop`} 
            alt={post.title} 
            className="w-full h-64 lg:h-full object-cover"
          />
        </div>
        <div className="lg:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-aero-blue mb-2">
              <BookOpen className="h-4 w-4" />
              <span className="text-sm">Featured Post</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-aero-blue hover:text-aero-lightblue transition-colors duration-300">
              {post.title}
            </h2>
            <p className="text-foreground mb-6 leading-relaxed">
              {post.excerpt}
            </p>
          </div>
          <div className="mt-6">
            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-aero-blue/10 text-aero-blue rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Button className="flex items-center gap-2">
              Read Article <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-card overflow-hidden rounded-xl shadow-lg border border-aero-blue/10 hover:border-aero-blue/30 transition-all duration-300 h-full flex flex-col"
    >
      <img 
        src={`${post.image}?q=80&w=600&auto=format&fit=crop`} 
        alt={post.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-3 text-aero-blue hover:text-aero-lightblue transition-colors duration-300">
          {post.title}
        </h3>
        <p className="text-foreground mb-4 leading-relaxed flex-1">
          {post.excerpt}
        </p>
        <div className="mt-auto">
          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-aero-blue/10 text-aero-blue rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
          <Link to={`/blog/${post.id}`} className="flex items-center text-aero-blue font-medium hover:text-aero-lightblue transition-colors">
            Read more <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const Blog = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Blog | Wings of Aero</title>
        <meta name="description" content="Stay updated with the latest trends and advancements in aerospace technology." />
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
            Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest trends and advancements in aerospace technology.
          </p>
        </motion.section>
        
        {/* Featured Post */}
        {featuredPost && (
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-aero-blue">Featured Article</h2>
            <FeaturedPost post={featuredPost} />
          </section>
        )}
        
        {/* Recent Posts */}
        <section className="mb-20">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-aero-blue">Recent Posts</h2>
            <Button variant="outline" className="flex items-center gap-2">
              View all <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}
          </div>
        </section>
        
        {/* Newsletter Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-aero-blue to-aero-lightblue rounded-2xl p-8 shadow-xl text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-xl mb-8">
                Get the latest aerospace news and updates delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-6 py-3 rounded-full w-full sm:w-auto min-w-[300px] text-foreground focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Button className="px-8 py-3 bg-white text-aero-blue rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* Categories */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-aero-blue">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {['Technology', 'Innovation', 'Engineering', 'Space', 'Aviation', 'Commercial', 'Research', 'Sustainability'].map((category, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass-card p-6 rounded-xl text-center border border-aero-blue/10 hover:border-aero-blue/30 hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-center gap-2">
                  <Tag className="h-5 w-5 text-aero-blue" />
                  <span className="font-medium">{category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
