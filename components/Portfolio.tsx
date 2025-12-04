import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  { id: 1, client: "Luxury Auto UAE", title: "Launch Campaign", img: "/images/luxury_auto.png" },
  { id: 2, client: "Emaar Lifestyle", title: "Social Takeover", img: "/images/emaar_lifestyle.png" },
  { id: 3, client: "Dubai Tourism", title: "Viral Content Series", img: "https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=1974&auto=format&fit=crop" },
  { id: 4, client: "Tech Fintech", title: "Rebranding", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" },
  { id: 5, client: "Tech Corp", title: "AI Business Integration", img: "/images/ai.png" },
  { id: 6, client: "Future Leaders", title: "Growth Masterclass", img: "/images/growth.png" }
];

export const Portfolio: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section id="work" ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden pt-20">
        <motion.div style={{ x }} className="flex gap-16 px-16">

          <div className="w-[80vw] md:w-[60vw] h-[70vh] flex-shrink-0 flex flex-col justify-center">
            <h2 className="text-white text-8xl font-display font-bold leading-none">
              SELECTED <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">WORKS</span>
            </h2>
            <p className="mt-8 text-gray-400 text-xl max-w-xl">
              Scroll to witness how we transform brands into legends through strategic storytelling and visual excellence.
            </p>
          </div>

          {projects.map((project) => (
            <div key={project.id} className="relative w-[80vw] md:w-[60vw] h-[70vh] flex-shrink-0 group">
              <div className="absolute inset-0 bg-neutral-900 overflow-hidden rounded-lg">
                <img
                  src={project.img}
                  alt={project.client}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              </div>

              <div className="absolute bottom-0 left-0 p-12 w-full">
                <div className="flex justify-between items-end border-b border-white/20 pb-6 mb-6">
                  <div>
                    <h3 className="text-gold-500 font-bold uppercase tracking-widest mb-2">{project.client}</h3>
                    <h4 className="text-5xl font-display font-bold text-white">{project.title}</h4>
                  </div>
                  <div className="hidden md:block">
                    <span className="text-white/50 text-sm">2024</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="px-4 py-1 rounded-full border border-white/20 text-white/80 text-xs uppercase">Strategy</span>
                  <span className="px-4 py-1 rounded-full border border-white/20 text-white/80 text-xs uppercase">Production</span>
                </div>
              </div>

              {/* Simulated Floating Feedback Bubble */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="absolute top-10 right-10 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 max-w-xs"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center font-bold text-black text-xs">AM</div>
                  <span className="text-white text-xs font-bold">Aurex Media</span>
                </div>
                <p className="text-white text-sm">"Engagement increased by 400% in the first week."</p>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};