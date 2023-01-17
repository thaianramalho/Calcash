import React from 'react';
import './Calculadora.css';
import { useState } from 'react';
import Navbar2 from '../Navbar2/Navbar2';



const Custo = (custo, setCusto) => {
    return (
        <div className='inputs'>
            <p>Custo do produto:</p>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">R$</span>
                </div>
                <input type="number" id='custo' value={custo} min={0} onChange={e => setCusto(e.target.value)} className="form-control" placeholder="Insira o valor" aria-label="Insira o valor" aria-describedby="basic-addon1" />
            </div>
        </div>
    )
}

const Imposto = (notaFiscal, setNotaFiscal) => {
    return (
        <div className='inputs'>
            <p>Imposto NF-E:</p>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">%</span>
                </div>
                <input type="number" id='imposto' value={notaFiscal} min={0} onChange={e => setNotaFiscal(e.target.value)} className="form-control" placeholder="Insira o valor" aria-label="Insira o valor" aria-describedby="basic-addon1" />
            </div>
        </div>
    )
}

const Despesas = (despesas, setDespesas) => {
    return (
        <div className='inputs'>
            <p>Despesas de venda:</p>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">%</span>
                </div>
                <input type="number" id='despesas' value={despesas} min={0} onChange={e => setDespesas(e.target.value)} className="form-control" placeholder="Insira o valor" aria-label="Insira o valor" aria-describedby="basic-addon1" />
            </div>
        </div>
    )
}

const Tarifa = (tarifa, setTarifa) => {
    return (
        <div className='inputs'>
            <p>Tarifa do anúncio:</p>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">%</span>
                </div>
                <input type="number" id='classico' value={tarifa} min={0} onChange={e => setTarifa(e.target.value)} className="form-control" placeholder="Insira o valor" aria-label="Insira o valor" aria-describedby="basic-addon1" />
            </div>
        </div>
    )
}

const Frete = (frete, setFrete) => {
    return (
        <div className='inputs'>
            <p>Valor do frete:</p>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">R$</span>
                </div>
                <input type="number" id='frete' value={frete} min={0} onChange={e => setFrete(e.target.value)} className="form-control" placeholder="Insira o valor" aria-label="Insira o valor" aria-describedby="basic-addon1" />
            </div>
        </div>
    )
}

const Lucro = (margemLucro, setMargemLucro) => {
    return (
        <div className='inputs'>
            <p>Margem de lucro:</p>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">%</span>
                </div>
                <input type="number" id='margemLucro' value={margemLucro} min={0} onChange={e => setMargemLucro(e.target.value)} className="form-control" placeholder="Insira o valor" aria-label="Insira o valor" aria-describedby="basic-addon1" />
            </div>
        </div>
    )
}




const Calc2 = () => {
let custoTotal = 0
let precoVenda = 0
let lucroPorVenda = 0
    const calcular = () => {
         custoTotal = 100 / (100 - (despesas + notaFiscal + tarifa + margemLucro));
         precoVenda = (custo + frete) * custoTotal;
        return precoVenda.toFixed(2)
    }
    const calcularLucro = () => {
         custoTotal = 100 / (100 - (despesas + notaFiscal + tarifa + margemLucro));
         precoVenda = (custo + frete) * custoTotal;
         lucroPorVenda = (margemLucro / 100) * (precoVenda);
        return lucroPorVenda.toFixed(2)
    }

    const [custo, setCusto] = useState('');
    const [notaFiscal, setNotaFiscal] = useState('');
    const [despesas, setDespesas] = useState('');
    const [frete, setFrete] = useState('');
    const [tarifa, setTarifa] = useState('');
    const [margemLucro, setMargemLucro] = useState('');


    return (
        <>

            <Navbar2></Navbar2>

            <div className='calculadora'>
                <div className='titulo'>
                    <h2>Calculadora <br /> Mercado Livre</h2>
                </div>
                <form className='boxbox'>
                    <div className='box'>
                        {Custo(custo, setCusto)}
                        {Imposto(notaFiscal, setNotaFiscal)}
                        {Despesas(despesas, setDespesas)}
                        {Tarifa(tarifa, setTarifa)}
                        {Frete(frete, setFrete)}
                        {Lucro(margemLucro, setMargemLucro)}

                    </div>
                </form>
                <div className='resultados'>
                    <div className='res' id='1'>
                        <h3>Preço da venda</h3>
                        <h2 className='lucroLiquido'>{calcular(custo, notaFiscal, despesas, frete, tarifa, margemLucro)}</h2>
                    </div>

                    <div className='res'>
                        <h3>Lucro por venda</h3>
                        <h2 className='lucroLiquido' id='2'>{calcularLucro(custo, notaFiscal, despesas, frete, tarifa, margemLucro)}</h2>
                    </div>

                </div>
                <div className='botoes'>
                    <button type="submit" onClick={calcular} className="btn btn-primary btn-lg">Calcular</button>
                    <button type="reset" className="btn btn-secondary btn-lg">Limpar</button>
                </div>
            </div>

        </>
    );
};

export default Calc2;