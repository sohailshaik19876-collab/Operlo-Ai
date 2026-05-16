import { motion } from "motion/react";
import { 
  Users, Target, Eye, Award, Globe, Shield, 
  Cpu, Rocket, Zap, ArrowRight, Activity, 
  Database, Network, Server 
} from "lucide-react";

const stats = [
  { label: "Systems Live", value: "500+" },
  { label: "Neural Experts", value: "45+" },
  { label: "Hours Salvaged", value: "1.2M+" },
  { label: "ROI Delivered", value: "$12M+" },
];

export default function About() {
  return (
    <div className="relative overflow-hidden pt-32 pb-20">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none opacity-20" />
      <div className="absolute top-[20%] right-0 w-[400px] h-[400px] bg-brand-electric/5 blur-[100px] rounded-full pointer-events-none opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-32"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass bg-brand-blue/10 rounded-full text-brand-electric text-[10px] font-black uppercase tracking-[0.4em] mb-10">
             <Shield className="w-3 h-3" />
             The Operlo Integrity
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-black mb-10 italic tracking-tighter uppercase leading-[0.9]">
            Beyond The <br /> <span className="text-white/30 italic">Commonplace.</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/50 leading-relaxed font-description italic max-w-3xl mx-auto">
            We don't build features. We build the <span className="text-white">autonomous neural infrastructure</span> that allows enterprises to scale without the friction of legacy manual operations.
          </p>
        </motion.div>

        {/* Narrative & Stats */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="space-y-10"
           >
              <div className="space-y-6">
                 <h2 className="text-4xl sm:text-6xl font-display font-black tracking-tighter uppercase italic leading-[1] text-white">
                    Architecting <br /> <span className="text-brand-electric">Total Autonomy.</span>
                  </h2>
                  <p className="text-lg text-white/40 font-description italic leading-relaxed">
                    Operlo AI was founded on a singular premise: human intelligence is too valuable to spend on repetitive logic. We bridge the gap between traditional SaaS and truly autonomous business systems.
                  </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                 {[
                   { icon: Cpu, title: "Neural Core", desc: "Enterprise-grade LLM orchestration." },
                   { icon: Network, title: "Edge Sync", desc: "Real-time ecosystem connectivity." }
                 ].map((item, i) => (
                   <div key={i} className="p-8 glass-dark rounded-[40px] border border-white/5 bg-gradient-to-br from-white/5 to-transparent hover:border-brand-blue/30 transition-all group">
                      <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors">
                         <item.icon className="w-7 h-7 text-brand-electric group-hover:text-white" />
                      </div>
                      <h4 className="text-xl font-bold uppercase italic tracking-tighter mb-2">{item.title}</h4>
                      <p className="text-xs text-white/30 font-description italic">{item.desc}</p>
                   </div>
                 ))}
              </div>
           </motion.div>

           <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-10 glass-dark rounded-[40px] border border-white/5 text-center relative overflow-hidden group shadow-2xl"
                >
                   <div className="absolute inset-0 bg-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                   <div className="text-4xl sm:text-6xl font-display font-black text-brand-electric mb-3 italic tracking-tighter relative z-10 group-hover:scale-110 transition-transform">
                      {stat.value}
                   </div>
                   <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 relative z-10">
                      {stat.label}
                   </div>
                </motion.div>
              ))}
           </div>
        </div>

        {/* Vision & Mission Bento */}
        <div className="grid md:grid-cols-2 gap-8 mb-40">
           {[
             { 
               icon: Target, 
               title: "The Ultimate Goal", 
               sub: "Zero Manual Friction", 
               desc: "We envision a future where business scale is limited only by mission ambition, not by operational overhead. Our mission is to delete the 'scale tax' that kills growth." 
             },
             { 
               icon: Server, 
               title: "Strategic Blueprint", 
               sub: "The neural Standard", 
               desc: "We are establishing the global standard for autonomous business operations. Every system we deploy is architected for redundancy, security, and infinite modularity." 
             }
           ].map((item, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="p-12 sm:p-16 glass-dark rounded-[60px] border border-white/10 relative overflow-hidden group"
             >
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-125 transition-transform duration-1000">
                   <item.icon className="w-32 h-32" />
                </div>
                <div className="relative z-10">
                   <div className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-electric mb-4 italic">{item.sub}</div>
                   <h3 className="text-3xl sm:text-5xl font-display font-black tracking-tighter uppercase italic mb-8">{item.title}</h3>
                   <p className="text-lg text-white/50 font-description italic leading-relaxed max-w-md">{item.desc}</p>
                </div>
             </motion.div>
           ))}
        </div>

        {/* Tech Stack Banner */}
        <div className="text-center">
           <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 mb-16 italic">Ecosystem Core Connectivity</h4>
           <div className="flex flex-wrap justify-center gap-x-16 gap-y-12 grayscale opacity-20 hover:opacity-50 transition-opacity">
              {["PYTHON", "TENSORFLOW", "OPENAI", "ANTHROPIC", "PINECONE", "LANGCHAIN", "REDIS", "POSTGRES"].map(t => (
                <span key={t} className="text-2xl sm:text-3xl font-display font-black tracking-tighter uppercase italic">{t}</span>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
