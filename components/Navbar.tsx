import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 ${isScrolled ? 'bg-black/60 backdrop-blur-2xl border-b border-white/10 shadow-lg shadow-black/20' : 'bg-transparent'
          }`}
      >
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-center">
            <img src="/images/logo.png" alt="Aurex Media" className="h-5 md:h-5 lg:h-8 w-auto object-contain" />
            <div className="mt-0.5 text-center leading-none">
              <div className="text-[6px] md:text-[8px] uppercase tracking-[0.35em] text-white/60">SOCIAL MEDIA AGENCY</div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Services', 'Work', 'Process', 'About'].map((item) => (
            <a key={item} href={item === 'About' ? '#/about' : `#${item.toLowerCase()}`} className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 rounded-full border border-gold-500/50 text-gold-500 text-xs font-bold uppercase tracking-widest hover:bg-gold-500 hover:text-black transition-all duration-300"
          >
            Start Project
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileOpen(true)}
        >
          <Menu />
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isMobileOpen ? '0%' : '100%' }}
        transition={{ type: "spring", damping: 20 }}
        className="fixed inset-0 z-[60] bg-black flex flex-col items-center justify-center md:hidden"
      >
        <button
          className="absolute top-6 right-6 text-white/50 hover:text-white"
          onClick={() => setIsMobileOpen(false)}
        >
          <X size={32} />
        </button>
        <div className="flex flex-col items-center gap-8">
          {['Services', 'Work', 'Process', 'About', 'Contact'].map((item, i) => (
            <motion.a
              key={item}
              href={item === 'About' ? '#/about' : `#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setIsMobileOpen(false)}
              className="text-4xl font-display font-bold text-white hover:text-gold-500 transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </>
  );
};