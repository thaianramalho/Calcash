import "./Inicio.css";
import React from "react";
import { motion } from "framer-motion";
import { EASE } from "../../lib/motion";
import { useI18n } from "../../i18n";

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
  const { t } = useI18n();
  const m = t.hero.mock;

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
            {t.hero.kicker}
          </motion.span>

          <motion.h1 className="hero__title" variants={up}>
            {t.hero.titleA}
            <span className="grad-text">{t.hero.titleHi}</span>
            {t.hero.titleB}
          </motion.h1>

          <motion.p className="hero__lead" variants={up}>
            {t.hero.leadA}
            <strong>{t.hero.leadStrong}</strong>
            {t.hero.leadB}
          </motion.p>

          <motion.div className="hero__actions" variants={up}>
            <a href="#ferramentas" className="btn btn-primary">
              {t.hero.cta}
            </a>
            <a href="#faq" className="btn btn-ghost">
              {t.hero.how}
            </a>
          </motion.div>

          <motion.div className="hero__trust" variants={up}>
            <span>{t.hero.compatible}</span>
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
                Cal<span>cash</span>
              </span>
              <span className="hmock__tag">{m.tag}</span>
            </div>

            <div className="hmock__field">
              <span className="hmock__label">{m.cost}</span>
              <span className="hmock__value">{m.costValue}</span>
            </div>
            <div className="hmock__field">
              <span className="hmock__label">{m.tax}</span>
              <span className="hmock__value">8%</span>
            </div>
            <div className="hmock__field">
              <span className="hmock__label">{m.fee}</span>
              <span className="hmock__value">20%</span>
            </div>
            <div className="hmock__field">
              <span className="hmock__label">{m.shipping}</span>
              <span className="hmock__value hmock__value--free">
                {m.shippingValue}
              </span>
            </div>
            <div className="hmock__field">
              <span className="hmock__label">{m.margin}</span>
              <span className="hmock__value">15%</span>
            </div>

            <div className="hmock__result">
              <div className="hmock__res-row">
                <span>{m.price}</span>
                <strong>{m.priceValue}</strong>
              </div>
              <div className="hmock__res-row hmock__res-row--profit">
                <span>{m.profit}</span>
                <strong>{m.profitValue}</strong>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}

export default Inicio;
