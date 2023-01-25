import React from "react";
import "./Calculadora.css";
import { useState } from "react";
import Navbar2 from "../Navbar2/Navbar2";

const CalculadoraShopee = () => {
  const [custo, setCusto] = useState("");
  const [notaFiscal, setNotaFiscal] = useState("");
  const [despesas, setDespesas] = useState("");
  const [frete, setFrete] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [tarifa, setTarifa] = useState(14);
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

  const Frete = () => {
    if (isChecked == false) {
      setFrete(6);
    } else {
      setFrete(0);
    }
  };

  const calcular = (event) => {
    event.preventDefault();

    const custoTotal =
      100 /
      (100 -
        ((parseFloat(despesas) * 100) / parseFloat(custo) +
          parseFloat(notaFiscal) +
          parseFloat(tarifa) +
          parseFloat(frete) +
          parseFloat(margemLucro)));

    const precoVenda = custoTotal * parseFloat(custo);

    const resultadoLucro = precoVenda * (parseFloat(margemLucro) / 100);

    const resultado = parseFloat(precoVenda);

    setResultado(resultado.toFixed(2));

    setResultado(resultado.toFixed(2));

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
                <p>Tarifa do anúncio:</p>

                <div className="minor">
                  <span className="i" alt="Minha Figura">
                    i
                  </span>

                  <p className="txt">Tarifa da plataforma (14% é o padrão).</p>
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
                <div class="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    checked={isChecked}
                    onChange={() => (setIsChecked(!isChecked), Frete())}
                  />
                </div>
                <div className="minor">
                  <span className="i" alt="Minha Figura">
                    i
                  </span>

                  <p className="txt">
                    Ative o botão caso o anúncio participe do programa de frete
                    grátis da plataforma. Caso contrário, deixe desativado.
                    <br />
                    OBS: 6% é o valor cobrado.
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
                  id="frete"
                  disabled={!isChecked}
                  value={frete}
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
                    OBS: Produtos com preço de venda abaixo de R$79 reais
                    possuem um custo fixo adicional de R$5,50.
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
      </div>
    </>
  );
};

export default CalculadoraShopee;
