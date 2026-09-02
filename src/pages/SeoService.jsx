import { motion } from 'framer-motion';
import { 
  Search, 
  Wrench, 
  MapPin, 
  HelpCircle, 
  Bot, 
  Building2, 
  Code2, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Zap,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const seoFeatures = [
  {
    title: 'Technical SEO',
    desc: 'We optimize your website’s technical foundation, including site speed, mobile performance, indexing, crawlability, and website structure.',
    icon: Wrench,
    color: 'from-[#00C6FF] to-[#3B82F6]',
    gradientBg: 'from-[#051842]/70 to-[#020516]/90',
    tags: ['Core Web Vitals', 'Crawlability', 'Site Architecture', 'Speed Optimization']
  },
  {
    title: 'Local SEO',
    desc: 'We improve your local search presence to help your business reach nearby customers and appear for relevant location-based searches.',
    icon: MapPin,
    color: 'from-[#3B82F6] to-[#8B5CF6]',
    gradientBg: 'from-[#1E0F45]/70 to-[#020516]/90',
    tags: ['Google Maps Ranking', 'Local Citations', 'Geo-Targeting', 'Near Me Searches']
  },
  {
    title: 'Answer Engine Optimization (AEO)',
    desc: 'We optimize your content to provide clear and relevant answers, helping your business become more discoverable across answer engines and AI search platforms.',
    icon: HelpCircle,
    color: 'from-[#8B5CF6] to-[#D946EF]',
    gradientBg: 'from-[#2D0B4E]/70 to-[#020516]/90',
    tags: ['Featured Snippets', 'Direct Answers', 'Voice Search', 'Zero-Click Searches']
  },
  {
    title: 'AI Search Optimization (GEO)',
    desc: 'We prepare your website and content for AI-powered search by improving how search systems understand your business, services, and expertise.',
    icon: Bot,
    color: 'from-[#D946EF] to-[#EC4899]',
    gradientBg: 'from-[#3B0A42]/70 to-[#020516]/90',
    tags: ['Generative Engine (GEO)', 'ChatGPT & Perplexity', 'AI Overviews', 'Entity Authority']
  },
  {
    title: 'Google Business Optimization',
    desc: 'We optimize your Google Business Profile to improve local visibility, provide accurate business information, and attract more customer interactions.',
    icon: Building2,
    color: 'from-[#00C6FF] to-[#8B5CF6]',
    gradientBg: 'from-[#0A1A45]/70 to-[#020516]/90',
    tags: ['Profile Verification', 'Review Strategy', 'Local Posts & Updates', 'Category Optimization']
  },
  {
    title: 'Schema Implementation',
    desc: 'We add relevant structured data to help search engines better understand your website content, business details, and services.',
    icon: Code2,
    color: 'from-[#8B5CF6] to-[#00C6FF]',
    gradientBg: 'from-[#17104A]/70 to-[#020516]/90',
    tags: ['JSON-LD Schema', 'Organization Markup', 'Product & Service Schema', 'Rich Snippets']
  }
];

const SeoService = () => {
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
        {/* Background Glowing Lights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-[#00C6FF]/15 via-[#8B5CF6]/20 to-[#D946EF]/15 blur-[160px] pointer-events-none rounded-full"></div>
        <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-[#00C6FF]/10 blur-[130px] rounded-full pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-400 mb-8">
            <Link to="/" className="hover:text-[#00C6FF] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-500">Services</span>
            <span>/</span>
            <span className="text-[#00C6FF] font-semibold">SEO, GEO & AEO</span>
          </div>

          <div className="max-w-4xl">
            {/* Tag Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#00C6FF]" />
              <span className="text-xs uppercase font-bold tracking-widest text-gray-300">Complete Search & AI Optimization</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.15] mb-8 tracking-tight"
            >
              Grow Your Business with <br />
              <span className="bg-gradient-to-r from-[#00C6FF] via-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">
                SEO, GEO & AEO
              </span>
            </motion.h1>

            {/* Main Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed mb-10 drop-shadow-sm font-normal"
            >
              We provide complete SEO, GEO, and AEO solutions to improve your online visibility, attract quality traffic, and increase conversion opportunities. If you are starting a small business and your goal is to increase traffic, reach more potential customers, and grow online, <strong className="text-white font-semibold">Skillstar Digital Solutions</strong> is the right choice for your business.
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
                Get a Free SEO Consultation <ArrowRight className="w-5 h-5" />
              </Link>
              <a 
                href="#solutions"
                className="px-8 py-4 rounded-full bg-[#0A0F24]/80 backdrop-blur-md border border-white/15 text-gray-200 hover:text-white hover:border-[#00C6FF]/50 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all text-center"
              >
                Explore SEO Modules
              </a>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Services Grid Section */}
      <section id="solutions" className="py-20 relative bg-[#010310]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F172A]/80 border border-white/10 mb-4 shadow-sm">
              <Zap className="w-3.5 h-3.5 text-[#00C6FF]" />
              <span className="text-xs uppercase font-bold tracking-widest text-gray-300">Our Comprehensive SEO Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-4 tracking-tight">
              Six Pillars of Modern Search Dominance
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              From traditional search engines to next-generation AI answer engines, we optimize every touchpoint of your organic presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoFeatures.map((feature, idx) => {
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

      {/* Why Choose SkillStar for SEO Section */}
      <section className="py-20 bg-[#020516] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0A0F24]/90 via-[#0F1738]/80 to-[#120B24]/90 border border-white/15 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B5CF6]/15 blur-3xl rounded-full pointer-events-none"></div>

            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00C6FF]/15 border border-[#00C6FF]/30 text-[#00C6FF] text-xs font-semibold mb-4">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Why Choose SkillStar</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white mb-4 tracking-tight">
                  Accelerate Your Search Rankings with Data-Backed SEO
                </h3>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  We don't rely on guesswork. Our SEO experts use comprehensive keyword research, competitor intelligence, and technical audits to build a tailored roadmap that brings qualified customers directly to your business.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00C6FF] flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-200">Higher Google & AI Search Rankings</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#8B5CF6] flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-200">Qualified Lead Generation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D946EF] flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-200">Transparent Monthly Performance Reports</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00C6FF] flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-200">100% White-Hat & Long-Term Results</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-[#050A1A]/80 border border-white/10 text-center">
                <Globe className="w-12 h-12 text-[#00C6FF] mb-3 animate-pulse" />
                <h4 className="text-lg font-bold text-white mb-2">Ready to Rank #1?</h4>
                <p className="text-xs text-gray-400 mb-5 leading-relaxed">
                  Claim your complimentary website SEO & AI visibility audit today.
                </p>
                <Link
                  to="/#contact"
                  className="w-full py-3 rounded-full bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#D946EF] text-white font-semibold text-sm shadow-[0_0_20px_rgba(217,70,239,0.4)] hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  Claim Free Audit <ArrowRight className="w-4 h-4" />
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

export default SeoService;
