import "./ProvaSocial.css";
import React from "react";
import { Reveal, RevealGroup } from "../../lib/Reveal";

const STATS = [
  { value: "+12 mil", label: "vendedores usando" },
  { value: "R$ 2,4 mi", label: "em vendas calculadas" },
  { value: "3", label: "marketplaces suportados" },
  { value: "100%", label: "gratuito, sempre" },
];

const QUOTES = [
  {
    text: "Parei de vender no prejuízo sem perceber. Agora só anuncio depois de conferir a margem no Calcash.",
    name: "Amanda R.",
    role: "Loja de acessórios · Mercado Livre",
  },
  {
    text: "A taxa da Shopee sempre me confundia. Em segundos eu vejo o preço certo pra bater 15% de lucro.",
    name: "Diego M.",
    role: "Vendedor · Shopee",
  },
  {
    text: "Uso todo dia pra precificar antes de subir produto na Amazon. E o melhor: sem pagar nada.",
    name: "Carla S.",
    role: "E-commerce · Amazon",
  },
];

function ProvaSocial() {
  return (
    <section className="proof section">
      <div className="container">
        <RevealGroup className="proof__stats">
          {STATS.map((s) => (
            <div className="proof__stat" key={s.label}>
              <span className="proof__value grad-text">{s.value}</span>
              <span className="proof__label">{s.label}</span>
            </div>
          ))}
        </RevealGroup>

        <Reveal className="proof__head">
          <span className="kicker">Prova social</span>
          <h2 className="section-title">
            Quem vende, <span className="grad-text">confia no cálculo</span>
          </h2>
        </Reveal>

        <RevealGroup className="proof__quotes">
          {QUOTES.map((q) => (
            <figure className="quote" key={q.name}>
              <div className="quote__stars" aria-label="5 de 5 estrelas">
                {"★★★★★"}
              </div>
              <blockquote>{q.text}</blockquote>
              <figcaption>
                <span className="quote__name">{q.name}</span>
                <span className="quote__role">{q.role}</span>
              </figcaption>
            </figure>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

export default ProvaSocial;
