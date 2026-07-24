import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Code, Layout, Smartphone, X, ExternalLink, Play, Image as ImageIcon } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Premium Website Development',
    category: 'Website',
    description: 'High-performance, responsive websites built with cutting-edge technologies to maximize conversions and deliver a seamless user experience.',
    icon: <Layout className="w-6 h-6 text-blue-400" />,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Next.js', 'Tailwind'],
  },
  {
    id: 2,
    title: 'Engaging Video Production',
    category: 'Videos',
    description: 'Dynamic and cinematic video content tailored for social media, marketing campaigns, and brand storytelling that captivates audiences.',
    icon: <Smartphone className="w-6 h-6 text-purple-400" />,
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800',
    tags: ['Promo', 'Reels', 'Animation'],
  },
  {
    id: 3,
    title: 'Creative Poster Design',
    category: 'Posters',
    description: 'Eye-catching graphic design and poster artworks that communicate your brand message effectively across physical and digital spaces.',
    icon: <Code className="w-6 h-6 text-emerald-400" />,
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800',
    tags: ['Branding', 'Graphics', 'UI/UX'],
  }
];

// Dummy data for modal galleries
const galleryData = {
  'Website': [
    { id: 1, title: 'Rokea by RK', type: 'website', url: 'https://rokeabyrk.com', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800' },
    { id: 2, title: 'Seeds Therapy Center', type: 'website', url: 'https://seedstherapycenter.org', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' },
    { id: 3, title: 'See more Portfolio', type: 'website', url: 'https://portfolio-pi-blush-99.vercel.app/', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800' },
  ],
  'Videos': [
    { id: 1, title: 'Pink Saree Showcase', type: 'video', url: 'https://res.cloudinary.com/dgpkzmkxf/video/upload/v1781674815/25.4.26_pink_saree_qlzha9.mp4', image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800' },
    { id: 2, title: 'Antique Chain Highlights', type: 'video', url: 'https://res.cloudinary.com/dgpkzmkxf/video/upload/v1781674815/6.5.26_antique_chain_video_gizrto.mp4', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800' },
    { id: 3, title: 'Creative Reel 1', type: 'video', url: 'https://res.cloudinary.com/dgpkzmkxf/video/upload/v1781674812/21.4.26_video2_iqofqu.mp4', image: 'https://images.unsplash.com/photo-1540655037529-dec9815f5eea?auto=format&fit=crop&q=80&w=800' },
    { id: 4, title: 'Creative Reel 2', type: 'video', url: 'https://res.cloudinary.com/dgpkzmkxf/video/upload/v1781674810/6.4.26_v1_a87nvc.mp4', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800' },
  ],
  'Posters': [
    { id: 1, title: 'SS Campaign Poster', type: 'image', url: 'https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784790699/ss_3_copy.jpg_1_r8t4lc_mr5ndf.jpg', image: 'https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784790699/ss_3_copy.jpg_1_r8t4lc_mr5ndf.jpg' },
    { id: 2, title: 'RK Saree Ad', type: 'image', url: 'https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784790695/rk_saree_2.jpg_xp01go_t7cuv0.jpg', image: 'https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784790695/rk_saree_2.jpg_xp01go_t7cuv0.jpg' },
    { id: 3, title: 'Inner Wellness Poster', type: 'image', url: 'https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784790690/inner_5.1.jpg_tbwrqm_imfytv.jpg', image: 'https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784790690/inner_5.1.jpg_tbwrqm_imfytv.jpg' },
    { id: 4, title: 'IC Session Poster', type: 'image', url: 'https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784790680/ic_session_poster_2.jpg_yikzw5_phfdbe.jpg', image: 'https://res.cloudinary.com/dgpkzmkxf/image/upload/v1784790680/ic_session_poster_2.jpg_yikzw5_phfdbe.jpg' },
  ]
};

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedCategory) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedCategory]);

  return (
    <>
      <section id="projects" className="py-24 relative overflow-hidden bg-[#050816]">
        {/* Background Glows */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          {/* Header */}
          <div className="flex flex-col items-center md:items-start md:flex-row md:justify-between mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center md:text-left"
            >
              <h4 className="text-sm font-semibold tracking-wider text-blue-500 uppercase mb-3 flex items-center justify-center md:justify-start gap-2">
                <span className="w-8 h-px bg-blue-500"></span> Featured Projects
              </h4>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Our Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Innovations</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
               <button className="group relative overflow-hidden rounded-full bg-white/5 border border-white/10 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-blue-500/50">
                <span className="relative z-10 flex items-center gap-2">
                  View All Projects
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </motion.div>
          </div>

          {/* Mobile Swipe Indicator */}
          <div className="flex md:hidden justify-center items-center gap-2 mb-6 text-white/40 text-xs">
            <span>Swipe to view projects</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce-horizontal">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </div>

          {/* Projects Grid */}
          <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 pb-4 md:pb-0 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setSelectedCategory(project.category)}
                className="shrink-0 w-[85vw] max-w-[320px] md:max-w-none md:w-auto group relative rounded-[24px] bg-[#0F1528] border border-white/5 overflow-hidden cursor-pointer hover:border-blue-500/50 transition-colors shadow-lg hover:shadow-[0_10px_40px_rgba(37,99,235,0.2)]"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1528] to-transparent z-10"></div>
                  <img 
                    src={project.image} 
                    alt={`${project.title} - Digital Solution Project by SkillStar`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Floating Icon */}
                  <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-blue-500 text-white backdrop-blur-md border border-white/10 flex items-center justify-center transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.5)]">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 relative z-20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                      {project.icon}
                    </div>
                    <span className="text-xs font-semibold tracking-wider text-white/50 uppercase">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-white/60 mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-medium text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedCategory && (
            <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCategory(null)}
                className="absolute inset-0 bg-[#050816]/95 backdrop-blur-xl"
              />
              
              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative w-full max-w-6xl bg-[#0F1528] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl my-auto"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedCategory(null)}
                  className="absolute top-6 right-6 z-50 p-2.5 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white rounded-full transition-colors backdrop-blur-md"
                >
                  <X size={20} />
                </button>
  
                <div className="max-h-[85vh] overflow-y-auto custom-scrollbar p-8 md:p-12" data-lenis-prevent="true">
                  <div className="text-center mb-12">
                    <span className="inline-block text-xs font-bold tracking-widest text-blue-400 uppercase mb-4 py-1.5 px-4 bg-blue-500/10 rounded-full border border-blue-500/20">
                      GALLERY
                    </span>
                    <h3 className="text-3xl md:text-5xl font-bold text-white">
                      {selectedCategory} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Showcase</span>
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {galleryData[selectedCategory]?.map((item) => (
                      <div key={item.id} className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                        <div className="aspect-[4/3] overflow-hidden relative">
                          {item.type === 'video' ? (
                            <video src={item.url} autoPlay muted loop playsInline className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                          ) : (
                            <img src={item.image} alt={`${item.title} - SkillStar Portfolio Showcase`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                          )}
                          
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                            {item.type === 'website' && (
                              <a href={item.url} target="_blank" rel="noopener noreferrer" className="p-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all shadow-[0_0_20px_rgba(37,99,235,0.5)]">
                                <ExternalLink size={24} />
                              </a>
                            )}
                            {item.type === 'video' && (
                              <a href={item.url} target="_blank" rel="noopener noreferrer" className="p-4 bg-purple-600 hover:bg-purple-500 text-white rounded-full transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all shadow-[0_0_20px_rgba(147,51,234,0.5)]">
                                <Play size={24} className="ml-1" />
                              </a>
                            )}
                            {item.type === 'image' && (
                              <a href={item.url} target="_blank" rel="noopener noreferrer" className="p-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                                <ImageIcon size={24} />
                              </a>
                            )}
                          </div>
                        </div>
                        <div className="p-5">
                          <h4 className="text-white font-semibold text-lg">{item.title}</h4>
                          <p className="text-white/50 text-sm mt-1">{item.type === 'website' ? 'View Live Site' : item.type === 'video' ? 'Watch on Cloudinary' : 'View High-Res Image'}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 text-center p-6 bg-white/5 rounded-xl border border-white/10 text-white/60 text-sm">
                    <strong>Note:</strong> Update the <code>url</code> properties in <code>galleryData</code> inside <code>ProjectsSection.jsx</code> with your actual Cloudinary links and Website URLs.
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}} />
    </>
  );
};

export default ProjectsSection;
