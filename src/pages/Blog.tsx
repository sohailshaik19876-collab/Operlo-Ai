import { motion } from "motion/react";
import { Calendar, Search, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const posts = [
  {
    title: "How AI Voice Agents are Destroying Inbound Lead Latency",
    excerpt: "Discover why immediate response is the only metric that matters in 2026 real estate.",
    category: "Insights",
    date: "May 12, 2026",
    id: 1
  },
  {
    title: "The Ultimate Guide to CRM Automation for Agencies",
    excerpt: "Stop manually updating cards. Automate your entire pipeline with these simple neural triggers.",
    category: "Guides",
    date: "May 08, 2026",
    id: 2
  },
  {
    title: "Why Your Business Needs a Custom LLM Knowledge Base",
    excerpt: "Internal AI is more than just a chatbot. It's the brain of your company.",
    category: "Technical",
    date: "May 05, 2026",
    id: 3
  }
];

export default function Blog() {
  return (
    <div className="pt-24 sm:pt-28 pb-20 px-4 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className="inline-block px-4 py-1.5 glass rounded-full text-brand-electric text-xs font-black uppercase tracking-widest mb-6"> Intelligence Hub </div>
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 italic tracking-tighter">Future <span className="text-white/40">Readings.</span></h1>
        <p className="text-xl text-white/50 leading-relaxed font-description">
          Master the art of AI automation with our deep-dive articles and technical strategy guides.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-dark rounded-[40px] border border-white/5 overflow-hidden group hover:border-brand-blue/30 transition-all flex flex-col"
          >
            <div className="h-64 bg-brand-blue/10 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-transparent" />
               <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:scale-110 transition-transform duration-1000">
                  <Layout className="w-32 h-32" />
               </div>
            </div>
            
            <div className="p-8 flex-grow flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-electric px-3 py-1 bg-brand-blue/10 rounded-full">{post.category}</span>
                <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{post.date}</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 tracking-tight leading-tight group-hover:text-brand-electric transition-colors">
                {post.title}
              </h3>
              
              <p className="text-white/40 text-sm leading-relaxed italic mb-8 flex-grow font-description">
                {post.excerpt}
              </p>
              
              <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest group-hover:gap-4 transition-all">
                Read Article <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

import { Layout } from "lucide-react";
