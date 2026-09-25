import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  Search, 
  MapPin, 
  Bot, 
  Sparkles, 
  Target, 
  Share2, 
  Cpu, 
  FileText, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  Users, 
  Rocket, 
  Plus, 
  Minus, 
  Check, 
  Layers, 
  Megaphone,
  X,
  Send,
  PhoneCall,
  Phone,
  Mail,
  Compass,
  LineChart,
  Eye,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import PageNavbar from '../components/PageNavbar';
import usePageMeta from '../hooks/usePageMeta';

// 8 Core Service Offerings
const servicesList = [
  {
    title: 'Search Engine Optimization (SEO)',
    desc: 'Comprehensive on-page, off-page, and technical SEO designed to improve search rankings, increase qualified organic traffic, and capture high-intent search queries.',
    icon: Search,
    color: 'from-[#00C6FF] to-[#3B82F6]',
    gradientBg: 'from-[#051842]/70 to-[#020516]/90',
    tags: ['Technical SEO', 'Keyword Strategy', 'Quality Backlinks'],
    link: '/seo'
  },
  {
    title: 'Local SEO Services',
    desc: 'Dominant Google Business Profile (GBP) management, local citation building, and geo-targeted optimization to rank in Coimbatore map packs and local searches.',
    icon: MapPin,
    color: 'from-[#3B82F6] to-[#8B5CF6]',
    gradientBg: 'from-[#1E0F45]/70 to-[#020516]/90',
    tags: ['Google Map Pack', 'Local Citations', 'Geo-Targeting'],
    link: '/seo'
  },
  {
    title: 'Answer Engine Optimization (AEO)',
    desc: 'Optimizing content for conversational AI engines like ChatGPT, Google Gemini, and Perplexity so your business is cited as the definitive direct answer.',
    icon: Bot,
    color: 'from-[#8B5CF6] to-[#D946EF]',
    gradientBg: 'from-[#2D0B4E]/70 to-[#020516]/90',
    tags: ['Direct AI Answers', 'Conversational Search', 'Schema Architecture'],
    link: '/ai-automation'
  },
  {
    title: 'Generative Engine Optimization (GEO)',
    desc: 'Next-generation semantic indexing and entity optimization to ensure prominent visibility within AI Overviews, generative search snapshots, and LLM responses.',
    icon: Sparkles,
    color: 'from-[#D946EF] to-[#EC4899]',
    gradientBg: 'from-[#3B0A42]/70 to-[#020516]/90',
    tags: ['AI Overviews', 'Entity Optimization', 'Topical Authority'],
    link: '/ai-automation'
  },
  {
    title: 'Performance Marketing (Paid Ads)',
    desc: 'High-ROI Google Ads, Meta Ads (Instagram/Facebook), and LinkedIn advertising campaigns engineered with precision targeting and continuous conversion rate optimization.',
    icon: Target,
    color: 'from-[#00C6FF] to-[#8B5CF6]',
    gradientBg: 'from-[#0A1A45]/70 to-[#020516]/90',
    tags: ['Google Ads', 'Meta Ad Funnels', 'ROAS Optimization'],
    link: '/performance-marketing'
  },
  {
    title: 'Social Media Marketing',
    desc: 'Strategic brand storytelling, reel creation, community management, and multi-channel audience engagement across Instagram, LinkedIn, and YouTube.',
    icon: Share2,
    color: 'from-[#8B5CF6] to-[#00C6FF]',
    gradientBg: 'from-[#17104A]/70 to-[#020516]/90',
    tags: ['Brand Storytelling', 'Reels & Video Content', 'Community Building'],
    link: '/branding'
  },
  {
    title: 'AI Marketing & Automation',
    desc: 'Automated CRM lead nurturing, intelligent WhatsApp chatbots, dynamic email workflows, and AI customer journey orchestration for maximum sales efficiency.',
    icon: Cpu,
    color: 'from-[#3B82F6] to-[#00C6FF]',
    gradientBg: 'from-[#08173E]/70 to-[#020516]/90',
    tags: ['WhatsApp AI Bots', 'Automated Funnels', 'Lead Scoring'],
    link: '/ai-automation'
  },
  {
    title: 'Content Marketing & Lead Generation',
    desc: 'High-value technical blogs, case studies, downloadable assets, and conversion-focused copywriting that establish market authority and generate sales-qualified leads.',
    icon: FileText,
    color: 'from-[#D946EF] to-[#8B5CF6]',
    gradientBg: 'from-[#280942]/70 to-[#020516]/90',
    tags: ['Authority Copywriting', 'Lead Magnets', 'Conversion Funnels'],
    link: '/seo'
  }
];

// Why SkillStar Differentiators
const whyChooseItems = [
  {
    title: 'Integrated SEO, AEO & GEO Strategy',
    desc: 'We optimize your brand not just for standard Google search results, but also for AI Overviews, ChatGPT, Gemini, and conversational answer engines.'
  },
  {
    title: 'Deep Coimbatore Market Understanding',
    desc: 'Hyper-localized marketing insights targeting industrial hubs, tech parks, retail districts, and educational sectors across Coimbatore.'
  },
  {
    title: 'Transparent, Data-Driven ROI Tracking',
    desc: 'Real-time dashboards, clear attribution metrics, and transparent reporting with zero vanity metrics or hidden numbers.'
  },
  {
    title: 'Full-Funnel Growth Engineering',
    desc: 'From initial brand discovery through paid ads and organic search to automated lead qualification and conversion optimization.'
  },
  {
    title: 'Modern AI-Powered Automation Workflows',
    desc: 'Smart marketing automation tools, instant response chatbots, and predictive audience segmentation that reduce customer acquisition costs.'
  },
  {
    title: 'Dedicated Strategic Growth Consultants',
    desc: 'Direct access to experienced campaign strategists, technical SEO specialists, and creative copywriters focused on your growth.'
  }
];

