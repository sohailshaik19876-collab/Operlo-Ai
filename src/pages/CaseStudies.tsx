import { motion } from "motion/react";
import { 
  ExternalLink, TrendingUp, Clock, Users, ArrowUpRight, 
  BarChart3, CheckCircle2, Zap, Globe, Shield, Activity 
} from "lucide-react";

const cases = [
  {
    client: "Elite Realty Group",
    industry: "Real Estate",
    metric: "340% Lead Rate",
    sub: "Automated 24/7 lead capture & qualification system deployed globally.",
    time: "21 Days",
    outcomes: ["$2.4M Pipeline Generated", "98% Response Accuracy", "1.2k Leads Screened"],
    id: "case-01"
  },
  {
    client: "Nexus Digital",
    industry: "SaaS & Agencies",
    metric: "85% Time Savings",
    sub: "Autonomous client reporting and workflow management ecosystem.",
    time: "14 Days",
    outcomes: ["Reduced FTE by 3", "Instant Client Dashboards", "Zero Manual Data Entry"],
    id: "case-02"
  },
  {
    client: "HealthFlow Clinics",
    industry: "Medical Logistics",
    metric: "2,000+ Appts",
    sub: "AI voice agent implementation for inbound scheduling and patient vetting.",
    time: "28 Days",
    outcomes: ["No-Show Rate < 3%", "HIPAA-Compliant Logic", "24/7 Phone Coverage"],
    id: "case-03"
  }
];

