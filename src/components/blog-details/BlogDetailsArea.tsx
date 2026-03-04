import Link from "next/link";
import React from "react";

const recentPosts = [
  {
    img: "assets/images/projects/work3.jpg",
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

const quoteIcon = (
  <svg
    width="34"
    height="28"
    viewBox="0 0 34 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25.6645 0C27.2731 0 28.5892 0.329033 29.6129 0.987098C30.6366 1.64516 31.4774 2.48602 32.1355 3.50968C32.9398 4.67957 33.4516 5.95915 33.671 7.34839C33.8903 8.73764 34 9.87097 34 10.7484C34 14.3312 33.086 17.585 31.2581 20.5097C29.4301 23.4344 26.5785 25.8108 22.7032 27.6387L21.7161 25.6645C23.9828 24.714 25.9204 23.2151 27.529 21.1677C29.2108 19.1204 30.0516 17.0366 30.0516 14.9161C30.0516 14.0387 29.9419 13.271 29.7226 12.6129C28.5527 13.5634 27.2 14.0387 25.6645 14.0387C23.7634 14.0387 22.1183 13.4172 20.729 12.1742C19.3398 10.9312 18.6452 9.21291 18.6452 7.01936C18.6452 4.97205 19.3398 3.29033 20.729 1.9742C22.1183 0.658065 23.7634 0 25.6645 0ZM7.01936 0C8.62796 0 9.94409 0.329033 10.9677 0.987098C11.9914 1.64516 12.8323 2.48602 13.4903 3.50968C14.2946 4.67957 14.8065 5.95915 15.0258 7.34839C15.2452 8.73764 15.3548 9.87097 15.3548 10.7484C15.3548 14.3312 14.4409 17.585 12.6129 20.5097C10.7849 23.4344 7.93333 25.8108 4.05806 27.6387L3.07097 25.6645C5.33763 24.714 7.27527 23.2151 8.88387 21.1677C10.5656 19.1204 11.4065 17.0366 11.4065 14.9161C11.4065 14.0387 11.2968 13.271 11.0774 12.6129C9.90753 13.5634 8.55484 14.0387 7.01936 14.0387C5.11828 14.0387 3.47312 13.4172 2.08387 12.1742C0.694624 10.9312 0 9.21291 0 7.01936C0 4.97205 0.694624 3.29033 2.08387 1.9742C3.47312 0.658065 5.11828 0 7.01936 0Z"
      fill="currentColor"
    />
  </svg>
);

export default function BlogDetailsArea() {
  return (
    <>
      <section className="postbox__area grey-bg-4 pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="postbox__wrappers">
                <div className="postbox__mains">
                  <div className="row">
                    {/* ── Article body ── */}
                    <div className="col-lg-8">
                      <div className="postbox__main-wrapper">
                        {/* Hero image */}
                        <div className="postbox__thumb w-img mb-30">
                          <img
                            src="assets/images/blog/blog1.jpg"
                            alt="Building Scalable SaaS Platforms"
                          />
                        </div>

                        {/* Meta */}
                        <div className="postbox__meta">
                          <span>
                            <a href="">
                              <i className="fa-light fa-user"></i>Elhassan
                              Dahmouchi
                            </a>
                          </span>
                          <span>
                            <a href="">
                              <i className="fa-light fa-clock"></i>February 10,
                              2025
                            </a>
                          </span>
                          <span>
                            <a href="">
                              <i className="ri-price-tag-3-line"></i>Full-Stack
                            </a>
                          </span>
                        </div>

                        {/* Content */}
                        <div className="postbox__details-content-wrapper">
                          <h3 className="postbox__details-title">
                            Building Scalable SaaS Platforms with Next.js &amp;
                            Prisma
                          </h3>

                          <p>
                            After shipping several SaaS products — from a school
                            management system to an alert reporting platform — I
                            kept running into the same architectural mistakes
                            early on. The stack wasn't the problem; it was the{" "}
                            <strong>decisions made in the first week</strong>{" "}
                            that came back to haunt me later. This post is a
                            breakdown of the patterns that now form the backbone
                            of every SaaS I build.
                          </p>

                          <p>
                            The foundation is straightforward:{" "}
                            <strong>Next.js App Router</strong> for the frontend
                            and API layer, <strong>Prisma</strong> as the ORM,
                            and <strong>PostgreSQL</strong> as the database. But
                            the real value is in how you structure the data
                            model from day one — especially if you plan to
                            support multiple tenants or organizations.
                          </p>

                          {/* Inline image */}
                          <div className="postbox__img m-img mt-50 mb-45">
                            <img
                              src="assets/images/blog/blog2.jpg"
                              alt="Next.js SaaS Architecture"
                            />
                            <h5 className="postbox__img-caption">
                              A typical multi-tenant SaaS data flow —
                              organization → users → resources
                            </h5>
                          </div>

                          <p>
                            One of the biggest wins I discovered was defining a
                            clean <code>Organization</code> model at the Prisma
                            schema level and scoping{" "}
                            <strong>every single query</strong> to an
                            organization ID. Sounds obvious, but it's easy to
                            skip when you're moving fast. The moment you go
                            multi-tenant without that discipline, you're looking
                            at a painful migration.
                          </p>

                          {/* Blockquote */}
                          <div className="postbox__quote">
                            <blockquote>
                              <div className="postbox__quote-icon">
                                <span>{quoteIcon}</span>
                              </div>
                              <p>
                                "The best SaaS architecture is the one that lets
                                a solo developer move at startup speed while
                                remaining safe enough to hand off to a team of
                                ten."
                              </p>
                            </blockquote>
                          </div>

                          {/* Key takeaways */}
                          <div className="postbox__features">
                            <h4 className="postbox__features-title">
                              Key Architecture Decisions
                            </h4>
                            <p>
                              Here are the three design choices that made the
                              biggest difference across my SaaS projects:
                            </p>
                            <ul>
                              <li>
                                <strong>
                                  Role-Based Access Control (RBAC)
                                </strong>{" "}
                                baked into the Prisma schema from day one — not
                                bolted on after launch.
                              </li>
                              <li>
                                <strong>Server Actions</strong> for mutations
                                instead of separate API routes — cleaner code,
                                simpler auth checks, fewer files.
                              </li>
                              <li>
                                <strong>Optimistic UI updates</strong> using
                                React's <code>useOptimistic</code> hook — makes
                                the product feel snappy even on slower
                                connections.
                              </li>
                            </ul>
                          </div>

                          <p>
                            One thing I wish I had standardized earlier is{" "}
                            <strong>error handling at the action layer</strong>.
                            Every server action now returns a typed{" "}
                            <code>&#123; success, error, data &#125;</code>{" "}
                            object — no more try/catch spaghetti in components.
                            It makes the client-side logic predictable and the
                            user experience consistent.
                          </p>

                          <p>
                            For deployment, I lean on <strong>Vercel</strong>{" "}
                            for the Next.js app and <strong>Neon</strong> or{" "}
                            <strong>Supabase</strong> for managed Postgres. The
                            combination gives you branch-based preview
                            deployments with isolated database branches — which
                            is a game changer when testing multi-tenant edge
                            cases.
                          </p>
                        </div>

                        {/* Tags + Share */}
                        <div className="postbox__share-wrapper mb-60">
                          <div className="row align-items-center">
                            <div className="col-xl-7">
                              <div className="tagcloud tagcloud-sm">
                                <span>Tags:</span>
                                <a href="#">Next.js</a>
                                <a href="#">Prisma</a>
                                <a href="#">SaaS</a>
                                <a href="#">TypeScript</a>
                              </div>
                            </div>
                            <div className="col-xl-5">
                              <div className="postbox__share text-xl-end">
                                <span>Share On:</span>
                                <a
                                  href="https://www.linkedin.com/in/elhassan-dahmouchi-a55b10391/"
                                  target="_blank"
                                >
                                  <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                                <a
                                  href="https://github.com/Dahmouchi"
                                  target="_blank"
                                >
                                  <i className="fa-brands fa-github"></i>
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

                        {/* Comments */}
                        <div className="postbox__comment-wrapper">
                          <div className="postbox__comment mb-95">
                            <h3 className="postbox__comment-title">
                              Comments (2)
                            </h3>
                            <ul>
                              <li>
                                <div className="postbox__comment-box d-sm-flex align-items-start">
                                  <div className="postbox__comment-info">
                                    <div className="postbox__comment-avater">
                                      <img
                                        src="assets/images/avatar/01.jpg"
                                        alt="Karim B."
                                      />
                                    </div>
                                  </div>
                                  <div className="postbox__comment-text">
                                    <div className="postbox__comment-name">
                                      <span className="post-meta">
                                        February 12, 2025
                                      </span>
                                      <h5>
                                        <a href="#">Karim B.</a>
                                      </h5>
                                    </div>
                                    <p>
                                      The RBAC tip is gold — I ignored it on my
                                      first SaaS and ended up rewriting the
                                      permissions logic 3 months in. Next time
                                      I'm following this pattern from the start.
                                    </p>
                                    <div className="postbox__comment-reply">
                                      <a href="#">Reply</a>
                                    </div>
                                  </div>
                                </div>
                                <ul className="children">
                                  <li>
                                    <div className="postbox__comment-box d-sm-flex align-items-start">
                                      <div className="postbox__comment-info">
                                        <div className="postbox__comment-avater">
                                          <img
                                            src="assets/images/blog/author.jpg"
                                            alt="Elhassan Dahmouchi"
                                          />
                                        </div>
                                      </div>
                                      <div className="postbox__comment-text">
                                        <div className="postbox__comment-name">
                                          <span className="post-meta">
                                            February 12, 2025
                                          </span>
                                          <h5>
                                            <a href="#">Elhassan Dahmouchi</a>
                                          </h5>
                                        </div>
                                        <p>
                                          Exactly! The migration cost is brutal.
                                          I'll be writing a dedicated post on
                                          Prisma schema design for multi-tenant
                                          apps soon.
                                        </p>
                                        <div className="postbox__comment-reply">
                                          <a href="#">Reply</a>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <div className="postbox__comment-box d-sm-flex align-items-start">
                                  <div className="postbox__comment-info">
                                    <div className="postbox__comment-avater">
                                      <img
                                        src="assets/images/avatar/01.jpg"
                                        alt="Sara M."
                                      />
                                    </div>
                                  </div>
                                  <div className="postbox__comment-text">
                                    <div className="postbox__comment-name">
                                      <span className="post-meta">
                                        February 15, 2025
                                      </span>
                                      <h5>
                                        <a href="#">Sara M.</a>
                                      </h5>
                                    </div>
                                    <p>
                                      Would love to see a follow-up on the Neon
                                      + Vercel branch preview setup — that
                                      sounds like it solves a major pain point
                                      for staging environments.
                                    </p>
                                    <div className="postbox__comment-reply">
                                      <a href="#">Reply</a>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>

                          {/* Comment form
                          <div className="postbox__comment-form">
                            <h3 className="postbox__comment-form-title">
                              Leave A Reply
                            </h3>
                            <p>
                              Your email address will not be published. Required
                              fields are marked *
                            </p>
                            <form action="#">
                              <div className="row">
                                <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                                  <div className="postbox__comment-input">
                                    <input type="text" placeholder="Name*" />
                                  </div>
                                </div>
                                <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                                  <div className="postbox__comment-input">
                                    <input type="email" placeholder="Email*" />
                                  </div>
                                </div>
                                <div className="col-xxl-4 col-xl-4 col-lg-12">
                                  <div className="postbox__comment-input">
                                    <input
                                      type="text"
                                      placeholder="Website (optional)"
                                    />
                                  </div>
                                </div>
                                <div className="col-xxl-12">
                                  <div className="postbox__comment-input">
                                    <textarea placeholder="Your comment here..."></textarea>
                                  </div>
                                </div>
                                <div className="col-xxl-12">
                                  <div className="postbox__comment-agree d-flex align-items-start mb-25">
                                    <input
                                      className="e-check-input"
                                      type="checkbox"
                                      id="e-agree"
                                    />
                                    <label
                                      className="e-check-label"
                                      htmlFor="e-agree"
                                    >
                                      Save my name and email in this browser for
                                      the next time I comment.
                                    </label>
                                  </div>
                                </div>
                                <div className="col-xxl-12">
                                  <div className="postbox__comment-btn">
                                    <button
                                      type="submit"
                                      className="theme-btn theme-btn-two"
                                    >
                                      Submit Comment
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div> */}
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
                                  <input
                                    type="text"
                                    placeholder="Search articles..."
                                  />
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
                                  Full-Stack Developer &amp; AI Enthusiast based
                                  in Rabat, Morocco. Writing about web dev,
                                  SaaS, and emerging tech.
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
                          <h3 className="sidebar__widget-title">
                            Recent Posts
                          </h3>
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
                                      <Link href="/blog-details">
                                        {rp.title}
                                      </Link>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
