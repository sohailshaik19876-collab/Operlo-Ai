import { motion, AnimatePresence } from "motion/react";
import { 
  Bot, Zap, MessageSquare, Phone, Layers, Play, CheckCircle2, 
  Cpu, Globe, BarChart3, ArrowRight, Sparkles, Activity, 
  Terminal, Shield, Settings, Server, Database
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

export default function Demo() {
  const [activeModule, setActiveModule] = useState<"voice" | "chat" | "workflow">("voice");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isAnalyzing) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsAnalyzing(false);
            return 100;
          }
          return prev + 1;
        });
      }, 30);
      return () => clearInterval(interval);
    } else {
      setProgress(0);
    }
  }, [isAnalyzing]);

  const handleStartAnalysis = () => {
    setIsAnalyzing(true);
  };

  const modules = [
    { id: "voice", icon: Phone, label: "AI Voice", status: "Operational" },
    { id: "chat", icon: MessageSquare, label: "AI Support", status: "Active" },
    { id: "workflow", icon: Server, label: "Workflows", status: "Optimal" }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden bg-luxury-black">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[1000px] h-[1000px] bg-brand-blue/5 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-brand-electric/5 rounded-full blur-[120px]" />
        {/* Scanning Line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-blue/20 shadow-[0_0_20px_rgba(45,108,223,0.5)] animate-scan-line z-20" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-16">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 glass bg-brand-blue/10 rounded-full text-brand-electric text-[10px] font-black uppercase tracking-[0.4em]"
            >
              <Activity className="w-3 h-3" />
              Live Interactive Demo
            </motion.div>
            <h1 className="text-5xl sm:text-7xl font-display font-black tracking-tighter uppercase italic leading-[0.8] mb-0">
              AI Automation <span className="text-white/30 italic">Showcase.</span>
            </h1>
          </div>
          
          <div className="flex flex-wrap lg:flex-nowrap glass rounded-2xl border border-white/5 p-1 gap-1">
            {modules.map((m) => (
              <button
                key={m.id}
                onClick={() => setActiveModule(m.id as any)}
                className={cn(
                  "flex-1 min-w-[100px] px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-black text-[9px] sm:text-[10px] uppercase tracking-widest transition-all duration-500 flex items-center justify-center gap-2 sm:gap-3",
                  activeModule === m.id 
                    ? "bg-brand-blue text-white shadow-strong-glow" 
                    : "text-white/30 hover:text-white"
                )}
              >
                <m.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                {m.label}
              </button>
            ))}
          </div>
        </div>

        {/* main interactive terminal shell */}
        <div className="grid lg:grid-cols-[1fr_350px] gap-8">
           <div className="glass-dark rounded-[40px] sm:rounded-[48px] border border-white/10 p-0.5 sm:p-1 bg-gradient-to-br from-white/10 to-transparent relative overflow-hidden group shadow-2xl min-h-[500px] sm:min-h-[600px]">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]" />
              
              <div className="relative h-full bg-luxury-black/40 rounded-[38px] sm:rounded-[46px] p-6 sm:p-10 flex flex-col">
                 <AnimatePresence mode="wait">
                    {activeModule === "voice" && (
                      <motion.div 
                        key="voice"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="grid md:grid-cols-2 gap-16 h-full items-center"
                      >
                         <div className="space-y-10">
                            <div className="space-y-4">
                               <div className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-electric">Module 01: AI Voice</div>
                               <h2 className="text-4xl sm:text-6xl font-display font-black tracking-tighter uppercase italic leading-[0.9]">Human-Like AI <br /> <span className="text-brand-electric">Voice.</span></h2>
                            </div>
                            <p className="text-lg text-white/50 font-description italic leading-relaxed">
                               Experience crystal clear AI voice systems. Capable of handling complex customer questions and syncing data in real-time.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                               {[
                                 { label: "Latency", val: "12ms" },
                                 { label: "Accuracy", val: "99.8%" },
                                 { label: "Emotion", val: "Dynamic" },
                                 { label: "Sync", val: "Instant" }
                               ].map((stat, i) => (
                                 <div key={i} className="p-4 glass rounded-2xl border border-white/5">
                                    <div className="text-[8px] font-black uppercase tracking-widest text-white/20 mb-1">{stat.label}</div>
                                    <div className="text-lg font-display font-black italic tracking-tighter text-white">{stat.val}</div>
                                 </div>
                               ))}
                            </div>
                            <button 
                              onClick={handleStartAnalysis}
                              disabled={isAnalyzing}
                              className="w-full py-5 bg-white text-brand-blue rounded-2xl font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:scale-105 transition-all shadow-glow active:scale-95 disabled:opacity-50"
                            >
                               {isAnalyzing ? `Running Demo ${progress}%` : "Run Demo Test"}
                               <Play className={cn("w-4 h-4 fill-current", isAnalyzing && "animate-spin")} />
                            </button>
                         </div>

                         <div className="relative aspect-square flex items-center justify-center">
                            <div className="absolute inset-0 bg-brand-blue/5 blur-[100px] rounded-full animate-pulse" />
                            {/* Neural Visualization */}
                            <div className="relative w-72 h-72 rounded-full border-2 border-white/5 group-hover:border-brand-blue/30 transition-colors flex items-center justify-center">
                               <motion.div 
                                 animate={{ 
                                   rotate: 360,
                                   scale: [1, 1.05, 1]
                                 }}
                                 transition={{ 
                                   rotate: { repeat: Infinity, duration: 20, ease: "linear" },
                                   scale: { repeat: Infinity, duration: 4 }
                                 }}
                                 className="absolute inset-0 border-t-2 border-brand-electric rounded-full shadow-strong-glow"
                               />
                               <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                                  <div className="w-20 h-20 rounded-3xl bg-brand-blue flex items-center justify-center shadow-strong-glow">
                                     <Phone className="w-10 h-10 text-white animate-pulse" />
                                  </div>
                                  <div>
                                     <div className="text-xs font-black uppercase tracking-[0.3em] text-white">System #4012</div>
                                     <div className="text-[8px] font-black uppercase tracking-[0.5em] text-green-500 mt-1">Ready to Deploy</div>
                                  </div>
                               </div>
                            </div>
                            {/* Orbital Stats */}
                            <motion.div 
                              animate={{ rotate: -360 }}
                              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                              className="absolute inset-0"
                            >
                               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 px-3 py-1 glass rounded-lg border border-brand-electric/50 text-[8px] font-black uppercase text-brand-electric">Tone: Professional</div>
                            </motion.div>
                         </div>
                      </motion.div>
                    )}

                    {activeModule === "chat" && (
                       <motion.div 
                        key="chat"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex flex-col h-full"
                       >
                          <div className="flex justify-between items-center mb-10 pb-8 border-b border-white/5">
                             <div className="space-y-1">
                                <h3 className="text-2xl font-display font-black uppercase italic tracking-tighter">AI Support Demo</h3>
                                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">Module 02: Automated Conversation</p>
                             </div>
                             <div className="flex gap-4">
                                <div className="px-4 py-2 glass rounded-xl border border-white/5 flex items-center gap-2">
                                   <div className="w-1.5 h-1.5 rounded-full bg-brand-electric animate-pulse" />
                                   <span className="text-[10px] font-black uppercase tracking-widest">Logic: Deep</span>
                                </div>
                             </div>
                          </div>

                          <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-12">
                             <div className="space-y-8">
                                <p className="text-lg text-white/50 font-description italic leading-relaxed">
                                   Our chatbots operate as custom 24/7 support systems, designed to handle entire customer onboarding and lead vetting sequences.
                                </p>
                                <div className="space-y-4">
                                   {["Intelligent Intent Detection", "CRM Webhook Integration", "Knowledge Base Retrieval", "Appointment Locking"].map((f, i) => (
                                     <div key={i} className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-white/40 group">
                                        <div className="w-8 h-8 rounded-lg glass border border-white/5 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all">
                                           <CheckCircle2 className="w-4 h-4" />
                                        </div>
                                        {f}
                                     </div>
                                   ))}
                                </div>
                             </div>

                             <div className="glass-dark rounded-3xl border border-white/10 p-8 flex flex-col bg-brand-blue/5">
                                <div className="space-y-6 flex-grow">
                                   {[
                                     { type: "ai", text: "Deep scan of client requirements complete. Initializing strategy blueprint..." },
                                     { type: "user", text: "What is the projected ROI?" },
                                     { type: "ai", text: "Based on current overhead, we project a 42% reduction in manual admin time within 30 days." }
                                   ].map((chat, i) => (
                                     <div key={i} className={cn("flex flex-col", chat.type === "ai" ? "items-start" : "items-end")}>
                                        <div className={cn(
                                          "max-w-[85%] p-5 rounded-2xl text-[11px] font-description italic",
                                          chat.type === "ai" ? "glass-dark border border-white/10" : "bg-brand-blue text-white shadow-glow"
                                        )}>
                                           {chat.text}
                                        </div>
                                     </div>
                                   ))}
                                </div>
                                <div className="mt-8 pt-8 border-t border-white/5">
                                   <div className="flex gap-4">
                                      <div className="flex-grow px-6 py-4 glass border border-white/10 rounded-xl text-xs text-white/40 italic">Testing prompt...</div>
                                      <button className="w-12 h-12 bg-white text-brand-blue rounded-xl flex items-center justify-center shadow-glow">
                                         <ArrowRight className="w-5 h-5" />
                                      </button>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </motion.div>
                    )}

                    {activeModule === "workflow" && (
                       <motion.div 
                        key="workflow"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        className="h-full flex flex-col"
                       >
                          <div className="text-center max-w-2xl mx-auto mb-16">
                             <h2 className="text-4xl sm:text-6xl font-display font-black uppercase italic tracking-tighter mb-4 leading-none">Automated <span className="text-brand-electric">Infrastructure.</span></h2>
                             <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">Module 03: System Workflows</p>
                          </div>

                          <div className="grid md:grid-cols-3 gap-8 flex-grow">
                             {[
                               { label: "1. Trigger", sub: "New Lead", icon: Zap, status: "Listening" },
                               { label: "2. Process", sub: "AI Qualification", icon: Cpu, status: "Active" },
                               { label: "3. Action", sub: "CRM Update", icon: Database, status: "Ready" }
                             ].map((node, i) => (
                               <div key={i} className="relative group">
                                  <div className="p-8 glass-dark rounded-[40px] border border-white/5 hover:border-brand-blue/30 transition-all text-center h-full flex flex-col justify-between">
                                     <div className="absolute top-6 right-6">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-glow" />
                                     </div>
                                     <div className="w-20 h-20 rounded-3xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center mx-auto mb-8 shadow-glow group-hover:bg-brand-blue group-hover:scale-110 transition-all">
                                        <node.icon className="w-10 h-10 text-brand-electric group-hover:text-white" />
                                     </div>
                                     <div>
                                        <h4 className="text-xl font-bold uppercase italic tracking-tighter mb-2">{node.label}</h4>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-white/20">{node.sub}</span>
                                     </div>
                                  </div>
                                  {i < 2 && (
                                    <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                                       <motion.div 
                                         animate={{ x: [0, 10, 0] }}
                                         transition={{ repeat: Infinity, duration: 2 }}
                                       >
                                          <ArrowRight className="w-8 h-8 text-brand-blue shadow-glow" />
                                       </motion.div>
                                    </div>
                                  )}
                               </div>
                             ))}
                          </div>

                          <div className="mt-12 p-8 glass-dark rounded-3xl border border-white/5 flex flex-wrap justify-center gap-12 grayscale opacity-20 hover:opacity-50 transition-opacity">
                             {["ZAPIER", "HUBSPOT", "STRIPE", "GOHIGHLEVEL", "SLACK"].map(l => (
                               <span key={l} className="text-xl font-display font-black tracking-tighter uppercase italic">{l}</span>
                             ))}
                          </div>
                       </motion.div>
                    )}
                 </AnimatePresence>
              </div>
           </div>

           {/* Sidebar controls */}
           <div className="space-y-8">
              <div className="glass-dark rounded-[40px] border border-white/10 p-8 space-y-8 box-hover bg-brand-blue/5">
                 <div className="flex items-center gap-3 border-b border-white/5 pb-6">
                    <Shield className="w-5 h-5 text-brand-electric" />
                    <span className="text-xs font-black uppercase tracking-widest">System Security</span>
                 </div>
                 <div className="space-y-6">
                    {[
                      { label: "Neural Firewall", status: "Enabled" },
                      { label: "IP Masking", status: "Encrypted" },
                      { label: "Data Sovereignty", status: "Verified" }
                    ].map((row, i) => (
                      <div key={i} className="flex justify-between items-center">
                         <span className="text-[10px] font-black uppercase tracking-widest text-white/40">{row.label}</span>
                         <span className="text-[9px] font-bold text-white px-2 py-0.5 bg-white/10 rounded-md">{row.status}</span>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="glass-dark rounded-[40px] border border-white/10 p-8 space-y-8 overflow-hidden relative">
                 <div className="relative z-10">
                    <div className="flex items-center gap-3 border-b border-white/5 pb-6 mb-6">
                       <Terminal className="w-5 h-5 text-brand-electric" />
                       <span className="text-xs font-black uppercase tracking-widest">System Log</span>
                    </div>
                    <div className="space-y-4 font-mono text-[10px] text-white/40 leading-relaxed italic">
                       <p className="text-brand-electric">[{new Date().toLocaleTimeString()}] System handshake success.</p>
                       <p>&gt; Initializing lead scan...</p>
                       <p>&gt; Mapping cross-entity dependencies...</p>
                       <p className="text-green-500">&gt; Optimal pathways calculated.</p>
                       <p>&gt; Ready for deployment.</p>
                    </div>
                 </div>
                 <div className="absolute top-0 right-0 p-4 opacity-5">
                    <Settings className="w-32 h-32 animate-spin-slow" />
                 </div>
              </div>

              <div className="p-8 glass-dark rounded-[40px] border border-brand-blue/30 bg-brand-blue/10 text-center space-y-6">
                 <div className="text-sm font-bold uppercase italic tracking-tight">Need a custom Demo?</div>
                 <p className="text-[10px] text-white/50 uppercase font-black tracking-widest leading-relaxed">Schedule a live strategy briefing to see a neural architecture built for your specific operation.</p>
                 <Link to="/contact" className="w-full py-4 bg-brand-blue text-white rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 shadow-strong-glow hover:scale-105 transition-all">
                    Book Call <ArrowRight className="w-4 h-4" />
                 </Link>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
