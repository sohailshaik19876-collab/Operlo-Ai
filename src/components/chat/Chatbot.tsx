import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Bot, User, Sparkles, Calendar, ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "../../lib/utils";

type Message = {
  id: string;
  type: "bot" | "user";
  text: string;
  options?: string[];
  action?: "name" | "email" | "business" | "booking";
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [flowStep, setFlowStep] = useState(0);
  const [leadData, setLeadData] = useState({ name: "", email: "", business: "" });
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      text: "Hi, I'm the Operlo AI assistant. I can help you explore automation solutions for your business. To start, may I know your name?",
      action: "name",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), type: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Qualification Flow Logic
    setTimeout(() => {
      let botResponse: Message = { id: (Date.now() + 1).toString(), type: "bot", text: "" };
      
      if (flowStep === 0) {
        setLeadData(prev => ({ ...prev, name: text }));
        botResponse.text = `Pleasure, ${text.split(' ')[0]}. What is the primary focus of your business?`;
        botResponse.options = ["E-commerce", "SaaS", "Real Estate", "Professional Services"];
        botResponse.action = "business";
        setFlowStep(1);
      } else if (flowStep === 1) {
        setLeadData(prev => ({ ...prev, business: text }));
        botResponse.text = "Incredible. What's your business email? (We'll use this to send you personalized automation insights).";
        botResponse.action = "email";
        setFlowStep(2);
      } else if (flowStep === 2) {
        setLeadData(prev => ({ ...prev, email: text }));
        botResponse.text = "Analysis complete. Our systems suggest a high potential for automation in your operations. Ready to book a free strategy call with our team?";
        botResponse.options = ["Book Strategy Call", "Learn More First"];
        botResponse.action = "booking";
        setFlowStep(3);
      } else {
        if (text === "Book Strategy Call") {
           botResponse.text = "Redirecting you to our priority booking portal...";
           setTimeout(() => window.location.href = "/contact", 1500);
        } else {
           botResponse.text = "Understood. Feel free to explore our solutions at your own pace. I'm here if you have any other questions.";
        }
      }

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-4 right-4 lg:bottom-6 lg:right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="w-[calc(100vw-2rem)] sm:w-[380px] h-[580px] sm:h-[580px] glass-dark rounded-[32px] shadow-strong-glow flex flex-col mb-4 overflow-hidden border border-white/10"
          >
            {/* Header */}
            <div className="p-6 bg-brand-blue/10 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-11 h-11 rounded-xl bg-brand-blue flex items-center justify-center shadow-glow border border-white/10">
                    <Bot className="text-white w-6 h-6" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-luxury-black shadow-glow" />
                </div>
                <div>
                   <h3 className="font-display font-bold text-white tracking-tight text-base">Operlo AI</h3>
                   <div className="flex items-center gap-1.5">
                     <span className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                     <span className="text-[8px] text-white/40 uppercase font-black tracking-widest">Assistant Online</span>
                   </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="w-8 h-8 rounded-xl hover:bg-white/5 flex items-center justify-center transition-colors border border-white/5"
              >
                <X className="w-4 h-4 text-white/40" />
              </button>
            </div>

            {/* Content */}
            <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-6 scroll-smooth custom-scrollbar bg-luxury-black/30 backdrop-blur-3xl">
              {messages.map((m) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={m.id}
                  className={cn("flex flex-col", m.type === "user" ? "items-end" : "items-start")}
                >
                  <div className="flex items-center gap-2 mb-2 opacity-20">
                    {m.type === "bot" ? <Sparkles className="w-3 h-3" /> : <User className="w-3 h-3" />}
                    <span className="text-[9px] uppercase font-black tracking-[0.2em]">
                      {m.type === "bot" ? "Operlo Assistant" : "Guest User"}
                    </span>
                  </div>
                  <div
                    className={cn(
                      "max-w-[85%] px-4 py-3 rounded-[24px] text-xs sm:text-sm italic leading-relaxed",
                      m.type === "user" 
                        ? "bg-brand-blue text-white shadow-low-glow rounded-tr-none" 
                        : "glass-dark border border-white/10 text-white/90 rounded-tl-none font-medium"
                    )}
                  >
                    {m.text}
                  </div>
                  {m.options && (
                    <div className="flex flex-col gap-2 mt-3 w-full">
                      {m.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleSend(opt)}
                          className="px-5 py-3 rounded-xl border border-white/5 bg-white/5 hover:bg-brand-blue/10 hover:border-brand-blue transition-all text-[10px] text-white/70 hover:text-brand-electric font-black uppercase tracking-widest text-left flex items-center justify-between group"
                        >
                          {opt}
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                        </button>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-start"
                >
                  <div className="flex items-center gap-2 mb-2 opacity-20">
                    <Sparkles className="w-3 h-3" />
                    <span className="text-[9px] uppercase font-black tracking-[0.2em]">Operlo Assistant</span>
                  </div>
                  <div className="glass-dark border border-white/10 px-4 py-3 rounded-[24px] rounded-tl-none flex gap-1">
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-brand-electric rounded-full" />
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-brand-electric rounded-full" />
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-brand-electric rounded-full" />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input Overlay for Booking CTA */}
            {flowStep === 3 && (
              <div className="p-6 pb-8 flex flex-col gap-3 bg-brand-blue/10 backdrop-blur-xl border-t border-white/10 animate-fade-up">
                 <button 
                  onClick={() => handleSend("Book Strategy Call")}
                  className="w-full py-4 bg-brand-blue rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-glow hover:shadow-strong-glow transition-all hover:scale-[1.02]"
                 >
                   <Calendar className="w-4 h-4" />
                   Confirm Strategy Call
                 </button>
                 <button 
                  onClick={() => handleSend("Learn More")}
                  className="w-full py-3 glass rounded-xl font-black text-[10px] uppercase tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity"
                 >
                   Continue Inquiry
                 </button>
              </div>
            )}

            {/* Footer Input */}
            {flowStep < 3 && (
              <div className="p-5 bg-luxury-black/50 border-t border-white/5 backdrop-blur-2xl">
                <div className="flex gap-3 relative">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend(inputValue)}
                    placeholder={
                      flowStep === 0 ? "Enter full name..." : 
                      flowStep === 1 ? "Select or type industry..." : 
                      "Enter email address..."
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-xs focus:outline-none focus:border-brand-blue transition-all font-description italic text-white/90 pr-14"
                  />
                  <button
                    onClick={() => handleSend(inputValue)}
                    className="absolute right-1.5 top-1.5 bottom-1.5 bg-brand-blue px-3.5 rounded-lg shadow-glow hover:shadow-strong-glow transition-all active:scale-95"
                  >
                    <Send className="w-3.5 h-3.5 text-white" />
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 sm:w-16 sm:h-16 bg-brand-blue rounded-2xl shadow-strong-glow flex items-center justify-center relative group overflow-hidden border border-white/20",
          isOpen ? "" : ""
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="text-white w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              className="relative"
            >
              <MessageSquare className="text-white w-7 h-7" />
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-brand-electric rounded-full border-2 border-brand-blue animate-bounce shadow-glow" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Proactive Welcome Bubble */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 20, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 3 }}
          className="absolute bottom-20 right-0 w-64 glass-dark p-4 rounded-2xl border border-white/10 shadow-strong-glow hidden sm:block pointer-events-none"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-2 rounded-full bg-brand-electric animate-pulse" />
            <span className="text-[9px] font-black uppercase tracking-widest text-brand-electric">Assistant Online</span>
          </div>
          <p className="text-xs font-description italic text-white/60">"Looking to scale your business? Let's explore how AI can help."</p>
        </motion.div>
      )}
    </div>
  );
}

