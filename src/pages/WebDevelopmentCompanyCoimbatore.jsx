import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  Code2, 
  ShoppingBag, 
  Smartphone, 
  Building2, 
  MousePointerClick, 
  RefreshCw, 
  Search, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Palette, 
  Users, 
  TrendingUp, 
  Rocket, 
  Plus, 
  Minus, 
  Check, 
  Layers, 
  BarChart3, 
  Bot, 
  Megaphone,
  X,
  Send,
  PhoneCall,
  Phone,
  Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import PageNavbar from '../components/PageNavbar';
import usePageMeta from '../hooks/usePageMeta';

const servicesList = [
  {
    title: 'Business Website Development',
    desc: 'Professional corporate and business websites structured to communicate brand authority, present offerings clearly, and guide visitors smoothly toward making enquiries.',
    icon: Globe,
    color: 'from-[#00C6FF] to-[#3B82F6]',
    gradientBg: 'from-[#051842]/70 to-[#020516]/90',
    tags: ['Brand Credibility', 'Lead Inquiries', 'Modern UI']
  },
  {
    title: 'Custom Website Development',
    desc: 'Tailored web solutions coded from the ground up to match unique operational requirements, custom backend logic, and bespoke design aesthetics.',
    icon: Code2,
    color: 'from-[#3B82F6] to-[#8B5CF6]',
    gradientBg: 'from-[#1E0F45]/70 to-[#020516]/90',
    tags: ['Tailored Codebase', 'Custom Logic', 'Scalable Architecture']
  },
  {
    title: 'Responsive Website Development',
    desc: 'Fluid layouts crafted to provide optimal viewing, effortless navigation, and rapid touch interactions across all mobile, tablet, and desktop screens.',
    icon: Smartphone,
    color: 'from-[#8B5CF6] to-[#D946EF]',
    gradientBg: 'from-[#2D0B4E]/70 to-[#020516]/90',
    tags: ['Mobile-First', 'Adaptive Layouts', 'Cross-Device']
  },
  {
    title: 'E-Commerce Website Development',
    desc: 'High-converting online store platforms engineered with intuitive product catalogs, secure payment processing, responsive shopping carts, and seamless checkout flows.',
    icon: ShoppingBag,
    color: 'from-[#D946EF] to-[#EC4899]',
    gradientBg: 'from-[#3B0A42]/70 to-[#020516]/90',
    tags: ['Product Catalogs', 'Payment Gateways', 'Frictionless Checkout']
  },
  {
    title: 'Corporate Website Development',
    desc: 'Authoritative, enterprise-ready web portals designed to showcase company milestones, services, investor relations, and organizational credibility.',
    icon: Building2,
    color: 'from-[#00C6FF] to-[#8B5CF6]',
    gradientBg: 'from-[#0A1A45]/70 to-[#020516]/90',
    tags: ['Enterprise Grade', 'Multi-Page Portals', 'Stakeholder Trust']
  },
  {
    title: 'Landing Page Development',
    desc: 'High-impact, conversion-focused landing pages structured around a single compelling call-to-action for ad campaigns and product launches.',
    icon: MousePointerClick,
    color: 'from-[#8B5CF6] to-[#00C6FF]',
    gradientBg: 'from-[#17104A]/70 to-[#020516]/90',
    tags: ['High Conversion', 'A/B Test Ready', 'Campaign Focused']
  },
  {
    title: 'Website Redesign & Optimization',
    desc: 'Transform outdated websites with modern interface designs, faster loading performance, improved accessibility, and revamped user journeys.',
    icon: RefreshCw,
    color: 'from-[#3B82F6] to-[#00C6FF]',
    gradientBg: 'from-[#08173E]/70 to-[#020516]/90',
    tags: ['Performance Boost', 'UI/UX Refresh', 'Code Modernization']
  },
  {
    title: 'SEO-Friendly Website Development',
    desc: 'Websites developed with clean semantic markup, fast loading speeds, indexable URLs, and structured data readiness for maximum search discoverability.',
    icon: Search,
    color: 'from-[#D946EF] to-[#8B5CF6]',
    gradientBg: 'from-[#280942]/70 to-[#020516]/90',
    tags: ['Semantic HTML5', 'Core Web Vitals', 'Search Crawlability']
  }
];

