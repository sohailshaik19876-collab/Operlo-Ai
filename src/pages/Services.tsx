import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  Bot, Zap, BarChart3, Globe, ShieldCheck, Mail, Phone, 
  Calendar, UserPlus, Layers, ArrowRight, CheckCircle2, 
  Sparkles, Cpu, MessageSquare, Monitor
} from "lucide-react";

const services = [
  {
    id: "voice",
    icon: Phone,
    title: "AI Voice Systems",
    desc: "Custom voice systems that handle calls, answer questions, and qualify leads automatically with human-grade tonality.",
    metrics: "24/7 Coverage • 0s Delay",
    features: ["Inbound/Outbound Handling", "Human-Grade Tonality", "Direct CRM Call Log Sync", "Automated Appointment Setting", "Multi-language Support"],
    mockup: {
      title: "Voice Queue",
      items: ["Incoming Call: Sarah T.", "Lead Status: Qualified", "Analysis: Positive Intent"]
    }
  },
  {
    id: "workflows",
    icon: Zap,
    title: "Automated Workflows",
    desc: "Automate repetitive business tasks and sync data across your tools to save hours of manual work.",
    metrics: "Real-time Sync • 100% Accuracy",
    features: ["Cross-platform Data Sync", "Automated Document Flow", "Slack/Teams Operational Alerts", "Custom Logic Integrations", "Legacy System Bridging"],
    mockup: {
       title: "System Map",
       items: ["If Lead > $10k → Notify CEO", "Sync HubSpot → GoHighLevel", "Generate Auto-Invoice"]
    }
  },
  {
    id: "chatbots",
    icon: MessageSquare,
    title: "AI Customer Support",
    desc: "Automatically qualify leads and answer customer questions 24/7 on your website or WhatsApp.",
    metrics: "98% Resolution • 24/7 Support",
    features: ["Lead Qualification Flows", "Natural Language FAQ Handling", "WhatsApp Business Deep Integration", "Visual Product Recommendations", "Live Handover Protocols"],
    mockup: {
       title: "Live Support",
       items: ["User: How do I scale?", "AI: Analyzing Business...", "AI: Automating Workflow."]
    }
  },
  {
    id: "crm",
    icon: Monitor,
    title: "CRM Automation",
    desc: "Ensure no lead is ever lost with automated follow-ups and pipeline management across your CRM.",
    metrics: "+300% Nurture • 0 Drop-offs",
    features: ["Automated Pipeline Routing", "Behavioral Follow-up Logic", "Database Re-activation Campaigns", "Dynamic Lead Scoring", "Instant Speed-to-Lead"],
    mockup: {
       title: "Pipeline Status",
       items: ["Lead: Marcus T. → Qualified", "Follow-up Sent: 2m ago", "Status: Discovery Booked"]
    }
  }
];

export default function Services() {
  return (
    <div className="relative overflow-hidden pt-32 pb-20">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-[1000px] bg-brand-blue/5 blur-[150px] rounded-full pointer-events-none opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-32"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass bg-brand-blue/10 rounded-full text-brand-electric text-[10px] font-black uppercase tracking-[0.3em] mb-10">
             <Sparkles className="w-3 h-3" />
             Our Services 
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-black mb-10 italic tracking-tighter leading-[0.9] uppercase">
            AI Automation <br /> <span className="text-white/30">Systems.</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/50 leading-relaxed font-description italic max-w-2xl mx-auto">
            We build AI systems that automate your operations, lead generation, and customer communication.
          </p>
        </motion.div>

        {/* Detailed Service Sections */}
        <div className="space-y-40">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-24`}
            >
              <div className="lg:w-1/2 space-y-10">
                <div className="flex flex-col gap-6">
                  <div className="w-16 h-16 rounded-[24px] bg-brand-blue flex items-center justify-center shadow-strong-glow text-white">
                    <s.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-4xl sm:text-6xl font-display font-black tracking-tighter uppercase italic leading-[0.9] text-white">
                    {s.title}
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-xl text-white/60 font-description italic leading-relaxed border-l-2 border-brand-electric pl-8">
                    {s.desc}
                  </p>
                  <div className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-electric px-8">
                     Benchmark: {s.metrics}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {s.features.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 glass-dark rounded-2xl border border-white/5 hover:border-brand-blue/30 transition-all group">
                      <CheckCircle2 className="w-4 h-4 text-brand-electric group-hover:scale-125 transition-transform" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
                        {f}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                   <Link to="/contact" className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-brand-electric group">
                      Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                   </Link>
                </div>
              </div>

              {/* Visual Mockup Side */}
              <div className="lg:w-1/2 w-full relative">
                 <div className="absolute inset-0 bg-brand-blue/10 blur-[100px] rounded-full animate-pulse" />
                 <div className="relative glass-dark rounded-[48px] border border-white/10 p-1 bg-gradient-to-br from-white/10 to-transparent overflow-hidden aspect-[4/3] sm:aspect-square flex flex-col justify-between">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
                    
                    <div className="p-8 sm:p-12 relative z-10 flex flex-col h-full">
                       <div className="flex justify-between items-center mb-10">
                          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-electric">{s.mockup.title}</span>
                          <div className="flex gap-1.5">
                             <div className="w-2 h-2 rounded-full bg-white/20" />
                             <div className="w-2 h-2 rounded-full bg-white/20" />
                             <div className="w-2 h-2 rounded-full bg-brand-electric animate-pulse" />
                          </div>
                       </div>

                       <div className="space-y-6 flex-grow">
                          {s.mockup.items.map((item, idx) => (
                            <motion.div 
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.2 }}
                              className="p-6 glass rounded-2xl border border-white/5 flex items-center justify-between group cursor-default"
                            >
                               <div className="flex items-center gap-4">
                                  <div className="w-2 h-2 rounded-full bg-brand-blue" />
                                  <span className="text-sm font-bold text-white/50 group-hover:text-white transition-colors">{item}</span>
                               </div>
                               <ArrowRight className="w-4 h-4 text-white/10 group-hover:text-brand-electric" />
                            </motion.div>
                          ))}
                       </div>

                       <div className="mt-10 pt-10 border-t border-white/5 flex justify-between items-end">
                          <div>
                             <div className="text-2xl font-display font-black text-white italic">+142%</div>
                             <div className="text-[8px] font-black uppercase tracking-widest text-white/30">Weekly Efficiency Gain</div>
                          </div>
                          <Cpu className="w-10 h-10 text-white/5" />
                       </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA Portal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-40 p-12 sm:p-24 glass-dark rounded-[60px] border border-white/10 text-center relative overflow-hidden group shadow-strong-glow"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-10">
            <h2 className="text-4xl sm:text-6xl font-display font-black uppercase italic tracking-tighter leading-[0.9]">
              Built <br /> <span className="text-brand-electric">To Scale.</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/60 font-description italic leading-relaxed">
              We build custom AI systems to save you time and help you scale. Book your free strategy call today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="px-10 py-5 bg-white text-brand-blue rounded-2xl font-black text-base hover:scale-105 transition-all shadow-glow flex items-center justify-center gap-3">
                Book Free Strategy Call
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/pricing" className="px-10 py-5 glass border border-white/10 hover:border-brand-blue text-white rounded-2xl font-black text-base hover:bg-white/5 transition-all">
                View Systems Plans
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
