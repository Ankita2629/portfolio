export const HeroSection = () => {
    return (
    <section 
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
        <div className="container max-w-4xl mx-auto text-center z-10">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="inline-block animate-[fadeIn_0.8s_ease-in_forwards] opacity-0">Hi, I'm</span>
                {' '}
                <span className="inline-block text-primary animate-[fadeIn_0.8s_ease-in_0.3s_forwards] opacity-0">Ankita</span>
                {' '}
                <span className="inline-block animate-[fadeIn_0.8s_ease-in_0.6s_forwards] opacity-0">Singh</span>
            </h1> 
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-[fadeIn_0.8s_ease-in_0.9s_forwards]">
              A passionate web developer focused on creating beautiful and interactive experiences.
            </p> 
            <div className="opacity-0 animate-[fadeIn_0.8s_ease-in_1.2s_forwards]">
                <a href="#projects" className="cosmic-button">
                    View My Work
                </a>
            </div>
          </div>  
        </div>
        
        <style jsx>{`
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