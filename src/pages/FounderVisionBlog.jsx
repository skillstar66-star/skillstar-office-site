import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  Share2, 
  ArrowRight,
  TrendingUp,
  Lightbulb,
  Layers,
  Cpu,
  ShieldCheck,
  Target,
  Rocket
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import usePageMeta from '../hooks/usePageMeta';

const FounderVisionBlog = () => {
  usePageMeta({
    title: 'The Vision Behind Rahan P R and SkillStar Digital Solutions | SkillStar Blog',
    description: 'Discover the story, mission, and vision behind Rahannath P R and SkillStar Digital Solutions - empowering businesses with AI, SEO, and full-spectrum digital marketing in Coimbatore.',
    canonical: 'https://www.skillstardigitalsolutions.com/blog/vision-behind-rahan-pr-skillstar'
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

      {/* Hero / Article Header */}
      <section className="pt-36 pb-16 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-[#8B5CF6]/20 via-[#D946EF]/20 to-[#00C6FF]/15 blur-[160px] pointer-events-none rounded-full"></div>

        <div className="max-w-[1000px] mx-auto px-6 relative z-10">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-400 mb-8">
            <Link to="/" className="hover:text-[#8B5CF6] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/#blog" className="hover:text-[#8B5CF6] transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-[#D946EF] font-semibold">Founder Vision</span>
          </div>

          {/* Category Tag */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md"
          >
            <Lightbulb className="w-3.5 h-3.5 text-[#D946EF]" />
            <span className="text-xs uppercase font-bold tracking-widest text-gray-300">Leadership & Digital Growth</span>
          </motion.div>

          {/* Article Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white leading-[1.2] mb-6 tracking-tight"
          >
            The Vision Behind{' '}
            <span className="bg-gradient-to-r from-[#00C6FF] via-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">
              Rahan P R and SkillStar Digital Solutions
            </span>
          </motion.h1>

          {/* Meta Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex flex-wrap items-center gap-6 text-sm text-gray-400 pb-8 border-b border-white/10"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#8B5CF6] to-[#D946EF] flex items-center justify-center text-white font-bold text-xs shadow-md">
                RP
              </div>
              <span className="text-gray-200 font-medium">Rahannath P R</span>
              <span className="text-xs text-gray-500">(CEO & Founder)</span>
            </div>
            
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span>September 2, 2026</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-gray-500" />
              <span>6 min read</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Article Content Section */}
      <section className="pb-24 relative">
        <div className="max-w-[1000px] mx-auto px-6 relative z-10">
          
          <div className="prose prose-invert max-w-none text-gray-300 text-base sm:text-lg leading-relaxed space-y-8">
            
            {/* Intro Lead Paragraph */}
            <p className="text-xl sm:text-2xl text-gray-200 font-normal leading-relaxed border-l-4 border-[#8B5CF6] pl-6 py-2 bg-white/[0.02] rounded-r-2xl">
              All companies have come into existence under different circumstances. Some are founded based on ideas or problems to solve. As a digital business growth strategist, my approach to company development is focused on the potential for technology and creativity to work together.
            </p>

            <p>
              As CEO of <strong className="text-white">SkillStar Digital Solutions</strong>, I am particularly interested in developing digital solutions that can serve specific business needs rather than solutions that only exist because a company feels it needs to check a box.
            </p>

            {/* Section 1: Knowing Business Needs in Real Life */}
            <div className="bg-[#070B1F]/80 border border-white/10 rounded-3xl p-8 sm:p-10 shadow-xl my-10">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4 flex items-center gap-3">
                <Target className="w-7 h-7 text-[#00C6FF]" />
                Knowing Business Needs in Real Life
              </h2>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                Modern-day businesses are highly dependent on the opportunities digital solutions create. With websites, search engines, social networks, automation, artificial intelligence, and online marketing, companies have more opportunities than ever before to improve their performance.
              </p>

              <p className="text-gray-300 mb-6 leading-relaxed">
                However, the challenge in itself is knowing how to effectively leverage these opportunities. Companies have different business goals, and my experience has shown me that a unique approach is required for every client.
              </p>

              <div className="p-5 rounded-2xl bg-gradient-to-r from-[#0F172A] to-[#120D2E] border border-white/10 text-sm text-gray-200">
                <strong className="text-[#00C6FF]">Core Principle:</strong> In my opinion, understanding clients' needs and challenges in order to develop the best possible strategy is the key to digital success. It is crucial to always consider their particular business needs when building effective digital strategies.
              </div>
            </div>

            {/* Section 2: Unifying Various Digital Business Solutions */}
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-12 mb-4 flex items-center gap-3">
              <Layers className="w-7 h-7 text-[#8B5CF6]" />
              Unifying Various Digital Business Solutions
            </h2>
            
            <p>
              My area of expertise is comprised of different aspects of digital business development and technology, including <Link to="/seo" className="text-[#00C6FF] hover:underline font-semibold">SEO Optimization</Link>, Local SEO Services, <Link to="/web-development" className="text-[#00C6FF] hover:underline font-semibold">Web Development</Link>, <Link to="/branding" className="text-[#8B5CF6] hover:underline font-semibold">Branding and Marketing</Link>, <Link to="/ui-ux-design" className="text-[#D946EF] hover:underline font-semibold">UI/UX Design Services</Link>, and <Link to="/ai-automation" className="text-[#00C6FF] hover:underline font-semibold">AI Marketing</Link>.
            </p>

            <div className="p-8 rounded-3xl bg-[#080D25] border border-white/10 my-8">
              <h3 className="text-xl font-bold text-white mb-3 text-[#D946EF]">
                The Connected Ecosystem Philosophy
              </h3>
              <p className="text-gray-300 mb-4">
                I prefer looking at the bigger picture when it comes to digital business solutions. Web development, for example, has to be considered together with SEO and branding:
              </p>
              <ul className="space-y-3 text-sm text-gray-300 list-disc list-inside">
                <li>Websites have to be engineered in a way that they are intuitive and effortless to use while simultaneously boosting the search visibility of the company.</li>
                <li>In turn, increased visibility drives high-intent traffic to the website.</li>
                <li>A properly developed site with great branding and memorable user experience keeps customers coming back.</li>
              </ul>
              <p className="text-xs text-gray-400 mt-4 italic">
                This is just one of the many reasons why I feel that various elements of the digital landscape should be viewed as interconnected systems rather than isolated projects.
              </p>
            </div>

            {/* Section 3: The Practical Approach to Digital Business Strategy */}
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-12 mb-4">
              The Practical Approach to Digital Business Strategy
            </h2>

            <p>
              As a digital business growth strategist, I take a very practical approach to creating digital business growth strategies. I look at the potential of each client’s particular situation to leverage the opportunities digital solutions offer.
            </p>

            <p className="text-gray-300">
              Businesses have different needs, and some may benefit more from specific solutions such as improved SEO, websites, and branding. The starting point will always remain the same, however — <strong className="text-white font-semibold">identifying the client’s real business needs</strong>. I think that every element of a successful online presence should be viewed from the perspective of what it brings to the table.
            </p>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#1B0A33] via-[#0E1538] to-[#0A0F24] border border-white/15 my-6 text-center">
              <p className="text-lg sm:text-xl font-display font-bold text-white mb-1">
                "There are real people behind every business, and they are always the most important factor."
              </p>
              <p className="text-xs text-[#00C6FF] font-semibold tracking-wider uppercase mt-2">
                — Rahannath P R, CEO & Founder
              </p>
            </div>

            {/* Section 4: The Future of Technology and Digital Innovation */}
            <div className="bg-gradient-to-br from-[#0B1538] via-[#070B1F] to-[#0A0F24] border border-white/15 rounded-3xl p-8 sm:p-10 my-12 shadow-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4 flex items-center gap-3">
                <Rocket className="w-7 h-7 text-[#D946EF]" />
                The Future of Technology and Digital Innovation
              </h2>
              
              <p className="text-gray-300 text-base mb-4 leading-relaxed">
                There are few things I consider to be as exciting as the future of technological innovation and digital development. Modern-day companies and organizations are already seeing the incredible potential artificial intelligence and search engine technologies offer.
              </p>

              <p className="text-gray-300 text-base mb-6 leading-relaxed">
                The businesses willing to embrace this opportunity will be able to connect to a greater audience while leveraging new possibilities. From my perspective, the changing digital landscape should never be a challenge, only an opportunity. As long as people are willing to embrace change, there will be endless opportunities for growth.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00C6FF]" />
                  <span className="text-sm text-gray-200">Continuous AI & Technology Adoption</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8B5CF6]" />
                  <span className="text-sm text-gray-200">Creative Storytelling & Human Connection</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D946EF]" />
                  <span className="text-sm text-gray-200">Data-Driven Growth Execution</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E676]" />
                  <span className="text-sm text-gray-200">Long-Term Client Partnership</span>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="border-t border-white/10 pt-8 mt-12">
              <h2 className="text-2xl font-bold font-display text-white mb-4">
                Looking Ahead
              </h2>
              <p className="text-gray-300">
                My vision for the future as CEO of <Link to="/" className="text-[#00C6FF] hover:underline font-semibold">SkillStar Digital Solutions</Link> will always continue to focus on exploring new business opportunities and learning new things. I believe that the fundamental principles of great digital experiences remain the same, and I am looking forward to embracing new technologies while unifying them with creativity and digital excellence.
              </p>
            </div>

          </div>

          {/* Author Box & CTA Card */}
          <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#070B1F] via-[#1A0C35] to-[#070B1F] border border-white/15 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#3B82F6] via-[#8B5CF6] to-[#D946EF] p-0.5 flex items-center justify-center flex-shrink-0 shadow-lg">
                <div className="w-full h-full bg-[#020516] rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                  RP
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Rahannath P R</h4>
                <p className="text-xs text-[#8B5CF6] font-semibold">CEO & Founder, SkillStar Digital Solutions</p>
                <p className="text-xs text-gray-400 mt-1 max-w-md">
                  Digital Business Growth Strategist & Technology Leader based in Coimbatore.
                </p>
              </div>
            </div>

            <Link
              to="/#contact"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#D946EF] text-white font-bold text-xs shadow-[0_0_20px_rgba(217,70,239,0.4)] hover:scale-105 transition-all whitespace-nowrap flex items-center gap-2"
            >
              Partner With Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FounderVisionBlog;
