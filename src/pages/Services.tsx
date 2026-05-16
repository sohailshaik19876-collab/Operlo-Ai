import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Bot, Zap, BarChart3, Globe, ShieldCheck, Mail, Phone, Calendar, UserPlus, Layers } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Chatbots",
    desc: "Intelligent concierge systems for websites and WhatsApp that qualify leads, answer FAQs, and book appointments 24/7.",
    features: ["Instant Lead Qualification", "Direct Appointment Booking", "CRM Deep Integration"]
  },
  {
    icon: Phone,
    title: "AI Voice Agents",
    desc: "Neural voice assistants capable of handling phone conversations, answering inquiries, and qualifying prospects with human-grade tonality.",
    features: ["Inbound/Outbound Handling", "Zero Response Latency", "Automated Lead Sieve"]
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    desc: "End-to-end operational automation that deletes repetitive admin work and syncs mission-critical data across your entire stack.",
    features: ["Multi-platform Data Sync", "Automated Notificaitons", "Operational Efficiency Engine"]
  },
  {
    icon: BarChart3,
    title: "CRM Automation",
    desc: "High-performance systems that automate follow-ups, pipeline management, and task assignments to ensure no lead is ever left behind.",
    features: ["Automated Nurture Flows", "Static Lead Revitalization", "Dynamic Pipeline Routing"]
  },
  {
    icon: Mail,
    title: "Lead Gen Systems",
    desc: "AI-powered lead capture and qualification architectures designed to flood your calendar with high-intent, qualified buyers.",
    features: ["Intelligent Lead Routing", "Behavioral Qualification", "Automated Prospect Vetting"]
  },
  {
    icon: Globe,
    title: "WhatsApp & Email Automation",
    desc: "Hyper-responsive communication systems for automated follow-ups, appointment reminders, and scalable nurture campaigns.",
    features: ["WhatsApp Business API", "Personalized Email Sequences", "Multi-channel Engagement"]
  },
  {
    icon: UserPlus,
    title: "Client Onboarding",
    desc: "Smooth, automated onboarding workflows that handle document collection, forms, and client setups with zero manual intervention.",
    features: ["Automated Document Collection", "Onboarding Logic Flow", "Seamless CRM Handover"]
  },
  {
    icon: Layers,
    title: "Custom AI Systems",
    desc: "Bespoke AI automation ecosystems tailored to solve the specific bottlenecks holding your company back from exponential scaling.",
    features: ["Internal AI Business Tools", "Custom API Integrations", "Private Neural Architectures"]
  }
];

export default function Services() {
  return (
    <div className="pt-24 sm:pt-28 pb-20 px-4 h-full">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-1.5 glass rounded-full text-brand-electric text-xs font-black uppercase tracking-widest mb-6"> Our Capabilities </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 italic tracking-tighter">Enterprise Grade <br /> <span className="text-white/40">AI Automation.</span></h1>
          <p className="text-xl text-white/50 leading-relaxed font-description">
            We build the neural infrastructure that powers the next generation of industry leaders.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-dark border border-white/5 rounded-[40px] p-8 sm:p-10 group hover:border-brand-blue/30 transition-all flex flex-col md:flex-row gap-8"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-brand-blue/10 flex-shrink-0 flex items-center justify-center shadow-glow group-hover:bg-brand-blue transition-colors duration-500">
                <s.icon className="w-8 h-8 sm:w-10 sm:h-10 text-brand-electric group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold mb-4 italic tracking-tight">{s.title}</h3>
                <p className="text-white/50 text-base sm:text-lg mb-8 leading-relaxed italic font-description">{s.desc}</p>
                <div className="space-y-3">
                   {s.features.map((f, idx) => (
                     <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-bold text-white/70">
                       <div className="w-1.5 h-1.5 rounded-full bg-brand-electric" />
                       {f}
                     </div>
                   ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 sm:mt-32 p-8 sm:p-16 glass-dark rounded-[48px] border border-white/10 text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 blur-[100px] pointer-events-none" />
           <h2 className="text-3xl sm:text-5xl font-display font-bold mb-6 sm:mb-8 italic tracking-tighter">Not sure where to start?</h2>
           <p className="text-base sm:text-lg text-white/50 mb-10 max-w-xl mx-auto font-description">Get a custom AI implementation roadmap for your business. Zero commitment, 100% value.</p>
           <Link to="/contact" className="px-10 py-5 bg-white text-brand-blue rounded-2xl font-black shadow-glow hover:scale-105 transition-all inline-block uppercase tracking-widest text-sm">
             Request Strategic Audit
           </Link>
        </div>
      </div>
    </div>
  );
}
