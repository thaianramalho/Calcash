import React from 'react';
import Navbar from '../Navbar/Navbar';
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
                        <p>quantidade</p>
                        <input placeholder='insira o valor'></input>
                    </div>

                    <div className='inputs'>
                        <p>quantidade</p>
                        <input placeholder='insira o valor'></input>
                    </div>

                    <div className='inputs'>
                        <p>quantidade</p>
                        <input placeholder='insira o valor'></input>
                    </div>

                    

                </div>

            
        </div>

        </>
    );
 }

 export default Calculadora;
