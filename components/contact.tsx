import { Mail, MapPin, Video } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="section-space bg-white/70">
      <div className="container-site grid-2 items-start">
        <div>
          <div className="eyebrow">Contato</div>
          <h2 className="section-title">Agende sua sessão inicial gratuita.</h2>
          <p className="section-copy">
            A sessão inicial funciona como porta de entrada para entender o
            momento, o contexto e a melhor jornada possível. Pode acontecer de
            forma presencial ou por vídeo.
          </p>

          <div className="mt-8 grid gap-4 text-black/70">
            <div className="flex items-center gap-3">
              <Video size={18} />
              <span>Formato presencial ou online</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={18} />
              <span>Atuação no Brasil e nos Estados Unidos</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} />
              <span>contato@reinaldocatarino.com</span>
            </div>
          </div>
        </div>

        <div className="card p-8">
          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Seu nome"
              className="h-14 rounded-2xl border border-black/10 bg-white px-4 outline-none"
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              className="h-14 rounded-2xl border border-black/10 bg-white px-4 outline-none"
            />
            <select className="h-14 rounded-2xl border border-black/10 bg-white px-4 outline-none">
              <option>Quero falar sobre</option>
              <option>Liderança Corporativa</option>
              <option>Crescimento Pessoal</option>
              <option>Programa de 11 sessões</option>
            </select>
            <textarea
              placeholder="Conte brevemente seu momento ou necessidade"
              rows={6}
              className="rounded-2xl border border-black/10 bg-white p-4 outline-none"
            />
            <button type="submit" className="btn-primary w-full">
              Enviar solicitação
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}