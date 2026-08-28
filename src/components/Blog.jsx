import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';

const Blog = () => {
  const blogs = [
    {
      title: "The Future of Digital Marketing: Trends to Watch in 2026",
      category: "Marketing",
      date: "Aug 15, 2026",
      readTime: "5 min read",
      author: "Alex Morgan",
      gradient: "from-[#00C6FF] to-[#3B82F6]",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "How AI is Revolutionizing SEO and Content Creation",
      category: "SEO & Tech",
      date: "Aug 10, 2026",
      readTime: "7 min read",
      author: "Sarah Chen",
      gradient: "from-[#8B5CF6] to-[#D946EF]",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Maximizing ROI with Data-Driven Social Media Strategies",
      category: "Social Media",
      date: "Aug 02, 2026",
      readTime: "4 min read",
      author: "David Kumar",
      gradient: "from-[#D946EF] to-[#FF6B6B]",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="blog" className="py-24 bg-[#050716] relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B5CF6]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00C6FF]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#D946EF] animate-pulse"></span>
            <span className="text-xs font-bold tracking-widest text-gray-300 uppercase">Our Journal</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Latest <span className="bg-gradient-to-r from-[#00C6FF] via-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">Insights & News</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Discover expert strategies, industry trends, and actionable tips to elevate your digital presence.
          </motion.p>
        </div>

        {/* Blog Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogs.map((blog, idx) => (
            <motion.div 
              key={idx}
              variants={cardVariants}
              className="group rounded-3xl bg-[#0A0F24]/60 backdrop-blur-md border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex flex-col"
            >
              {/* Image Area */}
              <div className="w-full h-[220px] relative overflow-hidden flex-shrink-0">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                
                {/* Gradient overlay for better text readability and dark theme matching */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F24] via-[#0A0F24]/40 to-transparent opacity-80 z-10"></div>
                
                {/* Category Badge overlaying the image */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-black/40 backdrop-blur-md border border-white/20">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {blog.date}
                  </div>
                  <div className="w-1 h-1 rounded-full bg-gray-600"></div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {blog.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-6 leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00C6FF] group-hover:to-[#D946EF] transition-all duration-300">
                  {blog.title}
                </h3>

                <div className="w-full h-[1px] bg-white/5 mb-6 mt-auto"></div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-tr ${blog.gradient} flex items-center justify-center`}>
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-300">{blog.author}</span>
                  </div>
                  
                  <a href="#" className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-gradient-to-r ${blog.gradient} group-hover:border-transparent transition-all duration-300`}>
                    <ArrowRight className="w-4 h-4 group-hover:-rotate-45 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-transparent border border-white/20 text-white font-bold text-sm hover:bg-white/5 transition-all duration-300 group">
            View All Articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Blog;
