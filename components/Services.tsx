import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { TrendingUp, Globe, Video, MousePointerClick } from 'lucide-react';

const services = [
  {
    id: 'smm',
    title: 'Social Media Management',
    desc: 'Algorithm mastery that builds unbreakable trust.',
    icon: TrendingUp,
    color: 'from-purple-900 to-blue-900'
  },
  {
    id: 'perf',
    title: 'Performance Marketing',
    desc: 'Data-backed campaigns that convert clicks to revenue.',
    icon: MousePointerClick,
    color: 'from-green-900 to-emerald-900'
  },
  {
    id: 'web',
    title: 'Website Development',
    desc: 'Bespoke digital experiences with <1.5s load times.',
    icon: Globe,
    color: 'from-orange-900 to-red-900'
  },
  {
    id: 'content',
    title: 'Content Creation',
    desc: 'Viral reels and visuals that stop the scroll.',
    icon: Video,
    color: 'from-pink-900 to-rose-900'
  }
];

export const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="services" className="py-32 bg-obsidian relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-24 md:flex justify-between items-end border-b border-white/10 pb-8">
          <div>
            <h2 className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-4">Our Expertise</h2>
            <h3 className="font-display text-5xl md:text-7xl text-white font-bold">
              DOMINATE<br />YOUR NICHE
            </h3>
          </div>
          <p className="text-gray-400 max-w-md mt-8 md:mt-0 text-lg">
            We don't just post. We architect digital dominance through precision and creativity.
          </p>
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
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]), { stiffness: 100, damping: 20 });

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, y: index % 2 === 0 ? 0 : y }}
      className="group relative h-[500px] w-full perspective-1000"
    >
      <div className="absolute inset-0 bg-neutral-900 rounded-3xl border border-white/5 overflow-hidden transition-all duration-500 group-hover:border-gold-500/50 group-hover:shadow-[0_0_50px_rgba(184,134,11,0.2)]">
        {/* Hover Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
        
        <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
          <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:bg-gold-500 group-hover:text-black transition-colors duration-300">
            <service.icon size={32} />
          </div>

          <div>
            <h4 className="font-display text-4xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform duration-300">
              {service.title}
            </h4>
            <p className="text-gray-400 text-lg border-l-2 border-white/10 pl-4 group-hover:border-gold-500 group-hover:text-white transition-all duration-300">
              {service.desc}
            </p>
          </div>

          <div className="flex items-center gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
            <span className="text-gold-500 font-bold uppercase tracking-wider text-sm">Explore Service</span>
            <div className="h-[1px] flex-1 bg-gold-500/50" />
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-gold-500/20 transition-colors duration-500" />
      </div>
    </motion.div>
  );
};