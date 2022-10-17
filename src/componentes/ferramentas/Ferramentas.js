import './Ferramentas.css'
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { } from '@fortawesome/free-solid-svg-icons';


function Ferramentas(){
    return(

        <div className='ferramentas'>

            <div className='titulo'>
                <h2>
                    FERRAM<span>ENTAS</span>
                </h2>
            </div>


            <div className='container-box'>

                <div className='boxEtexto'>
                    <div className='box'>
                        <div className='bg'></div>
                    
                        <div className='img'> <img src='/img/mercadoLivre.png'></img> </div>

                    </div>

                    
                    <div className='texto'>CALCULADORA <br/> MERCADO LIVRE</div>


                </div>



                <div className='boxEtexto'>
                    <div className='box'>
                        <div className='bg'></div>
                    
                        <div className='img'> <img src='/img/shoope.png'></img> </div>

                    </div>

                    
                    <div className='texto'>CALCULADORA <br/> SHOPEE</div>


                </div>



                <div className='boxEtexto'>
                    <div className='box'>
                        <div className='bg'></div>
                    
                        <div className='img'> <img src='/img/b2w.png'></img> </div>

                    </div>

                    
                    <div className='texto'>CALCULADORA <br/> B2W</div>


                </div>




            </div>

        </div>

        )
}

export default Ferramentas