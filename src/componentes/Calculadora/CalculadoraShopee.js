import React, { useState } from "react";
import "./Calculadora.css";
import Navbar2 from "../Navbar2/Navbar2";
import { useI18n } from "../../i18n";
import { CalcField, CalcTitle, CalcActions, CalcResults } from "./CalcParts";

// Tabela de comissão da Shopee Brasil — vigente desde março/2026.
// Comissão (%) + taxa fixa por item variam conforme a faixa de preço de venda.
// Sem teto de comissão; programa de frete grátis obrigatório (já embutido).
// Fonte: Centro de Educação do Vendedor Shopee / seller.shopee.com.br (2026).
const FAIXAS_SHOPEE = [
  { min: 0, max: 7.99, com: 50, fixo: 0 },
  { min: 8, max: 79.99, com: 20, fixo: 4 },
  { min: 80, max: 99.99, com: 14, fixo: 16 },
  { min: 100, max: 199.99, com: 14, fixo: 20 },
  { min: 200, max: Infinity, com: 14, fixo: 26 },
];

const CalculadoraShopee = () => {
  const { t } = useI18n();
  const c = t.calc;

  const [custo, setCusto] = useState("");
  const [notaFiscal, setNotaFiscal] = useState("");
  const [despesas, setDespesas] = useState("");
  const [margemLucro, setMargemLucro] = useState("");
  const [resultado, setResultado] = useState(0.0);
  const [resultadoLucro, setResultadoLucro] = useState(0.0);
  // Guardamos a faixa aplicada (e não o texto) para a nota acompanhar o idioma.
  const [faixa, setFaixa] = useState(null);
  const [erroPercentual, setErroPercentual] = useState(false);

  const calcular = (event) => {
    event.preventDefault();

    const C = parseFloat(custo) || 0;
    const D = parseFloat(despesas) || 0;
    const NF = parseFloat(notaFiscal) || 0;
    const M = parseFloat(margemLucro) || 0;

    // A faixa de comissão depende do preço de venda, que por sua vez depende da
    // faixa. Escolhemos a faixa auto-consistente (aquela cujo preço calculado cai
    // dentro da própria faixa); em bordas, a de menor distância.
    let melhor = null;
    let menorDist = Infinity;
    for (const f of FAIXAS_SHOPEE) {
      const denom = 1 - (NF + f.com + M) / 100;
      if (denom <= 0) continue;
      const P = (C + D + f.fixo) / denom;
      const dist = P < f.min ? f.min - P : P > f.max ? P - f.max : 0;
      if (dist < menorDist) {
        menorDist = dist;
        melhor = { ...f, P };
      }
    }

    if (!melhor) {
      setResultado("0.00");
      setResultadoLucro("0.00");
      setFaixa(null);
      setErroPercentual(true);
      return;
    }

    const precoVenda = melhor.P;
    const lucro = precoVenda * (M / 100);
    setResultado(precoVenda.toFixed(2));
    setResultadoLucro(lucro.toFixed(2));
    setFaixa({ com: melhor.com, fixo: melhor.fixo });
    setErroPercentual(false);
  };

  const limpa = (event) => {
    event.preventDefault();

    setCusto("");
    setNotaFiscal("");
    setDespesas("");
    setMargemLucro("");
    setResultado(0);
    setResultadoLucro(0);
    setFaixa(null);
    setErroPercentual(false);
  };

  const nota = erroPercentual
    ? c.shopee.percentError
    : faixa && c.shopee.applied(faixa.com, faixa.fixo);

  return (
    <>
      <Navbar2 />

      <div className="calculadora">
        <CalcTitle name={c.shopee.name} />

        <form className="boxbox" onSubmit={calcular}>
          <div className="box">
            <CalcField id="custo" label={c.cost} tip={c.costTip} prefix="R$" value={custo} onChange={setCusto} required />
            <CalcField id="imposto" label={c.tax} tip={c.taxTip} prefix="%" value={notaFiscal} onChange={setNotaFiscal} required />
            <CalcField id="despesas" label={c.expenses} tip={c.expensesTip} prefix="R$" value={despesas} onChange={setDespesas} required />
            <CalcField
              id="margemLucro"
              label={c.margin}
              tip={
                <>
                  {c.marginTip}
                  <br />
                  {c.shopee.marginNote}
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

        {nota && <p className="calc-nota">{nota}</p>}

        <p className="calc-disclaimer">
          {c.shopee.disclaimer}{" "}
          <a
            href="https://seller.shopee.com.br/edu/article/26839"
            target="_blank"
            rel="noopener noreferrer"
          >
            {c.shopee.disclaimerLink}
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default CalculadoraShopee;
