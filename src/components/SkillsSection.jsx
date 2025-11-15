import { useState } from 'react';
import { Code2, Database, Palette, Globe, Server, Cloud, BarChart3, Wrench } from 'lucide-react';

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState(0);
    
    const categories = [
        {
            id: 0,
            title: "Frontend Development",
            icon: Code2,
            description: "Building responsive and interactive user interfaces",
            skills: [
                { name: "React.js", level: 70, years: 1.5 },
                { name: "HTML5", level: 85, years: 2 },
                { name: "CSS3", level: 80, years: 2 },
                { name: "Tailwind CSS", level: 75, years: 1.5 },
                { name: "JavaScript", level: 82, years: 1.5 }
            ]
        },
        {
            id: 1,
            title: "Backend Development",
            icon: Server,
            description: "Creating scalable server-side applications",
            skills: [
                { name: "Node.js", level: 75, years: 1 },
                { name: "Express.js", level: 70, years: 1 },
                { name: "REST APIs", level: 75, years: 1 },
                { name: "Socket.IO", level: 75, years: 1 },
                { name: "PHP", level: 75, years: 1 }
            ]
        },
        {
            id: 2,
            title: "Database & Storage",
            icon: Database,
            description: "Managing and optimizing data structures",
            skills: [
                { name: "MongoDB", level: 75, years: 1.5 },
                { name: "MySQL", level: 80, years: 2 },
                { name: "Firebase", level: 60, years: 1 },
                { name: "SQL", level: 85, years: 2 }
            ]
        },
        {
            id: 3,
            title: "Programming Languages",
            icon: Code2,
            description: "Core programming and problem solving",
            skills: [
                { name: "JavaScript", level: 82, years: 1.5 },
                { name: "Python", level: 88, years: 2 },
                { name: "Java", level: 80, years: 2 },
                { name: "C", level: 75, years: 1.5 }
            ]
        },
        {
            id: 4,
            title: "Cloud & DevOps",
            icon: Cloud,
            description: "Deployment and version control",
            skills: [
                { name: "Vercel", level: 85, years: 1.5 },
                { name: "Google Cloud Platform", level: 78, years: 1 },
                { name: "Git", level: 90, years: 1.5 },
                { name: "GitHub", level: 92, years: 1.5 }
            ]
        },
        {
            id: 5,
            title: "AI & APIs",
            icon: Globe,
            description: "Integrating AI and external services",
            skills: [
                { name: "Google Gemini API", level: 87, years: 1 },
                { name: "OpenAI API", level: 80, years: 1 },
                { name: "Speech Recognition", level: 83, years: 1 }
            ]
        },
        {
            id: 6,
            title: "Data Analysis",
            icon: BarChart3,
            description: "Data processing and analysis",
            skills: [
                { name: "Microsoft Excel", level: 85, years: 1 },
                { name: "Pandas", level: 78, years: 1.5 },
                { name: "NumPy", level: 75, years: 1.5 }
            ]
        },
        {
            id: 7,
            title: "Other Tools",
            icon: Wrench,
            description: "Additional development tools",
            skills: [
                { name: "gTTS", level: 82, years: 1 },
                { name: "Eel", level: 80, years: 1 },
                { name: "PowerPoint Automation", level: 77, years: 1 },
                { name: "File Management", level: 85, years: 1.5 }
            ]
        }
    ];

    const activeData = categories[activeCategory];

    return (
        <section id="skills" className="py-24 px-4 relative overflow-hidden">
            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Technical <span className="text-primary">Expertise</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive skill set built through hands-on projects and continuous learning
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Category Navigation */}
                    <div className="lg:col-span-4 space-y-3">
                        {categories.map((category, index) => {
                            const Icon = category.icon;
                            const isActive = activeCategory === index;
                            
                            return (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(index)}
                                    className={`w-full text-left p-5 rounded-xl transition-all duration-300 border-2 ${
                                        isActive
                                            ? 'bg-primary/10 border-primary shadow-lg shadow-primary/20'
                                            : 'bg-transparent border-gray-200 dark:border-slate-800 hover:border-gray-300 dark:hover:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-900/70'
                                    }`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`p-2 rounded-lg transition-colors duration-300 ${
                                            isActive ? 'bg-primary/20' : 'bg-transparent'
                                        }`}>
                                            <Icon className={`w-5 h-5 ${
                                                isActive ? 'text-primary' : 'text-muted-foreground'
                                            }`} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className={`font-semibold mb-1 transition-colors duration-300 ${
                                                isActive ? 'text-primary' : ''
                                            }`}>
                                                {category.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground line-clamp-2">
                                                {category.description}
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Skills Display */}
                    <div className="lg:col-span-8">
                        <div className="bg-transparent backdrop-blur-sm rounded-xl p-8 border border-gray-200 dark:border-slate-800 min-h-[500px]">
                            {/* Category Header */}
                            <div className="flex items-start gap-4 mb-8 pb-6 border-b border-gray-200 dark:border-slate-800">
                                {(() => {
                                    const Icon = activeData.icon;
                                    return (
                                        <>
                                            <div className="p-3 rounded-xl bg-primary/10">
                                                <Icon className="w-7 h-7 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold mb-2">{activeData.title}</h3>
                                                <p className="text-muted-foreground">{activeData.description}</p>
                                            </div>
                                        </>
                                    );
                                })()}
                            </div>

                            {/* Skills List */}
                            <div className="space-y-6">
                                {activeData.skills.map((skill, index) => (
                                    <div
                                        key={skill.name}
                                        className="group"
                                        style={{
                                            animation: `fadeInUp 0.4s ease-out ${index * 0.1}s backwards`
                                        }}
                                    >
                                        {/* Skill Header */}
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="flex items-center gap-3">
                                                <span className="font-semibold">{skill.name}</span>
                                                <span className="text-xs text-muted-foreground bg-background/30 dark:bg-background/10 backdrop-blur-sm px-2 py-1 rounded border border-primary/40 hover:border-primary/60 transition-all duration-300">
                                                    {skill.years} {skill.years === 1 ? 'year' : 'years'}
                                                </span>
                                            </div>
                                            <span className="text-sm font-bold text-primary">
                                                {skill.level}%
                                            </span>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="relative h-2.5 bg-gray-200 dark:bg-slate-800 rounded-full overflow-hidden">
                                            <div 
                                                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10"
                                                style={{ width: `${skill.level}%` }}
                                            />
                                            <div 
                                                className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 ease-out"
                                                style={{ 
                                                    width: `${skill.level}%`,
                                                }}
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                                            </div>
                                        </div>

                                        {/* Proficiency Label */}
                                        <div className="mt-1 text-xs text-muted-foreground">
                                            {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : skill.level >= 70 ? 'Proficient' : 'Intermediate'}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Summary Stats */}
                            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-slate-800 grid grid-cols-3 gap-4">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary">
                                        {activeData.skills.length}
                                    </div>
                                    <div className="text-xs text-muted-foreground mt-1">Technologies</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary">
                                        {Math.round(activeData.skills.reduce((acc, s) => acc + s.level, 0) / activeData.skills.length)}%
                                    </div>
                                    <div className="text-xs text-muted-foreground mt-1">Avg Proficiency</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary">
                                        {Math.max(...activeData.skills.map(s => s.years))}+
                                    </div>
                                    <div className="text-xs text-muted-foreground mt-1">Years Experience</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Overall Stats */}
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-transparent backdrop-blur-sm rounded-xl p-6 text-center border border-gray-200 dark:border-slate-800">
                        <div className="text-3xl font-bold text-primary mb-2">
                            {categories.reduce((acc, cat) => acc + cat.skills.length, 0)}
                        </div>
                        <div className="text-sm text-muted-foreground">Total Skills</div>
                    </div>
                    <div className="bg-transparent backdrop-blur-sm rounded-xl p-6 text-center border border-gray-200 dark:border-slate-800">
                        <div className="text-3xl font-bold text-primary mb-2">
                            {categories.length}
                        </div>
                        <div className="text-sm text-muted-foreground">Specializations</div>
                    </div>
                    <div className="bg-transparent backdrop-blur-sm rounded-xl p-6 text-center border border-gray-200 dark:border-slate-800">
                        <div className="text-3xl font-bold text-primary mb-2">
                            3+
                        </div>
                        <div className="text-sm text-muted-foreground">Years Coding</div>
                    </div>
                    <div className="bg-transparent backdrop-blur-sm rounded-xl p-6 text-center border border-gray-200 dark:border-slate-800">
                        <div className="text-3xl font-bold text-primary mb-2">
                            15+
                        </div>
                        <div className="text-sm text-muted-foreground">Projects Built</div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                
                .animate-shimmer {
                    animation: shimmer 2s infinite;
                }
            `}</style>
        </section>
    );
};
