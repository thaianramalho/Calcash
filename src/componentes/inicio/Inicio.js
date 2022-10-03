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
          <svg width="6811" height="3426" viewBox="0 0 6811 3426" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.72168 3428.4L5093.47 2590.8L6813.49 0.830322V3428.4H4096.36H0.72168Z" fill="#5850FE"/>
          </svg>
          </div>
      </div>
    )
}

export default Inicio