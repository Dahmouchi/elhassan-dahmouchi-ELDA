"use client";
import React, { useState } from "react";
import { sendContactEmail } from "@/action/contact";

export default function ContactArea() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    const result = await sendContactEmail({ name, email, subject, message });

    setLoading(false);
    if (result.success) {
      setStatus("success");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } else {
      setStatus("error");
    }
  };

  return (
    <>
      <section id="contact" className="contact-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title section-black-title wow fadeInUp delay-0-2s">
                <h2>Contact Me</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="contact-content-part  wow fadeInUp delay-0-2s">
                <div
                  className="single-contact wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <span className="circle-btn">
                    <i className="ri-map-pin-line"></i>
                  </span>
                  <h2>our office:</h2>
                  <p>Rabat, Morocco</p>
                </div>

                <div
                  className="single-contact wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <span className="circle-btn">
                    <i className="ri-headphone-line"></i>
                  </span>
                  <h2>contact number:</h2>
                  <p>+212 714 603 892</p>
                </div>

                <div
                  className="single-contact wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <span className="circle-btn">
                    <i className="ri-mail-line"></i>
                  </span>
                  <h2>Email us:</h2>
                  <p>elhassan.dahmouchi.pro@gmail.com</p>
                </div>

                <div
                  className="single-contact wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <h2>Socials</h2>
                  <div className="about-social">
                    <ul>
                      <li>
                        <a
                          target="_blank"
                          href="https://www.instagram.com/elhassandahmouchi001/"
                        >
                          <i className="ri-instagram-line"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          href="https://www.linkedin.com/in/elhassan-dahmouchi-a55b10391/"
                        >
                          <i className="ri-linkedin-fill"></i>
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="https://github.com/Dahmouchi">
                          <i className="ri-github-line"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="contact-form contact-form-area wow fadeInUp delay-0-4s">
                <form
                  id="contactForm"
                  className="contact-form"
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Steve Milner"
                          required
                          data-error="Please enter your Name"
                        />
                        <label htmlFor="name" className="for-icon">
                          <i className="far fa-user"></i>
                        </label>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="hello@websitename.com"
                          required
                          data-error="Please enter your Email"
                        />
                        <label htmlFor="email" className="for-icon">
                          <i className="far fa-envelope"></i>
                        </label>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          className="form-control"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          placeholder="Your Subject"
                          required
                          data-error="Please enter your Subject"
                        />
                        <label htmlFor="subject" className="for-icon">
                          <i className="far fa-user"></i>
                        </label>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={4}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Write Your message"
                          required
                          data-error="Please Write your Message"
                        ></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-0">
                        <button
                          type="submit"
                          className="theme-btn"
                          disabled={loading}
                          style={{
                            opacity: loading ? 0.7 : 1,
                            cursor: loading ? "not-allowed" : "pointer",
                          }}
                        >
                          {loading ? (
                            <>
                              Sending&nbsp;
                              <i
                                className="ri-loader-4-line"
                                style={{
                                  display: "inline-block",
                                  animation: "spin 1s linear infinite",
                                }}
                              ></i>
                            </>
                          ) : (
                            <>
                              Send Me Message <i className="ri-mail-line"></i>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="col-md-12 text-center">
                      {status === "success" && (
                        <p className="input-success">
                          ✅ Your message has been sent! I'll get back to you
                          soon.
                        </p>
                      )}
                      {status === "error" && (
                        <p className="input-error">
                          ❌ Sorry, the message could not be sent. Please try
                          again.
                        </p>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
