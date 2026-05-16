import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Rocket, ChevronRight, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../../lib/utils";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
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
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-4",
        isScrolled ? "py-2" : "py-4 md:py-6"
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto rounded-2xl transition-all duration-500 px-4 md:px-8 py-3 flex items-center justify-between relative z-50",
          isScrolled ? "glass-dark shadow-strong-glow border border-white/5" : "bg-transparent"
        )}
      >
        <Link to="/" className="flex items-center gap-3 group relative z-50">
          <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center shadow-glow group-hover:shadow-strong-glow transition-all duration-500 transform group-hover:scale-110">
            <Rocket className="text-white w-6 h-6" />
          </div>
          <span className="text-xl sm:text-2xl font-display font-black tracking-tighter text-white uppercase italic">
            OPERLO<span className="text-brand-electric">AI</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 hover:text-brand-electric relative group",
                location.pathname === link.href ? "text-brand-electric" : "text-white/60"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 h-0.5 bg-brand-electric transition-all duration-300",
                location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
              )} />
            </Link>
          ))}
          <Link
            to="/contact"
            className="group px-6 py-3 bg-brand-blue rounded-xl font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:scale-105 transition-all shadow-glow hover:shadow-strong-glow"
          >
            Audit Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-luxury-black/90 backdrop-blur-2xl z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-luxury-black/95 z-40 border-l border-white/5 p-8 flex flex-col pt-32 lg:hidden"
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      className={cn(
                        "text-3xl font-display font-black uppercase tracking-tighter italic block py-2 transition-all",
                        location.pathname === link.href ? "text-brand-electric pl-4 border-l-4 border-brand-electric" : "text-white/60 hover:text-white"
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-auto"
              >
                <Link
                  to="/contact"
                  className="w-full py-5 bg-brand-blue rounded-2xl font-black text-lg uppercase tracking-widest flex items-center justify-center gap-3 shadow-strong-glow active:scale-95 transition-transform"
                >
                  Start The Audit
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <div className="mt-8 flex justify-center gap-8 opacity-40">
                   <span className="text-[10px] font-bold uppercase tracking-widest">Twitter</span>
                   <span className="text-[10px] font-bold uppercase tracking-widest">LinkedIn</span>
                   <span className="text-[10px] font-bold uppercase tracking-widest">YouTube</span>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

