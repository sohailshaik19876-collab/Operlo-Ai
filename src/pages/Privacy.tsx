import { motion } from "motion/react";
import { Shield, Lock, Eye, FileText, Globe, Server, CheckCircle2 } from "lucide-react";

export default function Privacy() {
  const sections = [
    {
      title: "Information Collected",
      icon: Eye,
      content: "We collect information you provide directly to us through lead forms, chatbot interactions, and strategy call bookings. This includes your name, business email, industry, and specific business goals or friction points you share with our AI system."
    },
    {
      title: "Cookies & Analytics",
      icon: Globe,
      content: "Operlo AI uses essential and performance cookies to optimize your experience. We analyze visitor behavior to refine our automated systems' performance and ensure our framework meets modern scaling demands."
    },
    {
      title: "Lead Forms & Chatbots",
      icon: FileText,
      content: "Data entered into our AI assistant or lead forms is secured using enterprise-grade encryption. This data is used specifically to architect personalized automation blueprints and synchronize with our internal CRM systems."
    },
    {
      title: "Integrations & Third Parties",
      icon: CheckCircle2,
      content: "We integrate with industry champions like Calendly for scheduling and premium CRMs for lead management. Your data is only shared with these services to facilitate the specific automation services you request."
    },
    {
      title: "Data Security",
      icon: Lock,
      content: "Our infrastructure is built on a zero-trust model. We employ SSL encryption, secure API gateways, and regular security audits to protect your business intelligence from unauthorized access."
    },
    {
      title: "GDPR & User Rights",
      icon: Shield,
      content: "We fully comply with GDPR standards. You have the right to access, rectify, or delete your data at any time. Our systems are designed to respect data sovereignty and user privacy choices."
    }
  ];

  return (
    <div className="bg-luxury-black min-h-screen pt-32 pb-24 px-4 overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
         <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-blue/20 rounded-full blur-[120px]" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-electric/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass bg-brand-blue/10 rounded-full text-brand-electric text-[10px] font-black uppercase tracking-[0.4em] mb-8">
             <Shield className="w-3 h-3" />
             Legal Infrastructure
          </div>
          <h1 className="text-5xl sm:text-7xl font-display font-black uppercase italic tracking-tighter leading-none mb-6">
            Privacy <span className="text-white/30">Policy.</span>
          </h1>
          <p className="text-white/40 text-xs font-black uppercase tracking-[0.3em] mb-12">Last Updated: May 16, 2026</p>
          <div className="w-20 h-[1px] bg-brand-electric mx-auto" />
        </motion.div>

        <div className="space-y-12">
          {sections.map((section, i) => (
            <motion.section
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="flex flex-col md:flex-row gap-8 p-10 glass-dark rounded-[40px] border border-white/5 hover:border-brand-blue/20 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center shrink-0 group-hover:bg-brand-blue transition-colors duration-500">
                  <section.icon className="w-8 h-8 text-brand-electric group-hover:text-white transition-colors" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold uppercase italic tracking-tighter group-hover:text-brand-electric transition-colors">{section.title}</h2>
                  <p className="text-white/50 text-lg font-description italic leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-12 glass rounded-[44px] border border-white/5 text-center"
        >
          <h3 className="text-xl font-bold uppercase mb-4 tracking-tighter">Questions regarding your data?</h3>
          <p className="text-white/40 mb-8 font-description italic">Reach out to our security compliance team directly.</p>
          <a 
            href="mailto:compliance@operlo.ai" 
            className="inline-block px-10 py-5 bg-white text-brand-blue rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-glow"
          >
            Contact Compliance
          </a>
        </motion.div>
      </div>
    </div>
  );
}
