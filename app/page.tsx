"use client";

import { useState } from "react";
import { translations, type Locale } from "./translations";

const LOCALES: Locale[] = ["en", "pt", "es"];

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const t = translations[locale];

  return (
    <main>

      {/* ─── NAV ─── */}
      <header className="nav">
        <div className="container nav-inner">
          <div className="nav-brand">
            <small>Mindfulness Leadership</small>
            <strong>Reinaldo Catarino</strong>
          </div>

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

            <a className="btn btn-primary" href="#contact">
              {t.nav.freeSession}
            </a>
          </div>
        </div>
      </header>

      {/* ─── HERO ─── */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="container hero-grid">

          <div>
            <div className="eyebrow">{t.hero.eyebrow}</div>

            <h1 className="title-hero">
              {t.hero.headline1}
              <br />
              <em style={{ fontStyle: "italic", color: "#5c4e43" }}>{t.hero.headline2}</em>
            </h1>

            <p className="text-lead" style={{ maxWidth: 580 }}>
              <span style={{ display: "block", fontSize: "1.25em", fontWeight: 700, color: "#2e2520", lineHeight: 1.35, marginBottom: 14 }}>
                {t.hero.question}
              </span>
              {t.hero.body}
            </p>
            <p className="text-lead" style={{ maxWidth: 580, marginTop: 20, fontStyle: "italic", color: "var(--muted)" }}>
              {t.hero.personalQuestion}
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 32 }}>
              <a className="btn btn-primary" href="#contact">
                {t.hero.ctaPrimary}
              </a>
              <a className="btn btn-secondary" href="#how-we-help">
                {t.hero.ctaSecondary}
              </a>
            </div>

            <div className="tagline-strip">
              {t.hero.pills.map((pill) => (
                <span key={pill} className="tagline-pill">{pill}</span>
              ))}
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-noise" />
            <div className="hero-card-inner">
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {t.hero.cardPills.map((pill) => (
                  <span key={pill} className="hero-pill">{pill}</span>
                ))}
              </div>

              <div>
                <div style={{ fontSize: 11, letterSpacing: "0.26em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: 16 }}>
                  Reinaldo Catarino
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
      <section className="section" style={{ paddingTop: 80 }}>
        <div className="container">
          <div className="section-label">
            <div className="eyebrow">{t.questionSection.eyebrow}</div>
            <div className="section-label-line" />
          </div>

          <div className="grid-2" style={{ alignItems: "start", gap: 60 }}>
            <div>
              <h2 className="title-xl">{t.questionSection.title}</h2>
            </div>
            <div>
              <p className="text-lead">{t.questionSection.lead}</p>
              <p className="text-body" style={{ marginTop: 20 }}>
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

          {/* Convergence arrows */}
          <div className="converge-arrows">
            <div className="converge-line converge-line-left" />
            <div className="converge-center">↓</div>
            <div className="converge-line converge-line-right" />
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
            <div className="merge-bottom">
              <p className="merge-eyebrow">{t.twoPaths.mergeEyebrow}</p>
              <h3 className="title-md" style={{ margin: "10px 0 12px" }}>{t.twoPaths.mergeTitle}</h3>
              <p className="text-body" style={{ maxWidth: 560, margin: "0 auto 28px" }}>
                {t.twoPaths.mergeBody}
              </p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <a className="btn btn-primary" href="#contact">{t.twoPaths.ctaPrimary}</a>
                <a className="btn btn-secondary" href="#how-we-help">{t.twoPaths.ctaSecondary}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY DIFFERENT ─── */}
      <section id="organizations" className="section" style={{ background: "var(--paper)" }}>
        <div className="container">
          <div className="section-label">
            <div className="eyebrow">{t.whyDifferent.eyebrow}</div>
            <div className="section-label-line" />
          </div>

          <h2 className="title-xl" style={{ maxWidth: 640, marginBottom: 0 }}>
            {t.whyDifferent.title}
          </h2>

          <div className="why-grid">
            {t.whyDifferent.cards.map((card) => (
              <div key={card.num} className="card why-card">
                <div className="why-number">{card.num}</div>
                <h3>{card.title}</h3>
                <p className="text-body">{card.body}</p>
              </div>
            ))}
          </div>

          <div className="quote-block" style={{ marginTop: 40 }}>
            <blockquote>
              {t.whyDifferent.quote.split("\n").map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </blockquote>
            <p style={{ marginTop: 16, color: "var(--muted)", fontSize: 14, fontWeight: 500 }}>
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
                  <a href="#contact" className="btn btn-primary" style={{ marginTop: 8, alignSelf: "flex-start" }}>
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
          <div className="session-cta">
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
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 14,
                  padding: "14px 18px",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.78)",
                  fontWeight: 300,
                }}>
                  {item}
                </div>
              ))}
            </div>

            <a href="#contact" className="btn" style={{ background: "white", color: "#141210", fontWeight: 600 }}>
              {t.sessionHighlight.cta}
            </a>
          </div>
        </div>
      </section>

      {/* ─── LEADERSHIP MAP ─── */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-label">
            <div className="eyebrow">{t.leadershipMap.eyebrow}</div>
            <div className="section-label-line" style={{ background: "rgba(255,255,255,0.08)" }} />
          </div>

          <div className="grid-2" style={{ alignItems: "start", gap: 60 }}>
            <div>
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

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {t.leadershipMap.faces.map((face) => (
                <div key={face.label} className="map-face">
                  <div className="map-face-dot" />
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 3 }}>{face.label}</div>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 300 }}>{face.desc}</div>
                  </div>
                </div>
              ))}
            </div>
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
              <div style={{ marginTop: 28, padding: "20px 24px", background: "rgba(122,101,82,0.08)", borderRadius: 18 }}>
                <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 22, fontWeight: 500, fontStyle: "italic", color: "#2e2520", lineHeight: 1.5, margin: 0 }}>
                  {t.about.quote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── RESOURCES / BOOKS ─── */}
      <section id="resources" className="section">
        <div className="container">
          <div className="section-label">
            <div className="eyebrow">{t.resources.eyebrow}</div>
            <div className="section-label-line" />
          </div>

          <div style={{ maxWidth: 700 }}>
            <h2 className="title-xl">{t.resources.title}</h2>
            <p className="text-lead">{t.resources.lead}</p>
          </div>

          <div className="books-grid">
            {t.resources.books.map((book) => (
              <div key={book.title} className="card book-card">
                <span className="book-tag">{book.category}</span>
                <h3>{book.title}</h3>
                {book.subtitle && (
                  <div style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 16, color: "var(--muted)", marginBottom: 6, fontStyle: "italic" }}>
                    {book.subtitle}
                  </div>
                )}
                <div className="book-author">{book.author}</div>
                <p className="text-body">{book.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="section" style={{ background: "var(--paper)" }}>
        <div className="container">
          <div className="section-label">
            <div className="eyebrow">{t.contact.eyebrow}</div>
            <div className="section-label-line" />
          </div>

          <div className="grid-2" style={{ alignItems: "start", gap: 60 }}>
            <div>
              <h2 className="title-xl">{t.contact.title}</h2>
              <p className="text-lead">{t.contact.lead}</p>

              <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 18 }}>
                {[
                  { label: t.contact.format, value: t.contact.formatValue },
                  { label: t.contact.email, value: t.contact.emailValue },
                ].map(({ label, value }) => (
                  <div key={label} style={{ display: "flex", gap: 12, alignItems: "baseline" }}>
                    <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.16em", color: "var(--muted)", fontWeight: 600, flexShrink: 0 }}>{label}</span>
                    <div style={{ flex: 1, height: 1, background: "var(--line)", alignSelf: "center" }} />
                    <span style={{ fontSize: 15, color: "#2e2520", fontWeight: 400 }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card" style={{ padding: 36 }}>
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
              Reinaldo Catarino
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