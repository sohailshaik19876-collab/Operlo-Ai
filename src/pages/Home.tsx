import { motion } from "motion/react";
import { ArrowRight, Bot, Cpu, Zap, BarChart3, Globe, ShieldCheck, ChevronRight, MessageSquare, CheckCircle2, Twitter, Linkedin, Quote, Star, Rocket, Phone, Layers, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-28 pb-20 px-4">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-brand-electric/10 rounded-full blur-[100px]" />
          <div className="absolute inset-0 hero-gradient opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-8 mx-auto lg:mx-0">
              <span className="flex h-2 w-2 rounded-full bg-brand-electric animate-ping" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-brand-electric tracking-[0.2em]">The New Standard of Business</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-display font-black tracking-tighter leading-[1] sm:leading-[0.9] mb-8 uppercase italic">
              Scale Your <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40">
                Performance.
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-description italic tracking-wide">
              Delete manual bottlenecks and replace repetitive admin with autonomous AI ecosystems. We architect premium AI Voice Agents and CRM Automations that work while you scale.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="px-8 py-4 bg-brand-blue rounded-2xl font-bold text-base sm:text-lg shadow-strong-glow hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                Start Your AI Audit
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 glass hover:bg-white/10 rounded-2xl font-bold text-base sm:text-lg transition-all border border-white/20 text-center"
              >
                See It In Action
              </Link>
            </div>
            
            <div className="mt-12 lg:mt-16 flex flex-col sm:flex-row items-center gap-6 opacity-40 grayscale group hover:opacity-100 transition-opacity">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 sm:mb-0">Backing World-Class Teams</span>
              <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-lg sm:text-xl font-display font-black italic">
                <span>STRIPE</span>
                <span>VERCEL</span>
                <span>LINEAR</span>
                <span>OPENAI</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Visual Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block perspective-1000 lg:translate-x-12"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue to-brand-electric rounded-[40px] blur-xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative glass-dark rounded-[40px] p-8 border border-white/10 shadow-2xl overflow-hidden aspect-[4/3.5] flex items-center justify-center">
                 <div className="w-full h-full bg-black/40 rounded-3xl p-6 relative">
                    <div className="flex gap-4 mb-8">
                      <div className="w-12 h-12 rounded-xl bg-brand-blue shadow-glow flex items-center justify-center">
                        <Bot className="text-white w-6 h-6" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-4 w-32 bg-white/20 rounded-full" />
                        <div className="h-3 w-48 bg-white/10 rounded-full" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="h-24 glass rounded-2xl border border-white/5 p-4 flex flex-col justify-between hover:border-brand-blue/50 transition-all cursor-default">
                          <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                             <Zap className="w-4 h-4 text-brand-electric/50" />
                          </div>
                          <div className="h-2 w-full bg-white/10 rounded-full" />
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 h-32 bg-brand-blue/5 rounded-3xl border border-brand-blue/20 p-6 flex items-end justify-between overflow-hidden">
                      <div className="flex gap-2 items-end">
                        {[40, 60, 45, 80, 55, 90, 70].map((h, i) => (
                          <motion.div 
                            key={i} 
                            animate={{ height: [`${h}%`, `${h+10}%`, `${h}%`] }}
                            transition={{ repeat: Infinity, duration: 2 + i * 0.2 }}
                            className="w-3 bg-brand-blue rounded-t-lg opacity-60" 
                          />
                        ))}
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-display font-bold text-white tracking-widest">+184%</div>
                        <div className="text-[10px] uppercase font-bold text-brand-electric tracking-widest">Growth Delta</div>
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
      <section className="py-16 sm:py-24 px-4 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-brand-blue/5 blur-[120px] rounded-full opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 px-4">
            <h2 className="text-3xl sm:text-5xl font-display font-bold mb-6 tracking-tight leading-tight">Autonomous systems <br className="hidden sm:block" /> <span className="text-brand-electric italic">engineered to win.</span></h2>
            <p className="text-base sm:text-lg text-white/50 leading-relaxed font-description">We don't just "automate". We architect intelligent neural frameworks that think, act, and scale like high-level associates.</p>
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
                whileHover={{ y: -10, borderColor: "rgba(0, 112, 243, 0.4)" }}
                className="group p-8 glass-dark rounded-[40px] border border-white/5 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-blue/20 flex items-center justify-center mb-6 shadow-glow group-hover:bg-brand-blue transition-all duration-500">
                  <feature.icon className="text-brand-electric w-7 h-7 group-hover:text-white transition-all shadow-glow" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-sm sm:text-base text-white/40 leading-relaxed italic font-description">{feature.desc}</p>
                <Link to="/services" className="inline-flex items-center gap-2 mt-8 text-xs font-black uppercase tracking-widest text-brand-electric hover:gap-4 transition-all">
                  Deep Dive <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Ticker */}
      <section className="py-20 overflow-hidden bg-white/[0.02] border-y border-white/5">
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

      {/* How it Works - Interactive Visualization */}
      <section className="py-16 sm:py-24 px-4 bg-brand-blue/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 px-4 lg:px-0">
               <div className="relative glass-dark rounded-[48px] p-6 sm:p-12 border border-white/10 shadow-strong-glow aspect-square sm:aspect-video lg:aspect-square flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-brand-blue/20 to-transparent" />
                  <div className="relative w-full max-w-sm space-y-4">
                     <motion.div 
                      key="workflow-1"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      className="p-4 glass rounded-2xl border border-white/10 flex items-center gap-4"
                     >
                        <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center shadow-glow flex-shrink-0"><MessageSquare className="w-5 h-5" /></div>
                        <div className="flex-grow space-y-1">
                           <div className="h-2 w-24 bg-white/20 rounded-full" />
                           <div className="h-1.5 w-full bg-white/5 rounded-full" />
                        </div>
                     </motion.div>
                     <div className="flex justify-center h-12 relative overflow-hidden">
                        <div className="w-0.5 h-full bg-gradient-to-b from-brand-blue via-brand-electric to-brand-blue opacity-50 animate-pulse" />
                     </div>
                     <motion.div 
                      key="workflow-2"
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      className="p-8 glass-dark rounded-3xl border border-brand-blue/30 shadow-strong-glow flex flex-col items-center gap-4"
                     >
                        <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                          className="w-16 h-16 rounded-full border-2 border-brand-blue border-t-white relative flex items-center justify-center"
                        >
                           <Cpu className="text-white w-6 h-6 absolute" />
                        </motion.div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-electric">Autonomous Processing</span>
                     </motion.div>
                     <div className="flex justify-center h-12 relative">
                        <div className="w-0.5 h-full bg-gradient-to-b from-brand-blue via-brand-electric to-brand-blue opacity-50" />
                     </div>
                     <motion.div 
                      key="workflow-3"
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      className="p-4 glass rounded-2xl border border-brand-electric/20 flex items-center gap-4 bg-brand-blue/10"
                     >
                        <div className="w-10 h-10 rounded-xl bg-brand-electric flex items-center justify-center shadow-glow text-luxury-black flex-shrink-0"><CheckCircle2 className="w-5 h-5" /></div>
                        <div className="flex-grow flex flex-col gap-1">
                           <div className="text-[10px] font-black italic">BOTTLENECK DELETED</div>
                           <div className="h-1.5 w-3/4 bg-white/20 rounded-full" />
                        </div>
                     </motion.div>
                  </div>
               </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-10 px-4 lg:px-0">
               <div>
                  <h2 className="text-4xl sm:text-6xl font-display font-bold tracking-tighter leading-tight mb-8">The Operlo <br /> <span className="text-white/40 italic">Blueprint.</span></h2>
                  <p className="text-base sm:text-lg text-white/50 mb-10 font-description leading-relaxed">We don't just sell software. We engineer end-to-end solutions that delete the specific bottlenecks currently holding your business back from its next level.</p>
               </div>
               
               <div className="space-y-10">
                  {[
                    { title: "Strategic Audit", desc: "We identify every manual, logic-based step in your operation that can be automated." },
                    { title: "Custom Engineering", desc: "Bespoke AI agents and neural workflows are built based on your proprietary logic." },
                    { title: "Deep Stack Integration", desc: "We integrate the results into your current tools for instant operational uplift." },
                    { title: "Infinite Optimization", desc: "Our systems evolve with your data, getting more efficient as you scale to new markets." }
                  ].map((step, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-6 group"
                    >
                       <div className="text-3xl font-black text-brand-blue group-hover:text-brand-electric transition-colors duration-500 italic">0{i+1}</div>
                       <div>
                          <h4 className="text-xl font-bold mb-2 tracking-tight group-hover:text-brand-electric transition-colors">{step.title}</h4>
                          <p className="text-sm sm:text-base text-white/40 italic leading-relaxed font-description">{step.desc}</p>
                       </div>
                    </motion.div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-3xl sm:text-5xl font-display font-bold italic tracking-tighter uppercase leading-tight">Voices Of <br className="sm:hidden" /> <span className="text-brand-electric">Performance.</span></h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Marcus Thorne", role: "CEO, Thrive Real Estate", quote: "Operlo deleted our lead latency. Our response time dropped from 4 hours to 4 seconds, and our booking rate doubled in 30 days.", platform: Twitter },
              { name: "Sarah Jenkins", role: "Founder, Zenith Agency", quote: "The AI voice agents sound indistinguishable from my best openers. We've scaled our volume by 400% without hiring a new associate.", platform: Linkedin },
              { name: "David Chen", role: "Ops Director, Nexus Tech", quote: "Finally, an AI partner that understands business ROI, not just tech. The integration with our custom CRM was seamless.", platform: Twitter }
            ].map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 sm:p-10 glass-dark rounded-[40px] border border-white/5 relative flex flex-col justify-between hover:border-brand-blue/30 transition-all"
              >
                <Quote className="absolute top-10 right-10 text-white/5 w-16 h-16 pointer-events-none" />
                <div>
                   <div className="flex gap-1 text-brand-electric mb-6">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                   </div>
                   <p className="text-white/70 italic text-base sm:text-lg leading-relaxed mb-10 font-description">"{t.quote}"</p>
                </div>
                <div className="flex items-center justify-between border-t border-white/5 pt-8">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center font-bold text-xl text-brand-electric">{t.name[0]}</div>
                      <div>
                         <div className="font-bold text-sm sm:text-base">{t.name}</div>
                         <div className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-white/20">{t.role}</div>
                      </div>
                   </div>
                   <t.platform className="w-5 h-5 text-white/10" />
                </div>
              </motion.div>
            ))}
          </div>
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
            <div className="inline-block px-4 py-1.5 glass rounded-full text-brand-electric text-[10px] font-black uppercase tracking-widest mb-6"> Support Intelligence </div>
            <h2 className="text-4xl sm:text-6xl font-display font-bold tracking-tight">Common <span className="text-white/30 italic">Inquiries.</span></h2>
          </motion.div>

          <div className="space-y-6 sm:space-y-8">
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
                className="group glass-dark rounded-[32px] border border-white/5 overflow-hidden transition-all duration-500 hover:border-brand-blue/20 open:border-brand-blue/40 open:shadow-strong-glow"
              >
                <summary className="p-8 sm:p-10 cursor-pointer flex justify-between items-center list-none hover:bg-white/5 transition-colors">
                  <span className="text-lg sm:text-xl font-display font-bold tracking-tight italic group-open:text-brand-electric transition-colors">{faq.q}</span>
                  <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center group-open:rotate-90 transition-transform flex-shrink-0 border border-white/10 group-open:bg-brand-blue/20 group-open:border-brand-blue/40">
                     <ChevronRight className="w-5 h-5 text-brand-electric" />
                  </div>
                </summary>
                <div className="px-8 sm:px-10 pb-10 text-white/50 text-base sm:text-lg leading-relaxed font-description italic border-t border-white/5 pt-6 bg-luxury-black/20">
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

