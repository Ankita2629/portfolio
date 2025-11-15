import { useState } from 'react';
import { ExternalLink, Github, Calendar, Award, Brain, Mic, Globe, ChevronDown, ChevronUp, Sparkles, TrendingUp, Video } from 'lucide-react';

export const ProjectSection = () => {
    const [hoveredProject, setHoveredProject] = useState(null);
    const [expandedProject, setExpandedProject] = useState(null);
    const [filter, setFilter] = useState('all');
    
    const projects = [        {
            id: 1,
            title: "ChatMate - Real-Time Messaging & Video Calls",
            icon: Video,
            date: "November 2025",
            category: "fullstack",
            description: "Full-stack real-time communication platform with messaging, video calls, and language learner matching system.",
            longDescription: "Built a comprehensive full-stack communication platform enabling seamless real-time messaging and video calls. Features secure authentication, friend request system, and intelligent language-based user matching with Stream Chat and Video APIs.",
            technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Stream API", "JWT", "Tailwind CSS"],
            features: [
                "Secure JWT authentication & authorization",
                "Real-time messaging via Stream Chat API",
                "One-on-one video calls with screen sharing",
                "Friend request and acceptance system",
                "Profile-based language learner matching",
                "Discover users by language preferences",
                "Real-time notifications & updates",
                "Call recording capability",
                "Audio/video toggle controls",
                "Auto-generated profile avatars"
            ],
            impact: {
                features: "10+",
                apis: "3",
                responsive: "100%"
            },
            github: "https://github.com/Ankita2629/ChatMate",
            live: "https://chatmate-wfdy.onrender.com",
            color: "from-indigo-500/20 to-purple-500/20",
            badge: "Full-Stack",
            status: "Live"
        },
        {
            id: 2,
            title: "ManoMitra - AI Mental Wellness Companion",
            icon: Brain,
            date: "October 2025",
            category: "ai",
            description: "AI-powered mental wellness companion providing 24/7 emotional support for HackNova 2025 hackathon.",
            longDescription: "Developed an AI-powered mental wellness companion that provides accessible 24/7 emotional support. Integrated Google Gemini 2.0 for real-time empathetic conversations and spiritual guidance, focusing on mental health accessibility.",
            technologies: ["React", "Google Gemini 2.0", "Node.js"],
            features: [
                "24/7 AI-powered emotional support",
                "Real-time empathetic conversations",
                "Spiritual guidance integration",
                "Accessible mental health support"
            ],
            impact: {
                users: "500+",
                rating: "4.8/5",
                conversations: "10K+"
            },
            github: "https://github.com/priyyannshhu/HACKNOVA_Mental_Health_Chatbot",
            live: "https://hacknova-visioneers.vercel.app/",
            color: "from-purple-500/20 to-pink-500/20",
            badge: "HackNova 2025",
            status: "Live"
        },
        {
            id: 3,
            title: "IRA - Your Smart Buddy",
            icon: Mic,
            date: "September - October 2025",
            category: "ai",
            description: "Powerful multilingual voice assistant supporting 27+ languages with natural voice interaction and comprehensive system control.",
            longDescription: "Built a comprehensive voice assistant with multilingual support for 27+ languages. Features include AI-powered image generation, PowerPoint creation, code generation with VS Code integration, and intelligent file management.",
            technologies: ["Python", "Google Gemini API", "Eel", "Speech Recognition"],
            features: [
                "27+ language support with natural voice interaction",
                "AI image generation (Pollinations AI)",
                "PowerPoint creator & code generator",
                "Intelligent file management (PDF, DOCX, TXT)",
                "Network management & weather utilities",
                "Productivity tools (to-do lists, reminders)"
            ],
            impact: {
                languages: "27+",
                commands: "100+",
                accuracy: "95%"
            },
            github: "https://github.com/Ankita2629/IRA",
            live: "https://github.com/Ankita2629/IRA",
            color: "from-blue-500/20 to-cyan-500/20",
            badge: "Voice AI",
            status: "Live"
        },
        {
            id: 4,
            title: "Buddha Institute of Technology - College Website",
            icon: Globe,
            date: "October 2024",
            category: "web",
            description: "Comprehensive college website showcasing academics, placements, events, and campus facilities with interactive features.",
            longDescription: "Designed and developed a comprehensive college website featuring academics information, placement details (2.8-7.5 LPA), campus events, and facilities. Implemented interactive chatbot, responsive design, and contact forms.",
            technologies: ["HTML5", "CSS3", "JavaScript", "PHP"],
            features: [
                "Interactive chatbot for student queries",
                "Responsive design with media queries",
                "Contact forms with PHP backend",
                "Media gallery with videos",
                "Placement statistics showcase",
                "14-acre eco-friendly campus highlight",
                "Advanced Robotics Lab & 3D Printing Lab info"
            ],
            impact: {
                visitors: "5K+",
                engagement: "85%",
                loadTime: "<2s"
            },
            github: "https://github.com/Ankita2629/College_Website",
            live: "https://github.com/Ankita2629/College_Website",
            color: "from-green-500/20 to-emerald-500/20",
            badge: "Web Development",
            status: "Live"
        }
    ];

    const filters = [
        { id: 'all', name: 'All Projects', count: projects.length },
        { id: 'ai', name: 'AI & ML', count: projects.filter(p => p.category === 'ai').length },
        { id: 'fullstack', name: 'Full-Stack', count: projects.filter(p => p.category === 'fullstack').length },
        { id: 'web', name: 'Web Development', count: projects.filter(p => p.category === 'web').length }
    ];

    const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

    const toggleExpand = (id) => {
        setExpandedProject(expandedProject === id ? null : id);
    };

    return (
        <section id="projects" className="py-24 px-4 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            
            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        <Sparkles className="w-4 h-4" />
                        Portfolio Highlights
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Featured <span className="text-primary">Projects</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Showcasing innovative solutions built with cutting-edge technologies
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex justify-center gap-3 mb-12 flex-wrap">
                    {filters.map((f) => (
                        <button
                            key={f.id}
                            onClick={() => setFilter(f.id)}
                            className={`px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
                                filter === f.id
                                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/50'
                                    : 'bg-card/50 backdrop-blur-md hover:bg-card/80 border-2 border-border'
                            }`}
                        >
                            <span className="font-medium">{f.name}</span>
                            <span className={`ml-2 text-xs ${filter === f.id ? 'opacity-80' : 'text-muted-foreground'}`}>
                                ({f.count})
                            </span>
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="space-y-6">
                    {filteredProjects.map((project, index) => {
                        const Icon = project.icon;
                        const isHovered = hoveredProject === project.id;
                        const isExpanded = expandedProject === project.id;
                        
                        return (
                            <div
                                key={project.id}
                                className={`group relative bg-card/50 backdrop-blur-md rounded-2xl border-2 overflow-hidden transition-all duration-500 ${
                                    isHovered ? 'border-primary shadow-2xl shadow-primary/20 scale-[1.01]' : 'border-border hover:border-primary/50'
                                }`}
                                onMouseEnter={() => setHoveredProject(project.id)}
                                onMouseLeave={() => setHoveredProject(null)}
                                style={{
                                    animation: `fadeInUp 0.5s ease-out ${index * 0.15}s backwards`
                                }}
                            >
                                {/* Gradient overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 transition-opacity duration-500 ${
                                    isHovered ? 'opacity-100' : ''
                                }`} />
                                
                                <div className="relative z-10 p-6 md:p-8">
                                    {/* Project Header */}
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                        <div className="flex items-start gap-4 flex-1">
                                            <div className={`p-3 rounded-xl bg-primary/10 transition-all duration-500 ${
                                                isHovered ? 'rotate-6 scale-110' : ''
                                            }`}>
                                                <Icon className="w-7 h-7 text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2 flex-wrap">
                                                    <h3 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
                                                        isHovered ? 'text-primary' : ''
                                                    }`}>
                                                        {project.title}
                                                    </h3>
                                                    <span className={`px-3 py-1 text-xs font-semibold rounded-full border transition-all duration-300 ${
                                                        project.status === 'Live'
                                                            ? 'bg-green-500/20 text-green-400 border-green-500/30'
                                                            : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                                                    }`}>
                                                        ● {project.status}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{project.date}</span>
                                                </div>
                                                {project.badge && (
                                                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full border border-primary/30">
                                                        {project.badge}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        
                                        {/* Action Buttons */}
                                        <div className="flex gap-2">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                                                title="View on GitHub"
                                            >
                                                <Github className="w-5 h-5" />
                                            </a>
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                                                title="View Live Demo"
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                        {project.longDescription}
                                    </p>

                                    {/* Impact Metrics */}
                                    <div className="grid grid-cols-3 gap-4 mb-6">
                                        {Object.entries(project.impact).map(([key, value]) => (
                                            <div key={key} className="bg-card/80 rounded-lg p-3 text-center border border-border hover:border-primary/50 transition-all duration-300">
                                                <div className="text-lg md:text-xl font-bold text-primary mb-1">{value}</div>
                                                <div className="text-xs text-muted-foreground capitalize">{key}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Technologies */}
                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                                            <TrendingUp className="w-4 h-4" />
                                            Technologies Used
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-3 py-1.5 text-sm rounded-lg bg-card/80 border border-border hover:border-primary/50 transition-all duration-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Expandable Features Section */}
                                    <div>
                                        <button
                                            onClick={() => toggleExpand(project.id)}
                                            className="w-full flex items-center justify-between text-sm font-semibold text-primary mb-3 hover:text-primary/80 transition-colors"
                                        >
                                            <span className="flex items-center gap-2">
                                                <Sparkles className="w-4 h-4" />
                                                Key Features ({project.features.length})
                                            </span>
                                            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                                        </button>
                                        
                                        <div className={`overflow-hidden transition-all duration-500 ${
                                            isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                                                {project.features.map((feature, featureIndex) => (
                                                    <div
                                                        key={featureIndex}
                                                        className="flex items-start gap-3 text-sm text-muted-foreground bg-card/50 p-3 rounded-lg hover:bg-card/80 transition-colors duration-300"
                                                        style={{
                                                            animation: isExpanded ? `slideIn 0.3s ease-out ${featureIndex * 0.05}s backwards` : 'none'
                                                        }}
                                                    >
                                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                                        <span>{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* View More Button */}
                <div className="text-center mt-12">
                    <a
                        href="https://github.com/Ankita2629"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/50"
                    >
                        <Github className="w-5 h-5" />
                        View All Projects on GitHub
                    </a>
                </div>

                {/* Stats */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 text-center border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                        <div className="text-3xl font-bold text-primary mb-2">4+</div>
                        <div className="text-sm text-muted-foreground">Featured Projects</div>
                    </div>
                    <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 text-center border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                        <Award className="w-8 h-8 mx-auto text-primary mb-2" />
                        <div className="text-sm text-muted-foreground">Hackathon Winner</div>
                    </div>
                    <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 text-center border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                        <div className="text-3xl font-bold text-primary mb-2">27+</div>
                        <div className="text-sm text-muted-foreground">Languages Supported</div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateX(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </section>
    );
};
