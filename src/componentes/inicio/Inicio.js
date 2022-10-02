import './Inicio.css'
import React from 'react';

function Inicio(){
    return(
        <div>
          <div id='title'>
            <p id='blue'>
            Calc <img src='/img/Calculadora.png' id='miniIcone' alt='Calculadora'></img>
            <br></br>
            <span id='green'>Cash </span><img src='/img/Dinheiro.png' id='miniIcone'alt='Dinheiro'></img>
            </p>
        </div>
        <div id='textoComum'>
          <p>Possuímos ferramentas que irão facilitar seu dia a dia nos<br></br> cálculos de lucro por venda em sua Loja Virtual do<br></br> <span id='green'>Mercado Livre, Shopee, B2W, entre outros!</span></p>
          </div>
          <img id='desenhosvg' src='/img/DesenhoSVG.png' alt='calcash'></img>
      </div>
    )
}

export default Inicio