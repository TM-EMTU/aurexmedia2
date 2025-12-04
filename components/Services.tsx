import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { TrendingUp, Globe, Video, MousePointerClick, Bot, LineChart, ArrowRight, X, CheckCircle2 } from 'lucide-react';

const services = [
  {
    id: 'smm',
    title: 'Social Media Management',
    desc: 'Algorithm mastery that builds unbreakable trust.',
    icon: TrendingUp,
    color: 'from-purple-900 to-blue-900',
    image: '/images/smm.png',
    process: [
      { title: 'Audit & Strategy', desc: 'We analyze your current presence and define clear KPIs.' },
      { title: 'Content Calendar', desc: 'Planning high-impact content aligned with trends.' },
      { title: 'Community Management', desc: 'Active engagement to build a loyal tribe.' },
      { title: 'Analytics & Optimization', desc: 'Weekly reports and strategy refinement.' }
    ]
  },
  {
    id: 'perf',
    title: 'Performance Marketing',
    desc: 'Data-backed campaigns that convert clicks to revenue.',
    icon: MousePointerClick,
    color: 'from-green-900 to-emerald-900',
    image: '/images/perf.png',
    process: [
      { title: 'Audience Research', desc: 'Deep dive into customer demographics and behaviors.' },
      { title: 'Creative Testing', desc: 'A/B testing ad visuals and copy for maximum ROI.' },
      { title: 'Campaign Launch', desc: 'Strategic deployment across high-value channels.' },
      { title: 'Scaling', desc: 'Doubling down on winning strategies to boost revenue.' }
    ]
  },
  {
    id: 'web',
    title: 'Website Development',
    desc: 'Bespoke digital experiences with <1.5s load times.',
    icon: Globe,
    color: 'from-blue-500 to-indigo-900',
    image: '/images/web.png',
    process: [
      { title: 'Discovery', desc: 'Understanding your brand identity and functional needs.' },
      { title: 'UX/UI Design', desc: 'Creating wireframes and high-fidelity prototypes.' },
      { title: 'Development', desc: 'Clean, semantic code optimized for speed and SEO.' },
      { title: 'Launch & Support', desc: 'Seamless deployment and ongoing maintenance.' }
    ]
  },
  {
    id: 'content',
    title: 'Content Creation',
    desc: 'Viral reels and visuals that stop the scroll.',
    icon: Video,
    color: 'from-gray-800 to-neutral-900',
    image: '/images/content.png',
    process: [
      { title: 'Concept Ideation', desc: 'Brainstorming hooks and visual narratives.' },
      { title: 'Production', desc: 'Professional filming with high-end equipment.' },
      { title: 'Post-Production', desc: 'Editing, color grading, and sound design.' },
      { title: 'Distribution', desc: 'Optimizing formats for different platforms.' }
    ]
  },
  {
    id: 'ai',
    title: 'AI Automation for Business',
    desc: 'Streamline operations with intelligent automated workflows.',
    icon: Bot,
    color: 'from-slate-800 to-slate-900',
    image: '/images/ai.png',
    process: [
      { title: 'Workflow Analysis', desc: 'Identifying bottlenecks in your operations.' },
      { title: 'Solution Design', desc: 'Architecting custom AI agents and automations.' },
      { title: 'Integration', desc: 'Seamlessly connecting with your existing stack.' },
      { title: 'Training', desc: 'Empowering your team to leverage new tools.' }
    ]
  },
  {
    id: 'growth',
    title: 'Business Growth Instructor',
    desc: 'Expert guidance to scale your business to new heights.',
    icon: LineChart,
    color: 'from-amber-950 to-stone-900',
    image: '/images/growth.png',
    process: [
      { title: 'Assessment', desc: 'Holistic review of your business model.' },
      { title: 'Goal Setting', desc: 'Defining ambitious yet achievable milestones.' },
      { title: 'Strategy Roadmap', desc: 'Step-by-step plan to reach your targets.' },
      { title: 'Accountability', desc: 'Regular check-ins to ensure you stay on track.' }
    ]
  }
];

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-32 bg-obsidian relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-24 md:flex justify-between items-end border-b border-white/10 pb-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-4"
            >
              Our Expertise
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display text-5xl md:text-7xl text-white font-bold"
            >
              DOMINATE<br />YOUR NICHE
            </motion.h3>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 max-w-md mt-8 md:mt-0 text-lg"
          >
            We don't just post. We architect digital dominance through precision and creativity.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onSelect={() => setSelectedService(service)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

