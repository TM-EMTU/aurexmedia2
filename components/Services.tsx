import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Globe, Video, MousePointerClick, Bot, LineChart, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'smm',
    title: 'Social Media Management',
    desc: 'Algorithm mastery that builds unbreakable trust.',
    icon: TrendingUp,
    color: 'from-purple-900 to-blue-900',
    image: '/images/smm.png'
  },
  {
    id: 'perf',
    title: 'Performance Marketing',
    desc: 'Data-backed campaigns that convert clicks to revenue.',
    icon: MousePointerClick,
    color: 'from-green-900 to-emerald-900',
    image: '/images/perf.png'
  },
  {
    id: 'web',
    title: 'Website Development',
    desc: 'Bespoke digital experiences with <1.5s load times.',
    icon: Globe,
    color: 'from-blue-500 to-indigo-900',
    image: '/images/web.png'
  },
  {
    id: 'content',
    title: 'Content Creation',
    desc: 'Viral reels and visuals that stop the scroll.',
    icon: Video,
    color: 'from-gray-800 to-neutral-900',
    image: '/images/content.png'
  },
  {
    id: 'ai',
    title: 'AI Automation for Business',
    desc: 'Streamline operations with intelligent automated workflows.',
    icon: Bot,
    color: 'from-slate-800 to-slate-900',
    image: '/images/ai.png'
  },
  {
    id: 'growth',
    title: 'Business Growth Instructor',
    desc: 'Expert guidance to scale your business to new heights.',
    icon: LineChart,
    color: 'from-amber-950 to-stone-900',
    image: '/images/growth.png'
  }
];

export const Services: React.FC = () => {
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
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard: React.FC<{ service: any; index: number }> = ({ service, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="group relative h-[500px] w-full"
    >
      <div className="p-[1px] rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent group-hover:from-gold-500/40 group-hover:via-gold-500/20 group-hover:to-transparent transition-colors duration-500 h-full">
        <div className="relative h-full rounded-3xl overflow-hidden bg-neutral-900">
          {/* Image Background */}
          <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover opacity-50 scale-100 group-hover:scale-105 transition-transform duration-700 ease-out" />

          {/* Hover Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:bg-gold-500 group-hover:text-black transition-colors duration-300">
              <service.icon size={32} />
            </div>

            <div>
              <h4 className="font-display text-4xl font-bold text-white mb-4 group-hover:translate-x-1 transition-transform duration-300">
                {service.title}
              </h4>
              <p className="text-gray-300 text-lg border-l-2 border-white/10 pl-4 group-hover:border-gold-500 transition-all duration-300">
                {service.desc}
              </p>
            </div>

            <div className="flex items-center gap-3 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <span className="text-gold-500 font-bold uppercase tracking-wider text-sm">Explore Service</span>
              <ArrowRight className="h-4 w-4 text-gold-500" />
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -inset-1 pointer-events-none">
            <div className="absolute left-[-30%] top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 translate-x-[-120%] group-hover:opacity-100 group-hover:translate-x-[130%] transition-all duration-700" />
          </div>
        </div>
      </div>
    </motion.article>
  );
};