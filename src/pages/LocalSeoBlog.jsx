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
  MapPin,
  Search,
  Building2,
  ShieldCheck,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const LocalSeoBlog = () => {
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
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-[#00C6FF]/15 via-[#8B5CF6]/20 to-[#D946EF]/15 blur-[160px] pointer-events-none rounded-full"></div>

        <div className="max-w-[1000px] mx-auto px-6 relative z-10">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-400 mb-8">
            <Link to="/" className="hover:text-[#00C6FF] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/#blog" className="hover:text-[#00C6FF] transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-[#00C6FF] font-semibold">Local SEO Guide</span>
          </div>

          {/* Category Tag */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md"
          >
            <MapPin className="w-3.5 h-3.5 text-[#00C6FF]" />
            <span className="text-xs uppercase font-bold tracking-widest text-gray-300">Local SEO & Growth Strategy</span>
          </motion.div>

          {/* Article Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white leading-[1.2] mb-6 tracking-tight"
          >
            How Local SEO Can Help Businesses To Get{' '}
            <span className="bg-gradient-to-r from-[#00C6FF] via-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">
              More Customers
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
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center text-white font-bold text-xs">
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
              <span>5 min read</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Article Content Section */}
      <section className="pb-24 relative">
        <div className="max-w-[1000px] mx-auto px-6 relative z-10">
          
          <div className="prose prose-invert max-w-none text-gray-300 text-base sm:text-lg leading-relaxed space-y-8">
            
            {/* Intro Lead Paragraph */}
            <p className="text-xl sm:text-2xl text-gray-200 font-normal leading-relaxed border-l-4 border-[#00C6FF] pl-6 py-2 bg-white/[0.02] rounded-r-2xl">
              Whenever someone is looking to buy or hire a particular product or service, they usually search online to find out more information. If someone is looking to get their hair done, have a meal, see a doctor, buy jewellery, or even hire a professional expert, they would most likely search for businesses that offer these services near them or in their city.
            </p>

            <p>
              This is when <Link to="/seo" className="text-[#00C6FF] hover:underline font-semibold">Local SEO Services</Link> can help out businesses to attract more customers. Local SEO is helpful for businesses because it can improve their visibility when it comes to local searches, thus helping the right people find them when they are looking for a specific kind of business.
            </p>

            {/* Section 1: What is Local SEO? */}
            <div className="bg-[#070B1F]/80 border border-white/10 rounded-3xl p-8 sm:p-10 shadow-xl my-10">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4 flex items-center gap-3">
                <Search className="w-7 h-7 text-[#00C6FF]" />
                What Is Local SEO?
              </h2>
              
              <p className="text-gray-300 mb-6">
                Local SEO refers to the optimisation of a business’s online data so that it ranks higher in local searches. For instance, people who search for the following on Google are showing high commercial intent:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-gray-200 text-sm font-medium flex items-center gap-2">
                  <span className="text-[#00C6FF]">🔍</span> “best digital marketing agency near me”
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-gray-200 text-sm font-medium flex items-center gap-2">
                  <span className="text-[#8B5CF6]">🌐</span> <Link to="/web-development" className="text-white hover:text-[#00C6FF] underline">web design company in Coimbatore</Link>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-gray-200 text-sm font-medium flex items-center gap-2">
                  <span className="text-[#D946EF]">✂️</span> “top salon in Chennai”
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-gray-200 text-sm font-medium flex items-center gap-2">
                  <span className="text-[#00E676]">💎</span> “jewellery shop near me”
                </div>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed">
                A good <Link to="/" className="text-[#8B5CF6] hover:underline font-semibold">SEO services agency</Link> like SkillStar Digital Solutions will be able to help your business show up at the top of search results for these high-value location queries.
              </p>
            </div>

            {/* Section 2: Why Local Visibility Is Important */}
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-12 mb-4">
              Why Local Visibility Is Important
            </h2>
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0F172A] to-[#0A0F24] border border-white/10 mb-6">
              <h3 className="text-lg font-bold text-white mb-2 text-[#D946EF]">
                Having an online presence does not guarantee visibility on the web
              </h3>
              <p className="text-gray-300 text-base">
                A company can have an amazing service, great website, and excellent customers, but if it is not showing in relevant searches, it will most likely miss out on customers. Local SEO aims to close this gap.
              </p>
            </div>
            <p>
              When the right customers can see your business at the right time, there is a higher chance that they will get in touch with you, visit your website, and come to your physical location.
            </p>

            {/* Section 3: 4 Key Ways Local SEO Helps */}
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-14 mb-8">
              How Local SEO Can Help You Get More Customers
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              
              <div className="p-7 rounded-3xl bg-[#080D25] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#00C6FF]/15 text-[#00C6FF] font-bold text-base flex items-center justify-center mb-4">
                    01
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Helps customers find your business</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    One of the main reasons why local SEO is important is that it increases the visibility of your business in local searches. When you optimise your data correctly, it becomes much easier for search engines to understand what your business offers and who your potential customers are.
                  </p>
                </div>
              </div>

              <div className="p-7 rounded-3xl bg-[#080D25] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/15 text-[#8B5CF6] font-bold text-base flex items-center justify-center mb-4">
                    02
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Lets you build trust before communicating</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Customers tend to research a company before contacting or visiting it. They might look at reviews, pictures, website content, and any other information they can find online. Positive feedback and a strong online reputation help you gain credibility and encourage people to choose your business.
                  </p>
                </div>
              </div>

              <div className="p-7 rounded-3xl bg-[#080D25] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#D946EF]/15 text-[#D946EF] font-bold text-base flex items-center justify-center mb-4">
                    03
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Gets you in front of buying intent</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    If someone is searching for “SEO services near me,” chances are they are ready to hire a service provider. The same goes for someone searching for “a restaurant near me” – they are looking to make a reservation or visit immediately.
                  </p>
                </div>
              </div>

              <div className="p-7 rounded-3xl bg-[#080D25] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#00E676]/15 text-[#00E676] font-bold text-base flex items-center justify-center mb-4">
                    04
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Lets you compete against bigger brands</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Local SEO is helpful not only for big businesses, but also for small local companies. Smaller companies can outrank massive national brands in their specific region or city by maintaining hyper-relevant local optimization.
                  </p>
                </div>
              </div>

            </div>

            {/* Section 4: How SkillStar Can Help */}
            <div className="bg-gradient-to-br from-[#0B1538] via-[#070B1F] to-[#0A0F24] border border-white/15 rounded-3xl p-8 sm:p-10 my-12 shadow-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4">
                The Most Effective Local SEO Services Agency: How We Can Help
              </h2>
              <p className="text-gray-300 text-base mb-6">
                A good Local SEO Services provider will be able to not only improve the visibility of a company online, but also make sure that people can actually get in touch with it:
              </p>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00C6FF] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-200"><strong>Google Business Profile Optimization:</strong> Ensuring updated photos, correct categories, operating hours, and business details.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-200"><strong>Targeted Local Keyword Integration:</strong> Embedding geographical keywords seamlessly across your pages.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D946EF] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-200"><strong>Dedicated Location Landing Pages:</strong> Building localized pages for different branches and service zones.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E676] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-200"><strong>NAP Consistency:</strong> Synchronizing Name, Address, and Phone numbers accurately across all local web directories.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00C6FF] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-200"><strong>Local Events & FAQ Content:</strong> Boosting regional topical authority for both traditional and AI-driven search engines.</span>
                </div>
              </div>
            </div>

            {/* Section 5: Local SEO Is About Getting The Right Customers */}
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-12 mb-4">
              Local SEO Is About Getting The Right Customers Online
            </h2>
            <p>
              When it comes to SEO, ranking higher in search results is usually the main priority. When it comes to local SEO, however, ranking is only one part of optimisation since it is more about getting customers than anything else.
            </p>
            <p className="text-gray-300">
              Ultimately, the goal is not to just rank high, but rather to drive traffic that will convert. A customer who finds your business in search results will convert based on how your website looks, how informative your information is, how good your reviews are, how easy it is to contact your staff, etc. If any of these factors are low, a customer will not convert even if your business ranks high.
            </p>

            {/* Section 6: Actionable Checklist */}
            <div className="bg-[#050A1E] border border-white/10 rounded-3xl p-8 my-10">
              <h3 className="text-xl font-bold text-white mb-4 text-[#00C6FF]">
                How Businesses Can Start Improving Their Local SEO Checklist:
              </h3>
              <ul className="space-y-3 text-sm text-gray-300 list-disc list-inside">
                <li>Optimize your Google Business Profile and ensure all details are verified and updated.</li>
                <li>Ensure contact details (NAP) are 100% consistent across directories.</li>
                <li>Identify the exact geographic areas and specific services your local customers search for.</li>
                <li>Optimize website pages, metadata, and schema markup for these services and regions.</li>
                <li>Proactively collect and respond to authentic customer reviews.</li>
                <li>Ensure fast loading speeds and mobile usability on all devices.</li>
              </ul>
            </div>

            {/* Conclusion */}
            <div className="border-t border-white/10 pt-8 mt-12">
              <h2 className="text-2xl font-bold font-display text-white mb-4">
                Conclusion
              </h2>
              <p className="text-gray-300">
                Customers are already searching online for businesses like yours. The task of local SEO is to make sure these people can find you easily and, eventually, become your customers. Thus, local SEO is great for businesses that want to ensure their visibility among prospective clients in their area.
              </p>
            </div>

          </div>

          {/* Author Box & CTA Card */}
          <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#070B1F] via-[#0E1538] to-[#070B1F] border border-white/15 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#3B82F6] via-[#8B5CF6] to-[#D946EF] p-0.5 flex items-center justify-center flex-shrink-0 shadow-lg">
                <div className="w-full h-full bg-[#020516] rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                  RP
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Rahannath P R</h4>
                <p className="text-xs text-[#00C6FF] font-semibold">CEO & Founder, SkillStar Digital Solutions</p>
                <p className="text-xs text-gray-400 mt-1 max-w-md">
                  Helping businesses achieve sustainable digital growth across Coimbatore & Tamil Nadu.
                </p>
              </div>
            </div>

            <Link
              to="/seo"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#00C6FF] via-[#8B5CF6] to-[#D946EF] text-white font-bold text-xs shadow-[0_0_20px_rgba(217,70,239,0.4)] hover:scale-105 transition-all whitespace-nowrap flex items-center gap-2"
            >
              Explore Local SEO Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LocalSeoBlog;
