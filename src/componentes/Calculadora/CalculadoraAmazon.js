import React, { useState } from "react";
import "./Calculadora.css";
import Navbar2 from "../Navbar2/Navbar2";
import { useI18n } from "../../i18n";
import { CalcField, CalcTitle, CalcActions, CalcResults } from "./CalcParts";

const AMAZON_FEES_URL = "https://venda.amazon.com.br/precos";
const AMAZON_FEES_LABEL = "venda.amazon.com.br/precos";

// Estimativa da tarifa de envio (DBA) da Amazon Brasil — 2026.
// Itens de baixo valor pagam tarifa fixa por faixa de preço; a partir de R$79
// vale o DBA por peso (estimativa — o valor real varia por estado de origem).
const freteAmazon = (precoVenda, pesoKg) => {
  if (precoVenda < 30) return 4.5;
  if (precoVenda < 79) return 6.75;
  const p = pesoKg || 0;
  if (p <= 0.5) return 20;
  if (p <= 1) return 21;
  if (p <= 2) return 23;
  if (p <= 3) return 26;
  if (p <= 4) return 29;
  if (p <= 5) return 32;
  if (p <= 10) return 40;
  return 40 + (p - 10) * 2.5;
};

const FeesLink = () => (
  <a target="_blank" rel="noopener noreferrer" href={AMAZON_FEES_URL}>
    {AMAZON_FEES_LABEL}
  </a>
);

const CalculadoraAmazon = () => {
  const { t } = useI18n();
  const c = t.calc;

  const [custo, setCusto] = useState("");
  const [notaFiscal, setNotaFiscal] = useState("");
  const [despesas, setDespesas] = useState("");
  const [peso, setPeso] = useState("");
  const [tarifa, setTarifa] = useState("");
  const [margemLucro, setMargemLucro] = useState("");
  const [resultado, setResultado] = useState(0.0);
  const [resultadoLucro, setResultadoLucro] = useState(0.0);

  const calcular = (event) => {
    event.preventDefault();

    const C = parseFloat(custo) || 0;
    const D = parseFloat(despesas) || 0;
    const NF = parseFloat(notaFiscal) || 0;
    const COM = parseFloat(tarifa) || 0; // comissão por categoria (10%–15%)
    const PESO = parseFloat(peso) || 0;
    const M = parseFloat(margemLucro) || 0;

    const denom = 1 - (NF + COM + M) / 100;
    if (denom <= 0) {
      setResultado("0.00");
      setResultadoLucro("0.00");
      return;
    }

    // O frete depende da faixa de preço/peso, que depende do preço — iteramos.
    let frete = 0;
    let precoVenda = (C + D) / denom;
    for (let i = 0; i < 5; i++) {
      frete = freteAmazon(precoVenda, PESO);
      const novo = (C + D + frete) / denom;
      if (Math.abs(novo - precoVenda) < 0.01) {
        precoVenda = novo;
        break;
      }
      precoVenda = novo;
    }

    const lucro = precoVenda * (M / 100);
    setResultado(precoVenda.toFixed(2));
    setResultadoLucro(lucro.toFixed(2));
  };

  const limpa = (event) => {
    event.preventDefault();

    setCusto("");
    setNotaFiscal("");
    setDespesas("");
    setPeso("");
    setTarifa("");
    setMargemLucro("");
    setResultado(0);
    setResultadoLucro(0);
  };

  return (
    <>
      <Navbar2 />

      <div className="calculadora">
        <CalcTitle name={c.amazon.name} />

        <form className="boxbox" onSubmit={calcular}>
          <div className="box">
            <CalcField id="custo" label={c.cost} tip={c.costTip} prefix="R$" value={custo} onChange={setCusto} required />
            <CalcField id="imposto" label={c.tax} tip={c.taxTip} prefix="%" value={notaFiscal} onChange={setNotaFiscal} required />
            <CalcField id="despesas" label={c.expenses} tip={c.expensesTip} prefix="R$" value={despesas} onChange={setDespesas} required />
            <CalcField
              id="classico"
              label={c.listingFee}
              tip={
                <>
                  {c.amazon.listingFeeTipA} <FeesLink />
                </>
              }
              prefix="%"
              value={tarifa}
              onChange={setTarifa}
              required
            />
            <CalcField
              id="peso"
              label={c.amazon.weight}
              tip={
                <>
                  {c.amazon.weightTip} <br /> {c.amazon.weightNote}
                </>
              }
              prefix="kg"
              value={peso}
              onChange={setPeso}
            />
            <CalcField
              id="margemLucro"
              label={c.margin}
              tip={
                <>
                  {c.marginTip}
                  <br />
                  {c.amazon.marginNote}
                </>
              }
              prefix="%"
              value={margemLucro}
              onChange={setMargemLucro}
            />
          </div>

          <CalcActions onClear={limpa} />
        </form>

        <CalcResults price={resultado} profit={resultadoLucro} />

        <p className="calc-disclaimer">
          {c.amazon.disclaimerA} <FeesLink />.
        </p>
      </div>
    </>
  );
};

export default CalculadoraAmazon;
