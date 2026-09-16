import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, Clock, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogs = [
    {
      title: "Rahan PR: The Visionary Co-Founder and CEO Driving SkillStar Digital Solutions",
      category: "CEO Vision & Leadership",
      date: "Sep 16, 2026",
      readTime: "8 min read",
      author: "Rahan PR",
      link: "/blog/vision-behind-rahan-pr-skillstar",
      gradient: "from-[#00C6FF] via-[#8B5CF6] to-[#D946EF]",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "R. Rohan: The Visionary Co-Founder, Director & Investor Behind SkillStar Digital Solutions",
      category: "Director & Investor Vision",
      date: "Sep 16, 2026",
      readTime: "9 min read",
      author: "R. Rohan",
      link: "/blog/vision-behind-rohan-skillstar",
      gradient: "from-[#D946EF] via-[#8B5CF6] to-[#00C6FF]",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const scrollContainerRef = useRef(null);
  const [activeCard, setActiveCard] = useState(0);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.85;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const cardWidth = scrollContainerRef.current.clientWidth * 0.82;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveCard(Math.min(Math.max(index, 0), blogs.length - 1));
    }
  };

  const scrollToCard = (index) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.clientWidth * 0.82;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setActiveCard(index);
    }
  };

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

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
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
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 sm:mb-6"
          >
            Digital Marketing & <br />
            <span className="bg-gradient-to-r from-[#00C6FF] via-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">Digital Solutions Insights</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm sm:text-lg"
          >
            Discover expert strategies, industry trends, and actionable growth tips from SkillStar Digital Solutions.
          </motion.p>
        </div>

        {/* Mobile Swipe Guidance & Controls */}
        {blogs.length > 1 && (
          <div className="md:hidden flex items-center justify-between mb-4 px-2">
            <div className="inline-flex items-center gap-1.5 text-xs text-[#00C6FF] font-semibold bg-[#0A0F24]/80 px-3 py-1 rounded-full border border-[#00C6FF]/30">
              <span>👈 Swipe to read articles 👉</span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => scroll('left')}
                className="w-8 h-8 rounded-full bg-[#0A0F24] border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all shadow-md"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-8 h-8 rounded-full bg-[#0A0F24] border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all shadow-md"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Blog Card Container */}
        <motion.div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex md:grid md:grid-cols-2 justify-start md:justify-center max-w-5xl mx-auto gap-4 sm:gap-6 md:gap-8 overflow-x-auto md:overflow-visible pb-6 md:pb-0 pt-2 px-2 md:px-0 scrollbar-none snap-x snap-mandatory"
        >
          {blogs.map((blog, idx) => (
            <motion.article 
              key={idx}
              variants={cardVariants}
              className="w-[84vw] sm:w-[380px] md:w-full flex-shrink-0 md:flex-shrink snap-center group rounded-3xl bg-[#0A0F24]/80 backdrop-blur-md border border-white/10 overflow-hidden hover:border-white/25 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col"
            >
              <Link to={blog.link} className="flex flex-col h-full">
                {/* Image Area */}
                <div className="w-full h-[180px] sm:h-[220px] relative overflow-hidden flex-shrink-0">
                  <img 
                    src={blog.image} 
                    alt={`${blog.title} - SkillStar article`} 
                    loading="lazy"
                    width="400"
                    height="220"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  
                  {/* Gradient overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F24] via-[#0A0F24]/40 to-transparent opacity-80 z-10"></div>
                  
                  {/* Category Badge overlaying the image */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-black/50 backdrop-blur-md border border-white/20 shadow-sm">
                      {blog.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#00C6FF]" />
                      {blog.date}
                    </div>
                    <div className="w-1 h-1 rounded-full bg-gray-600"></div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#8B5CF6]" />
                      {blog.readTime}
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-6 leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00C6FF] group-hover:to-[#D946EF] transition-all duration-300 line-clamp-2">
                    {blog.title}
                  </h3>

                  <div className="w-full h-[1px] bg-white/5 mb-6 mt-auto"></div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-tr ${blog.gradient} flex items-center justify-center text-white font-bold text-xs shadow-sm`}>
                        {blog.author.charAt(0)}
                      </div>
                      <span className="text-sm font-medium text-gray-300">{blog.author}</span>
                    </div>
                    
                    <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-gradient-to-r ${blog.gradient} group-hover:border-transparent transition-all duration-300`}>
                      <ArrowRight className="w-4 h-4 group-hover:-rotate-45 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {/* Mobile Indicator Dots */}
        {blogs.length > 1 && (
          <div className="flex md:hidden justify-center items-center gap-2 mt-4 mb-4">
            {blogs.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToCard(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeCard === idx 
                    ? 'w-7 bg-gradient-to-r from-[#00C6FF] to-[#D946EF]' 
                    : 'w-2 bg-white/20'
                }`}
                aria-label={`Go to article ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Read Full Articles Buttons */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-4">
          <Link 
            to="/blog/vision-behind-rahan-pr-skillstar" 
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/5 border border-white/20 text-white font-bold text-xs sm:text-sm hover:bg-white/10 hover:border-[#00C6FF]/50 transition-all duration-300 group shadow-lg"
          >
            CEO Vision (Rahan PR)
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#00C6FF]" />
          </Link>
          <Link 
            to="/blog/vision-behind-rohan-skillstar" 
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/5 border border-white/20 text-white font-bold text-xs sm:text-sm hover:bg-white/10 hover:border-[#D946EF]/50 transition-all duration-300 group shadow-lg"
          >
            Director & Investor Vision (R. Rohan)
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#D946EF]" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Blog;
