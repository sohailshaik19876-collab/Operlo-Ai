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
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-white/80 group-hover:text-brand-electric transition-colors">Business Automation Level 01</span>
            </motion.div>
            
            <motion.h1 
              variants={{ hidden: { opacity: 0, y: 30, filter: "blur(10px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-display font-black tracking-tighter leading-[0.9] mb-8 uppercase italic"
            >
              Scale Your <br className="hidden sm:block" />
              <span className="text-white relative inline-block">
                Business.
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 1, duration: 1 }}
                  className="absolute bottom-4 left-0 h-2 bg-brand-electric/50 -rotate-1 -z-10" 
                />
              </span>
            </motion.h1>

            <motion.p 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-base sm:text-lg md:text-xl text-white/50 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-description italic tracking-tight font-medium"
            >
              Automate operations, scale lead generation, and grow with zero friction. We build custom AI Voice Systems and Automated CRM Workflows for modern businesses.
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
                <span className="relative z-10">Book Free Strategy Call</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </Link>
              <Link
                to="/demo"
                className="px-10 py-5 glass border border-white/10 hover:border-brand-blue/50 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all text-center hover:bg-white/5 flex items-center justify-center gap-3 group"
              >
                See How It Works
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
            <div className="relative group p-4 orbit-container">
              <div className="absolute -inset-10 bg-gradient-to-r from-brand-blue/20 via-brand-electric/10 to-brand-blue/20 rounded-full blur-[120px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000 animate-pulse"></div>
              
              {/* Dynamic Floating Nodes */}
              <div className="orbit-node" style={{ animationDelay: '-2s', offsetPath: 'ellipse(350px 200px at 50% 50%)' }} />
              <div className="orbit-node" style={{ animationDelay: '-5s', offsetPath: 'ellipse(250px 150px at 50% 50%)' }} />
              
              <div className="absolute -top-10 -left-10 z-20">
                 <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.1, rotateZ: -2 }}
                  className="glass-dark p-6 rounded-3xl border border-white/10 shadow-strong-glow backdrop-blur-3xl cursor-pointer"
                 >
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-xl bg-brand-blue flex items-center justify-center shadow-glow animate-pulse"><Phone className="w-6 h-6" /></div>
                       <div>
                          <div className="text-[10px] font-black uppercase tracking-widest text-brand-electric animate-pulse">Automated Calls</div>
                          <div className="text-sm font-bold">99.2% Connectivity</div>
                       </div>
                    </div>
                 </motion.div>
              </div>

              <div className="absolute -bottom-2 -right-6 z-20">
                 <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  whileHover={{ scale: 1.1, rotateZ: 2 }}
                  className="glass-dark p-5 rounded-3xl border border-white/10 shadow-strong-glow backdrop-blur-3xl cursor-pointer"
                 >
                    <div className="flex items-center gap-3">
                       <div className="w-12 h-12 rounded-xl bg-brand-electric flex items-center justify-center shadow-glow text-luxury-black"><Zap className="w-6 h-6" /></div>
                       <div>
                          <div className="text-[10px] font-black uppercase tracking-widest text-brand-electric">Lead Automation</div>
                          <div className="text-xs font-bold">Instant Validation</div>
                       </div>
                    </div>
                 </motion.div>
              </div>

              <div className="relative glass-dark rounded-[60px] p-1 border border-white/10 shadow-2xl overflow-hidden aspect-square h-[500px]">
                 <div className="absolute inset-0 animate-scan pointer-events-none opacity-10 bg-gradient-to-b from-brand-electric to-transparent h-1" />
                 <div className="relative w-full h-full bg-luxury-black/60 rounded-[58px] p-10 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                       <div className="space-y-4">
                          <div className="h-4 w-32 bg-white/10 rounded-full" />
                          <div className="h-2 w-48 bg-white/5 rounded-full" />
                          <div className="flex gap-2">
                             {[...Array(5)].map((_, i) => (
                               <motion.div 
                                 key={i}
                                 animate={{ opacity: [0.2, 0.8, 0.2] }}
                                 transition={{ delay: i * 0.2, repeat: Infinity }}
                                 className="w-8 h-1 bg-brand-blue rounded-full" 
                               />
                             ))}
                          </div>
                       </div>
                       <motion.div 
                        whileHover={{ rotate: 180 }}
                        className="w-16 h-16 rounded-2xl bg-brand-blue/20 border border-brand-blue/40 flex items-center justify-center text-brand-electric shadow-glow"
                       >
                          <Cpu className="w-8 h-8" />
                       </motion.div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                       {[
                         { label: "System Efficiency", val: "22%", color: "#00d2ff" },
                         { label: "Process Health", val: "OPTIMAL", color: "#0070f3" }
                       ].map((stat, i) => (
                         <div key={i} className="p-6 glass rounded-[36px] border border-white/5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 blur-2xl group-hover:bg-brand-blue/10 transition-colors" />
                            <div className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-2">{stat.label}</div>
                            <div className="text-2xl font-display font-black italic tracking-tighter text-white">{stat.val}</div>
                         </div>
                       ))}
                    </div>

                    <div className="h-40 bg-white/2 backdrop-blur-md rounded-[40px] border border-white/10 p-8 flex items-end justify-between overflow-hidden relative group">
                       <div className="absolute top-4 left-8 text-[10px] font-black uppercase tracking-widest text-white/20">Scalability Index</div>
                       <div className="flex gap-2 items-end flex-grow max-w-[65%]">
                         {[40, 70, 50, 90, 60, 100, 80, 95, 75, 110].map((h, i) => (
                           <motion.div 
                             key={i} 
                             animate={{ height: [`${h}%`, `${Math.min(100, h+15)}%`, `${h}%`] }}
                             transition={{ repeat: Infinity, duration: 2 + i * 0.1, ease: "easeInOut" }}
                             className="flex-grow bg-gradient-to-t from-brand-blue to-brand-electric rounded-t-xl opacity-60 shadow-low-glow" 
                           />
                         ))}
                       </div>
                       <div className="text-right pl-6 border-l border-white/10">
                         <div className="text-4xl font-display font-black text-brand-electric italic tracking-tighter leading-none mb-1">+412%</div>
                         <div className="text-[10px] uppercase font-black text-white/40 tracking-[0.2em]">Efficiency</div>
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
            <h2 className="text-3xl sm:text-5xl font-display font-bold mb-6 tracking-tight leading-tight uppercase italic">AI systems <br className="hidden sm:block" /> <span className="text-brand-electric italic">built to scale your business.</span></h2>
            <p className="text-base sm:text-lg text-white/50 leading-relaxed font-description italic">We help businesses automate operations, lead generation, and customer communication using AI systems designed for modern scaling.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: Phone, title: "AI Voice Systems", desc: "Automated phone systems that handle calls, answer questions, and qualify leads automatically with human-grade tonality." },
              { icon: Zap, title: "Automated Workflows", desc: "Streamline your operations by automating repetitive tasks and syncing data across your tools." },
              { icon: BarChart3, title: "Lead Automation", desc: "Ensure no lead is ever lost with automated follow-ups, lead tracking, and pipeline management." },
              { icon: MessageSquare, title: "AI Customer Support", desc: "Automatically qualify leads and answer customer questions 24/7 on your website or WhatsApp." },
              { icon: UserPlus, title: "Automated Onboarding", desc: "Simplify client onboarding with automated document collection and setup workflows." },
              { icon: Layers, title: "Custom Scaling Systems", desc: "Built-to-scale systems that grow with your business from 7 to 8 figures without the overhead." }
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
                  Get Started <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
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
                  <div className="inline-block px-4 py-1.5 glass rounded-full text-brand-electric text-[10px] font-black uppercase tracking-[0.3em] mb-8"> Our Process </div>
                  <h2 className="text-5xl sm:text-7xl font-display font-black tracking-tighter leading-[0.9] mb-8 uppercase italic">
                    The Operlo <br /> <span className="text-white/30">Framework.</span>
                  </h2>
                  <p className="text-lg sm:text-xl text-white/50 font-description leading-relaxed italic border-l-2 border-brand-electric pl-8">
                    We automate your operations, onboarding, and lead generation to build a system that works for you.
                  </p>
               </motion.div>

               <div className="space-y-4">
                  {[
                    { title: "1. Operational Audit", desc: "We identify every manual task in your business that can be automated to save you time." },
                    { title: "2. System Design", desc: "We build custom AI systems tailored to your specific business rules and customer needs." },
                    { title: "3. Implementation", desc: "We integrate the automation directly into your CRM and tools with zero downtime." },
                    { title: "4. Scaling & Support", desc: "We monitor and improve your systems to ensure maximum efficiency and ROI as you scale." }
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

            <div className="relative group">
               <div className="absolute inset-0 bg-brand-blue/10 blur-[100px] rounded-full animate-pulse group-hover:bg-brand-electric/10 transition-colors duration-1000" />
               <div className="relative aspect-square glass-dark rounded-[60px] border border-white/10 p-1 bg-gradient-to-br from-white/10 to-transparent shadow-2xl group-hover:border-brand-blue/40 transition-all duration-700">
                  <div className="w-full h-full glass-dark rounded-[58px] p-8 sm:p-12 flex flex-col items-center justify-center relative overflow-hidden">
                     <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
                     
                     {/* Floating Particles in UI */}
                     <div className="absolute inset-0 pointer-events-none">
                        {[...Array(8)].map((_, i) => (
                          <motion.div 
                            key={i}
                            animate={{ 
                              opacity: [0.1, 0.4, 0.1],
                              scale: [1, 1.2, 1],
                              y: [0, -40, 0]
                            }}
                            transition={{ repeat: Infinity, duration: 4 + i, delay: i * 0.5 }}
                            className="absolute w-1 h-1 bg-brand-electric rounded-full blur-[1px]"
                            style={{ left: `${15 + i * 10}%`, top: `${20 + i * 8}%` }}
                          />
                        ))}
                     </div>

                     <div className="flex flex-col gap-10 relative z-10 w-full max-w-xs">
                        <motion.div 
                          whileHover={{ scale: 1.05, rotateY: 5 }}
                          className="p-6 glass rounded-2xl border border-brand-blue/30 flex items-center justify-center gap-4 bg-brand-blue/10 shadow-glow relative group/node"
                        >
                           <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-brand-electric text-luxury-black text-[8px] font-black rounded-lg opacity-0 group-hover/node:opacity-100 transition-opacity">INPUT</div>
                           <Bot className="w-8 h-8 text-brand-electric" />
                           <div className="h-3 w-32 bg-white/20 rounded-full overflow-hidden">
                              <motion.div 
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="w-1/2 h-full bg-white/40"
                              />
                           </div>
                        </motion.div>

                        <div className="flex justify-center -my-5 h-20 relative">
                           <div className="w-px h-full bg-gradient-to-b from-brand-blue via-brand-electric to-brand-blue opacity-50" />
                           <motion.div 
                            animate={{ y: [0, 80] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                            className="absolute top-0 w-2 h-2 rounded-full bg-brand-electric shadow-glow"
                           />
                           <motion.div 
                            animate={{ y: [0, 80], opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 2.5, ease: "linear", delay: 0.5 }}
                            className="absolute top-0 w-3 h-3 rounded-full bg-brand-blue blur-[2px]"
                           />
                        </div>

                        <motion.div 
                          className="grid grid-cols-2 gap-4"
                        >
                           {[1, 2].map(i => (
                             <motion.div 
                               key={i} 
                               whileHover={{ scale: 1.1, y: -5 }}
                               className="p-5 glass-dark rounded-xl border border-white/10 flex items-center justify-center bg-white/5 relative group/logic"
                             >
                                <Zap className="w-5 h-5 text-brand-electric group-hover:scale-125 transition-transform" />
                                <div className="absolute inset-0 bg-brand-blue/5 rounded-xl opacity-0 group-hover/logic:opacity-100 transition-opacity" />
                             </motion.div>
                           ))}
                        </motion.div>

                        <div className="flex justify-center -my-5 h-20 relative px-10">
                           <div className="w-1/2 h-px bg-brand-blue absolute top-1/2 left-0 opacity-30 shadow-glow" />
                           <div className="w-1/2 h-px bg-brand-blue absolute top-1/2 right-0 opacity-30 shadow-glow" />
                           <div className="w-px h-full bg-gradient-to-b from-brand-blue via-brand-electric to-brand-blue opacity-50" />
                        </div>

                        <motion.div 
                           animate={{ 
                             scale: [1, 1.05, 1], 
                             boxShadow: ["0 0 20px rgba(0, 112, 243, 0.2)", "0 0 50px rgba(0, 112, 243, 0.6)", "0 0 20px rgba(0, 112, 243, 0.2)"] 
                           }}
                           transition={{ repeat: Infinity, duration: 3 }}
                           className="p-5 bg-brand-blue rounded-2xl flex items-center justify-center gap-4 text-white shadow-strong-glow border border-white/20 relative cursor-pointer group/final"
                        >
                           <motion.div 
                              animate={{ scale: [1, 1.3, 1] }}
                              transition={{ repeat: Infinity, duration: 1.5 }}
                              className="absolute -inset-2 bg-brand-electric/10 rounded-3xl blur-xl opacity-0 group-hover/final:opacity-100 transition-opacity" 
                           />
                           <CheckCircle2 className="w-7 h-7" />
                           <span className="text-[10px] font-black uppercase tracking-[0.3em]">Business Scaling Optimized</span>
                        </motion.div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Systems Visualization - NEW SECTION */}
      <section className="py-24 px-4 relative overflow-hidden bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-12">
                <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
               >
                  <div className="inline-block px-4 py-1.5 glass bg-brand-blue/10 rounded-full text-brand-electric text-[10px] font-black uppercase tracking-[0.3em] mb-8"> System Dashboard </div>
                  <h2 className="text-4xl sm:text-7xl font-display font-black tracking-tighter uppercase italic leading-[0.9] mb-8">
                    Automated <br /> <span className="text-white/30">Workflows.</span>
                  </h2>
                  <p className="text-lg text-white/50 font-description italic leading-relaxed max-w-xl">
                    See how our AI systems automate your leads, follow-ups, and communication in real-time.
                  </p>
               </motion.div>

               <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { label: "CRM Pipeline Sync", status: "Active", delay: "4ms" },
                    { label: "Voice Latency Engine", status: "Optimized", delay: "12ms" },
                    { label: "Lead Qualification", status: "Active", delay: "0.8s" },
                    { label: "WhatsApp Gateway", status: "Connected", delay: "Instant" }
                  ].map((sys, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="p-6 glass-dark rounded-3xl border border-white/5 flex flex-col gap-2 group cursor-default"
                    >
                       <div className="flex justify-between items-center">
                          <span className="text-[10px] font-black uppercase tracking-widest text-white/30">{sys.label}</span>
                          <span className="text-[8px] px-2 py-0.5 bg-brand-electric text-luxury-black font-black rounded-lg">{sys.status}</span>
                       </div>
                       <div className="flex items-center gap-2">
                          <div className="h-1 flex-grow bg-white/5 rounded-full overflow-hidden">
                             <motion.div 
                               animate={{ x: ["-100%", "100%"] }}
                               transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.3 }}
                               className="w-1/2 h-full bg-brand-blue shadow-glow"
                             />
                          </div>
                          <span className="text-xs font-black text-brand-blue italic">{sys.delay}</span>
                       </div>
                    </motion.div>
                  ))}
               </div>
            </div>

            <div className="lg:w-1/2 relative bg-luxury-black rounded-[60px] border border-white/10 p-10 h-[500px] overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent pointer-events-none" />
               <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start mb-8">
                     <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-display font-black italic shadow-glow">O.S</div>
                        <div>
                           <div className="text-sm font-bold uppercase tracking-tight italic">Operlo Dashboard</div>
                           <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30">Infrastructure Monitoring</div>
                        </div>
                     </div>
                     <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                     </div>
                  </div>

                  <div className="grid grid-cols-3 gap-6 mb-8">
                     {[1, 2, 3].map(i => (
                       <div key={i} className="aspect-video glass rounded-2xl border border-white/5 p-4 flex flex-col justify-end gap-2 overflow-hidden relative">
                          <div className={`absolute inset-0 bg-brand-blue animate-pulse-glow opacity-[0.02]`} />
                          <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                             <motion.div 
                               animate={{ width: ["10%", "90%", "10%"] }}
                               transition={{ repeat: Infinity, duration: 4, delay: i * 0.5 }}
                               className="h-full bg-brand-electric"
                             />
                          </div>
                          <div className="text-[8px] font-black uppercase tracking-widest text-white/20">Metric #0{i}</div>
                       </div>
                     ))}
                  </div>

                  <div className="flex-grow glass-dark rounded-3xl border border-white/5 p-8 flex items-center justify-center relative overflow-hidden">
                     <div className="absolute inset-0 animate-shimmer opacity-10 pointer-events-none" />
                     <div className="flex flex-col items-center gap-6 relative z-10">
                        <motion.div 
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="w-20 h-20 rounded-full border-2 border-brand-electric/30 flex items-center justify-center"
                        >
                           <Cpu className="w-10 h-10 text-brand-electric animate-pulse" />
                        </motion.div>
                        <div className="text-center">
                           <div className="text-3xl font-display font-black italic tracking-tighter leading-none mb-2">99.99%</div>
                           <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">System Integrity</div>
                        </div>
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
           <div className="inline-block px-4 py-1.5 glass rounded-full text-brand-electric text-[10px] font-black uppercase tracking-[0.3em] mb-6"> Success </div>
           <h2 className="text-4xl sm:text-7xl font-display font-black tracking-tighter uppercase italic leading-[0.9]">Voices Of <br /> <span className="text-brand-electric">Success.</span></h2>
        </div>

        <div className="flex gap-8 overflow-hidden relative group">
           <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            className="flex gap-8 whitespace-nowrap"
           >
              {[
                { name: "Marcus Thorne", role: "CEO", company: "Thrive Real Estate", quote: "Operlo automated our lead follow-up. Our response time dropped from 4 hours to 4 seconds, and our booking rate doubled in 30 days.", logo: Globe, metrics: "2.4x Revenue" },
                { name: "Sarah Jenkins", role: "Founder", company: "Zenith Agency", quote: "The automated voice systems sound indistinguishable from my best openers. We've scaled our volume by 400% without new hires.", logo: Zap, metrics: "-85% Overhead" },
                { name: "David Chen", role: "Ops Director", company: "Nexus Tech", quote: "Finally, an AI partner that understands business ROI, not just tech. The integration with our custom CRM was seamless.", logo: Cpu, metrics: "100% Automated" },
                { name: "Elena Rodriguez", role: "Growth Lead", company: "Solaris SaaS", quote: "The AI systems have completely transformed our lead qualification. We're now booking meetings on autopilot.", logo: Globe, metrics: "12hr/day Saved" }
              ].concat([
                { name: "Marcus Thorne", role: "CEO", company: "Thrive Real Estate", quote: "Operlo automated our lead follow-up. Our response time dropped from 4 hours to 4 seconds, and our booking rate doubled in 30 days.", logo: Globe, metrics: "2.4x Revenue" },
                { name: "Sarah Jenkins", role: "Founder", company: "Zenith Agency", quote: "The automated voice systems sound indistinguishable from my best openers. We've scaled our volume by 400% without new hires.", logo: Zap, metrics: "-85% Overhead" },
                { name: "David Chen", role: "Ops Director", company: "Nexus Tech", quote: "Finally, an AI partner that understands business ROI, not just tech. The integration with our custom CRM was seamless.", logo: Cpu, metrics: "100% Automated" },
                { name: "Elena Rodriguez", role: "Growth Lead", company: "Solaris SaaS", quote: "The AI systems have completely transformed our lead qualification. We're now booking meetings on autopilot.", logo: Globe, metrics: "12hr/day Saved" }
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
                      <div className="text-right">
                         <div className="text-xl font-display font-black text-brand-electric italic tracking-tighter leading-none">{t.metrics}</div>
                         <div className="text-[8px] font-black uppercase text-white/20 tracking-widest uppercase">Outcome</div>
                      </div>
                   </div>
                   <p className="text-base sm:text-lg text-white/50 leading-relaxed font-description italic whitespace-normal group-hover/card:text-white/80 transition-colors mb-4">
                     "{t.quote}"
                   </p>
                   <div className="flex justify-between items-end">
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 group-hover/card:text-white/40">{t.company}</div>
                      <t.logo className="w-10 h-10 text-white/5 group-hover/card:text-brand-electric/20 transition-colors" />
                   </div>
                   <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between opacity-30 group-hover/card:opacity-100 transition-opacity">
                      <div className="flex gap-1 text-brand-electric">
                         {[1,2,3,4,5].map(star => <Sparkles key={star} className="w-3 h-3 fill-current" />)}
                      </div>
                      <div className="text-[10px] font-black uppercase tracking-widest">Verified Partner #0{i+1}</div>
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
            <div className="inline-block px-4 py-1.5 glass bg-brand-blue/10 rounded-full text-brand-electric text-[10px] font-black uppercase tracking-[0.3em] mb-6"> Common Questions </div>
            <h2 className="text-4xl sm:text-6xl font-display font-bold tracking-tight uppercase italic underline underline-offset-8 decoration-brand-blue/20">Common <span className="text-white/30 italic">Questions.</span></h2>
          </motion.div>

          <div className="space-y-4 sm:space-y-6">
            {[
              { 
                q: "Is Operlo AI just another marketing agency?", 
                a: "No. We are an AI automation company. While agencies focus on traffic, we focus on autonomous infrastructure—building systems that automate manual tasks and help businesses scale faster." 
              },
              { 
                q: "Can the AI Voice Systems handle inbound and outbound?", 
                a: "Absolutely. Our AI systems are designed to handle high-volume inbound inquiries and execute complex outbound qualification calls with human-grade tonality and zero delays." 
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
                  The Door To <br className="sm:hidden" /> Automation <span className="text-brand-electric underline underline-offset-8 decoration-2">Is Open.</span>
               </h2>
               <p className="text-base sm:text-lg text-white/80 mb-8 italic leading-relaxed font-description">Save time, automate repetitive work, and scale faster with custom AI automation systems.</p>
               
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact" className="px-8 py-4 sm:px-10 sm:py-5 bg-white text-brand-blue rounded-2xl font-black text-base sm:text-lg hover:scale-105 transition-all shadow-2xl duration-500">
                    Book Free Strategy Call
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

