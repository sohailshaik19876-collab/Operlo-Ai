import { motion } from "motion/react";
import { Mail, Phone, MessageSquare, MapPin, Send, Instagram, Linkedin, Twitter } from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    needs: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inquiry Sent! Our team will contact you shortly.");
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-1.5 glass rounded-full text-brand-electric text-xs font-black uppercase tracking-widest mb-6"> Get In Touch </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 italic tracking-tighter">Start Your <br /> <span className="text-white/40">AI Audit.</span></h1>
          <p className="text-xl text-white/50 leading-relaxed font-description">
            Ready to delete your bottlenecks? Fill out the form or book a call directly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-dark rounded-[48px] p-8 md:p-12 border border-white/5 relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-blue/10 blur-[80px]" />
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-white/40 mb-3 ml-1">Full Name</label>
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-blue transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-white/40 mb-3 ml-1">Work Email</label>
                  <input
                    required
                    type="email"
                    placeholder="john@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-blue transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-white/40 mb-3 ml-1">Business Type</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-blue transition-all appearance-none text-white/50">
                   <option>Real Estate</option>
                   <option>SaaS / Tech</option>
                   <option>Agency</option>
                   <option>Healthcare</option>
                   <option>E-commerce</option>
                   <option>Other Service Business</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-white/40 mb-3 ml-1">Your Automation Needs</label>
                <textarea
                  placeholder="Describe your current bottlenecks..."
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-blue transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-blue py-6 rounded-[24px] font-black leading-none text-xl shadow-strong-glow hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-3"
              >
                Send Secure Inquiry
                <Send className="w-6 h-6" />
              </button>
            </form>
          </motion.div>

          {/* Socials & Info */}
          <div className="flex flex-col justify-between py-8">
            <div className="space-y-12">
               <div>
                  <h3 className="text-3xl font-display font-bold mb-6">Book Directly</h3>
                  <p className="text-white/50 mb-8 max-w-sm italic font-description">Prefer a face-to-face chat? Schedule a 15-minute discovery call on our calendar.</p>
                  <div className="aspect-video glass rounded-3xl border border-white/10 flex items-center justify-center p-8 bg-brand-blue/5">
                     <div className="text-center">
                        <div className="w-16 h-16 rounded-2xl bg-brand-blue flex items-center justify-center mx-auto mb-4 shadow-glow">
                           <MessageSquare className="text-white w-8 h-8" />
                        </div>
                        <h4 className="font-bold mb-2">Calendly Integration</h4>
                        <button className="text-brand-electric font-black uppercase text-xs tracking-widest hover:underline">Open Schedule</button>
                     </div>
                  </div>
               </div>

               <div className="grid grid-cols-2 gap-8">
                  <div className="flex items-start gap-4">
                     <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-brand-electric" />
                     </div>
                     <div>
                        <div className="text-xs font-black uppercase tracking-widest text-white/30 mb-1">Email Us</div>
                        <div className="font-bold">hello@operlo.ai</div>
                     </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-brand-electric" />
                     </div>
                     <div>
                        <div className="text-xs font-black uppercase tracking-widest text-white/30 mb-1">WhatsApp</div>
                        <div className="font-bold">+1 (888) OPERLO</div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="pt-12 border-t border-white/5">
               <h4 className="text-xs font-black uppercase tracking-widest text-white/30 mb-6">Our Headquarters</h4>
               <div className="flex items-center gap-4 text-white/50">
                  <MapPin className="w-5 h-5 text-brand-electric" />
                  <span>Silicon Valley, CA &middot; London, UK</span>
               </div>
               <div className="flex gap-4 mt-8">
                 {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                   <a key={i} href="#" className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-brand-blue transition-all border border-white/10 group">
                      <Icon className="w-5 h-5 text-white/40 group-hover:text-white transition-all" />
                   </a>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
