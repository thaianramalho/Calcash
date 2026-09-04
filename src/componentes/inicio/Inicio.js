import "./Inicio.css";
import React from "react";
import { motion } from "framer-motion";
import { EASE } from "../../lib/motion";

const MARKETPLACES = [
  { src: "/img/mercadoLivre.png", alt: "Mercado Livre" },
  { src: "/img/shoope.png", alt: "Shopee" },
  { src: "/img/logoamazon.png", alt: "Amazon" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const up = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

function Inicio() {
  return (
    <header id="inicio" className="hero">
      <div className="hero__glow" aria-hidden="true" />

      <div className="container hero__grid">
        <motion.div
          className="hero__copy"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.span className="kicker" variants={up}>
            Calculadora gratuita para marketplaces
          </motion.span>

          <motion.h1 className="hero__title" variants={up}>
            Saiba o <span className="grad-text">lucro líquido</span> de cada
            venda antes de anunciar.
          </motion.h1>

          <motion.p className="hero__lead" variants={up}>
            Ferramenta 100% gratuita para vendedores: calcula automaticamente
            taxas, impostos e frete do{" "}
            <strong>Mercado Livre, Shopee e Amazon</strong> e mostra o preço
            ideal para você bater a margem que quiser.
          </motion.p>

          <motion.div className="hero__actions" variants={up}>
            <a href="#ferramentas" className="btn btn-primary">
              Calcular agora
            </a>
            <a href="#faq" className="btn btn-ghost">
              Como funciona
            </a>
          </motion.div>

          <motion.div className="hero__trust" variants={up}>
            <span>Compatível com</span>
            <div className="hero__logos">
              {MARKETPLACES.map((m) => (
                <img key={m.alt} src={m.src} alt={m.alt} loading="lazy" />
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          whileHover={{ y: -8 }}
        >
          {/* Mockup glassmorphism — apenas ilustrativo, não é interativo */}
          <div className="hero__mock" aria-hidden="true">
            <div className="hmock__head">
              <span className="hmock__brand">
                Calc<span>cash</span>
              </span>
              <span className="hmock__tag">exemplo</span>
            </div>

            <div className="hmock__field">
              <span className="hmock__label">Custo do produto</span>
              <span className="hmock__value">R$ 50,00</span>
            </div>
            <div className="hmock__field">
              <span className="hmock__label">Imposto (NF-e)</span>
              <span className="hmock__value">8%</span>
            </div>
            <div className="hmock__field">
              <span className="hmock__label">Taxa do marketplace</span>
              <span className="hmock__value">20%</span>
            </div>
            <div className="hmock__field">
              <span className="hmock__label">Frete</span>
              <span className="hmock__value hmock__value--free">Grátis</span>
            </div>
            <div className="hmock__field">
              <span className="hmock__label">Margem de lucro</span>
              <span className="hmock__value">15%</span>
            </div>

            <div className="hmock__result">
              <div className="hmock__res-row">
                <span>Preço de venda</span>
                <strong>R$ 87,72</strong>
              </div>
              <div className="hmock__res-row hmock__res-row--profit">
                <span>Lucro por venda</span>
                <strong>R$ 13,16</strong>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}

export default Inicio;
