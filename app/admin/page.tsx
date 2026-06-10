"use client";

import { useState, useRef } from "react";

// ─── Types ───────────────────────────────────────────────
type Section = "blog" | "books";

interface BlogPost {
  id: string;
  title: string;
  body: string;
  coverUrl: string | null;
  coverName: string;
  createdAt: string;
  published: boolean;
}

interface BookEntry {
  id: string;
  title: string;
  author: string;
  coverUrl: string | null;
  coverName: string;
  opinion: string;
  createdAt: string;
}

// ─── Helpers ─────────────────────────────────────────────
function uid() {
  return Math.random().toString(36).slice(2, 10);
}

function today() {
  return new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

function fileToDataUrl(file: File): Promise<string> {
  return new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => res(r.result as string);
    r.onerror = rej;
    r.readAsDataURL(file);
  });
}

// ─── Sub-components ──────────────────────────────────────

function ImageUpload({
  value,
  name,
  onChange,
  label,
  aspect = "wide",
}: {
  value: string | null;
  name: string;
  onChange: (url: string, name: string) => void;
  label: string;
  aspect?: "wide" | "book";
}) {
  const ref = useRef<HTMLInputElement>(null);

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = await fileToDataUrl(file);
    onChange(url, file.name);
  }

  const isBook = aspect === "book";

  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <div
        onClick={() => ref.current?.click()}
        style={{
          width: isBook ? 160 : "100%",
          height: isBook ? 220 : 200,
          borderRadius: isBook ? 12 : 16,
          border: value ? "1.5px solid rgba(122,101,82,0.25)" : "1.5px dashed rgba(20,18,16,0.18)",
          background: value ? "transparent" : "rgba(20,18,16,0.025)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          overflow: "hidden",
          position: "relative",
          transition: "border-color 0.2s",
        }}
      >
        {value ? (
          <>
            <img src={value} alt="cover" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{
              position: "absolute", inset: 0,
              background: "rgba(0,0,0,0)",
              display: "flex", alignItems: "center", justifyContent: "center",
              opacity: 0, transition: "opacity 0.2s",
              fontSize: 13, color: "white", fontWeight: 500,
            }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "0")}
            >
              <div style={{ background: "rgba(0,0,0,0.55)", padding: "8px 16px", borderRadius: 999, backdropFilter: "blur(4px)" }}>
                Trocar imagem
              </div>
            </div>
          </>
        ) : (
          <div style={{ textAlign: "center", color: "rgba(20,18,16,0.35)", padding: 20 }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>+</div>
            <div style={{ fontSize: 13, lineHeight: 1.5 }}>
              {isBook ? "Capa do livro" : "Imagem de capa"}<br />
              <span style={{ fontSize: 11, opacity: 0.7 }}>JPG, PNG, WEBP</span>
            </div>
          </div>
        )}
        <input ref={ref} type="file" accept="image/*" style={{ display: "none" }} onChange={handleFile} />
      </div>
      {name && (
        <div style={{ marginTop: 6, fontSize: 12, color: "rgba(20,18,16,0.4)" }}>{name}</div>
      )}
    </div>
  );
}

// ─── Styles ──────────────────────────────────────────────
const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(20,18,16,0.45)",
  marginBottom: 8,
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  border: "1px solid rgba(20,18,16,0.12)",
  background: "rgba(255,255,255,0.9)",
  borderRadius: 14,
  fontFamily: '"DM Sans", Arial, sans-serif',
  fontSize: 15,
  color: "#141210",
  outline: "none",
  padding: "0 18px",
  minHeight: 52,
  transition: "border-color 0.2s",
};

const textareaStyle: React.CSSProperties = {
  ...inputStyle,
  minHeight: 220,
  padding: "16px 18px",
  resize: "vertical",
  lineHeight: 1.75,
};

const btnPrimary: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  minHeight: 48,
  padding: "0 24px",
  borderRadius: 999,
  background: "#161412",
  color: "white",
  border: "none",
  cursor: "pointer",
  fontSize: 14,
  fontWeight: 500,
  fontFamily: '"DM Sans", Arial, sans-serif',
  letterSpacing: "0.01em",
  transition: "opacity 0.2s",
};

