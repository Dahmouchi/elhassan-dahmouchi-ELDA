"use client";
import React from "react";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const posts = [
  {
    img: "assets/images/blog/blog1.jpg",
    category: "Full-Stack",
    date: "February 10, 2025",
    title: "Building Scalable SaaS Platforms with Next.js & Prisma",
    excerpt:
      "SaaS products live and die by their architecture. In this article, I walk through the exact stack I use — Next.js App Router, Prisma ORM, and PostgreSQL — to build multi-tenant platforms that scale from MVP to production without painful rewrites.",
    type: "image",
  },
  {
    img: "assets/images/blog/blog2.jpg",
    category: "AI & Dev",
    date: "January 22, 2025",
    title: "Integrating AI Features into Your Web App — A Practical Guide",
    excerpt:
      "From sentiment analysis to smart search and generative UI, AI is no longer a luxury — it's a competitive edge. I share practical patterns for wiring Hugging Face, OpenAI, and custom models into a real Next.js application, including edge cases I ran into the hard way.",
    type: "image",
  },
  {
    img: "assets/images/blog/blog3.jpg",
    category: "Mobile Dev",
    date: "December 05, 2024",
    title: "React Native in 2025: Lessons from Building Real-World Apps",
    excerpt:
      "After shipping multiple React Native projects — from a taxi-management app to an educational game for primary school students — I share what actually matters: state management, navigation patterns, performance pitfalls, and the Expo vs. bare workflow trade-offs.",
    type: "image",
  },
  {
    imgs: [
      "assets/images/blog/blog1.jpg",
      "assets/images/blog/blog2.jpg",
      "assets/images/blog/blog3.jpg",
    ],
    category: "Backend",
    date: "November 18, 2024",
    title: "Alert Reporting Systems: Architecture & Real-Time Data Pipelines",
    excerpt:
      "Building an alert monitoring platform meant designing for reliability first. In this post I break down the event-driven architecture, WebSocket integration, and database indexing strategies that keep incident dashboards responsive under load.",
    type: "slider",
  },
];

const recentPosts = [
  {
    img: "assets/images/blog/blog-sm-1.jpg",
    title: "SaaS School Management — From Schema to Dashboard",
    date: "February 02, 2025",
  },
  {
    img: "assets/images/blog/blog-sm-2.jpg",
    title: "Securing Next.js Apps: Auth, Sessions & RBAC",
    date: "January 14, 2025",
  },
  {
    img: "assets/images/blog/blog-sm-3.jpg",
    title: "E-Commerce on the JAMstack: My GFY International Story",
    date: "December 20, 2024",
  },
];

const categories = [
  { label: "Full-Stack Development", count: 12 },
  { label: "AI & Machine Learning", count: 8 },
  { label: "Mobile (React Native)", count: 9 },
  { label: "SaaS & Architecture", count: 15 },
  { label: "DevOps & Deployment", count: 6 },
];

const tags = [
  "Next.js",
  "React",
  "Prisma",
  "TypeScript",
  "AI",
  "SaaS",
  "React Native",
  "Node.js",
  "Tailwind",
];

