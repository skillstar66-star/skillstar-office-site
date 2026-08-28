import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const About = () => {
  const stats = [
    { value: '500+', label: 'Projects' },
    { value: '120+', label: 'Brands' },
    { value: '40+', label: 'Team Members' },
    { value: '15+', label: 'Countries' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold leading-tight mb-8">
              We turn ideas <br/>
              <span className="text-text-secondary">into digital</span> <br/>
              experiences.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-center"
          >
            <p className="text-lg text-text-secondary mb-12 leading-relaxed">
              We are a premium digital agency specializing in crafting high-end SaaS interfaces, cinematic web experiences, and data-driven marketing strategies that propel modern businesses into the future.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="relative">
                  <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-sm font-medium text-text-secondary uppercase tracking-wider">{stat.label}</div>
                  <div className="absolute -left-4 top-2 bottom-2 w-1 bg-gradient-to-b from-blue-primary/50 to-transparent rounded-full"></div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
