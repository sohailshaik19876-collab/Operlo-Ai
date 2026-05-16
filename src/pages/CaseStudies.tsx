import { motion } from "motion/react";
import { ExternalLink, TrendingUp, Clock, Users, ArrowUpRight } from "lucide-react";

const cases = [
  {
    client: "Elite Realty Group",
    industry: "Real Estate",
    metric: "340% Lead Increase",
    sub: "Automated 24/7 lead capture & qualification system.",
    time: "Deployed in 3 weeks",
    id: "case-01"
  },
  {
    client: "Nexus Digital Agency",
    industry: "Marketing",
    metric: "85% Ops Time Saved",
    sub: "Autonomous client reporting and workflow management.",
    time: "Deployed in 2 weeks",
    id: "case-02"
  },
  {
    client: "HealthFlow Clinics",
    industry: "Healthcare",
    metric: "2,000+ Booked Appts",
    sub: "AI voice agent implementation for inbound scheduling.",
    time: "Deployed in 4 weeks",
    id: "case-03"
  }
];

export default function CaseStudies() {
  return (
    <div className="pt-24 sm:pt-28 pb-20 px-4 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className="inline-block px-4 py-1.5 glass rounded-full text-brand-electric text-xs font-black uppercase tracking-widest mb-6"> Case Studies </div>
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 italic tracking-tighter">Growth <span className="text-white/40">Unlocked.</span></h1>
        <p className="text-xl text-white/50 leading-relaxed font-description">
          Real results for real businesses. See how we turn inefficient bottlenecks into high-performance revenue drivers.
        </p>
      </motion.div>

      <div className="grid gap-12">
        {cases.map((cs, i) => (
          <motion.div
            key={cs.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group glass-dark rounded-[48px] border border-white/5 overflow-hidden flex flex-col lg:flex-row shadow-2xl hover:border-brand-blue/30 transition-all"
          >
            <div className="lg:w-1/2 p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                   <div className="px-3 py-1 rounded-full bg-brand-blue/20 text-brand-electric text-[10px] font-black uppercase tracking-widest"> {cs.industry} </div>
                </div>
                <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight leading-tight group-hover:text-brand-electric transition-colors">
                  {cs.client}
                </h3>
                <p className="text-xl text-white/50 italic leading-relaxed mb-8 font-description">
                  {cs.sub}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                 <div>
                    <div className="flex items-center gap-2 text-brand-electric mb-1">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm font-bold uppercase tracking-tighter">Primary Metric</span>
                    </div>
                    <div className="text-3xl font-display font-black text-white italic">{cs.metric}</div>
                 </div>
                 <div>
                    <div className="flex items-center gap-2 text-white/40 mb-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-bold uppercase tracking-tighter">Speed To Value</span>
                    </div>
                    <div className="text-xl font-bold text-white/80 italic">{cs.time}</div>
                 </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 min-h-[400px] bg-brand-blue/10 relative p-12 flex flex-col overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-transparent" />
               <div className="relative z-10 h-full flex flex-col justify-center">
                  <div className="space-y-4">
                     {[1,2,3].map(j => (
                        <div key={j} className="h-16 glass rounded-2xl border border-white/10 flex items-center px-6 justify-between transform transition-all group-hover:translate-x-4" style={{ transitionDelay: `${j * 100}ms` }}>
                           <div className="h-2 w-32 bg-white/20 rounded-full" />
                           <div className="w-6 h-6 rounded-lg bg-brand-blue flex items-center justify-center">
                              <ArrowUpRight className="w-4 h-4 text-white" />
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               
               <button className="absolute bottom-12 right-12 w-20 h-20 rounded-full bg-white text-brand-blue flex items-center justify-center shadow-strong-glow hover:scale-110 transition-all invisible group-hover:visible">
                  <ExternalLink className="w-8 h-8" />
               </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