// Business Types Target Grid
const businessTypes = [
  {
    title: 'Startups & Emerging Brands',
    desc: 'Rapid market entry strategies, aggressive customer acquisition, performance marketing funnels, and agile organic branding.',
    features: ['Rapid Brand Launch', 'High-Intent Paid Acquisition', 'Agile Social Marketing']
  },
  {
    title: 'Local Coimbatore Businesses',
    desc: 'Dominant local presence in Google Maps, local directories, regional review platforms, and geo-targeted social promotions.',
    features: ['Google 3-Pack Optimization', 'Local Review Automation', 'Area-Targeted Ad Campaigns']
  },
  {
    title: 'E-Commerce Brands & D2C Stores',
    desc: 'High-converting product catalog ads, shopping feed optimization, abandoned cart retargeting, and scalable ROAS strategies.',
    features: ['Google Shopping Campaigns', 'Meta Dynamic Product Ads', 'Retention & Email Automation']
  },
  {
    title: 'B2B & Industrial Manufacturers',
    desc: 'Account-based marketing, LinkedIn lead gen, technical authority content, and B2B search optimization for industrial enterprises.',
    features: ['LinkedIn InMail & Lead Forms', 'High-Ticket B2B SEO', 'Authority Whitepapers & Case Studies']
  }
];

// 6-Step Digital Marketing Process
const marketingSteps = [
  {
    step: '01',
    title: 'Comprehensive Market & Digital Audit',
    desc: 'We evaluate your current search rankings, competitor landscape, website health, and advertising performance to establish clear growth baselines.'
  },
  {
    step: '02',
    title: 'Target Audience & Intent Mapping',
    desc: 'We analyze customer search behaviors, pain points, local buying patterns, and conversational search queries across AI and search platforms.'
  },
  {
    step: '03',
    title: 'Custom Multi-Channel Growth Strategy',
    desc: 'We craft a tailored roadmap combining SEO, Local SEO, AEO/GEO entity building, performance ad campaigns, and social media content.'
  },
  {
    step: '04',
    title: 'High-Impact Execution & Creative Launch',
    desc: 'Our specialists deploy technical optimizations, publish authoritative content, launch hyper-targeted ad funnels, and activate tracking pixels.'
  },
  {
    step: '05',
    title: 'Continuous A/B Testing & Optimization',
    desc: 'We monitor keyword movements, optimize ad spend, refine creative assets, test landing page variations, and fine-tune conversion funnels.'
  },
  {
    step: '06',
    title: 'Transparent Reporting & Scaled Growth',
    desc: 'Receive transparent monthly performance reports, conversion attribution insights, and strategic recommendations to scale revenues.'
  }
];

// 10 Comprehensive FAQs for Users, Search Engines, & AEO
const faqList = [
  {
    question: 'Why is SkillStar considered the best digital marketing company in Coimbatore?',
    answer: 'SkillStar Digital Solutions combines traditional organic SEO and performance advertising with modern AI search optimization (AEO and GEO). We build holistic growth funnels tailored to Coimbatore businesses, providing transparent reporting, data-driven campaign management, and full-funnel lead generation with measurable return on investment.'
  },
  {
    question: 'What digital marketing services do you provide in Coimbatore?',
    answer: 'Our core services include Search Engine Optimization (SEO), Local SEO for Coimbatore map pack rankings, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), Performance Marketing (Google Ads & Meta Ads), Social Media Marketing, AI Marketing Automation, and Conversion-focused Content Strategy.'
  },
  {
    question: 'What is the difference between SEO, AEO, and GEO?',
    answer: 'Traditional SEO optimizes websites for standard search engine rankings on Google and Bing. Answer Engine Optimization (AEO) focuses on structuring content so conversational AI tools (like ChatGPT and Google Gemini) extract your business as the definitive direct answer. Generative Engine Optimization (GEO) focuses on optimizing your brand entity and topical authority so you are cited in AI-generated search snapshots and AI Overviews.'
  },
  {
    question: 'How does Local SEO help businesses in Coimbatore?',
    answer: 'Local SEO ensures that when potential customers in areas like RS Puram, Gandhipuram, Peelamedu, or Saravanampatti search for your services "near me" or "in Coimbatore", your business appears prominently in the Google Map Pack and top local results. This drives direct phone calls, store visits, and high-intent website inquiries.'
  },
  {
    question: 'How quickly can I expect results from digital marketing campaigns?',
    answer: 'Paid performance marketing campaigns (Google Ads and Meta Ads) can begin driving targeted traffic and qualified leads within days of launch. Organic search strategies, including SEO, AEO, and GEO, typically show substantial compounding gains in visibility, keyword rankings, and organic inquiries within 3 to 6 months.'
  },
  {
    question: 'Do you manage paid ad campaigns on Google and Meta (Facebook/Instagram)?',
    answer: 'Yes. We engineer end-to-end performance marketing campaigns including keyword research, audience segmentation, high-converting ad copy, visual creative design, conversion tracking setup, and continuous bid and ROAS optimization.'
  },
  {
    question: 'How does AI marketing and automation benefit my business?',
    answer: 'AI marketing automates repetitive workflows like lead qualification, instant WhatsApp customer responses, predictive follow-up emails, and audience segmentation. This ensures no lead is missed and significantly reduces customer acquisition costs while boosting conversion rates.'
  },
  {
    question: 'Can you customize digital marketing packages for small businesses and startups in Coimbatore?',
    answer: 'Yes, we create custom digital marketing strategies tailored to your industry, budget, and business objectives. Whether you are a local service provider, a fast-growing startup, an e-commerce brand, or an established B2B manufacturer, we design packages focused on measurable growth.'
  },
  {
    question: 'How do you measure and report marketing campaign performance?',
    answer: 'We provide transparent, real-time reporting dashboards tracking key business indicators such as organic traffic growth, keyword rankings, cost per lead (CPL), return on ad spend (ROAS), click-through rates (CTR), and conversion volume.'
  },
  {
    question: 'How can I get started with SkillStar for digital marketing?',
    answer: 'You can request a free marketing audit and growth proposal by clicking our "Get Free Proposal" button, calling us directly at +91 78457 41369, or sending an email to info@skillstardigitalsolutions.com. Our team will analyze your digital footprint and present a tailored strategy.'
  }
];

