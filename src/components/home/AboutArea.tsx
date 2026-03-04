import React from "react";
import Count from "../common/Count";

const counter_data = [
  {
    id: 1,
    title: "Years Of Experience",
    count: 5,
    cls: "plus",
  },
  {
    id: 2,
    title: "Completed Projects",
    count: 50,
    cls: "plus",
  },
  {
    id: 3,
    title: "Client Satisfactions",
    count: 97,
    cls: "percent",
  },
];

export default function AboutArea() {
  return (
    <>
      <section id="about" className="about-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-3">
              <h2 className="about-pre-titlev">About Me</h2>
            </div>
            <div className="col-lg-9 col-sm-9">
              <div className="about-content-part wow fadeInUp delay-0-2s">
                <p>
                  I am Elhassan Dahmouchi, a Morocco-based web developer
                  passionate about creating smart solutions for real-world
                  problems. My work focuses on building alert reporting and
                  analysis systems, combining technology and innovation to
                  improve incident management and response.
                </p>
              </div>
              <div className="hero-counter-area d-flex justify-content-between wow fadeInUp delay-0-4s">
                {counter_data.map((item, i) => (
                  <div
                    key={i}
                    className="counter-item counter-text-wrap text-accent"
                  >
                    <span className={`count-text  ${item.cls}`}>
                      <Count number={item.count} />
                    </span>
                    <span className="counter-title">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