const btnGhost: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  minHeight: 36,
  padding: "0 14px",
  borderRadius: 999,
  background: "transparent",
  color: "rgba(20,18,16,0.45)",
  border: "1px solid rgba(20,18,16,0.1)",
  cursor: "pointer",
  fontSize: 13,
  fontFamily: '"DM Sans", Arial, sans-serif',
  transition: "all 0.15s",
};

const card: React.CSSProperties = {
  background: "rgba(255,255,255,0.72)",
  border: "1px solid rgba(20,18,16,0.07)",
  borderRadius: 22,
  boxShadow: "0 6px 28px rgba(0,0,0,0.05)",
  backdropFilter: "blur(12px)",
};

// ─── Blog Form ────────────────────────────────────────────
function BlogForm({ onSave }: { onSave: (p: BlogPost) => void }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [coverUrl, setCoverUrl] = useState<string | null>(null);
  const [coverName, setCoverName] = useState("");

  function handleSave() {
    if (!title.trim() || !body.trim()) return;
    onSave({ id: uid(), title, body, coverUrl, coverName, createdAt: today(), published: false });
    setTitle(""); setBody(""); setCoverUrl(null); setCoverName("");
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div>
        <label style={labelStyle}>Título do post</label>
        <input
          style={inputStyle}
          placeholder="Escreva um título marcante..."
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>

      <ImageUpload
        value={coverUrl}
        name={coverName}
        label="Imagem de capa"
        aspect="wide"
        onChange={(url, n) => { setCoverUrl(url); setCoverName(n); }}
      />

      <div>
        <label style={labelStyle}>Conteúdo do post</label>
        <textarea
          style={textareaStyle}
          placeholder="Escreva o conteúdo completo do post aqui..."
          value={body}
          onChange={e => setBody(e.target.value)}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          style={{ ...btnPrimary, opacity: (!title.trim() || !body.trim()) ? 0.4 : 1 }}
          onClick={handleSave}
        >
          Publicar post →
        </button>
      </div>
    </div>
  );
}

