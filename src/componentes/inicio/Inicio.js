import './Inicio.css'
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCalculator, faSackDollar,} from '@fortawesome/free-solid-svg-icons';



function Inicio(){
    return(
        <div id='principal'>
          <div id='title'>
            <p id='blue'>
            Calc <FontAwesomeIcon id='calculator' icon={faCalculator} />
            
            <br></br>
            <span id='green'>Cash <FontAwesomeIcon id='sack' icon={faSackDollar}/></span>
            </p>
        </div>
        <div id='textoComum'>
          <p>Possuímos ferramentas que irão facilitar seu dia a dia nos<br></br> cálculos de lucro por venda em sua Loja Virtual do<br></br> <span id='green'>Mercado Livre, Shopee, B2W, entre outros!</span></p>
          </div>
          <div id='desenhosvg'>
          <svg width="1367" height="688" viewBox="0 0 1367 688" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 687.5L1021.5 519.494L1366.5 0V687.5H821.5H0Z" fill="#5850FE"/>
</svg>
          </div>
      </div>
    )
}

export default Inicio