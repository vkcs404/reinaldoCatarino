export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[--background]/90 backdrop-blur">
      <div className="container-site flex items-center justify-between py-4">
        <div>
          <div className="text-sm tracking-[0.2em] uppercase text-black/50">
            Mindfulness Leadership
          </div>
          <div className="text-lg font-bold">Reinaldo Catarino</div>
        </div>

        <nav className="hidden gap-6 md:flex text-sm text-black/70">
          <a href="#about">Sobre</a>
          <a href="#corporate">Corporativo</a>
          <a href="#personal">Crescimento Pessoal</a>
          <a href="#program">Programa</a>
          <a href="#resources">Recursos</a>
          <a href="#contact">Contato</a>
        </nav>

        <a href="#contact" className="btn-primary">
          Sessão Gratuita
        </a>
      </div>
    </header>
  );
}