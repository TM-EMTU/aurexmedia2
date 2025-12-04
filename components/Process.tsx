import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, Camera, Rocket, LineChart } from 'lucide-react';

const icons: Record<string, React.FC<any>> = {
  search: Search,
  camera: Camera,
  rocket: Rocket,
  chart: LineChart,
};

const STEPS = [
  {
    id: 'discover',
    title: 'Strategy',
    description: 'We audit your market, audience and competitors to craft a battle-tested plan.',
    icon: 'search',
  },
  {
    id: 'create',
    title: 'Creation',
    description: 'High-impact creative and copy engineered for attention and conversion.',
    icon: 'camera',
  },
  {
    id: 'launch',
    title: 'Launch',
    description: 'Deploy across channels with precision and performance tracking.',
    icon: 'rocket',
  },
  {
    id: 'optimize',
    title: 'Optimize',
    description: 'Iterate, scale winners and compound results with data-driven tweaks.',
    icon: 'chart',
  },
];

export const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start center", "end center"] });

  return (
    <section id="process" ref={containerRef} className="py-32 bg-obsidian relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-[80px] pointer-events-none will-change-transform transform-gpu" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-[80px] pointer-events-none will-change-transform transform-gpu" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-7xl font-display font-bold mb-6">How We Work</h2>
          <p className="text-white/60 max-w-xl mx-auto text-lg">Precision-engineered workflows for maximum impact.</p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-white/5">
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gold-500 via-gold-400 to-gold-500 origin-top"
            />
          </div>

          <div className="space-y-32">
            {STEPS.map((step, index) => {
              const Icon = icons[step.icon];
              const isEven = index % 2 === 0;
              return (
                <MemoizedTimelineItem key={step.id} step={step} index={index} Icon={Icon} isEven={isEven} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

type TimelineItemProps = { step: any; index: number; Icon: React.FC<any>; isEven: boolean };

const TimelineItem: React.FC<TimelineItemProps> = ({ step, index, Icon, isEven }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 will-change-transform transform-gpu ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-24 md:text-right' : 'md:pl-24 md:text-left'}`}>
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gold-500/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm">
            <div className={`text-gold-500 font-mono text-sm mb-3 tracking-widest uppercase ${isEven ? 'md:ml-auto' : ''}`}>
              Step 0{index + 1}
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">{step.title}</h3>
            <p className="text-white/60 leading-relaxed">{step.description}</p>
          </div>
        </div>
      </div>

      <div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 flex items-center justify-center">
        <div className="relative w-14 h-14 flex items-center justify-center">
          <div className="absolute inset-0 bg-black rounded-full border border-white/10 z-10" />
          <div className="absolute inset-0 bg-gold-500/20 rounded-full blur-md" />
          <Icon size={24} className="text-gold-500 relative z-20" />
        </div>
      </div>

      <div className="hidden md:block w-1/2" />
    </motion.div>
  );
};

const MemoizedTimelineItem = React.memo(TimelineItem);
