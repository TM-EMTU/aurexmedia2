import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const inputClasses = (name: string) => `
    w-full bg-transparent border-b-2 py-4 text-white text-lg outline-none transition-all duration-300
    ${focusedField === name ? 'border-gold-500 shadow-[0_10px_20px_-10px_rgba(184,134,11,0.2)]' : 'border-white/20'}
  `;

  return (
    <section id="contact" className="py-32 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          <div>
            <h2 className="font-display text-6xl md:text-7xl font-bold text-white mb-8">
              READY TO <br /><span className="text-gold-500">SCALE?</span>
            </h2>
            <p className="text-gray-400 text-xl mb-12">
              Stop guessing. Start growing. Book your free strategy audit today and let's decode your path to dominance.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-full text-gold-500">
                  <MapPin />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Visit Us</h4>
                  <p className="text-gray-400">Corniche Road, Etihad Towers<br/>Abu Dhabi, UAE</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-full text-gold-500">
                  <Phone />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Call Us</h4>
                  <p className="text-gray-400">+971 50 123 4567</p>
                </div>
              </div>

               <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-full text-gold-500">
                  <Mail />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Email Us</h4>
                  <p className="text-gray-400">hello@aurexmedia.ae</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900/50 p-10 rounded-3xl border border-white/10 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/20 blur-[60px]" />
            
            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className={inputClasses('name')}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Phone" 
                    className={inputClasses('phone')}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>
              </div>
              
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className={inputClasses('email')}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                />
              </div>

              <div className="relative">
                <textarea 
                  placeholder="Tell us about your brand goals..." 
                  rows={4}
                  className={inputClasses('msg')}
                  onFocus={() => setFocusedField('msg')}
                  onBlur={() => setFocusedField(null)}
                />
              </div>

              <Button type="submit" className="w-full py-6 text-lg">
                Request Free Audit <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};