export function Methodology() {
  return (
    <section className="section-space bg-white/60">
      <div className="container-site grid-2 items-start">
        <div>
          <div className="eyebrow">Metodologia</div>
          <h2 className="section-title">
            Não é só conteúdo. É experiência que move comportamento.
          </h2>
        </div>

        <div className="card p-8">
          <p className="section-copy">
            A proposta de Reinaldo une presença, consciência, observação,
            linguagem e prática aplicada. Em vez de ficar apenas no conceito, o
            processo convida as pessoas a experimentar, sentir, refletir e
            transformar a forma como se relacionam consigo mesmas, com equipes e
            com o ambiente.
          </p>

          <div className="mt-8 grid gap-4">
            {[
              "Experiências práticas como gatilho de consciência",
              "Liderança interna como base da liderança externa",
              "Abordagem adaptável para indivíduos, equipes e grupos",
              "Formato presencial ou por vídeo",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-black/8 px-4 py-4"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}