const clockIcon = (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.5 3.59961V7.49961L10.1 8.79961"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function PostboxArea({ setIsVideoOpen }: any) {
  return (
    <>
      <section className="blog-page-area">
        <div className="container">
          <div className="row">
            {/* ── Main posts column ── */}
            <div className="col-xxl-8 col-lg-8">
              <div className="postbox__wrapper">
                {posts.map((post, i) =>
                  post.type === "slider" ? (
                    <article
                      key={i}
                      className="postbox__item format-image mb-50 transition-3"
                    >
                      <Swiper
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        navigation={{
                          nextEl: ".postbox-slider-button-next",
                          prevEl: ".postbox-slider-button-prev",
                        }}
                        modules={[Navigation, Autoplay]}
                        className="postbox__thumb postbox__slider swiper-container w-img p-relative"
                      >
                        {post.imgs!.map((img, j) => (
                          <SwiperSlide
                            key={j}
                            className="postbox__slider-item swiper-slide"
                          >
                            <img src={img} alt="" />
                          </SwiperSlide>
                        ))}
                        <div className="postbox__nav">
                          <button className="postbox-slider-button-next">
                            <i className="fa-regular fa-angle-right"></i>
                          </button>
                          <button className="postbox-slider-button-prev">
                            <i className="fa-regular fa-angle-left"></i>
                          </button>
                        </div>
                      </Swiper>
                      <div className="postbox__content">
                        <div className="postbox__meta">
                          <span>
                            <a href="">
                              <i className="fa-light fa-user"></i>Elhassan
                              Dahmouchi
                            </a>
                          </span>
                          <span>
                            <a href="">
                              <i className="fa-light fa-clock"></i>
                              {post.date}
                            </a>
                          </span>
                          <span>
                            <a href="">
                              <i className="ri-price-tag-3-line"></i>
                              {post.category}
                            </a>
                          </span>
                        </div>
                        <h3 className="postbox__title">
                          <Link href="/blog-details">{post.title}</Link>
                        </h3>
                        <div className="postbox__text">
                          <p>{post.excerpt}</p>
                        </div>
                        <div className="postbox__read-more">
                          <Link href="/blog-details" className="theme-btn">
                            Read more
                          </Link>
                        </div>
                      </div>
                    </article>
                  ) : (
                    <article
                      key={i}
                      className="postbox__item format-image mb-50 transition-3"
                    >
                      <div className="postbox__thumb w-img">
                        <Link href="/blog-details">
                          <img src={post.img} alt={post.title} />
                        </Link>
                      </div>
                      <div className="postbox__content">
                        <div className="postbox__meta">
                          <span>
                            <a href="">
                              <i className="fa-light fa-user"></i>Elhassan
                              Dahmouchi
                            </a>
                          </span>
                          <span>
                            <a href="">
                              <i className="fa-light fa-clock"></i>
                              {post.date}
                            </a>
                          </span>
                          <span>
                            <a href="">
                              <i className="ri-price-tag-3-line"></i>
                              {post.category}
                            </a>
                          </span>
                        </div>
                        <h3 className="postbox__title">
                          <Link href="/blog-details">{post.title}</Link>
                        </h3>
                        <div className="postbox__text">
                          <p>{post.excerpt}</p>
                        </div>
                        <div className="postbox__read-more">
                          <Link href="/blog-details" className="theme-btn">
                            Read more
                          </Link>
                        </div>
                      </div>
                    </article>
                  ),
                )}

                {/* Pagination */}
                <div className="tp-pagination mt-20">
                  <nav>
                    <ul>
                      <li>
                        <Link
                          href="/blog"
                          className="tp-pagination-prev prev page-numbers"
                        >
                          <svg
                            width="16"
                            height="11"
                            viewBox="0 0 16 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.17749 10.105L1.62499 5.55248L6.17749 0.999981"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M14.3767 5.55249L1.75421 5.55249"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>{" "}
                          Prev
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog">1</Link>
                      </li>
                      <li>
                        <span className="current">2</span>
                      </li>
                      <li>
                        <Link href="/blog">3</Link>
                      </li>
                      <li>
                        <Link href="/blog" className="next page-numbers">
                          Next{" "}
                          <svg
                            width="16"
                            height="11"
                            viewBox="0 0 16 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.82422 1L14.3767 5.5525L9.82422 10.105"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M1.625 5.55249H14.2475"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            {/* ── Sidebar ── */}
            <div className="col-xxl-4 col-lg-4">
              <div className="blog_sidebar__wrapper pl-40">
                {/* Search */}
                <div className="sidebar__widget mb-20">
                  <div className="sidebar__widget-content">
                    <div className="sidebar__search">
                      <form action="#">
                        <div className="sidebar__search-input">
                          <input type="text" placeholder="Search articles..." />
                          <button type="submit">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M19.0002 19.0002L17.2002 17.2002"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                {/* Author */}
                <div className="sidebar__widget mb-45">
                  <div className="sidebar__widget-content">
                    <div className="sidebar__author">
                      <div className="sidebar__author-thumb">
                        <img
                          src="assets/images/blog/author.jpg"
                          alt="Elhassan Dahmouchi"
                        />
                      </div>
                      <div className="sidebar__author-content">
                        <h3 className="sidebar__author-title">
                          Elhassan Dahmouchi
                        </h3>
                        <p>
                          Full-Stack Developer & AI Enthusiast based in Rabat,
                          Morocco. Writing about web dev, SaaS, and emerging
                          tech.
                        </p>
                        <div className="sidebar__author-social d-flex align-items-center justify-content-center">
                          <a
                            href="https://github.com/Dahmouchi"
                            target="_blank"
                          >
                            <i className="fa-brands fa-github"></i>
                          </a>
                          <a
                            href="https://www.linkedin.com/in/elhassan-dahmouchi-a55b10391/"
                            target="_blank"
                          >
                            <i className="fa-brands fa-linkedin-in"></i>
                          </a>
                          <a
                            href="https://www.instagram.com/elhassandahmouchi001/"
                            target="_blank"
                          >
                            <i className="fa-brands fa-instagram"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Posts */}
                <div className="sidebar__widget mb-45">
                  <h3 className="sidebar__widget-title">Recent Posts</h3>
                  <div className="sidebar__widget-content">
                    <div className="sidebar__post">
                      {recentPosts.map((rp, i) => (
                        <div
                          key={i}
                          className="rc__post d-flex align-items-center"
                        >
                          <div className="rc__post-thumb">
                            <Link href="/blog-details">
                              <img src={rp.img} alt={rp.title} />
                            </Link>
                          </div>
                          <div className="rc__post-content">
                            <h3 className="rc__post-title">
                              <Link href="/blog-details">{rp.title}</Link>
                            </h3>
                            <div className="rc__meta">
                              <span>
                                {clockIcon}
                                {rp.date}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Categories */}
                <div className="sidebar__widget mb-45">
                  <h3 className="sidebar__widget-title">Categories</h3>
                  <div className="sidebar__widget-content">
                    <ul>
                      {categories.map((cat, i) => (
                        <li key={i}>
                          <Link href="/blog">
                            {cat.label} <span>{cat.count}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tags */}
                <div className="sidebar__widget mb-40">
                  <h3 className="sidebar__widget-title">Tags</h3>
                  <div className="sidebar__widget-content">
                    <div className="tagcloud">
                      {tags.map((tag, i) => (
                        <a key={i} href="#">
                          {tag}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
