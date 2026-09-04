import React from "react";
import "./Calculadora.css";
import { useState } from "react";
import Navbar2 from "../Navbar2/Navbar2";

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
  const [custo, setCusto] = useState("");
  const [notaFiscal, setNotaFiscal] = useState("");
  const [despesas, setDespesas] = useState("");
  const [margemLucro, setMargemLucro] = useState("");
  const [resultado, setResultado] = useState(0.0);
  const [resultadoLucro, setResultadoLucro] = useState(0.0);
  const [taxaAplicada, setTaxaAplicada] = useState("");

  const [btnstate, setBtnstate] = useState("false");

  const click = () => {
    if (toggleClassCheck === btnstate) {
      setBtnstate(true);
    } else setBtnstate(false);
  };

  let toggleClassCheck = btnstate ? " active" : "";

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
      setTaxaAplicada("Some as porcentagens: elas não podem chegar a 100%.");
      return;
    }

    const precoVenda = melhor.P;
    const lucro = precoVenda * (M / 100);
    setResultado(precoVenda.toFixed(2));
    setResultadoLucro(lucro.toFixed(2));
    setTaxaAplicada(
      `Comissão Shopee aplicada: ${melhor.com}% + R$ ${melhor.fixo
        .toFixed(2)
        .replace(".", ",")} de taxa fixa por item.`
    );
  };

  const limpa = (event) => {
    event.preventDefault();

    setCusto("");
    setNotaFiscal("");
    setDespesas("");
    setMargemLucro("");
    setResultado(0);
    setResultadoLucro(0);
    setTaxaAplicada("");
  };

  const textStyle = {
    color: resultadoLucro > 0 ? "#38ae59" : "red",
  };

  const textStyle2 = {
    color: resultado > 0 ? "#38ae59" : "red",
  };

  return (
    <>
      <Navbar2></Navbar2>

      <div className="calculadora">
        <div className="titulo">
          <h2>
            Calculadora <br /> Shopee
          </h2>
        </div>

        <form className="boxbox" onSubmit={calcular}>
          <div className="box">
            <div className="inputs">
              <div className="label">
                <p>Custo do produto:</p>

                <div className="minor">
                  <span className="i" alt="Minha Figura">
                    i
                  </span>

                  <p className="txt">Custo do produto em R$.</p>
                </div>
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    R$
                  </span>
                </div>
                <input
                  pattern="[0-9]*"
                  type="number"
                  id="custo"
                  value={custo}
                  onChange={(e) => setCusto(e.target.value)}
                  required={true}
                  className="form-control"
                  placeholder="Insira o valor"
                  aria-label="Insira o valor"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div className="inputs">
              <div className="label">
                <p>Imposto NF-E:</p>

                <div className="minor">
                  <span className="i" alt="Minha Figura">
                    i
                  </span>

                  <p className="txt">
                    Porcentagem de imposto pago na Nota Fiscal.
                  </p>
                </div>
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    %
                  </span>
                </div>
                <input
                  pattern="[0-9]*"
                  type="number"
                  id="imposto"
                  value={notaFiscal}
                  onChange={(e) => setNotaFiscal(e.target.value)}
                  required={true}
                  className="form-control"
                  placeholder="Insira o valor"
                  aria-label="Insira o valor"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>

            <div className="inputs">
              <div className="label">
                <p>Despesas de venda:</p>

                <div className="minor">
                  <span className="i" alt="Minha Figura">
                    i
                  </span>

                  <p className="txt">
                    Valor gasto com caixas, fitas, plásticos, transporte, entre
                    outros.
                  </p>
                </div>
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    R$
                  </span>
                </div>
                <input
                  pattern="[0-9]*"
                  type="number"
                  id="despesas"
                  value={despesas}
                  onChange={(e) => setDespesas(e.target.value)}
                  required={true}
                  className="form-control"
                  placeholder="Insira o valor"
                  aria-label="Insira o valor"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>

            <div className="inputs">
              <div className="label">
                <p>Margem de lucro:</p>

                <div className="minor">
                  <span className="i" alt="Minha Figura">
                    i
                  </span>

                  <p className="txt">
                    A margem de lucro é o valor em % que você irá receber sobre
                    o valor total da venda. Recomendamos o valor de no mínimo
                    10%.
                    <br />
                    OBS: A comissão da Shopee (% + taxa fixa por item) é aplicada
                    automaticamente conforme a faixa de preço de venda.
                  </p>
                </div>
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    %
                  </span>
                </div>
                <input
                  pattern="[0-9]*"
                  type="number"
                  id="margemLucro"
                  value={margemLucro}
                  onChange={(e) => setMargemLucro(e.target.value)}
                  className="form-control"
                  placeholder="Insira o valor"
                  aria-label="Insira o valor"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
          </div>

          <div className="botoes">
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              onClick={click}
            >
              Calcular
            </button>
            <button
              type="reset"
              className="btn btn-secondary btn-lg"
              onClick={limpa}
            >
              Limpar
            </button>
          </div>
        </form>

        <div className={`resultados${toggleClassCheck}`}>
          <div className="res" id="1">
            <h3>Preço da venda</h3>
            <h2 className="lucroLiquido" style={textStyle}>
              R$ {resultado}
            </h2>
          </div>

          <div className="res">
            <h3>Lucro por venda</h3>
            <h2 className="lucroLiquido2" id="2" style={textStyle2}>
              R$ {resultadoLucro}
            </h2>
          </div>
        </div>

        {taxaAplicada && <p className="calc-nota">{taxaAplicada}</p>}

        <p className="calc-disclaimer">
          Valores estimados com base na tabela de comissões vigente (2026).
          Confira sempre as tarifas oficiais atualizadas no{" "}
          <a
            href="https://seller.shopee.com.br/edu/article/26839"
            target="_blank"
            rel="noopener noreferrer"
          >
            Centro do Vendedor Shopee
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default CalculadoraShopee;
