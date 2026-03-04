import React from "react";

const services = [
  {
    id: "01",
    title: "AI & Machine Learning Solutions",
    description:
      "Building intelligent systems powered by machine learning models, natural language processing, and deep learning — transforming raw data into actionable insights and smart automation.",
    delay: "delay-0-2s",
    col: "col-lg-8 col-md-7",
    icon: "ri-brain-line",
  },
  {
    id: "02",
    title: "Full-Stack Web Development",
    description:
      "Crafting robust, scalable web applications from backend APIs to polished frontends using modern stacks like Next.js, Node.js, and TypeScript.",
    delay: "delay-0-4s",
    col: "col-lg-4 col-md-5",
    icon: "ri-code-s-slash-line",
  },
  {
    id: "03",
    title: "UI/UX & Product Design",
    description:
      "Designing intuitive, visually stunning interfaces that blend user research with aesthetic precision — from wireframes to production‑ready design systems.",
    delay: "delay-0-6s",
    col: "col-lg-4 col-md-5",
    icon: "ri-layout-4-line",
  },
  {
    id: "04",
    title: "SaaS Platform Architecture",
    description:
      "Architecting end-to-end SaaS products with multi-tenant structures, subscription workflows, authentication layers, and cloud-native deployment pipelines.",
    delay: "delay-0-8s",
    col: "col-lg-8 col-md-7",
    icon: "ri-cloud-line",
  },
  {
    id: "05",
    title: "Data Analysis & Visualization",
    description:
      "Transforming complex datasets into clear, impactful dashboards and reports — leveraging Python, SQL, and modern BI tools to support data-driven decisions.",
    delay: "delay-0-2s",
    col: "col-lg-6 col-md-6",
    icon: "ri-bar-chart-box-line",
  },
  {
    id: "06",
    title: "AI-Assisted Design Systems",
    description:
      "Merging AI tooling with design methodology to build scalable component libraries, automated design workflows, and generative UI prototypes for modern products.",
    delay: "delay-0-4s",
    col: "col-lg-6 col-md-6",
    icon: "ri-magic-line",
  },
];

export default function ServiceArea() {
  return (
    <>
      <section id="services" className="services-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title section-black-title wow fadeInUp delay-0-2s">
                <h2>Services</h2>
              </div>
            </div>
          </div>

          <div className="row">
            {services.map((service) => (
              <div key={service.id} className={service.col}>
                <div className={`service-item wow fadeInUp ${service.delay}`}>
                  <i className={`ri-arrow-right-up-line`}></i>
                  <h5>{service.id}</h5>
                  <div
                    className="service-icon-wrap"
                    style={{ marginBottom: "12px" }}
                  >
                    <i
                      className={service.icon}
                      style={{
                        position: "static",
                        fontSize: "36px",
                        color: "var(--main-color)",
                        opacity: 0.75,
                      }}
                    ></i>
                  </div>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