export default function CaseStudies() {
  return (
    <div className="relative overflow-hidden pt-32 pb-20">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-full h-[800px] bg-brand-blue/5 blur-[150px] rounded-full pointer-events-none opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-32"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass bg-brand-blue/10 rounded-full text-brand-electric text-[10px] font-black uppercase tracking-[0.4em] mb-10">
             <Activity className="w-3 h-3" />
             Case Studies 
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-black mb-10 italic tracking-tighter uppercase leading-[0.9]">
            The Impact <br /> <span className="text-white/30 italic">Quantified.</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/50 leading-relaxed font-description italic max-w-2xl mx-auto">
            We don't deal in promises. We deal in hard metrics, AI automation, and measurable revenue growth.
          </p>
        </motion.div>

        {/* Case Studies List */}
        <div className="space-y-24">
           {cases.map((cs, i) => (
             <motion.div
               key={cs.id}
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="group relative"
             >
                <div className="glass-dark rounded-[60px] border border-white/10 overflow-hidden flex flex-col lg:grid lg:grid-cols-[1.2fr_1fr] min-h-[600px] shadow-2xl hover:border-brand-blue/30 transition-all duration-700">
                   {/* Info side */}
                   <div className="p-10 sm:p-16 flex flex-col justify-between">
                      <div>
                         <div className="flex items-center gap-4 mb-8">
                            <div className="px-4 py-1.5 rounded-xl bg-brand-blue/20 text-brand-electric text-[10px] font-black uppercase tracking-widest border border-brand-electric/20"> {cs.industry} </div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-white/20">Project: {cs.id}</div>
                         </div>
                         <h3 className="text-4xl sm:text-6xl font-display font-black tracking-tighter uppercase italic leading-[1] text-white mb-8 group-hover:text-brand-electric transition-colors">
                            {cs.client}
                         </h3>
                         <p className="text-xl text-white/40 italic leading-relaxed mb-12 font-description max-w-md">
                            {cs.sub}
                         </p>
                         
                         <div className="space-y-4 mb-16">
                            {cs.outcomes.map((out, j) => (
                              <div key={j} className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-white/60">
                                 <div className="w-6 h-6 rounded-lg glass border border-white/10 flex items-center justify-center text-brand-electric">
                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                 </div>
                                 {out}
                              </div>
                            ))}
                         </div>
                      </div>

                      <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                         <div className="space-y-1">
                            <div className="text-[9px] font-black uppercase tracking-widest text-brand-electric mb-1">Impact Velocity</div>
                            <div className="text-3xl font-display font-black italic tracking-tighter text-white">{cs.metric}</div>
                         </div>
                         <div className="space-y-1">
                            <div className="text-[9px] font-black uppercase tracking-widest text-white/30 mb-1">deployment</div>
                            <div className="text-xl font-bold italic tracking-tighter text-white/70">{cs.time}</div>
                         </div>
                      </div>
                   </div>

                   {/* Visual/Tech side */}
                   <div className="bg-luxury-black/50 border-l border-white/10 p-10 sm:p-16 relative overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 bg-brand-blue/5 opacity-50" />
                      {/* Neural Mockup Interface */}
                      <div className="w-full max-w-md space-y-6 relative z-10">
                         <div className="glass-dark rounded-3xl border border-white/10 p-8 shadow-2xl animate-float" style={{ animationDelay: '0s' }}>
                            <div className="flex justify-between items-center mb-6">
                               <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center shadow-glow">
                                  <BarChart3 className="w-5 h-5 text-white" />
                               </div>
                               <div className="px-3 py-1 glass rounded-lg text-[8px] font-black uppercase tracking-widest text-brand-electric">Live Metric</div>
                            </div>
                            <div className="h-2 w-full bg-white/5 rounded-full mb-2">
                               <motion.div 
                                 initial={{ width: 0 }}
                                 whileInView={{ width: '85%' }}
                                 className="h-full bg-brand-blue shadow-glow" 
                               />
                            </div>
                            <div className="h-2 w-[60%] bg-white/5 rounded-full" />
                         </div>

                         <div className="glass-dark rounded-3xl border border-white/10 p-8 shadow-2xl animate-float ml-8" style={{ animationDelay: '0.2s' }}>
                            <div className="flex gap-4 mb-4">
                               <div className="w-8 h-8 rounded-lg bg-brand-electric/20 flex items-center justify-center text-brand-electric">
                                  <Zap className="w-4 h-4" />
                               </div>
                               <div className="space-y-1.5 flex-grow">
                                  <div className="h-2 w-1/2 bg-white/20 rounded-full" />
                                  <div className="h-1.5 w-1/3 bg-white/10 rounded-full" />
                               </div>
                            </div>
                            <div className="p-4 bg-white/5 rounded-xl border border-white/5 italic text-[10px] text-white/30">
                               AI system active. Protocol {cs.id} operational.
                            </div>
                         </div>

                         <div className="glass-dark rounded-3xl border border-white/10 p-8 shadow-2xl animate-float -ml-4" style={{ animationDelay: '0.4s' }}>
                            <div className="flex items-center justify-between">
                               <div className="text-xl font-display font-black italic tracking-tighter">SUCCESS_READY</div>
                               <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-glow" />
                            </div>
                         </div>
                      </div>

                      {/* Corner Icon */}
                      <div className="absolute top-10 right-10 opacity-30 group-hover:opacity-100 transition-opacity">
                         <button className="w-16 h-16 rounded-full bg-white text-brand-blue flex items-center justify-center shadow-strong-glow hover:scale-110 transition-all">
                            <ArrowUpRight className="w-8 h-8" />
                         </button>
                      </div>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>

        {/* Audit CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 text-center space-y-10"
        >
           <h2 className="text-4xl sm:text-6xl font-display font-black tracking-tighter uppercase italic leading-[0.9]">
              Ready For Your <br /> <span className="text-brand-electric italic">Strategy Call?</span>
           </h2>
           <button 
             onClick={() => window.location.href = "/contact"}
             className="px-12 py-6 bg-brand-blue text-white rounded-3xl font-black text-lg uppercase tracking-widest shadow-strong-glow hover:scale-105 transition-all"
            >
               Book Free Strategy Call
            </button>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Zero initial overhead. Risk-adjusted implementation.</p>
        </motion.div>
      </div>
    </div>
  );
}
