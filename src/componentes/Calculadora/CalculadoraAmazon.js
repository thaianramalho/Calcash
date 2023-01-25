import React from "react";
import "./Calculadora.css";
import { useState } from "react";
import Navbar2 from "../Navbar2/Navbar2";

const CalculadoraAmazon = () => {
  const [custo, setCusto] = useState("");
  const [notaFiscal, setNotaFiscal] = useState("");
  const [despesas, setDespesas] = useState("");
  const [frete, setFrete] = useState("");
  const [tarifa, setTarifa] = useState("");
  const [margemLucro, setMargemLucro] = useState("");
  const [resultado, setResultado] = useState(0.0);
  const [resultadoLucro, setResultadoLucro] = useState(0.0);

  //////////////////////////////////////////////////

  const [btnstate, setBtnstate] = useState("false");

  const click = () => {
    if (toggleClassCheck === btnstate) {
      setBtnstate(true);
    } else setBtnstate(false);

    // setBtnstate((btnstate) => !btnstate);
  };

  let toggleClassCheck = btnstate ? " active" : "";

  // if (toggleClassCheck === 'btnstate' ){
  //   setActive(' active');
  // } else setActive('');

  const calcular = (event) => {
    event.preventDefault();

    if (frete <= 0.25) {
      setFrete(8.78);
    } else if (frete > 0.25 && frete <= 0.5) {
      setFrete(9.32);
    } else if (frete > 0.5 && frete <= 1) {
      setFrete(10.13);
    } else if (frete > 1 && frete <= 2) {
      setFrete(11.48);
    } else if (frete > 2 && frete <= 3) {
      setFrete(15.53);
    } else if (frete > 3 && frete <= 4) {
      setFrete(16.88);
    } else if (frete > 4 && frete <= 5) {
      setFrete(17.42);
    } else if (frete > 5 && frete <= 6) {
      setFrete(19.58);
    } else if (frete > 6 && frete <= 7) {
      setFrete(20.93);
    } else if (frete > 7 && frete <= 8) {
      setFrete(22.82);
    } else if (frete > 8 && frete <= 9) {
      setFrete(26.33);
    } else if (frete > 9 && frete <= 10) {
      setFrete(31.73);
    } else {
      var freteAlto = (frete - 10) * (2.03)
      setFrete(freteAlto + 31.7)
    }

    const custoTotal =
      100 /
      (100 -
        ((parseFloat(despesas) * 100) / parseFloat(custo) +
          parseFloat(notaFiscal) +
          parseFloat(tarifa) +
          parseFloat(margemLucro)));

    const precoVenda = custoTotal * parseFloat(custo) + parseFloat(frete);

    const resultadoLucro = precoVenda * (parseFloat(margemLucro) / 100);

    let resultado2 = parseFloat(precoVenda);

    if (resultado2 < 79) {
      let resultado =
        resultado2 + 100 / (100 - (5.5 * 100) / parseFloat(custo));
      setResultado(resultado.toFixed(2));
    } else {
      let resultado = resultado2;
      setResultado(resultado.toFixed(2));
    }

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
            Calculadora <br /> Amazon
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

                  <p className="txt" id="amazonLink">
                    Tarifa para anúnciar na plataforma, na plataforma da amazon
                    possui uma tarifa que varia para cada tipo de produto que
                    podem ser checados no site{" "}
                    <a
                      target="_blank"
                      href="https://venda.amazon.com.br/precos"
                    >
                      venda.amazon.com.br/precos
                    </a>
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
                <p>Peso do produto:</p>

                <div className="minor">
                  <span className="i" alt="Minha Figura">
                    i
                  </span>

                  <p className="txt">
                    Favor inserir o peso em Kg (Exemplo: 5.5kg). <br /> OBS: O
                    peso é utilizado para o cálculo do frete com base nos dados
                    fornecidos pela Amazon.
                  </p>
                </div>
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    kg
                  </span>
                </div>
                <input
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

export default CalculadoraAmazon;
