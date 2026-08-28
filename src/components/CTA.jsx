import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Massive Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full max-h-[500px] bg-gradient-to-r from-blue-primary/30 to-purple-primary/30 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-12 md:p-20 rounded-[3rem] border border-white/10 relative overflow-hidden"
        >
          {/* Neon Border Effect */}
          <div className="absolute inset-0 neon-border rounded-[3rem] opacity-50 pointer-events-none"></div>

          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            Ready to build <br/>
            <span className="text-gradient">something extraordinary?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl mx-auto">
            Let's turn your next idea into a digital experience people remember.
          </p>
          
          <button className="group relative px-10 py-5 rounded-full overflow-hidden font-semibold text-lg inline-flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-primary to-purple-primary transition-opacity"></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 shadow-[0_0_40px_rgba(124,58,237,0.8)] transition-opacity duration-300"></div>
            <span className="relative flex items-center gap-3 text-white">
              Start a Project
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