const whyChooseItems = [
  {
    title: 'Modern and responsive website design',
    desc: 'Visually compelling aesthetics that look stunning on all device viewports.'
  },
  {
    title: 'User-friendly navigation and experience',
    desc: 'Intuitive site structures that help visitors find information effortlessly.'
  },
  {
    title: 'Mobile-friendly development',
    desc: 'Optimized touch experiences prioritizing the majority of modern mobile web traffic.'
  },
  {
    title: 'SEO-friendly website structure',
    desc: 'Clean code hierarchy and semantic architecture supporting search engine indexing.'
  },
  {
    title: 'Conversion-focused layouts',
    desc: 'Strategically positioned calls-to-action that guide users toward inquiries and sales.'
  },
  {
    title: 'Scalable web solutions',
    desc: 'Modular component architecture ready to grow as your business expands.'
  },
  {
    title: 'Business-focused development approach',
    desc: 'Engineering choices built strictly around your commercial and growth goals.'
  },
  {
    title: 'Digital marketing support under one roof',
    desc: 'Seamless synergy with SEO, AEO, GEO, performance marketing, and branding.'
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Understanding Your Business',
    desc: 'We understand your business, audience, services, and objectives.'
  },
  {
    step: '02',
    title: 'Website Strategy',
    desc: 'We plan the structure, user journey, content sections, and functionality.'
  },
  {
    step: '03',
    title: 'Web Design',
    desc: 'We create a modern interface aligned with your brand identity.'
  },
  {
    step: '04',
    title: 'Website Development',
    desc: 'The approved design is transformed into a responsive and functional website.'
  },
  {
    step: '05',
    title: 'Testing & Optimization',
    desc: 'We test responsiveness, usability, functionality, and performance across devices.'
  },
  {
    step: '06',
    title: 'Launch & Support',
    desc: 'After final checks, the website is prepared for launch and ongoing improvements.'
  }
];

const marketingSynergies = [
  {
    title: 'SEO & Local SEO',
    desc: 'Rank on Google for high-intent searches in Coimbatore and targeted regional markets.',
    link: '/seo'
  },
  {
    title: 'AEO & GEO Optimization',
    desc: 'Be discoverable in AI answers across ChatGPT, Perplexity, and Google AI Overviews.',
    link: '/seo'
  },
  {
    title: 'Performance Marketing',
    desc: 'Drive targeted paid traffic via high-converting Google Ads and Meta campaigns.',
    link: '/performance-marketing'
  },
  {
    title: 'UI/UX & Branding',
    desc: 'Cohesive visual identity, logo design, and human-centered user experience flows.',
    link: '/branding'
  },
  {
    title: 'AI Marketing & Automation',
    desc: 'Intelligent customer inquiry automation and workflow integrations.',
    link: '/ai-automation'
  },
  {
    title: 'Custom Software & Applications',
    desc: 'Tailored web portals, dashboard systems, and operational business platforms.',
    link: '/custom-software'
  }
];

const faqs = [
  {
    question: 'What is website development?',
    answer: 'Website development is the process of building and maintaining a website, including its structure, functionality, responsiveness, and technical features.'
  },
  {
    question: 'What makes a website user-friendly?',
    answer: 'A user-friendly website has clear navigation, readable content, responsive design, fast loading, intuitive layouts, and an easy path for visitors to take action.'
  },
  {
    question: 'Does SkillStar provide web design and development?',
    answer: 'Yes. SkillStar provides web design and website development solutions designed around business requirements, user experience, responsiveness, and digital growth.'
  },
  {
    question: 'Can you create an SEO-friendly website?',
    answer: 'Yes. Websites can be developed with SEO-friendly structures such as clean URLs, semantic HTML, responsive design, proper metadata, internal linking, and crawlable content.'
  },
  {
    question: 'Do you provide digital marketing along with website development?',
    answer: 'Yes. SkillStar also provides SEO, Local SEO, AEO, GEO, performance marketing, social media marketing, branding, and AI marketing solutions.'
  }
];

