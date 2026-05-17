import { motion } from "motion/react";
import { FileText, Scale, Zap, UserCheck, ShieldAlert, CreditCard, Ban, Gavel } from "lucide-react";

export default function Terms() {
  const sections = [
    {
      title: "Platform Usage",
      icon: Zap,
      content: "By accessing Operlo AI, you agree to use our automated systems and infrastructure for professional business purposes. Any attempt to reverse-engineer or disrupt our neural frameworks is strictly prohibited."
    },
    {
      title: "Service Terms",
      icon: FileText,
      content: "Our AI systems provide operational blueprints and automation execution. While we architect for peak performance, the client remains responsible for final verification of business logic applied through our automated tools."
    },
    {
      title: "Client Responsibilities",
      icon: UserCheck,
      content: "Clients must provide accurate business data to allow our systems to function optimally. You are responsible for maintaining the security of any credentials used to sync our tools with your internal stack."
    },
    {
      title: "Payment & Subscription",
      icon: CreditCard,
      content: "Service plans are billed according to the selected protocol. Custom enterprise architectures require separate engagement agreements. All fees are non-refundable once implementation has commenced."
    },
    {
      title: "Liability Limitations",
      icon: ShieldAlert,
      content: "Operlo AI provides high-performance infrastructure but is not liable for indirect or consequential losses resulting from business decisions made based on AI-generated data or automated workflows."
    },
    {
      title: "Intellectual Property",
      icon: Scale,
      content: "The Operlo framework, neural node logic, and proprietary scaling blueprints remain the exclusive property of Operlo AI Inc. Clients retain full ownership of their proprietary business data."
    },
    {
      title: "Termination Conditions",
      icon: Ban,
      content: "We reserve the right to suspend access to our automated clusters if terms are violated. Termination of services follows the protocols outlined in your specific implementation agreement."
    },
    {
      title: "Governing Law",
      icon: Gavel,
      content: "These terms are governed by the laws of the jurisdiction where Operlo AI Inc. is registered. Any disputes will be resolved through professional arbitration protocols."
    }
  ];

  return (
    <div className="bg-luxury-black min-h-screen pt-32 pb-24 px-4 overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
         <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-blue/20 rounded-full blur-[120px]" />
         <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-electric/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass bg-brand-blue/10 rounded-full text-brand-electric text-[10px] font-black uppercase tracking-[0.4em] mb-8">
             <Scale className="w-3 h-3" />
             Client Infrastructure
          </div>
          <h1 className="text-5xl sm:text-7xl font-display font-black uppercase italic tracking-tighter leading-none mb-6">
            Terms of <span className="text-white/30">Service.</span>
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
          <h3 className="text-xl font-bold uppercase mb-4 tracking-tighter">Legal Inquiries?</h3>
          <p className="text-white/40 mb-8 font-description italic">Explore our framework protocols or contact our legal team.</p>
          <a 
            href="/contact" 
            className="inline-block px-10 py-5 bg-white text-brand-blue rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-glow"
          >
            Inquire Strategic Review
          </a>
        </motion.div>
      </div>
    </div>
  );
}
