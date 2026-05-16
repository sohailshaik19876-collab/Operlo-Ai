import { motion, AnimatePresence } from "motion/react";
import { 
  Mail, Phone, MessageSquare, MapPin, Send, 
  Instagram, Linkedin, Twitter, Globe, Shield, 
  Zap, ArrowRight, CheckCircle2, Calendar, Target,
  Activity
} from "lucide-react";
import React, { useState } from "react";
import { cn } from "../lib/utils";

export default function Contact() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    volume: "",
    needs: "",
  });

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4); // Success state
  };

  const industries = ["Real Estate", "SaaS / Tech", "Agency", "Healthcare", "E-commerce", "Other"];

  return (
    <div className="relative overflow-hidden pt-32 pb-20">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-20">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 glass bg-brand-blue/10 rounded-full text-brand-electric text-[10px] font-black uppercase tracking-[0.4em]">
                 <Activity className="w-3 h-3" />
                 Diagnostic Portal 
              </div>
              <h1 className="text-5xl sm:text-7xl font-display font-black mb-8 italic tracking-tighter uppercase leading-[0.9]">
                Initiate Your <br /> <span className="text-white/30 italic">Audit Call.</span>
              </h1>
              <p className="text-xl text-white/50 leading-relaxed font-description italic max-w-xl">
                Ready to bridge the scale gap? Deploy our neural architecture into your operation to delete manual bottlenecks forever.
              </p>
            </motion.div>

            <div className="mt-20 space-y-12">
               <div>
                  <h3 className="text-xl font-bold uppercase italic tracking-tighter mb-8 flex items-center gap-4">
                     <Target className="w-6 h-6 text-brand-electric" />
                     The Audit Process
                  </h3>
                  <div className="space-y-6">
                     {[
                       { t: "Logic Discovery", d: "We map your current vertical friction points." },
                       { t: "ROI Projections", d: "Hard data on bandwidth reclamation." },
                       { t: "Custom Blueprint", d: "Direct neural system architectural plan." }
                     ].map((item, i) => (
                       <div key={i} className="flex gap-6 group">
                          <div className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center font-display font-black text-xs text-white/20 group-hover:text-brand-electric group-hover:border-brand-blue/30 transition-all">0{i+1}</div>
                          <div>
                             <h4 className="text-sm font-black uppercase tracking-widest text-white/80">{item.t}</h4>
                             <p className="text-xs text-white/40 font-description italic">{item.d}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>

               <div className="pt-12 border-t border-white/5 space-y-8">
                  <div className="flex items-center gap-6">
                     <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center shadow-glow border border-white/10">
                        <Mail className="w-6 h-6 text-brand-electric" />
                     </div>
                     <div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-1">Direct Secure Line</div>
                        <div className="text-lg font-bold">handshake@operlo.ai</div>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                       <a key={i} href="#" className="w-14 h-14 rounded-2xl glass border border-white/10 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all group">
                          <Icon className="w-6 h-6 text-white/20 group-hover:text-white" />
                       </a>
                     ))}
                  </div>
               </div>
            </div>
          </div>

          {/* Lead Gen Form Space */}
          <div className="relative">
             <div className="absolute -inset-1 bg-brand-blue/20 rounded-[50px] blur-2xl opacity-30" />
             <div className="relative glass-dark rounded-[48px] border border-white/10 overflow-hidden bg-gradient-to-br from-white/10 to-transparent p-1">
                <div className="bg-luxury-black/60 rounded-[46px] p-8 sm:p-12 min-h-[600px] flex flex-col">
                   
                   {step <= 3 && (
                     <div className="flex justify-between items-center mb-12">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="flex flex-col items-center gap-3">
                             <div className={cn(
                               "w-10 h-10 rounded-xl flex items-center justify-center text-[10px] font-black border transition-all duration-500",
                               step >= i ? "bg-brand-blue text-white shadow-glow border-brand-blue" : "glass text-white/20 border-white/5"
                             )}>
                                {step > i ? <CheckCircle2 className="w-4 h-4" /> : i}
                             </div>
                             <span className={cn(
                               "text-[8px] font-black uppercase tracking-widest transition-colors",
                               step >= i ? "text-brand-electric" : "text-white/10"
                             )}>
                               Step 0{i}
                             </span>
                          </div>
                        ))}
                     </div>
                   )}

                   <div className="flex-grow">
                      <AnimatePresence mode="wait">
                         {step === 1 && (
                           <motion.div
                             key="step1"
                             initial={{ opacity: 0, x: 20 }}
                             animate={{ opacity: 1, x: 0 }}
                             exit={{ opacity: 0, x: -20 }}
                             className="space-y-8"
                           >
                              <div className="space-y-2">
                                 <h3 className="text-3xl font-display font-black tracking-tighter uppercase italic leading-none">Diagnostic <br /> <span className="text-brand-electric">Origin.</span></h3>
                                 <p className="text-[10px] uppercase font-black tracking-widest text-white/20 italic">Primary entity identification</p>
                              </div>
                              <div className="space-y-6">
                                 <div>
                                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-3 block">Full Legal Name</label>
                                    <input 
                                      type="text" 
                                      placeholder="Ex: Alexander Pierce"
                                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-brand-blue transition-all font-description italic"
                                    />
                                 </div>
                                 <div>
                                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-3 block">Business Email</label>
                                    <input 
                                      type="email" 
                                      placeholder="Ex: alex@company.inc"
                                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-brand-blue transition-all font-description italic"
                                    />
                                 </div>
                              </div>
                           </motion.div>
                         )}

                         {step === 2 && (
                           <motion.div
                             key="step2"
                             initial={{ opacity: 0, x: 20 }}
                             animate={{ opacity: 1, x: 0 }}
                             exit={{ opacity: 0, x: -20 }}
                             className="space-y-8"
                           >
                              <div className="space-y-2">
                                 <h3 className="text-3xl font-display font-black tracking-tighter uppercase italic leading-none">Market <br /> <span className="text-brand-electric">Context.</span></h3>
                                 <p className="text-[10px] uppercase font-black tracking-widest text-white/20 italic">Sector specific parameters</p>
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                 {industries.map(ind => (
                                   <button 
                                     key={ind}
                                     onClick={() => setFormData(prev => ({ ...prev, business: ind }))}
                                     className={cn(
                                       "py-4 glass border rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all",
                                       formData.business === ind ? "bg-brand-blue text-white border-brand-blue" : "border-white/5 text-white/40 hover:border-white/20"
                                     )}
                                   >
                                      {ind}
                                   </button>
                                 ))}
                              </div>
                              <div>
                                 <label className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-3 block">Monthly Ticket Volume</label>
                                 <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-brand-blue transition-all font-black text-xs uppercase tracking-widest appearance-none text-white/90">
                                    <option>Select volume...</option>
                                    <option>0 - 50 leads</option>
                                    <option>50 - 500 leads</option>
                                    <option>500 - 5,000+ leads</option>
                                 </select>
                              </div>
                           </motion.div>
                         )}

                         {step === 3 && (
                           <motion.div
                             key="step3"
                             initial={{ opacity: 0, x: 20 }}
                             animate={{ opacity: 1, x: 0 }}
                             exit={{ opacity: 0, x: -20 }}
                             className="space-y-8"
                           >
                              <div className="space-y-2">
                                 <h3 className="text-3xl font-display font-black tracking-tighter uppercase italic leading-none">Bottleneck <br /> <span className="text-brand-electric">Deepscan.</span></h3>
                                 <p className="text-[10px] uppercase font-black tracking-widest text-white/20 italic">Operational friction mapping</p>
                              </div>
                              <div>
                                 <label className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-3 block">Primary Bottleneck Brief</label>
                                 <textarea 
                                   rows={6}
                                   placeholder="Describe the repetitive logic kills your bandwidth..."
                                   className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-6 focus:outline-none focus:border-brand-blue transition-all font-description italic"
                                 />
                              </div>
                           </motion.div>
                         )}

                         {step === 4 && (
                           <motion.div
                             key="success"
                             initial={{ opacity: 0, scale: 0.9 }}
                             animate={{ opacity: 1, scale: 1 }}
                             className="h-full flex flex-col items-center justify-center text-center space-y-8 pt-10"
                           >
                              <div className="w-24 h-24 rounded-[40px] bg-brand-blue flex items-center justify-center shadow-strong-glow animate-bounce">
                                 <CheckCircle2 className="w-12 h-12 text-white" />
                              </div>
                              <div>
                                 <h3 className="text-4xl font-display font-black tracking-tighter uppercase italic text-white mb-4">Handshake Success.</h3>
                                 <p className="text-sm text-white/50 font-description italic max-w-xs mx-auto leading-relaxed">
                                    Our architects are reviewing your neural footprint. We will trigger the diagnostic response within 12 business hours.
                                 </p>
                              </div>
                              <button 
                                onClick={() => window.location.href = "/"}
                                className="px-10 py-5 glass border border-white/10 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-brand-blue transition-all"
                              >
                                 Return Home
                              </button>
                           </motion.div>
                         )}
                      </AnimatePresence>
                   </div>

                   {step <= 3 && (
                     <div className="mt-auto pt-8 flex gap-4">
                        {step > 1 && (
                          <button 
                            onClick={prevStep}
                            className="flex-grow py-5 glass border border-white/10 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-white/5 transition-all text-white/40"
                          >
                             Back
                          </button>
                        )}
                        {step < 3 ? (
                          <button 
                            onClick={nextStep}
                            className="flex-grow py-5 bg-white text-brand-blue rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-glow hover:scale-105 transition-all flex items-center justify-center gap-3"
                          >
                             Continue Assessment <ArrowRight className="w-4 h-4" />
                          </button>
                        ) : (
                          <button 
                            onClick={handleSubmit}
                            className="flex-grow py-5 bg-brand-blue text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-strong-glow hover:scale-105 transition-all flex items-center justify-center gap-3"
                          >
                             Complete Handshake <Zap className="w-4 h-4" />
                          </button>
                        )}
                     </div>
                   )}
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
