import { motion } from 'framer-motion';
import { 
  Code, 
  Building2, 
  Users, 
  Cloud, 
  Smartphone, 
  Network, 
  Zap, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck,
  Terminal
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import usePageMeta from '../hooks/usePageMeta';

const softwareFeatures = [
  {
    title: 'ERP Systems',
    desc: 'Integrated ERP solutions that bring essential business operations into one connected system, helping manage resources, processes, data, and day-to-day activities more efficiently.',
    icon: Building2,
    color: 'from-[#00C6FF] to-[#3B82F6]',
    gradientBg: 'from-[#051842]/70 to-[#020516]/90',
    tags: ['Resource Planning', 'Inventory & Supply', 'Financial Modules', 'Role-Based Access']
  },
  {
    title: 'CRM Platforms',
    desc: 'Custom CRM platforms designed to organize customer information, manage leads, track interactions, and improve relationships throughout the customer journey.',
    icon: Users,
    color: 'from-[#3B82F6] to-[#8B5CF6]',
    gradientBg: 'from-[#1E0F45]/70 to-[#020516]/90',
    tags: ['Lead Pipelines', 'Customer Portals', 'Automated Follow-ups', 'Activity Tracking']
  },
  {
    title: 'SaaS Products',
    desc: 'Scalable SaaS products designed to deliver software through the cloud, providing users with convenient access while supporting flexible business growth and ongoing product development.',
    icon: Cloud,
    color: 'from-[#8B5CF6] to-[#D946EF]',
    gradientBg: 'from-[#2D0B4E]/70 to-[#020516]/90',
    tags: ['Multi-Tenant Cloud', 'Stripe & Billing APIs', 'User Onboarding', 'High Availability']
  },
  {
    title: 'Mobile Applications',
    desc: 'User-focused mobile applications built for business needs, customer engagement, internal operations, or digital services across modern mobile devices.',
    icon: Smartphone,
    color: 'from-[#D946EF] to-[#EC4899]',
    gradientBg: 'from-[#3B0A42]/70 to-[#020516]/90',
    tags: ['iOS & Android Native', 'React Native / Flutter', 'Offline Sync', 'Push Notifications']
  },
  {
    title: 'API Integrations',
    desc: 'Reliable API integrations that connect different software, platforms, and services, allowing information to move smoothly between systems and reducing manual data handling.',
    icon: Network,
    color: 'from-[#00C6FF] to-[#8B5CF6]',
    gradientBg: 'from-[#0A1A45]/70 to-[#020516]/90',
    tags: ['REST & GraphQL', 'Third-Party Webhooks', 'Secure Data Pipelines', 'Legacy Bridge']
  },
  {
    title: 'Workflow Systems',
    desc: 'Customized workflow systems that digitize and streamline repetitive business processes, helping teams reduce manual effort, improve coordination, and complete tasks more efficiently.',
    icon: Zap,
    color: 'from-[#8B5CF6] to-[#00C6FF]',
    gradientBg: 'from-[#17104A]/70 to-[#020516]/90',
    tags: ['Task Automation', 'Approval Chains', 'Operational Efficiency', 'Real-time Tracking']
  }
];

const CustomSoftwareDevelopment = () => {
  usePageMeta({
    title: 'Custom Software Development Company in Coimbatore | SkillStar',
    description: 'Bespoke ERP systems, CRM platforms, SaaS products, native mobile applications, and secure API integrations built in Coimbatore by SkillStar Digital Solutions.',
    canonical: 'https://www.skillstardigitalsolutions.com/custom-software'
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
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-[#00C6FF]/15 via-[#8B5CF6]/20 to-[#D946EF]/20 blur-[160px] pointer-events-none rounded-full"></div>
        <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-[#00C6FF]/10 blur-[130px] rounded-full pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-400 mb-8">
            <Link to="/" className="hover:text-[#00C6FF] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-500">Services</span>
            <span>/</span>
            <span className="text-[#00C6FF] font-semibold">Custom Software Development</span>
          </div>

          <div className="max-w-4xl">
            {/* Tag Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#00C6FF]" />
              <span className="text-xs uppercase font-bold tracking-widest text-gray-300">Bespoke Engineering & Scalable Systems</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.15] mb-8 tracking-tight"
            >
              Custom Software <br />
              <span className="bg-gradient-to-r from-[#00C6FF] via-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">
                Development Company in Coimbatore
              </span>
            </motion.h1>

            {/* Main Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed mb-10 drop-shadow-sm font-normal"
            >
              Every business has its own processes, challenges, and goals, so software should be built around the way your business actually works. <strong className="text-white font-semibold">Skillstar Digital Solutions</strong> develops custom software solutions that simplify operations, improve productivity, connect business functions, and provide the flexibility to grow as your requirements evolve.
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
                Plan Your Software Architecture <ArrowRight className="w-5 h-5" />
              </Link>
              <a 
                href="#solutions"
                className="px-8 py-4 rounded-full bg-[#0A0F24]/80 backdrop-blur-md border border-white/15 text-gray-200 hover:text-white hover:border-[#00C6FF]/50 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all text-center"
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
              <Zap className="w-3.5 h-3.5 text-[#00C6FF]" />
              <span className="text-xs uppercase font-bold tracking-widest text-gray-300">What's Included</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-4 tracking-tight">
              Enterprise Software Built to Match Your Workflow
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              We design modular, future-proof software architectures that eliminate manual bottlenecks and scale seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwareFeatures.map((feature, idx) => {
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

      {/* Engineering Excellence Section */}
      <section className="py-20 bg-[#020516] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0A0F24]/90 via-[#0C153B]/80 to-[#0A0F24]/90 border border-white/15 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00C6FF]/15 blur-3xl rounded-full pointer-events-none"></div>

            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00C6FF]/15 border border-[#00C6FF]/30 text-[#00C6FF] text-xs font-semibold mb-4">
                  <ShieldCheck className="w-4 h-4" />
                  <span>The SkillStar Engineering Standard</span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white mb-4 tracking-tight">
                  High-Performance Code, Security & Scalability
                </h2>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  We develop software using clean architectures (Microservices, Serverless, Cloud Native), comprehensive automated testing, and stringent cybersecurity protocols to guarantee reliable business execution.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00C6FF] flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-200">100% Custom Source Code Ownership</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#8B5CF6] flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-200">Bank-Grade Encryption & Compliance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D946EF] flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-200">High-Concurrency Cloud Architecture</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00C6FF] flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-200">Dedicated Maintenance & SLA Support</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-[#050A1A]/80 border border-white/10 text-center">
                <Terminal className="w-12 h-12 text-[#00C6FF] mb-3 animate-pulse" />
                <h4 className="text-lg font-bold text-white mb-2">Build Custom Software</h4>
                <p className="text-xs text-gray-400 mb-5 leading-relaxed">
                  Let's discuss technical specifications, architecture, and deployment schedules.
                </p>
                <Link
                  to="/#contact"
                  className="w-full py-3 rounded-full bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#D946EF] text-white font-semibold text-sm shadow-[0_0_20px_rgba(217,70,239,0.4)] hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  Book Technical Discovery <ArrowRight className="w-4 h-4" />
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

export default CustomSoftwareDevelopment;
