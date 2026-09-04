import "./ajuda.css";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EASE } from "../../lib/motion";
import { Reveal } from "../../lib/Reveal";

const FAQS = [
  {
    q: "O que é o Calcash?",
    a: "O Calcash é uma calculadora de lucro para vendedores de Mercado Livre, Shopee e Amazon. A partir do custo do produto, impostos, taxas e frete, ele mostra o preço de venda ideal e o lucro líquido de cada venda — ajudando você a precificar sem sair no prejuízo.",
  },
  {
    q: "Como uso as calculadoras?",
    a: "Escolha a calculadora do marketplace desejado na seção Ferramentas, preencha os campos nas unidades indicadas (R$, % ou UN) e informe a margem de lucro que quer obter. Ao calcular, você vê à esquerda o preço para cadastrar na plataforma e à direita o valor que vai receber por venda. Em caso de dúvida, passe o mouse no ícone (i) de cada campo.",
  },
  {
    q: "É gratuito de verdade?",
    a: "Sim, 100%. As três calculadoras são totalmente gratuitas e ilimitadas, sem cadastro, sem login e sem cobrança. O Calcash é uma ferramenta livre para ajudar vendedores a precificar melhor.",
  },
  {
    q: "O cálculo considera as taxas de cada plataforma?",
    a: "Considera. Cada calculadora aplica as regras da sua plataforma — tarifa Clássico/Premium e o custo fixo de itens abaixo de R$79 no Mercado Livre, comissões da Shopee e da Amazon — além de imposto de nota fiscal, despesas de venda e frete que você informar.",
  },
  {
    q: "Os valores substituem uma contabilidade?",
    a: "O Calcash é uma ferramenta de apoio à precificação e estimativa de lucro. Ele é ótimo para decidir preços no dia a dia, mas não substitui a orientação de um contador para questões fiscais do seu negócio.",
  },
];

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
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq section" id="faq">
      <div className="container faq__container">
        <Reveal className="faq__head">
          <span className="kicker">Ajuda</span>
          <h2 className="section-title">
            Perguntas <span className="grad-text">frequentes</span>
          </h2>
          <p className="section-lead">
            Tudo o que você precisa saber antes de calcular sua primeira venda.
          </p>
        </Reveal>

        <Reveal className="faq__list">
          {FAQS.map((f, i) => (
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
