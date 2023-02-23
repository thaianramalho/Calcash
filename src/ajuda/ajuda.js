import "./ajuda.css";
import React from "react";
import { Card } from "antd";

const Ajuda = () => {
  return (
    <div>
      <div className="titulo">
        <h2>
          Aju<span>da</span>
        </h2>
      </div>
      <div className="cardHelp">
        <Card className="cardContent" type="inner" title="O que é o Calcash?">
          <p>
            O Calcash oferece uma calculadora de lucros para os vendedores da
            Amazon, Mercado Livre e Shopee, permitindo que eles calculem o lucro
            líquido de suas vendas. A calculadora é uma ferramenta eficaz para
            os vendedores que desejam estimar seus ganhos em cada venda,
            ajudando-os a tomar decisões informadas sobre preços e estratégias
            de venda.
          </p>
          <p>
            Ao acessar o site, os usuários encontrarão uma interface simples e
            intuitiva, que permite que eles escolham a plataforma de venda que
            desejam calcular seus lucros. Depois de selecionar a plataforma,
            eles podem inserir informações como o preço de custo, o custo de
            envio, o valor das taxas da plataforma e despesas de venda e o lucro
            desejado. Em seguida, a calculadora exibe o lucro líquido obtido com
            a venda e o preço de venda do produto na plataforma.
          </p>
          <p>
            A calculadora de lucros do nosso site é uma ferramenta essencial
            para os vendedores, pois ajuda a garantir que eles tenham uma
            compreensão clara do lucro líquido em cada venda, levando em
            consideração todas as taxas e despesas relacionadas à venda em cada
            plataforma. Isso permite que eles ajustem seus preços de venda para
            maximizar seus lucros e manter seus negócios rentáveis.
          </p>
          <p>
            Com uma interface fácil de usar e resultados precisos, a calculadora
            de lucros do Calcash é uma ferramenta valiosa para os vendedores.
            Ela oferece uma maneira rápida e fácil de calcular o lucro líquido
            de cada venda, ajudando os vendedores a tomar decisões informadas e
            estratégicas para seus negócios.
          </p>
        </Card>
      </div>
      <div className="cardHelp">
        <Card
          className="cardContent"
          type="inner"
          title="Como utilizar nossas calculadoras?"
        >
          <ol>
            <li>
              Acesse na aba Ferramentas a calculadora do Marketplace desejado.
            </li>
            <li>
              Insira os dados solicitados pela calculadora na unidade
              especificada (R$), (UN) ou (%). Em caso de dúvidas, passe o mouse
              ou pressione o botão de informaçoes presente ao lado do título do
              campo (i).
            </li>
            <li>
              Clique em calcular ao inserir os dados solicitados e o lucro que
              deseja obter por venda.
            </li>
            <li>
              Após calculado você verá o valor para cadastrar na plataforma a
              esquerda, e o valor que irá receber por venda a direita.
            </li>
          </ol>
        </Card>
      </div>
    </div>
  );
};

export default Ajuda;
