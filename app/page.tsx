"use client";

import { useState, useEffect, useRef } from "react";
import { translations, type Locale } from "./translations";

const LOCALES: Locale[] = ["en", "pt", "es"];

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const t = translations[locale];

  const questionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const whyRef = useRef<HTMLElement>(null);
  const whyImgRef = useRef<HTMLImageElement>(null);
  const booksRef = useRef<HTMLDivElement>(null);

  function scrollBooks(dir: number) {
    const el = booksRef.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth * 0.8 * dir, behavior: "smooth" });
  }

  useEffect(() => {
    let rafId: number;
    let lastUpdate = 0;
    const throttleMs = 16; // ~60fps

    function applyParallax(section: HTMLElement | null, img: HTMLImageElement | null) {
      if (!section || !img) return;
      const rect = section.getBoundingClientRect();
      const windowH = window.innerHeight;
      const progress = 1 - (rect.bottom / (windowH + rect.height));
      const translate = (progress - 0.5) * 30;
      img.style.transform = `translateY(${translate}%)`;
    }

    function onScroll() {
      const now = Date.now();
      if (now - lastUpdate < throttleMs) return;
      lastUpdate = now;

      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        applyParallax(questionRef.current, imgRef.current);
        applyParallax(whyRef.current, whyImgRef.current);
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <main>

      {/* ─── NAV ─── */}
      <header className="nav">
        <div className="container nav-inner">
          <a href="#" className="nav-brand" aria-label="Real Connection Workshops">
            <img src="/logo.png" className="rc-logo" alt="Real Connection Workshops" />
            <span className="nav-brand-word">
              <small>Real Connection</small>
              <strong>Workshops</strong>
            </span>
          </a>

          <nav className="nav-links">
            <a href="#organizations">{t.nav.organizations}</a>
            <a href="#personal">{t.nav.personal}</a>
            <a href="#how-we-help">{t.nav.howWeHelp}</a>
            <a href="#resources">{t.nav.resources}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {/* Language switcher */}
            <div style={{ display: "flex", gap: 4 }}>
              {LOCALES.map((l) => (
                <button
                  key={l}
                  onClick={() => setLocale(l)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                    padding: "6px 10px",
                    borderRadius: 999,
                    border: locale === l ? "1px solid rgba(20,18,16,0.22)" : "1px solid transparent",
                    background: locale === l ? "rgba(20,18,16,0.06)" : "transparent",
                    cursor: "pointer",
                    fontSize: 13,
                    fontWeight: locale === l ? 600 : 400,
                    color: locale === l ? "var(--text)" : "var(--muted)",
                    fontFamily: "DM Sans, Arial, sans-serif",
                    transition: "all 0.15s",
                  }}
                >
                  <span style={{ fontSize: 16 }}>{translations[l].flag}</span>
                  <span>{translations[l].label}</span>
                </button>
              ))}
            </div>

            <a className="btn btn-session" href="#contact">
              {t.nav.freeSession}
            </a>
          </div>
        </div>
      </header>

      {/* ─── HERO ─── */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: 0, position: "relative", overflow: "hidden" }}>
        {/* Background image — estática, sem parallax */}
        <img
          src="/head.JPG"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 0,
          }}
        />
        {/* Overlay — área de texto bem escura à esquerda, imagem visível à direita */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, rgba(8,6,4,0.92) 0%, rgba(8,6,4,0.88) 45%, rgba(8,6,4,0.55) 65%, rgba(8,6,4,0.2) 100%)",
            zIndex: 0,
          }}
        />

        <div className="container hero-grid" style={{ position: "relative", zIndex: 1 }}>

          <div>
            <div className="eyebrow" style={{ color: "rgba(255,255,255,0.55)" }}>{t.hero.eyebrow}</div>

            <h1 className="title-hero" style={{ color: "white" }}>
              {t.hero.headline1}
              <br />
              <em style={{ fontStyle: "italic", color: "#c8b89f" }}>{t.hero.headline2}</em>
            </h1>

            <p className="text-lead" style={{ maxWidth: 580, color: "rgba(255,255,255,0.85)" }}>
              <span style={{ display: "block", fontSize: "1.25em", fontWeight: 700, color: "white", lineHeight: 1.35, marginBottom: 14 }}>
                {t.hero.question}
              </span>
              {t.hero.body}
            </p>
            <p className="text-lead" style={{ maxWidth: 580, marginTop: 20, fontStyle: "italic", color: "rgba(255,255,255,0.6)" }}>
              {t.hero.personalQuestion}
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 32 }}>
              <a className="btn btn-session" href="#contact">
                {t.hero.ctaPrimary}
              </a>
              <a className="btn btn-secondary" href="#how-we-help">
                {t.hero.ctaSecondary}
              </a>
            </div>

            <div className="tagline-strip">
              {t.hero.pills.map((pill) => (
                <span key={pill} className="tagline-pill" style={{ color: "rgba(255,255,255,0.7)", borderColor: "rgba(255,255,255,0.2)" }}>{pill}</span>
              ))}
            </div>
          </div>

          <div className="hero-card" style={{ display: "none" }}>
            <div className="hero-card-noise" />
            <div className="hero-card-inner">
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {t.hero.cardPills.map((pill) => (
                  <span key={pill} className="hero-pill">{pill}</span>
                ))}
              </div>

              <div>
                <div style={{ fontSize: 11, letterSpacing: "0.26em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: 16 }}>
                  Real Connection Workshops
                </div>
                <h2 className="hero-signature">
                  MINDFUL
                  <br />
                  LEADER
                </h2>
                <p style={{ marginTop: 20, color: "rgba(255,255,255,0.7)", fontSize: 16, lineHeight: 1.8, maxWidth: 380, fontWeight: 300 }}>
                  {t.hero.cardQuote}
                </p>
              </div>

              <div className="hero-quad">
                {t.hero.cardItems.map((item) => (
                  <div key={item} className="hero-quad-item">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── QUESTION / INTRO ─── */}
      <section
        ref={questionRef}
        className="section"
        style={{ paddingTop: 120, paddingBottom: 120, position: "relative", overflow: "hidden" }}
      >
        {/* Background image — parallax otimizado */}
        {/* TODO (pedido do Reinaldo, item 3): trocar por foto de dois profissionais
            olhando um documento em concordância — um líder que inspira + colaborador(a) sorrindo.
            Basta substituir /public/the_question.PNG mantendo o mesmo nome, ou trocar o src abaixo. */}
        <img
          ref={imgRef}
          src="/the_question.PNG"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            left: 0,
            top: "-20%",
            width: "100%",
            height: "140%",
            objectFit: "cover",
            objectPosition: "center center",
            pointerEvents: "none",
            userSelect: "none",
            willChange: "transform",
            backfaceVisibility: "hidden",
            transform: "translate3d(0, 0, 0)",
          }}
        />
        {/* Overlay escuro para legibilidade */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(10,8,6,0.50) 0%, rgba(10,8,6,0.70) 100%)",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-label">
            <div className="eyebrow" style={{ color: "rgba(255,255,255,0.55)" }}>
              {t.questionSection.eyebrow}
            </div>
            <div className="section-label-line" style={{ background: "rgba(255,255,255,0.15)" }} />
          </div>

          <div className="grid-2" style={{ alignItems: "start", gap: 60 }}>
            <div>
              <h2 className="title-xl" style={{ color: "white" }}>
                {t.questionSection.title}
              </h2>
            </div>
            <div>
              <p className="text-lead" style={{ color: "rgba(255,255,255,0.82)" }}>
                {t.questionSection.lead}
              </p>
              <p className="text-body" style={{ marginTop: 20, color: "rgba(255,255,255,0.62)" }}>
                {t.questionSection.body}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SPLIT: PERSONAL + CORPORATE → CONVERGENCE ─── */}
      <section id="personal" className="section">
        <div className="container">
          <div className="section-label">
            <div className="eyebrow">{t.twoPaths.eyebrow}</div>
            <div className="section-label-line" />
          </div>

          <div style={{ marginBottom: 48 }}>
            <h2 className="title-xl" style={{ marginBottom: 0 }}>
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>{t.twoPaths.title1}</em>{" "}
              <span style={{ color: "#2e2520" }}>{t.twoPaths.title2}</span>
            </h2>
          </div>

          <div className="split-two">
            {/* Left: Personal */}
            <div className="split-col">
              <div className="split-header split-personal">
                <span className="split-tag split-tag-personal">{t.twoPaths.personal.tag}</span>
                <h3 className="split-title">{t.twoPaths.personal.title}</h3>
                <p className="split-sub">{t.twoPaths.personal.sub}</p>
              </div>
              {t.twoPaths.personal.items.map((item) => (
                <div key={item.label} className="split-item">
                  <div className="split-dot split-dot-personal" />
                  <div>
                    <p className="split-item-label">{item.label}</p>
                    <p className="split-item-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Corporate */}
            <div className="split-col">
              <div className="split-header split-corporate">
                <span className="split-tag split-tag-corporate">{t.twoPaths.corporate.tag}</span>
                <h3 className="split-title">{t.twoPaths.corporate.title}</h3>
                <p className="split-sub">{t.twoPaths.corporate.sub}</p>
              </div>
              {t.twoPaths.corporate.items.map((item) => (
                <div key={item.label} className="split-item">
                  <div className="split-dot split-dot-corporate" />
                  <div>
                    <p className="split-item-label">{item.label}</p>
                    <p className="split-item-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Convergence — as duas trilhas afunilam em uma só */}
          <div className="converge" aria-hidden="true">
            <svg className="converge-svg" viewBox="0 0 400 96" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="convGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#3b6ca3" />
                  <stop offset="1" stopColor="#4a6645" />
                </linearGradient>
              </defs>
              <path d="M64 6 C 64 56, 200 46, 200 76" fill="none" stroke="#3b6ca3" strokeWidth="1.6" strokeLinecap="round" strokeOpacity="0.45" />
              <path d="M336 6 C 336 56, 200 46, 200 76" fill="none" stroke="#4a6645" strokeWidth="1.6" strokeLinecap="round" strokeOpacity="0.45" />
              <circle cx="200" cy="76" r="11" fill="none" stroke="url(#convGrad)" strokeOpacity="0.28" strokeWidth="1" />
              <circle cx="200" cy="76" r="5" fill="url(#convGrad)" />
            </svg>
          </div>

          {/* Merged card */}
          <div className="merge-card card">
            <div className="merge-top">
              <div className="merge-side merge-side-left">
                <p className="merge-side-tag">{t.twoPaths.mergePersonalTag}</p>
                <div className="merge-items">
                  {t.twoPaths.mergePersonalItems.map((item) => (
                    <div key={item} className="merge-item">
                      <div className="merge-dot merge-dot-personal" />{item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="merge-side merge-side-right">
                <p className="merge-side-tag">{t.twoPaths.mergeCorporateTag}</p>
                <div className="merge-items">
                  {t.twoPaths.mergeCorporateItems.map((item) => (
                    <div key={item} className="merge-item">
                      <div className="merge-dot merge-dot-corporate" />{item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* conector discreto até a jornada */}
          <div className="converge-tail" aria-hidden="true"><span>↓</span></div>

          {/* 11-Session Journey — card próprio, 4 cantos arredondados */}
          <div className="card merge-video-card">
            <div className="merge-bottom" style={{ position: "relative", overflow: "hidden", isolation: "isolate", padding: "100px 60px 80px" }}>
              {/* Video de fundo */}
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: -2,
                  pointerEvents: "none",
                }}
              >
                <source src="/two_paths.MP4" type="video/mp4" />
              </video>
              {/* Overlay escuro para legibilidade do texto */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(20deg, rgba(10,8,6,0.78) 0%, rgba(10,8,6,0.88) 100%)",
                  zIndex: -1,
                }}
              />
              <p className="merge-eyebrow" style={{ color: "rgba(255,255,255,0.5)" }}>{t.twoPaths.mergeEyebrow}</p>
              <h3 className="title-md" style={{ margin: "10px 0 12px", color: "white" }}>{t.twoPaths.mergeTitle}</h3>
              <p className="text-body" style={{ maxWidth: 560, margin: "0 auto 28px", color: "rgba(255,255,255,0.7)" }}>
                {t.twoPaths.mergeBody}
              </p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <a className="btn btn-session" href="#contact">{t.twoPaths.ctaPrimary}</a>
                <a className="btn btn-secondary" href="#how-we-help" style={{ borderColor: "rgba(255,255,255,0.3)", color: "white" }}>{t.twoPaths.ctaSecondary}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY DIFFERENT ─── */}
      <section
        ref={whyRef}
        id="organizations"
        className="section"
        style={{ position: "relative", overflow: "hidden" }}
      >
        {/* Background image parallax otimizado */}
        <img
          ref={whyImgRef}
          src="/diference.JPG"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            left: 0,
            top: "-20%",
            width: "100%",
            height: "140%",
            objectFit: "cover",
            objectPosition: "center 40%",
            pointerEvents: "none",
            userSelect: "none",
            willChange: "transform",
            backfaceVisibility: "hidden",
            transform: "translate3d(0, 0, 0)",
          }}
        />
        {/* Overlay — mais denso que o anterior para os cards ficarem legíveis */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(8,6,4,0.72) 0%, rgba(8,6,4,0.82) 100%)",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-label">
            <div className="eyebrow" style={{ color: "rgba(255,255,255,0.45)" }}>{t.whyDifferent.eyebrow}</div>
            <div className="section-label-line" style={{ background: "rgba(255,255,255,0.1)" }} />
          </div>

          <h2 className="title-xl" style={{ maxWidth: 640, marginBottom: 0, color: "white" }}>
            {t.whyDifferent.title}
          </h2>

          <div className="why-grid">
            {t.whyDifferent.cards.map((card) => (
              <div key={card.num} className="card why-card" style={{ background: "rgba(255,255,255,0.18)", borderColor: "rgba(255,255,255,0.22)", backdropFilter: "blur(20px)" }}>
                <div className="why-number" style={{ color: "rgba(255,255,255,0.08)" }}>{card.num}</div>
                <h3 style={{ color: "white" }}>{card.title}</h3>
                <p className="text-body" style={{ color: "rgba(255,255,255,0.62)" }}>{card.body}</p>
              </div>
            ))}
          </div>

          <div className="quote-block" style={{ marginTop: 40, background: "rgba(255,255,255,0.05)", borderLeftColor: "rgba(122,101,82,0.8)" }}>
            <blockquote style={{ color: "rgba(255,255,255,0.92)" }}>
              {t.whyDifferent.quote.split("\n").map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </blockquote>
            <p style={{ marginTop: 16, color: "rgba(255,255,255,0.4)", fontSize: 14, fontWeight: 500 }}>
              {t.whyDifferent.quoteAuthor}
            </p>
          </div>
        </div>
      </section>

      {/* ─── HOW WE HELP / PROGRAMS ─── */}
      <section id="how-we-help" className="section">
        <div className="container">
          <div className="section-label">
            <div className="eyebrow">{t.programs.eyebrow}</div>
            <div className="section-label-line" />
          </div>

          <div style={{ maxWidth: 700, marginBottom: 0 }}>
            <h2 className="title-xl">{t.programs.title}</h2>
            <p className="text-lead">{t.programs.lead}</p>
          </div>

          <div className="program-grid">
            {t.programs.workshops.map((w) => (
              <div key={w.id} className="card program-card">
                <div className="program-card-number">{w.id}</div>
                <h3>{w.title}</h3>
                <p className="text-body">{w.desc}</p>
                {w.cta && (
                  <a href="#contact" className="btn btn-session" style={{ marginTop: 8, alignSelf: "flex-start" }}>
                    {w.cta}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 11-SESSION HIGHLIGHT ─── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="session-cta" style={{ position: "relative", overflow: "hidden", isolation: "isolate" }}>
            <img
              src="/signature_program.JPG"
              alt=""
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center center",
                zIndex: -2,
                pointerEvents: "none",
              }}
            />
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(160deg, rgba(10,8,6,0.86) 0%, rgba(10,8,6,0.7) 60%, rgba(10,8,6,0.86) 100%)",
                zIndex: -1,
              }}
            />
            <div className="eyebrow" style={{ color: "rgba(255,255,255,0.4)" }}>{t.sessionHighlight.eyebrow}</div>
            <h2 className="title-xl" style={{ color: "white", marginTop: 14, maxWidth: 620 }}>
              {t.sessionHighlight.title}
            </h2>
            <p className="text-lead" style={{ color: "rgba(255,255,255,0.7)", maxWidth: 560, margin: "20px 0 36px" }}>
              {t.sessionHighlight.lead}
            </p>

            <div className="grid-3" style={{ gap: 14, marginBottom: 36 }}>
              {t.sessionHighlight.features.map((item) => (
                <div key={item} style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 14,
                  padding: "14px 18px",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.78)",
                  fontWeight: 300,
                  backdropFilter: "blur(8px)",
                }}>
                  {item}
                </div>
              ))}
            </div>

            <a href="#contact" className="btn btn-session" style={{ fontWeight: 600 }}>
              {t.sessionHighlight.cta}
            </a>
          </div>
        </div>
      </section>

      {/* ─── LEADERSHIP MAP ─── */}
      <section className="section section-dark" style={{ position: "relative", overflow: "hidden" }}>
        <img
          src="/framework.JPG"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 0,
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(100deg, rgba(10,8,6,0.92) 0%, rgba(10,8,6,0.8) 45%, rgba(10,8,6,0.6) 100%)",
            zIndex: 0,
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-label">
            <div className="eyebrow">{t.leadershipMap.eyebrow}</div>
            <div className="section-label-line" style={{ background: "rgba(255,255,255,0.08)" }} />
          </div>

          <div style={{ maxWidth: 760 }}>
            <h2 className="title-xl" style={{ color: "white" }}>
              {t.leadershipMap.title}
            </h2>
            <p className="text-lead">{t.leadershipMap.lead}</p>
            <p className="text-body" style={{ marginTop: 16 }}>
              {t.leadershipMap.body1}
            </p>
            <p className="text-body" style={{ marginTop: 16 }}>
              {t.leadershipMap.body2}
            </p>
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="container">
          <div className="section-label">
            <div className="eyebrow">{t.about.eyebrow}</div>
            <div className="section-label-line" />
          </div>

          <div className="grid-2" style={{ alignItems: "start", gap: 60 }}>
            <div>
              <h2 className="title-xl">
                {t.about.title1}<br />
                <em style={{ fontStyle: "italic", color: "var(--accent)" }}>{t.about.title2}</em>
              </h2>
            </div>
            <div>
              <p className="text-lead">{t.about.lead}</p>
              <p className="text-body" style={{ marginTop: 18 }}>{t.about.body1}</p>
              <p className="text-body" style={{ marginTop: 18 }}>{t.about.body2}</p>

              <ul className="credentials">
                {t.about.credentials.map((cred) => (
                  <li key={cred} className="credential-item">
                    <span className="credential-mark" aria-hidden="true" />
                    <span>{cred}</span>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: 28, padding: "20px 24px", background: "rgba(122,101,82,0.08)", borderRadius: 18 }}>
                <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 22, fontWeight: 500, fontStyle: "italic", color: "#2e2520", lineHeight: 1.5, margin: 0 }}>
                  {t.about.quote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── RESOURCES / BOOKS CAROUSEL ─── */}
      <section id="resources" className="section">
        <div className="container">
          <div className="section-label">
            <div className="eyebrow">{t.resources.eyebrow}</div>
            <div className="section-label-line" />
          </div>

          <div className="books-head">
            <div style={{ maxWidth: 700 }}>
              <h2 className="title-xl">{t.resources.title}</h2>
              <p className="text-lead">{t.resources.lead}</p>
            </div>
            <div className="books-nav">
              <button type="button" className="books-arrow" aria-label="Previous books" onClick={() => scrollBooks(-1)}>←</button>
              <button type="button" className="books-arrow" aria-label="Next books" onClick={() => scrollBooks(1)}>→</button>
            </div>
          </div>

          <div className="books-carousel" ref={booksRef}>
            {t.resources.books.map((book, i) => (
              <article key={book.title} className="book-item">
                <div className={`book-cover book-cover-${i % 6}`}>
                  <div className="book-spine" aria-hidden="true" />
                  <div className="book-cover-inner">
                    <span className="book-tag">{book.category}</span>
                    <h3 className="book-cover-title">{book.title}</h3>
                    {book.subtitle && <div className="book-cover-sub">{book.subtitle}</div>}
                    <div className="book-cover-author">{book.author}</div>
                  </div>
                </div>
                <p className="book-summary">{book.summary}</p>
              </article>
            ))}
          </div>

          <div className="books-hint">{t.resources.eyebrow} · ← →</div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="container">
          <div className="section-label">
            <div className="eyebrow">{t.testimonials.eyebrow}</div>
            <div className="section-label-line" />
          </div>

          <div style={{ maxWidth: 700, marginBottom: 8 }}>
            <h2 className="title-xl">{t.testimonials.title}</h2>
          </div>

          <div className="testimonial-grid">
            {t.testimonials.items.map((item, i) => (
              <figure key={i} className="card testimonial-card">
                <div className="testimonial-quote-mark" aria-hidden="true">&ldquo;</div>
                <blockquote className="testimonial-quote">{item.quote}</blockquote>
                <figcaption className="testimonial-author">
                  <span className="testimonial-name">{item.name}</span>
                  <span className="testimonial-role">{item.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONCLUSION ─── */}
      <section className="section conclusion-section">
        <div className="container">
          <div className="conclusion-inner">
            <div className="eyebrow" style={{ color: "var(--accent)" }}>{t.conclusion.eyebrow}</div>
            <h2 className="title-xl conclusion-title">{t.conclusion.title}</h2>
            <p className="conclusion-body">{t.conclusion.body}</p>
            <a href="#contact" className="btn btn-session" style={{ marginTop: 8 }}>
              {t.conclusion.cta}
            </a>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="section" style={{ position: "relative", overflow: "hidden" }}>
        <img
          src="/contact.JPG"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 0,
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(100deg, rgba(10,8,6,0.75) 0%, rgba(10,8,6,0.68) 50%, rgba(10,8,6,0.65) 100%)",
            zIndex: 0,
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-label">
            <div className="eyebrow" style={{ color: "rgba(255,255,255,0.45)" }}>{t.contact.eyebrow}</div>
            <div className="section-label-line" style={{ background: "rgba(255,255,255,0.1)" }} />
          </div>

          <div className="grid-2" style={{ alignItems: "start", gap: 60 }}>
            <div>
              <h2 className="title-xl" style={{ color: "white" }}>{t.contact.title}</h2>
              <p className="text-lead" style={{ color: "rgba(255,255,255,0.8)" }}>{t.contact.lead}</p>

              <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 18 }}>
                {[
                  { label: t.contact.format, value: t.contact.formatValue },
                  { label: t.contact.email, value: t.contact.emailValue },
                ].map(({ label, value }) => (
                  <div key={label} style={{ display: "flex", gap: 12, alignItems: "baseline" }}>
                    <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.16em", color: "rgba(255,255,255,0.4)", fontWeight: 600, flexShrink: 0 }}>{label}</span>
                    <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.15)", alignSelf: "center" }} />
                    <span style={{ fontSize: 15, color: "white", fontWeight: 400 }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card" style={{ padding: 36, background: "rgba(255,255,255,0.96)" }}>
              <form style={{ display: "grid", gap: 14 }}>
                <input className="input" type="text" placeholder={t.contact.namePlaceholder} />
                <input className="input" type="email" placeholder={t.contact.emailPlaceholder} />
                <select className="select" defaultValue="">
                  <option value="" disabled>{t.contact.selectDefault}</option>
                  {t.contact.selectOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
                <textarea className="textarea" placeholder={t.contact.textareaPlaceholder} />
                <button type="submit" className="btn btn-primary" style={{ width: "100%", minHeight: 56 }}>
                  {t.contact.submit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <div style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 28, fontWeight: 600, letterSpacing: "-0.03em" }}>
              Real Connection Workshops
            </div>
            <div className="text-muted" style={{ fontSize: 13, marginTop: 2 }}>{t.footer.subtitle}</div>
          </div>

          <div style={{ display: "flex", gap: 28, fontSize: 13, color: "var(--muted)" }}>
            <a href="#organizations">{t.footer.links[0]}</a>
            <a href="#personal">{t.footer.links[1]}</a>
            <a href="#how-we-help">{t.footer.links[2]}</a>
            <a href="#resources">{t.footer.links[3]}</a>
            <a href="#contact">{t.footer.links[4]}</a>
          </div>

          <div className="text-muted" style={{ fontSize: 13 }}>
            {t.footer.copyright}
          </div>
        </div>
      </footer>

    </main>
  );
}