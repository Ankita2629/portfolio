import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      id: 0,
      role: "Software Development Intern",
      company: "String AI India",
      type: "Internship",
      location: "Bengaluru (Remote/Hybrid)",
      duration: "Jan 2026 - Apr 2026",
      status: "Completed",
      description: "Contributed to full-stack systems, secure user authentication, and high-coverage test automation suites.",
      responsibilities: [
        "Worked on full-stack ABC Pharmacy project using React, C#, .NET, and FastAPI with SQL/PostgreSQL integration",
        "Developed and tested REST APIs (CRUD), implemented JWT authentication, and performed API testing using Swagger/Postman",
        "Wrote unit tests and automated UI/API testing using Playwright; improved debugging and application performance",
        "Worked on confidential software development projects ensuring code quality, security best practices, and scalable architecture"
      ],
      technologies: ["React.js", "C#", ".NET", "FastAPI", "SQL", "PostgreSQL", "Playwright", "Swagger", "Postman", "JWT"]
    }
  ];

  const activeData = experiences[0];

  return (
    <section id="experience" className="py-32 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-none text-xs font-bold tracking-widest uppercase border border-primary/30 mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            Professional History //
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
            Work <span className="text-primary text-glow">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Professional background and software engineering internships.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div className="max-w-4xl mx-auto">
          <div className="cyber-card rounded-none p-8 md:p-10 hover:border-primary/40 transition-all duration-300">
            {/* Header info row */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-white/5 text-left">
              <div className="flex items-start gap-4">
                <div className="p-3.5 bg-white/5 border border-primary/20 text-primary shrink-0 rounded-none">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-white">{activeData.role}</h3>
                    <span className="px-3 py-1 text-[9px] font-bold uppercase tracking-wider bg-green-500/10 text-green-400 border border-green-500/20">
                      {activeData.status}
                    </span>
                  </div>
                  <div className="text-base font-bold text-slate-300">
                    {activeData.company}
                  </div>
                </div>
              </div>

              {/* Sub-info block */}
              <div className="flex flex-wrap gap-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground md:text-right md:flex-col md:items-end">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{activeData.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-secondary" />
                  <span>{activeData.location}</span>
                </div>
                <div className="px-3 py-1 bg-white/5 text-slate-300 border border-white/10">
                  {activeData.type}
                </div>
              </div>
            </div>

            {/* General Description */}
            <p className="text-muted-foreground my-6 text-left leading-relaxed text-sm md:text-base">
              {activeData.description}
            </p>

            {/* Responsibilities list */}
            <div className="mb-8 text-left">
              <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Key Contributions //
              </h4>
              <div className="space-y-3">
                {activeData.responsibilities.map((resp, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{resp}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies list */}
            <div className="text-left">
              <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">Technologies Leveraged</h4>
              <div className="flex flex-wrap gap-1.5">
                {activeData.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/5 text-slate-200 rounded-none text-xs font-bold border border-white/10 hover:border-primary/45 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Metric Grid */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="cyber-card rounded-none p-5 text-center">
            <div className="text-2xl font-bold text-primary mb-1">01/2026</div>
            <div className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest">Timeline Start</div>
          </div>
          <div className="cyber-card rounded-none p-5 text-center">
            <div className="text-2xl font-bold text-primary mb-1">Hybrid</div>
            <div className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest">Work Mode</div>
          </div>
          <div className="cyber-card rounded-none p-5 text-center">
            <div className="text-2xl font-bold text-primary mb-1">C# & React</div>
            <div className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest">Primary Stack</div>
          </div>
          <div className="cyber-card rounded-none p-5 text-center">
            <div className="text-2xl font-bold text-primary mb-1">QA & Dev</div>
            <div className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest">Dual Core Focus</div>
          </div>
        </div>
      </div>
    </section>
  );
}