const ServiceCard: React.FC<{ service: any; index: number; onSelect: () => void }> = ({ service, index, onSelect }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { amount: 0.6 });
  const [isTouch, setIsTouch] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia('(hover: none), (pointer: coarse)');
    const update = () => setIsTouch(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!isTouch) {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      setIsActive(false);
      return;
    }

    if (inView) {
      setIsActive(true);
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
      timerRef.current = window.setTimeout(() => {
        setIsActive(false);
        timerRef.current = null;
      }, 2000);
    } else {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      setIsActive(false);
    }

    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isTouch, inView]);

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="group relative h-[500px] w-full cursor-pointer"
      onClick={onSelect}
    >
      <div className={`p-[1px] rounded-3xl bg-gradient-to-br ${isActive ? 'from-gold-500/40 via-gold-500/20 to-transparent' : 'from-white/10 via-white/5 to-transparent'} group-hover:from-gold-500/40 group-hover:via-gold-500/20 group-hover:to-transparent transition-colors duration-500 h-full`}>
        <div className="relative h-full rounded-3xl overflow-hidden bg-neutral-900">
          {/* Image Background */}
          <img src={service.image} alt={service.title} className={`absolute inset-0 w-full h-full object-cover opacity-50 scale-100 transition-transform duration-700 ease-out ${isActive ? 'opacity-100 scale-105' : ''} group-hover:scale-105`} />

          {/* Hover Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 ${isActive ? 'opacity-40' : ''} group-hover:opacity-40 transition-opacity duration-500`} />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-sm transition-colors duration-300 ${isActive ? 'bg-gold-500 text-black' : 'bg-white/5'} group-hover:bg-gold-500 group-hover:text-black`}>
              <service.icon size={32} />
            </div>

            <div>
              <h4 className={`font-display text-4xl font-bold text-white mb-4 transition-transform duration-300 ${isActive ? 'translate-x-1' : ''} group-hover:translate-x-1`}>
                {service.title}
              </h4>
              <p className={`text-gray-300 text-lg border-l-2 pl-4 transition-all duration-300 ${isActive ? 'border-gold-500' : 'border-white/10'} group-hover:border-gold-500`}>
                {service.desc}
              </p>
            </div>

            <div className={`flex items-center gap-3 opacity-0 translate-y-1 transition-all duration-300 ${isActive ? 'opacity-100 translate-y-0' : ''} group-hover:opacity-100 group-hover:translate-y-0`}>
              <span className="text-gold-500 font-bold uppercase tracking-wider text-sm">Explore Service</span>
              <ArrowRight className="h-4 w-4 text-gold-500" />
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -inset-1 pointer-events-none">
            <div className={`absolute left-[-30%] top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 translate-x-[-120%] transition-all duration-700 ${isActive ? 'opacity-100 translate-x-[130%]' : ''} group-hover:opacity-100 group-hover:translate-x-[130%]`} />
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const ServiceModal: React.FC<{ service: any; onClose: () => void }> = ({ service, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />

      <motion.div
        layoutId={`service-${service.id}`}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative w-full max-w-4xl bg-neutral-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-10 max-h-[90vh] flex flex-col"
      >
        {/* Header Image Area */}
        <div className="relative h-48 md:h-64 shrink-0">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-60`} />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white transition-colors border border-white/10"
          >
            <X size={24} />
          </button>

          <div className="absolute bottom-6 left-6 md:left-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-gold-500 rounded-lg text-black">
                <service.icon size={20} />
              </div>
              <span className="text-gold-500 font-bold tracking-widest uppercase text-xs md:text-sm">Service Details</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">{service.title}</h2>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 md:p-10 overflow-y-auto custom-scrollbar">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-gold-500 rounded-full" />
                What We Do
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {service.desc} We leverage cutting-edge strategies and tools to ensure your brand doesn't just compete, but dominates the market. Our approach is tailored, data-driven, and focused on tangible ROI.
              </p>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                <h4 className="text-white font-bold mb-3">Why Choose Us?</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-400 text-sm">
                    <CheckCircle2 size={16} className="text-gold-500 shrink-0 mt-0.5" />
                    <span>Proven track record of success in this niche.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400 text-sm">
                    <CheckCircle2 size={16} className="text-gold-500 shrink-0 mt-0.5" />
                    <span>Dedicated team of experts assigned to your project.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400 text-sm">
                    <CheckCircle2 size={16} className="text-gold-500 shrink-0 mt-0.5" />
                    <span>24/7 support and transparent reporting.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-gold-500 rounded-full" />
                How We Work
              </h3>
              <div className="space-y-6">
                {service.process?.map((step: any, idx: number) => (
                  <div key={idx} className="relative pl-8 border-l border-white/10 last:border-0 pb-6 last:pb-0">
                    <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-gold-500 ring-4 ring-neutral-900" />
                    <h4 className="text-white font-bold text-lg mb-1">{step.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 flex justify-end">
            <button
              onClick={onClose}
              className="px-8 py-3 bg-gold-500 hover:bg-gold-400 text-black font-bold rounded-xl transition-colors"
            >
              Got it
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};