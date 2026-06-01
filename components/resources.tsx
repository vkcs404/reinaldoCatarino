export function Resources() {
  const items = [
    {
      title: "Livros",
      text: "Recomendações para liderança, presença, comunicação e autoconhecimento.",
    },
    {
      title: "Filmes",
      text: "Narrativas que inspiram reflexão sobre coragem, equipes e propósito.",
    },
    {
      title: "Palestras",
      text: "Conteúdos selecionados para ampliar visão e repertório humano.",
    },
    {
      title: "Boas histórias",
      text: "Histórias que ajudam a dar sentido, direção e profundidade à prática.",
    },
  ];

  return (
    <section id="resources" className="section-space">
      <div className="container-site">
        <div className="max-w-3xl">
          <div className="eyebrow">Resources</div>
          <h2 className="section-title">Um espaço para repertório e inspiração.</h2>
          <p className="section-copy">
            Além dos workshops e programas, o site também pode reunir conteúdos
            curados para aprofundar reflexão e ampliar referências.
          </p>
        </div>

        <div className="mt-10 grid-4">
          {items.map((item) => (
            <div key={item.title} className="card p-6">
              <h3 className="text-2xl font-bold tracking-[-0.03em]">
                {item.title}
              </h3>
              <p className="mt-4 text-black/65 leading-7">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}