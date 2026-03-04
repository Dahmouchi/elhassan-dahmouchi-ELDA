import React from "react";

const testimonials = [
  // ── Moroccan clients ──
  {
    id: 1,
    name: "Youssef El Mansouri",
    role: "CEO & Founder",
    company: "TechStart Maroc",
    flag: "🇲🇦",
    initials: "YM",
    color: "#26ccc2",
    rating: 5,
    text: "Elhassan a transformé notre vision en une plateforme SaaS robuste et élégante. Son expertise en Next.js et son sens du design ont vraiment fait la différence. Je recommande vivement ses services à toute entreprise souhaitant une présence digitale de qualité.",
    col: "col-lg-6 col-md-6",
    delay: "delay-0-2s",
  },
  {
    id: 2,
    name: "Salma Benali",
    role: "Directrice Produit",
    company: "DigitalAgency Casablanca",
    flag: "🇲🇦",
    initials: "SB",
    color: "#f59e0b",
    rating: 5,
    text: "Un développeur exceptionnel avec un œil pour le design. Notre application de gestion scolaire a été livrée en avance sur le planning, avec une qualité de code exemplaire. Elhassan est un vrai partenaire technique sur lequel on peut compter.",
    col: "col-lg-6 col-md-6",
    delay: "delay-0-4s",
  },
  {
    id: 3,
    name: "Amine Rachidi",
    role: "CTO",
    company: "BuildalittleBiz",
    flag: "🇲🇦",
    initials: "AR",
    color: "#8b5cf6",
    rating: 5,
    text: "Travailler avec Elhassan sur notre système d'alerte et de reporting a été une excellente expérience. Il maîtrise aussi bien le backend que le frontend, et son approche orientée solutions nous a permis de réduire le temps de développement de 30%.",
    col: "col-lg-4 col-md-6",
    delay: "delay-0-6s",
  },
  // ── International clients ──
  {
    id: 4,
    name: "Lucas Moreau",
    role: "Product Manager",
    company: "InnovateTech Paris",
    flag: "🇫🇷",
    initials: "LM",
    color: "#3b82f6",
    rating: 5,
    text: "Elhassan delivered our e-commerce platform with outstanding professionalism. His deep knowledge of React and Node.js, combined with clean UI/UX instincts, resulted in a product our users love. Communication was clear and deadlines were always met.",
    col: "col-lg-4 col-md-6",
    delay: "delay-0-8s",
  },
  {
    id: 5,
    name: "Sarah Mitchell",
    role: "Startup Founder",
    company: "GFY International — USA",
    flag: "🇺🇸",
    initials: "SM",
    color: "#ec4899",
    rating: 5,
    text: "Elhassan built our entire car accessories e-commerce platform from scratch. The attention to detail, the smooth UX, and the scalable architecture blew us away. He's exactly the kind of full-stack developer every startup dreams of having.",
    col: "col-lg-4 col-md-6",
    delay: "delay-0-2s",
  },
  {
    id: 6,
    name: "James Thornton",
    role: "Head of Engineering",
    company: "DataFlow Solutions — UK",
    flag: "🇬🇧",
    initials: "JT",
    color: "#10b981",
    rating: 5,
    text: "We hired Elhassan to integrate an AI-powered data analysis dashboard into our existing system. He handled complex backend logic with Python and delivered a beautiful React interface on time. Highly skilled and a genuine pleasure to work with.",
    col: "col-lg-6 col-md-6",
    delay: "delay-0-4s",
  },
  {
    id: 7,
    name: "Fatima Zahra Outman",
    role: "Responsable Numérique",
    company: "Ministère — Rabat",
    flag: "🇲🇦",
    initials: "FZ",
    color: "#f97316",
    rating: 5,
    text: "Elhassan a développé un système de gestion d'incidents qui a considérablement amélioré notre réactivité opérationnelle. Son professionnalisme, sa rigueur et sa capacité à innover nous ont pleinement satisfaits. Un vrai talent marocain.",
    col: "col-lg-6 col-md-6",
    delay: "delay-0-6s",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="testi-stars">
      {Array.from({ length: count }).map((_, i) => (
        <i key={i} className="ri-star-fill"></i>
      ))}
    </div>
  );
}

function AvatarInitials({
  initials,
  color,
}: {
  initials: string;
  color: string;
}) {
  return (
    <span className="testi-avatar-initials" style={{ background: color }}>
      {initials}
    </span>
  );
}

export default function TestimonoalArea() {
  return (
    <>
      <section className="testimonials-area">
        <div className="container">
          {/* Header */}
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title section-black-title wow fadeInUp delay-0-2s">
                <h2>Testimonials</h2>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="row">
            {testimonials.map((t) => (
              <div key={t.id} className={t.col}>
                <div className={`testimonial-item wow fadeInUp ${t.delay}`}>
                  {/* Quote icon */}
                  <div className="testi-quote">
                    <i className="ri-double-quotes-l"></i>
                  </div>

                  {/* Review text */}
                  <div className="text">{t.text}</div>

                  {/* Stars */}
                  <StarRating count={t.rating} />

                  {/* Author */}
                  <div className="testi-des">
                    <div className="testi-author-row">
                      <AvatarInitials initials={t.initials} color={t.color} />
                      <div className="testi-author-info">
                        <h5>
                          {t.flag} {t.name}
                        </h5>
                        <span>
                          {t.role} · {t.company}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
