import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Target, Sparkles, Users, LineChart, Camera, Rocket } from 'lucide-react';

const heroImage = "https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=1920&auto=format&fit=crop";
const teamImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1920&auto=format&fit=crop";

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <section className="pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-20 w-[28rem] h-[28rem] bg-gold-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[22rem] h-[22rem] bg-gold-500/10 rounded-full blur-[90px]" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-[0.95] tracking-tight">
                We build brands that
                <span className="text-gold-500"> grow faster</span>
              </h1>
              <p className="mt-6 text-white/70 text-lg md:text-xl leading-relaxed">
                Aurex Media is a strategy-first creative and performance partner based in the UAE. We connect story, design and distribution to turn attention into measurable growth.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button variant="primary" onClick={() => (window.location.hash = '#contact')}>Start Project</Button>
                <Button variant="outline" onClick={() => (window.location.hash = '')}>Back to Home</Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative">
              <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 h-[22rem] md:h-[28rem]">
                <img src={heroImage} alt="" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/10 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="text-gold-500 mb-4"><Target /></div>
              <h3 className="text-2xl font-bold mb-2">Strategy First</h3>
              <p className="text-white/60">We audit market, audience and competitors to craft plans that win.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="text-gold-500 mb-4"><Sparkles /></div>
              <h3 className="text-2xl font-bold mb-2">Taste + Precision</h3>
              <p className="text-white/60">High-impact creative and copy engineered to convert, not just impress.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="text-gold-500 mb-4"><LineChart /></div>
              <h3 className="text-2xl font-bold mb-2">Performance Obsessed</h3>
              <p className="text-white/60">We iterate, scale winners and compound results with data.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-6xl font-display font-bold">What we do</h2>
            <p className="text-white/60 mt-3">Full-stack brand growth. End to end.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Camera, title: 'Content & Production', desc: 'Creative direction, studio and on-location production.' },
              { icon: Rocket, title: 'Launch & Distribution', desc: 'Go-to-market, media planning and paid social.' },
              { icon: Users, title: 'Community & Social', desc: 'Organic strategy, social ops and community systems.' },
              { icon: Target, title: 'Brand & Positioning', desc: 'Messaging, identity and design systems.' },
              { icon: LineChart, title: 'Performance & Analytics', desc: 'CRO, dashboards and iterative scaling.' },
              { icon: Sparkles, title: 'AI-enabled Workflows', desc: 'Faster ideation, production and optimization.' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-gold-500 mb-3"><Icon /></div>
                <div className="text-xl font-bold">{title}</div>
                <div className="text-white/60 mt-1">{desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-3xl md:text-5xl font-display font-bold">Built in the UAE, serving bold brands</h3>
            <p className="text-white/60 mt-4 text-lg">From Abu Dhabi to Dubai, we operate where ambition meets execution. We value clarity, speed and ownership. No fluff. No bloated decks. Just work that moves the needle.</p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-gold-500">200+</div>
                <div className="text-white/60 text-xs uppercase tracking-widest">Campaigns</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold-500">30d</div>
                <div className="text-white/60 text-xs uppercase tracking-widest">Avg. Time To Launch</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold-500">4.9/5</div>
                <div className="text-white/60 text-xs uppercase tracking-widest">Client Rating</div>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 h-[22rem] md:h-[28rem]">
              <img src={teamImage} alt="" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-5xl font-display font-bold">Ready to build something great?</h3>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">Book a free strategy audit. We will analyze your brand, audience and competitors and show you the exact growth path.</p>
          <div className="mt-8 flex justify-center">
            <Button variant="primary" onClick={() => (window.location.hash = '#contact')}>Request Free Audit</Button>
          </div>
        </div>
      </section>
    </div>
  );
};
