import "./Ferramentas.css";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { tapHover } from "../../lib/motion";
import { Reveal, RevealGroup } from "../../lib/Reveal";

const TOOLS = [
  {
    to: "/Calculadora",
    logo: "/img/mercadoLivre.png",
    name: "Mercado Livre",
    desc: "Tarifa Clássico/Premium, imposto NF-e, frete grátis e o custo fixo de itens abaixo de R$79 — tudo no cálculo.",
  },
  {
    to: "/CalculadoraShopee",
    logo: "/img/shoope.png",
    name: "Shopee",
    desc: "Comissão da plataforma, taxa por item e cupons considerados para você achar o preço que mantém a margem.",
  },
  {
    to: "/CalculadoraAmazon",
    logo: "/img/logoamazon.png",
    name: "Amazon",
    desc: "Comissão por categoria e custos de envio no cálculo, com o lucro líquido por venda em tempo real.",
  },
];

function Ferramentas() {
  return (
    <section className="features section" id="ferramentas">
      <div className="container">
        <Reveal className="features__head">
          <span className="kicker">Ferramentas gratuitas</span>
          <h2 className="section-title">
            Uma calculadora dedicada para cada{" "}
            <span className="grad-text">marketplace</span>
          </h2>
          <p className="section-lead">
            Cada plataforma tem regras próprias de taxa. Escolha a sua, informe
            os dados e calcule quantas vezes quiser — de graça.
          </p>
        </Reveal>

        <RevealGroup className="features__grid">
          {TOOLS.map((t) => (
            <motion.div key={t.name} {...tapHover} className="fcard-motion">
              <Link to={t.to} className="fcard">
                <span className="fcard__glow" aria-hidden="true" />
                <span className="fcard__logo">
                  <img src={t.logo} alt={t.name} loading="lazy" />
                </span>
                <h3 className="fcard__title">{t.name}</h3>
                <p className="fcard__desc">{t.desc}</p>
                <span className="fcard__cta">
                  Abrir calculadora
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

export default Ferramentas;
