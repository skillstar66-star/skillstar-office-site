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
  Coins,
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import usePageMeta from '../hooks/usePageMeta';

const RohanVisionBlog = () => {
  usePageMeta({
    title: 'R. Rohan: The Visionary Co-Founder, Director & Investor Behind SkillStar Digital Solutions',
    description: 'Explore how R. Rohan, Co-Founder, Director & Investor at SkillStar Digital Solutions, drives brand upscaling, AI automation, technology investments, and a future-ready business ecosystem.',
    canonical: 'https://www.skillstardigitalsolutions.com/blog/vision-behind-rohan-skillstar'
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

  const directorQuestions = [
    { q: 'What will businesses need in the coming years?', icon: TrendingUp },
    { q: 'How will artificial intelligence change business operations?', icon: Bot },
    { q: 'How can automation reduce unnecessary manual work?', icon: Zap },
    { q: 'What makes a brand memorable in a competitive market?', icon: Palette },
    { q: 'How can technology create measurable business value?', icon: Target },
    { q: 'How can long-term relationships be built with clients and partners?', icon: Users },
  ];

  const corePillars = [
    { title: 'Building Digital Businesses', desc: 'Crafting agile, resilient business models powered by scalable digital foundations.', color: '#00C6FF' },
    { title: 'Strengthening Brands', desc: 'Transforming companies into distinct, recognizable market authorities through brand upscaling.', color: '#D946EF' },
    { title: 'Creating Technology', desc: 'Deploying pragmatic AI, automation, and custom software that solve real operational hurdles.', color: '#8B5CF6' },
    { title: 'Investing in Ideas', desc: 'Backing ambitious founders, startups, and high-potential ventures with capital and mentorship.', color: '#10B981' }
  ];

  const ecosystemComponents = [
    { name: 'SEO & Discovery', role: 'Creates visibility and drives high-intent customer discovery on Google.' },
    { name: 'Web Foundation', role: 'Builds first impressions, credibility, and seamless digital interaction hubs.' },
    { name: 'UI/UX Experience', role: 'Ensures intuitive navigation and maximizes visitor engagement and satisfaction.' },
    { name: 'Branding & Identity', role: 'Establishes recall, market differentiation, and emotional trust with audiences.' },
    { name: 'Performance Marketing', role: 'Channels targeted audience traffic and fuels measurable lead pipelines.' },
    { name: 'AI & Automation', role: 'Streamlines internal workflows, customer response, and operational efficiency.' },
    { name: 'Custom Software', role: 'Solves specialized business bottlenecks and automates enterprise complexity.' }
  ];

  return (
    <div className="bg-[#020516] min-h-screen text-white font-sans overflow-x-hidden selection:bg-[#D946EF] selection:text-white">
      
      {/* Top Floating Navbar / Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-4 bg-[#020516]/90 backdrop-blur-md border-b border-white/10 shadow-lg">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 cursor-pointer group">
            <img 
              src="/logo (2).png" 
              alt="SkillStar Logo" 
              className="h-12 sm:h-14 w-auto object-contain drop-shadow-[0_0_15px_rgba(217,70,239,0.7)] group-hover:scale-105 transition-all duration-300" 
            />
          </Link>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-200 hover:text-white hover:border-[#D946EF]/50 hover:bg-[#D946EF]/20 transition-all duration-300 shadow-sm group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero / Article Header */}
      <section className="pt-36 pb-16 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-[#D946EF]/20 via-[#8B5CF6]/20 to-[#00C6FF]/20 blur-[160px] pointer-events-none rounded-full"></div>

        <div className="max-w-[1050px] mx-auto px-6 relative z-10">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-400 mb-8">
            <Link to="/" className="hover:text-[#D946EF] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/#blog" className="hover:text-[#D946EF] transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-[#D946EF] font-semibold">Director & Investor Vision</span>
          </div>

          {/* Category Tag */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D946EF]" />
            <span className="text-xs uppercase font-bold tracking-widest text-gray-300">Leadership, Investment & Future Ecosystems</span>
          </motion.div>

          {/* Article Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white leading-[1.2] mb-6 tracking-tight"
          >
            R. Rohan: The Visionary Co-Founder, Director & Investor Behind{' '}
            <span className="bg-gradient-to-r from-[#D946EF] via-[#8B5CF6] to-[#00C6FF] bg-clip-text text-transparent">
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
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#D946EF] via-[#8B5CF6] to-[#00C6FF] p-0.5 flex items-center justify-center shadow-lg">
                <div className="w-full h-full bg-[#020516] rounded-full flex items-center justify-center text-white font-bold text-xs">
                  RR
                </div>
              </div>
              <div>
                <div className="text-gray-200 font-semibold flex items-center gap-2">
                  <span>R. Rohan</span>
                  <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#D946EF]/15 text-[#D946EF] border border-[#D946EF]/30">
                    Co-Founder, Director & Investor
                  </span>
                </div>
                <div className="text-xs text-gray-400">SkillStar Digital Solutions</div>
              </div>
            </div>
            
            <div className="flex items-center gap-1.5 ml-auto sm:ml-0">
              <Calendar className="w-4 h-4 text-[#D946EF]" />
              <span>Sep 16, 2026</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#8B5CF6]" />
              <span>9 min read</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Article Content Section */}
      <section className="pb-24 relative">
        <div className="max-w-[1050px] mx-auto px-6 relative z-10">
          
          <div className="prose prose-invert max-w-none text-gray-300 text-base sm:text-lg leading-relaxed space-y-8">
            
            {/* Intro Lead Paragraph */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#170B28] via-[#0E0720] to-[#07132B] border border-white/15 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#D946EF]/10 blur-3xl rounded-full pointer-events-none"></div>
              <p className="text-xl sm:text-2xl text-gray-100 font-normal leading-relaxed mb-4">
                The way businesses operate is changing faster than ever. Technology is reshaping customer expectations, artificial intelligence is transforming everyday processes, and digital platforms have become an important part of how companies build visibility and connect with their audiences.
              </p>
              <p className="text-base sm:text-lg text-gray-300">
                In this changing environment, businesses need more than individual digital services. They need a clear direction, the right technology, a strong identity, and strategies that can turn opportunities into meaningful business outcomes. This is the vision behind <strong className="text-[#D946EF] font-semibold">R. Rohan</strong>, Co-Founder, Director & Investor of <strong className="text-white font-semibold">SkillStar Digital Solutions</strong>.
              </p>
            </div>

            <p>
              Through SkillStar Digital Solutions, Rohan is working toward creating a broader approach to digital business—one that brings together technology, marketing, branding, automation, creativity, and entrepreneurship.
            </p>

            <p>
              But his ambition extends beyond building a digital solutions company. It is about <span className="text-white font-medium underline decoration-[#D946EF] decoration-2 underline-offset-4">creating businesses, supporting ideas, exploring new opportunities, and developing an ecosystem that can continue to evolve with technology and changing markets.</span>
            </p>

            {/* Section 1: The Beginning of a Larger Vision */}
            <div className="bg-[#070B1F]/90 border border-white/10 rounded-3xl p-8 sm:p-10 shadow-xl my-10">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4 flex items-center gap-3">
                <Lightbulb className="w-7 h-7 text-[#D946EF]" />
                The Beginning of a Larger Vision
              </h2>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                SkillStar Digital Solutions was established with a simple understanding: <strong className="text-white">every business is different, and every customer has different requirements.</strong>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00C6FF] block mb-2">Early-Stage Startups</span>
                  <p className="text-sm text-gray-300">May need to establish their first digital identity, launch a brand presence, and gain early market traction.</p>
                </div>
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8B5CF6] block mb-2">Growing Companies</span>
                  <p className="text-sm text-gray-300">Need heightened visibility, customer acquisition funnels, performance marketing, and higher conversion rates.</p>
                </div>
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D946EF] block mb-2">Established Organizations</span>
                  <p className="text-sm text-gray-300">Require technology upgrades, AI automation, stronger brand upscaling, or complete digital strategies.</p>
                </div>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                The requirement may be different, but the objective remains the same—to understand what each customer actually needs and provide solutions accordingly. This customer-focused thinking has shaped the approach of SkillStar Digital Solutions.
              </p>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Whether a customer is looking for a simple digital requirement or a complete business solution, the approach is to first understand their goals, challenges, audience, budget, and expectations. Based on those requirements, the right combination of services can be planned and delivered.
              </p>

              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#D946EF]/15 via-[#8B5CF6]/15 to-[#00C6FF]/15 border border-[#D946EF]/30 text-center my-6">
                <blockquote className="text-xl sm:text-2xl font-bold font-display text-white tracking-wide">
                  "The solution should fit the business, not the other way around."
                </blockquote>
              </div>

              {/* Integrated Services Grid */}
              <h3 className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-4 mt-6">
                The Integrated Capabilities Matrix:
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {servicesList.map((service, idx) => {
                  const IconComponent = service.icon;
                  return (
                    <Link 
                      key={idx}
                      to={service.path}
                      className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#D946EF]/50 hover:bg-white/[0.06] transition-all duration-300 group"
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

              <p className="text-gray-300 leading-relaxed text-sm sm:text-base border-t border-white/10 pt-6">
                Instead of looking at these as isolated services, the broader idea is to connect them according to the needs of each business. <Link to="/seo" className="text-[#00C6FF] hover:underline font-medium">SEO</Link> can create visibility. A <Link to="/web-development" className="text-[#8B5CF6] hover:underline font-medium">website</Link> can create a digital foundation. <Link to="/ui-ux-design" className="text-[#D946EF] hover:underline font-medium">UI/UX</Link> can improve how customers interact with a business. <Link to="/branding" className="text-[#F43F5E] hover:underline font-medium">Branding</Link> can build recognition. Brand upscaling can strengthen how a company presents itself across different platforms. <Link to="/performance-marketing" className="text-[#10B981] hover:underline font-medium">Performance marketing</Link> can create targeted customer opportunities. <Link to="/ai-automation" className="text-[#06B6D4] hover:underline font-medium">AI automation</Link> can improve efficiency. <Link to="/custom-software" className="text-[#8B5CF6] hover:underline font-medium">Custom software</Link> can solve specific operational challenges. Together, these areas form the foundation of a more complete digital business strategy.
              </p>
            </div>

            {/* Section 2: Rohan's Role as Co-Founder */}
            <div className="bg-gradient-to-br from-[#120722] via-[#090D25] to-[#0A122E] border border-white/15 rounded-3xl p-8 sm:p-10 my-10 shadow-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4 flex items-center gap-3">
                <Compass className="w-7 h-7 text-[#8B5CF6]" />
                Rohan's Role as Co-Founder
              </h2>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                As Co-Founder, Rohan is part of the vision that shapes the identity and direction of SkillStar Digital Solutions. His approach to entrepreneurship is centred around identifying problems, understanding opportunities, and finding practical ways to use technology to create solutions.
              </p>

              <p className="text-gray-300 mb-6 leading-relaxed">
                For him, digital transformation is not simply about adopting the latest technology. It is about understanding <strong className="text-white">why a business needs a particular solution</strong> and how that solution can contribute to its objectives.
              </p>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 mb-6">
                <p className="text-white font-medium text-base mb-2">
                  🌐 The Connected Business Perspective
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  A business does not exist through a website alone. Its digital identity is influenced by its visibility, branding, customer experience, marketing, technology, communication, and operational efficiency.
                </p>
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                From digital visibility and branding to websites, software, marketing, and AI automation, the objective is to create an integrated ecosystem that supports businesses throughout their growth journey. The role of SkillStar Digital Solutions is to understand these requirements and bring the right elements together based on what each customer actually needs.
              </p>
            </div>

            {/* Section 3: The Strategic Perspective of a Director */}
            <div className="bg-[#070B1F]/90 border border-white/10 rounded-3xl p-8 sm:p-10 shadow-xl my-10">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4 flex items-center gap-3">
                <ShieldCheck className="w-7 h-7 text-[#00C6FF]" />
                The Strategic Perspective of a Director
              </h2>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                As Director, Rohan's responsibilities extend toward the larger strategic direction of the organization. Running a business requires attention to today's priorities, but building one for the future requires looking beyond them.
              </p>

              <p className="text-gray-300 mb-6 leading-relaxed">
                That means understanding changing markets, studying customer behaviour, watching emerging technologies, and identifying opportunities before they become mainstream.
              </p>

              <h3 className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-4">
                Strategic Questions Influencing This Perspective in 2026:
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                {directorQuestions.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#00C6FF]/40 transition-all">
                      <div className="w-8 h-8 rounded-lg bg-[#00C6FF]/10 flex items-center justify-center text-[#00C6FF] flex-shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-gray-200">{item.q}</span>
                    </div>
                  );
                })}
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#10193E] to-[#1E1139] border border-white/15">
                <p className="text-sm text-gray-300 leading-relaxed">
                  These questions are particularly relevant in <strong className="text-white">2026</strong>, when AI, automation, digital experiences, and data-driven decision-making are becoming increasingly important across industries.
                </p>
              </div>
            </div>

            {/* Section 4: An Investor's Mindset */}
            <div className="bg-gradient-to-br from-[#1C0E28] via-[#090D25] to-[#0A102A] border border-white/15 rounded-3xl p-8 sm:p-10 my-10 shadow-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4 flex items-center gap-3">
                <Coins className="w-7 h-7 text-[#D946EF]" />
                An Investor's Mindset
              </h2>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                Rohan's role as an Investor adds another layer to his entrepreneurial vision. Investment creates an opportunity to look at businesses from a broader perspective—not only in terms of what they are today, but also what they could become in the future.
              </p>

              <p className="text-gray-300 mb-6 leading-relaxed">
                His interest lies in opportunities that combine strong ideas, innovation, technology, and entrepreneurial potential.
              </p>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 mb-6">
                <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-[#8B5CF6]" />
                  More Than Capital: Catalyzing Innovation
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  An investment can provide more than financial participation. It can also create opportunities to support founders, develop ideas, encourage innovation, and contribute knowledge and experience. This mindset supports Rohan's broader ambition of being involved in businesses that have the potential to develop into something larger.
                </p>
              </div>
            </div>

            {/* Section 5: Building Brands, Not Just Businesses */}
            <div className="bg-[#070B1F]/90 border border-white/10 rounded-3xl p-8 sm:p-10 shadow-xl my-10">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4 flex items-center gap-3">
                <Palette className="w-7 h-7 text-[#F43F5E]" />
                Building Brands, Not Just Businesses
              </h2>

              <p className="text-gray-300 mb-4 leading-relaxed">
                In a competitive digital environment, having a business is only the beginning. Customers interact with brands through websites, search engines, social media, advertisements, content, and digital experiences. Every interaction contributes to how they perceive a company.
              </p>

              <p className="text-gray-300 mb-4 leading-relaxed">
                This makes <Link to="/branding" className="text-[#F43F5E] hover:underline font-semibold">branding</Link> an important part of long-term business development. Rohan's vision therefore extends beyond simply helping companies become visible online. It also focuses on helping them build a stronger identity.
              </p>

              <p className="text-gray-300 leading-relaxed">
                Through branding, creative communication, digital marketing, and brand upscaling, businesses can develop a more consistent presence and create stronger connections with their audiences. The objective is not to make every business look the same. It is to understand what makes each business different and build its digital identity around that difference.
              </p>
            </div>

            {/* Section 6: Why Technology and AI Are Becoming Central to Business */}
            <div className="bg-[#080D25] border border-white/10 rounded-3xl p-8 sm:p-10 my-10">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4 flex items-center gap-3">
                <Bot className="w-7 h-7 text-[#06B6D4]" />
                Why Technology and AI Are Becoming Central to Business
              </h2>

              <p className="text-gray-300 mb-4 leading-relaxed">
                Technology is no longer limited to the IT department. It now influences marketing, customer service, operations, sales, communication, analytics, and decision-making. Artificial intelligence is accelerating this transformation.
              </p>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Businesses can use AI to automate repetitive activities, improve workflows, analyse information, support customer interactions, assist marketing processes, and increase productivity.
              </p>

              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0C1B33] to-[#120B29] border border-white/15 mb-6">
                <h4 className="text-base font-bold text-[#00C6FF] mb-2 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-[#00C6FF]" />
                  The Human-Centric AI Balance
                </h4>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Technology alone does not create business success. The real value comes from knowing where technology should be used and where human judgement remains essential. This is the approach Rohan sees for AI automation—using technology to solve practical problems rather than implementing AI simply because it is a popular trend.
                </p>
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                SkillStar Digital Solutions aims to make these technologies more accessible and useful for businesses that want to improve the way they operate.
              </p>
            </div>

            {/* Section 7: Creating a Complete Digital Ecosystem */}
            <div className="bg-gradient-to-br from-[#0A102E] via-[#070B1F] to-[#0D153A] border border-white/15 rounded-3xl p-8 sm:p-10 my-12 shadow-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4 flex items-center gap-3">
                <Layers className="w-7 h-7 text-[#00C6FF]" />
                Creating a Complete Digital Ecosystem
              </h2>

              <p className="text-gray-300 mb-6 leading-relaxed">
                A modern business needs several digital components working seamlessly together. Consider a customer journey:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                {ecosystemComponents.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
                    <span className="text-sm font-bold text-[#00C6FF] mb-1">{item.name}</span>
                    <span className="text-xs text-gray-300 leading-relaxed">{item.role}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 text-sm sm:text-base text-gray-300 border-t border-white/10 pt-6">
                <p>
                  Each component has its own role, but the real opportunity comes when they work together. At the same time, not every business requires all of these services. The right approach is to identify the customer's actual requirement and build a solution around it.
                </p>
                <p className="text-[#D946EF] font-semibold italic">
                  This customer-first and requirement-driven approach is one of the foundations behind SkillStar Digital Solutions.
                </p>
              </div>
            </div>

            {/* Section 8: The Coimbatore Connection */}
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-12 mb-4 flex items-center gap-3">
              <Building className="w-7 h-7 text-[#00C6FF]" />
              The Coimbatore Connection
            </h2>

            <p>
              Coimbatore has developed into an important business and technology ecosystem, with companies across manufacturing, technology, retail, services, education, healthcare, and other sectors. As businesses in the region continue to adopt digital platforms, the need for reliable and comprehensive digital solutions is also increasing.
            </p>

            <p className="text-gray-300">
              SkillStar Digital Solutions aims to serve businesses that want to strengthen their online presence while also looking at the larger picture of branding, technology, marketing, automation, and customer experience.
            </p>

            <p className="text-gray-300">
              This vision supports the ambition of establishing SkillStar Digital Solutions as a <strong className="text-white">best digital solution in Coimbatore</strong>, while continuing to build capabilities that can serve businesses beyond the region.
            </p>

            <p className="text-[#00C6FF] font-medium italic">
              The goal is not limited to a location. It is to build a strong foundation in Coimbatore and use that foundation to explore wider markets.
            </p>

            {/* Section 9 & 10: The Vision of Multiple Businesses & Supporting Entrepreneurs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
              <div className="bg-[#070B1F]/90 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold font-display text-white mb-3 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-[#8B5CF6]" />
                    The Vision of Multiple Businesses
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed mb-4">
                    Rohan's entrepreneurial ambitions extend beyond SkillStar Digital Solutions. One of his larger goals is to build and participate in multiple businesses across different industries.
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    The purpose is not simply to create multiple companies. The idea is to build businesses around strong concepts, capable teams, scalable systems, and sustainable business models. Over time, these experiences come together to form a diversified business ecosystem.
                  </p>
                </div>
              </div>

              <div className="bg-[#070B1F]/90 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold font-display text-white mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#D946EF]" />
                    Supporting Entrepreneurs & New Ideas
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed mb-4">
                    Building businesses is only one part of entrepreneurship. Supporting people who are building something of their own can create an even wider impact.
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Rohan's broader vision includes opportunities to support startups, entrepreneurs, emerging ideas, and innovative business models. Creating an ecosystem where technology, marketing, investment, and guidance come together can help promising ideas move from concept to execution.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 11: Looking Toward the Future & Bigger Entrepreneurial Journey */}
            <div className="bg-gradient-to-br from-[#0F172A] via-[#070B1F] to-[#1E1B4B] border border-white/15 rounded-3xl p-8 sm:p-10 my-12 shadow-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4 flex items-center gap-3">
                <Rocket className="w-7 h-7 text-[#10B981]" />
                Looking Toward the Future
              </h2>

              <p className="text-gray-300 mb-4 leading-relaxed">
                The future of business will increasingly be shaped by the combination of technology and human creativity. AI will continue to evolve. Automation will become more accessible. Digital experiences will become more personalised. Customers will expect businesses to be faster, more transparent, and easier to interact with. Brands will need to differentiate themselves more clearly.
              </p>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Businesses that adapt to these changes will have greater opportunities to remain competitive. Rohan's vision is to build businesses that are prepared for this changing environment rather than simply reacting to it.
              </p>

              <p className="text-gray-300 mb-6 leading-relaxed">
                For SkillStar Digital Solutions, this means continuing to explore areas such as AI-powered solutions, automation, software platforms, digital marketing, branding, web technologies, and emerging digital opportunities.
              </p>

              <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10">
                <h4 className="text-base font-bold text-white mb-2">From One Company to a Bigger Entrepreneurial Journey</h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  SkillStar Digital Solutions represents an important part of Rohan's entrepreneurial journey, but it is not intended to be the final destination. The broader ambition is to build, invest, experiment, learn, and create across different opportunities. The objective is to create an ecosystem where businesses are not built only for short-term success, but with the ability to adapt, scale, and create lasting value.
                </p>
              </div>
            </div>

            {/* Section 12: The Philosophy Behind the Journey */}
            <div className="bg-[#070B1F]/90 border border-white/10 rounded-3xl p-8 sm:p-10 shadow-xl my-10">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4 flex items-center gap-3">
                <Compass className="w-7 h-7 text-[#D946EF]" />
                The Philosophy Behind the Journey
              </h2>

              <p className="text-gray-300 mb-4 leading-relaxed">
                Entrepreneurship is rarely a straight path. Markets change. Technology changes. Customer expectations change. Business models evolve. A successful entrepreneur needs the ability to learn from these changes and adapt accordingly.
              </p>

              <p className="text-gray-300 mb-6 leading-relaxed">
                For Rohan, the entrepreneurial journey is built around continuous learning, experimentation, problem-solving, and execution.
              </p>

              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#D946EF]/10 via-[#8B5CF6]/15 to-[#00C6FF]/10 border border-[#D946EF]/30 text-center my-4">
                <p className="text-xs uppercase tracking-widest text-[#D946EF] font-bold mb-2">Guiding Tenet</p>
                <blockquote className="text-lg sm:text-xl font-bold font-display text-white tracking-wide">
                  "The goal is not to have every answer from the beginning. It is to remain open to new ideas, recognise opportunities, learn from challenges, and continue building."
                </blockquote>
              </div>
            </div>

            {/* Section 13: Core Pillars Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 my-10">
              {corePillars.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
                  <span className="text-base font-bold text-white mb-1" style={{ color: item.color }}>
                    {item.title}
                  </span>
                  <span className="text-xs text-gray-300 leading-relaxed">{item.desc}</span>
                </div>
              ))}
            </div>

            {/* Section 14: Looking Ahead & Conclusion Banner */}
            <div className="border-t border-white/15 pt-10 mt-12 bg-gradient-to-r from-[#D946EF]/10 via-[#8B5CF6]/15 to-[#00C6FF]/10 p-8 rounded-3xl border border-white/10">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4 bg-gradient-to-r from-[#D946EF] via-[#8B5CF6] to-[#00C6FF] bg-clip-text text-transparent">
                Looking Ahead — Building an Entrepreneurial Ecosystem
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                R. Rohan's journey as Co-Founder, Director & Investor of SkillStar Digital Solutions represents more than the development of a digital solutions company. It represents a broader ambition to combine technology, branding, marketing, AI, automation, investment, and entrepreneurship into a connected business vision.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                SkillStar Digital Solutions provides the foundation for that vision by understanding each customer's unique requirements and delivering solutions that are aligned with their business needs. Whether a customer is a startup, a growing business, or an established organization, the focus remains on understanding where they are today, what they need, and how the right digital solution can help them move forward.
              </p>

              <div className="border-l-4 border-[#D946EF] pl-4 py-1 space-y-1">
                <p className="text-sm font-bold text-white uppercase tracking-wider">Building Digital Businesses.</p>
                <p className="text-sm font-bold text-white uppercase tracking-wider">Strengthening Brands.</p>
                <p className="text-sm font-bold text-[#D946EF] uppercase tracking-wider">Creating Technology. Investing in Ideas.</p>
              </div>

              <p className="text-xs text-gray-400 mt-4 italic">
                "The vision is bigger than one company. It is about creating businesses, developing ideas, supporting innovation, and building an entrepreneurial ecosystem designed for the future."
              </p>
            </div>

          </div>

          {/* Author Box & CTA Card */}
          <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#170B28] via-[#0E0720] to-[#07132B] border border-white/15 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#D946EF] via-[#8B5CF6] to-[#00C6FF] p-0.5 flex items-center justify-center flex-shrink-0 shadow-lg">
                <div className="w-full h-full bg-[#020516] rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                  RR
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>R. Rohan</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#D946EF]/20 text-[#D946EF] border border-[#D946EF]/30 font-normal">
                    Co-Founder, Director & Investor
                  </span>
                </h4>
                <p className="text-xs text-[#D946EF] font-semibold">SkillStar Digital Solutions</p>
                <p className="text-xs text-gray-400 mt-1 max-w-md">
                  Directing brand upscaling, technology strategy, diversified enterprise initiatives, and startup investment portfolios.
                </p>
              </div>
            </div>

            <Link
              to="/#contact"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#D946EF] via-[#8B5CF6] to-[#00C6FF] text-white font-bold text-xs shadow-[0_0_20px_rgba(217,70,239,0.4)] hover:scale-105 transition-all whitespace-nowrap flex items-center gap-2"
            >
              Partner With Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Cross-Link to CEO Blog */}
          <div className="mt-8 p-6 rounded-3xl bg-[#0A0F24]/60 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00C6FF]/15 flex items-center justify-center text-[#00C6FF] flex-shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#00C6FF]">Also Read</span>
                <h5 className="text-sm font-bold text-white">Rahan PR: The Visionary Co-Founder and CEO Driving SkillStar</h5>
              </div>
            </div>
            <Link
              to="/blog/vision-behind-rahan-pr-skillstar"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#00C6FF] hover:text-white px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[#00C6FF]/40 transition-all whitespace-nowrap"
            >
              Read CEO Article <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RohanVisionBlog;
