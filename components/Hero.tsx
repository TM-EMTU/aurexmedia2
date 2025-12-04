import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './ui/Button';
import { ChevronDown, Instagram, Twitter } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.9]);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black perspective-1000">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512453979798-5ea904ac6605?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity grayscale" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]" />
      </div>

      {/* Floating Particles (Simulated) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold-500 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.2
            }}
            animate={{ 
              y: [null, Math.random() * -100],
              opacity: [null, 0]
            }}
            transition={{ 
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear" 
            }}
          />
        ))}
      </div>

      <motion.div 
        style={{ y: y1, scale, opacity }}
        className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6 inline-block"
        >
          <span className="px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-500 text-xs font-bold tracking-widest uppercase backdrop-blur-md">
            Abu Dhabi's Premier Agency
          </span>
        </motion.div>

        <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl tracking-tighter text-white mb-6 leading-[0.9]">
          <motion.span 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="block"
          >
            REAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">STRATEGY</span>
          </motion.span>
          <motion.span 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="block"
          >
            REAL <span className="text-gold-500 shadow-gold-glow">GROWTH</span>
          </motion.span>
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12 font-light"
        >
          Fix broken strategies. Catapult your brand. Dominate your niche.
          <br className="hidden md:block" />
          The ultimate problem-solvers for the digital age.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-6 items-center"
        >
          <Button variant="primary" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
            Book Free Strategy Audit
          </Button>
          <div className="flex gap-4">
            {[Instagram, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="p-3 rounded-full border border-white/10 hover:border-gold-500/50 hover:bg-gold-500/10 hover:text-gold-500 transition-all text-white/60">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown />
        </motion.div>
      </motion.div>
    </section>
  );
};