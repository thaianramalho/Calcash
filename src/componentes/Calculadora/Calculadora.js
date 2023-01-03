import React from 'react';
import './Calculadora.css';
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';


 export default function Calculadora() {

    const [quantidade, setQuantidade] = useState(0.0);
    const [produto, setProduto] = useState(0.0);
    const [notaFiscal, setNotaFiscal] = useState(0.0);
    const [despesas, setDespesas] = useState(0.0);
    const [frete, setFrete] = useState(0.0);
    const [classico, setClassico] = useState(0.0);
    const [premium, setPremium] = useState(0.0);
    const [venda, setVenda] = useState(0.0);
    const custo = quantidade * produto;
    const [totalClassico, setTotalClassico] = useState(0.0);
    const [totalPremium, setTotalPremium] = useState(0.0);


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

const handleSubmit = () => {

    const calculoclassico = calculoAnuncioClassico(custo, porcentagem(notaFiscal,venda), porcentagem(classico, venda), frete, despesas, venda);
    setTotalClassico(venda - calculoclassico);

    const calculopremium = calculoAnuncioPremium(custo , porcentagem(notaFiscal,venda), porcentagem(premium, venda), frete, despesas, venda);
    setTotalPremium(venda - calculopremium);
    console.log(totalClassico)
    console.log(totalPremium)
}

    return(
        <>

        <Navbar></Navbar>

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
                                <input type="number" id='quantidade' onChange={e=>setQuantidade(e.target.value)} className="form-control" placeholder="Insira o valor" aria-label="Insira o valor" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                       <div className='inputs'>
                        <p>Custo do anúncio:</p>
                    
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">R$</span>
                                </div>
                                <input type="number" id='custo' onChange={e=>setProduto(e.target.value)} className="form-control" placeholder="Insira o valor" aria-label="Insira o valor" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                         <div className='inputs'>
                        <p>Imposto NF-E:</p>
                    
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">%</span>
                                </div>
                                <input type="number" id='imposto' onChange={e=>setNotaFiscal(e.target.value)} className="form-control" placeholder="Insira o valor" aria-label="Insira o valor" aria-describedby="basic-addon1"/>
                            </div>
                        </div>

                        <div className='inputs'>
                        <p>Despesas de venda:</p>
                    
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">R$</span>
                                </div>
                                <input type="number" id='despesas' onChange={e=>setDespesas(e.target.value)} className="form-control" placeholder="Insira o valor" aria-label="Insira o valor" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                        <div className='inputs'>
                        <p>Tarifa (Clássico):</p>
                    
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">%</span>
                                </div>
                                <input type="number" id='classico' onChange={e=>setClassico(e.target.value)} className="form-control" placeholder="Insira o valor" aria-label="Insira o valor" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                         <div className='inputs'>
                        <p>Tarifa (Premium):</p>
                    
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">%</span>
                                </div>
                                <input type="number" id='premium' onChange={e=>setPremium(e.target.value)} className="form-control" placeholder="Insira o valor" aria-label="Insira o valor" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                        <div className='inputs'>
                        <p>Valor do frete:</p>
                    
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">R$</span>
                                </div>
                                <input type="number" id='frete' onChange={e=>setFrete(e.target.value)} className="form-control" placeholder="Insira o valor" aria-label="Insira o valor" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                        <div className='inputs'>
                        <p>Valor do anúncio:</p>
                    
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">R$</span>
                                </div>
                                <input type="number" id='venda' onChange={e => setVenda(e.target.value)} className="form-control" placeholder="Insira o valor" aria-label="Insira o valor" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                    
                    
                    </div>

                    

                </form>

                <div className='resultados'>
                            <div className='esquerda'>
                                <h2>Resultados</h2>
                                <h3>Lucro Liquido(Clássico)</h3>
                                <h2 className='lucroLiquido'>123</h2>
                            </div>
                            <div className='direita'>
                                <h2>Resultados</h2>
                                <h3>Lucro Liquido(Premium)</h3>
                                <h2 className='lucroLiquido'>123</h2>
                            </div>


                        </div>
                    <div className='botoes'>
                            <button type="submit" onClick={handleSubmit} className="btn btn-primary btn-lg">Calcular</button>
                            <button type="reset" className="btn btn-secondary btn-lg">Limpar</button>
                        </div>

                        
       
            
        </div>

        </>
    );
 };
