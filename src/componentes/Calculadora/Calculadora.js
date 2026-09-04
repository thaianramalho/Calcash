import React from "react";
import "./Calculadora.css";
import { useState } from "react";
import Navbar2 from "../Navbar2/Navbar2";

const Calculadora = () => {
  const [custo, setCusto] = useState("");
  const [notaFiscal, setNotaFiscal] = useState("");
  const [despesas, setDespesas] = useState("");
  const [frete, setFrete] = useState("");
  const [tarifa, setTarifa] = useState("");
  const [margemLucro, setMargemLucro] = useState("");
  const [resultado, setResultado] = useState(0.0);
  const [resultadoLucro, setResultadoLucro] = useState(0.0);

  const [btnstate, setBtnstate] = useState("false");

  const click = () => {
    if (toggleClassCheck === btnstate) {
      setBtnstate(true);
    } else setBtnstate(false);
  };

  let toggleClassCheck = btnstate ? " active" : "";

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

    const resultadoLucro = precoVenda * (M / 100);
    setResultado(precoVenda.toFixed(2));
    setResultadoLucro(resultadoLucro.toFixed(2));
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
            Calculadora <br /> Mercado Livre
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
                <p>Tarifa do anúncio:</p>

                <div className="minor">
                  <span className="i" alt="Minha Figura">
                    i
                  </span>

                  <p className="txt">
                    Tarifa para anúnciar na plataforma (Clássico ou Premium).
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
                  id="classico"
                  value={tarifa}
                  onChange={(e) => setTarifa(e.target.value)}
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
                <p>Valor do frete:</p>

                <div className="minor">
                  <span className="i" alt="Minha Figura">
                    i
                  </span>

                  <p className="txt">
                    Valor do frete cobrado pela plataforma (Inserir 0 se for por
                    conta do comprador).
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
                  id="frete"
                  value={frete}
                  onChange={(e) => setFrete(e.target.value)}
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
                    OBS: itens com preço abaixo de R$79 têm um custo fixo por
                    unidade (usamos ~R$6,75 como aproximação). Desde 03/2026 esse
                    valor varia por peso e dimensões — confira o exato no
                    Simulador de Custos do seu painel do Mercado Livre.
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

        <p className="calc-disclaimer">
          Valores estimados. A tarifa por vender varia por categoria
          (Clássico/Premium) e o custo por unidade varia por peso e dimensões
          desde 03/2026 — confira o valor exato no Simulador de Custos do seu
          painel de vendedor do Mercado Livre.
        </p>
      </div>
    </>
  );
};

export default Calculadora;
