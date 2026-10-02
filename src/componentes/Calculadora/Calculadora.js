import React, { useState } from "react";
import "./Calculadora.css";
import Navbar2 from "../Navbar2/Navbar2";
import { useI18n } from "../../i18n";
import { CalcField, CalcTitle, CalcActions, CalcResults } from "./CalcParts";

const Calculadora = () => {
  const { t } = useI18n();
  const c = t.calc;

  const [custo, setCusto] = useState("");
  const [notaFiscal, setNotaFiscal] = useState("");
  const [despesas, setDespesas] = useState("");
  const [frete, setFrete] = useState("");
  const [tarifa, setTarifa] = useState("");
  const [margemLucro, setMargemLucro] = useState("");
  const [resultado, setResultado] = useState(0.0);
  const [resultadoLucro, setResultadoLucro] = useState(0.0);

  const calcular = (event) => {
    event.preventDefault();

    const C = parseFloat(custo) || 0; // custo do produto
    const D = parseFloat(despesas) || 0; // despesas de venda (R$)
    const NF = parseFloat(notaFiscal) || 0; // imposto NF-e (%)
    const COM = parseFloat(tarifa) || 0; // comissão da categoria (Clássico/Premium)
    const FRETE = parseFloat(frete) || 0; // frete pago pelo vendedor (R$)
    const M = parseFloat(margemLucro) || 0; // margem de lucro desejada (%)

    // Preço de venda = (custos fixos) / (1 - somatório das porcentagens)
    const denom = 1 - (NF + COM + M) / 100;
    if (denom <= 0) {
      setResultado("0.00");
      setResultadoLucro("0.00");
      return;
    }

    // Custo fixo do Mercado Livre para itens de baixo valor. Desde 02/03/2026 é
    // variável (peso, dimensões e faixa de preço); usamos ~R$ 6,75 para itens
    // com preço abaixo de R$ 79 como aproximação. O valor fixo é somado ao custo
    // e "elevado" pelo divisor para preservar a margem.
    let fixo = 0;
    let precoVenda = (C + D + FRETE) / denom;
    for (let i = 0; i < 4; i++) {
      fixo = precoVenda < 79 ? 6.75 : 0;
      const novo = (C + D + FRETE + fixo) / denom;
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
    setFrete("");
    setTarifa("");
    setMargemLucro("");
    setResultado(0);
    setResultadoLucro(0);
  };

  return (
    <>
      <Navbar2 />

      <div className="calculadora">
        <CalcTitle name={c.ml.name} />

        <form className="boxbox" onSubmit={calcular}>
          <div className="box">
            <CalcField id="custo" label={c.cost} tip={c.costTip} prefix="R$" value={custo} onChange={setCusto} required />
            <CalcField id="imposto" label={c.tax} tip={c.taxTip} prefix="%" value={notaFiscal} onChange={setNotaFiscal} required />
            <CalcField id="despesas" label={c.expenses} tip={c.expensesTip} prefix="R$" value={despesas} onChange={setDespesas} required />
            <CalcField id="classico" label={c.listingFee} tip={c.ml.listingFeeTip} prefix="%" value={tarifa} onChange={setTarifa} required />
            <CalcField id="frete" label={c.ml.shipping} tip={c.ml.shippingTip} prefix="R$" value={frete} onChange={setFrete} />
            <CalcField
              id="margemLucro"
              label={c.margin}
              tip={
                <>
                  {c.marginTip}
                  <br />
                  {c.ml.marginNote}
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

        <p className="calc-disclaimer">{c.ml.disclaimer}</p>
      </div>
    </>
  );
};

export default Calculadora;
