import React from "react";
import "./Calculadora.css";
import { useState } from "react";
import Navbar2 from "../Navbar2/Navbar2";

    const Calculadora = () => {
      const [custo, setCusto] = useState('');
      const [notaFiscal, setNotaFiscal] = useState('');
      const [despesas, setDespesas] = useState('');
      const [frete, setFrete] = useState('');
      const [tarifa, setTarifa] = useState('');
      const [margemLucro, setMargemLucro] = useState('');
      // const [resultado, setResultado] = useState(0);
      const [resultadoLucro, setResultadoLucro] = useState(0.0);

//////////////////////////////////////////////////

      const [btnstate, setBtnstate] = useState('false');

        const click = () => {
          setBtnstate(btnstate => !btnstate);
        }

        let toggleClassCheck = btnstate ? ' active' : '';

        // if (toggleClassCheck === 'btnstate' ){
        //   setActive(' active');
        // } else setActive('');


      const calcular = (event) => {

        event.preventDefault();

        
          const custoTotal = 100 / (100 - (parseFloat(despesas) + parseFloat(notaFiscal) + parseFloat(tarifa) + parseFloat(margemLucro)));

          const precoVenda = custoTotal * parseFloat(custo) + parseFloat(frete);

          const resultadoLucro =  precoVenda * (parseFloat(margemLucro)/ 100); 

          setResultadoLucro(resultadoLucro.toFixed(2));

      };

      const limpa = (event) => {

        event.preventDefault();

        setResultadoLucro(0);

      }


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
              <p>Custo do produto:</p>

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
              <p>Imposto NF-E:</p>

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
              <p>Despesas de venda:</p>

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
              <p>Tarifa do anúncio:</p>

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
              <p>Valor do frete:</p>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    R$
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
              <p>Margem de lucro:</p>

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
            onClick={limpa}>
            Limpar
          </button>
        </div>
        </form>

        <div className={`resultados${toggleClassCheck}`} >
          <div className="res" id="1">
            <h3>Preço da venda</h3>
            <h2 className="lucroLiquido">$1234</h2>
          </div>

          <div className="res">
            <h3>Lucro por venda</h3>
            <h2 className="lucroLiquido" id="2">$
              {resultadoLucro}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculadora;
