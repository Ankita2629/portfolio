import { Code, Palette, Sparkles } from 'lucide-react';
import { useState } from 'react';

export const AboutSection = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    
    const skills = [
        {
            id: 1,
            icon: Code,
            title: "Modern Development",
            description: "Building with React, TypeScript, and cutting-edge tools to deliver fast, scalable applications.",
            color: "from-blue-500/20 to-cyan-500/20"
        },
        {
            id: 2,
            icon: Palette,
            title: "Thoughtful Design",
            description: "Creating interfaces that are visually striking yet intuitive, where every element serves a purpose.",
            color: "from-blue-500/20 to-cyan-500/20"
        },
        {
            id: 3,
            icon: Sparkles,
            title: "Delightful Details",
            description: "Adding subtle animations and micro-interactions that transform good experiences into memorable ones.",
            color: "from-blue-500/20 to-cyan-500/20"
        }
    ];

    return (
      <section id="about" className="py-24 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto max-w-5xl relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        Crafting Digital Experiences
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                       I'm a frontend developer with a keen eye for design and a passion for creating 
                       web experiences that are not just functional, but delightful to use. Every pixel, 
                       animation, and interaction matters.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        My approach combines technical excellence with creative thinking. I believe the 
                        best websites strike a perfect balance between stunning visuals and seamless 
                        functionality—where form truly meets function.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <a 
                            href="#contact" 
                            className="cosmic-button transform hover:scale-105 transition-transform duration-300"
                        >
                            Get In Touch
                        </a>
                        <a 
                            href="#" 
                            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-all duration-300 text-center inline-block transform hover:scale-105"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 gap-6 relative">
                    {/* Background glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 rounded-3xl blur-3xl -z-10" />
                    
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        const isHovered = hoveredCard === skill.id;
                        
                        return (
                            <div
                                key={skill.id}
                                className={`gradient-border p-6 cursor-pointer transition-all duration-500 transform bg-slate-900/80 backdrop-blur-md ${
                                    isHovered ? 'scale-105 -translate-y-2 bg-slate-900/90' : 'scale-100'
                                }`}
                                onMouseEnter={() => setHoveredCard(skill.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                                style={{
                                    animationDelay: `${index * 0.1}s`
                                }}
                            >
                                {/* Animated background gradient on hover */}
                                <div 
                                    className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-lg opacity-0 transition-opacity duration-500 ${
                                        isHovered ? 'opacity-100' : ''
                                    }`}
                                />
                                
                                <div className="flex items-start gap-4 relative z-10">
                                    <div className={`p-3 rounded-full bg-primary/10 flex-shrink-0 transition-all duration-500 ${
                                        isHovered ? 'bg-primary/20 rotate-12 scale-110' : ''
                                    }`}>
                                        <Icon className={`w-6 h-6 text-primary transition-all duration-500 ${
                                            isHovered ? 'scale-110' : ''
                                        }`} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className={`font-semibold text-lg mb-2 transition-colors duration-300 ${
                                            isHovered ? 'text-primary' : ''
                                        }`}>
                                            {skill.title}
                                        </h4>
                                        <p className={`text-sm text-muted-foreground leading-relaxed transition-all duration-300 ${
                                            isHovered ? 'translate-x-1' : ''
                                        }`}>
                                            {skill.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
      </section>
    );
};