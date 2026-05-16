import { motion } from "motion/react";
import { ArrowRight, Bot, Cpu, Zap, BarChart3, Globe, ShieldCheck, ChevronRight, MessageSquare, CheckCircle2, Twitter, Linkedin, Quote, Star, Rocket, Phone, Layers, UserPlus, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 px-4 overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 grid-background grid-moving opacity-40" />
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-[150px] animate-pulse-glow opacity-50" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-electric/5 rounded-full blur-[120px] opacity-30" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
          <div className="absolute inset-0 hero-gradient opacity-60" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(0,112,243,0.1),transparent_40%)]" />
        </div>

        <div 
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
            e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
          }}
          className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center mouse-glow"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 }
              }
            }}
            className="text-center lg:text-left relative"
          >
            {/* Background Particles */}
            <div className="absolute -inset-20 pointer-events-none overflow-hidden opacity-20">
               {[...Array(15)].map((_, i) => (
                 <motion.div
                   key={i}
                   animate={{ 
                     x: [Math.random() * 400, Math.random() * 400], 
                     y: [Math.random() * 400, Math.random() * 400],
                     opacity: [0.1, 0.3, 0.1]
                   }}
                   transition={{ repeat: Infinity, duration: 10 + Math.random() * 10, ease: "linear" }}
                   className="absolute w-1 h-1 bg-brand-electric rounded-full blur-[1px]"
                   style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
                 />
               ))}
            </div>

            <motion.div 
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass border border-white/10 mb-8 mx-auto lg:mx-0 shadow-glow group cursor-default"
            >
              <div className="relative">
                <span className="flex h-2.5 w-2.5 rounded-full bg-brand-electric animate-ping" />
                <span className="absolute inset-0 h-2.5 w-2.5 rounded-full bg-brand-electric opacity-75" />
              </div>
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-white/80 group-hover:text-brand-electric transition-colors">Neural Integration Level 01</span>
            </motion.div>
            
            <motion.h1 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-display font-black tracking-tighter leading-[0.9] mb-8 uppercase italic"
            >
              Scale Your <br className="hidden sm:block" />
              <span className="text-white text-stroke-white text-transparent">
                Performance.
              </span>
            </motion.h1>

            <motion.p 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-base sm:text-lg md:text-xl text-white/50 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-description italic tracking-tight font-medium"
            >
              Delete bottlenecks. Architect systems. Scale with zero resistance. We deploy mission-critical AI Voice Agents and CRM Autopilots for the modern enterprise.
            </motion.p>

            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center lg:justify-start"
            >
              <Link
                to="/contact"
                className="px-10 py-5 bg-white text-brand-blue rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-strong-glow hover:scale-110 transition-all flex items-center justify-center gap-3 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-brand-electric/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                <span className="relative z-10">Claim Free AI Audit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </Link>
              <Link
                to="/demo"
                className="px-10 py-5 glass border border-white/10 hover:border-brand-blue/50 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all text-center hover:bg-white/5 flex items-center justify-center gap-3 group"
              >
                Inquire System Specs
                <div className="w-1.5 h-1.5 rounded-full bg-brand-electric animate-pulse group-hover:scale-150 transition-transform" />
              </Link>
            </motion.div>
            
            <motion.div 
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="mt-20 flex flex-col sm:flex-row items-center gap-10 opacity-20 hover:opacity-100 transition-all duration-1000 grayscale group"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 sm:mb-0 text-white/60">Elite Infrastructure Partners</span>
              <div className="flex flex-wrap justify-center gap-8 sm:gap-12 text-xl sm:text-3xl font-display font-black italic tracking-tighter">
                <span className="hover:text-brand-electric transition-colors cursor-default">STRIPE</span>
                <span className="hover:text-brand-electric transition-colors cursor-default">VERCEL</span>
                <span className="hover:text-brand-electric transition-colors cursor-default">LINEAR</span>
                <span className="hover:text-brand-electric transition-colors cursor-default">OPENAI</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Visual Mockup - Enhanced */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "circOut" }}
            className="hidden lg:block relative perspective-2000 translate-x-12"
          >
            <div className="relative group p-4">
              <div className="absolute -inset-10 bg-gradient-to-r from-brand-blue/20 via-brand-electric/10 to-brand-blue/20 rounded-full blur-[120px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000 animate-pulse"></div>
              
              {/* Dynamic Floating Nodes */}
              <div className="absolute -top-10 -left-10 z-20">
                 <motion.div 
                  animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="glass-dark p-6 rounded-3xl border border-white/10 shadow-strong-glow backdrop-blur-3xl"
                 >
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center shadow-glow"><Phone className="w-5 h-5" /></div>
                       <div>
                          <div className="text-[10px] font-black uppercase tracking-widest text-brand-electric">Voice Outbound</div>
                          <div className="text-sm font-bold">Active Stream</div>
                       </div>
                    </div>
                 </motion.div>
              </div>

              <div className="absolute -bottom-2 -right-6 z-20">
                 <motion.div 
                  animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 5 }}
                  className="glass-dark p-5 rounded-3xl border border-white/10 shadow-strong-glow backdrop-blur-3xl"
                 >
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-xl bg-brand-electric flex items-center justify-center shadow-glow text-luxury-black"><Zap className="w-5 h-5" /></div>
                       <div>
                          <div className="text-[10px] font-black uppercase tracking-widest text-brand-electric">Lead Sync</div>
                          <div className="text-xs font-bold">12ms Latency</div>
                       </div>
                    </div>
                 </motion.div>
              </div>

              <div className="relative glass-dark rounded-[50px] p-2 border border-white/10 shadow-2xl overflow-hidden aspect-[4/4]">
                 <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                 <div className="relative w-full h-full bg-luxury-black/60 rounded-[48px] p-8 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                       <div className="space-y-4">
                          <div className="h-6 w-40 bg-white/10 rounded-full animate-pulse" />
                          <div className="h-4 w-64 bg-white/5 rounded-full" />
                       </div>
                       <div className="w-16 h-16 rounded-2xl bg-brand-blue/20 border border-brand-blue/40 flex items-center justify-center text-brand-electric animate-pulse shadow-glow">
                          <Cpu className="w-8 h-8" />
                       </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 my-6">
                       {[
                         { label: "Neural Load", val: "14%", color: "brand-blue" },
                         { label: "Uptime Rate", val: "99.9%", color: "brand-electric" }
                       ].map((stat, i) => (
                         <div key={i} className="p-5 glass rounded-[32px] border border-white/5 relative group cursor-default">
                            <div className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-${stat.color} shadow-glow`} />
                            <div className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-2">{stat.label}</div>
                            <div className="text-2xl font-display font-black italic tracking-tighter">{stat.val}</div>
                         </div>
                       ))}
                    </div>

                    <div className="h-32 bg-white/5 rounded-3xl border border-white/10 p-6 flex items-end justify-between overflow-hidden relative">
                       <div className="absolute top-4 left-6 text-[10px] font-black uppercase tracking-widest text-white/20">Operational Scaling</div>
                       <div className="flex gap-1.5 items-end flex-grow max-w-[60%]">
                         {[30, 55, 40, 80, 50, 90, 70, 85, 55].map((h, i) => (
                           <motion.div 
                             key={i} 
                             animate={{ height: [`${h}%`, `${h+10}%`, `${h}%`] }}
                             transition={{ repeat: Infinity, duration: 1.5 + i * 0.1 }}
                             className="flex-grow bg-brand-blue rounded-t-lg opacity-60 shadow-glow" 
                           />
                         ))}
                       </div>
                       <div className="text-right pl-4 border-l border-white/10">
                         <div className="text-3xl font-display font-black text-white italic tracking-tighter">+248%</div>
                         <div className="text-[10px] uppercase font-bold text-brand-electric tracking-widest leading-none">Net Gain</div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Stats Section */}
      <section className="py-20 bg-luxury-black/50 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { value: "500+", label: "Systems Deployed" },
            { value: "50k+", label: "Hours Saved" },
            { value: "12M+", label: "Revenue Generated" },
            { value: "99.9%", label: "System Uptime" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-3xl sm:text-5xl font-display font-black text-brand-blue mb-2 italic tracking-tighter">{stat.value}</div>
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/40">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-12 sm:py-20 px-4 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-brand-blue/5 blur-[120px] rounded-full opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-4">
             <div className="inline-block px-4 py-1.5 glass rounded-full text-brand-electric text-[10px] font-black uppercase tracking-[0.3em] mb-6"> Our Capabilities </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold mb-6 tracking-tight leading-tight uppercase italic">Autonomous systems <br className="hidden sm:block" /> <span className="text-brand-electric italic">engineered to win.</span></h2>
            <p className="text-base sm:text-lg text-white/50 leading-relaxed font-description italic">We don't just "automate". We architect intelligent neural frameworks that think, act, and scale like high-level associates.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: Phone, title: "AI Voice Agents", desc: "Outbound & Inbound voice associates with human-grade tonality and zero response latency for 24/7 coverage." },
              { icon: Zap, title: "Workflow Systems", desc: "Enterprise-grade operational automation that syncs data between platforms and removes human error." },
              { icon: BarChart3, title: "CRM Automation", desc: "Automate follow-ups, lead tracking, and pipeline management to ensure every lead is nurtured to conversion." },
              { icon: MessageSquare, title: "AI Chatbots", desc: "Intelligent systems for Web & WhatsApp that qualify leads, answer questions, and book appointments instantly." },
              { icon: UserPlus, title: "Onboarding Flows", desc: "Smooth, automated client onboarding that handles document collection and setups with zero manual work." },
              { icon: Layers, title: "Custom AI Ecosystems", desc: "Future-proof systems built to handle your jump from $1M to $10M+ without administrative friction." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ 
                  y: -15, 
                  scale: 1.02,
                  borderColor: "rgba(0, 210, 255, 0.4)",
                  boxShadow: "0 20px 40px rgba(0, 112, 243, 0.1)"
                }}
                className="group p-8 glass-dark rounded-[44px] border border-white/5 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-16 h-16 rounded-[24px] bg-brand-blue/10 flex items-center justify-center mb-8 shadow-glow group-hover:bg-brand-blue group-hover:shadow-strong-glow transition-all duration-700 group-hover:rotate-6">
                  <feature.icon className="text-brand-electric w-8 h-8 group-hover:text-white transition-all duration-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tighter uppercase italic group-hover:text-brand-electric transition-colors">{feature.title}</h3>
                <p className="text-base text-white/40 leading-relaxed italic font-description group-hover:text-white/60 transition-colors uppercase tracking-tight text-xs">{feature.desc}</p>
                <Link to="/demo" className="inline-flex items-center gap-2 mt-10 text-[10px] font-black uppercase tracking-[0.3em] text-brand-electric hover:gap-5 transition-all group/link">
                  Launch Simulation <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
                
                {/* Decorative Element */}
                <div className="absolute bottom-4 right-8 opacity-5 group-hover:opacity-20 transition-opacity">
                   <feature.icon className="w-24 h-24" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Process - The Operlo Framework */}
      <section className="py-16 sm:py-24 px-4 relative overflow-hidden bg-white/[0.01]">
        <div className="absolute top-0 right-0 w-full xl:w-1/2 h-full bg-brand-blue/5 blur-[120px] rounded-full opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-10">
               <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
               >
                  <div className="inline-block px-4 py-1.5 glass rounded-full text-brand-electric text-[10px] font-black uppercase tracking-[0.3em] mb-8"> System Blueprint </div>
                  <h2 className="text-5xl sm:text-7xl font-display font-black tracking-tighter leading-[0.9] mb-8 uppercase italic">
                    The Neural <br /> <span className="text-white/30">Architecture.</span>
                  </h2>
                  <p className="text-lg sm:text-xl text-white/50 font-description leading-relaxed italic border-l-2 border-brand-electric pl-8">
                    We don't just "automate". We re-engineer the logic nodes of your operation to create a self-scaling ecosystem.
                  </p>
               </motion.div>

               <div className="space-y-4">
                  {[
                    { title: "Strategic Reconnaissance", desc: "Our architects map every manual logic gate in your current workflow to identify deletion points." },
                    { title: "Neural Engineering", desc: "Bespoke AI associates are trained on your proprietary business logic and industry data." },
                    { title: "Deep-Stack Injection", desc: "Live deployment into your existing CRM, VoIP, and communication layers with zero downtime." },
                    { title: "Optimization Protocol", desc: "Continuous neural refinement based on real-world interaction data to maximize ROI." }
                  ].map((step, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="group p-6 glass-dark rounded-[32px] border border-white/5 hover:border-brand-blue/30 transition-all cursor-default"
                    >
                       <div className="flex items-center gap-6">
                          <div className="text-2xl font-display font-black text-white/20 group-hover:text-brand-electric transition-colors italic">0{i+1}</div>
                          <div>
                            <h4 className="text-lg sm:text-xl font-bold tracking-tight text-white/80 group-hover:text-white transition-colors uppercase italic">{step.title}</h4>
                            <p className="text-sm font-description text-white/40 group-hover:text-white/60 transition-colors">{step.desc}</p>
                          </div>
                       </div>
                    </motion.div>
                  ))}
               </div>
            </div>

            <div className="relative">
               <div className="absolute inset-0 bg-brand-blue/10 blur-[100px] rounded-full animate-pulse" />
               <div className="relative aspect-square glass-dark rounded-[60px] border border-white/10 p-1 bg-gradient-to-br from-white/10 to-transparent">
                  <div className="w-full h-full glass-dark rounded-[58px] p-12 flex flex-col items-center justify-center relative overflow-hidden">
                     <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
                     
                     <div className="flex flex-col gap-12 relative z-10 w-full max-w-xs">
                        <motion.div 
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ repeat: Infinity, duration: 3 }}
                          className="p-6 glass rounded-2xl border border-brand-blue/30 flex items-center justify-center gap-4 bg-brand-blue/5 shadow-glow"
                        >
                           <Bot className="w-8 h-8 text-brand-electric" />
                           <div className="h-3 w-32 bg-white/20 rounded-full" />
                        </motion.div>

                        <div className="flex justify-center -my-6 h-20 relative">
                           <div className="w-px h-full bg-gradient-to-b from-brand-blue to-brand-electric opacity-50" />
                           <motion.div 
                            animate={{ y: [0, 80] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                            className="absolute top-0 w-2 h-2 rounded-full bg-brand-electric shadow-glow"
                           />
                        </div>

                        <motion.div 
                          className="grid grid-cols-2 gap-4"
                        >
                           {[1, 2].map(i => (
                             <div key={i} className="p-4 glass-dark rounded-xl border border-white/10 flex items-center justify-center">
                                <Zap className="w-5 h-5 text-white/30" />
                             </div>
                           ))}
                        </motion.div>

                        <div className="flex justify-center -my-6 h-20 relative px-10">
                           <div className="w-1/2 h-px bg-brand-blue absolute top-1/2 left-0 opacity-30" />
                           <div className="w-1/2 h-px bg-brand-blue absolute top-1/2 right-0 opacity-30" />
                           <div className="w-px h-full bg-gradient-to-b from-brand-blue to-brand-electric opacity-50" />
                        </div>

                        <motion.div 
                           animate={{ scale: [1, 1.1, 1], boxShadow: ["0 0 20px rgba(0, 112, 243, 0.2)", "0 0 40px rgba(0, 112, 243, 0.5)", "0 0 20px rgba(0, 112, 243, 0.2)"] }}
                           transition={{ repeat: Infinity, duration: 2 }}
                           className="p-4 bg-brand-blue rounded-2xl flex items-center justify-center gap-4 text-white shadow-strong-glow"
                        >
                           <CheckCircle2 className="w-6 h-6" />
                           <span className="text-[10px] font-black uppercase tracking-[0.2em]">Efficiency Maxed</span>
                        </motion.div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Ticker */}
      <section className="py-12 sm:py-16 overflow-hidden bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 mb-10">
          <h4 className="text-center text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] text-white/30">Seamlessly Sits Atop Your Stack</h4>
        </div>
        <div className="flex gap-12 sm:gap-24 items-center animate-scroll whitespace-nowrap opacity-30 grayscale hover:opacity-100 transition-all duration-1000">
           {["HUBSPOT", "SALESFORCE", "SLACK", "GOHIGHLEVEL", "WEBHOOKS", "ZAPIER", "MONDAY", "NOTION", "AIRTABLE"].map(tool => (
             <span key={tool} className="text-2xl sm:text-4xl font-display font-black tracking-tighter">{tool}</span>
           ))}
           {/* Duplicate for infinite feel */}
           {["HUBSPOT", "SALESFORCE", "SLACK", "GOHIGHLEVEL", "WEBHOOKS", "ZAPIER", "MONDAY", "NOTION", "AIRTABLE"].map(tool => (
             <span key={tool+"-2"} className="text-2xl sm:text-4xl font-display font-black tracking-tighter">{tool}</span>
           ))}
        </div>
      </section>


      {/* Testimonials - Elite Carousel */}
      <section className="py-20 sm:py-28 px-4 relative overflow-hidden bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 mb-20 text-center">
           <div className="inline-block px-4 py-1.5 glass rounded-full text-brand-electric text-[10px] font-black uppercase tracking-[0.3em] mb-6"> Success Protocols </div>
           <h2 className="text-4xl sm:text-7xl font-display font-black tracking-tighter uppercase italic leading-[0.9]">Voices Of <br /> <span className="text-brand-electric">Performance.</span></h2>
        </div>

        <div className="flex gap-8 overflow-hidden relative group">
           <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            className="flex gap-8 whitespace-nowrap"
           >
              {[
                { name: "Marcus Thorne", role: "CEO", company: "Thrive Real Estate", quote: "Operlo deleted our lead latency. Our response time dropped from 4 hours to 4 seconds, and our booking rate doubled in 30 days.", logo: Globe },
                { name: "Sarah Jenkins", role: "Founder", company: "Zenith Agency", quote: "The AI voice agents sound indistinguishable from my best openers. We've scaled our volume by 400% without new hires.", logo: Zap },
                { name: "David Chen", role: "Ops Director", company: "Nexus Tech", quote: "Finally, an AI partner that understands business ROI, not just tech. The integration with our custom CRM was seamless.", logo: Cpu },
                { name: "Elena Rodriguez", role: "Growth Lead", company: "Solaris SaaS", quote: "The neural assistants have completely transformed our lead qualification. We're now booking meetings on autopilot.", logo: Globe }
              ].concat([
                { name: "Marcus Thorne", role: "CEO", company: "Thrive Real Estate", quote: "Operlo deleted our lead latency. Our response time dropped from 4 hours to 4 seconds, and our booking rate doubled in 30 days.", logo: Globe },
                { name: "Sarah Jenkins", role: "Founder", company: "Zenith Agency", quote: "The AI voice agents sound indistinguishable from my best openers. We've scaled our volume by 400% without new hires.", logo: Zap },
                { name: "David Chen", role: "Ops Director", company: "Nexus Tech", quote: "Finally, an AI partner that understands business ROI, not just tech. The integration with our custom CRM was seamless.", logo: Cpu },
                { name: "Elena Rodriguez", role: "Growth Lead", company: "Solaris SaaS", quote: "The neural assistants have completely transformed our lead qualification. We're now booking meetings on autopilot.", logo: Globe }
              ]).map((t, i) => (
                <div key={i} className="w-[350px] sm:w-[450px] flex-shrink-0 glass-dark p-10 rounded-[44px] border border-white/5 hover:border-white/20 transition-all group/card relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 blur-3xl opacity-0 group-hover/card:opacity-100 transition-opacity" />
                   <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 border border-white/10 flex items-center justify-center font-bold text-xl text-brand-electric italic">
                           {t.name[0]}
                        </div>
                        <div>
                           <div className="text-lg font-bold tracking-tight text-white/90 uppercase italic">{t.name}</div>
                           <div className="text-[10px] font-black uppercase tracking-widest text-brand-electric italic">{t.role}</div>
                        </div>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                         <t.logo className="w-5 h-5 text-white/20 group-hover/card:text-brand-electric transition-colors" />
                      </div>
                   </div>
                   <p className="text-base sm:text-lg text-white/50 leading-relaxed font-description italic whitespace-normal group-hover/card:text-white/80 transition-colors mb-4">
                     "{t.quote}"
                   </p>
                   <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 group-hover/card:text-white/40 mb-8">{t.company}</div>
                   <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between opacity-30 group-hover/card:opacity-100 transition-opacity">
                      <div className="flex gap-1 text-brand-electric">
                         {[1,2,3,4,5].map(star => <Sparkles key={star} className="w-3 h-3 fill-current" />)}
                      </div>
                      <div className="text-[10px] font-black uppercase tracking-widest">Neural Verification</div>
                   </div>
                </div>
              ))}
           </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 px-4 bg-luxury-black/50 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-brand-blue/5 blur-[120px] rounded-full opacity-10 pointer-events-none" />
        
        <div className="max-w-3xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-1.5 glass bg-brand-blue/10 rounded-full text-brand-electric text-[10px] font-black uppercase tracking-[0.3em] mb-6"> Diagnostic Portal </div>
            <h2 className="text-4xl sm:text-6xl font-display font-bold tracking-tight uppercase italic underline underline-offset-8 decoration-brand-blue/20">Common <span className="text-white/30 italic">Inquiries.</span></h2>
          </motion.div>

          <div className="space-y-4 sm:space-y-6">
            {[
              { 
                q: "Is Operlo AI just another marketing agency?", 
                a: "No. We are an AI engineering firm. While agencies focus on traffic, we focus on autonomous infrastructure—building systems that replace manual labor and delete operational bottlenecks using neural technology." 
              },
              { 
                q: "Can the AI Voice Agents handle inbound and outbound?", 
                a: "Absolutely. Our neural assistants are architected to handle high-volume inbound inquiries and execute complex outbound qualification calls with human-grade tonality and zero latency." 
              },
              { 
                q: "Which CRMs and platforms can you integrate with?", 
                a: "We integrate with any system that has an API or webhook capability. Most of our clients use HubSpot, Salesforce, GoHighLevel, or custom proprietary databases." 
              },
              { 
                q: "How do you ensure my business data remains secure?", 
                a: "Security is mission-critical. We deploy systems using SOC2-ready protocols and enterprise-grade encryption. Your proprietary business data is never used to train public models." 
              },
              { 
                q: "What is the typical ROI timeline?", 
                a: "Most partners recover their total implementation cost within 45-60 days by reclaiming bandwidth, reducing payroll overhead, and instantly increasing lead-to-conversion speeds." 
              }
            ].map((faq, i) => (
              <motion.details 
                key={i} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group glass-dark rounded-[24px] border border-white/5 overflow-hidden transition-all duration-500 hover:border-brand-blue/20 open:border-brand-blue/40"
              >
                <summary className="p-6 sm:p-8 cursor-pointer flex justify-between items-center list-none hover:bg-white/5 transition-colors">
                  <span className="text-base sm:text-lg font-display font-medium tracking-tight italic group-open:text-brand-electric transition-colors uppercase">{faq.q}</span>
                  <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center group-open:rotate-90 transition-transform flex-shrink-0 border border-white/10 group-open:bg-brand-blue group-open:border-brand-blue">
                     <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                </summary>
                <div className="px-6 sm:px-8 pb-8 text-white/40 text-sm sm:text-base leading-relaxed font-description italic border-t border-white/5 pt-4 bg-luxury-black/20">
                  {faq.a}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Aggressive Modern Design */}
      <section className="py-12 sm:py-16 px-4">
         <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto rounded-[48px] bg-gradient-to-br from-brand-blue via-luxury-navy to-luxury-black p-8 sm:p-16 text-center relative overflow-hidden shadow-strong-glow border border-white/10"
         >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-electric/20 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
               <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[24px] bg-white text-brand-blue mx-auto mb-6 flex items-center justify-center shadow-2xl">
                  <Rocket className="w-7 h-7 sm:w-8 sm:h-8" />
               </div>
               <h2 className="text-3xl sm:text-5xl font-display font-black mb-6 italic tracking-tighter leading-[1.1] uppercase">
                  The Door To <br className="sm:hidden" /> AI Scaling <span className="text-brand-electric underline underline-offset-8 decoration-2">Is Open.</span>
               </h2>
               <p className="text-base sm:text-lg text-white/80 mb-8 italic leading-relaxed font-description">Stop trading your precious hours for manual clicks. Let us build the autonomous systems that work while you grow.</p>
               
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact" className="px-8 py-4 sm:px-10 sm:py-5 bg-white text-brand-blue rounded-2xl font-black text-base sm:text-lg hover:scale-105 transition-all shadow-2xl duration-500">
                    Claim Free AI Audit
                  </Link>
                  <Link to="/pricing" className="px-8 py-4 sm:px-10 sm:py-5 glass rounded-2xl font-black text-base sm:text-lg hover:bg-white text-white hover:text-brand-blue hover:scale-105 transition-all duration-500 text-center">
                    View Systems Plans
                  </Link>
               </div>
            </div>
         </motion.div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="lg:hidden fixed bottom-6 left-6 right-6 z-[80]">
         <Link to="/contact" className="w-full h-16 bg-brand-blue rounded-2xl flex items-center justify-center gap-3 font-bold shadow-strong-glow active:scale-95 transition-transform text-white border border-white/20">
            <Zap className="w-5 h-5 fill-current" />
            <span className="uppercase text-xs tracking-widest font-black">Book Your Strategy Call</span>
            <ArrowRight className="w-4 h-4" />
         </Link>
      </div>
    </div>
  );
}

