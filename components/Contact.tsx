import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Send, MapPin, Phone, Mail, ChevronDown, Check } from 'lucide-react';

export const Contact: React.FC = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [revenueOpen, setRevenueOpen] = useState(false);
  const [revenue, setRevenue] = useState<string>('');
  const revenueOptions = [
    { value: '<10k', label: 'Less than $10k' },
    { value: '10k-50k', label: '$10k – $50k' },
    { value: '50k-200k', label: '$50k – $200k' },
    { value: '200k-1m', label: '$200k – $1M' },
    { value: '1m+', label: '$1M+' },
  ];

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
                  <p className="text-gray-400">+971545094099</p>
                </div>
              </div>

               <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-full text-gold-500">
                  <Mail />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Email Us</h4>
                  <p className="text-gray-400">aurexmediaae@gmail.com</p>
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
                <button
                  type="button"
                  onClick={() => setRevenueOpen((o) => !o)}
                  onFocus={() => setFocusedField('revenue')}
                  onBlur={() => { setFocusedField(null); setRevenueOpen(false); }}
                  className={`w-full rounded-xl border px-4 py-4 text-lg flex items-center justify-between transition-all duration-300 cursor-pointer ${
                    revenueOpen || focusedField === 'revenue'
                      ? 'border-gold-500 ring-2 ring-gold-500/30 bg-white/10'
                      : 'border-white/10 bg-white/5'
                  }`}
                >
                  <span className={`${revenue ? 'text-white' : 'text-white/60'}`}>
                    {revenue ? revenueOptions.find(o => o.value === revenue)?.label : 'Monthly Revenue'}
                  </span>
                  <ChevronDown className={`ml-3 text-white/70 transition-transform ${revenueOpen ? 'rotate-180' : ''}`} />
                </button>

                {revenueOpen && (
                  <div className="absolute left-0 right-0 mt-2 rounded-2xl border border-white/10 bg-black/90 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden z-20">
                    <div className="py-2">
                      {revenueOptions.map((opt) => (
                        <button
                          type="button"
                          key={opt.value}
                          onMouseDown={(e) => { e.preventDefault(); setRevenue(opt.value); setRevenueOpen(false); }}
                          className={`w-full text-left px-4 py-3 text-sm md:text-base flex items-center justify-between transition-colors ${
                            revenue === opt.value ? 'bg-gold-500/10 text-gold-400' : 'text-white/80 hover:bg-white/5'
                          }`}
                        >
                          <span>{opt.label}</span>
                          {revenue === opt.value && <Check className="w-4 h-4" />}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
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