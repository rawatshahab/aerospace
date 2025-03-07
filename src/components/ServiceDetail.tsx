import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceDetailProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  benefits: string[];
  ctaText: string;
  ctaLink: string;
  imageUrl?: string;
  reverse?: boolean;
  delay?: number;
}

const ServiceDetail = ({
  icon,
  title,
  subtitle,
  benefits,
  ctaText,
  ctaLink,
  imageUrl,
  reverse = false,
  delay = 0,
}: ServiceDetailProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="mb-24"
    >
      <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 lg:gap-12`}>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-aero-blue/10 flex items-center justify-center text-aero-blue">
              {icon}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-aero-blue">{title}</h2>
          </div>
          
          <p className="text-lg text-foreground mb-6">{subtitle}</p>
          
          <ul className="space-y-3 mb-8">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-aero-blue font-bold mt-1">✔</span>
                <span className="text-foreground">{benefit}</span>
              </li>
            ))}
          </ul>
          
          <div className="mb-8">
            <p className="text-lg font-semibold text-aero-blue mb-3">
              {ctaText}
            </p>
            <Button
              asChild
              className="bg-aero-blue hover:bg-aero-lightblue text-white transition-all duration-300"
            >
              <a href={ctaLink}>
                Explore More <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
        
        {imageUrl && (
          <div className="flex-1">
            <div className="rounded-xl overflow-hidden shadow-lg h-full">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ServiceDetail;