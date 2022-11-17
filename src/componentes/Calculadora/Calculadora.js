import React from 'react';
import './Calculadora.css';

 function Calculadora() {
    return(
        <>


        <div className='calculadora'>

                <div className='titulo'>
                    <h2>Calculadora <br/> Mercado Livre</h2>
                </div>

                <div className='boxbox'>
                    <div className='box'>
                    
                    <div className='inputs'>
                        <p>Quantidade:</p>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">un.</span>
                                </div>
                                <input type="text" className="form-control" placeholder="Insira o valor" aria-label="Insira o valor" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                       <div className='inputs'>
                        <p>Custo:</p>
                    
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">R$</span>
                                </div>
                                <input type="text" className="form-control" placeholder="Insira o valor" aria-label="Insira o valor" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                         <div className='inputs'>
                        <p>Imposto NF-E:</p>
                    
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">%</span>
                                </div>
                                <input type="text" className="form-control" placeholder="Insira o valor" aria-label="Insira o valor" aria-describedby="basic-addon1"/>
                            </div>
                        </div>

                        <div className='inputs'>
                        <p>Despesas de venda:</p>
                    
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">R$</span>
                                </div>
                                <input type="text" className="form-control" placeholder="Insira o valor" aria-label="Insira o valor" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                        <div className='inputs'>
                        <p>Tarifa (Clássico):</p>
                    
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">%</span>
                                </div>
                                <input type="text" className="form-control" placeholder="Insira o valor" aria-label="Insira o valor" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                         <div className='inputs'>
                        <p>Tarifa (Premium):</p>
                    
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">%</span>
                                </div>
                                <input type="text" className="form-control" placeholder="Insira o valor" aria-label="Insira o valor" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                        <div className='inputs'>
                        <p>Valor do frete:</p>
                    
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">R$</span>
                                </div>
                                <input type="text" className="form-control" placeholder="Insira o valor" aria-label="Insira o valor" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                        <div className='inputs'>
                        <p>Valor do anúncio:</p>
                    
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">R$</span>
                                </div>
                                <input type="text" className="form-control" placeholder="Insira o valor" aria-label="Insira o valor" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                    
                    
                    </div>

                    <div className='botoes'>
                            <button type="button" className="btn btn-primary btn-lg">Calcular</button>
                            <button type="button1" className="btn btn-secondary btn-lg">Limpar</button>
                        </div>
                </div>


                

                  

                    

                
            
        </div>

        </>
    );
 }

 export default Calculadora;
