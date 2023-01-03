import './Ferramentas.css'
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { } from '@fortawesome/free-solid-svg-icons';


function Ferramentas(){
    return(

        <div className='ferramentas'>

            <div className='titulo'>
                <h2>
                    Ferram<span>entas</span>
                </h2>
            </div>


            <div  className='containerBorda'>
                <div className='container-box'>
                    
                        <div className='boxEtexto'>
                            <a className='link' href="">
                                <div className='box'>
                                    <div className='bg'></div>
                                    <div className='img'> <img src='/img/mercadoLivre.png'></img> </div>
                                </div>
                            </a>
                            <a className='link' href="">
                                <div className='texto'>CALCULADORA <br/> MERCADO LIVRE</div>
                            </a>
                        </div>
                    
                    
                        <div className='boxEtexto'>
                            <a className='link' href="">
                                <div className='box'>
                                    <div className='bg'></div>
                                    <div className='img'> <img src='/img/shoope.png'></img> </div>
                                </div>
                            </a>
                            <a className='link' href="">
                                <div className='texto'>CALCULADORA <br/> SHOPEE</div>
                            </a>
                        </div>
                    


                    <div className='boxEtexto'>
                        <a className='link' href="#">
                            <div className='box'>
                                <div className='bg'></div>
                                <div className='img'> <img src='/img/b2w.png'></img> </div>
                            </div>
                        </a>
                
                        <a className='link'  href="">
                            <div className='texto'>CALCULADORA <br/> B2W</div>
                        </a>
                    </div>
                </div>
            </div>

        </div>

        )
}

export default Ferramentas;