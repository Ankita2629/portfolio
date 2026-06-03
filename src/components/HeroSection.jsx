import { ArrowDown, Sparkles, Github, Linkedin, Mail } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-20"
    >
      {/* Background drifting glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bg-orb-1" />
        <div className="bg-orb-2" />
      </div>

      <div className="container max-w-5xl mx-auto text-center z-10 relative">
        <div className="space-y-8">
          {/* Sparkles Welcome Badge */}
          <div className="opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-none text-primary font-bold text-xs tracking-widest border border-primary/30 uppercase">
              <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
              STATUS: SYSTEM READY //
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none text-white">
            <span className="inline-block animate-[fadeIn_0.8s_ease-out_forwards] opacity-0">
              BUILDING
            </span>{" "}
            <br className="md:hidden" />
            <span className="inline-block bg-linear-to-r from-primary via-accent to-secondary text-transparent bg-clip-text animate-[fadeIn_0.8s_ease-out_0.3s_forwards] opacity-0 text-glow">
              INTELLIGENT
            </span>{" "}
            <span className="inline-block animate-[fadeIn_0.8s_ease-out_0.6s_forwards] opacity-0">
              SYSTEMS
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-[fadeIn_0.8s_ease-out_0.9s_forwards] leading-relaxed font-medium">
            Developer Console: <span className="text-white font-bold">Ankita Kumari Singh</span>. Architecting full-stack software, compiling machine learning pipelines, and orchestrating generative AI agents.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-[fadeIn_0.8s_ease-out_1.2s_forwards] pt-4">
            <a
              href="#projects"
              className="cyber-button-fill"
            >
              Initialize Projects //
            </a>

            <a
              href="#contact"
              className="cyber-button"
            >
              Establish Connection //
            </a>
          </div>

          {/* Quick social shortcuts */}
          <div className="flex gap-4 justify-center opacity-0 animate-[fadeIn_0.8s_ease-out_1.4s_forwards]">
            <a
              href="https://github.com/ankita-singhhh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-none bg-white/5 border border-white/10 hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ankitaa-singh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-none bg-white/5 border border-white/10 hover:border-secondary/50 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:ankita11singh20@gmail.com"
              className="p-2.5 rounded-none bg-white/5 border border-white/10 hover:border-accent/50 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              title="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Premium Stat Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-16 opacity-0 animate-[fadeIn_0.8s_ease-out_1.6s_forwards]">
            {[
              { value: "6+", label: "SYSTEM MODULES" },
              { value: "50+", label: "CORE SKILLS" },
              { value: "3+", label: "AWARDS CAPTURED" },
              { value: "2027", label: "BIT CS GRAD" },
            ].map((stat, i) => (
              <div
                key={i}
                className="cyber-card rounded-none p-5 hover:border-primary/40 transition-all duration-300"
              >
                <div className="text-3xl font-black text-primary text-glow">
                  {stat.value}
                </div>
                <div className="text-[10px] text-muted-foreground font-extrabold uppercase tracking-widest mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Scroll indicator with glowing outline */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce"
      >
        <span className="text-xs text-muted-foreground tracking-widest uppercase mb-2">
          Scroll
        </span>
        <div className="p-1.5 border border-primary/20 bg-primary/5 text-primary">
          <ArrowDown className="h-4 w-4 text-primary" />
        </div>
      </a>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};
