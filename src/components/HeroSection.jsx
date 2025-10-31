import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
    <section 
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container max-w-4xl mx-auto text-center z-10">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="inline-block animate-[fadeIn_0.8s_ease-in_forwards] opacity-0 hover:scale-110 transition-transform duration-300">Hi, I'm</span>
                {' '}
                <span className="inline-block text-primary animate-[fadeIn_0.8s_ease-in_0.3s_forwards] opacity-0 hover:scale-110 transition-transform duration-300 cursor-default">Ankita</span>
                {' '}
                <span className="inline-block animate-[fadeIn_0.8s_ease-in_0.6s_forwards] opacity-0 hover:scale-110 transition-transform duration-300">Singh</span>
            </h1> 
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-[fadeIn_0.8s_ease-in_0.9s_forwards]">
              A passionate web developer focused on creating beautiful and interactive experiences.
            </p> 
            <div className="opacity-0 animate-[fadeIn_0.8s_ease-in_1.2s_forwards]">
                <a 
                  href="#projects" 
                  className="cosmic-button group inline-block"
                >
                    <span className="inline-block group-hover:scale-110 transition-transform duration-300">
                      View My Work
                    </span>
                </a>
            </div>
          </div>  
        </div>

        {/* Enhanced scroll indicator */}
        <a 
          href="#about"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce hover:scale-110 transition-transform duration-300 cursor-pointer group"
        >
          <span className="text-sm text-muted-foreground mb-2 group-hover:text-primary transition-colors duration-300">Scroll</span>
          <ArrowDown className="h-5 w-5 text-primary group-hover:translate-y-1 transition-transform duration-300" />
        </a>

        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
    </section>
);
};