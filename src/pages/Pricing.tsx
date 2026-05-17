import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Check, Shield, Zap, Rocket, Building2, ArrowRight, Star } from "lucide-react";
import { cn } from "../lib/utils";

export default function Pricing() {
  const plans = [
    {
      name: "Starter Plan",
      price: "$2,997",
      desc: "Perfect for high-growth teams deploying their first AI automation system.",
      features: ["1 Custom AI Workflow", "Core CRM Integration", "Basic Lead Qualification", "AI System Monitoring", "Monthly Implementation Review"],
      cta: "Get Started",
      highlight: false
    },
    {
      name: "Growth Engine",
      price: "$5,497",
      desc: "Full-scale AI automation for businesses scaling to the next tier.",
      features: ["Full Service Ecosystem", "Voice & Chat Integration", "Advanced Lead Generation", "Priority 24/7 AI Support", "Bi-Weekly Strategy Audits", "Custom Systems"],
      cta: "Scale Now",
      highlight: true
    },
    {
      name: "Enterprise Core",
      price: "Custom",
      desc: "Custom AI systems built for complex business operations.",
      features: ["Unlimited AI Agents", "Private LLM Training", "White-Glove Service", "Dedicated AI Director", "Custom Security Protocols", "Legacy Bridge Engineering"],
      cta: "Contact Us",
      highlight: false
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none opacity-20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass bg-brand-blue/10 rounded-full text-brand-electric text-[10px] font-black uppercase tracking-[0.3em] mb-10"> 
            <Zap className="w-3 h-3" />
            ROI Engineered Pricing 
          </div>
          <h1 className="text-4xl sm:text-7xl md:text-8xl font-display font-black mb-10 italic tracking-tighter uppercase leading-[0.9] px-2">
            Invest In <br /> <span className="text-white/30">Growth.</span>
          </h1>
          <p className="text-base sm:text-xl text-white/50 leading-relaxed font-description italic max-w-xl mx-auto px-4">
            Our systems don't cost money—they buy you back your time and scale your performance exponentially.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "rounded-[48px] p-10 sm:p-12 border transition-all flex flex-col h-full relative overflow-hidden group",
                plan.highlight ? "bg-brand-blue border-white/20 shadow-strong-glow lg:scale-105 z-10" : "glass-dark border-white/5 hover:border-brand-blue/20"
              )}
            >
              {plan.highlight && (
                <div className="absolute top-10 right-10 flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-white">
                  <Star className="w-3 h-3 fill-white" />
                  Most Performance
                </div>
              )}
              
              <div className="mb-12">
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-4">{plan.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl sm:text-6xl font-display font-black tracking-tighter italic text-white leading-none">{plan.price}</span>
                  <span className={cn("text-xs font-black uppercase tracking-widest", plan.highlight ? "text-white/60" : "text-white/20")}>/setup</span>
                </div>
              </div>

              <p className={cn("text-base mb-12 font-description italic leading-relaxed", plan.highlight ? "text-white/80" : "text-white/40")}>
                {plan.desc}
              </p>
              
              <div className="space-y-4 mb-20 flex-grow">
                {plan.features.map((f, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className={cn("w-6 h-6 rounded-xl flex items-center justify-center flex-shrink-0 animate-pulse", plan.highlight ? "bg-white/20" : "bg-brand-blue/20 shadow-glow")}>
                      <Check className={cn("w-3 h-3", plan.highlight ? "text-white" : "text-brand-electric")} />
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-white/70 italic">{f}</span>
                  </div>
                ))}
              </div>

              <button className={cn(
                "w-full py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 active:scale-95",
                plan.highlight ? "bg-white text-brand-blue hover:scale-[1.02] shadow-2xl" : "bg-white/5 border border-white/10 hover:bg-brand-blue hover:text-white"
              )}>
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Enterprise Bottom Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 glass-dark rounded-[40px] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-8 h-8 text-brand-electric" />
              </div>
              <div>
                <h4 className="text-xl font-display font-black tracking-tighter uppercase italic text-white leading-tight">Need a Multi-Entity Solution?</h4>
                <p className="text-sm text-white/40 font-description italic mt-1">We engineer complex systems for agencies and holding companies.</p>
              </div>
            </div>
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 glass border border-white/10 hover:border-brand-blue text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all text-center">
              Contact Our Team 
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
