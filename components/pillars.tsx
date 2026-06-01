import { Building2, Sparkles, Users, MessageCircle } from "lucide-react";

export function Pillars() {
  return (
    <section id="about" className="section-space pt-0">
      <div className="container-site">
        <div className="max-w-3xl">
          <div className="eyebrow">Posicionamento</div>
          <h2 className="section-title">Dois pilares, uma visão integrada de liderança.</h2>
          <p className="section-copy">
            O trabalho é estruturado em dois eixos complementares: liderança
            corporativa e crescimento pessoal. Em ambos, a liderança é tratada
            como uma prática viva, relacional e experiencial.
          </p>
        </div>

        <div className="mt-10 grid-2">
          <div id="corporate" className="card p-8">
            <div className="mb-5 inline-flex rounded-full bg-[--accent-soft] p-3 text-[--accent]">
              <Building2 size={22} />
            </div>
            <h3 className="text-3xl font-extrabold tracking-[-0.04em]">
              Liderança Corporativa
            </h3>
            <p className="mt-4 text-black/70 leading-7">
              Desenvolvimento de times, comunicação, cultura, co-liderança e
              transformação comportamental em ambientes de trabalho.
            </p>

            <div className="mt-6 grid gap-3">
              {[
                "Co-liderança",
                "Resolução de conflitos",
                "Anatomia de uma equipe",
                "Transposição cultural",
                "Comunicação no ambiente corporativo",
                "Mudança de comportamento vs. mindset",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-black/8 px-4 py-3 text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div id="personal" className="card p-8">
            <div className="mb-5 inline-flex rounded-full bg-black/5 p-3 text-[--petrol]">
              <Sparkles size={22} />
            </div>
            <h3 className="text-3xl font-extrabold tracking-[-0.04em]">
              Crescimento Pessoal
            </h3>
            <p className="mt-4 text-black/70 leading-7">
              Jornadas de autoconhecimento, consciência energética, linguagem,
              presença e descoberta de superpowers para evolução individual.
            </p>

            <div className="mt-6 grid gap-3">
              {[
                "Tipo energético",
                "As 13 energias do espaço",
                "O poder vibratório das palavras",
                "Identificação de superpowers",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-black/8 px-4 py-3 text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid-3">
          <div className="card p-6">
            <Users className="mb-4 text-[--accent]" />
            <h4 className="text-xl font-bold">Pequenos grupos</h4>
            <p className="mt-3 text-black/65 leading-7">
              Espaços íntimos para aprofundamento, troca e transformação real.
            </p>
          </div>

          <div className="card p-6">
            <MessageCircle className="mb-4 text-[--warm]" />
            <h4 className="text-xl font-bold">Sessão inicial gratuita</h4>
            <p className="mt-3 text-black/65 leading-7">
              Porta de entrada para entendimento do contexto e alinhamento da
              jornada.
            </p>
          </div>

          <div className="card p-6">
            <Sparkles className="mb-4 text-[--petrol]" />
            <h4 className="text-xl font-bold">Teoria + prática</h4>
            <p className="mt-3 text-black/65 leading-7">
              Todo workshop é experiencial: reflexão, vivência e aplicação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}