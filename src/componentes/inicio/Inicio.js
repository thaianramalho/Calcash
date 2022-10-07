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
            <p>Possuímos ferramentas que irão facilitar seu dia a dia nos cálculos de lucro por venda em sua Loja Virtual do <span id='green'>Mercado Livre, Shopee, B2W, entre outros!</span></p>
                </div>
          </div>

          <div className='calcu-som'>
            <img src='/img/jaj-66.jpg'/>
          </div>

          <div className='calcu'>
            <img src='/img/cortada-calc.png'/>
          </div>

          


          <div id='desenhosvg'></div>
          
      </div>
    )
}

export default Inicio