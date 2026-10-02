import "./Ferramentas.css";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { tapHover } from "../../lib/motion";
import { Reveal, RevealGroup } from "../../lib/Reveal";
import { useI18n } from "../../i18n";

const TOOLS = [
  { key: "ml", to: "/Calculadora", logo: "/img/mercadoLivre.png", name: "Mercado Livre" },
  { key: "shopee", to: "/CalculadoraShopee", logo: "/img/shoope.png", name: "Shopee" },
  { key: "amazon", to: "/CalculadoraAmazon", logo: "/img/logoamazon.png", name: "Amazon" },
];

function Ferramentas() {
  const { t } = useI18n();

  return (
    <section className="features section" id="ferramentas">
      <div className="container">
        <Reveal className="features__head">
          <span className="kicker">{t.tools.kicker}</span>
          <h2 className="section-title">
            {t.tools.titleA}
            <span className="grad-text">{t.tools.titleHi}</span>
          </h2>
          <p className="section-lead">
            {t.tools.lead}
          </p>
        </Reveal>

        <RevealGroup className="features__grid">
          {TOOLS.map((tool) => (
            <motion.div key={tool.name} {...tapHover} className="fcard-motion">
              <Link to={tool.to} className="fcard">
                <span className="fcard__glow" aria-hidden="true" />
                <span className="fcard__logo">
                  <img src={tool.logo} alt={tool.name} loading="lazy" />
                </span>
                <h3 className="fcard__title">{tool.name}</h3>
                <p className="fcard__desc">{t.tools[tool.key]}</p>
                <span className="fcard__cta">
                  {t.tools.open}
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
