"use client";
import React, { useState } from "react";
import img_1 from "@/assets/images/projects/work1.jpg";
import img_2 from "@/assets/images/projects/work2.jpg";
import img_3 from "@/assets/images/projects/work3.jpg";
import img_4 from "@/assets/images/projects/work4.jpg";
import Image from "next/image";
import ImagePopup from "@/modals/ImagePopup";

const gallery_images = [
  { id: 1, image: img_1 },
  { id: 2, image: img_2 },
  { id: 3, image: img_3 },
  { id: 4, image: img_4 },
];

const project_info = [
  { label: "Year", value: "2024 – Present" },
  { label: "Client", value: "BuildalittleBiz" },
  { label: "Role", value: "Full-Stack Developer" },
  { label: "Type", value: "SaaS / Web App" },
];

const tech_stack = [
  { icon: "ri-reactjs-line", name: "Next.js" },
  { icon: "ri-database-2-line", name: "Prisma & PostgreSQL" },
  { icon: "ri-shield-check-line", name: "NextAuth.js" },
  { icon: "ri-notification-3-line", name: "Real-Time Alerts" },
  { icon: "ri-paint-brush-line", name: "TailwindCSS" },
  { icon: "ri-cloud-line", name: "Vercel" },
];

const key_features = [
  {
    icon: "ri-alarm-warning-line",
    title: "Incident Reporting",
    desc: "Multi-step form system for logging and categorizing alerts with severity levels, departments, and timestamps.",
  },
  {
    icon: "ri-bar-chart-2-line",
    title: "Analytics Dashboard",
    desc: "Visual summaries of incident trends, resolution rates, and team performance using dynamic charts.",
  },
  {
    icon: "ri-team-line",
    title: "Role-Based Access",
    desc: "Granular RBAC with admin, manager, and reporter roles — each with tailored UI and permissions.",
  },
  {
    icon: "ri-mail-send-line",
    title: "Email Notifications",
    desc: "Automated alerts via Nodemailer/Brevo when incidents are created, escalated, or resolved.",
  },
];

export default function SingleProjectArea() {
  const [photoIndex, setPhotoIndex] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleImagePopup = (i: number) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };

  const images = gallery_images.map((item) => item.image.src);

  return (
    <>
      <div className="single-project-page-design">
        {/* ── Hero banner ── */}
        <div className="single-project-image">
          <img
            src="assets/images/projects/work5.jpg"
            alt="Alert Reporting System"
          />
        </div>

        <div className="container pt-60 pb-40">
          {/* ── Info + Description ── */}
          <div className="row">
            <div className="col-lg-4">
              <div className="single-project-page-left wow fadeInUp delay-0-2s">
                {project_info.map((item, i) => (
                  <div key={i} className="single-info">
                    <p>{item.label}</p>
                    <h3>{item.value}</h3>
                  </div>
                ))}

                {/* Live link */}
                <div className="single-info" style={{ marginTop: "30px" }}>
                  <a
                    href="https://github.com/Dahmouchi"
                    target="_blank"
                    className="theme-btn"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <i className="ri-github-line"></i> View on GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="single-project-page-right wow fadeInUp delay-0-4s">
                <h2>Alert Reporting &amp; Analysis System</h2>
                <p>
                  During my internship and freelance engagement at{" "}
                  <strong>BuildalittleBiz</strong>, I led the development of a
                  full-featured{" "}
                  <strong>Alert Reporting and Analysis System</strong> — a SaaS
                  web platform designed to help organizations monitor, report,
                  and resolve operational incidents efficiently.
                </p>
                <p>
                  The platform supports the full lifecycle of an alert: from
                  initial submission by a reporter, through manager review and
                  escalation, to resolution tracking and post-incident
                  analytics. Every step is tracked, timestamped, and made
                  auditable — giving teams the visibility they need to improve
                  their response times over time.
                </p>
                <p>
                  One of the core challenges was designing a{" "}
                  <strong>flexible role system</strong> that could accommodate
                  different organizational structures without requiring code
                  changes. I solved this with a Prisma-based RBAC layer that
                  scopes every query to the user's organization and role,
                  ensuring data isolation even across shared infrastructure.
                </p>

                {/* Tech stack */}
                <div
                  className="project-tech-stack"
                  style={{ marginTop: "40px" }}
                >
                  <h4
                    style={{
                      marginBottom: "16px",
                      fontSize: "16px",
                      fontWeight: 600,
                    }}
                  >
                    Tech Stack
                  </h4>
                  <div className="row g-3">
                    {tech_stack.map((tech, i) => (
                      <div key={i} className="col-6 col-md-4">
                        <div
                          className="project-tech-item"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            padding: "10px 14px",
                            border: "1px solid rgba(255,255,255,0.1)",
                            borderRadius: "8px",
                            fontSize: "13px",
                            fontWeight: 500,
                          }}
                        >
                          <i
                            className={tech.icon}
                            style={{ fontSize: "18px", opacity: 0.8 }}
                          ></i>
                          {tech.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Key Features ── */}
          <div className="row mt-80">
            <div className="col-xl-12">
              <div
                className="section-title section-black-title wow fadeInUp delay-0-2s"
                style={{ marginBottom: "40px" }}
              >
                <h2>Key Features</h2>
              </div>
            </div>
            {key_features.map((feat, i) => (
              <div key={i} className="col-md-6 col-lg-3 mb-30">
                <div
                  className="wow fadeInUp"
                  data-wow-delay={`${(i + 2) * 0.1}s`}
                  style={{
                    padding: "28px 24px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "12px",
                    height: "100%",
                  }}
                >
                  <i
                    className={feat.icon}
                    style={{
                      fontSize: "32px",
                      marginBottom: "14px",
                      display: "block",
                      opacity: 0.85,
                    }}
                  ></i>
                  <h5
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      marginBottom: "10px",
                    }}
                  >
                    {feat.title}
                  </h5>
                  <p
                    style={{ fontSize: "13px", opacity: 0.7, lineHeight: 1.65 }}
                  >
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ── Gallery ── */}
          <div className="row mt-60">
            <div className="col-xl-12">
              <div
                className="section-title section-black-title wow fadeInUp delay-0-2s"
                style={{ marginBottom: "40px" }}
              >
                <h2>Project Gallery</h2>
              </div>
            </div>
            {gallery_images.map((item, i) => (
              <div key={i} className="col-lg-6 mb-30">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => handleImagePopup(i)}
                  className="work-popup"
                >
                  <div className="single-image wow fadeInUp delay-0-2s">
                    <Image
                      src={item.image}
                      style={{ height: "auto" }}
                      alt={`Project screenshot ${i + 1}`}
                    />
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* ── Navigation between projects ── */}
          <div className="row mt-60">
            <div className="col-12">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                  paddingTop: "40px",
                }}
              >
                <a
                  href="/projects"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "14px",
                    fontWeight: 500,
                    opacity: 0.7,
                  }}
                >
                  <i className="ri-arrow-left-line"></i> Back to All Projects
                </a>
                <a href="/contact" className="theme-btn">
                  Start a Project <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* image lightbox */}
      {isOpen && (
        <ImagePopup
          images={images}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
    </>
  );
}
