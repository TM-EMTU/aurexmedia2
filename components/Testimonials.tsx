import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  { name: "Ahmed Al-Mansouri", role: "CEO", company: "Falcon Real Estate", quote: "Aurex didn't just manage our social media; they completely reinvented our digital presence. Real results indeed." },
  { name: "Sarah Johnson", role: "Marketing Director", company: "Luxe Retail", quote: "The best agency experience we've had in the UAE. The ROI was visible within the first month." },
  { name: "Mohammed Zaid", role: "Founder", company: "TechStart AE", quote: "Their strategy is unmatched. They understand the local market nuances better than anyone else." },
  { name: "Fatima Al-Qubaisi", role: "CMO", company: "Emirates Health", quote: "Professional, punctual, and innovative. A partner you can trust." },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-neutral-900 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(184,134,11,0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-6 mb-16 text-center relative z-10">
        <h2 className="font-display text-4xl md:text-6xl text-white font-bold mb-6">TRUSTED BY <span className="text-gold-500">VISIONARIES</span></h2>
      </div>

      <div className="flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          className="flex gap-8 px-8"
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="w-[400px] flex-shrink-0 bg-black border border-white/10 p-8 rounded-2xl relative group hover:border-gold-500/50 transition-colors duration-300">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="text-gold-500 fill-gold-500" />
                ))}
              </div>
              <p className="text-gray-300 text-lg mb-8 italic leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-white/50 text-sm">{t.role}, {t.company}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};