// ─── Blog List ────────────────────────────────────────────
function BlogList({ posts, onDelete }: { posts: BlogPost[]; onDelete: (id: string) => void }) {
  if (!posts.length) return (
    <div style={{ textAlign: "center", padding: "60px 0", color: "rgba(20,18,16,0.3)" }}>
      <div style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 32, marginBottom: 8 }}>Nenhum post ainda</div>
      <div style={{ fontSize: 14 }}>Crie o primeiro post acima.</div>
    </div>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {posts.map(p => (
        <div key={p.id} style={{ ...card, display: "flex", gap: 0, overflow: "hidden" }}>
          {p.coverUrl && (
            <div style={{ width: 140, flexShrink: 0 }}>
              <img src={p.coverUrl} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          )}
          <div style={{ padding: "20px 24px", flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
              <h3 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 24, fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.15, color: "#141210", margin: 0 }}>
                {p.title}
              </h3>
              <button style={btnGhost} onClick={() => onDelete(p.id)}>Excluir</button>
            </div>
            <div style={{ fontSize: 12, color: "rgba(20,18,16,0.38)", letterSpacing: "0.06em" }}>{p.createdAt}</div>
            <p style={{ fontSize: 14, color: "rgba(20,18,16,0.55)", lineHeight: 1.7, margin: 0, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
              {p.body}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Book Form ────────────────────────────────────────────
function BookForm({ onSave }: { onSave: (b: BookEntry) => void }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [coverUrl, setCoverUrl] = useState<string | null>(null);
  const [coverName, setCoverName] = useState("");
  const [opinion, setOpinion] = useState("");

  function handleSave() {
    if (!title.trim() || !opinion.trim()) return;
    onSave({ id: uid(), title, author, coverUrl, coverName, opinion, createdAt: today() });
    setTitle(""); setAuthor(""); setCoverUrl(null); setCoverName(""); setOpinion("");
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div>
          <label style={labelStyle}>Título do livro</label>
          <input style={inputStyle} placeholder="Nome do livro..." value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div>
          <label style={labelStyle}>Autor</label>
          <input style={inputStyle} placeholder="Nome do autor..." value={author} onChange={e => setAuthor(e.target.value)} />
        </div>
      </div>

      <ImageUpload
        value={coverUrl}
        name={coverName}
        label="Foto da capa"
        aspect="book"
        onChange={(url, n) => { setCoverUrl(url); setCoverName(n); }}
      />

      <div>
        <label style={labelStyle}>Visão & opinião sobre o livro</label>
        <textarea
          style={{ ...textareaStyle, minHeight: 180 }}
          placeholder="O que este livro representa para você? Como ele se conecta ao seu trabalho com liderança?"
          value={opinion}
          onChange={e => setOpinion(e.target.value)}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          style={{ ...btnPrimary, opacity: (!title.trim() || !opinion.trim()) ? 0.4 : 1 }}
          onClick={handleSave}
        >
          Adicionar livro →
        </button>
      </div>
    </div>
  );
}

// ─── Book List ────────────────────────────────────────────
function BookList({ books, onDelete }: { books: BookEntry[]; onDelete: (id: string) => void }) {
  if (!books.length) return (
    <div style={{ textAlign: "center", padding: "60px 0", color: "rgba(20,18,16,0.3)" }}>
      <div style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 32, marginBottom: 8 }}>Nenhum livro ainda</div>
      <div style={{ fontSize: 14 }}>Adicione o primeiro livro acima.</div>
    </div>
  );

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
      {books.map(b => (
        <div key={b.id} style={{ ...card, padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
          {b.coverUrl ? (
            <div style={{ height: 200, overflow: "hidden" }}>
              <img src={b.coverUrl} alt={b.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          ) : (
            <div style={{ height: 160, background: "rgba(122,101,82,0.07)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 48, color: "rgba(122,101,82,0.25)", fontWeight: 600 }}>📖</div>
            </div>
          )}
          <div style={{ padding: "20px 22px", flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
              <div>
                <h3 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em", color: "#141210", margin: "0 0 3px" }}>
                  {b.title}
                </h3>
                {b.author && (
                  <div style={{ fontSize: 13, color: "rgba(20,18,16,0.45)", fontWeight: 400 }}>{b.author}</div>
                )}
              </div>
              <button style={btnGhost} onClick={() => onDelete(b.id)}>×</button>
            </div>
            <p style={{ fontSize: 14, color: "rgba(20,18,16,0.6)", lineHeight: 1.7, margin: 0, flex: 1 }}>
              {b.opinion}
            </p>
            <div style={{ fontSize: 11, color: "rgba(20,18,16,0.28)", letterSpacing: "0.06em", marginTop: 4 }}>{b.createdAt}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Main Admin Page ──────────────────────────────────────
export default function AdminPage() {
  const [section, setSection] = useState<Section>("blog");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [books, setBooks] = useState<BookEntry[]>([]);

  function addPost(p: BlogPost) { setPosts(prev => [p, ...prev]); }
  function deletePost(id: string) { setPosts(prev => prev.filter(p => p.id !== id)); }
  function addBook(b: BookEntry) { setBooks(prev => [b, ...prev]); }
  function deleteBook(id: string) { setBooks(prev => prev.filter(b => b.id !== id)); }

  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      background: "#f5f1ea",
      fontFamily: '"DM Sans", Arial, sans-serif',
    }}>

      {/* ─── Sidebar ─── */}
      <aside style={{
        width: 240,
        flexShrink: 0,
        background: "#131110",
        display: "flex",
        flexDirection: "column",
        padding: "0 0 32px",
        position: "sticky",
        top: 0,
        height: "100vh",
        overflowY: "auto",
      }}>
        {/* Brand */}
        <div style={{ padding: "32px 28px 28px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ fontSize: 10, letterSpacing: "0.26em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 6 }}>
            Painel
          </div>
          <div style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 22, fontWeight: 600, color: "white", letterSpacing: "-0.03em", lineHeight: 1.15 }}>
            Reinaldo<br />Catarino
          </div>
        </div>

        {/* Nav */}
        <nav style={{ padding: "24px 16px", display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
          {([
            { key: "blog", icon: "✦", label: "Blog" },
            { key: "books", icon: "◈", label: "Livros" },
          ] as { key: Section; icon: string; label: string }[]).map(item => (
            <button
              key={item.key}
              onClick={() => setSection(item.key)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "12px 14px",
                borderRadius: 14,
                border: "none",
                background: section === item.key ? "rgba(255,255,255,0.09)" : "transparent",
                color: section === item.key ? "white" : "rgba(255,255,255,0.42)",
                cursor: "pointer",
                fontSize: 14,
                fontWeight: section === item.key ? 500 : 400,
                fontFamily: '"DM Sans", Arial, sans-serif',
                letterSpacing: "0.01em",
                transition: "all 0.15s",
                textAlign: "left",
              }}
            >
              <span style={{ fontSize: 16, opacity: section === item.key ? 1 : 0.5 }}>{item.icon}</span>
              {item.label}
              {item.key === "blog" && posts.length > 0 && (
                <span style={{
                  marginLeft: "auto",
                  fontSize: 11,
                  background: "rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.6)",
                  borderRadius: 999,
                  padding: "2px 8px",
                  fontWeight: 600,
                }}>
                  {posts.length}
                </span>
              )}
              {item.key === "books" && books.length > 0 && (
                <span style={{
                  marginLeft: "auto",
                  fontSize: 11,
                  background: "rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.6)",
                  borderRadius: 999,
                  padding: "2px 8px",
                  fontWeight: 600,
                }}>
                  {books.length}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Back to site */}
        <div style={{ padding: "0 16px" }}>
          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 14px",
              borderRadius: 14,
              color: "rgba(255,255,255,0.3)",
              fontSize: 13,
              textDecoration: "none",
              transition: "color 0.15s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
          >
            ← Voltar ao site
          </a>
        </div>
      </aside>

      {/* ─── Main content ─── */}
      <main style={{ flex: 1, overflowY: "auto", padding: "48px 56px 80px" }}>

        {/* Section header */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(20,18,16,0.38)", fontWeight: 600, marginBottom: 10 }}>
            {section === "blog" ? "Conteúdo" : "Biblioteca"}
          </div>
          <h1 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: "clamp(40px, 4vw, 64px)", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 0.95, color: "#141210", margin: 0 }}>
            {section === "blog" ? (
              <>Novo <em style={{ fontStyle: "italic", color: "#7a6552" }}>Post</em></>
            ) : (
              <>Novo <em style={{ fontStyle: "italic", color: "#7a6552" }}>Livro</em></>
            )}
          </h1>
        </div>

        {/* Form card */}
        <div style={{ ...card, padding: "36px 40px", marginBottom: 48 }}>
          {section === "blog" ? (
            <BlogForm onSave={addPost} />
          ) : (
            <BookForm onSave={addBook} />
          )}
        </div>

        {/* List header */}
        <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 24 }}>
          <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 28, fontWeight: 600, letterSpacing: "-0.03em", color: "#141210", margin: 0 }}>
            {section === "blog" ? "Posts publicados" : "Livros adicionados"}
          </h2>
          <div style={{ fontSize: 13, color: "rgba(20,18,16,0.38)" }}>
            {section === "blog" ? posts.length : books.length} {section === "blog" ? (posts.length === 1 ? "post" : "posts") : (books.length === 1 ? "livro" : "livros")}
          </div>
        </div>

        {section === "blog" ? (
          <BlogList posts={posts} onDelete={deletePost} />
        ) : (
          <BookList books={books} onDelete={deleteBook} />
        )}
      </main>
    </div>
  );
}