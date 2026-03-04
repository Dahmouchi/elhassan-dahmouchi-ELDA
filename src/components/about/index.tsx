import React from "react";
import SkillArea from "./SkillArea";
import ResumeArea from "./ResumeArea";
import Breadcrumb from "../common/Breadcrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Count from "../common/Count";

const counter_data = [
  { id: 1, title: "Years Of Experience", count: 5, cls: "plus" },
  { id: 2, title: "Completed Projects", count: 50, cls: "plus" },
  { id: 3, title: "Client Satisfactions", count: 97, cls: "percent" },
];

export default function About() {
  return (
    <>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="About Me" />

            {/* ── Intro ── */}
            <section className="about-intro-area">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-8 wow fadeInUp delay-0-2s">
                    <p className="about-intro-text">
                      I am <strong>Elhassan Dahmouchi</strong>, a Morocco-based
                      full-stack web developer and AI enthusiast passionate
                      about creating smart solutions for real-world problems. My
                      work focuses on building alert reporting and analysis
                      systems, SaaS platforms, and mobile applications —
                      combining technology and innovation to drive meaningful
                      impact.
                    </p>
                    <div className="about-intro-tags">
                      <span>🇲🇦 Rabat, Morocco</span>
                      <span>Available for freelance</span>
                      <span>Master's in Software Engineering</span>
                    </div>
                  </div>
                  <div className="col-lg-4 wow fadeInUp delay-0-4s">
                    <div className="about-intro-stats">
                      {counter_data.map((item, i) => (
                        <div key={i} className="about-stat-item">
                          <span
                            className={`count-text text-accent ${item.cls}`}
                          >
                            <Count number={item.count} />
                          </span>
                          <span className="about-stat-label">{item.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <ResumeArea />
            <SkillArea />
          </main>
          <FooterOne />
        </div>
      </div>
    </>
  );
}
