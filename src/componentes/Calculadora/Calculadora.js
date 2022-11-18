import React from 'react';
import './Calculadora.css';

var quantidade = document.getElementById("quantidade");
var produto = document.getElementById("produto");
var notaFiscal = document.getElementById("imposto");
var despesas = document.getElementById("despesas");
var frete = document.getElementById("frete");
var classico = document.getElementById("classico");
var premium = document.getElementById("premium");
var venda = document.getElementById("venda");
var custo = quantidade * produto;

const valorLimiteTaxa = 79;
const taxaValorSuperior = 0;
const taxaValorInferior = 5;

function calculoAnuncioClassico(custo, notaFiscalPorcentagem, classicoPorcentagem, frete, despesas, venda){
    return custo + notaFiscalPorcentagem + classicoPorcentagem + frete + despesas + validaLimiteDeTaxa(venda);
}

function calculoAnuncioPremium(custo, notaFiscalPorcentagem, premiumPorcentagem, frete, despesas, venda){
    return custo + notaFiscalPorcentagem + premiumPorcentagem + frete + despesas + validaLimiteDeTaxa(venda);
}

function validaLimiteDeTaxa(valorDaVenda){
    if (valorDaVenda < valorLimiteTaxa){
        return taxaValorInferior;
    }
    return taxaValorSuperior;
}

function porcentagem(porcentagem, venda){
    return (porcentagem / 100) * venda;
}

var calculoclassico = calculoAnuncioClassico(custo, porcentagem(notaFiscal,venda), porcentagem(classico, venda), frete, despesas, venda);
var totalclassico = (venda - calculoclassico);

var calculopremium = calculoAnuncioPremium(custo , porcentagem(notaFiscal,venda), porcentagem(premium, venda), frete, despesas, venda);
var totalpremium = (venda - calculopremium);

console.log(totalpremium);
console.log(totalclassico);

 function Calculadora() {
    return(
        <>

        <div className='calculadora'>

                <div className='titulo'>
                    <h2>Calculadora <br/> Mercado Livre</h2>
                </div>

                <form className='boxbox'>
                    <div className='box'>
                    
                    <div className='inputs'>
                        <p>Quantidade:</p>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">un.</span>
                                </div>
                                <input type="text" id='quantidade' className="form-control" placeholder="Insira o valor" aria-label="Insira o valor" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                       <div className='inputs'>
                        <p>Custo do anúncio:</p>
                    
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">R$</span>
                                </div>
                                <input type="text" id='custo' className="form-control" placeholder="Insira o valor" aria-label="Insira o valor" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                         <div className='inputs'>
                        <p>Imposto NF-E:</p>
                    
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">%</span>
                                </div>
                                <input type="text" id='imposto' className="form-control" placeholder="Insira o valor" aria-label="Insira o valor" aria-describedby="basic-addon1"/>
                            </div>
                        </div>

                        <div className='inputs'>
                        <p>Despesas de venda:</p>
                    
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">R$</span>
                                </div>
                                <input type="text" id='despesas' className="form-control" placeholder="Insira o valor" aria-label="Insira o valor" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                        <div className='inputs'>
                        <p>Tarifa (Clássico):</p>
                    
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">%</span>
                                </div>
                                <input type="text" id='classico' className="form-control" placeholder="Insira o valor" aria-label="Insira o valor" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                         <div className='inputs'>
                        <p>Tarifa (Premium):</p>
                    
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">%</span>
                                </div>
                                <input type="text" id='premium' className="form-control" placeholder="Insira o valor" aria-label="Insira o valor" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                        <div className='inputs'>
                        <p>Valor do frete:</p>
                    
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">R$</span>
                                </div>
                                <input type="text" id='frete' className="form-control" placeholder="Insira o valor" aria-label="Insira o valor" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                        <div className='inputs'>
                        <p>Valor do anúncio:</p>
                    
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">R$</span>
                                </div>
                                <input type="text" id='venda' className="form-control" placeholder="Insira o valor" aria-label="Insira o valor" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                    
                    
                    </div>

                    <div className='botoes'>
                            <button type="submit" className="btn btn-primary btn-lg">Calcular</button>
                            <button type="reset" className="btn btn-secondary btn-lg">Limpar</button>
                        </div>
                </form>
       
            
        </div>

        </>
    );
 }

 export default Calculadora;
