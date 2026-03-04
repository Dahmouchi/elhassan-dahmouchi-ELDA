import React from "react";

const skillGroups = [
  {
    category: "Frontend",
    icon: "ri-layout-4-line",
    skills: [
      { name: "Next.js", level: 90 },
      { name: "React / React Native", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "TailwindCSS", level: 88 },
    ],
  },
  {
    category: "Backend & Database",
    icon: "ri-server-line",
    skills: [
      { name: "Node.js & Express", level: 85 },
      { name: "PostgreSQL & Prisma", level: 82 },
      { name: "REST APIs", level: 90 },
      { name: "Docker & DevOps", level: 65 },
    ],
  },
  {
    category: "AI & Data",
    icon: "ri-brain-line",
    skills: [
      { name: "Python", level: 75 },
      { name: "Machine Learning", level: 65 },
      { name: "Data Analysis", level: 70 },
      { name: "NLP Basics", level: 60 },
    ],
  },
  {
    category: "Design & Tools",
    icon: "ri-pencil-ruler-2-line",
    skills: [
      { name: "Figma", level: 85 },
      { name: "UI/UX Design", level: 80 },
      { name: "Git & GitHub", level: 90 },
      { name: "Agile / Scrum", level: 80 },
    ],
  },
];

const techStack = [
  { name: "Next.js", icon: "ri-code-s-slash-line" },
  { name: "React", icon: "ri-reactjs-line" },
  { name: "Node.js", icon: "ri-server-line" },
  { name: "TypeScript", icon: "ri-file-code-line" },
  { name: "Python", icon: "ri-brain-line" },
  { name: "PostgreSQL", icon: "ri-database-2-line" },
  { name: "Figma", icon: "ri-pencil-ruler-2-line" },
  { name: "Docker", icon: "ri-cloud-line" },
  { name: "TailwindCSS", icon: "ri-layout-4-line" },
  { name: "React Native", icon: "ri-smartphone-line" },
  { name: "Prisma", icon: "ri-database-line" },
  { name: "Git & GitHub", icon: "ri-git-branch-line" },
];

export default function SkillArea() {
  return (
    <>
      <section id="skills" className="skill-area">
        <div className="container">
          {/* Section Title */}
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title section-black-title mb-40 wow fadeInUp delay-0-2s">
                <h2>Technical Skills</h2>
              </div>
            </div>
          </div>

          {/* Skill Groups with Progress Bars */}
          <div className="row mb-60">
            {skillGroups.map((group, gi) => (
              <div key={gi} className="col-lg-6 col-md-6">
                <div
                  className={`skill-group-card wow fadeInUp delay-0-${gi + 2}s`}
                >
                  <div className="skill-group-header">
                    <span className="skill-group-icon">
                      <i className={group.icon}></i>
                    </span>
                    <h4 className="skill-group-title">{group.category}</h4>
                  </div>
                  <div className="skill-bars">
                    {group.skills.map((skill, si) => (
                      <div key={si} className="skill-bar-item">
                        <div className="skill-bar-label">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="skill-bar-track">
                          <div
                            className="skill-bar-fill"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title section-black-title mb-40 wow fadeInUp delay-0-2s">
                <h2>Tech Stack</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {techStack.map((tech, i) => (
              <div key={i} className="col-lg-2 col-md-3 col-4">
                <div
                  className={`tech-pill wow fadeInUp delay-0-${(i % 6) + 2}s`}
                >
                  <span className="tech-pill-icon">
                    <i className={tech.icon}></i>
                  </span>
                  <span className="tech-pill-name">{tech.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
