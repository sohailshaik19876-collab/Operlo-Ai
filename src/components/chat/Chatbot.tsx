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
  const [flowStep, setFlowStep] = useState(0);
  const [leadData, setLeadData] = useState({ name: "", email: "", business: "" });
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      text: "Neural System Online. I am your Operlo architect. To begin our diagnostic, may I know your name?",
      action: "name",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), type: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");

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
        botResponse.text = "Incredible. Finally, what's your business email? (We use this strictly for system synchronization).";
        botResponse.action = "email";
        setFlowStep(2);
      } else if (flowStep === 2) {
        setLeadData(prev => ({ ...prev, email: text }));
        botResponse.text = "Diagnostic complete. Our neural models suggest a high ROI for your current operations. Ready to book your deep-dive audit call with our engineers?";
        botResponse.options = ["Schedule Strategy Audit", "Learn More First"];
        botResponse.action = "booking";
        setFlowStep(3);
      } else {
        if (text === "Schedule Strategy Audit") {
           botResponse.text = "Redirecting you to our high-priority scheduling portal...";
           setTimeout(() => window.location.href = "/contact", 1500);
        } else {
           botResponse.text = "Understood. Feel free to explore our infrastructure at your own pace. I'm here if you need further diagnostics.";
        }
      }

      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="w-[calc(100vw-2rem)] sm:w-[400px] h-[600px] sm:h-[650px] glass-dark rounded-[40px] shadow-strong-glow flex flex-col mb-4 overflow-hidden border border-white/10"
          >
            {/* Header */}
            <div className="p-8 bg-brand-blue/10 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-brand-blue flex items-center justify-center shadow-glow border border-white/10">
                    <Bot className="text-white w-8 h-8" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-luxury-black shadow-glow" />
                </div>
                <div>
                   <h3 className="font-display font-bold text-white tracking-tight text-lg">Operlo AI</h3>
                   <div className="flex items-center gap-2">
                     <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                     <span className="text-[10px] text-white/40 uppercase font-black tracking-widest">Active Neural Web</span>
                   </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="w-10 h-10 rounded-2xl hover:bg-white/5 flex items-center justify-center transition-colors border border-white/5"
              >
                <X className="w-5 h-5 text-white/40" />
              </button>
            </div>

            {/* Content */}
            <div ref={scrollRef} className="flex-grow overflow-y-auto p-8 space-y-8 scroll-smooth custom-scrollbar bg-luxury-black/30 backdrop-blur-3xl">
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
                      {m.type === "bot" ? "System Protocol" : "External Origin"}
                    </span>
                  </div>
                  <div
                    className={cn(
                      "max-w-[85%] px-6 py-4 rounded-[28px] text-sm sm:text-base italic leading-relaxed",
                      m.type === "user" 
                        ? "bg-brand-blue text-white shadow-low-glow rounded-tr-none" 
                        : "glass-dark border border-white/10 text-white/90 rounded-tl-none font-medium"
                    )}
                  >
                    {m.text}
                  </div>
                  {m.options && (
                    <div className="flex flex-col gap-2 mt-4 w-full">
                      {m.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleSend(opt)}
                          className="px-6 py-4 rounded-2xl border border-white/5 bg-white/5 hover:bg-brand-blue/10 hover:border-brand-blue transition-all text-xs text-white/70 hover:text-brand-electric font-black uppercase tracking-widest text-left flex items-center justify-between group"
                        >
                          {opt}
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                        </button>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Input Overlay for Booking CTA */}
            {flowStep === 3 && (
              <div className="p-8 pb-10 flex flex-col gap-4 bg-brand-blue/10 backdrop-blur-xl border-t border-white/10 animate-fade-up">
                 <button 
                  onClick={() => handleSend("Schedule Strategy Audit")}
                  className="w-full py-5 bg-brand-blue rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 shadow-glow hover:shadow-strong-glow transition-all hover:scale-[1.02]"
                 >
                   <Calendar className="w-5 h-5" />
                   Confirm Diagnostic Call
                 </button>
                 <button 
                  onClick={() => handleSend("Learn More")}
                  className="w-full py-4 glass rounded-2xl font-black text-xs uppercase tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity"
                 >
                   Continue Inquiry
                 </button>
              </div>
            )}

            {/* Footer Input */}
            {flowStep < 3 && (
              <div className="p-6 bg-luxury-black/50 border-t border-white/5 backdrop-blur-2xl">
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
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-brand-blue transition-all font-description italic text-white/90 pr-16"
                  />
                  <button
                    onClick={() => handleSend(inputValue)}
                    className="absolute right-2 top-2 bottom-2 bg-brand-blue px-4 rounded-xl shadow-glow hover:shadow-strong-glow transition-all active:scale-95"
                  >
                    <Send className="w-4 h-4 text-white" />
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
          "w-16 h-16 sm:w-20 sm:h-20 bg-brand-blue rounded-[30px] shadow-strong-glow flex items-center justify-center relative group overflow-hidden border border-white/20",
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
              <X className="text-white w-8 h-8" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              className="relative"
            >
              <MessageSquare className="text-white w-9 h-9" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-brand-electric rounded-full border-2 border-brand-blue animate-bounce shadow-glow" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}

