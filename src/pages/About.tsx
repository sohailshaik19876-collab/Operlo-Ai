import { motion } from "motion/react";
import { Users, Target, Eye, Award, Globe, Shield } from "lucide-react";

const stats = [
  { label: "Founded", value: "2024" },
  { label: "AI Experts", value: "45+" },
  { label: "Successful Automations", value: "500+" },
  { label: "ROI Generated", value: "$12M+" },
];

export default function About() {
  return (
    <div className="pt-24 sm:pt-28 pb-20 px-4 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className="inline-block px-4 py-1.5 glass rounded-full text-brand-electric text-xs font-black uppercase tracking-widest mb-6"> Our Story </div>
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 italic tracking-tighter">Beyond The <span className="text-white/40">Baseline.</span></h1>
        <p className="text-xl text-white/50 leading-relaxed font-description">
          Operlo AI is not a generic marketing agency or a simple chatbot provider. We are a premium AI automation partner dedicated to building the neural infrastructure that solves the deep-rooted bottlenecks holding your company back.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-4xl font-display font-bold mb-8 italic tracking-tight">Engineering Complete <span className="text-brand-electric">Ecosystems.</span></h2>
          <p className="text-white/50 text-lg mb-8 leading-relaxed font-description">
            In an era of noise, we prioritize precision. Our team of world-class AI architects, engineers, and strategists are dedicated to one thing: architectural excellence. We build systems that think, act, and scale like high-level associates.
          </p>
          <div className="space-y-6">
            {[
              { icon: Target, title: "Our Vision", desc: "A world where zero human time is wasted on repetitive logic." },
              { icon: Eye, title: "Our Mission", desc: "To deploy 10,000 autonomous business engines by 2030." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-6 glass rounded-3xl border border-white/5">
                <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-brand-electric w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                  <p className="text-white/40 font-description">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 glass-dark rounded-[32px] border border-white/5 text-center group hover:border-brand-blue/30 transition-all"
            >
              <div className="text-4xl font-display font-black text-brand-electric mb-2 tracking-tighter group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest text-white/30">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Partners/Founders Section */}
      <div className="text-center mb-20">
        <h3 className="text-2xl font-bold mb-10 opacity-40 uppercase tracking-[0.4em]">Our Core Technology Stack</h3>
        <div className="flex flex-wrap justify-center gap-12 sm:gap-16 text-2xl sm:text-3xl font-black italic opacity-20 grayscale">
          <span>PYTHON</span>
          <span>TENSORFLOW</span>
          <span>OPENAI</span>
          <span>ANTHROPIC</span>
          <span>PINECONE</span>
          <span>LANGCHAIN</span>
        </div>
      </div>
    </div>
  );
}
