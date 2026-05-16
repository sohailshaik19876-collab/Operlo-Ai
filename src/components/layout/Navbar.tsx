import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Rocket, ChevronRight, ArrowRight, Bot } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../../lib/utils";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Demo", href: "/demo" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6",
        isScrolled ? "py-4 md:py-4" : "py-8 md:py-10"
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto rounded-[40px] transition-all duration-700 px-8 py-5 flex items-center justify-between relative z-50 overflow-hidden",
          isScrolled ? "glass-dark shadow-strong-glow border border-white/10 backdrop-blur-3xl" : "bg-transparent border-transparent"
        )}
      >
        <Link to="/" className="flex items-center gap-4 group relative z-50">
          <motion.div 
            whileHover={{ rotate: 180, scale: 1.1 }}
            className="w-11 h-11 bg-brand-blue text-white rounded-[16px] flex items-center justify-center shadow-strong-glow transition-all duration-700 transform"
          >
            <Bot className="w-6 h-6" />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-display font-black tracking-tighter text-white uppercase italic leading-[0.8]">
              OPERLO<span className="text-brand-electric">.</span>
            </span>
            <span className="text-[8px] font-black uppercase tracking-[0.4em] text-white/30 group-hover:text-brand-electric transition-colors">Neural Systems</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          <nav className="flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 relative group py-2",
                  location.pathname === link.href ? "text-brand-electric" : "text-white/40 hover:text-white"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-[2px] bg-brand-electric transition-all duration-700 rounded-full",
                  location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </Link>
            ))}
          </nav>
          
          <div className="h-8 w-[1px] bg-white/10 mx-2" />

          <Link
            to="/contact"
            className="group px-8 py-3.5 bg-white text-brand-blue rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-3 hover:scale-105 transition-all shadow-glow hover:shadow-strong-glow active:scale-95"
          >
            Book Strategy Call
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-50 w-11 h-11 flex flex-col items-center justify-center gap-1.5 rounded-xl bg-white/5 border border-white/10 group"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={cn("w-6 h-0.5 bg-white transition-all transform origin-center", isOpen && "rotate-45 translate-y-2")} />
          <div className={cn("w-6 h-0.5 bg-white transition-all transform origin-center", isOpen && "opacity-0 scale-0")} />
          <div className={cn("w-6 h-0.5 bg-white transition-all transform origin-center", isOpen && "-rotate-45 -translate-y-2")} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden absolute top-full left-0 right-0 mx-6 mt-4 z-40 overflow-hidden"
          >
            <div className="glass-dark rounded-[40px] border border-white/10 p-10 flex flex-col gap-8 shadow-2xl backdrop-blur-3xl">
              <div className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      className={cn(
                        "text-3xl font-display font-black uppercase tracking-tighter italic block py-2 transition-all",
                        location.pathname === link.href ? "text-brand-electric pl-6 border-l-4 border-brand-electric" : "text-white/60"
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="pt-8 border-t border-white/5 flex flex-col gap-4">
                <Link
                  to="/contact"
                  className="w-full py-5 bg-brand-blue rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-strong-glow active:scale-95 transition-transform"
                >
                  Book Your Audit
                  <ArrowRight className="w-5 h-5 text-brand-electric" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

