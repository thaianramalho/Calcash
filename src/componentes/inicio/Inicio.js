import './Inicio.css'
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCalculator, faSackDollar} from '@fortawesome/free-solid-svg-icons';



function Inicio(){
    return(
      
        <div id='principal'>

          <div className='textos'>

            <div id='title'>
              <p id='blue'>
              Calc <FontAwesomeIcon id='calculator' icon={faCalculator} />
            
              <br></br>
              <span id='green'>Cash <FontAwesomeIcon id='sack' icon={faSackDollar}/></span>
              </p>
            </div>
                <div id='textoComum'>
            <p>Possuímos ferramentas que irão facilitar seu dia a dia nos cálculos de lucro por venda em sua Loja Virtual do <span id='green'>Mercado Livre, Shopee, Amazon, entre outros!</span></p>
                </div>
          </div>

          <div className='calculadora-toda'>
            <div className='calcu-som'>
              <img src='/img/sombra300.png'/>
            </div>
            <div className='calcu'>
              <img src='/img/menorCalc.png'/>
            </div>
          </div>

          


          <div id='desenhosvg'></div>
          
      </div>
    )
}

export default Inicio