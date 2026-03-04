import React from "react";

const experiences = [
  {
    company: "BuildalittleBiz",
    timeframe: "2024 – Present",
    role: "Full-Stack Developer (Internship & Freelance)",
    icon: "ri-building-line",
    achievements: [
      <>
        Worked on an <strong>Alert Reporting and Analysis System</strong> to
        help organizations monitor, report, and analyze incidents effectively.
      </>,
      <>
        Contributed to a <strong>School Management System</strong> handling
        students, classes, content, absences, grades, and payment management.
      </>,
    ],
  },
  {
    company: "Freelance Projects",
    timeframe: "2022 – Present",
    role: "Freelance Web & Mobile Developer",
    icon: "ri-global-line",
    achievements: [
      <>
        Built <strong>GFY International</strong> — an e-commerce platform for
        car and automobile accessories.
      </>,
      <>
        Developed multiple responsive landing pages and websites using{" "}
        <strong>Next.js</strong>, <strong>TailwindCSS</strong>, and modern UI/UX
        practices.
      </>,
    ],
  },
  {
    company: "Bachelor Internship Project",
    timeframe: "2022",
    role: "Mobile Developer",
    icon: "ri-smartphone-line",
    achievements: [
      <>
        Developed a <strong>React Native mobile game</strong> for primary school
        students to enhance learning and engagement.
      </>,
    ],
  },
  {
    company: "Final Year Project – CoursaMaroc",
    timeframe: "2021",
    role: "Mobile App Developer",
    icon: "ri-car-line",
    achievements: [
      <>
        Created <strong>CoursaMaroc</strong>, a mobile application for taxi
        management focusing on booking, tracking, and trip management.
      </>,
    ],
  },
];

const education = [
  {
    name: "University Mohamed V, Rabat",
    degree: "Master's Degree",
    field: "Software Development & Business Intelligence Engineering",
    icon: "ri-graduation-cap-line",
    timeframe: "2023 – Present",
  },
  {
    name: "Higher School of Technology, Salé",
    degree: "Bachelor's Degree",
    field: "Mobile Application Engineering (Honors)",
    icon: "ri-award-line",
    timeframe: "2020 – 2023",
  },
  {
    name: "Higher School of Technology, Beni Mellal",
    degree: "DUT",
    field: "Computer Engineering (Honors)",
    icon: "ri-computer-line",
    timeframe: "2018 – 2020",
  },
  {
    name: "High School Diploma",
    degree: "Baccalaureate",
    field: "Physical Sciences & Chemistry",
    icon: "ri-book-open-line",
    timeframe: "2018",
  },
];

export default function ResumeArea() {
  return (
    <>
      <div className="resume-area" id="resume">
        <div className="container">
          {/* ── Work Experience ── */}
          <div className="row mb-60">
            <div className="col-xl-12">
              <div
                className="section-title section-black-title wow fadeInUp delay-0-2s"
                style={{ marginBottom: "40px" }}
              >
                <h2>Work Experience</h2>
              </div>
            </div>
          </div>
          <div className="row mb-60">
            <div className="col-xl-6 col-md-6">
              <div className="about-timeline wow fadeInUp delay-0-2s">
                {experiences.slice(0, 2).map((exp, i) => (
                  <div key={i} className="timeline-item">
                    <div className="timeline-header">
                      <span className="timeline-icon">
                        <i className={exp.icon}></i>
                      </span>
                      <div className="timeline-meta">
                        <h4 className="timeline-company">{exp.company}</h4>
                        <span className="timeline-badge">{exp.timeframe}</span>
                      </div>
                    </div>
                    <p className="timeline-role">{exp.role}</p>
                    <ul className="timeline-achievements">
                      {exp.achievements.map((ach, j) => (
                        <li key={j}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xl-6 col-md-6">
              <div className="about-timeline wow fadeInUp delay-0-4s">
                {experiences.slice(2).map((exp, i) => (
                  <div key={i} className="timeline-item">
                    <div className="timeline-header">
                      <span className="timeline-icon">
                        <i className={exp.icon}></i>
                      </span>
                      <div className="timeline-meta">
                        <h4 className="timeline-company">{exp.company}</h4>
                        <span className="timeline-badge">{exp.timeframe}</span>
                      </div>
                    </div>
                    <p className="timeline-role">{exp.role}</p>
                    <ul className="timeline-achievements">
                      {exp.achievements.map((ach, j) => (
                        <li key={j}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Education ── */}
          <div className="row mb-60">
            <div className="col-xl-12">
              <div
                className="section-title section-black-title wow fadeInUp delay-0-2s"
                style={{ marginBottom: "40px" }}
              >
                <h2>Education</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {education.map((edu, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <div className={`edu-card wow fadeInUp delay-0-${i + 2}s`}>
                  <span className="edu-icon">
                    <i className={edu.icon}></i>
                  </span>
                  <span className="edu-timeframe">
                    {"  "}
                    {edu.timeframe}
                  </span>
                  <h5 className="edu-degree">{edu.degree}</h5>
                  <h4 className="edu-field">{edu.field}</h4>
                  <p className="edu-name">{edu.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
