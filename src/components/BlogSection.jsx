import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BookOpen, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "SEO vs GEO vs AEO: What Every Business Needs to Know in 2026",
    category: "Digital Growth & Search Visibility",
    author: "SkillStar Digital Solutions",
    excerpt: "Search has changed forever. Google is no longer the only gatekeeper to your business's online visibility. Learn how AI is changing search.",
    readTime: "5 min read",
    content: (
      <div className="prose prose-invert prose-lg max-w-none text-white/80">
        <p className="text-xl leading-relaxed text-white/90 font-medium">
          Search has changed forever. Google is no longer the only gatekeeper to your business's online visibility. Today, your potential customers are finding answers through AI-powered platforms like ChatGPT, Gemini, and Perplexity — and if your business isn't optimised for these new search systems, you're leaving a massive amount of growth on the table.
        </p>
        <p className="mt-6">
          At SkillStar Digital Solutions, we engineer visibility systems that go beyond traditional SEO. Let's break down the three pillars of modern search optimisation — SEO, GEO, and AEO — and why your business needs all three.
        </p>

        <hr className="my-10 border-white/10" />

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What is SEO? (Search Engine Optimisation)</h2>
        <p>
          SEO is the foundation. It's the process of optimising your website so that Google and other traditional search engines rank your pages higher in their results.
        </p>
        <p className="font-semibold text-white mt-6 mb-4">Core components of modern SEO include:</p>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li><strong className="text-blue-300">Technical SEO</strong> — Site speed, crawlability, Core Web Vitals, mobile responsiveness</li>
          <li><strong className="text-blue-300">On-Page SEO</strong> — Keyword targeting, content quality, metadata, internal linking</li>
          <li><strong className="text-blue-300">Off-Page SEO</strong> — Backlinks, domain authority, brand mentions</li>
          <li><strong className="text-blue-300">Local SEO</strong> — Google Business Profile, local citations, geo-targeted keywords</li>
          <li><strong className="text-blue-300">Schema Markup</strong> — Structured data that helps search engines understand your content</li>
        </ul>
        <p>
          SEO is still essential. Google processes over 8.5 billion searches per day. But it's no longer enough on its own.
        </p>

        <hr className="my-10 border-white/10" />

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What is GEO? (Generative Engine Optimisation)</h2>
        <p>
          GEO is the emerging discipline of optimising your business to appear inside AI-generated answers. When someone asks ChatGPT "What's the best digital marketing agency in Coimbatore?" or asks Gemini "How do I improve my website's search ranking?" — the AI's response is shaped by what it has learned and indexed about your brand.
        </p>
        
        <p className="font-semibold text-white mt-6 mb-4">Why GEO matters:</p>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>AI tools like ChatGPT, Gemini, Copilot, and Perplexity are increasingly the first stop for research</li>
          <li>AI answers don't show a list of 10 blue links — they give ONE synthesised response. If your brand isn't in it, you're invisible</li>
          <li>Younger, tech-savvy audiences often skip Google entirely and go straight to AI</li>
        </ul>

        <p className="font-semibold text-white mt-6 mb-4">How SkillStar optimises for GEO:</p>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Building authoritative, citable content that AI models reference</li>
          <li>Establishing consistent brand presence across high-authority platforms</li>
          <li>Ensuring your business's key facts, services, and positioning are clearly published and structured</li>
        </ul>

        <hr className="my-10 border-white/10" />

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What is AEO? (Answer Engine Optimisation)</h2>
        <p>
          AEO focuses on getting your content to appear as direct answers — in Google's featured snippets, People Also Ask boxes, voice search results, and knowledge panels.
        </p>
        <p className="mt-4">
          When someone asks Google "How long does SEO take to show results?" and Google shows a direct answer box at the top of the page, that's AEO at work.
        </p>

        <p className="font-semibold text-white mt-6 mb-4">AEO strategies include:</p>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Writing content in a clear Q&A format that matches common search queries</li>
          <li>Using FAQ schema and structured data markup</li>
          <li>Optimising for voice search phrasing (conversational, question-based language)</li>
          <li>Building out comprehensive topic coverage to establish topical authority</li>
        </ul>

        <hr className="my-10 border-white/10" />

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Why Your Business Needs All Three</h2>
        
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 border-b border-white/10">
                <th className="p-4 text-white font-semibold rounded-tl-xl">Strategy</th>
                <th className="p-4 text-white font-semibold">Where It Works</th>
                <th className="p-4 text-white font-semibold rounded-tr-xl">Who It Reaches</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 bg-black/20">
              <tr>
                <td className="p-4 font-medium text-blue-300">SEO</td>
                <td className="p-4">Google, Bing</td>
                <td className="p-4">Users searching traditionally</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-purple-400">GEO</td>
                <td className="p-4">ChatGPT, Gemini, Perplexity</td>
                <td className="p-4">AI-first researchers</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-emerald-400">AEO</td>
                <td className="p-4">Featured Snippets, Voice, PAA</td>
                <td className="p-4">Zero-click & voice users</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Missing any one of these is like having a store but leaving the front door locked for certain customers. Modern search visibility means being present everywhere your audience looks for answers.
        </p>

        <hr className="my-10 border-white/10" />

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">How SkillStar Can Help</h2>
        <p>
          At SkillStar Digital Solutions, we don't just run SEO campaigns — we build complete search visibility ecosystems. Our team combines technical SEO audits, GEO content strategy, and AEO schema implementation to make sure your brand gets found no matter where your customers are searching.
        </p>
        <p className="mt-4 mb-8">
          Whether you're a startup trying to establish your presence or a growing business looking to dominate local search, we have the systems to get you there.
        </p>

        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/10 text-center">
          <h3 className="text-xl font-bold text-white mb-4">Ready to dominate search in 2026?</h3>
          <p className="mb-6 text-white/80">Get a free strategy consultation today.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://skillstardigitalsolutions.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-colors">
              Visit Our Website
            </a>
            <a href="mailto:skillstardigitalsolutions@gmail.com" className="bg-white/10 hover:bg-white/20 border border-white/10 text-white font-medium py-3 px-6 rounded-xl transition-colors">
              Email Us
            </a>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-white/40 italic">
          SkillStar Digital Solutions — Engineering Digital Success Beyond Traditional Marketing
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Why Your Business Website Is Losing You Customers (And How to Fix It)",
    category: "Enterprise Website Development",
    author: "SkillStar Digital Solutions",
    excerpt: "Your website is your most powerful salesperson. It works 24 hours a day, seven days a week, representing your brand to every potential customer...",
    readTime: "6 min read",
    content: (
      <div className="prose prose-invert prose-lg max-w-none text-white/80">
        <p className="text-xl leading-relaxed text-white/90 font-medium">
          Your website is your most powerful salesperson. It works 24 hours a day, seven days a week, representing your brand to every potential customer who searches for you. But here's the hard truth — most business websites are silently losing customers every single day.
        </p>
        <p className="mt-6">
          At SkillStar Digital Solutions, we've analysed dozens of business websites and found the same problems appearing over and over. In this post, we break down the most common website mistakes that cost businesses leads, conversions, and revenue — and what you should do instead.
        </p>

        <hr className="my-10 border-white/10" />

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Mistake 1: Your Website is Slow</h2>
        <p>
          If your site takes more than 3 seconds to load, you've already lost nearly half your visitors. Google's own data shows that 53% of mobile users abandon a site that takes longer than three seconds to load. And if they leave, Google notices — slow sites rank lower in search results.
        </p>
        
        <p className="font-semibold text-white mt-6 mb-4">Common causes of slow websites:</p>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Uncompressed, oversized images</li>
          <li>Too many third-party scripts and plugins</li>
          <li>Poor hosting infrastructure</li>
          <li>No content delivery network (CDN)</li>
          <li>Bloated, unoptimised code</li>
        </ul>
        <p>
          <strong className="text-white">The fix:</strong> A professionally developed website with optimised assets, clean code, and the right hosting setup can dramatically improve load times. At SkillStar, every website we build is engineered to score high on Google's Core Web Vitals.
        </p>

        <hr className="my-10 border-white/10" />

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Mistake 2: It's Not Built for Mobile</h2>
        <p>
          Over 60% of web traffic globally comes from mobile devices. If your website isn't fully responsive — meaning it adapts perfectly to any screen size — you're delivering a broken experience to the majority of your visitors.
        </p>
        <p className="mt-4">
          This isn't just a user experience problem. Google uses mobile-first indexing, which means your mobile site's performance directly affects how you rank on Google.
        </p>

        <p className="font-semibold text-white mt-6 mb-4">Signs your site isn't mobile-ready:</p>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Text is too small to read without zooming</li>
          <li>Buttons are too close together to tap accurately</li>
          <li>Images overflow the screen</li>
          <li>Pop-ups cover the entire screen on mobile</li>
        </ul>

        <hr className="my-10 border-white/10" />

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Mistake 3: No Clear Call-to-Action</h2>
        <p>
          A visitor lands on your homepage. They're interested. Now what?
        </p>
        <p className="mt-4">
          If your website doesn't immediately tell a visitor what to do next — call you, book a consultation, shop your products, fill out a form — they'll leave. Every page on your site should have a clear, visible call-to-action that guides visitors toward a conversion.
        </p>

        <p className="font-semibold text-white mt-6 mb-4">Weak CTAs:</p>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>"Contact us" buried in the footer</li>
          <li>A generic "Learn More" button that goes nowhere useful</li>
          <li>No pricing, no next step, no urgency</li>
        </ul>

        <p className="font-semibold text-white mt-6 mb-4">Strong CTAs:</p>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li><strong className="text-emerald-400">"Book Your Free Strategy Call"</strong> — above the fold, prominent button</li>
          <li><strong className="text-emerald-400">"Get a Custom Quote in 24 Hours"</strong> — specific, valuable, low-risk</li>
          <li><strong className="text-emerald-400">WhatsApp integration</strong> for instant conversations</li>
        </ul>

        <hr className="my-10 border-white/10" />

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Mistake 4: Your Website Doesn't Build Trust</h2>
        <p>
          Online visitors are sceptical. Before they buy from you or reach out, they're looking for proof that you're legitimate, capable, and trustworthy.
        </p>

        <p className="font-semibold text-white mt-6 mb-4">Trust signals your website should have:</p>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Real client testimonials with names and photos</li>
          <li>Case studies showing actual results</li>
          <li>Portfolio or project gallery</li>
          <li>Professional certifications or awards</li>
          <li>Clear contact information (phone, email, address)</li>
          <li>SSL certificate (the padlock in the browser bar)</li>
        </ul>
        <p>
          Without these elements, visitors leave without converting — even if your service is excellent.
        </p>

        <hr className="my-10 border-white/10" />

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Mistake 5: It's Not Designed to Convert</h2>
        <p>
          A beautiful website that doesn't generate leads or sales is just expensive art. Conversion Rate Optimisation (CRO) is the science of designing websites specifically to turn visitors into customers.
        </p>
        <p className="mt-4 mb-4">This includes:</p>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Strategic placement of contact forms</li>
          <li>Persuasive copy that addresses customer pain points</li>
          <li>Social proof positioned near decision points</li>
          <li>Exit-intent strategies to capture leaving visitors</li>
          <li>A/B testing to continuously improve performance</li>
        </ul>

        <hr className="my-10 border-white/10" />

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What a High-Performance Website Looks Like</h2>
        <p className="mb-4">A modern, high-converting business website should:</p>
        <ul className="space-y-2 mb-8">
          <li className="flex items-start"><span className="text-emerald-400 mr-2">✅</span> Load in under 2 seconds on mobile</li>
          <li className="flex items-start"><span className="text-emerald-400 mr-2">✅</span> Be fully responsive on all devices</li>
          <li className="flex items-start"><span className="text-emerald-400 mr-2">✅</span> Have clear, compelling messaging above the fold</li>
          <li className="flex items-start"><span className="text-emerald-400 mr-2">✅</span> Showcase your services and social proof prominently</li>
          <li className="flex items-start"><span className="text-emerald-400 mr-2">✅</span> Make it effortless for visitors to contact you</li>
          <li className="flex items-start"><span className="text-emerald-400 mr-2">✅</span> Be technically optimised for search engines</li>
          <li className="flex items-start"><span className="text-emerald-400 mr-2">✅</span> Include analytics to track visitor behaviour</li>
        </ul>

        <hr className="my-10 border-white/10" />

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">SkillStar Builds Websites That Work</h2>
        <p>
          At SkillStar Digital Solutions, we don't build pretty brochures. We build digital growth engines — websites engineered to attract visitors, build trust, and convert leads into paying customers.
        </p>
        <p className="mt-4">
          Every project we undertake starts with understanding your business goals, your customers, and your competitive landscape. Then we design and build a website that works as hard as you do.
        </p>
        
        <p className="mt-6 mb-8">
          <strong className="text-white">Services include:</strong> Business Websites, E-Commerce Platforms, Landing Pages, SaaS Applications, and Progressive Web Apps.
        </p>

        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/10 text-center">
          <h3 className="text-xl font-bold text-white mb-4">Let's build something that grows your business.</h3>
          <p className="mb-6 text-white/80">Get a free strategy consultation today.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://skillstardigitalsolutions.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-colors">
              Schedule Free Consultation
            </a>
            <a href="mailto:skillstardigitalsolutions@gmail.com" className="bg-white/10 hover:bg-white/20 border border-white/10 text-white font-medium py-3 px-6 rounded-xl transition-colors">
              Email Us
            </a>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-white/40 italic">
          SkillStar Digital Solutions — Engineering Digital Success Beyond Traditional Marketing
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "How AI & Automation Are Changing the Way Businesses Operate in 2026",
    category: "AI & Intelligent Automation",
    author: "SkillStar Digital Solutions",
    excerpt: "A small business owner in 2020 needed a team of 10 to handle what one person with the right AI tools can manage today...",
    readTime: "7 min read",
    content: (
      <div className="prose prose-invert prose-lg max-w-none text-white/80">
        <p className="text-xl leading-relaxed text-white/90 font-medium">
          A small business owner in 2020 needed a team of 10 to handle what one person with the right AI tools can manage today. That's not an exaggeration — it's the reality of where we are in 2025, and the businesses that recognise this are growing faster than ever before.
        </p>
        <p className="mt-6">
          AI and automation are no longer just for large enterprises with massive budgets. Today, businesses of any size can deploy intelligent systems that reduce manual work, improve customer experiences, and drive measurable revenue growth. At SkillStar Digital Solutions, we build these systems for our clients every day.
        </p>
        <p className="mt-4 font-semibold text-white">Here's what you need to know.</p>

        <hr className="my-10 border-white/10" />

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What Business AI Actually Looks Like Today</h2>
        <p className="mb-4">Forget the science fiction version of AI. Practical business AI is already here and it looks like:</p>
        <ul className="list-disc pl-6 space-y-3 mb-8">
          <li><strong className="text-blue-300">A chatbot on your website</strong> that answers customer queries instantly, 24/7, without a human agent</li>
          <li><strong className="text-blue-300">An automated lead qualification system</strong> that scores incoming enquiries and routes them to the right person</li>
          <li><strong className="text-blue-300">A CRM integration</strong> that automatically logs interactions, sends follow-up reminders, and tracks deal progress</li>
          <li><strong className="text-blue-300">Predictive analytics</strong> that tell you which products to stock more of, when customers are likely to churn, or which campaigns are worth scaling</li>
          <li><strong className="text-blue-300">Workflow automation</strong> that eliminates repetitive tasks — data entry, email follow-ups, report generation — so your team can focus on what actually matters</li>
        </ul>

        <hr className="my-10 border-white/10" />

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Real Cost of Not Automating</h2>
        <p>
          Let's be direct. If your team is spending hours every week on tasks that could be automated, you're not just losing time — you're losing money.
        </p>
        <p className="mt-4 mb-6">Consider these common time-drains in a typical business:</p>
        
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 border-b border-white/10">
                <th className="p-4 text-white font-semibold rounded-tl-xl">Task</th>
                <th className="p-4 text-white font-semibold">Manual Time/Week</th>
                <th className="p-4 text-white font-semibold rounded-tr-xl">Automated Time/Week</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 bg-black/20">
              <tr>
                <td className="p-4">Responding to basic customer enquiries</td>
                <td className="p-4 text-red-300">8–12 hours</td>
                <td className="p-4 text-emerald-400 font-medium">Near zero</td>
              </tr>
              <tr>
                <td className="p-4">Following up on leads</td>
                <td className="p-4 text-red-300">5–8 hours</td>
                <td className="p-4 text-emerald-400 font-medium">Near zero</td>
              </tr>
              <tr>
                <td className="p-4">Generating weekly reports</td>
                <td className="p-4 text-red-300">3–5 hours</td>
                <td className="p-4 text-emerald-400 font-medium">Minutes</td>
              </tr>
              <tr>
                <td className="p-4">Social media posting</td>
                <td className="p-4 text-red-300">4–6 hours</td>
                <td className="p-4 text-emerald-400 font-medium">30 minutes planning</td>
              </tr>
              <tr>
                <td className="p-4">Data entry into CRM</td>
                <td className="p-4 text-red-300">4–6 hours</td>
                <td className="p-4 text-emerald-400 font-medium">Near zero</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          That's potentially 24–37 hours per week of recoverable time — time your team could spend on strategy, creativity, and relationship-building that actually requires human judgment.
        </p>

        <hr className="my-10 border-white/10" />

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">AI Chatbots: Your 24/7 Customer Service Team</h2>
        <p className="mb-4">One of the highest-ROI investments any business can make right now is a well-built AI chatbot. Here's why:</p>
        <ul className="list-disc pl-6 space-y-3 mb-6">
          <li><strong className="text-white">Never misses a lead.</strong> A customer visits your website at 11pm and has a question. Without a chatbot, they leave. With one, they get an instant answer and book a consultation.</li>
          <li><strong className="text-white">Consistent quality.</strong> No bad days, no miscommunication, no training required.</li>
          <li><strong className="text-white">Scales infinitely.</strong> Whether you get 10 or 10,000 messages, the experience is identical.</li>
          <li><strong className="text-white">Reduces support costs.</strong> Most businesses find that a well-configured chatbot handles 60–70% of common queries without any human involvement.</li>
        </ul>
        <p>
          At SkillStar, we build custom AI chatbots trained on your business — your services, your FAQs, your tone of voice, your booking flow. Not generic off-the-shelf templates.
        </p>

        <hr className="my-10 border-white/10" />

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Workflow Automation: Eliminating the Tasks You Hate</h2>
        <p>
          Every business has a stack of repetitive, manual processes that nobody enjoys doing but everyone has to. Workflow automation connects your tools and systems so they work together automatically.
        </p>
        <p className="mt-4 font-semibold text-white mb-4">Examples of what we automate for clients:</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start"><span className="text-blue-400 mr-2">⚡</span> <span><strong>New lead from website form</strong> &rarr; automatically added to CRM &rarr; welcome email sent &rarr; sales rep notified on WhatsApp</span></li>
          <li className="flex items-start"><span className="text-blue-400 mr-2">⚡</span> <span><strong>New invoice paid</strong> &rarr; receipt generated and emailed &rarr; accounting sheet updated &rarr; project status changed</span></li>
          <li className="flex items-start"><span className="text-blue-400 mr-2">⚡</span> <span><strong>Social media content calendar</strong> &rarr; posts scheduled and published across platforms &rarr; performance report generated weekly</span></li>
        </ul>
        <p>
          These aren't hypothetical examples. These are real systems we've built that save our clients hours every single week.
        </p>

        <hr className="my-10 border-white/10" />

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Predictive Analytics: Making Smarter Business Decisions</h2>
        <p>
          Data is everywhere. The problem most businesses have is not a lack of data — it's knowing what to do with it. Predictive analytics systems use AI to analyse your historical data and surface actionable insights.
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
          <li>Which of your customers are likely to buy again in the next 30 days?</li>
          <li>Which of your ad campaigns is driving actual revenue (not just clicks)?</li>
          <li>What's your projected revenue for next quarter based on current pipeline?</li>
        </ul>
        <p>
          When you have answers to these questions, you stop guessing and start making decisions backed by intelligence.
        </p>

        <hr className="my-10 border-white/10" />

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Is Your Business Ready for AI?</h2>
        <p>
          You don't need to overhaul everything overnight. The best approach is to start with the highest-impact, lowest-complexity automation first — typically a customer-facing chatbot or a lead management workflow — and build from there.
        </p>
        <p className="mt-4">
          At SkillStar Digital Solutions, we start every AI engagement with a business audit to identify exactly where automation will have the greatest impact for your specific situation.
        </p>

        <div className="bg-white/5 rounded-2xl p-6 mt-8 mb-8 border border-white/10">
          <h3 className="text-lg font-bold text-white mb-4">What we build:</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span>AI Chatbots & Virtual Assistants</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              <span>CRM Integrations & Workflow Automation</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <span>Predictive Analytics Dashboards</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-pink-500"></div>
              <span>Custom AI Tools for Business-Specific Needs</span>
            </div>
          </div>
        </div>

        <p className="text-xl text-center text-white font-bold my-8">
          The businesses that invest in AI today will be the ones that dominate their markets tomorrow.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <a href="https://skillstardigitalsolutions.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-colors text-center">
            Talk to us about AI for your business
          </a>
          <a href="mailto:skillstardigitalsolutions@gmail.com" className="bg-white/10 hover:bg-white/20 border border-white/10 text-white font-medium py-3 px-6 rounded-xl transition-colors text-center">
            Email Us
          </a>
        </div>

        <div className="mt-12 text-center text-sm text-white/40 italic">
          SkillStar Digital Solutions — Engineering Digital Success Beyond Traditional Marketing
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "Why Your Brand Identity Is Either Building Trust or Destroying It",
    category: "Branding & Creative Solutions",
    author: "SkillStar Digital Solutions",
    excerpt: "Before a potential customer reads a single word about your business, they've already formed an opinion. Your logo, your colour palette...",
    readTime: "5 min read",
    content: (
      <div className="prose prose-invert prose-lg max-w-none text-white/80">
        <p className="text-xl leading-relaxed text-white/90 font-medium">
          Before a potential customer reads a single word about your business, they've already formed an opinion. Your logo, your colour palette, your typography, the way your social media looks — all of it communicates something. The question is: what is it saying?
        </p>
        <p className="mt-6">
          A strong brand identity builds trust, commands authority, and makes your business instantly recognisable. A weak or inconsistent brand does the opposite — it signals that you're amateur, untrustworthy, or simply not worth paying attention to.
        </p>
        <p className="mt-4">
          At SkillStar Digital Solutions, brand identity is one of the most transformative services we offer. Here's why it matters more than most businesses realise.
        </p>

        <hr className="my-10 border-white/10" />

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Branding is Not Just a Logo</h2>
        <p>
          This is the most common misconception in business. A logo is one element of your brand — it's the tip of the iceberg.
        </p>
        <p className="mt-4 font-semibold text-white mb-4">Your complete brand identity includes:</p>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li><strong className="text-blue-300">Logo & Logo Variations</strong> — Primary, secondary, icon-only, dark and light versions</li>
          <li><strong className="text-blue-300">Colour Palette</strong> — Primary, secondary, and accent colours with specific hex/RGB values</li>
          <li><strong className="text-blue-300">Typography System</strong> — Heading fonts, body fonts, and hierarchy rules</li>
          <li><strong className="text-blue-300">Brand Voice & Tone</strong> — How you write, the words you use, the personality you project</li>
          <li><strong className="text-blue-300">Visual Language</strong> — Photography style, illustration style, graphic elements</li>
          <li><strong className="text-blue-300">Brand Guidelines Document</strong> — The rulebook that ensures everything stays consistent</li>
        </ul>
        <p>
          Without all of these, your brand will look different on Instagram vs. your website vs. your printed materials — and that inconsistency erodes trust.
        </p>

        <hr className="my-10 border-white/10" />

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Psychology of Visual Branding</h2>
        <p>
          Design is not decoration. Every visual decision triggers a psychological response in your audience.
        </p>
        
        <h3 className="text-xl font-bold text-white mt-8 mb-4">Colour psychology in branding:</h3>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li><span className="text-blue-400 font-bold">Blue</span> signals trust, professionalism, and reliability (banks, tech companies, healthcare)</li>
          <li><span className="text-green-400 font-bold">Green</span> signals growth, health, and sustainability (wellness brands, eco companies)</li>
          <li><span className="text-orange-400 font-bold">Orange</span> signals energy, enthusiasm, and creativity (startups, food brands)</li>
          <li><span className="text-gray-400 font-bold">Black</span> signals luxury, sophistication, and authority (premium brands, fashion)</li>
          <li><span className="text-red-400 font-bold">Red</span> signals urgency, passion, and excitement (retail, food, entertainment)</li>
        </ul>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">Typography signals:</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong className="text-white">Serif fonts</strong> (Times, Georgia) feel established, traditional, and trustworthy</li>
          <li><strong className="text-white">Sans-serif fonts</strong> (Arial, Helvetica) feel clean, modern, and accessible</li>
          <li><strong className="text-white">Custom or display fonts</strong> feel distinctive and memorable — when used correctly</li>
        </ul>
        <p>
          When your visual choices align with your positioning, your brand communicates at a level that words alone cannot.
        </p>

        <hr className="my-10 border-white/10" />

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Brand Consistency = Revenue</h2>
        <p>
          This isn't just a creative principle — it's backed by data. Research by Lucidpress found that consistent brand presentation across all platforms increases revenue by up to 23%. The reason is simple: familiarity breeds trust, and trust drives purchasing decisions.
        </p>
        <p className="mt-4">
          When your brand looks the same — and equally professional — across your website, social media, packaging, presentations, and advertisements, you build recognition. Recognition builds familiarity. Familiarity builds trust. Trust converts.
        </p>

        <hr className="my-10 border-white/10" />

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Signs Your Brand Identity Needs Work</h2>
        <p className="mb-4 font-semibold text-white">Your brand is hurting you if:</p>
        <ul className="space-y-3 mb-8">
          <li className="flex items-start"><span className="text-red-400 mr-2">❌</span> Your logo was made on a free tool and looks dated or generic</li>
          <li className="flex items-start"><span className="text-red-400 mr-2">❌</span> Your colours and fonts are different on your website vs. your Instagram vs. your brochure</li>
          <li className="flex items-start"><span className="text-red-400 mr-2">❌</span> You feel embarrassed showing your business card or social profile to premium clients</li>
          <li className="flex items-start"><span className="text-red-400 mr-2">❌</span> Customers can't immediately understand what you do and who you serve</li>
          <li className="flex items-start"><span className="text-red-400 mr-2">❌</span> You look smaller or less professional than your actual competitors</li>
          <li className="flex items-start"><span className="text-red-400 mr-2">❌</span> You've rebranded multiple times without it feeling right</li>
        </ul>
        <p>Any one of these signals that your brand is working against you, not for you.</p>

        <hr className="my-10 border-white/10" />

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What a Strong Brand Does for Your Business</h2>
        <p className="mb-6">When your brand identity is built correctly, here's what changes:</p>
        <div className="space-y-6 mb-8">
          <div>
            <strong className="text-white text-lg">1. Premium positioning.</strong>
            <p className="mt-1">A polished brand lets you charge more. Customers will pay a premium for businesses that look premium.</p>
          </div>
          <div>
            <strong className="text-white text-lg">2. Instant recognition.</strong>
            <p className="mt-1">Consistent visual identity means customers remember you. When they're ready to buy, they think of you first.</p>
          </div>
          <div>
            <strong className="text-white text-lg">3. Credibility with bigger clients.</strong>
            <p className="mt-1">Enterprise-level clients evaluate your brand before they evaluate your proposal. A weak brand loses the deal before the conversation starts.</p>
          </div>
          <div>
            <strong className="text-white text-lg">4. Employee and team pride.</strong>
            <p className="mt-1">Your team is more motivated when the brand they represent looks world-class.</p>
          </div>
          <div>
            <strong className="text-white text-lg">5. Marketing effectiveness.</strong>
            <p className="mt-1">Every piece of marketing — ads, posts, emails — performs better when the creative is professional and on-brand.</p>
          </div>
        </div>

        <hr className="my-10 border-white/10" />

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The SkillStar Approach to Branding</h2>
        <p>
          Our branding process starts with understanding your business at a deep level — your audience, your competitive landscape, your values, and where you want to go. We then craft a visual identity that doesn't just look good, but strategically positions you for growth.
        </p>
        
        <p className="mt-6 mb-4 font-semibold text-white">Our branding services include:</p>
        <div className="grid sm:grid-cols-2 gap-3 mb-8">
          <div className="bg-white/5 p-3 rounded-lg border border-white/10 text-center text-sm">Logo Design & Brand Identity System</div>
          <div className="bg-white/5 p-3 rounded-lg border border-white/10 text-center text-sm">Brand Guidelines & Style Guide</div>
          <div className="bg-white/5 p-3 rounded-lg border border-white/10 text-center text-sm">Motion Graphics & Animated Logo</div>
          <div className="bg-white/5 p-3 rounded-lg border border-white/10 text-center text-sm">Social Media Creative Templates</div>
          <div className="bg-white/5 p-3 rounded-lg border border-white/10 text-center text-sm">Corporate Presentation Design</div>
          <div className="bg-white/5 p-3 rounded-lg border border-white/10 text-center text-sm">Packaging Design</div>
          <div className="bg-white/5 p-3 rounded-lg border border-white/10 text-center text-sm sm:col-span-2">Complete Brand Refresh for Existing Businesses</div>
        </div>
        
        <p className="text-center font-medium">
          Whether you're launching a new business or rebranding an established one, we build identities that make your market take notice.
        </p>
        
        <p className="text-xl text-center text-white font-bold my-8">
          Your brand is speaking right now. Make sure it's saying the right things.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <a href="https://skillstardigitalsolutions.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-colors text-center">
            Start Your Brand Project
          </a>
          <a href="mailto:skillstardigitalsolutions@gmail.com" className="bg-white/10 hover:bg-white/20 border border-white/10 text-white font-medium py-3 px-6 rounded-xl transition-colors text-center">
            Email Us
          </a>
        </div>

        <div className="mt-12 text-center text-sm text-white/40 italic">
          SkillStar Digital Solutions — Engineering Digital Success Beyond Traditional Marketing
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "The Complete Digital Growth Blueprint for Small & Medium Businesses in 2026",
    category: "Digital Strategy & Business Growth",
    author: "SkillStar Digital Solutions",
    excerpt: "Growing a business online in 2025 is both easier and harder than it's ever been. We break down the complete digital ecosystem.",
    readTime: "8 min read",
    content: (
      <div className="prose prose-invert prose-lg max-w-none text-white/80">
        <p className="text-xl leading-relaxed text-white/90 font-medium">
          Growing a business online in 2025 is both easier and harder than it's ever been. Easier, because the tools available to small and medium businesses today are more powerful than what Fortune 500 companies had a decade ago. Harder, because every one of your competitors has access to those same tools, and the bar for what customers expect has never been higher.
        </p>
        <p className="mt-6">
          So how do you build sustainable, scalable digital growth? Not through a single tactic or a one-time campaign, but through a complete digital ecosystem where every element works together. This is exactly what we build at SkillStar Digital Solutions.
        </p>
        <p className="mt-4 text-white font-bold text-xl">Here's the blueprint.</p>

        <hr className="my-10 border-white/10" />

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Layer 1: Foundation — Your Brand & Website</h2>
        <p>
          Before you spend a single rupee on advertising or SEO, your foundation needs to be right. Every other growth activity will underperform if this layer is weak.
        </p>
        
        <h3 className="text-xl font-bold text-white mt-8 mb-3">Brand Identity</h3>
        <p>
          Your brand must communicate trust and professionalism before a customer interacts with you. A premium logo, consistent colour palette, clear messaging, and strong visual identity are non-negotiable for serious growth.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-3">Website</h3>
        <p className="mb-4">Your website is your most important digital asset. It needs to:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Load in under 2 seconds on mobile</li>
          <li>Clearly communicate your value proposition in the first 5 seconds</li>
          <li>Have compelling, specific calls-to-action</li>
          <li>Showcase social proof (testimonials, case studies, client logos)</li>
          <li>Be technically sound for SEO (proper structure, schema, metadata)</li>
        </ul>
        <p>
          Without a strong foundation, everything else you build on top of it leaks. Leads arrive and don't convert. Ad spend is wasted. SEO rankings don't translate into revenue.
        </p>

        <hr className="my-10 border-white/10" />

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Layer 2: Visibility — SEO, GEO & AEO</h2>
        <p>
          Once your foundation is solid, the next layer is making sure the right people can find you.
        </p>
        <div className="space-y-6 mt-6">
          <div>
            <strong className="text-white text-lg text-blue-300">Traditional SEO</strong>
            <p className="mt-1">Puts you on Google when people search for your services. Local SEO gets you in front of nearby customers actively looking for what you offer right now. These are not quick wins — SEO compounds over 3 to 12 months — but the ROI is exceptional because organic traffic doesn't stop when you stop paying for it.</p>
          </div>
          <div>
            <strong className="text-white text-lg text-purple-400">GEO (Generative Engine Optimisation)</strong>
            <p className="mt-1">Ensures your business appears in AI-generated answers on platforms like ChatGPT, Gemini, and Perplexity. This is the frontier of search visibility and most of your competitors aren't investing in it yet — making now the perfect time to move.</p>
          </div>
          <div>
            <strong className="text-white text-lg text-emerald-400">AEO (Answer Engine Optimisation)</strong>
            <p className="mt-1">Captures zero-click searches and voice search queries through featured snippets and structured data. When someone asks Google or Siri a question and your content is the direct answer, you've won premium visibility without a single click required.</p>
          </div>
        </div>

        <hr className="my-10 border-white/10" />

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Layer 3: Acquisition — Performance Marketing</h2>
        <p>
          SEO builds long-term visibility. Performance marketing generates immediate, scalable lead flow.
        </p>
        <ul className="list-disc pl-6 space-y-4 mt-6 mb-6">
          <li><strong className="text-white">Google Ads</strong> captures intent — people actively searching for your services and ready to buy. With the right campaign structure, keyword targeting, and landing page, Google Ads delivers highly qualified leads at a predictable cost.</li>
          <li><strong className="text-white">Meta Ads (Facebook & Instagram)</strong> build awareness and demand. They're exceptional for reaching your target audience by demographics, interests, and behaviour — even before they know they need what you offer.</li>
          <li><strong className="text-white">Retargeting</strong> is often overlooked but delivers some of the highest ROI of any channel. Most website visitors don't convert on their first visit. Retargeting ads follow these warm prospects and bring them back when they're ready to decide.</li>
        </ul>
        <p>
          The key to performance marketing is rigorous tracking. Every ad must be connected to actual business outcomes — phone calls, form submissions, sales — not just clicks and impressions.
        </p>

        <hr className="my-10 border-white/10" />

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Layer 4: Retention — AI, Automation & CRM</h2>
        <p>
          Acquiring a new customer costs 5 to 7 times more than retaining an existing one. Yet most businesses invest almost entirely in acquisition and almost nothing in retention. This is a major missed opportunity.
        </p>
        <div className="space-y-6 mt-6">
          <div>
            <strong className="text-white text-lg">CRM (Customer Relationship Management)</strong>
            <p className="mt-1">Systems give you a complete view of every customer interaction. When properly set up, your CRM tells you who to follow up with, when to re-engage, and which customers are most valuable.</p>
          </div>
          <div>
            <strong className="text-white text-lg">Marketing Automation</strong>
            <p className="mt-1">Keeps your business top-of-mind without manual effort. Welcome sequences, follow-up emails, appointment reminders, re-engagement campaigns — these run automatically and consistently, generating revenue while you focus on running your business.</p>
          </div>
          <div>
            <strong className="text-white text-lg">AI Chatbots</strong>
            <p className="mt-1">Handle customer enquiries 24/7, qualify leads, and deliver personalised responses — dramatically improving the speed and quality of your customer experience.</p>
          </div>
        </div>

        <hr className="my-10 border-white/10" />

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Layer 5: Analytics — Making Data-Driven Decisions</h2>
        <p>
          All of this activity generates data. The businesses that win are the ones that actually use it.
        </p>
        <p className="mt-4 font-semibold text-white mb-4">Your analytics setup should tell you:</p>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Which marketing channels are driving actual revenue (not just traffic)</li>
          <li>Where visitors are dropping off on your website</li>
          <li>Which customer segments are most valuable</li>
          <li>What content is building authority and what isn't</li>
          <li>What your projected growth looks like based on current trends</li>
        </ul>
        <p>
          With the right dashboards and reporting in place, every decision you make is backed by evidence rather than guesswork.
        </p>

        <hr className="my-10 border-white/10" />

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Complete Digital Ecosystem</h2>
        <p className="mb-6">Here's how all five layers work together:</p>
        
        <div className="bg-[#0B1120] border border-white/10 rounded-2xl p-6 md:p-10 mb-8 max-w-2xl mx-auto shadow-xl">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="bg-blue-600/20 border border-blue-500/30 text-blue-300 py-3 px-6 rounded-xl w-full">
              <span className="font-bold">Brand & Website</span> (Foundation)
            </div>
            <div className="text-white/30">↓</div>
            <div className="bg-purple-600/20 border border-purple-500/30 text-purple-300 py-3 px-6 rounded-xl w-full">
              <span className="font-bold">SEO / GEO / AEO</span> (Visibility) + <span className="font-bold">Performance Marketing</span> (Acquisition)
            </div>
            <div className="text-white/30">↓</div>
            <div className="text-white font-medium py-2">
              Visitors & Leads
            </div>
            <div className="text-white/30">↓</div>
            <div className="bg-emerald-600/20 border border-emerald-500/30 text-emerald-300 py-3 px-6 rounded-xl w-full">
              <span className="font-bold">AI Chatbot + CRM + Automation</span> (Conversion & Retention)
            </div>
            <div className="text-white/30">↓</div>
            <div className="text-white font-medium py-2">
              Customers & Revenue
            </div>
            <div className="text-white/30">↓</div>
            <div className="bg-pink-600/20 border border-pink-500/30 text-pink-300 py-3 px-6 rounded-xl w-full">
              <span className="font-bold">Analytics</span> (Continuous Improvement)
            </div>
            <div className="text-white/30">↓</div>
            <div className="text-white font-bold text-xl py-2 drop-shadow-md">
              Scalable, Compounding Growth
            </div>
          </div>
        </div>

        <p>
          When each layer is built properly and connected intelligently, the whole system performs exponentially better than any single piece in isolation.
        </p>

        <hr className="my-10 border-white/10" />

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Where Should You Start?</h2>
        <p>
          If you're just beginning your digital growth journey, start with your foundation — brand and website — and layer in SEO immediately. Add performance marketing once your organic presence is building, then invest in AI and automation as your lead volume grows.
        </p>
        <p className="mt-4">
          If you're an established business looking to scale, an audit of your current digital ecosystem often reveals significant gaps and quick wins that can have immediate impact.
        </p>
        <p className="mt-4 mb-8">
          At SkillStar Digital Solutions, we've engineered digital growth systems for businesses across healthcare, retail, wellness, e-commerce, and professional services. We understand that every business is different — and we build systems tailored to your goals, your audience, and your market.
        </p>

        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/10 text-center">
          <h3 className="text-xl font-bold text-white mb-4">Ready to engineer your growth?</h3>
          <p className="mb-6 text-white/80">Book a free strategy consultation — we'll audit your current digital presence and show you exactly where the biggest opportunities lie.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://skillstardigitalsolutions.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-colors">
              Book a Free Strategy Consultation
            </a>
            <a href="mailto:skillstardigitalsolutions@gmail.com" className="bg-white/10 hover:bg-white/20 border border-white/10 text-white font-medium py-3 px-6 rounded-xl transition-colors">
              Email Us
            </a>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-white/40 italic">
          SkillStar Digital Solutions — Transforming Brands. Accelerating Growth. Engineering the Future.
        </div>
      </div>
    )
  }
];

const hoverStyles = [
  {
    border: "hover:border-blue-500/30",
    shadow: "hover:shadow-blue-500/10",
    gradient: "from-blue-600/10 to-cyan-600/5",
    text: "group-hover:text-blue-400",
    badge: "bg-blue-500/10 text-blue-400"
  },
  {
    border: "hover:border-emerald-500/30",
    shadow: "hover:shadow-emerald-500/10",
    gradient: "from-emerald-600/10 to-teal-600/5",
    text: "group-hover:text-emerald-400",
    badge: "bg-emerald-500/10 text-emerald-400"
  },
  {
    border: "hover:border-purple-500/30",
    shadow: "hover:shadow-purple-500/10",
    gradient: "from-purple-600/10 to-fuchsia-600/5",
    text: "group-hover:text-purple-400",
    badge: "bg-purple-500/10 text-purple-400"
  },
  {
    border: "hover:border-amber-500/30",
    shadow: "hover:shadow-amber-500/10",
    gradient: "from-amber-600/10 to-orange-600/5",
    text: "group-hover:text-amber-400",
    badge: "bg-amber-500/10 text-amber-400"
  },
  {
    border: "hover:border-pink-500/30",
    shadow: "hover:shadow-pink-500/10",
    gradient: "from-pink-600/10 to-rose-600/5",
    text: "group-hover:text-pink-400",
    badge: "bg-pink-500/10 text-pink-400"
  }
];

const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  // Disable body scroll when modal is open
  React.useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedPost]);

  return (
    <section className="container mx-auto px-6 md:px-12 lg:px-24">
      {/* Header section for Blogs */}
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Latest Insights</h2>
        <p className="text-white/60">Explore our expert articles on digital marketing, SEO, and business growth.</p>
      </div>

      {/* Mobile Swipe Indicator */}
      <div className="flex md:hidden justify-center items-center gap-2 mb-4 text-white/40 text-xs">
        <span>Swipe to view more</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce-horizontal">
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </div>

      {/* Grid of Blog Cards */}
      <div className="flex overflow-x-auto md:grid md:grid-cols-3 lg:grid-cols-5 gap-4 pb-4 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        {blogPosts.map((post, index) => {
          const style = hoverStyles[index % hoverStyles.length];
          return (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "300px" }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedPost(post)}
              className={`shrink-0 w-[75vw] max-w-[280px] md:max-w-none md:w-auto snap-center group relative bg-[#0F172A] border border-white/5 rounded-2xl p-5 cursor-pointer overflow-hidden flex flex-col justify-between h-56 transition-all duration-300 shadow-lg ${style.border} ${style.shadow}`}
            >
              {/* Background glowing gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${style.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
              
              <div className="relative z-10">
                <span className={`inline-block px-2 py-1 rounded text-[10px] uppercase tracking-wider font-bold mb-3 line-clamp-1 ${style.badge}`}>
                  {post.category}
                </span>
                <h3 className={`text-sm font-bold text-white leading-snug transition-colors line-clamp-3 ${style.text}`}>
                  {post.title}
                </h3>
              </div>
              
              <div className="relative z-10 mt-auto flex items-center justify-between border-t border-white/5 pt-3">
                <div className="text-[10px] text-white/40 font-medium uppercase tracking-widest">
                  {post.readTime}
                </div>
                <div className={`flex items-center text-xs font-semibold group-hover:translate-x-1 transition-transform ${style.text.replace('group-hover:', '')}`}>
                  Read
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Full-screen Modal for Blog Detail */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedPost && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-6 lg:p-12 bg-black/60 backdrop-blur-xl overflow-y-auto"
              onClick={() => setSelectedPost(null)}
            >
              <motion.div
                initial={{ y: 50, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 20, opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-[#0B1120] border border-white/10 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
                data-lenis-prevent
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedPost(null)}
                  className="sticky top-4 right-4 ml-auto flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors z-10"
                >
                  <X size={20} />
                </button>

                <div className="px-6 pb-12 md:px-12">
                  <header className="mb-10 border-b border-white/10 pb-8 mt-4">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                      {selectedPost.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-3 text-sm md:text-base font-medium">
                      <span className="text-blue-400">By {selectedPost.author}</span>
                      <span className="hidden md:inline text-white/30">|</span>
                      <span className="text-emerald-400">{selectedPost.category}</span>
                    </div>
                  </header>

                  <div className="relative">
                    {/* Optional Modal decorative glows */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none"></div>
                    
                    <div className="relative z-10">
                      {selectedPost.content}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};

export default BlogSection;
