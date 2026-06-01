const workshops = [
  {
    id: "01",
    title: "Workshops",
    desc: "Through a fully experiential approach, participants actively engage, practice, and apply what they learn in real life. Our workshops are designed to fit your business's size, goals, and specific challenges, ensuring relevant and meaningful outcomes.",
    cta: null,
  },
  {
    id: "02",
    title: "The 11-Session Transformation Journey",
    desc: "A dedicated path to becoming a mindful leader who inspires trust and drives sustainable impact. Designed to redefine the architecture of your leadership — cultivating the courage to make necessary decisions and the mindset shift to navigate complex organizational challenges.",
    cta: "Schedule a free assessment session",
  },
  {
    id: "03",
    title: "The Map of Modern Leadership",
    desc: "A dynamic approach that recognizes leadership is not fixed in one position. By moving fluidly among 5 faces — Leader Within, Leader in Front, Leader Beside, Leader in the Field, and Leader Behind — a leader responds to the needs of the moment and the strengths of the group.",
    cta: null,
  },
  {
    id: "04",
    title: "The Anatomy of a Team",
    desc: "The best teams are far more than the sum of their parts. It's easy to think that success comes from highly accomplished individuals under a skilled leader — but the best teams share certain basic characteristics that go far deeper.",
    cta: null,
  },
  {
    id: "05",
    title: "The Power of Storytelling",
    desc: "More than just communication, storytelling builds trust, creates meaning and strengthens human connection. \"If you believe in what you say, your audience believes it too.\" It helps individuals and teams see themselves as part of a shared journey.",
    cta: null,
  },
];

const books = [
  {
    category: "Leadership",
    title: "The Stake",
    subtitle: "The Making of Leaders",
    author: "Henry Kimsey-House & David Skibbins",
    summary: "A powerful framework for understanding what it truly means to step into leadership — not as a role, but as an identity.",
  },
  {
    category: "Self-Leadership",
    title: "Leadership from the Inside Out",
    subtitle: "Becoming a Leader for Life",
    author: "Kevin Cashman",
    summary: "Explores how authentic leadership emerges from knowing yourself deeply — your values, purpose, and the story you carry.",
  },
  {
    category: "Potential",
    title: "Hidden Potential",
    subtitle: "The Science of Achieving Greater Things",
    author: "Adam Grant",
    summary: "Challenges the idea that talent is fixed. A compelling case for how character and opportunity unlock extraordinary growth.",
  },
  {
    category: "Wellbeing",
    title: "The Good Life",
    subtitle: "",
    author: "Robert Waldinger & Marc Schulz",
    summary: "Drawn from the longest study on happiness, this book reveals that relationships — not achievement — are the foundation of a life well lived.",
  },
  {
    category: "Courage",
    title: "A Promised Land",
    subtitle: "",
    author: "Barack Obama",
    summary: "A deeply human account of leadership under pressure, moral complexity, and the weight of decisions that shape millions of lives.",
  },
  {
    category: "Resilience",
    title: "What Happened to You?",
    subtitle: "Conversations on Trauma, Resilience, and Healing",
    author: "Bruce D. Perry & Oprah Winfrey",
    summary: "Reframes how we understand behavior and emotion — shifting from 'what's wrong with you?' to 'what happened to you?' — essential for compassionate leadership.",
  },
  {
    category: "Habits",
    title: "Atomic Habits",
    subtitle: "",
    author: "James Clear",
    summary: "The definitive guide to building systems that make change inevitable rather than relying on willpower or motivation.",
  },
  {
    category: "Peace",
    title: "The Anatomy of Peace",
    subtitle: "",
    author: "The Arbinger Institute",
    summary: "Reveals how we often become the source of the very conflicts we seek to resolve — and how a shift in heart changes everything.",
  },
  {
    category: "Meaning",
    title: "Man's Search for Meaning",
    subtitle: "",
    author: "Viktor E. Frankl",
    summary: "One of the most important books ever written. Frankl's account of finding purpose in the most extreme suffering remains profoundly transformative.",
  },
  {
    category: "Resilience",
    title: "The Stoic Challenge",
    subtitle: "",
    author: "William B. Irvine",
    summary: "A modern guide to Stoic wisdom — reframing obstacles as tests to sharpen character rather than evidence of failure.",
  },
  {
    category: "Connection",
    title: "Talking to Strangers",
    subtitle: "",
    author: "Malcolm Gladwell",
    summary: "An eye-opening exploration of why we so consistently misread the people we don't know — and what it costs us.",
  },
];

const leadershipFaces = [
  { label: "Leader Within", desc: "The inner core — self-awareness, values, presence." },
  { label: "Leader in Front", desc: "Setting direction, inspiring vision, leading the way." },
  { label: "Leader Beside", desc: "Collaboration, co-creation, peer leadership." },
  { label: "Leader in the Field", desc: "Hands-on execution, agility, being present in action." },
  { label: "Leader Behind", desc: "Developing others, empowering, letting the team shine." },
];

