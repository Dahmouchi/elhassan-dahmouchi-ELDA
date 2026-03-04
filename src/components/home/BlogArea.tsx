import React from "react";
import Link from "next/link";

const blog_posts = [
  {
    img: "assets/images/blog/blog1.jpg",
    date: "Feb 10, 2025",
    category: "Full-Stack",
    title: "Building Scalable SaaS Platforms with Next.js & Prisma",
    href: "/blog-details",
  },
  {
    img: "assets/images/blog/blog2.jpg",
    date: "Jan 22, 2025",
    category: "AI & Dev",
    title: "Integrating AI Features into Your Web App — A Practical Guide",
    href: "/blog-details",
  },
  {
    img: "assets/images/blog/blog3.jpg",
    date: "Dec 05, 2024",
    category: "Mobile",
    title: "React Native in 2025: What I Learned Building Real-World Apps",
    href: "/blog-details",
  },
];

export default function BlogArea() {
  return (
    <>
      <section className="blog-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title wow fadeInUp delay-0-2s">
                <h2>Stories</h2>
              </div>
            </div>
          </div>

          {blog_posts.map((post, i) => (
            <div key={i} className="row blog-post-box align-items-center">
              <div className="col-lg-6">
                <div className="blog-post-img">
                  <Link href={post.href}>
                    <img src={post.img} alt={post.title} />
                  </Link>
                  <div className="blog-post-category">
                    <a href="#">{post.category}</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="blog-post-caption">
                  <h3>Posted on {post.date}</h3>
                  <h2>
                    <Link className="link-decoration" href={post.href}>
                      {post.title}
                    </Link>
                  </h2>
                  <Link className="theme-btn theme-btn-two" href={post.href}>
                    Read more <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
