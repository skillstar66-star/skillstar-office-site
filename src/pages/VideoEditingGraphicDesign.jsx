import { motion } from 'framer-motion';
import { 
  Video, 
  Film, 
  Play, 
  Sparkles, 
  Share2, 
  FileText, 
  Target, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  Zap,
  Camera
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import usePageMeta from '../hooks/usePageMeta';

const videoGraphicFeatures = [
  {
    title: 'Commercial Videos',
    desc: 'Professional videos created to showcase your products, services, offers, or brand story. Engaging visuals and purposeful editing help communicate your message and encourage viewers to take action.',
    icon: Film,
    color: 'from-[#00C6FF] to-[#3B82F6]',
    gradientBg: 'from-[#051842]/70 to-[#020516]/90',
    tags: ['Brand Storytelling', 'Product Showcases', 'Cinematic Color Grade', 'Voiceover & Audio']
  },
  {
    title: 'Social Media Reels',
    desc: 'Short, engaging video content designed for social media platforms to capture attention quickly. Creative storytelling, smooth editing, and relevant visuals help increase engagement and audience interest.',
    icon: Play,
    color: 'from-[#3B82F6] to-[#8B5CF6]',
    gradientBg: 'from-[#1E0F45]/70 to-[#020516]/90',
    tags: ['Instagram Reels', 'YouTube Shorts', 'Fast Paced Cuts', 'Trending Sound Design']
  },
  {
    title: 'Motion Graphics',
    desc: 'Dynamic animations that make your brand messages, advertisements, presentations, and promotional content more engaging. Motion brings static ideas to life and makes information easier to understand.',
    icon: Sparkles,
    color: 'from-[#8B5CF6] to-[#D946EF]',
    gradientBg: 'from-[#2D0B4E]/70 to-[#020516]/90',
    tags: ['2D & 3D Animation', 'Explainer Videos', 'Typography Motion', 'Logo Animations']
  },
  {
    title: 'Social Media Posts',
    desc: 'Creative and visually appealing posts designed to communicate your message clearly across social media platforms. Designs maintain brand consistency while helping your content stand out in crowded feeds.',
    icon: Share2,
    color: 'from-[#D946EF] to-[#EC4899]',
    gradientBg: 'from-[#3B0A42]/70 to-[#020516]/90',
    tags: ['Carousel Posts', 'Feed Aesthetics', 'Infographics', 'Brand Cohesion']
  },
  {
    title: 'Marketing Collateral',
    desc: 'Professional marketing materials such as brochures, flyers, banners, posters, and promotional designs that support your sales and marketing activities.',
    icon: FileText,
    color: 'from-[#00C6FF] to-[#8B5CF6]',
    gradientBg: 'from-[#0A1A45]/70 to-[#020516]/90',
    tags: ['Brochures & Flyers', 'Event Banners', 'Standees & Posters', 'Print-Ready Formats']
  },
  {
    title: 'Digital Advertising Graphics',
    desc: 'High-impact graphics created for digital advertising campaigns across social media, search platforms, websites, and other online channels. Clear messaging and strong visuals help attract attention and drive users toward action.',
    icon: Target,
    color: 'from-[#8B5CF6] to-[#00C6FF]',
    gradientBg: 'from-[#17104A]/70 to-[#020516]/90',
    tags: ['Performance Ad Creatives', 'Display Banners', 'High-CTR Visuals', 'Multi-Size Variations']
  }
];

const VideoEditingGraphicDesign = () => {
  usePageMeta({
    title: 'Video Editing & Graphic Design Agency in Coimbatore | SkillStar',
    description: 'Trending Instagram reels editing, commercial promo videos, motion graphics, and graphic design in Coimbatore by SkillStar Digital Solutions.',
    canonical: 'https://www.skillstardigitalsolutions.com/video-editing-graphic-design'
  });

  return (
    <div className="bg-[#020516] min-h-screen text-white font-sans overflow-x-hidden selection:bg-[#8B5CF6] selection:text-white">
      
      {/* Top Floating Navbar / Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-4 bg-[#020516]/90 backdrop-blur-md border-b border-white/10 shadow-lg">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 cursor-pointer group">
            <img 
              src="/logo (2).png" 
              alt="SkillStar Logo" 
              className="h-12 sm:h-14 w-auto object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.7)] group-hover:scale-105 transition-all duration-300" 
            />
          </Link>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-200 hover:text-white hover:border-[#8B5CF6]/50 hover:bg-[#8B5CF6]/20 transition-all duration-300 shadow-sm group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-36 pb-20 relative overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-[#8B5CF6]/20 via-[#D946EF]/20 to-[#00C6FF]/15 blur-[160px] pointer-events-none rounded-full"></div>
        <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-[#D946EF]/10 blur-[130px] rounded-full pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-400 mb-8">
            <Link to="/" className="hover:text-[#8B5CF6] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-500">Services</span>
            <span>/</span>
            <span className="text-[#D946EF] font-semibold">Video Editing & Graphic Design</span>
          </div>

          <div className="max-w-4xl">
            {/* Tag Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D946EF]" />
              <span className="text-xs uppercase font-bold tracking-widest text-gray-300">Cinematic Storytelling & Visual Communication</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.15] mb-8 tracking-tight"
            >
              Video Editing & <br />
              <span className="bg-gradient-to-r from-[#00C6FF] via-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">
                Graphic Design Services in Coimbatore
              </span>
            </motion.h1>

            {/* Main Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed mb-10 drop-shadow-sm font-normal"
            >
              Powerful visuals help your business communicate faster, capture attention, and leave a lasting impression. <strong className="text-white font-semibold">Skillstar Digital Solutions</strong> creates engaging video and graphic content that brings your brand, products, and marketing ideas to life across digital platforms. Every creative is designed to communicate your message clearly while supporting stronger audience engagement and conversion opportunities.
            </motion.p>

            {/* Quick CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <Link 
                to="/#contact"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#D946EF] text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(217,70,239,0.4)] hover:shadow-[0_0_35px_rgba(217,70,239,0.7)] hover:scale-105 transition-all text-center"
              >
                Create High-Impact Visuals <ArrowRight className="w-5 h-5" />
              </Link>
              <a 
                href="#solutions"
                className="px-8 py-4 rounded-full bg-[#0A0F24]/80 backdrop-blur-md border border-white/15 text-gray-200 hover:text-white hover:border-[#8B5CF6]/50 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all text-center"
              >
                What's Included
              </a>
            </motion.div>
          </div>

        </div>
      </section>

      {/* What's Included Grid Section */}
      <section id="solutions" className="py-20 relative bg-[#010310]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F172A]/80 border border-white/10 mb-4 shadow-sm">
              <Zap className="w-3.5 h-3.5 text-[#D946EF]" />
              <span className="text-xs uppercase font-bold tracking-widest text-gray-300">What's Included</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-4 tracking-tight">
              High-Impact Video & Graphic Production
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Tailored visual productions that grab scrolling attention, tell your brand story, and drive real business conversion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoGraphicFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className={`relative rounded-3xl p-8 bg-gradient-to-br ${feature.gradientBg} border border-white/10 hover:border-white/25 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 shadow-xl flex flex-col justify-between group overflow-hidden`}
                >
                  {/* Glowing corner glow */}
                  <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-bl ${feature.color} opacity-20 group-hover:opacity-40 blur-2xl transition-opacity duration-500 rounded-full pointer-events-none`}></div>
                  
                  {/* Subtle bottom line */}
                  <div className={`absolute bottom-0 left-[10%] right-[10%] h-[2px] bg-gradient-to-r ${feature.color} opacity-40 group-hover:opacity-100 shadow-[0_0_15px_currentColor] transition-all duration-500`}></div>

                  <div>
                    {/* Icon Box */}
                    <div className="w-14 h-14 rounded-2xl bg-[#0A0F24] border border-white/10 flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-500 relative">
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-tr ${feature.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                      <Icon className="w-7 h-7 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 transition-all duration-300">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-6 font-normal">
                      {feature.desc}
                    </p>
                  </div>

                  {/* Feature Tags */}
                  <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                    {feature.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-medium text-gray-300 bg-white/5 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Visual Impact Section */}
      <section className="py-20 bg-[#020516] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0A0F24]/90 via-[#1D0A38]/80 to-[#0A0F24]/90 border border-white/15 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#D946EF]/15 blur-3xl rounded-full pointer-events-none"></div>

            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D946EF]/15 border border-[#D946EF]/30 text-[#D946EF] text-xs font-semibold mb-4">
                  <ShieldCheck className="w-4 h-4" />
                  <span>The SkillStar Visual Standard</span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white mb-4 tracking-tight">
                  Stop the Scroll & Spark Customer Action
                </h2>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  In today's fast-moving digital world, high-quality video and design are the key to brand authority. We blend narrative pacing, sound design, color grading, and high-CTR graphic composition to give you an unbeatable visual edge.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00C6FF] flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-200">4K Video Editing & Sound Design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#8B5CF6] flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-200">Engaging Social Reels & Hooks</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D946EF] flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-200">Multi-Format Ad Creatives</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00C6FF] flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-200">Fast Turnaround & Unlimited Revisions</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-[#050A1A]/80 border border-white/10 text-center">
                <Camera className="w-12 h-12 text-[#D946EF] mb-3 animate-pulse" />
                <h4 className="text-lg font-bold text-white mb-2">Ready to Upgrade Visuals?</h4>
                <p className="text-xs text-gray-400 mb-5 leading-relaxed">
                  Let's craft high-converting video and graphic assets for your next campaign.
                </p>
                <Link
                  to="/#contact"
                  className="w-full py-3 rounded-full bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#D946EF] text-white font-semibold text-sm shadow-[0_0_20px_rgba(217,70,239,0.4)] hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  Start Creative Project <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default VideoEditingGraphicDesign;
