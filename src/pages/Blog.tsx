import { motion } from "motion/react";
import { Calendar, Search, ArrowRight, Tag, BookOpen, Clock, Activity, Cpu, Zap, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const posts = [
  {
    title: "How AI Voice Systems are Improving Lead Response Times",
    excerpt: "Discover why immediate response is the only metric that matters in 2026 real estate and high-ticket sales.",
    category: "Insights",
    date: "May 12, 2026",
    readingTime: "6 min read",
    id: 1,
    icon: Cpu
  },
  {
    title: "The Ultimate Guide to CRM Automation for Modern Agencies",
    excerpt: "Stop manually updating cards. Automate your entire pipeline with these simple automation triggers and webhooks.",
    category: "Guides",
    date: "May 08, 2026",
    readingTime: "8 min read",
    id: 2,
    icon: Zap
  },
  {
    title: "Why Your Business Needs a Custom LLM Knowledge Base",
    excerpt: "Internal AI is more than just a simple chatbot. It is the proprietary knowledge center of your entire company.",
    category: "Technical",
    date: "May 05, 2026",
    readingTime: "12 min read",
    id: 3,
    icon: BarChart3
  }
];

export default function Blog() {
  return (
    <div className="relative overflow-hidden pt-32 pb-20">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-full h-[600px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass bg-brand-blue/10 rounded-full text-brand-electric text-[10px] font-black uppercase tracking-[0.4em] mb-10">
             <Activity className="w-3 h-3" />
             Business Insights
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-black mb-10 italic tracking-tighter uppercase leading-[0.9]">
            The Operlo <br /> <span className="text-white/30 italic">Blog.</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/50 leading-relaxed font-description italic max-w-2xl mx-auto">
            Business automation, engineering breakthroughs, and systemic scaling blueprints.
          </p>
        </motion.div>

        {/* Search & Filter */}
        <div className="max-w-2xl mx-auto mb-20 relative">
           <div className="glass-dark border border-white/10 rounded-2xl flex items-center px-6 py-4 focus-within:border-brand-blue/50 transition-all">
              <Search className="w-5 h-5 text-white/20 mr-4" />
              <input 
                type="text" 
                placeholder="Search intelligence index..."
                className="bg-transparent border-none outline-none text-white/80 w-full font-description italic text-sm"
              />
              <button className="px-4 py-2 bg-brand-blue/20 text-brand-electric rounded-lg text-[10px] font-black uppercase tracking-widest border border-brand-electric/20">Analyze</button>
           </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-dark rounded-[50px] border border-white/5 overflow-hidden group hover:border-brand-blue/30 transition-all flex flex-col h-full shadow-2xl relative"
            >
              <div className="h-72 bg-luxury-black relative overflow-hidden flex items-center justify-center">
                 <div className="absolute inset-0 bg-brand-blue/5 opacity-50 group-hover:bg-brand-blue/10 transition-colors" />
                 <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-luxury-black to-transparent" />
                 
                 {/* Visual Element */}
                 <div className="relative z-10 w-24 h-24 rounded-3xl glass border border-white/10 flex items-center justify-center text-brand-electric shadow-glow group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                    <post.icon className="w-12 h-12" />
                 </div>

                 {/* Corner Badge */}
                 <div className="absolute top-8 right-8">
                    <div className="px-3 py-1 glass bg-white/5 rounded-full text-[8px] font-black uppercase tracking-[0.2em] text-white/30 border border-white/5">
                       DOC_{post.id.toString().padStart(2, '0')}
                    </div>
                 </div>
              </div>
              
              <div className="p-10 flex-grow flex flex-col">
                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-electric">
                     <BookOpen className="w-3.5 h-3.5" />
                     {post.category}
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-white/20 uppercase tracking-widest">
                     <Clock className="w-3.5 h-3.5" />
                     {post.readingTime}
                  </div>
                </div>
                
                <h3 className="text-3xl font-display font-black mb-6 tracking-tighter italic uppercase leading-none group-hover:text-brand-electric transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-white/40 text-sm leading-relaxed italic mb-10 flex-grow font-description group-hover:text-white/60 transition-colors">
                  {post.excerpt}
                </p>
                
                <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                   <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-brand-electric hover:gap-5 transition-all">
                    Access Intelligence <ArrowRight className="w-4 h-4" />
                   </Link>
                   <span className="text-[10px] font-bold text-white/10 uppercase tracking-widest">{post.date}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter / Subscription */}
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-40 bg-brand-blue/10 rounded-[60px] border border-brand-blue/20 p-12 sm:p-20 text-center relative overflow-hidden"
        >
           <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] pointer-events-none" />
           <div className="relative z-10 max-w-xl mx-auto space-y-10">
              <h2 className="text-4xl sm:text-6xl font-display font-black tracking-tighter uppercase italic leading-[0.9]">
                 Sync With The <br /> <span className="text-brand-electric italic">Neural Feed.</span>
              </h2>
              <p className="text-base text-white/50 font-description italic">Weekly blueprints for scaling high-performance AI systems delivered to your inbox.</p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                 <input 
                   type="email" 
                   placeholder="Enter your work email..."
                   className="flex-grow bg-luxury-black/50 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-brand-blue transition-all font-description italic"
                 />
                 <button className="px-10 py-5 bg-brand-blue text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-glow hover:shadow-strong-glow transition-all">Connect</button>
              </div>
              <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20">Zero Spam. High signal intelligence.</p>
           </div>
        </motion.div>
      </div>
    </div>
  );
}
