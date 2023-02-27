import "./Inicio.css";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCalculator, faSackDollar } from "@fortawesome/free-solid-svg-icons";

function Inicio() {
  return (
    <div id="principal">
      <div className="textos">
        <nav id="title">
          <p id="blue">
            Calc <FontAwesomeIcon id="calculator" icon={faCalculator} />
            <br></br>
            <span id="green">
              Cash <FontAwesomeIcon id="sack" icon={faSackDollar} />
            </span>
          </p>
        </nav>
        <div id="textoComum">
          <h2>
            Possuímos ferramentas que irão te auxiliar nos cálculos de lucro por
            venda em sua Loja Virtual do{" "}
            <span id="green">Mercado Livre, Shopee e Amazon!</span>
          </h2>
        </div>
      </div>

      <div className="calculadora-toda">
        <div className="calcu-som">
          <img src="/img/sombra300.png" alt="Sombra da calculadora" />
        </div>
        <div className="calcu">
          <img
            src="/img/menorCalc.png"
            alt="Calcash Calculadora de lucro liquido para lojas virtuais e marketplaces"
          />
        </div>
      </div>

      <div id="desenhosvg"></div>
    </div>
  );
}

export default Inicio;
