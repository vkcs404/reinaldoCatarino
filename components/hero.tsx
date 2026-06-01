import { ArrowRight, Globe2 } from "lucide-react";

export function Hero() {
  return (
    <section className="section-space">
      <div className="container-site grid-2 items-center">
        <div>
          <div className="eyebrow">Leadership • Presence • Transformation</div>
          <h1 className="section-title max-w-[780px]">
            Liderança com presença, consciência e transformação prática.
          </h1>

          <p className="section-copy max-w-[720px]">
            Reinaldo Catarino conduz workshops experienciais, programas de
            desenvolvimento e jornadas individuais que unem teoria e prática
            para desenvolver líderes, equipes e pessoas em momentos de
            transição, crescimento e mudança.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              Agendar sessão inicial <ArrowRight size={18} />
            </a>
            <a href="#corporate" className="btn-secondary">
              Ver atuação corporativa
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3 text-sm text-black/60">
            <Globe2 size={18} />
            <span>Site preparado para Português e Inglês</span>
          </div>
        </div>

        <div className="card overflow-hidden p-3">
          <div className="rounded-[20px] bg-gradient-to-br from-[#2d2a8c] via-[#5867d8] to-[#b5c0ff] p-8 text-white min-h-[440px] flex flex-col justify-between">
            <div className="text-sm uppercase tracking-[0.2em] text-white/70">
              Assinatura
            </div>

            <div>
              <h2 className="text-4xl md:text-6xl font-black leading-[0.95] tracking-[-0.05em]">
                REINALDO
                <br />
                CATARINO
              </h2>
              <p className="mt-4 max-w-md text-white/85 text-lg leading-relaxed">
                Mindfulness Leadership para ambientes corporativos,
                desenvolvimento humano e crescimento pessoal.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                Workshops experienciais
              </div>
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                Programas para líderes
              </div>
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                Pequenos grupos
              </div>
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                Presencial e online
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}