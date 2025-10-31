import { useEffect, useState } from "react";
import { X, Menu } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // If at the very top of the page, set to home
      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }
      
      // Detect active section
      const sections = navItems.map(item => item.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    // Run on mount to set initial state
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href) => {
    return activeSection === href.substring(1);
  };

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled 
          ? "py-3 bg-background/80 backdrop-blur-md shadow-lg border-b border-primary/10" 
          : "py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo with hover effect */}
        <a
          className="text-xl font-bold text-primary flex items-center group"
          href="#hero"
        >
          <span className="relative z-10 transition-all duration-300 group-hover:scale-110">
            <span className="text-glow text-foreground group-hover:text-primary transition-colors duration-300">
              Ankita
            </span>{" "}
            <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">
              Singh
            </span>
          </span>
        </a>

        {/* Desktop Nav with interactive indicators */}
        <div className="hidden md:flex space-x-1 relative">
          {navItems.map((item, key) => {
            const active = isActive(item.href);
            const hovered = hoveredItem === key;
            
            return (
              <a
                key={key}
                href={item.href}
                onMouseEnter={() => setHoveredItem(key)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`relative px-4 py-2 transition-all duration-300 rounded-lg ${
                  active 
                    ? "text-primary" 
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {/* Active indicator */}
                {active && (
                  <span className="absolute inset-0 bg-primary/10 rounded-lg animate-pulse" />
                )}
                
                {/* Hover background */}
                <span 
                  className={`absolute inset-0 bg-primary/5 rounded-lg transition-opacity duration-300 ${
                    hovered ? "opacity-100" : "opacity-0"
                  }`}
                />
                
                {/* Text */}
                <span className={`relative z-10 inline-block transition-transform duration-300 ${
                  hovered ? "scale-110" : "scale-100"
                }`}>
                  {item.name}
                </span>
                
                {/* Underline animation */}
                <span 
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    active ? "w-full" : hovered ? "w-full" : "w-0"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Button with animation */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-foreground z-50 relative p-2 hover:bg-primary/10 rounded-lg transition-all duration-300 hover:scale-110"
        >
          <div className="relative w-7 h-7">
            <Menu 
              size={28} 
              className={`absolute inset-0 transition-all duration-300 ${
                isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
              }`}
            />
            <X 
              size={28} 
              className={`absolute inset-0 transition-all duration-300 ${
                isMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu with staggered animations */}
      <div
        className={`fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-8 text-xl">
          {navItems.map((item, key) => {
            const active = isActive(item.href);
            
            return (
              <a
                key={key}
                href={item.href}
                className={`relative text-center transition-all duration-300 group ${
                  active ? "text-primary" : "text-foreground/80"
                }`}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  animation: isMenuOpen 
                    ? `slideIn 0.3s ease-out ${key * 0.1}s both` 
                    : "none"
                }}
              >
                {/* Active indicator for mobile */}
                {active && (
                  <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full animate-pulse" />
                )}
                
                {/* Hover background for mobile */}
                <span className="absolute inset-0 -inset-x-4 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Text */}
                <span className="relative z-10 inline-block group-hover:scale-110 transition-transform duration-300">
                  {item.name}
                </span>
                
                {/* Underline */}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-300" />
              </a>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .text-glow {
          text-shadow: 0 0 20px rgba(var(--primary-rgb, 139, 92, 246), 0.3);
        }
      `}</style>
    </nav>
  );
};