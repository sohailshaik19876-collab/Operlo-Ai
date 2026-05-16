import { motion, AnimatePresence } from "motion/react";
import { Play, Pause, Monitor, Smartphone, MessageCircle, Database, Layout, Phone } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

const demos = [
  {
    title: "AI Voice Agent",
    type: "Real-time Voice",
    desc: "Experience zero-latency AI handling a real estate lead inquiry via neural voice synthesis.",
    icon: Phone,
  },
  {
    title: "CRM Intelligence",
    type: "Backend Flow",
    desc: "Watch our CRM architecture score leads and trigger multi-channel follow-up sequences.",
    icon: Database,
  },
  {
    title: "Onboarding Processor",
    type: "Client Ops",
    desc: "An end-to-end automated setup engine for new clients, handling document collection instantly.",
    icon: Layout,
  }
];

export default function Demo() {
  const [activeDemo, setActiveDemo] = useState(0);

  return (
    <div className="pt-24 sm:pt-28 pb-20 px-4 max-w-7xl mx-auto">
       <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className="inline-block px-4 py-1.5 glass rounded-full text-brand-electric text-xs font-black uppercase tracking-widest mb-6"> Live Showcase </div>
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 italic tracking-tighter">See It In <span className="text-white/40">Action.</span></h1>
        <p className="text-xl text-white/50 leading-relaxed font-description">
          Interactive previews of our most powerful autonomous systems. No slides, just real demonstrations.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-1 space-y-6">
          {demos.map((d, i) => (
            <button
              key={i}
              onClick={() => setActiveDemo(i)}
              className={cn(
                "w-full text-left p-8 rounded-[32px] border transition-all group relative overflow-hidden",
                activeDemo === i ? "bg-brand-blue border-white/20 shadow-glow" : "glass-dark border-white/5 hover:border-white/10"
              )}
            >
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors",
                activeDemo === i ? "bg-white text-brand-blue" : "bg-brand-blue/10 text-brand-electric"
              )}>
                <d.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2 tracking-tight">{d.title}</h3>
              <p className={cn("text-sm font-description", activeDemo === i ? "text-white/80" : "text-white/40")}>{d.desc}</p>
            </button>
          ))}
        </div>

        <div className="lg:col-span-2">
            <div className="relative glass-dark rounded-[48px] border border-white/10 overflow-hidden shadow-2xl aspect-video flex flex-col">
               <div className="absolute inset-0 bg-brand-blue/5 animate-pulse" />
               
               {/* Browser UI Mockup */}
               <div className="h-10 bg-white/5 border-b border-white/10 flex items-center px-6 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="flex-grow flex justify-center">
                     <div className="h-5 w-64 bg-white/5 rounded-lg" />
                  </div>
               </div>

               <div className="relative flex-grow flex items-center justify-center p-12">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeDemo}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="w-full h-full flex flex-col items-center justify-center text-center"
                    >
                        <div className="w-24 h-24 rounded-full bg-brand-blue flex items-center justify-center mb-8 shadow-strong-glow cursor-pointer hover:scale-110 transition-transform">
                           <Play className="text-white w-10 h-10 fill-current ml-2" />
                        </div>
                        <h4 className="text-3xl font-display font-bold italic tracking-tighter mb-4">Initialize {demos[activeDemo].title}</h4>
                        <p className="text-white/40 max-w-sm font-description">Click play to launch the interactive simulation of this autonomous agent.</p>
                    </motion.div>
                  </AnimatePresence>
               </div>
            </div>
        </div>
      </div>
    </div>
  );
}