export default function DigitalMarketingCompanyCoimbatore() {
  const [openFaq, setOpenFaq] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Digital Marketing & SEO',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Set Page Meta and JSON-LD Structured Data
  usePageMeta({
    title: 'Best Digital Marketing Company in Coimbatore | SkillStar',
    description: 'SkillStar is a digital marketing company in Coimbatore offering SEO, Local SEO, AEO, GEO, performance marketing, social media marketing and AI marketing.',
    canonical: 'https://www.skillstardigitalsolutions.com/digital-marketing-company-coimbatore',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "@id": "https://www.skillstardigitalsolutions.com/#localbusiness",
          "name": "SkillStar Digital Solutions",
          "url": "https://www.skillstardigitalsolutions.com/digital-marketing-company-coimbatore",
          "logo": "https://www.skillstardigitalsolutions.com/logo.png",
          "image": "https://www.skillstardigitalsolutions.com/og-image.jpg",
          "description": "Leading digital marketing company in Coimbatore offering SEO, Local SEO, AEO, GEO, performance marketing, paid ads, and AI automation.",
          "telephone": "+91 78457 41369",
          "email": "info@skillstardigitalsolutions.com",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Coimbatore",
            "addressLocality": "Coimbatore",
            "addressRegion": "Tamil Nadu",
            "postalCode": "641001",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "11.0168",
            "longitude": "76.9558"
          },
          "areaServed": [
            {
              "@type": "City",
              "name": "Coimbatore"
            },
            {
              "@type": "AdministrativeArea",
              "name": "Tamil Nadu"
            },
            {
              "@type": "Country",
              "name": "India"
            }
          ],
          "sameAs": [
            "https://www.linkedin.com/company/skillstar-digital-solutions",
            "https://www.instagram.com/skillstardigitalsolutions"
          ]
        },
        {
          "@type": "Service",
          "@id": "https://www.skillstardigitalsolutions.com/digital-marketing-company-coimbatore#service",
          "name": "Digital Marketing Services in Coimbatore",
          "provider": {
            "@type": "LocalBusiness",
            "name": "SkillStar Digital Solutions"
          },
          "areaServed": {
            "@type": "City",
            "name": "Coimbatore"
          },
          "serviceType": "Digital Marketing, SEO, Local SEO, AEO, GEO, Performance Marketing",
          "description": "Comprehensive digital marketing solutions in Coimbatore including organic search engine optimization, local Google Map Pack rankings, AI search optimization (AEO/GEO), Google & Meta ads, and marketing automation."
        },
        {
          "@type": "FAQPage",
          "@id": "https://www.skillstardigitalsolutions.com/digital-marketing-company-coimbatore#faq",
          "mainEntity": faqList.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }
      ]
    }
  });

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsModalOpen(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Digital Marketing & SEO',
        message: ''
      });
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#020516] text-white selection:bg-[#00C6FF] selection:text-black font-sans relative overflow-x-hidden">
      
      {/* Background Decorative Ambient Lighting */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[550px] h-[550px] bg-[#00C6FF]/10 rounded-full blur-[140px]" />
        <div className="absolute top-[25%] right-[-10%] w-[600px] h-[600px] bg-[#8B5CF6]/10 rounded-full blur-[160px]" />
        <div className="absolute top-[60%] left-[10%] w-[500px] h-[500px] bg-[#3B82F6]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-[#D946EF]/10 rounded-full blur-[180px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
      </div>

      {/* GLOBAL LANDING NAVBAR */}
      <PageNavbar onOpenModal={() => setIsModalOpen(true)} />

      {/* HERO SECTION */}
      <section 
        className="relative z-10 pt-32 pb-20 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-32 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'radial-gradient(ellipse at center, rgba(2, 5, 22, 0.25) 0%, rgba(2, 5, 22, 0.75) 100%), url("/digital-marketing-bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Subtle Ambient Vignettes & Floor Fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020516]/70 via-transparent to-[#020516] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-[#00C6FF]/15 via-[#3B82F6]/20 to-[#8B5CF6]/15 blur-[180px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Heading & Value Proposition */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col items-start"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00C6FF]/10 border border-[#00C6FF]/40 text-[#00C6FF] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(0,198,255,0.2)]">
                <Sparkles className="w-3.5 h-3.5 text-[#00C6FF] animate-pulse" />
                <span>ROI-DRIVEN GROWTH &bull; SEO &bull; AEO &bull; GEO &bull; PAID ADS</span>
              </div>

              {/* SINGLE H1 FOR SEO */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-black tracking-tight text-white leading-[1.12] mb-6 drop-shadow-md">
                Best Digital Marketing <br className="hidden sm:inline" />
                Company in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] via-[#38BDF8] to-[#E879F9]">Coimbatore</span>
              </h1>

              {/* Hero Paragraph with Primary & Secondary Keywords */}
              <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed mb-8 max-w-2xl font-normal drop-shadow">
                Scale your revenue, dominate search engine rankings, and generate high-intent inquiries with <strong className="text-white font-semibold">SkillStar Digital Solutions</strong>. As the leading digital marketing company in Coimbatore, we combine <strong className="text-white font-semibold">Search Engine Optimization (SEO)</strong>, <strong className="text-white font-semibold">Local SEO</strong>, <strong className="text-white font-semibold">Answer Engine Optimization (AEO)</strong>, <strong className="text-white font-semibold">Generative Engine Optimization (GEO)</strong>, and <strong className="text-white font-semibold">Performance Marketing</strong> to build unstoppable online visibility for growing businesses.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group relative inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#00C6FF] via-[#3B82F6] to-[#A855F7] hover:opacity-95 transition-all shadow-[0_0_30px_rgba(0,198,255,0.5)] hover:shadow-[0_0_40px_rgba(0,198,255,0.7)] hover:scale-[1.02] cursor-pointer"
                >
                  <span className="w-7 h-7 rounded-full bg-white text-[#0284C7] flex items-center justify-center text-xs font-black shadow-inner group-hover:rotate-45 transition-transform">
                    ↗
                  </span>
                  <span>Get Free Marketing Proposal</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#services-overview"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm sm:text-base font-semibold text-gray-200 bg-[#071333]/80 hover:bg-[#0c1f52] border border-white/20 hover:border-[#00C6FF]/60 transition-all backdrop-blur-md"
                >
                  <span>Explore Services</span>
                  <span className="text-[#00C6FF] text-sm">↗</span>
                </a>
              </div>

              {/* Key Trust Highlights (Matching Image Bottom Bar) */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-6 border-t border-white/15 w-full text-xs sm:text-sm text-gray-300">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#00C6FF]/15 border border-[#00C6FF]/30 flex items-center justify-center text-[#00C6FF]">
                    <Target className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-white">Full-Funnel ROI</span>
                </div>

                <span className="hidden sm:inline text-white/20">|</span>

                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 flex items-center justify-center text-[#8B5CF6]">
                    <Bot className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-white">AI Search Ready</span>
                </div>

                <span className="hidden sm:inline text-white/20">|</span>

                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#D946EF]/15 border border-[#D946EF]/30 flex items-center justify-center text-[#D946EF]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-white">Coimbatore Local</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Hero Visual 3D Performance Card Mockup */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              {/* Floating Orbit Icons */}
              {/* Top-Left: SEO Search Bubble */}
              <div className="absolute -top-6 -left-6 z-20 w-12 h-12 rounded-2xl bg-[#08153A]/90 border border-[#00C6FF]/40 backdrop-blur-xl flex flex-col items-center justify-center text-[#00C6FF] shadow-[0_0_20px_rgba(0,198,255,0.3)] animate-bounce duration-1000">
                <Search className="w-5 h-5" />
                <span className="text-[8px] font-bold text-gray-300">SEO</span>
              </div>

              {/* Mid-Left: Bar Chart Bubble */}
              <div className="absolute top-1/2 -left-8 -translate-y-1/2 z-20 w-10 h-10 rounded-xl bg-[#09153D]/90 border border-[#3B82F6]/40 backdrop-blur-xl flex items-center justify-center text-[#3B82F6] shadow-lg">
                <BarChart3 className="w-5 h-5" />
              </div>

              {/* Top-Right: Google G Bubble */}
              <div className="absolute -top-4 -right-4 z-20 w-12 h-12 rounded-2xl bg-[#08153A]/90 border border-white/20 backdrop-blur-xl flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                <span className="font-bold text-base bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent">
                  G
                </span>
              </div>

              {/* Mid-Right: Upward Trend Bubble */}
              <div className="absolute top-2/3 -right-6 z-20 w-10 h-10 rounded-xl bg-[#09153D]/90 border border-[#8B5CF6]/40 backdrop-blur-xl flex items-center justify-center text-[#8B5CF6] shadow-lg">
                <TrendingUp className="w-5 h-5" />
              </div>

              {/* Central Glowing 3D Glass Card Container */}
              <div className="relative rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-[#0B1A48]/95 via-[#060E2C]/95 to-[#03071E]/95 border-2 border-[#00C6FF]/30 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,198,255,0.25)] overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#00C6FF]/20 blur-3xl rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#D946EF]/20 blur-3xl rounded-full pointer-events-none" />

                {/* Card Top bar */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#EF4444]" />
                    <span className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                    <span className="w-3 h-3 rounded-full bg-[#10B981]" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#00C6FF] bg-[#00C6FF]/10 px-3 py-1 rounded-full border border-[#00C6FF]/30 tracking-wide">
                    Live Marketing Hub
                  </span>
                </div>

                {/* 4 Metric Items */}
                <div className="space-y-3.5">
                  {/* 1. Organic & AI Reach */}
                  <div className="p-3.5 rounded-2xl bg-[#0A163D]/80 border border-white/10 flex items-center justify-between hover:border-[#00C6FF]/40 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#00C6FF] flex items-center justify-center text-black font-bold shrink-0 shadow-md">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[11px] text-gray-300 font-medium">Organic & AI Traffic Growth</div>
                        <div className="text-base font-extrabold text-white">+340% Inquiries</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-[#00C6FF] bg-[#00C6FF]/10 px-2.5 py-1 rounded-lg border border-[#00C6FF]/30 flex items-center gap-1">
                      Surging ↗
                    </span>
                  </div>

                  {/* 2. Local Map Pack Ranking */}
                  <div className="p-3.5 rounded-2xl bg-[#0A163D]/80 border border-white/10 flex items-center justify-between hover:border-[#3B82F6]/40 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#3B82F6] flex items-center justify-center text-white font-bold shrink-0 shadow-md">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[11px] text-gray-300 font-medium">Coimbatore Map Pack</div>
                        <div className="text-base font-extrabold text-white">Top #3 Positions</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-[#38BDF8] bg-[#0284C7]/20 px-2.5 py-1 rounded-lg border border-[#38BDF8]/30">
                      Verified
                    </span>
                  </div>

                  {/* 3. High ROAS Performance */}
                  <div className="p-3.5 rounded-2xl bg-[#0A163D]/80 border border-white/10 flex items-center justify-between hover:border-[#A855F7]/40 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#A855F7] flex items-center justify-center text-white font-bold shrink-0 shadow-md">
                        <Target className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[11px] text-gray-300 font-medium">Paid Ad ROAS</div>
                        <div className="text-base font-extrabold text-white">4.8x Return</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-purple-300 bg-purple-500/20 px-2.5 py-1 rounded-lg border border-purple-500/30">
                      Optimized
                    </span>
                  </div>

                  {/* 4. AI Search Citation */}
                  <div className="p-3.5 rounded-2xl bg-[#0A163D]/80 border border-white/10 flex items-center justify-between hover:border-[#EC4899]/40 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#EC4899] flex items-center justify-center text-white font-bold shrink-0 shadow-md">
                        <Bot className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[11px] text-gray-300 font-medium">AEO / GEO Citations</div>
                        <div className="text-base font-extrabold text-white">ChatGPT & Gemini</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-pink-300 bg-pink-500/20 px-2.5 py-1 rounded-lg border border-pink-500/30">
                      Indexed
                    </span>
                  </div>
                </div>

                {/* Card Bottom CTA Button */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full mt-5 py-3.5 px-4 rounded-2xl bg-gradient-to-r from-[#0284C7] via-[#2563EB] to-[#7C3AED] hover:opacity-95 text-xs sm:text-sm font-extrabold text-white flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                >
                  <span>Request Free Coimbatore Marketing Audit</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* INTRO SECTION: Best Digital Marketing Services for Business Growth */}
      <section className="relative z-10 py-16 sm:py-24 border-t border-white/10 bg-[#04081E]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Best Digital Marketing Services for Business Growth
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#00C6FF] to-[#D946EF] mx-auto rounded-full mb-6" />
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              In an evolving digital economy, standard marketing is no longer sufficient. Businesses require an omnichannel growth system that seamlessly integrates high-intent search visibility, hyper-targeted advertising, AI engine recommendations, and automated conversion pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#00C6FF]/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#00C6FF]/10 border border-[#00C6FF]/30 flex items-center justify-center text-[#00C6FF] mb-5">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Organic Search Authority</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Build sustainable, long-term search prominence on Google with semantic content architecture, technical audits, and authoritative link acquisition.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#8B5CF6]/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 flex items-center justify-center text-[#8B5CF6] mb-5">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">AI-Driven Engine Citation</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Future-proof your brand discovery by optimizing for AI answer engines (ChatGPT, Google Gemini, Perplexity) and generative search snapshots.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#D946EF]/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#D946EF]/10 border border-[#D946EF]/30 flex items-center justify-center text-[#D946EF] mb-5">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">High-ROAS Paid Acquisition</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Capture instant commercial demand through precision-targeted Google Ads, Meta Ads, retargeting funnels, and optimized landing pages.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 8 CORE SERVICES GRID (H2) */}
      <section id="services-overview" className="relative z-10 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00C6FF]/10 border border-[#00C6FF]/30 text-[#00C6FF] text-xs font-semibold mb-3">
              <span>Full-Stack Digital Growth</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Professional Digital Marketing Services in Coimbatore
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#00C6FF] to-[#D946EF] mx-auto rounded-full mb-6" />
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Explore our comprehensive suite of digital marketing solutions engineered to attract qualified prospects, boost conversions, and elevate brand authority across all channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesList.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl p-6 bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-lg"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} p-[1px] mb-5`}>
                      <div className="w-full h-full bg-[#020516] rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-[#00C6FF] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                      {service.desc}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {service.tags.map((tag, tagIdx) => (
                        <span 
                          key={tagIdx}
                          className="text-[10px] font-mono text-gray-300 bg-white/5 px-2 py-0.5 rounded border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={service.link}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00C6FF] hover:text-white transition-colors"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* DEEP DIVE: SEO & LOCAL SEO (H2s) */}
      <section className="relative z-10 py-16 sm:py-24 border-t border-white/10 bg-[#04081E]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
            
            {/* SEO Section Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00C6FF]/10 border border-[#00C6FF]/30 text-[#00C6FF] text-xs font-semibold mb-4">
                <Search className="w-3.5 h-3.5" />
                <span>Search Engine Optimization</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4 leading-snug">
                Search Engine Optimization (SEO) for Organic Growth
              </h2>
              
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                Search Engine Optimization is the foundation of long-term sustainable online visibility. At SkillStar, our SEO methodology encompasses in-depth keyword research, technical architecture refinement, on-page optimization, content optimization, and high-authority link acquisition.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00C6FF] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-gray-300">
                    <strong className="text-white">Technical SEO Audits:</strong> Speed optimization, Core Web Vitals, XML sitemaps, indexation, and crawl budget enhancements.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00C6FF] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-gray-300">
                    <strong className="text-white">Commercial Keyword Targeting:</strong> Capturing high-intent search queries that drive actual sales leads rather than empty traffic.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00C6FF] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-gray-300">
                    <strong className="text-white">Semantic Content & Authority:</strong> Building topic clusters and comprehensive pillar pages that position you as an industry leader.
                  </p>
                </div>
              </div>

              <Link
                to="/seo"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-full border border-white/10 hover:border-white/20 transition-all"
              >
                <span>Learn More About SEO Services</span>
                <ArrowRight className="w-4 h-4 text-[#00C6FF]" />
              </Link>
            </div>

            {/* Local SEO Section Content */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0B1538] via-[#060D26] to-[#020516] border border-white/15 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#3B82F6]/20 blur-3xl rounded-full pointer-events-none" />

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/30 text-[#3B82F6] text-xs font-semibold mb-4">
                <MapPin className="w-3.5 h-3.5" />
                <span>Local Search Optimization</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4 leading-snug">
                Local SEO Services in Coimbatore
              </h2>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                When customers search for services in Coimbatore or &quot;near me&quot;, appearing in the top 3 Google Map Pack results is crucial. We optimize your Google Business Profile (GBP), manage local NAP consistency, generate regional reviews, and target Coimbatore&apos;s key commercial zones.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs">
                  <div className="font-semibold text-white mb-1">Google Map Pack</div>
                  <div className="text-gray-400 text-[11px]">Rank in top 3 local listings</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs">
                  <div className="font-semibold text-white mb-1">Local Citations</div>
                  <div className="text-gray-400 text-[11px]">Consistent NAP across directories</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs">
                  <div className="font-semibold text-white mb-1">Coimbatore Area Targeting</div>
                  <div className="text-gray-400 text-[11px]">RS Puram, Peelamedu, Gandhipuram</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs">
                  <div className="font-semibold text-white mb-1">Review Acceleration</div>
                  <div className="text-gray-400 text-[11px]">Automated 5-star customer feedback</div>
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-3 px-4 rounded-xl bg-[#3B82F6] hover:bg-[#2563EB] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg"
              >
                <span>Boost Your Coimbatore Local Ranking</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* DEEP DIVE: AEO & GEO - AI-POWERED SEARCH VISIBILITY (H2s) */}
      <section className="relative z-10 py-16 sm:py-24 border-t border-white/10 bg-[#020516]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#8B5CF6] text-xs font-semibold mb-3">
              <Bot className="w-3.5 h-3.5" />
              <span>Next-Generation AI Discovery</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              AEO & GEO: The Future of Search Visibility
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] mx-auto rounded-full mb-6" />
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Modern buyers search through conversational prompts on ChatGPT, Perplexity, and Google AI Overviews. SkillStar is at the forefront of preparing brands for AI-mediated discovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* AEO Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-[#8B5CF6]/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 flex items-center justify-center text-[#8B5CF6] mb-6">
                  <Bot className="w-6 h-6" />
                </div>
                
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Answer Engine Optimization (AEO) for AI Search
                </h2>
                
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                  AEO focuses on structuring information into concise, factual, and direct answers that conversational AI engines like ChatGPT, Google Gemini, and Perplexity can easily parse and present to users.
                </p>

                <div className="space-y-2.5 mb-6 text-xs text-gray-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#8B5CF6]" />
                    <span>Conversational Question-Answer Schema Architecture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#8B5CF6]" />
                    <span>Direct Snippet & Voice Search Extraction Readiness</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#8B5CF6]" />
                    <span>Entity-Based Knowledge Graph Structuring</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#8B5CF6] font-medium">
                <span>Optimized for ChatGPT, Gemini & Perplexity</span>
                <Bot className="w-4 h-4" />
              </div>
            </div>

            {/* GEO Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-[#D946EF]/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#D946EF]/10 border border-[#D946EF]/30 flex items-center justify-center text-[#D946EF] mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Generative Engine Optimization (GEO) for Modern Search Visibility
                </h2>
                
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                  GEO optimizes your brand&apos;s digital footprint and topical authority across diverse web sources so generative AI search algorithms cite your brand as an authoritative source in AI Overviews.
                </p>

                <div className="space-y-2.5 mb-6 text-xs text-gray-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D946EF]" />
                    <span>Inclusion in Google AI Overviews & SGE Snapshots</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D946EF]" />
                    <span>Topical Depth & Multi-Platform Citation Mapping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D946EF]" />
                    <span>Semantic Vector Embedding Optimization</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#D946EF] font-medium">
                <span>Optimized for AI Overviews & Generative Summaries</span>
                <Sparkles className="w-4 h-4" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* DEEP DIVE: PERFORMANCE MARKETING & SOCIAL MEDIA (H2s) */}
      <section className="relative z-10 py-16 sm:py-24 border-t border-white/10 bg-[#04081E]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Performance Marketing Deep Dive */}
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-[#00C6FF]/10 border border-[#00C6FF]/30 flex items-center justify-center text-[#00C6FF] mb-5">
                <Target className="w-6 h-6" />
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Performance Marketing & Paid Advertising
              </h2>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                Generate immediate, high-intent inquiries with data-backed paid advertising. We design, manage, and optimize performance marketing campaigns across Google Search, Display, YouTube, Meta (Instagram/Facebook), and LinkedIn.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <BarChart3 className="w-4 h-4 text-[#00C6FF]" />
                  <span className="text-xs sm:text-sm text-gray-200">Google Ads & High-Intent Search Intent Campaigns</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <Users className="w-4 h-4 text-[#3B82F6]" />
                  <span className="text-xs sm:text-sm text-gray-200">Meta Video Ads, Carousel Funnels & Lead Gen Ads</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <LineChart className="w-4 h-4 text-[#8B5CF6]" />
                  <span className="text-xs sm:text-sm text-gray-200">Strict ROAS Optimization & Lower Cost Per Acquisition</span>
                </div>
              </div>

              <Link
                to="/performance-marketing"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00C6FF] hover:text-white transition-colors"
              >
                <span>View Performance Marketing Solutions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Social Media & AI Marketing Deep Dive */}
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-[#D946EF]/10 border border-[#D946EF]/30 flex items-center justify-center text-[#D946EF] mb-5">
                <Share2 className="w-6 h-6" />
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Social Media Marketing & Brand Building
              </h2>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                Build a recognizable, trusted brand identity through compelling visual storytelling, viral video reels, high-engagement LinkedIn thought leadership, and strategic community management.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <Megaphone className="w-4 h-4 text-[#D946EF]" />
                  <span className="text-xs sm:text-sm text-gray-200">Instagram & YouTube Video Content & Reels</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <Layers className="w-4 h-4 text-[#EC4899]" />
                  <span className="text-xs sm:text-sm text-gray-200">B2B LinkedIn Thought Leadership & Brand Positioning</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <Zap className="w-4 h-4 text-[#00C6FF]" />
                  <span className="text-xs sm:text-sm text-gray-200">AI-Powered Lead Nurturing & WhatsApp Chatbots</span>
                </div>
              </div>

              <Link
                to="/branding"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D946EF] hover:text-white transition-colors"
              >
                <span>Explore Branding & Social Marketing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* AI MARKETING & AUTOMATION SECTION (H2) */}
      <section className="relative z-10 py-16 sm:py-24 border-t border-white/10 bg-[#020516]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00C6FF]/10 border border-[#00C6FF]/30 text-[#00C6FF] text-xs font-semibold mb-4">
                <Cpu className="w-3.5 h-3.5" />
                <span>Intelligent Automation</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4 leading-snug">
                AI Marketing & Automation for Modern Businesses
              </h2>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                Stop losing warm leads to slow response times. SkillStar integrates intelligent marketing automation workflows, automated WhatsApp conversational bots, smart CRM lead routing, and dynamic retargeting sequences that convert website visitors into customers around the clock.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="text-xs font-bold text-white mb-1">Instant WhatsApp Automation</div>
                  <div className="text-[11px] text-gray-400">Engage inquiries in under 15 seconds</div>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="text-xs font-bold text-white mb-1">Smart Lead Scoring</div>
                  <div className="text-[11px] text-gray-400">Prioritize high-value commercial prospects</div>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="text-xs font-bold text-white mb-1">Automated Email Drip Sequences</div>
                  <div className="text-[11px] text-gray-400">Nurture cold leads into ready buyers</div>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="text-xs font-bold text-white mb-1">Predictive Analytics</div>
                  <div className="text-[11px] text-gray-400">Optimize campaigns using data models</div>
                </div>
              </div>

              <Link
                to="/ai-automation"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#00C6FF] to-[#3B82F6] hover:opacity-95 transition-all shadow-md"
              >
                <span>Discover AI Automation Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0B1538]/80 to-[#020516] border border-white/15">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#00C6FF]" />
                <span>Automated Growth Architecture</span>
              </h3>
              
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#00C6FF]/20 text-[#00C6FF] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</span>
                  <div>
                    <div className="font-semibold text-white">Visitor Ingestion & Tracking</div>
                    <div className="text-gray-400 text-xs">Captures UTM parameters, search intent, and referral source.</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#3B82F6]/20 text-[#3B82F6] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</span>
                  <div>
                    <div className="font-semibold text-white">AI Instant Qualification</div>
                    <div className="text-gray-400 text-xs">Chatbot qualifies budget, requirement, and timeline in real-time.</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#8B5CF6]/20 text-[#8B5CF6] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</span>
                  <div>
                    <div className="font-semibold text-white">CRM Sync & Instant Alert</div>
                    <div className="text-gray-400 text-xs">Routes high-priority leads directly to your sales team via SMS/WhatsApp.</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#D946EF]/20 text-[#D946EF] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">4</span>
                  <div>
                    <div className="font-semibold text-white">Automated Nurture Loop</div>
                    <div className="text-gray-400 text-xs">Delivers case studies, testimonials, and booking calendar invitations.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* TARGET BUSINESS TYPES (H2) */}
      <section className="relative z-10 py-16 sm:py-24 border-t border-white/10 bg-[#04081E]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Digital Marketing Solutions for Different Business Types
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#00C6FF] to-[#D946EF] mx-auto rounded-full mb-6" />
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Every industry faces unique customer acquisition challenges. We tailor our marketing strategies to align with your specific market dynamics, sales cycle, and growth targets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessTypes.map((biz, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{biz.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-5">
                    {biz.desc}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-white/10">
                  {biz.features.map((feat, featIdx) => (
                    <div key={featIdx} className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00C6FF] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHY SKILLSTAR SECTION (H2) */}
      <section className="relative z-10 py-16 sm:py-24 border-t border-white/10 bg-[#020516]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00C6FF]/10 border border-[#00C6FF]/30 text-[#00C6FF] text-xs font-semibold mb-3">
              <span>Why Choose SkillStar</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Why SkillStar is the Best Digital Marketing Company in Coimbatore
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#00C6FF] to-[#D946EF] mx-auto rounded-full mb-6" />
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              We combine deep local market knowledge in Coimbatore with modern digital marketing technology, delivering transparent, high-ROI marketing campaigns that scale your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseItems.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#00C6FF]/30 transition-all flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-lg bg-[#00C6FF]/10 border border-[#00C6FF]/20 flex items-center justify-center text-[#00C6FF] shrink-0 mt-1">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6-STEP DIGITAL MARKETING PROCESS (H2) */}
      <section className="relative z-10 py-16 sm:py-24 border-t border-white/10 bg-[#04081E]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/30 text-[#3B82F6] text-xs font-semibold mb-3">
              <span>Our Framework</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Our 6-Step Digital Marketing Process
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#00C6FF] to-[#D946EF] mx-auto rounded-full mb-6" />
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              A proven, data-centric framework engineered to transition your marketing from guesswork to predictable revenue generation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketingSteps.map((stepItem, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all relative overflow-hidden"
              >
                <div className="text-4xl font-extrabold text-white/10 font-mono mb-3">
                  {stepItem.step}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                  {stepItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {stepItem.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ SECTION: 10 AEO/GEO OPTIMIZED QUESTIONS (H2) */}
      <section className="relative z-10 py-16 sm:py-24 border-t border-white/10 bg-[#020516]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#8B5CF6] text-xs font-semibold mb-3">
              <span>Instant Answers</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Frequently Asked Questions about Digital Marketing
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#00C6FF] to-[#D946EF] mx-auto rounded-full mb-6" />
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Clear, direct answers regarding digital marketing strategies, SEO, AEO, paid ads, and ROI expectations for businesses in Coimbatore.
            </p>
          </div>

          <div className="space-y-4">
            {faqList.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition-colors"
                  >
                    <span className="text-sm sm:text-base font-semibold text-white">
                      {faq.question}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-gray-300">
                      {isOpen ? <Minus className="w-4 h-4 text-[#00C6FF]" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 mt-1">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* FINAL HIGH-IMPACT CALL TO ACTION BANNER */}
      <section className="relative z-10 py-20 sm:py-28 border-t border-white/10 bg-gradient-to-b from-[#060D26] to-[#020516]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-[#00C6FF]/10 via-[#3B82F6]/10 to-[#D946EF]/10 border border-white/15 relative overflow-hidden backdrop-blur-xl shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00C6FF]/20 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D946EF]/20 blur-3xl rounded-full pointer-events-none" />

            <span className="text-xs font-bold uppercase tracking-widest text-[#00C6FF] mb-3 block">
              Ready to Accelerate Your Revenue?
            </span>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Partner with the Best Digital Marketing Company in Coimbatore
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
              Claim your complimentary marketing audit. We will analyze your search rankings, competitor footprint, ad performance, and deliver an actionable growth roadmap.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-full text-sm sm:text-base font-bold text-black bg-gradient-to-r from-[#00C6FF] via-[#3B82F6] to-[#D946EF] hover:opacity-95 transition-all shadow-[0_0_30px_rgba(0,198,255,0.4)] cursor-pointer"
              >
                <span>Claim Free Marketing Proposal</span>
              </button>

              <a
                href="https://wa.me/917845741369?text=Hi%20SkillStar,%20I%20would%20like%20to%20discuss%20Digital%20Marketing%20Services%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm sm:text-base font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-[#00C6FF]" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT / PROPOSAL MODAL POPUP */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg rounded-3xl bg-[#070D28] border border-white/20 p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#00C6FF]/20 blur-2xl rounded-full pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Proposal Request Received!</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    Thank you for reaching out to SkillStar. Our digital marketing strategist will contact you shortly with your custom proposal.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <span className="text-[11px] font-mono text-[#00C6FF] uppercase tracking-wider block mb-1">
                      Quick Growth Audit
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Request Your Free Proposal
                    </h3>
                    <p className="text-xs text-gray-300 mt-1">
                      Fill out the details below to receive a custom marketing strategy tailored for your business.
                    </p>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm focus:border-[#00C6FF] focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleFormChange}
                          placeholder="john@company.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm focus:border-[#00C6FF] focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleFormChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm focus:border-[#00C6FF] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Primary Service Needed
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#091136] border border-white/10 text-white text-xs sm:text-sm focus:border-[#00C6FF] focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="Digital Marketing & SEO">Digital Marketing & SEO</option>
                        <option value="Local SEO (Coimbatore)">Local SEO (Coimbatore Map Pack)</option>
                        <option value="AEO & GEO (AI Search)">AEO & GEO (ChatGPT / Gemini)</option>
                        <option value="Performance Marketing (Google/Meta Ads)">Performance Marketing (Google/Meta Ads)</option>
                        <option value="Social Media & Branding">Social Media & Branding</option>
                        <option value="AI Automation & Chatbots">AI Automation & Chatbots</option>
                        <option value="Complete Growth Retainer">Complete Growth Retainer</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Project / Website Details
                      </label>
                      <textarea
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleFormChange}
                        placeholder="Tell us about your website URL, current challenges, or target goals..."
                        className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm focus:border-[#00C6FF] focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#00C6FF] via-[#3B82F6] to-[#D946EF] text-black text-xs sm:text-sm font-bold flex items-center justify-center gap-2 hover:opacity-95 transition-all cursor-pointer shadow-lg"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Proposal Request</span>
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Global Shared Footer */}
      <Footer />
    </div>
  );
}
