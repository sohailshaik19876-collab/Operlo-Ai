import { motion } from "motion/react";
import { 
  Building2, Landmark, Rocket, HeartPulse, ShoppingBag, 
  Briefcase, GraduationCap, CheckCircle2, ArrowRight, 
  Sparkles, Shield, Zap, Globe, Cpu 
} from "lucide-react";

const industries = [
  {
    id: "realestate",
    icon: Building2,
    name: "Real Estate & Mortgage",
    pain: "Missed lead calls, slow response times, complex document chasing.",
    gain: "24/7 AI property assistants, automated credit-pulls, instant qualification.",
    tags: ["0.2s Lead Response", "Automated Bookings"]
  },
  {
    id: "agencies",
    icon: Rocket,
    name: "Agencies & SaaS",
    pain: "Scale plateaus, high overhead, manual outbound outreach fatigue.",
    gain: "Autonomous lead generation, white-label AI chatbots, automated reporting.",
    tags: ["Lead Engine", "SaaS Scaler"]
  },
  {
    id: "healthcare",
    icon: HeartPulse,
    name: "Healthcare & Clinics",
    pain: "Appointment no-shows, phone line congestion, patient record admin.",
    gain: "Voice agents for booking, HIPAA-compliant follow-ups, automated reminders.",
    tags: ["HIPAA Sync", "Zero No-Shows"]
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    name: "E-commerce & Brands",
    pain: "Cart abandonment, basic support query overload, low LTV.",
    gain: "Personalized AI shopping assistants, automated upsell flows, instant support.",
    tags: ["LTV Booster", "Cart Recovery"]
  },
  {
    id: "services",
    icon: Briefcase,
    name: "Professional Services",
    pain: "Manually quoting jobs, chasing invoices, inefficient scheduling.",
    gain: "AI estimate generators, automated invoicing, real-time scheduling bots.",
    tags: ["Auto-Invoicing", "Logic Estimator"]
  },
  {
    id: "consultants",
    icon: GraduationCap,
    name: "Coaches & Consultants",
    pain: "Manual discovery calls, disorganized onboarding, content bottlenecks.",
    gain: "AI qualification agents, automated onboarding, personalized client dashboards.",
    tags: ["Vetted Leads", "Auto-Onboarding"]
  }
];

export default function Industries() {
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass bg-brand-blue/10 rounded-full text-brand-electric text-[10px] font-black uppercase tracking-[0.3em] mb-10">
             <Globe className="w-3 h-3" />
             Industries 
          </div>
          <h1 className="text-4xl sm:text-7xl md:text-8xl font-display font-black mb-10 italic tracking-tighter uppercase leading-[0.9] px-2">
            Architected For <br /> <span className="text-white/30">Industry Growth.</span>
          </h1>
          <p className="text-base sm:text-xl text-white/50 leading-relaxed font-description italic max-w-2xl mx-auto px-4">
            Our AI systems are designed specifically for your industry. We deploy systems built to solve the unique friction points of your sector.
          </p>
        </motion.div>

        {/* Industry Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {industries.map((ind, i) => (
             <motion.div
               key={ind.id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="glass-dark rounded-[40px] sm:rounded-[48px] border border-white/5 p-8 sm:p-10 flex flex-col justify-between group hover:border-brand-blue/30 transition-all duration-500 relative overflow-hidden mx-2 sm:mx-0"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div>
                   <div className="w-20 h-20 rounded-[28px] bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-glow group-hover:bg-brand-blue transition-all duration-700">
                      <ind.icon className="w-10 h-10 text-brand-electric group-hover:text-white" />
                   </div>
                   <h3 className="text-3xl font-display font-black tracking-tighter uppercase italic text-white mb-6 leading-tight">
                      {ind.name}
                   </h3>
                   <div className="flex flex-wrap gap-2 mb-8">
                      {ind.tags.map(t => (
                        <span key={t} className="text-[8px] font-black uppercase tracking-widest px-3 py-1 bg-brand-blue/10 text-brand-electric rounded-lg border border-brand-electric/20">{t}</span>
                      ))}
                   </div>
                   
                   <div className="space-y-6 mb-12">
                      <div className="space-y-2">
                         <div className="text-[10px] font-black uppercase tracking-widest text-white/20">The Problem</div>
                         <p className="text-sm text-white/50 font-description italic leading-relaxed">{ind.pain}</p>
                      </div>
                      <div className="space-y-2">
                         <div className="text-[10px] font-black uppercase tracking-widest text-brand-electric">The Solution</div>
                         <p className="text-sm text-white/80 font-description italic leading-relaxed">{ind.gain}</p>
                      </div>
                   </div>
                </div>

                <button 
                  onClick={() => window.location.href = "/contact"}
                  className="w-full py-5 glass border border-white/10 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 group/btn hover:bg-white hover:text-brand-blue transition-all shadow-glow"
                >
                   Book Strategy Call
                   <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                </button>
             </motion.div>
           ))}
        </div>

        {/* Global Impact Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 sm:mt-32 p-8 sm:p-20 glass-dark rounded-[40px] sm:rounded-[60px] border border-white/10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 mx-2 sm:mx-0"
        >
           <div className="relative z-10 max-w-xl text-center md:text-left">
              <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tighter uppercase italic mb-6 leading-[0.9] px-2 sm:px-0">
                 Crossing The <br className="sm:hidden" /> <span className="text-brand-electric italic">Growth Gap.</span>
              </h2>
              <p className="text-base sm:text-lg text-white/40 font-description italic leading-relaxed px-4 sm:px-0">
                 We've built AI systems for over 12 industries. No matter your sector, the bottleneck is always manual work. We help you automate it.
              </p>
           </div>
           
           <div className="grid grid-cols-2 gap-8 relative z-10">
              {[
                { label: "Systems Live", val: "400+" },
                { label: "Time Saved", val: "1.2M hrs" }
              ].map(stat => (
                <div key={stat.label} className="text-center">
                   <div className="text-4xl sm:text-6xl font-display font-black italic tracking-tighter text-white mb-2">{stat.val}</div>
                   <div className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-electric">{stat.label}</div>
                </div>
              ))}
           </div>
        </motion.div>
      </div>
    </div>
  );
}
