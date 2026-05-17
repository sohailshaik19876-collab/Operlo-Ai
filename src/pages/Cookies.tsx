import { motion } from "motion/react";
import { Cookie, Settings, Eye, ShieldCheck, Zap, Info } from "lucide-react";

export default function Cookies() {
  const cookieTypes = [
    {
      title: "Essential Cookies",
      icon: ShieldCheck,
      desc: "Necessary for the underlying infrastructure and security of our AI systems. These cannot be disabled as they ensure the integrity of our automated handshakes.",
      items: ["Authentication states", "Security tokens", "Load balancing nodes"]
    },
    {
      title: "Performance Analytics",
      icon: Zap,
      desc: "Help us measure and optimize the throughput of our systems. We track latency and user flow to ensure our automation blueprints are performing at peak efficiency.",
      items: ["Latency tracking", "System interaction maps", "Traffic origin diagnostics"]
    },
    {
      title: "Marketing Cookies",
      icon: Eye,
      desc: "Used to offer personalized scaling insights and automation recommendations. This allows us to tailor our mission-critical messaging to your specific industry needs.",
      items: ["Lead source tracking", "Campaign ROI analysis", "Retargeting identifiers"]
    },
    {
      title: "Functional Preference",
      icon: Settings,
      desc: "Remember your system preferences, such as chatbot language or dashboard themes, to provide a seamless high-performance experience.",
      items: ["Language settings", "UI layout persistence", "Assistant preferences"]
    }
  ];

  return (
    <div className="bg-luxury-black min-h-screen pt-32 pb-24 px-4 overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
         <div className="absolute top-[-10%] left-[20%] w-[40%] h-[40%] bg-brand-blue/10 rounded-full blur-[120px]" />
         <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-brand-electric/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass bg-brand-blue/10 rounded-full text-brand-electric text-[10px] font-black uppercase tracking-[0.4em] mb-8">
             <Cookie className="w-3 h-3" />
             Ecosystem Policy
          </div>
          <h1 className="text-5xl sm:text-7xl font-display font-black uppercase italic tracking-tighter leading-none mb-6">
            Cookie <span className="text-white/30">Registry.</span>
          </h1>
          <p className="text-white/40 text-xs font-black uppercase tracking-[0.3em] mb-12">Last Updated: May 16, 2026</p>
          <div className="w-20 h-[1px] bg-brand-electric mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8 mb-20">
          {cookieTypes.map((type, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 glass-dark rounded-[40px] border border-white/5 hover:border-brand-blue/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors">
                <type.icon className="w-7 h-7 text-brand-electric group-hover:text-white" />
              </div>
              <h2 className="text-2xl font-bold uppercase italic tracking-tighter mb-4">{type.title}</h2>
              <p className="text-sm text-white/40 font-description italic leading-relaxed mb-8">
                {type.desc}
              </p>
              <div className="space-y-3">
                 {type.items.map((item, j) => (
                   <div key={j} className="flex items-center gap-3 text-[10px] uppercase font-black tracking-widest text-white/20">
                      <div className="w-1 h-1 rounded-full bg-brand-electric" />
                      {item}
                   </div>
                 ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="p-12 glass rounded-[44px] border border-white/5 space-y-8"
        >
          <div className="flex items-center gap-4 text-brand-electric">
             <Info className="w-6 h-6" />
             <h3 className="text-xl font-bold uppercase tracking-tighter">Managing Your Settings</h3>
          </div>
          <p className="text-white/50 text-lg font-description italic leading-relaxed">
            You can control or delete cookies as you wish—for details, see <a href="https://aboutcookies.org" className="text-white underline underline-offset-4 decoration-brand-electric/50">aboutcookies.org</a>. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit our site and some services and functionalities may not work.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
