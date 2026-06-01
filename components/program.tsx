import { CheckCircle2 } from "lucide-react";

export function Program() {
  return (
    <section id="program" className="section-space bg-[#111111] text-white">
      <div className="container-site grid-2 items-start">
        <div>
          <div className="eyebrow text-white/50">Programa Principal</div>
          <h2 className="section-title text-white">
            Jornada de 11 sessões para transformação consistente.
          </h2>
          <p className="text-lg leading-8 text-white/75">
            Um programa desenhado para indivíduos ou pequenos grupos que desejam
            aprofundar consciência, liderança, clareza de direção, linguagem,
            presença e ação.
          </p>
        </div>

        <div className="card bg-white text-black p-8">
          <h3 className="text-2xl font-extrabold tracking-[-0.04em]">
            O programa inclui
          </h3>

          <div className="mt-6 grid gap-4">
            {[
              "11 encontros estruturados",
              "Formato individual ou small group",
              "Presencial ou por vídeo",
              "Sessão inicial gratuita",
              "Aplicação para vida pessoal e contexto profissional",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="text-[--accent]" size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a href="#contact" className="btn-primary">
              Quero agendar a conversa inicial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}