import './Contatos.css'
import React from 'react';



import { FaWhatsapp } from "react-icons/fa";
import { IoMail } from "react-icons/io5";


function Contatos() {

    return (

        <div className='contato' id='contatos'>
            <div className='titulo'>
                <h2>
                    Cont<span>atos</span>
               </h2>
            </div> 

            {/* whatsapp */}

            <div className='boxes'>
                <div className='box'>
                    <div className='icon'>
                        <FaWhatsapp />
                    </div>
                    <div className='texto1'>
                        <h3>Telefone</h3>
                    </div>
                    <a href="https://api.whatsapp.com/send?phone=5532985148692" target="_blank">
                        <div className='texto2'>
                            <h2>(32) 98514-8692</h2>
                        </div>
                    </a>

                </div>

                {/* email */}


                <div className='box'>
                    <div className='icon'>
                        <IoMail />
                    </div>
                    <div className='texto1'>
                        <h3>E-mail</h3>
                    </div>
                    <div className='texto2'>
                        <a href="mailto:thaianramalho9@gmail.com">
                            <h2>thaianramalho9@gmail.com</h2>
                        </a>
                    </div>

                </div>
            </div>



            <div className='fale-conosco'>
                <a href="https://thaianramalho.com" target="_blank">
                    <button>Visite meu site</button>
                </a>
            </div>




        </div>







    )
}

export default Contatos

