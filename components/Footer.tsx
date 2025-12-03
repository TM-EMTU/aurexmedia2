import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-9xl font-display font-bold tracking-tighter text-neutral-900 select-none absolute left-0 right-0 -translate-y-1/2 z-0 pointer-events-none opacity-20">AUREX</h2>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-2">AUREX<span className="text-gold-500">MEDIA</span></h3>
              <p className="text-gray-500">Real Strategy. Real Growth.</p>
            </div>
          </div>
          
          <div className="flex gap-8 relative z-10">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">WhatsApp</a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 relative z-10">
          <p>© 2025 Aurex Media AE. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Animated Bottom Bar */}
      <motion.div 
        animate={{ backgroundPosition: ['0% 0%', '100% 0%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        className="h-2 w-full mt-10 bg-[linear-gradient(90deg,var(--tw-gradient-stops))] from-gold-500 via-white to-gold-500 bg-[length:200%_100%]"
      />
    </footer>
  );
};