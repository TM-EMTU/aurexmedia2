import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Process } from './components/Process';
import { AboutPage } from './components/AboutPage';

function App() {
  const [loading, setLoading] = useState(true);
  const [route, setRoute] = useState<string>(window.location.hash || '');

  // Intro Loader Sequence
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Simple hash-based routing
  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash || '');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    if (!loading && route === '#contact') {
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  }, [loading, route]);

  useEffect(() => {
    if (!loading && route === '#/about') {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
    }
  }, [loading, route]);

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-gold-500 selection:text-black">
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-white">
                AUREX<span className="text-gold-500">MEDIA</span>
              </h1>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "circOut", delay: 0.5 }}
                className="h-1 bg-gold-500 mt-4 mx-auto"
              />
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-4 text-gray-500 text-sm tracking-[0.3em] uppercase"
              >
                Abu Dhabi
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        route === '#/about' ? (
          <main className="relative">
            <Navbar />
            <AboutPage />
            <Footer />
          </main>
        ) : (
          <main className="relative">
            {/* Custom Cursor Dot */}
            <div className="fixed w-full h-full pointer-events-none z-[90] hidden md:block">
               {/* Note: A full custom cursor tracking would be added here, simplified for this generated response */}
            </div>

            <Navbar />
            <Hero />
            <Services />
            <Portfolio />
            <Testimonials />
            
            {/* Process Section (Compact) */}
            <Process />

            <Contact />
            <Footer />

            {/* Sticky Whatsapp CTA */}
            <motion.a
              href="https://wa.me/971545094099" 
              target="_blank"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2, type: 'spring' }}
              className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer group"
            >
               <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:rotate-12 transition-transform"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
               <div className="absolute inset-0 rounded-full border border-[#25D366] animate-ping opacity-50" />
            </motion.a>
          </main>
        )
      )}
    </div>
  );
}

export default App;