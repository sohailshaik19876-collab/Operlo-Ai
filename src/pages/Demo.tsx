import { motion } from "motion/react";
import { Bot, Zap, MessageSquare, Phone, Layers, Play, CheckCircle2, Cpu, Globe, BarChart3, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Demo() {
  const [activeTab, setActiveTab] = useState<"voice" | "chat" | "workflow">("voice");

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-[20%] w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-brand-electric/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 grid-background opacity-20" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 glass rounded-full text-brand-electric text-[10px] font-black uppercase tracking-[0.3em] mb-6"
          >
            Live Neural Showcase
          </motion.div>
          <h1 className="text-5xl sm:text-7xl font-display font-black tracking-tighter uppercase italic leading-tight mb-8">
            Experience The <span className="text-brand-electric underline underline-offset-8 decoration-white/10">Future.</span>
          </h1>
          <p className="text-xl text-white/50 max-w-2xl mx-auto font-description italic leading-relaxed">
            Witness the autonomous systems that delete bottlenecks in real-time. Select a diagnostic module below.
          </p>
        </div>

        {/* Diagnostic Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {[
            { id: "voice", icon: Phone, label: "AI Voice Agent" },
            { id: "chat", icon: MessageSquare, label: "Chatbot Logic" },
            { id: "workflow", icon: Layers, label: "Neural Workflows" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-3 transition-all ${
                activeTab === tab.id 
                  ? "bg-brand-blue text-white shadow-strong-glow border-brand-blue" 
                  : "glass text-white/40 border-white/5 hover:border-white/20"
              } border`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Demo Content Shell */}
        <div className="glass-dark rounded-[48px] border border-white/10 p-4 sm:p-8 min-h-[600px] relative overflow-hidden group shadow-2xl">
           {/* Animated Grid Background */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
           
           <div className="relative z-10 w-full h-full">
              {activeTab === "voice" && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                >
                   <div className="space-y-10 order-2 lg:order-1">
                      <div>
                        <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tighter uppercase italic mb-6">Voice <span className="text-brand-electric">Infrastructure.</span></h2>
                        <p className="text-lg text-white/50 font-description leading-relaxed italic">Our neural voice models don't just speak—they interpret intent and execute commands with 0.1s response latency.</p>
                      </div>
                      
                      <div className="space-y-6">
                         {[
                           "Indistinguishable human tonality",
                           "Real-time CRM database syncing",
                           "Complex objection handling flows",
                           "24/7 Global outbound capacity"
                         ].map((item, i) => (
                           <div key={i} className="flex items-center gap-4 group">
                              <div className="w-6 h-6 rounded-lg bg-brand-blue/20 flex items-center justify-center group-hover:bg-brand-blue transition-colors">
                                 <CheckCircle2 className="w-3.5 h-3.5 text-brand-electric group-hover:text-white" />
                              </div>
                              <span className="text-white/60 font-medium tracking-tight uppercase text-xs sm:text-sm">{item}</span>
                           </div>
                         ))}
                      </div>

                      <button className="px-10 py-5 bg-white text-brand-blue rounded-2xl font-black text-xs uppercase tracking-widest shadow-strong-glow hover:scale-105 transition-all flex items-center justify-center gap-3">
                         <Play className="w-5 h-5 fill-current" />
                         Listen to Sample Call
                      </button>
                   </div>
                   
                   <div className="order-1 lg:order-2 flex justify-center">
                      <div className="relative w-full max-w-md aspect-[4/5] glass-dark rounded-[40px] border border-white/10 p-8 flex flex-col justify-between shadow-2xl">
                         <div className="flex justify-between items-start">
                            <div className="space-y-2">
                               <div className="h-4 w-32 bg-white/10 rounded-full animate-pulse" />
                               <div className="h-3 w-48 bg-white/5 rounded-full" />
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-brand-blue flex items-center justify-center shadow-glow"><Phone className="w-6 h-6" /></div>
                         </div>

                         <div className="flex-grow flex flex-col items-center justify-center gap-12">
                            <motion.div 
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ repeat: Infinity, duration: 2 }}
                              className="w-32 h-32 rounded-full border-4 border-brand-blue/30 border-t-brand-blue flex items-center justify-center relative shadow-strong-glow"
                            >
                               <Bot className="w-12 h-12 text-white" />
                               <div className="absolute inset-0 rounded-full border border-brand-electric scale-125 animate-ping opacity-20" />
                            </motion.div>
                            <div className="text-center">
                               <div className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-electric mb-2">Neural Voice Synthesis</div>
                               <div className="text-lg font-bold italic">AI Associate #401 Online</div>
                            </div>
                         </div>

                         <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                            <motion.div 
                              animate={{ x: ["-100%", "100%"] }}
                              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                              className="w-1/3 h-full bg-brand-blue shadow-glow"
                            />
                         </div>
                      </div>
                   </div>
                </motion.div>
              )}

              {activeTab === "chat" && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="grid lg:grid-cols-2 gap-12 h-full items-stretch"
                >
                   <div className="space-y-10 flex flex-col justify-center">
                      <div>
                        <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tighter uppercase italic mb-6">Conversational <span className="text-brand-electric">Agents.</span></h2>
                        <p className="text-lg text-white/50 font-description leading-relaxed italic">Our chatbots learn your entire business logic, allowing them to qualify leads and handle customer support with near-sentient accuracy.</p>
                      </div>
                      
                      <div className="p-8 glass-dark rounded-3xl border border-white/5 bg-brand-blue/5">
                         <div className="flex items-center gap-4 mb-6">
                            <Sparkles className="w-6 h-6 text-brand-electric" />
                            <h4 className="font-bold uppercase italic tracking-tight">Onboarding Logic Activated</h4>
                         </div>
                         <div className="space-y-4">
                            <div className="flex gap-3">
                               <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center flex-shrink-0"><Bot className="w-4 h-4" /></div>
                               <div className="p-4 glass rounded-2xl text-xs font-description italic border border-white/5">Welcome to the diagnostics portal. Which system shall we analyze first?</div>
                            </div>
                            <div className="flex flex-row-reverse gap-3">
                               <div className="w-8 h-8 rounded-lg bg-brand-electric flex items-center justify-center flex-shrink-0"><Zap className="w-4 h-4 text-luxury-black" /></div>
                               <div className="p-4 bg-brand-blue rounded-2xl text-xs font-description italic shadow-glow">Lead Infrastructure</div>
                            </div>
                         </div>
                      </div>
                   </div>
                   
                   <div className=" glass-dark rounded-[40px] border border-white/10 p-2 overflow-hidden shadow-2xl relative">
                      <div className="absolute inset-0 bg-brand-blue/5 pointer-events-none" />
                      <div className="h-full bg-luxury-black/40 rounded-[38px] p-8 flex flex-col">
                        <div className="flex items-center justify-between mb-8 pb-8 border-b border-white/5">
                           <div className="flex items-center gap-4">
                             <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center shadow-glow"><MessageSquare className="w-5 h-5" /></div>
                             <span className="font-black uppercase tracking-widest text-xs">Neural Chat GUI</span>
                           </div>
                           <div className="flex gap-2">
                             {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/10" />)}
                           </div>
                        </div>
                        
                        <div className="flex-grow space-y-6">
                           {[
                             { type: "bot", text: "Initializing context deep-scan..." },
                             { type: "bot", text: "Historical data synced. 12 potential bottlenecks detected." },
                             { type: "user", text: "Show me the lead qualification logic." },
                             { type: "bot", text: "Generating neural graph..." },
                           ].map((m, i) => (
                             <motion.div 
                              initial={{ opacity: 0, x: m.type === "bot" ? -10 : 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.2 }}
                              key={i} 
                              className={`flex ${m.type === "bot" ? "justify-start" : "justify-end"}`}
                             >
                               <div className={`max-w-[80%] p-4 rounded-2xl text-[10px] sm:text-xs font-description italic ${m.type === "bot" ? "glass-dark border border-white/10" : "bg-brand-blue shadow-glow"}`}>
                                 {m.text}
                               </div>
                             </motion.div>
                           ))}
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/5">
                           <div className="w-full h-12 bg-white/5 rounded-xl border border-white/10 flex items-center px-4">
                              <div className="h-3 w-1/2 bg-white/20 rounded-full animate-pulse" />
                           </div>
                        </div>
                      </div>
                   </div>
                </motion.div>
              )}

              {activeTab === "workflow" && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-12"
                >
                   <div className="text-center max-w-2xl mx-auto">
                      <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tighter uppercase italic mb-6">Neural <span className="text-brand-electric">Workflows.</span></h2>
                      <p className="text-lg text-white/50 font-description leading-relaxed italic">Watch how we automate entire departments by connecting intelligence across your tech stack.</p>
                   </div>
                   
                   <div className="grid md:grid-cols-3 gap-8">
                      {[
                        { title: "Lead Inflow", icon: Globe, status: "Active", metrics: "99.9% Capture" },
                        { title: "Neural Filter", icon: Cpu, status: "Processing", metrics: "0.1s Logic" },
                        { title: "CRM Sync", icon: BarChart3, status: "Synced", metrics: "Instant" }
                      ].map((card, i) => (
                        <div key={i} className="p-10 glass-dark rounded-[40px] border border-white/5 hover:border-brand-blue/30 transition-all text-center relative group">
                           <div className="absolute top-4 right-4 flex items-center gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                             <span className="text-[8px] font-black uppercase text-green-500 tracking-widest">{card.status}</span>
                           </div>
                           <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center mx-auto mb-8 shadow-glow group-hover:bg-brand-blue transition-colors">
                              <card.icon className="w-8 h-8 text-brand-electric group-hover:text-white" />
                           </div>
                           <h3 className="text-xl font-bold mb-2 uppercase italic tracking-tight">{card.title}</h3>
                           <p className="text-xs font-black text-white/20 uppercase tracking-[0.2em]">{card.metrics}</p>
                           
                           {i < 2 && (
                             <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                                <ArrowRight className="w-8 h-8 text-brand-blue animate-pulse" />
                             </div>
                           )}
                        </div>
                      ))}
                   </div>

                   <div className="p-8 glass-dark rounded-[40px] border border-white/5 text-center bg-brand-blue/5">
                      <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale saturate-0">
                         {["HUBSPOT", "SALESFORCE", "GOHIGHLEVEL", "ZAPIER", "SLACK", "STRIPE"].map(l => (
                           <span key={l} className="text-2xl font-display font-black tracking-tighter uppercase italic">{l}</span>
                         ))}
                      </div>
                   </div>
                </motion.div>
              )}
           </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
            <button 
              onClick={() => window.location.href = "/contact"}
              className="px-12 py-6 bg-brand-blue rounded-3xl font-black text-lg uppercase tracking-widest shadow-strong-glow hover:scale-105 transition-all text-white"
            >
               Order Your Infrastructure Audit
            </button>
            <p className="mt-6 text-white/30 text-[10px] font-black uppercase tracking-[0.4em]">Zero setup fees. Result-based diagnostics.</p>
        </div>
      </div>
    </div>
  );
}
