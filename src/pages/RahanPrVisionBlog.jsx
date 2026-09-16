import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Lightbulb,
  Layers,
  ShieldCheck,
  Rocket,
  Sparkles,
  Search,
  Layout,
  Palette,
  BarChart3,
  Bot,
  Code2,
  Globe2,
  Users,
  Target,
  Briefcase,
  Cpu,
  Compass,
  Building,
  Zap,
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import usePageMeta from '../hooks/usePageMeta';

const RahanPrVisionBlog = () => {
  usePageMeta({
    title: 'Rahan PR: The Visionary Co-Founder and CEO Driving SkillStar Digital Solutions',
    description: 'Discover how Rahan PR, Co-Founder and CEO of SkillStar Digital Solutions, combines technology, AI automation, branding, SEO, marketing, and business strategy to build a future-ready digital ecosystem.',
    canonical: 'https://www.skillstardigitalsolutions.com/blog/vision-behind-rahan-pr-skillstar'
  });

  const servicesList = [
    { name: 'SEO Optimization', path: '/seo', icon: Search, color: '#00C6FF' },
    { name: 'Local SEO Services', path: '/seo', icon: Globe2, color: '#3B82F6' },
    { name: 'Web Development', path: '/web-development', icon: Layout, color: '#8B5CF6' },
    { name: 'UI/UX Design', path: '/ui-ux-design', icon: Palette, color: '#D946EF' },
    { name: 'Branding & Creative Solutions', path: '/branding', icon: Sparkles, color: '#F43F5E' },
    { name: 'Performance Marketing', path: '/performance-marketing', icon: BarChart3, color: '#10B981' },
    { name: 'AI Automation', path: '/ai-automation', icon: Bot, color: '#06B6D4' },
    { name: 'Custom Software Development', path: '/custom-software', icon: Code2, color: '#8B5CF6' },
  ];

  const ceoFocusAreas = [
    { title: 'Business Strategy & Direction', desc: 'Crafting agile growth roadmaps and steering company objectives toward sustainable digital scaling.' },
    { title: 'Technology & Innovation', desc: 'Integrating bleeding-edge tech stacks and AI frameworks into real-world business applications.' },
    { title: 'Client Relationships', desc: 'Fostering consultative partnerships built on trust, transparency, and measurable business outcomes.' },
    { title: 'Team Development', desc: 'Cultivating a people-first culture of continuous learning, experimentation, and ownership.' },
    { title: 'Digital Transformation', desc: 'Modernizing legacy business operations into streamlined, data-driven digital powerhouses.' },
    { title: 'AI & Automation', desc: 'Deploying autonomous workflows and intelligent agents to eliminate bottlenecks and maximize efficiency.' },
    { title: 'Brand Positioning', desc: 'Carving distinctive market identities that command industry authority and deep audience loyalty.' },
    { title: 'New Business Opportunities', desc: 'Identifying emerging market niches and developing high-impact digital service offerings.' },
    { title: 'Strategic Partnerships', desc: 'Forging collaborative alliances across technology, marketing, and enterprise ecosystems.' },
    { title: 'Long-Term Expansion', desc: 'Scaling digital capabilities from Coimbatore across national and global competitive markets.' }
  ];

  const aiQuestions = [
    { q: 'Where can AI save time?', icon: Clock },
    { q: 'Which processes can be automated?', icon: Bot },
    { q: 'How can AI improve customer experiences?', icon: Users },
    { q: 'Where can technology reduce repetitive work?', icon: Zap },
    { q: 'How can businesses use AI to become more efficient?', icon: TrendingUp },
    { q: 'How can automation support long-term scalability?', icon: Rocket }
  ];

  const leadershipPillars = [
    { title: 'Technology', desc: 'Creates possibilities.', color: '#00C6FF' },
    { title: 'People', desc: 'Bring those possibilities to life.', color: '#8B5CF6' },
    { title: 'Creativity', desc: 'Creates differentiation.', color: '#D946EF' },
    { title: 'Strategy', desc: 'Provides direction.', color: '#10B981' },
    { title: 'Execution', desc: 'Turns plans into outcomes.', color: '#F59E0B' }
  ];

  const futureRoadmap = [
    'AI-powered business solutions',
    'Intelligent automation & workflow bots',
    'SaaS and proprietary technology products',
    'Advanced enterprise custom software',
    'Full-scale digital transformation solutions',
    'International digital service delivery',
    'Startup incubations & business partnerships',
    'Strategic technology investments',
    'New diversified business ventures',
    'Cross-industry multi-vertical expansion'
  ];

  return (
    <div className="bg-[#020516] min-h-screen text-white font-sans overflow-x-hidden selection:bg-[#00C6FF] selection:text-white">
      
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
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-200 hover:text-white hover:border-[#00C6FF]/50 hover:bg-[#00C6FF]/20 transition-all duration-300 shadow-sm group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero / Article Header */}
      <section className="pt-36 pb-16 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-[#00C6FF]/20 via-[#8B5CF6]/20 to-[#D946EF]/20 blur-[160px] pointer-events-none rounded-full"></div>

        <div className="max-w-[1050px] mx-auto px-6 relative z-10">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-400 mb-8">
            <Link to="/" className="hover:text-[#00C6FF] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/#blog" className="hover:text-[#00C6FF] transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-[#00C6FF] font-semibold">Leadership & CEO Vision</span>
          </div>

          {/* Category Tag */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#00C6FF]" />
            <span className="text-xs uppercase font-bold tracking-widest text-gray-300">Executive Leadership & Future Strategy</span>
          </motion.div>

          {/* Article Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white leading-[1.2] mb-6 tracking-tight"
          >
            Rahan PR: The Visionary Co-Founder and CEO Driving{' '}
            <span className="bg-gradient-to-r from-[#00C6FF] via-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">
              SkillStar Digital Solutions
            </span>
          </motion.h1>

          {/* Meta Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex flex-wrap items-center gap-6 text-sm text-gray-400 pb-8 border-b border-white/10"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#00C6FF] via-[#8B5CF6] to-[#D946EF] p-0.5 flex items-center justify-center shadow-lg">
                <div className="w-full h-full bg-[#020516] rounded-full flex items-center justify-center text-white font-bold text-xs">
                  RPR
                </div>
              </div>
              <div>
                <div className="text-gray-200 font-semibold flex items-center gap-2">
                  <span>Rahan PR</span>
                  <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#00C6FF]/15 text-[#00C6FF] border border-[#00C6FF]/30">
                    Co-Founder & CEO
                  </span>
                </div>
                <div className="text-xs text-gray-400">SkillStar Digital Solutions</div>
              </div>
            </div>
            
            <div className="flex items-center gap-1.5 ml-auto sm:ml-0">
              <Calendar className="w-4 h-4 text-[#00C6FF]" />
              <span>Sep 16, 2026</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#8B5CF6]" />
              <span>8 min read</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Article Content Section */}
      <section className="pb-24 relative">
        <div className="max-w-[1050px] mx-auto px-6 relative z-10">
          
          <div className="prose prose-invert max-w-none text-gray-300 text-base sm:text-lg leading-relaxed space-y-8">
            
            {/* Intro Lead Paragraph */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#070E28] via-[#120B29] to-[#070E28] border border-white/15 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#00C6FF]/10 blur-3xl rounded-full pointer-events-none"></div>
              <p className="text-xl sm:text-2xl text-gray-100 font-normal leading-relaxed mb-4">
                Behind every ambitious business is a vision. But turning that vision into something real requires more than an idea. It requires the ability to understand opportunities, make difficult decisions, build the right team, embrace change, and keep moving forward.
              </p>
              <p className="text-base sm:text-lg text-gray-300">
                At <strong className="text-white font-semibold">SkillStar Digital Solutions</strong>, that responsibility is driven by <strong className="text-[#00C6FF] font-semibold">Rahan PR</strong> — Co-Founder and CEO, whose vision combines technology, creativity, business strategy, and innovation.
              </p>
            </div>

            <p>
              Rahan's entrepreneurial journey is not simply about building a digital services company. It is about understanding where businesses are heading, identifying the challenges they face, and creating solutions that can help them move forward in an increasingly digital world.
            </p>

            <p>
              His approach brings together technology, marketing, branding, AI, automation, software, and entrepreneurship with one larger objective—<span className="text-white font-medium underline decoration-[#00C6FF] decoration-2 underline-offset-4">to build something that can continue to evolve with the future.</span>
            </p>

            {/* Section 1: The Mind Behind SkillStar Digital Solutions */}
            <div className="bg-[#070B1F]/90 border border-white/10 rounded-3xl p-8 sm:p-10 shadow-xl my-10">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4 flex items-center gap-3">
                <Lightbulb className="w-7 h-7 text-[#00C6FF]" />
                The Mind Behind SkillStar Digital Solutions
              </h2>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Rahan PR approaches business with the belief that technology should solve real problems. Rather than looking at SEO, web development, branding, marketing, software, and artificial intelligence as completely separate areas, he sees them as connected pieces of a much larger digital ecosystem.
              </p>

              {/* Core Philosophy Banner */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#00C6FF]/10 via-[#8B5CF6]/15 to-[#D946EF]/10 border border-[#00C6FF]/30 text-center my-6">
                <p className="text-xs uppercase tracking-widest text-[#00C6FF] font-bold mb-2">The Guiding Philosophy</p>
                <blockquote className="text-xl sm:text-2xl font-bold font-display text-white tracking-wide">
                  "Build technology. Build brands. Build businesses. Build the future."
                </blockquote>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                This thinking has played an important role in shaping SkillStar Digital Solutions and its approach toward modern businesses. The company is built to help organizations understand digital opportunities, strengthen their presence, connect with customers, and use technology more effectively.
              </p>

              <p className="text-gray-300 leading-relaxed">
                For Rahan, the objective is not simply to provide a list of services. It is to understand what a business actually needs and build the right solution around that requirement.
              </p>
            </div>

            {/* Section 2: Rahan PR as Co-Founder */}
            <div className="bg-gradient-to-br from-[#090F2C] via-[#080D25] to-[#120B29] border border-white/15 rounded-3xl p-8 sm:p-10 my-10 shadow-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4 flex items-center gap-3">
                <Compass className="w-7 h-7 text-[#8B5CF6]" />
                Rahan PR as Co-Founder
              </h2>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                As Co-Founder, Rahan is closely involved in shaping the foundation, identity, and long-term direction of SkillStar Digital Solutions. Building a company from an idea requires more than starting operations. It requires understanding the market, recognising opportunities, learning from challenges, and continuously improving the way the business works.
              </p>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Rahan's role as Co-Founder focuses on developing the company's vision, exploring new opportunities, creating strategies, and encouraging an environment where new ideas can be developed.
              </p>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 mb-6">
                <p className="text-white font-medium text-base mb-2">
                  🚀 Beyond Conventional Digital Agencies
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  His approach is not centred around creating a conventional digital agency. The larger objective is to build a company that can become a long-term technology and business partner for organizations with ambitious goals.
                </p>
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                From digital visibility and branding to websites, software, marketing, and AI automation, the objective is to create an integrated ecosystem that supports businesses throughout their growth journey.
              </p>
            </div>

            {/* Section 3: Rahan PR as CEO & Focus Areas */}
            <div className="bg-[#070B1F]/90 border border-white/10 rounded-3xl p-8 sm:p-10 shadow-xl my-10">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4 flex items-center gap-3">
                <ShieldCheck className="w-7 h-7 text-[#00C6FF]" />
                Rahan PR as CEO
              </h2>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                As CEO, Rahan's responsibility is to turn the company's vision into practical execution. His leadership involves looking at both the present needs of the business and the opportunities that may shape its future.
              </p>

              <h3 className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-4">
                Core Executive Focus Areas:
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {ceoFocusAreas.map((area, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#00C6FF]/40 transition-all duration-300 group">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="w-6 h-6 rounded-lg bg-[#00C6FF]/10 flex items-center justify-center text-[#00C6FF] group-hover:scale-110 transition-transform">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-white group-hover:text-[#00C6FF] transition-colors">{area.title}</h4>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed pl-8.5">{area.desc}</p>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#10193E] to-[#1E1139] border border-white/15">
                <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#D946EF]" />
                  A People-First Leadership Mindset
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  For Rahan, leadership is not simply about making decisions from the top. It is about creating clarity, giving people the opportunity to contribute, encouraging experimentation, and building a team that can grow alongside the organization. A strong company requires people who are willing to think, learn, adapt, and take responsibility. That people-first approach works alongside his technology-focused vision.
                </p>
              </div>
            </div>

            {/* Section 4: Understanding Every Customer's Requirement */}
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-12 mb-4 flex items-center gap-3">
              <Target className="w-7 h-7 text-[#D946EF]" />
              Understanding Every Customer's Requirement
            </h2>

            <p>
              One of the important principles behind SkillStar Digital Solutions is that every customer is different.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00C6FF] block mb-2">Early-Stage Startups</span>
                <p className="text-sm text-gray-300">May require a strong foundation, rapid brand identity creation, and a basic digital presence to launch quickly.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8B5CF6] block mb-2">Growing Businesses</span>
                <p className="text-sm text-gray-300">Often need enhanced search visibility (SEO/AEO), high-converting landing pages, performance marketing, and lead generation.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D946EF] block mb-2">Established Enterprises</span>
                <p className="text-sm text-gray-300">Require bespoke web systems, complex custom software, enterprise AI automation, and complete digital transformation strategies.</p>
              </div>
            </div>

            <p>
              There is no single solution that works equally well for everyone. Rahan's approach is to first understand the customer's business, goals, challenges, audience, expectations, and requirements before deciding what solution should be provided.
            </p>

            <p className="text-gray-300">
              The focus is on creating solutions according to the business—not forcing every business into the same package. Whether the requirement is small, specific, or part of a larger digital transformation, the objective is to provide a practical solution that fits the customer's actual needs. This customer-focused philosophy allows SkillStar Digital Solutions to work with different types of businesses while maintaining a personalised approach.
            </p>

            {/* Section 5: A Digital Vision for Modern Businesses */}
            <div className="bg-gradient-to-br from-[#0A102E] via-[#070B1F] to-[#0D153A] border border-white/15 rounded-3xl p-8 sm:p-10 my-12 shadow-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4 flex items-center gap-3">
                <Layers className="w-7 h-7 text-[#00C6FF]" />
                A Digital Vision for Modern Businesses
              </h2>

              <p className="text-gray-300 mb-6 leading-relaxed">
                SkillStar Digital Solutions brings together multiple areas of digital expertise into one unified capability matrix:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {servicesList.map((service, idx) => {
                  const IconComponent = service.icon;
                  return (
                    <Link 
                      key={idx}
                      to={service.path}
                      className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#00C6FF]/50 hover:bg-white/[0.06] transition-all duration-300 group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-white group-hover:scale-110 transition-transform flex-shrink-0">
                        <IconComponent className="w-4.5 h-4.5" style={{ color: service.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors block truncate">
                          {service.name}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </Link>
                  );
                })}
              </div>

              <div className="space-y-3 text-sm sm:text-base text-gray-300 border-t border-white/10 pt-6">
                <p>
                  <strong className="text-white">Each capability has its own purpose:</strong> <Link to="/seo" className="text-[#00C6FF] hover:underline font-medium">SEO</Link> can help businesses improve visibility and reach potential customers. <Link to="/web-development" className="text-[#8B5CF6] hover:underline font-medium">Web development</Link> can create the digital foundation through which customers interact with a company. <Link to="/ui-ux-design" className="text-[#D946EF] hover:underline font-medium">UI/UX</Link> can make those experiences easier and more engaging. <Link to="/branding" className="text-[#F43F5E] hover:underline font-medium">Branding</Link> can establish recognition and trust. Brand upscaling can help businesses strengthen their identity and present themselves more effectively across digital channels. <Link to="/performance-marketing" className="text-[#10B981] hover:underline font-medium">Performance marketing</Link> can help businesses reach targeted audiences and generate opportunities. <Link to="/ai-automation" className="text-[#06B6D4] hover:underline font-medium">AI automation</Link> can improve efficiency and reduce repetitive processes. <Link to="/custom-software" className="text-[#8B5CF6] hover:underline font-medium">Custom software</Link> can address business requirements that cannot be solved through standard solutions.
                </p>
                <p className="text-[#00C6FF] font-semibold italic">
                  The real strength comes from understanding when and how these capabilities should work together.
                </p>
              </div>
            </div>

            {/* Section 6: The AI-First Mindset */}
            <div className="bg-[#080D25] border border-white/10 rounded-3xl p-8 sm:p-10 my-10">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4 flex items-center gap-3">
                <Bot className="w-7 h-7 text-[#06B6D4]" />
                The AI-First Mindset
              </h2>

              <p className="text-gray-300 mb-4 leading-relaxed">
                Artificial intelligence is becoming one of the most influential technologies in modern business. Rahan sees AI as more than a trend or a new technology category. He sees it as a tool that can fundamentally change how businesses operate.
              </p>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Instead of simply asking whether a business should use AI, Rahan guides the conversation with essential, high-impact business questions:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                {aiQuestions.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
                      <div className="w-8 h-8 rounded-lg bg-[#06B6D4]/10 flex items-center justify-center text-[#06B6D4] flex-shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-gray-200">{item.q}</span>
                    </div>
                  );
                })}
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                These questions influence the future direction of SkillStar Digital Solutions. The objective is not to introduce AI into every process unnecessarily. It is to identify areas where artificial intelligence and automation can create genuine business value. This practical approach allows technology to remain connected to business objectives rather than becoming technology for technology's sake.
              </p>
            </div>

            {/* Section 7: More Than a Digital Services Company */}
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-12 mb-4 flex items-center gap-3">
              <Rocket className="w-7 h-7 text-[#8B5CF6]" />
              More Than a Digital Services Company
            </h2>

            <p>
              Rahan's vision extends beyond creating another digital services company. The larger ambition is to develop a technology-driven business ecosystem capable of adapting to changing markets and emerging opportunities.
            </p>

            <p className="text-gray-300">
              SkillStar Digital Solutions represents an important part of that ecosystem. The long-term vision includes exploring AI-powered products, developing automation solutions, creating software platforms, supporting businesses with digital transformation, and identifying opportunities where technology can solve real-world challenges.
            </p>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#120B29] to-[#0A0F24] border border-white/15 my-6">
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-medium">
                "This creates room for the company to evolve. The goal is not to remain limited to a fixed list of services. It is to continuously learn, develop new capabilities, and respond to the changing requirements of businesses."
              </p>
            </div>

            {/* Section 8: Building Brands with Purpose */}
            <div className="bg-[#070B1F]/90 border border-white/10 rounded-3xl p-8 sm:p-10 shadow-xl my-10">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4 flex items-center gap-3">
                <Palette className="w-7 h-7 text-[#F43F5E]" />
                Building Brands with Purpose
              </h2>

              <p className="text-gray-300 mb-4 leading-relaxed">
                In today's digital environment, visibility alone is not enough. Businesses need to create an identity that people can recognise and remember. A strong brand influences how customers perceive a company before they even make a purchase or enquiry.
              </p>

              <p className="text-gray-300 mb-4 leading-relaxed">
                This is why <Link to="/branding" className="text-[#F43F5E] hover:underline font-semibold">branding</Link> forms an important part of Rahan's broader vision. Through branding, creative solutions, digital marketing, and brand upscaling, businesses can create a stronger and more consistent identity.
              </p>

              <p className="text-gray-300 leading-relaxed">
                The objective is not simply to make a company look professional. It is to communicate what the business represents, what makes it different, and why customers should pay attention to it. When branding works together with technology and marketing, it becomes part of the overall business strategy.
              </p>
            </div>

            {/* Section 9: The Leadership Philosophy of Rahan PR */}
            <div className="bg-gradient-to-br from-[#0F172A] via-[#070B1F] to-[#1E1B4B] border border-white/15 rounded-3xl p-8 sm:p-10 my-12 shadow-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4 flex items-center gap-3">
                <TrendingUp className="w-7 h-7 text-[#10B981]" />
                The Leadership Philosophy of Rahan PR
              </h2>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Rahan believes that strong businesses are created through the combination of five key elements: <strong className="text-white">People, Technology, Creativity, Strategy, and Execution.</strong>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-8">
                {leadershipPillars.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
                    <span className="text-base font-bold text-white mb-1" style={{ color: item.color }}>
                      {item.title}
                    </span>
                    <span className="text-xs text-gray-300">{item.desc}</span>
                  </div>
                ))}
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                This philosophy influences the way he approaches both business and team development. Instead of focusing only on what can be achieved today, his thinking extends toward what can be built for tomorrow.
              </p>

              <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 text-gray-200">
                <p className="text-sm sm:text-base font-semibold text-white mb-1">
                  The Evergreen Question:
                </p>
                <p className="text-sm text-gray-300 italic">
                  The question is not simply: "What can we do now?" It is also: <strong className="text-[#00C6FF]">"What can we build today that will continue to create value in the future?"</strong> That mindset encourages continuous improvement and keeps the organization open to new opportunities.
                </p>
              </div>
            </div>

            {/* Section 10: The Coimbatore Business Vision */}
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-12 mb-4 flex items-center gap-3">
              <Building className="w-7 h-7 text-[#00C6FF]" />
              The Coimbatore Business Vision
            </h2>

            <p>
              Coimbatore is home to businesses across technology, manufacturing, retail, education, healthcare, services, and several other industries. As these businesses continue to adopt digital platforms, their requirements are also becoming more diverse.
            </p>

            <p className="text-gray-300">
              Some businesses need better online visibility. Some need stronger branding. Some need websites and software. Others are looking for automation, AI solutions, performance marketing, or complete digital strategies.
            </p>

            <p className="text-gray-300">
              SkillStar Digital Solutions aims to support these different requirements through a connected and customer-focused approach. This vision contributes to the company's ambition of becoming the <strong className="text-white">best digital solution in Coimbatore</strong>, while building capabilities that can serve businesses across wider national and global markets.
            </p>

            <p className="text-[#00C6FF] font-medium italic">
              The foundation may be in Coimbatore, but the vision extends beyond one city.
            </p>

            {/* Section 11 & 12: Building Multiple Businesses & Creating Opportunities for Entrepreneurs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
              <div className="bg-[#070B1F]/90 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold font-display text-white mb-3 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-[#8B5CF6]" />
                    Building Multiple Businesses
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed mb-4">
                    For Rahan, entrepreneurship is not limited to building one company. His broader vision includes exploring multiple businesses, industries, technologies, and opportunities. Every business creates a different learning experience and presents different challenges.
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    The objective is to build businesses that can operate independently while benefiting from shared knowledge, technology, strategy, branding, and entrepreneurial experience.
                  </p>
                </div>
              </div>

              <div className="bg-[#070B1F]/90 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold font-display text-white mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#D946EF]" />
                    Creating Opportunities for Entrepreneurs
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed mb-4">
                    Entrepreneurship is also about creating opportunities for others. Rahan's long-term vision includes supporting entrepreneurs, startups, emerging ideas, and innovative business models.
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Whether startups need technology, branding, automation, or strategic support, creating connections between these areas can help businesses move from an idea toward execution.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 13: The Future of SkillStar Digital Solutions */}
            <div className="bg-gradient-to-br from-[#080D25] via-[#10173A] to-[#080D25] border border-white/15 rounded-3xl p-8 sm:p-10 my-12 shadow-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4 flex items-center gap-3">
                <Rocket className="w-7 h-7 text-[#00C6FF]" />
                The Future of SkillStar Digital Solutions
              </h2>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Looking ahead, Rahan envisions SkillStar Digital Solutions developing into more than a traditional digital services company. The future roadmap spans advanced technological frontiers:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {futureRoadmap.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
                    <CheckCircle2 className="w-4.5 h-4.5 text-[#00C6FF] flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-gray-200">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">
                The objective is to create an organization that grows alongside technology instead of simply reacting to technological changes. As new technologies emerge and customer expectations evolve, the company can continue adapting its capabilities and exploring new ways to create value.
              </p>
            </div>

            {/* Section 14: The Entrepreneur Behind the Vision & Digital Innovation */}
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-12 mb-4 flex items-center gap-3">
              <Cpu className="w-7 h-7 text-[#D946EF]" />
              The Entrepreneur Behind the Vision
            </h2>

            <p>
              Rahan PR represents an entrepreneurial mindset built around curiosity, technology, business thinking, and continuous exploration. As Co-Founder and CEO of SkillStar Digital Solutions, his role connects strategy with execution and ideas with action.
            </p>

            <p className="text-gray-300">
              Beyond titles and responsibilities, his approach is driven by a simple question: <strong className="text-white">"What's next?"</strong>
            </p>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2 text-sm sm:text-base text-gray-300 my-6">
              <p className="font-semibold text-white">The Perpetual Catalyst:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                <li>What is the next opportunity?</li>
                <li>What technology can solve the next problem?</li>
                <li>What can be improved?</li>
                <li>What new business can be created?</li>
                <li>How can existing businesses become stronger?</li>
                <li>How can SkillStar Digital Solutions reach its next level?</li>
              </ul>
              <p className="pt-2 text-xs text-[#00C6FF] font-medium">
                These questions encourage a mindset of continuous development. The focus is not on reaching one final destination. It is on continuing to build.
              </p>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-10 mb-4 flex items-center gap-3">
              <Zap className="w-7 h-7 text-[#00C6FF]" />
              From Digital Services to Digital Innovation
            </h2>

            <p>
              The future of business will increasingly depend on how effectively companies combine technology with human creativity. AI, automation, software, digital marketing, branding, data, and customer experience will continue to influence the way businesses compete.
            </p>

            <p className="text-gray-300">
              Rahan's vision is to position SkillStar Digital Solutions within this changing landscape. The ambition is to become more than a company that provides digital services. It is to become a technology and innovation partner that understands different businesses, identifies their specific requirements, and helps them move toward practical digital solutions.
            </p>

            {/* Section 15: Conclusion Banner */}
            <div className="border-t border-white/15 pt-10 mt-12 bg-gradient-to-r from-[#00C6FF]/5 via-[#8B5CF6]/10 to-[#D946EF]/5 p-8 rounded-3xl border border-white/10">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4 bg-gradient-to-r from-[#00C6FF] via-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">
                Rahan PR — Building What Comes Next
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                The journey of SkillStar Digital Solutions is still developing. What began as a digital solutions vision has the potential to evolve into something much broader—an ecosystem involving technology, AI, branding, marketing, software, entrepreneurship, investment, and innovation.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                At the centre of this journey is <strong className="text-white">Rahan PR — Co-Founder and CEO of SkillStar Digital Solutions</strong>. His vision goes beyond building one successful company. It is about building technology that solves problems, creating brands that stand out, developing businesses that can adapt, supporting people with ambitious ideas, and identifying opportunities before they become obvious.
              </p>

              <div className="border-l-4 border-[#00C6FF] pl-4 py-1 space-y-1">
                <p className="text-sm font-bold text-white uppercase tracking-wider">The Mind Behind the Vision.</p>
                <p className="text-sm font-bold text-white uppercase tracking-wider">The Strategy Behind the Execution.</p>
                <p className="text-sm font-bold text-[#00C6FF] uppercase tracking-wider">The Leader Building What Comes Next.</p>
              </div>
            </div>

          </div>

          {/* Author Box & CTA Card */}
          <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#070B1F] via-[#101A3F] to-[#070B1F] border border-white/15 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#00C6FF] via-[#8B5CF6] to-[#D946EF] p-0.5 flex items-center justify-center flex-shrink-0 shadow-lg">
                <div className="w-full h-full bg-[#020516] rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                  RPR
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>Rahan PR</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#00C6FF]/20 text-[#00C6FF] border border-[#00C6FF]/30 font-normal">
                    Co-Founder & CEO
                  </span>
                </h4>
                <p className="text-xs text-[#00C6FF] font-semibold">SkillStar Digital Solutions</p>
                <p className="text-xs text-gray-400 mt-1 max-w-md">
                  Spearheading executive strategy, client growth partnerships, AI automation, and ecosystem expansion.
                </p>
              </div>
            </div>

            <Link
              to="/#contact"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#00C6FF] via-[#8B5CF6] to-[#D946EF] text-white font-bold text-xs shadow-[0_0_20px_rgba(0,198,255,0.4)] hover:scale-105 transition-all whitespace-nowrap flex items-center gap-2"
            >
              Consult With Our Team <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Cross-Link to Director & Investor Blog */}
          <div className="mt-8 p-6 rounded-3xl bg-[#0A0F24]/60 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#D946EF]/15 flex items-center justify-center text-[#D946EF] flex-shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#D946EF]">Also Read</span>
                <h5 className="text-sm font-bold text-white">R. Rohan: The Visionary Co-Founder, Director & Investor Behind SkillStar</h5>
              </div>
            </div>
            <Link
              to="/blog/vision-behind-rohan-skillstar"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#D946EF] hover:text-white px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[#D946EF]/40 transition-all whitespace-nowrap"
            >
              Read Director Article <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RahanPrVisionBlog;
