import { motion } from "motion/react";
import { Building2, Landmark, Rocket, HeartPulse, ShoppingBag, Briefcase, GraduationCap, CheckCircle2 } from "lucide-react";

const industries = [
  {
    icon: Building2,
    name: "Real Estate & Mortgage",
    pain: "Missed lead calls, slow response times, complex document chasing.",
    gain: "24/7 AI property assistants, automated credit-pulls, instant qualification.",
    link: "/contact"
  },
  {
    icon: Rocket,
    name: "Agencies & SaaS",
    pain: "Scale plateaus, high overhead, manual outbound outreach fatigue.",
    gain: "Autonomous lead generation, white-label AI chatbots, automated reporting.",
    link: "/contact"
  },
  {
    icon: HeartPulse,
    name: "Healthcare & Clinics",
    pain: "Appointment no-shows, phone line congestion, patient record admin.",
    gain: "Voice agents for booking, HIPAA-compliant follow-ups, automated reminders.",
    link: "/contact"
  },
  {
    icon: ShoppingBag,
    name: "E-commerce & Brands",
    pain: "Cart abandonment, basic support query overload, low LTV.",
    gain: "Personalized AI shopping assistants, automated upsell flows, instant support.",
    link: "/contact"
  },
  {
    icon: Briefcase,
    name: "Service & Local Business",
    pain: "Manually quoting jobs, chasing invoices, inefficient scheduling.",
    gain: "AI estimate generators, automated invoicing, real-time scheduling bots.",
    link: "/contact"
  },
  {
    icon: GraduationCap,
    name: "Coaches & Consultants",
    pain: "Manual discovery calls, disorganized onboarding, content bottlenecks.",
    gain: "AI qualification agents, automated onboarding, personalized client dashboards.",
    link: "/contact"
  },
  {
    icon: Landmark,
    name: "Enterprise & Protection",
    pain: "Siloed data, slow compliance processes, legacy communication friction.",
    gain: "Custom AI ecosystems, automated protection advice, end-to-end process audits.",
    link: "/contact"
  }
];

export default function Industries() {
  return (
    <div className="pt-24 sm:pt-28 pb-20 px-4 max-w-7xl mx-auto">
       <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-1.5 glass rounded-full text-brand-electric text-xs font-black uppercase tracking-widest mb-6"> Sector Solutions </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 italic tracking-tighter">Built For <br /> <span className="text-white/40">Growth Leaders.</span></h1>
          <p className="text-xl text-white/50 leading-relaxed font-description">
            From emerging startups to established enterprises, we solve the common problems that hold businesses back from scaling.
          </p>
        </motion.div>

        <div className="space-y-12">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-dark rounded-[48px] p-8 md:p-12 border border-white/5 overflow-hidden relative flex flex-col md:flex-row items-center gap-12 group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-[100px]" />
              <div className="w-32 h-32 rounded-[32px] bg-brand-blue/10 flex items-center justify-center shadow-glow flex-shrink-0 group-hover:scale-110 transition-all duration-700">
                <ind.icon className="w-16 h-16 text-brand-electric" />
              </div>
              <div className="flex-grow">
                <h3 className="text-4xl font-display font-bold mb-6 italic tracking-tight">{ind.name}</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-6 rounded-3xl bg-red-500/5 border border-red-500/10">
                    <h4 className="text-red-400 font-bold uppercase text-xs tracking-widest mb-3">Common Bottlenecks</h4>
                    <p className="text-white/60 italic font-description">{ind.pain}</p>
                  </div>
                  <div className="p-6 rounded-3xl bg-green-500/5 border border-green-500/10">
                    <h4 className="text-green-400 font-bold uppercase text-xs tracking-widest mb-3">AI Advantage</h4>
                    <p className="text-white/60 italic font-description">{ind.gain}</p>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                 <button className="w-16 h-16 rounded-full bg-white text-brand-blue flex items-center justify-center hover:scale-110 transition-all shadow-2xl">
                    <CheckCircle2 className="w-8 h-8" />
                 </button>
              </div>
            </motion.div>
          ))}
        </div>
    </div>
  );
}
