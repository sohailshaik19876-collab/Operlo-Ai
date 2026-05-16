import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Bot, User, Sparkles } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "../../lib/utils";

type Message = {
  id: string;
  type: "bot" | "user";
  text: string;
  options?: string[];
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      text: "Welcome to Operlo Intelligence. I'm your neural assistant. Ready to audit your bottlenecks and engineer your scaling ecosystem today?",
      options: ["System Audit", "Voice Agents", "CRM Automation"],
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

    // Simulate bot response
    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        text: "Understood. Our systems are analyzing your request. Would you like to schedule a deep-dive audit call with one of our architects?",
        options: ["Schedule Call", "Not Now"],
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 1200);
  };

  return (
    <div className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="w-[calc(100vw-2rem)] sm:w-[380px] h-[550px] sm:h-[600px] glass-dark rounded-[32px] shadow-strong-glow flex flex-col mb-4 overflow-hidden border border-white/10"
          >
            {/* Header */}
            <div className="p-6 bg-brand-blue/20 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue flex items-center justify-center shadow-glow">
                    <Bot className="text-white w-7 h-7" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-luxury-black animate-pulse" />
                </div>
                <div>
                   <h3 className="font-bold text-white tracking-tight">Operlo Assistant</h3>
                   <span className="text-[10px] text-brand-electric uppercase font-black tracking-widest">Neural V4.2</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-full hover:bg-white/5 flex items-center justify-center transition-colors">
                <X className="w-5 h-5 text-white/40" />
              </button>
            </div>

            {/* Content */}
            <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-6 scroll-smooth custom-scrollbar">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={cn("flex flex-col", m.type === "user" ? "items-end" : "items-start")}
                >
                  <div className="flex items-center gap-2 mb-2 opacity-30">
                    {m.type === "bot" ? <Sparkles className="w-3 h-3" /> : <User className="w-3 h-3" />}
                    <span className="text-[9px] uppercase font-black tracking-widest">
                      {m.type === "bot" ? "System Core" : "User Protocol"}
                    </span>
                  </div>
                  <div
                    className={cn(
                      "max-w-[90%] px-5 py-4 rounded-3xl text-sm sm:text-base italic leading-relaxed",
                      m.type === "user" ? "bg-brand-blue text-white shadow-low-glow" : "glass-dark border border-white/10 text-white/80"
                    )}
                  >
                    {m.text}
                  </div>
                  {m.options && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {m.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleSend(opt)}
                          className="px-4 py-2 rounded-xl border border-brand-blue/20 bg-brand-blue/5 hover:bg-brand-blue/20 hover:border-brand-blue transition-all text-[11px] text-brand-electric font-black uppercase tracking-widest"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 bg-luxury-black/40 border-t border-white/5">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend(inputValue)}
                  placeholder="Query system metadata..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-sm focus:outline-none focus:border-brand-blue transition-all"
                />
                <button
                  onClick={() => handleSend(inputValue)}
                  className="bg-brand-blue p-3.5 rounded-2xl shadow-glow hover:shadow-strong-glow transition-all active:scale-95"
                >
                  <Send className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-16 h-16 sm:w-18 sm:h-18 bg-brand-blue rounded-3xl shadow-strong-glow flex items-center justify-center hover:scale-110 transition-all active:scale-90 relative",
          isOpen ? "" : ""
        )}
      >
        <div className="absolute -inset-1 bg-brand-electric/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
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
              <MessageSquare className="text-white w-8 h-8" />
              {!isOpen && <div className="absolute top-0 right-0 w-3 h-3 bg-brand-electric rounded-full border-2 border-brand-blue animate-bounce" />}
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}

