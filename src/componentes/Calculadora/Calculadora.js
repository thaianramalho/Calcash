import React from 'react';
import './Calculadora.css';

 function Calculadora() {
    return(
        <>


        <div className='calculadora'>

                <div className='titulo'>
                    <h2>Calculadora <br/> Mercado Livre</h2>
                </div>

                <div className='box'>

                    <div className='inputs'>
                        <p>quantidade:</p>
                        <div className='inputUnidade'>
                            <input placeholder='insira o valor'></input>
                            <span>un</span>
                        </div>
                    </div>

                    <div className='inputs'>
                        <p>quantidade:</p>
                        <div className='inputUnidade'>
                            <input placeholder='insira o valor'></input>
                            <span>un</span>
                        </div>
                    </div>

                    <div className='inputs'>
                        <p>quantidade:</p>
                        <div className='inputUnidade'>
                            <input   placeholder='insira o valor'></input>
                            <span>un</span>
                        </div>
                    </div>

                    

                </div>

            
        </div>

        </>
    );
 }

 export default Calculadora;