export default function Home() {
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
            <a href="#organizations">Organizations</a>
            <a href="#personal">Personal Growth</a>
            <a href="#how-we-help">How We Help</a>
            <a href="#resources">Resources</a>
            <a href="#contact">Contact Us</a>
          </nav>

          <a className="btn btn-primary" href="#contact">
            Free Session
          </a>
        </div>
      </header>

      {/* ─── HERO ─── */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="container hero-grid">

          <div>
            <div className="eyebrow">Presence · Awareness · Emotional Intelligence</div>

            <h1 className="title-hero">
              MINDFULNESS
              <br />
              <em style={{ fontStyle: "italic", color: "#5c4e43" }}>LEADERSHIP</em>
            </h1>

            <p className="text-lead" style={{ maxWidth: 580 }}>
              Are you a leader who <strong>inspires</strong>, or a leader who manages a functional team?
              Great leadership is more than keeping a team on track — it's about inspiring people to move
              with purpose. When direction and inspiration come together, teams don't just function — they thrive.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 32 }}>
              <a className="btn btn-primary" href="#contact">
                Schedule a free session →
              </a>
              <a className="btn btn-secondary" href="#how-we-help">
                Explore programs
              </a>
            </div>

            <div className="tagline-strip">
              <span className="tagline-pill">Experiential Workshops</span>
              <span className="tagline-pill">Corporate Leadership</span>
              <span className="tagline-pill">Personal Growth</span>
              <span className="tagline-pill">In-person & Online</span>
              <span className="tagline-pill">Brazil · USA · Portugal</span>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-noise" />
            <div className="hero-card-inner">
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <span className="hero-pill">Presence</span>
                <span className="hero-pill">Awareness</span>
                <span className="hero-pill">Emotional Intelligence</span>
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
                  Performance and humanity are not opposites — they are strongest when developed together.
                </p>
              </div>

              <div className="hero-quad">
                <div className="hero-quad-item">Experiential learning</div>
                <div className="hero-quad-item">Small groups</div>
                <div className="hero-quad-item">Real transformation</div>
                <div className="hero-quad-item">Leadership with conscience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── QUESTION / INTRO ─── */}
      <section className="section" style={{ paddingTop: 80 }}>
        <div className="container">
          <div className="section-label">
            <div className="eyebrow">The Question</div>
            <div className="section-label-line" />
          </div>

          <div className="grid-2" style={{ alignItems: "start", gap: 60 }}>
            <div>
              <h2 className="title-xl">
                Are you a leader who inspires — or one who manages?
              </h2>
            </div>
            <div>
              <p className="text-lead">
                Great Leadership is more than keeping a team on track — it's about inspiring people
                to move with purpose. While strong management ensures structure, efficiency, and results,
                true leadership sparks motivation and brings out the best in others.
              </p>
              <p className="text-body" style={{ marginTop: 20 }}>
                When direction and inspiration come together, teams don't just function — they <em>thrive.</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY DIFFERENT ─── */}
      {/* ─── SPLIT: PERSONAL + CORPORATE → CONVERGENCE ─── */}
      <section id="personal" className="section">
        <div className="container">
          <div className="section-label">
            <div className="eyebrow">Two Paths, One Vision</div>
            <div className="section-label-line" />
          </div>

          {/* Split grid */}
          <div className="split-two">
            {/* Left: Personal */}
            <div className="split-col">
              <div className="split-header split-personal">
                <span className="split-tag split-tag-personal">Personal Growth</span>
                <h3 className="split-title">Leadership starts from within</h3>
                <p className="split-sub">A journey of self-awareness, presence, and inner transformation.</p>
              </div>
              {[
                { label: "Energetic type", desc: "Understand your natural energy and how you show up." },
                { label: "Superpower identification", desc: "Discover the unique strengths that define your leadership." },
                { label: "Power of words", desc: "Language shapes reality — learn to use it intentionally." },
                { label: "13 energies of space", desc: "Expand awareness of the environments that shape behavior." },
              ].map((item) => (
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
                <span className="split-tag split-tag-corporate">Corporate Leadership</span>
                <h3 className="split-title">Leadership transforms teams</h3>
                <p className="split-sub">Practical tools to lead people, resolve conflict, and build culture.</p>
              </div>
              {[
                { label: "Co-leadership", desc: "Lead alongside peers and multiply collective impact." },
                { label: "Conflict resolution", desc: "Turn tension into a catalyst for growth and alignment." },
                { label: "Anatomy of a team", desc: "Understand what makes teams thrive beyond individual talent." },
                { label: "Behavioral change", desc: "Shift mindset and build lasting change in organizational culture." },
              ].map((item) => (
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
                <p className="merge-side-tag">Personal track</p>
                <div className="merge-items">
                  {["Inner awareness", "Presence & language", "Purpose & values"].map((t) => (
                    <div key={t} className="merge-item">
                      <div className="merge-dot merge-dot-personal" />{t}
                    </div>
                  ))}
                </div>
              </div>
              <div className="merge-side merge-side-right">
                <p className="merge-side-tag">Corporate track</p>
                <div className="merge-items">
                  {["Team dynamics", "Culture & communication", "Sustainable impact"].map((t) => (
                    <div key={t} className="merge-item">
                      <div className="merge-dot merge-dot-corporate" />{t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="merge-bottom">
              <p className="merge-eyebrow">Where both paths meet</p>
              <h3 className="title-md" style={{ margin: "10px 0 12px" }}>The 11-Session Transformation Journey</h3>
              <p className="text-body" style={{ maxWidth: 560, margin: "0 auto 28px" }}>
                Whether you start from within or from your organization, both roads lead to the same destination:
                a leader who inspires trust, drives meaningful change, and brings out the best in others.
              </p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <a className="btn btn-primary" href="#contact">Schedule a free session →</a>
                <a className="btn btn-secondary" href="#how-we-help">Explore programs</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="organizations" className="section" style={{ background: "var(--paper)" }}>
        <div className="container">
          <div className="section-label">
            <div className="eyebrow">Why This Is Different</div>
            <div className="section-label-line" />
          </div>

          <h2 className="title-xl" style={{ maxWidth: 640, marginBottom: 0 }}>
            WHY IS THIS PROGRAM DIFFERENT
          </h2>

          <div className="why-grid">
            <div className="card why-card">
              <div className="why-number">01</div>
              <h3>Not about techniques. About presence.</h3>
              <p className="text-body">
                This isn't a course on leadership skills. It's an invitation to a real encounter
                with how you show up — your energy, your language, your choices.
              </p>
            </div>
            <div className="card why-card">
              <div className="why-number">02</div>
              <h3>Experiential, not theoretical.</h3>
              <p className="text-body">
                Every session is designed so participants don't just learn concepts — they live them.
                Reflection, practice, and real-life application are woven into each encounter.
              </p>
            </div>
            <div className="card why-card">
              <div className="why-number">03</div>
              <h3>Adapted to your reality.</h3>
              <p className="text-body">
                No rigid models. Each program is shaped around the size, goals, and specific challenges
                of your business or personal context.
              </p>
            </div>
            <div className="card why-card">
              <div className="why-number">04</div>
              <h3>Humanity and performance together.</h3>
              <p className="text-body">
                At the core of the work is a simple idea: performance and humanity are not opposites —
                they are strongest when developed together.
              </p>
            </div>
          </div>

          <div className="quote-block" style={{ marginTop: 40 }}>
            <blockquote>
              "My work is not to teach leadership techniques.<br />
              It's to create experiences where you see yourself leading — for real."
            </blockquote>
            <p style={{ marginTop: 16, color: "var(--muted)", fontSize: 14, fontWeight: 500 }}>
              — Reinaldo Catarino
            </p>
          </div>
        </div>
      </section>

      {/* ─── HOW WE HELP / PROGRAMS ─── */}
      <section id="how-we-help" className="section">
        <div className="container">
          <div className="section-label">
            <div className="eyebrow">How We Help</div>
            <div className="section-label-line" />
          </div>

          <div style={{ maxWidth: 700, marginBottom: 0 }}>
            <h2 className="title-xl">Programs & Approaches</h2>
            <p className="text-lead">
              Each format is designed to meet you where you are — and take you somewhere new.
            </p>
          </div>

          <div className="program-grid">
            {workshops.map((w) => (
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
      <section id="personal" className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="session-cta">
            <div className="eyebrow" style={{ color: "rgba(255,255,255,0.4)" }}>Signature Program</div>
            <h2 className="title-xl" style={{ color: "white", marginTop: 14, maxWidth: 620 }}>
              The 11-Session Transformation Journey
            </h2>
            <p className="text-lead" style={{ color: "rgba(255,255,255,0.7)", maxWidth: 560, margin: "20px 0 36px" }}>
              This is a dedicated path to becoming a mindful leader who inspires trust and drives
              sustainable impact. Designed to redefine the architecture of your leadership — beyond
              surface-level management.
            </p>

            <div className="grid-3" style={{ gap: 14, marginBottom: 36 }}>
              {[
                "11 structured sessions",
                "Individual or small group",
                "In-person or online",
                "Free assessment session",
                "Personal & professional application",
                "Ongoing guidance & depth",
              ].map((item) => (
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

            <a href="#contact" className="btn" style={{
              background: "white",
              color: "#141210",
              fontWeight: 600,
            }}>
              Schedule a free assessment session →
            </a>
          </div>
        </div>
      </section>

      {/* ─── LEADERSHIP MAP ─── */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-label">
            <div className="eyebrow">Framework</div>
            <div className="section-label-line" style={{ background: "rgba(255,255,255,0.08)" }} />
          </div>

          <div className="grid-2" style={{ alignItems: "start", gap: 60 }}>
            <div>
              <h2 className="title-xl" style={{ color: "white" }}>
                The Map of Modern Leadership
              </h2>
              <p className="text-lead">
                A more dynamic leadership approach recognizes that leadership is not fixed in one
                position. By moving fluidly among the 5 faces of Leadership, a leader responds to
                the needs of the moment and the strengths of the group.
              </p>
              <p className="text-body" style={{ marginTop: 16 }}>
                The result is not just a team that follows directions — but one that contributes,
                evolves, and thrives together.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {leadershipFaces.map((face) => (
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
            <div className="eyebrow">About Reinaldo</div>
            <div className="section-label-line" />
          </div>

          <div className="grid-2" style={{ alignItems: "start", gap: 60 }}>
            <div>
              <h2 className="title-xl">
                Facilitator.<br />
                <em style={{ fontStyle: "italic", color: "var(--accent)" }}>Leadership thinker.</em>
              </h2>
            </div>
            <div>
              <p className="text-lead">
                Reinaldo Catarino is a facilitator and leadership thinker dedicated to helping individuals
                and teams perform at their best — without losing sight of what makes us human.
              </p>
              <p className="text-body" style={{ marginTop: 18 }}>
                His work sits at the intersection of <strong>self-leadership, teamwork, and practical execution</strong>,
                translating complex ideas into simple, actionable tools that drive real results. With a focus
                on experiential learning, Reinaldo creates spaces where people don't just learn concepts — they live them.
              </p>
              <p className="text-body" style={{ marginTop: 18 }}>
                Rather than prescribing rigid models, he believes leadership is dynamic: the ability to adapt,
                respond, and serve the needs of both the individual and the group.
              </p>
              <div style={{ marginTop: 28, padding: "20px 24px", background: "rgba(122,101,82,0.08)", borderRadius: 18 }}>
                <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 22, fontWeight: 500, fontStyle: "italic", color: "#2e2520", lineHeight: 1.5, margin: 0 }}>
                  "Performance and humanity are not opposites — they are strongest when developed together."
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
            <div className="eyebrow">Resources</div>
            <div className="section-label-line" />
          </div>

          <div style={{ maxWidth: 700 }}>
            <h2 className="title-xl">Reading list for the leadership journey.</h2>
            <p className="text-lead">
              A curated selection — not just recommendations, but doorways into the themes that run
              through Reinaldo's work: courage, awareness, communication, meaning, and presence.
            </p>
          </div>

          <div className="books-grid">
            {books.map((book) => (
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
            <div className="eyebrow">Contact Us</div>
            <div className="section-label-line" />
          </div>

          <div className="grid-2" style={{ alignItems: "start", gap: 60 }}>
            <div>
              <h2 className="title-xl">
                Schedule a free assessment session.
              </h2>
              <p className="text-lead">
                The first session is the gateway — to understand your context, your moment,
                and which journey makes the most sense for you.
              </p>

              <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 18 }}>
                {[
                  { label: "Format", value: "In-person or online" },
                  { label: "Regions", value: "Brazil, United States & Portugal" },
                  { label: "Email", value: "contato@reinaldocatarino.com" },
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
                <input className="input" type="text" placeholder="Your name" />
                <input className="input" type="email" placeholder="Your email" />
                <select className="select" defaultValue="">
                  <option value="" disabled>I'd like to talk about</option>
                  <option>Corporate Leadership</option>
                  <option>Personal Growth</option>
                  <option>11-Session Program</option>
                  <option>Experiential Workshop</option>
                  <option>Team Development</option>
                </select>
                <textarea
                  className="textarea"
                  placeholder="Briefly describe your situation, challenge, or interest."
                />
                <button type="submit" className="btn btn-primary" style={{ width: "100%", minHeight: 56 }}>
                  Send request
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
            <div className="text-muted" style={{ fontSize: 13, marginTop: 2 }}>Mindfulness Leadership</div>
          </div>

          <div style={{ display: "flex", gap: 28, fontSize: 13, color: "var(--muted)" }}>
            <a href="#organizations">Organizations</a>
            <a href="#personal">Personal Growth</a>
            <a href="#how-we-help">Programs</a>
            <a href="#resources">Resources</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="text-muted" style={{ fontSize: 13 }}>
            © 2026 Reinaldo Catarino
          </div>
        </div>
      </footer>

    </main>
  );
}