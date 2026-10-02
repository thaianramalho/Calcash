import "./ajuda.css";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EASE } from "../../lib/motion";
import { Reveal } from "../../lib/Reveal";
import { useI18n } from "../../i18n";

function FaqItem({ item, isOpen, onToggle, index }) {
  return (
    <div className={`faq__item ${isOpen ? "is-open" : ""}`}>
      <button
        className="faq__q"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${index}`}
      >
        <span>{item.q}</span>
        <motion.span
          className="faq__icon"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: EASE }}
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-panel-${index}`}
            className="faq__panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            <p>{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const Ajuda = () => {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq section" id="faq">
      <div className="container faq__container">
        <Reveal className="faq__head">
          <span className="kicker">{t.faq.kicker}</span>
          <h2 className="section-title">
            {t.faq.titleA}
            <span className="grad-text">{t.faq.titleHi}</span>
          </h2>
          <p className="section-lead">
            {t.faq.lead}
          </p>
        </Reveal>

        <Reveal className="faq__list">
          {t.faq.items.map((f, i) => (
            <FaqItem
              key={f.q}
              item={f}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default Ajuda;
