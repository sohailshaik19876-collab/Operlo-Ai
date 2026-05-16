import { motion } from "motion/react";
import { Check, Shield, Zap, Rocket, Building2 } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$2,997",
      desc: "Perfect for small teams looking to automate their first workflow.",
      features: ["1 Custom AI Chatbot", "Core Workflow Integration", "Basic Lead Qualification", "Email Support", "Monthly Strategy Call"],
      cta: "Get Started",
      highlight: false
    },
    {
      name: "Growth",
      price: "$5,497",
      desc: "Comprehensive AI systems for businesses looking to scale aggressively.",
      features: ["3 AI Chatbots + Voice Basic", "Full CRM & Tool Integration", "Adv. Lead Gen Systems", "Priority 24/7 Support", "Bi-Weekly Implementation Audit"],
      cta: "Recommended",
      highlight: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "Tailor-made neural architectures for large-scale operations.",
      features: ["Unlimited AI Agents", "Custom Private LLM Training", "White-Glove Implementation", "Dedicated AI Architect", "Security & HIPAA Compliance"],
      cta: "Inquire Now",
      highlight: false
    }
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-20 px-4 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className="inline-block px-4 py-1.5 glass rounded-full text-brand-electric text-xs font-black uppercase tracking-widest mb-6"> Scalable Pricing </div>
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 italic tracking-tighter">Invest In <br /> <span className="text-white/40">Efficiency.</span></h1>
        <p className="text-xl text-white/50 leading-relaxed font-description">
          No hourly bills. No hidden fees. Just high-performance systems built to generate massive ROI.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className={cn(
              "rounded-[40px] p-8 sm:p-10 border transition-all flex flex-col h-full relative overflow-hidden",
              plan.highlight ? "bg-brand-blue border-white/20 shadow-strong-glow lg:scale-105 z-10" : "glass-dark border-white/5 hover:border-white/10"
            )}
          >
            {plan.highlight && (
              <div className="absolute top-6 right-6 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest">
                Most Popular
              </div>
            )}
            <h3 className="text-2xl font-bold mb-2 italic tracking-tight uppercase">{plan.name}</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-5xl font-display font-black tracking-tighter italic">{plan.price}</span>
              <span className="text-white/40 text-sm font-bold">/setup</span>
            </div>
            <p className={cn("text-sm mb-12 font-description italic leading-relaxed", plan.highlight ? "text-white/80" : "text-white/50")}>
              {plan.desc}
            </p>
            
            <ul className="space-y-4 mb-16 flex-grow">
              {plan.features.map((f, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className={cn("w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0", plan.highlight ? "bg-white/20" : "bg-brand-blue/20 shadow-glow")}>
                    <Check className={cn("w-3 h-3", plan.highlight ? "text-white" : "text-brand-electric")} />
                  </div>
                  <span className="text-sm font-bold tracking-tight opacity-80">{f}</span>
                </li>
              ))}
            </ul>

            <button className={cn(
              "w-full py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] transition-all shadow-glow hover:shadow-strong-glow transform active:scale-95",
              plan.highlight ? "bg-white text-brand-blue" : "bg-white/5 border border-white/10 hover:bg-white/10 text-white"
            )}>
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

import { cn } from "../lib/utils";
