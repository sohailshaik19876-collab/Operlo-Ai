import { Link } from "react-router-dom";
import { Rocket, Twitter, Linkedin, Github, Mail, Youtube, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-luxury-black border-t border-white/5 pt-24 pb-12 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[150px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5 space-y-12">
            <div>
              <Link to="/" className="inline-flex items-center gap-4 mb-8 group">
                <div className="w-14 h-14 bg-white text-brand-blue rounded-2xl flex items-center justify-center shadow-strong-glow group-hover:bg-brand-electric group-hover:text-white transition-all duration-700">
                  <Rocket className="w-8 h-8" />
                </div>
                <span className="text-4xl font-display font-black tracking-tighter text-white uppercase italic">
                  OPERLO<span className="text-brand-electric group-hover:text-white transition-colors duration-500">AI</span>
                </span>
              </Link>
              <p className="text-white/40 text-xl max-w-md italic leading-relaxed font-description mb-10">
                Architecting the autonomous future. We engineer intelligent systems that think, act, and scale like elite human associates—deleting bottlenecks for world-class brands.
              </p>
              <div className="flex gap-4">
                {[Twitter, Linkedin, Youtube, Mail].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 glass rounded-2xl flex items-center justify-center hover:bg-brand-blue transition-all group border border-white/10 shadow-glow overflow-hidden relative">
                    <div className="absolute inset-0 bg-brand-blue translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    <Icon className="w-5 h-5 text-white/40 group-hover:text-white relative z-10 transition-all duration-500" />
                  </a>
                ))}
              </div>
            </div>

            <div className="p-8 glass-dark rounded-[40px] border border-white/10 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 blur-3xl rounded-full" />
               <h4 className="text-lg font-bold mb-4 uppercase italic">Neural Newsletter</h4>
               <p className="text-sm text-white/40 mb-6 font-description italic uppercase tracking-widest text-[10px]">Zero fluff. Just system engineering insights.</p>
               <div className="flex gap-3">
                  <input 
                    type="email" 
                    placeholder="Enter business email..." 
                    className="flex-grow bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-brand-blue transition-all"
                  />
                  <button className="bg-brand-blue p-4 rounded-2xl shadow-glow hover:shadow-strong-glow transition-all active:scale-95">
                     <ArrowUpRight className="w-5 h-5 text-white" />
                  </button>
               </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 space-y-10">
            <h4 className="text-brand-electric font-black uppercase tracking-[0.3em] text-[10px]">Architectures</h4>
            <ul className="space-y-6">
              {["Services", "Industries", "Case Studies", "Pricing", "Demo", "Blog"].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(" ", "-")}`} 
                    className="text-white/40 hover:text-white transition-all text-xs font-black uppercase tracking-[0.2em] flex items-center gap-3 group"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-brand-electric transition-all overflow-hidden" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-10">
            <h4 className="text-white/20 font-black uppercase tracking-[0.3em] text-[10px]">Intelligence</h4>
            <ul className="space-y-6">
              {[
                "Voice Infrastructure",
                "Workflow Engineering",
                "Lead Neural Systems",
                "CRM Deep-Sync",
                "Autonomous Sales",
                "Private LLMs"
              ].map((service) => (
                <li key={service} className="text-white/30 text-xs font-black uppercase tracking-tighter italic">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-10">
             <h4 className="text-white/20 font-black uppercase tracking-[0.3em] text-[10px]">Network Status</h4>
             <div className="p-6 glass-dark rounded-3xl border border-white/5 bg-green-500/5">
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-glow" />
                   <span className="text-[10px] font-black uppercase tracking-widest text-green-500">All Clusters Online</span>
                </div>
                <p className="text-[10px] text-white/30 uppercase font-bold tracking-widest leading-loose">
                   Operating at 99.9% peak neural efficiency across global infrastructure.
                </p>
             </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="flex flex-col gap-2">
             <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em]">
               The Algorithm of Growth &copy; 2026 Operlo AI Inc.
             </p>
             <p className="text-white/10 text-[9px] uppercase tracking-widest">
               Handcrafted for exponential performance.
             </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 sm:gap-12 text-[10px] font-black uppercase tracking-widest text-white/30">
            <a href="#" className="hover:text-brand-electric transition-colors">Privacy Neural Policy</a>
            <a href="#" className="hover:text-brand-electric transition-colors">Performance Terms</a>
            <a href="#" className="hover:text-brand-electric transition-colors">Security Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

