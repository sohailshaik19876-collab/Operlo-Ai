import { Link } from "react-router-dom";
import { Rocket, Twitter, Linkedin, Github, Mail, Youtube, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-luxury-black border-t border-white/5 pt-24 pb-12 px-4 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 mb-20 text-center sm:text-left">
          <div className="col-span-1 sm:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-8 group">
              <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center shadow-glow group-hover:shadow-strong-glow transition-all duration-500">
                <Rocket className="text-white w-7 h-7" />
              </div>
              <span className="text-3xl font-display font-black tracking-tighter text-white uppercase italic text-left">
                OPERLO<span className="text-brand-electric">AI</span>
              </span>
            </Link>
            <p className="text-white/50 text-lg max-w-md mx-auto sm:mx-0 mb-10 italic leading-relaxed font-description">
              We engineer intelligent autonomous architectures that think, act, and scale like top-tier employees—for brands that refuse to settle.
            </p>
            <div className="flex justify-center sm:justify-start gap-4">
              {[Twitter, Linkedin, Youtube, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:bg-brand-blue transition-all group border border-white/10 shadow-glow">
                  <Icon className="w-6 h-6 text-white/40 group-hover:text-white group-hover:scale-110 transition-all duration-500" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-brand-electric font-black mb-8 uppercase tracking-[0.3em] text-xs">Architectures</h4>
            <ul className="space-y-4">
              {["Services", "Industries", "Case Studies", "Pricing", "Demo", "Blog"].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(" ", "-")}`} 
                    className="text-white/40 hover:text-white transition-all text-sm font-bold uppercase tracking-widest flex items-center gap-2 justify-center sm:justify-start group"
                  >
                    {item}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/20 font-black mb-8 uppercase tracking-[0.3em] text-xs">Intelligence</h4>
            <ul className="space-y-5">
              {[
                "AI Voice Infrastructure",
                "Workflow Engineering",
                "Lead Neural Systems",
                "CRM Deep-Sync",
                "Autonomous CRM",
                "Private LLMs"
              ].map((service) => (
                <li key={service} className="text-white/40 text-sm font-bold uppercase tracking-tighter italic">
                  {service}
                </li>
              ))}
            </ul>
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

