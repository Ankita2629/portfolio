import { useEffect, useState } from "react";
import { X, Menu } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      
      if (window.scrollY < 100) {
        setActiveSection("hero");
        return;
      }
      
      const sections = navItems.map(item => item.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href) => {
    return activeSection === href.substring(1);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "py-4 px-4 md:px-8" 
          : "py-6 px-4 md:px-8"
      }`}
    >
      <div 
        className={`mx-auto max-w-6xl flex items-center justify-between transition-all duration-500 rounded-none border ${
          isScrolled 
            ? "px-6 py-3 bg-slate-950/80 border-primary/40 backdrop-blur-xl shadow-[0_0_20px_rgba(6,182,212,0.15)]" 
            : "px-2 py-2 bg-transparent border-transparent"
        }`}
        style={isScrolled ? {
          clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))"
        } : {}}
      >
        {/* Logo */}
        <a
          className="text-2xl font-black tracking-tight flex items-center group"
          href="#hero"
        >
          <span className="relative z-10 transition-all duration-300 group-hover:scale-105 flex items-center gap-1">
            <span className="text-primary font-black text-glow tracking-widest text-xl md:text-2xl">
              ANKITA
            </span>
            <span className="text-primary bg-primary/10 border border-primary/30 px-2 py-0.5 rounded-none ml-1 text-[10px] tracking-widest font-bold">
              SYSTEM.SYS
            </span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-1">
          {navItems.map((item, key) => {
            const active = isActive(item.href);
            const hovered = hoveredItem === key;
            
            return (
              <a
                key={key}
                href={item.href}
                onMouseEnter={() => setHoveredItem(key)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`relative px-4 py-1.5 transition-all duration-300 rounded-none text-xs font-bold uppercase tracking-wider ${
                  active 
                    ? "text-primary border-b-2 border-primary" 
                    : "text-muted-foreground hover:text-white"
                }`}
              >
                <span className="relative z-10">
                  {item.name}
                </span>
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-primary z-50 relative p-2 bg-primary/10 border border-primary/30 hover:bg-primary/20 rounded-none transition-all duration-300 active:scale-95"
        >
          <div className="relative w-5 h-5">
            <Menu 
              size={20} 
              className={`absolute inset-0 transition-all duration-300 ${
                isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
              }`}
            />
            <X 
              size={20} 
              className={`absolute inset-0 transition-all duration-300 ${
                isMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-slate-950/98 backdrop-blur-2xl z-40 flex flex-col items-center justify-center transition-all duration-500 lg:hidden ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-4 text-xl w-full max-w-xs px-6">
          {navItems.map((item, key) => {
            const active = isActive(item.href);
            
            return (
              <a
                key={key}
                href={item.href}
                className={`relative py-3 px-6 rounded-none text-center transition-all duration-300 group font-bold text-sm uppercase tracking-wider border ${
                  active 
                    ? "text-primary bg-primary/15 border-primary" 
                    : "text-muted-foreground hover:text-white border-white/5 hover:border-white/25 hover:bg-white/5"
                }`}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  animation: isMenuOpen 
                    ? `slideInMobile 0.4s ease-out ${key * 0.08}s both` 
                    : "none"
                }}
              >
                <span className="relative z-10">
                  {item.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes slideInMobile {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </nav>
  );
};