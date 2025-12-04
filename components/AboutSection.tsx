import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';

const aboutImage = "";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-gold-500/10 rounded-full blur-[80px]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-5xl md:text-7xl font-display font-bold leading-tight">
              Built in the UAE.
              <br />
              Engineered for growth.
            </h2>
            <p className="text-white/60 mt-6 text-lg leading-relaxed">
              Aurex Media crafts end-to-end strategy, content and performance systems that compound results. We partner with ambitious brands to turn attention into revenue with precision and taste.
            </p>
            <div className="flex gap-6 mt-10">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-gold-500">200+</div>
                <div className="text-white/60 text-sm uppercase tracking-widest">Campaigns</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-gold-500">4.9/5</div>
                <div className="text-white/60 text-sm uppercase tracking-widest">Client Rating</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-gold-500">UAE</div>
                <div className="text-white/60 text-sm uppercase tracking-widest">Abu Dhabi • Dubai</div>
              </div>
            </div>
            <div className="mt-12 flex gap-4">
              <Button variant="primary" onClick={() => (window.location.hash = '/about')}>
                Read our story
              </Button>
              <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Start a project
              </Button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 h-[24rem] md:h-[32rem]">
              <img src={aboutImage} alt="" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