const WebDevelopmentCompanyCoimbatore = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Business Website Development',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setIsContactModalOpen(false);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'Business Website Development',
          message: ''
        });
      }, 400);
    }, 2500);
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://www.skillstardigitalsolutions.com/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Services',
            'item': 'https://www.skillstardigitalsolutions.com/#services'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Best Web Development Company in Coimbatore',
            'item': 'https://www.skillstardigitalsolutions.com/web-development-company-coimbatore'
          }
        ]
      },
      {
        '@type': 'Service',
        'serviceType': 'Web Development Services',
        'name': 'Best Web Development Company in Coimbatore',
        'provider': {
          '@type': 'ProfessionalService',
          'name': 'SkillStar Digital Solutions',
          'url': 'https://www.skillstardigitalsolutions.com/',
          'telephone': '+918925845871',
          'email': 'skillstardigitalsolutions@gmail.com',
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': '11/4, Bharathi Park 4th Cross Rd, Jawahar Nagar, Saibaba Colony',
            'addressLocality': 'Coimbatore',
            'addressRegion': 'Tamil Nadu',
            'postalCode': '641011',
            'addressCountry': 'IN'
          },
          'geo': {
            '@type': 'GeoCoordinates',
            'latitude': 11.0256,
            'longitude': 76.9431
          }
        },
        'areaServed': [
          {
            '@type': 'City',
            'name': 'Coimbatore'
          },
          {
            '@type': 'State',
            'name': 'Tamil Nadu'
          },
          {
            '@type': 'Country',
            'name': 'India'
          }
        ],
        'description': 'Build a powerful online presence with SkillStar Digital Solutions. We create modern, user-friendly websites that combine creative web design, seamless functionality, responsive development, and digital marketing strategies to help businesses grow online.'
      }
    ]
  };

  usePageMeta({
    title: 'Best Website Development & Digital Marketing Company | SkillStar',
    description: 'Build a powerful online presence with SkillStar Digital Solutions. We create modern, user-friendly websites that combine creative web design, seamless functionality, responsive development, and digital marketing strategies to help businesses grow online.',
    canonical: 'https://www.skillstardigitalsolutions.com/web-development-company-coimbatore',
    structuredData
  });

  return (
    <div className="bg-[#020516] min-h-screen text-white font-sans overflow-x-hidden selection:bg-[#3B82F6] selection:text-white">
      
      {/* Top Floating Navbar / Header */}
      <PageNavbar onOpenModal={() => setIsContactModalOpen(true)} />

      {/* Hero Section */}
      <header 
        className="pt-36 pb-20 relative overflow-hidden bg-[#020516]"
        style={{
          backgroundImage: "url('/image%20copy%203.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Light overlay to keep the background image bright and vibrant */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020516]/85 via-[#020516]/40 to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#020516] via-transparent to-transparent pointer-events-none"></div>

        {/* Background Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[520px] bg-gradient-to-tr from-[#00C6FF]/10 via-[#3B82F6]/15 to-[#8B5CF6]/10 blur-[160px] pointer-events-none rounded-full"></div>
        <div className="absolute top-12 right-12 w-[400px] h-[400px] bg-[#00C6FF]/10 blur-[140px] rounded-full pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-400 mb-8">
            <Link to="/" className="hover:text-[#00C6FF] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/#services" className="hover:text-[#00C6FF] transition-colors text-gray-500">Services</Link>
            <span>/</span>
            <span className="text-[#00C6FF] font-semibold">Web Development Company in Coimbatore</span>
          </nav>

          <div className="max-w-4xl">
            
            {/* Left Hero Content */}
            <div>
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#00C6FF]" />
                <span className="text-xs uppercase font-bold tracking-widest text-gray-300">
                  Website Development & Digital Marketing
                </span>
              </motion.div>

              {/* Single H1 */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.7 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.12] mb-6 tracking-tight capitalize drop-shadow-xl"
              >
                Best Web Development <br />
                <span className="bg-gradient-to-r from-[#00C6FF] via-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
                  Company in Coimbatore
                </span>
              </motion.h1>

              {/* Supporting Text */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="text-base sm:text-lg lg:text-xl text-gray-100 leading-relaxed mb-8 font-normal drop-shadow-md max-w-3xl"
              >
                Build a powerful online presence with SkillStar Digital Solutions. We create modern, user-friendly websites that combine creative web design, seamless functionality, responsive development, and digital marketing strategies to help businesses grow online.
              </motion.p>

              {/* CTAs */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
              >
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-[#00C6FF] via-[#3B82F6] to-[#8B5CF6] text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:shadow-[0_0_35px_rgba(59,130,246,0.7)] hover:scale-105 transition-all text-center cursor-pointer"
                >
                  Start Your Website Project <ArrowRight className="w-5 h-5" />
                </button>
                <a 
                  href="#services"
                  className="px-8 py-4 rounded-full bg-[#0A0F24]/80 backdrop-blur-md border border-white/15 text-gray-200 hover:text-white hover:border-[#00C6FF]/50 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all text-center"
                >
                  Explore Services
                </a>
              </motion.div>
            </div>

          </div>

        </div>
      </header>

      {/* Section 1: Best Web Development for Growing Businesses */}
      <section className="py-20 bg-[#010310] relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00C6FF]/10 border border-[#00C6FF]/30 text-[#00C6FF] text-xs font-semibold mb-4">
              <ShieldCheck className="w-4 h-4" />
              <span>Tailored for Growth</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white mb-6 tracking-tight">
              Best Web Development for Growing Businesses
            </h2>

            <div className="space-y-5 text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                A professional website is more than just an online presence. Our web development solutions are designed to create fast, responsive, secure, and user-friendly websites that connect your business with the right audience.
              </p>
              <p>
                From business websites to custom web solutions, we focus on creating websites that are easy to navigate, visually engaging, mobile-friendly, and built around your business goals.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="text-base sm:text-lg font-bold text-white mb-1">Fast & Secure</div>
                <div className="text-xs text-gray-400">High-Speed Code</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="text-base sm:text-lg font-bold text-white mb-1">User-Friendly</div>
                <div className="text-xs text-gray-400">Smooth Navigation</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="text-base sm:text-lg font-bold text-white mb-1">Mobile-First</div>
                <div className="text-xs text-gray-400">100% Responsive</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="text-base sm:text-lg font-bold text-white mb-1">Goal-Driven</div>
                <div className="text-xs text-gray-400">Conversion Focus</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: Professional Website Development Services */}
      <section id="services" className="py-24 relative bg-[#020516]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F172A]/80 border border-white/10 mb-4 shadow-sm">
              <Zap className="w-3.5 h-3.5 text-[#00C6FF]" />
              <span className="text-xs uppercase font-bold tracking-widest text-gray-300">
                Our Solutions
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white mb-4 tracking-tight">
              Professional Website Development Services
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Our website development services help businesses establish a strong and professional digital presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesList.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: (idx % 4) * 0.08, duration: 0.5 }}
                  className={`relative rounded-3xl p-6 bg-gradient-to-br ${service.gradientBg} border border-white/10 hover:border-white/25 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 shadow-xl flex flex-col justify-between group overflow-hidden`}
                >
                  <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-bl ${service.color} opacity-20 group-hover:opacity-40 blur-2xl transition-opacity duration-500 rounded-full pointer-events-none`}></div>
                  <div className={`absolute bottom-0 left-[10%] right-[10%] h-[2px] bg-gradient-to-r ${service.color} opacity-40 group-hover:opacity-100 shadow-[0_0_15px_currentColor] transition-all duration-500`}></div>

                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#0A0F24] border border-white/10 flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-500 relative">
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-tr ${service.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                      <Icon className="w-6 h-6 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]" />
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2.5 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 transition-all duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                    {service.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-2 py-0.5 rounded-md text-[10px] font-medium text-gray-300 bg-white/5 border border-white/5"
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

      {/* Section 3: Creative Web Design That Users Love */}
      <section className="py-20 bg-[#010310] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0A102E]/90 via-[#0F183D]/80 to-[#0A102E]/90 border border-white/15 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#3B82F6]/15 blur-3xl rounded-full pointer-events-none"></div>

            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00C6FF]/15 border border-[#00C6FF]/30 text-[#00C6FF] text-xs font-semibold mb-4">
                  <Palette className="w-4 h-4" />
                  <span>Aesthetics & Usability</span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white mb-4 tracking-tight">
                  Creative Web Design That Users Love
                </h2>

                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
                  Great web design combines creativity with usability. We create clean and modern website designs with intuitive navigation, clear content structure, engaging visuals, and responsive layouts.
                </p>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  Our goal is to make every website easy to understand, simple to navigate, and comfortable to use across desktop, tablet, and mobile devices.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00C6FF] flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-200">Intuitive Navigation & Clarity</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#8B5CF6] flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-200">Engaging Visual Elements</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D946EF] flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-200">Structured Content Flow</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00C6FF] flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-200">Comfortable Across All Devices</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-[#050A1A]/80 border border-white/10 text-center">
                <Palette className="w-12 h-12 text-[#00C6FF] mb-3 animate-pulse" />
                <h4 className="text-lg font-bold text-white mb-2">Need a Creative Design?</h4>
                <p className="text-xs text-gray-400 mb-5 leading-relaxed">
                  Let's craft a distinctive interface that showcases your brand identity.
                </p>
                <Link
                  to="/ui-ux-design"
                  className="w-full py-3 rounded-full bg-gradient-to-r from-[#00C6FF] to-[#3B82F6] text-white font-semibold text-sm shadow-[0_0_20px_rgba(0,198,255,0.4)] hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  Explore UI/UX Design <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Section 4: User-Friendly Website Development */}
      <section className="py-20 bg-[#020516] relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#8B5CF6] text-xs font-semibold mb-4">
              <Users className="w-4 h-4" />
              <span>Visitor-Centric Design</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white mb-6 tracking-tight">
              User-Friendly Website Development
            </h2>

            <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                We build user-friendly websites with the visitor in mind.
              </p>
              <p>
                From the first click to the final enquiry, every section is structured to provide a smooth browsing experience. Clear navigation, responsive layouts, readable content, fast-loading pages, and strategically placed calls-to-action help visitors find what they need quickly.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-[#00C6FF]/20 text-[#00C6FF] flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white mb-1">Clear Navigation</h3>
                <p className="text-xs text-gray-400">Logical menus that reduce browsing friction.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-[#8B5CF6]/20 text-[#8B5CF6] flex items-center justify-center mb-3">
                  <Zap className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white mb-1">Fast-Loading Pages</h3>
                <p className="text-xs text-gray-400">Lightweight code delivering instant responses.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-[#D946EF]/20 text-[#D946EF] flex items-center justify-center mb-3">
                  <MousePointerClick className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white mb-1">Strategic CTAs</h3>
                <p className="text-xs text-gray-400">Direct pathways to encourage leads and sales.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Section 5: Web Creation Focused on Your Business */}
      <section className="py-20 bg-[#010310] relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#081333] to-[#03081A] border border-white/15 shadow-2xl">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00C6FF]/10 border border-[#00C6FF]/30 text-[#00C6FF] text-xs font-semibold mb-4">
              <Building2 className="w-4 h-4" />
              <span>Business-Aligned</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white mb-6 tracking-tight">
              Web Creation Focused on Your Business
            </h2>

            <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p>
                Every business has different goals. Our web creation process begins by understanding your brand, audience, services, and objectives.
              </p>
              <p>
                We then combine strategy, web design, development, content structure, SEO fundamentals, and conversion-focused elements to create a website that represents your business professionally.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300">Brand Alignment</span>
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300">Audience Targeting</span>
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300">SEO Fundamentals</span>
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300">Conversion Architecture</span>
            </div>

          </div>
        </div>
      </section>

      {/* Section 6: Website Development & Digital Marketing Together */}
      <section className="py-24 bg-[#020516] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F172A]/80 border border-white/10 mb-4 shadow-sm">
              <TrendingUp className="w-3.5 h-3.5 text-[#00C6FF]" />
              <span className="text-xs uppercase font-bold tracking-widest text-gray-300">
                Complete Synergy
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white mb-4 tracking-tight">
              Website Development & Digital Marketing Together
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-4">
              A great website needs visibility.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Along with website development, SkillStar provides digital marketing solutions including SEO, Local SEO, AEO, GEO, performance marketing, social media marketing, branding, and AI marketing.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm mt-3 italic">
              This allows your website to work as part of a complete digital growth strategy rather than functioning as a standalone online brochure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketingSynergies.map((item, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-gradient-to-br from-[#070D26] to-[#030617] border border-white/10 hover:border-[#3B82F6]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2 text-[#00C6FF]">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>
                <Link to={item.link} className="text-xs font-semibold text-[#8B5CF6] hover:text-[#00C6FF] inline-flex items-center gap-1">
                  Learn more <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Section 7: Why Choose SkillStar for Web Development? */}
      <section className="py-20 bg-[#010310] relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/30 text-[#3B82F6] text-xs font-semibold mb-4">
              <ShieldCheck className="w-4 h-4" />
              <span>Key Strengths</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-4 tracking-tight">
              Why Choose SkillStar for Web Development?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseItems.map((item, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#070B1F]/90 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg flex flex-col justify-start"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00C6FF]/20 to-[#3B82F6]/20 border border-[#00C6FF]/30 flex items-center justify-center text-[#00C6FF] mb-4 flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Section 8: Our Website Development Process */}
      <section className="py-24 bg-[#020516] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F172A]/80 border border-white/10 mb-4 shadow-sm">
              <Rocket className="w-3.5 h-3.5 text-[#00C6FF]" />
              <span className="text-xs uppercase font-bold tracking-widest text-gray-300">
                Methodology
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-4 tracking-tight">
              Our Website Development Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, idx) => (
              <div 
                key={idx}
                className="relative p-8 rounded-3xl bg-gradient-to-br from-[#08102A]/80 via-[#040817]/90 to-[#020410] border border-white/10 hover:border-[#00C6FF]/30 transition-all duration-300 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl sm:text-3xl font-display font-extrabold text-[#00C6FF] group-hover:scale-110 transition-transform">
                      {step.step}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                      Stage {idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-[#00C6FF]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Structured Milestone</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Section 9: Frequently Asked Questions */}
      <section id="faq" className="py-24 bg-[#010310] relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F172A]/80 border border-white/10 mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#00C6FF]" />
              <span className="text-xs uppercase font-bold tracking-widest text-gray-300">
                Help & Answers
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-4 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                    isOpen
                      ? 'bg-[#080E29] border-[#00C6FF]/40 shadow-[0_0_20px_rgba(0,198,255,0.15)]'
                      : 'bg-[#050817] border-white/10 hover:border-white/20'
                  }`}
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                >
                  <div className="p-5 sm:p-6 flex items-center justify-between gap-4">
                    <h3 className={`text-sm sm:text-base font-semibold leading-snug transition-colors ${
                      isOpen ? 'text-white' : 'text-gray-200 hover:text-white'
                    }`}>
                      {faq.question}
                    </h3>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all flex-shrink-0 ${
                      isOpen ? 'bg-[#00C6FF]/20 text-[#00C6FF]' : 'bg-white/5 text-gray-400'
                    }`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-5 sm:px-6 pb-6 pt-0"
                      >
                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed border-t border-white/5 pt-4">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Internal Navigation Section */}
      <section className="py-16 bg-[#020516] border-t border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-1">
                Explore Digital Solutions by SkillStar
              </h3>
              <p className="text-xs sm:text-sm text-gray-400">
                Providing web development, SEO, performance marketing, and creative branding in Coimbatore.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <Link to="/seo" className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300 hover:text-[#00C6FF] hover:border-[#00C6FF]/40 transition-all">
                SEO Services
              </Link>
              <Link to="/ui-ux-design" className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300 hover:text-[#8B5CF6] hover:border-[#8B5CF6]/40 transition-all">
                UI/UX Design
              </Link>
              <Link to="/performance-marketing" className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300 hover:text-[#D946EF] hover:border-[#D946EF]/40 transition-all">
                Performance Marketing
              </Link>
              <Link to="/branding" className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300 hover:text-[#00C6FF] hover:border-[#00C6FF]/40 transition-all">
                Branding
              </Link>
              <Link to="/ai-automation" className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300 hover:text-[#8B5CF6] hover:border-[#8B5CF6]/40 transition-all">
                AI Automation
              </Link>
              <Link to="/custom-software" className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300 hover:text-[#D946EF] hover:border-[#D946EF]/40 transition-all">
                Custom Software
              </Link>
              <Link to="/web-development" className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300 hover:text-white hover:border-white/30 transition-all">
                Enterprise Web Dev
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final Section 10: Build a Better Website for Your Business */}
      <section className="py-24 bg-[#010310] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#00C6FF]/15 via-[#3B82F6]/20 to-[#8B5CF6]/15 blur-[160px] pointer-events-none rounded-full"></div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-[#0A163B]/90 via-[#0E1A48]/90 to-[#0A163B]/90 border border-white/15 backdrop-blur-xl shadow-2xl text-center">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-gray-200 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#00C6FF]" />
              <span>Let's Discuss Your Web Strategy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white mb-6 tracking-tight">
              Build a Better Website for Your Business
            </h2>

            <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
              Your website is often the first interaction customers have with your brand. Let SkillStar create a modern, user-friendly, responsive website designed to strengthen your digital presence and support your business goals.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-[#00C6FF] via-[#3B82F6] to-[#8B5CF6] text-white font-bold text-sm sm:text-base shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:shadow-[0_0_35px_rgba(59,130,246,0.8)] hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Start Your Website Project <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="tel:+918925845871"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/15 text-white font-semibold text-sm sm:text-base hover:bg-white/10 transition-all text-center"
              >
                Call: +91 89258 45871
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00C6FF]" /> Free Consultation
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#3B82F6]" /> Tailored Architecture
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#8B5CF6]" /> Transparent Timelines
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Form Popup Modal */}
      <AnimatePresence>
        {isContactModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsContactModalOpen(false)}
              className="fixed inset-0 bg-[#020410]/85 backdrop-blur-md"
            ></motion.div>

            {/* Modal Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-xl bg-gradient-to-b from-[#0A122E] via-[#070B1F] to-[#040817] border border-white/15 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col z-10 my-auto"
            >
              {/* Top Bar */}
              <div className="px-6 sm:px-8 pt-6 pb-4 border-b border-white/10 flex items-center justify-between relative bg-white/[0.02]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#00C6FF]/20 to-[#3B82F6]/20 border border-[#00C6FF]/40 flex items-center justify-center text-[#00C6FF]">
                    <Send className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">Start Your Project</h3>
                    <p className="text-xs text-gray-400">Get a tailored quote & consultation</p>
                  </div>
                </div>

                <button 
                  onClick={() => setIsContactModalOpen(false)}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
                  aria-label="Close form"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
                {formSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-10 flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#00E676]/20 border border-[#00E676]/40 flex items-center justify-center mb-4 text-[#00E676]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">Inquiry Sent!</h4>
                    <p className="text-sm text-gray-300 max-w-sm leading-relaxed mb-6">
                      Thank you! Our Coimbatore web development team will review your requirements and reach out within 24 hours.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span>Need instant help?</span>
                      <a href="tel:+918925845871" className="text-[#00C6FF] font-semibold hover:underline">+91 89258 45871</a>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-medium text-gray-300 mb-1.5 pl-1">Your Name *</label>
                        <input 
                          required 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your name" 
                          className="w-full bg-[#030614] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00C6FF]/60 focus:bg-[#060B22] transition-colors"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-medium text-gray-300 mb-1.5 pl-1">Phone Number *</label>
                        <input 
                          required 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="e.g. +91 89258 45871" 
                          className="w-full bg-[#030614] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00C6FF]/60 focus:bg-[#060B22] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1.5 pl-1">Email Address *</label>
                      <input 
                        required 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="yourname@domain.com" 
                        className="w-full bg-[#030614] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00C6FF]/60 focus:bg-[#060B22] transition-colors"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1.5 pl-1">Service Interested In</label>
                      <div className="relative">
                        <select 
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full bg-[#030614] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00C6FF]/60 focus:bg-[#060B22] transition-colors appearance-none cursor-pointer"
                        >
                          <option value="Business Website Development">Business Website Development</option>
                          <option value="Custom Website Development">Custom Website Development</option>
                          <option value="Responsive Website Development">Responsive Website Development</option>
                          <option value="E-Commerce Website Development">E-Commerce Website Development</option>
                          <option value="Corporate Website Development">Corporate Website Development</option>
                          <option value="Landing Page Development">Landing Page Development</option>
                          <option value="Website Redesign & Optimization">Website Redesign & Optimization</option>
                          <option value="SEO-Friendly Website Development">SEO-Friendly Website Development</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1.5 pl-1">Project Details / Message</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                        placeholder="Briefly describe your project requirements, goals, or timeline..."
                        className="w-full bg-[#030614] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00C6FF]/60 focus:bg-[#060B22] transition-colors resize-none"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button 
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00C6FF] via-[#3B82F6] to-[#8B5CF6] text-white font-bold text-sm shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                    >
                      <span>Send Message</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    {/* Quick Channels */}
                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                      <a href="tel:+918925845871" className="inline-flex items-center gap-1.5 hover:text-[#00C6FF] transition-colors">
                        <Phone className="w-3.5 h-3.5 text-[#00C6FF]" /> +91 89258 45871
                      </a>
                      <a 
                        href="https://wa.me/918925845871?text=Hi%20SkillStar%20team%2C%20I%20would%20like%20to%20discuss%20a%20website%20development%20project." 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#00E676] hover:underline"
                      >
                        Chat on WhatsApp →
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Standard Footer */}
      <Footer />
    </div>
  );
};

export default WebDevelopmentCompanyCoimbatore;
