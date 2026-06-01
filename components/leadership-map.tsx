import Image from "next/image";

export function LeadershipMap() {
  return (
    <section className="section-space">
      <div className="container-site grid-2 items-center">
        <div>
          <div className="eyebrow">Framework</div>
          <h2 className="section-title">Mapa de Liderança</h2>
          <p className="section-copy">
            O framework organiza a liderança em dimensões complementares:
            liderança de frente, de apoio, de retaguarda e de campo, todas
            conectadas ao centro: o líder interno. Esse modelo ajuda a tornar a
            liderança visível, prática e aplicável em diferentes contextos.
          </p>

          <div className="mt-8 grid gap-3">
            {[
              "Líder de Frente",
              "Líder de Apoio",
              "Líder de Retaguarda",
              "Líder de Campo",
              "Centro: Líder Interno",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-black/8 px-4 py-3">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="card overflow-hidden p-4">
          <Image
            src="/leadership-map.png"
            alt="Mapa de Liderança"
            width={1200}
            height={900}
            className="h-auto w-full rounded-[20px]"
            priority
          />
        </div>
      </div>
    </section>
  );
}