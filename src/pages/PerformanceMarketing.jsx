import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Target, 
  Share2, 
  Briefcase, 
  PlayCircle, 
  Filter, 
  RefreshCw, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  DollarSign
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import usePageMeta from '../hooks/usePageMeta';

const marketingFeatures = [
  {
    title: 'Google Ads',
    desc: 'We create and manage targeted Google Ads campaigns to reach customers actively searching for your products or services. Our campaigns focus on relevant keywords, quality traffic, leads, and conversions.',
    icon: Target,
    color: 'from-[#00C6FF] to-[#3B82F6]',
    gradientBg: 'from-[#051842]/70 to-[#020516]/90',
    tags: ['Search Ads', 'Display Network', 'High-Intent Keywords', 'Lower CPC']
  },
  {
    title: 'Meta Ads',
    desc: 'We use Facebook and Instagram advertising to reach your ideal audience based on their interests, behaviour, demographics, and online activity. Our campaigns are designed to increase awareness, generate leads, and drive conversions.',
    icon: Share2,
    color: 'from-[#3B82F6] to-[#8B5CF6]',
    gradientBg: 'from-[#1E0F45]/70 to-[#020516]/90',
    tags: ['Facebook & Instagram', 'Demographic Targeting', 'Visual Ad Creatives', 'Lead Forms']
  },
  {
    title: 'LinkedIn Advertising',
    desc: 'We help businesses reach professional and B2B audiences through targeted LinkedIn advertising. Campaigns can be tailored to specific industries, job roles, companies, and decision-makers to generate relevant business leads.',
    icon: Briefcase,
    color: 'from-[#8B5CF6] to-[#D946EF]',
    gradientBg: 'from-[#2D0B4E]/70 to-[#020516]/90',
    tags: ['B2B Lead Generation', 'Decision Makers', 'Account-Based Ads', 'Industry Filters']
  },
  {
    title: 'YouTube Campaigns',
    desc: 'We create targeted YouTube campaigns to promote your brand, products, or services through engaging video advertising. We focus on reaching the right audience and turning video visibility into meaningful business opportunities. (Based on requirement)',
    icon: PlayCircle,
    color: 'from-[#D946EF] to-[#EC4899]',
    gradientBg: 'from-[#3B0A42]/70 to-[#020516]/90',
    tags: ['Video Discovery', 'Skippable Ads', 'Brand Storytelling', 'High Reach']
  },
  {
    title: 'Conversion Funnel Optimization',
    desc: 'We optimize the customer journey from the first ad click to the final enquiry or purchase. By improving landing pages, messaging, calls-to-action, and user flow, we help increase the percentage of visitors who take action.',
    icon: Filter,
    color: 'from-[#00C6FF] to-[#8B5CF6]',
    gradientBg: 'from-[#0A1A45]/70 to-[#020516]/90',
    tags: ['Landing Page CRO', 'A/B Testing', 'Copywriting & CTA', 'Frictionless Forms']
  },
  {
    title: 'Retargeting Campaigns',
    desc: 'We reconnect with people who have already visited your website or interacted with your brand but did not convert. Retargeting keeps your business in front of interested customers and encourages them to return and complete the desired action.',
    icon: RefreshCw,
    color: 'from-[#8B5CF6] to-[#00C6FF]',
    gradientBg: 'from-[#17104A]/70 to-[#020516]/90',
    tags: ['Pixel Tracking', 'Dynamic Remarketing', 'Abandoned Enquiries', 'Higher ROI']
  }
];

const PerformanceMarketing = () => {
  usePageMeta({
    title: 'Performance Marketing & Paid Ads Agency in Coimbatore | SkillStar',
    description: 'High-ROI Google Ads, Meta Ads (Facebook & Instagram), LinkedIn B2B campaigns, and conversion funnel optimization in Coimbatore by SkillStar Digital Solutions.',
    canonical: 'https://www.skillstardigitalsolutions.com/performance-marketing'
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
            <span className="text-[#D946EF] font-semibold">Performance Marketing & Lead Gen</span>
          </div>

          <div className="max-w-4xl">
            {/* Tag Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D946EF]" />
              <span className="text-xs uppercase font-bold tracking-widest text-gray-300">Data-Driven Paid Advertising & Leads</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.15] mb-8 tracking-tight"
            >
              Performance Marketing <br />
              <span className="bg-gradient-to-r from-[#00C6FF] via-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">
                & Paid Advertising in Coimbatore
              </span>
            </motion.h1>

            {/* Main Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed mb-10 drop-shadow-sm font-normal"
            >
              We help businesses grow by putting their brand in front of the people most likely to become customers. Our Performance Marketing & Lead Generation services are built to increase enquiries, drive qualified leads, and maximize the value of every advertising campaign. If your goal is to grow your customer base and achieve measurable results from digital advertising, <strong className="text-white font-semibold">Skillstar Digital Solutions</strong> provides the right strategy to turn clicks into real business opportunities.
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
                Launch Paid Campaigns <ArrowRight className="w-5 h-5" />
              </Link>
              <a 
                href="#channels"
                className="px-8 py-4 rounded-full bg-[#0A0F24]/80 backdrop-blur-md border border-white/15 text-gray-200 hover:text-white hover:border-[#8B5CF6]/50 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all text-center"
              >
                Explore Channels & Services
              </a>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Services Grid Section */}
      <section id="channels" className="py-20 relative bg-[#010310]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F172A]/80 border border-white/10 mb-4 shadow-sm">
              <Zap className="w-3.5 h-3.5 text-[#D946EF]" />
              <span className="text-xs uppercase font-bold tracking-widest text-gray-300">Paid Acquisition Channels</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-4 tracking-tight">
              Full-Funnel Advertising & Lead Acquisition
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              We engineer scalable ad campaigns tailored to capture demand across search, social, B2B networks, and video platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingFeatures.map((feature, idx) => {
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

      {/* Why SkillStar Section */}
      <section className="py-20 bg-[#020516] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0A0F24]/90 via-[#1E0B38]/80 to-[#0A0F24]/90 border border-white/15 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#D946EF]/15 blur-3xl rounded-full pointer-events-none"></div>

            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D946EF]/15 border border-[#D946EF]/30 text-[#D946EF] text-xs font-semibold mb-4">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Why Choose SkillStar Ads</span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white mb-4 tracking-tight">
                  Maximize Ad Spend with Data-Backed Performance
                </h2>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  Every dollar you spend on ads should bring returns. We monitor cost-per-lead (CPL), conversion rates, and ROI closely, refining audience targeting and creative messaging daily to deliver consistent, predictable revenue.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00C6FF] flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-200">Lower Cost Per Lead (CPL)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#8B5CF6] flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-200">High-Intent Buyer Targeting</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D946EF] flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-200">End-of-Month Transparent Review</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00C6FF] flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-200">High-Converting Landing Pages</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-[#050A1A]/80 border border-white/10 text-center">
                <DollarSign className="w-12 h-12 text-[#D946EF] mb-3 animate-pulse" />
                <h4 className="text-lg font-bold text-white mb-2">Ready to Scale Leads?</h4>
                <p className="text-xs text-gray-400 mb-5 leading-relaxed">
                  Book a strategic audit of your current ad campaigns and growth opportunities.
                </p>
                <Link
                  to="/#contact"
                  className="w-full py-3 rounded-full bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#D946EF] text-white font-semibold text-sm shadow-[0_0_20px_rgba(217,70,239,0.4)] hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  Book Ad Consultation <ArrowRight className="w-4 h-4" />
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

export default PerformanceMarketing;
