import React, { useState } from "react";
import MercadoLivreAPI from "../API/MercadoLivreApi";

function App() {
  const [product, setProduct] = useState(null);
  const [mlbCode, setMlbCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    setIsLoading(true);
    MercadoLivreAPI.get(`/items/${mlbCode}`)
      .then((response) => {
        console.log("Resposta da API:", response.data);
        if (typeof response.data === "object") {
          setProduct(response.data);
        } else {
          console.error(
            "A resposta da API não é um objeto de produto:",
            response.data
          );
          setProduct(null);
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar produto:", error);
        setProduct(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  function formatDate(dateString) {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString("pt-BR", options);
  }

  return (
    <div>
      <h1>Produto no Mercado Livre</h1>
      <div>
        <label htmlFor="mlbCode">Insira o Código MLB:</label>
        <input
          type="text"
          id="mlbCode"
          value={mlbCode}
          onChange={(e) => setMlbCode(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
      {isLoading ? (
        <p>Carregando...</p>
      ) : product ? (
        <div>
          <h3>ID: {product.id}</h3>
          <h3>Site ID: {product.site_id}</h3>
          <h3>Título: {product.title}</h3>
          <h3>Subtítulo: {product.subtitle}</h3>
          <h3>ID do Vendedor: {product.seller_id}</h3>
          <h3>ID da Categoria: {product.category_id}</h3>
          <h3>ID da Loja Oficial: {product.official_store_id}</h3>
          <h3>Preço: {product.price}</h3>
          <h3>Preço Base: {product.base_price}</h3>
          <h3>Preço Original: {product.original_price}</h3>
          <h3>Moeda: {product.currency_id}</h3>
          <h3>Quantidade Inicial: {product.initial_quantity}</h3>
          <h3>Quantidade Disponível: {product.available_quantity}</h3>
          <h3>Quantidade Vendida: {product.sold_quantity}</h3>
          <h3>Tipo de Garantia: {product.sale_terms[0].value_name}</h3>
          <h3>Modo de Compra: {product.buying_mode}</h3>
          <h3>Tipo de Anúncio: {product.listing_type_id}</h3>
          <h3>Data de Início: {formatDate(product.start_time)}</h3>
          <h3>Data de Término: {formatDate(product.stop_time)}</h3>
          <h3>Condição: {product.condition}</h3>
          <h3>
            Link do Produto:{" "}
            <a
              href={product.permalink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {product.permalink}
            </a>
          </h3>
          <h3>ID da Thumbnail: {product.thumbnail_id}</h3>
          <h3>
            URL da Thumbnail:{" "}
            <img src={product.thumbnail} alt="Thumbnail do Produto" />
          </h3>
          <h3>
            URL da Thumbnail Segura:{" "}
            <img
              src={product.secure_thumbnail}
              alt="Thumbnail Segura do Produto"
            />
          </h3>
          <h3>URLs das Fotos:</h3>
          <ul>
            {product.pictures.map((picture, index) => (
              <li key={index}>
                ID: {picture.id}
                <br />
                URL:{" "}
                <a href={picture.url} target="_blank" rel="noopener noreferrer">
                  {picture.url}
                </a>
              </li>
            ))}
          </ul>
          <h3>Vídeo ID: {product.video_id}</h3>
          <h3>Descrições: {product.descriptions.join(", ")}</h3>
          <h3>
            Aceita MercadoPago: {product.accepts_mercadopago ? "Sim" : "Não"}
          </h3>
          <h3>
            Métodos de Pagamento Não MercadoPago:{" "}
            {product.non_mercado_pago_payment_methods.join(", ")}
          </h3>
          <h3>Envio:</h3>
          <ul>
            <li>Modo: {product.shipping.mode}</li>
            <li>Tags: {product.shipping.tags.join(", ")}</li>
            <li>
              Local Pick-up: {product.shipping.local_pick_up ? "Sim" : "Não"}
            </li>
            <li>
              Frete Grátis: {product.shipping.free_shipping ? "Sim" : "Não"}
            </li>
            <li>Tipo Logístico: {product.shipping.logistic_type}</li>
            <li>
              Store Pick-up: {product.shipping.store_pick_up ? "Sim" : "Não"}
            </li>
          </ul>
          <h3>
            Modo de Entrega Internacional: {product.international_delivery_mode}
          </h3>
          <h3>Endereço do Vendedor:</h3>
          <ul>
            <li>Cidade: {product.seller_address.city.name}</li>
            <li>Estado: {product.seller_address.state.name}</li>
            <li>País: {product.seller_address.country.name}</li>
          </ul>
          <h3>Contato do Vendedor: {JSON.stringify(product.seller_contact)}</h3>
          <h3>Localização: {JSON.stringify(product.location)}</h3>
          <h3>Áreas de Cobertura: {JSON.stringify(product.coverage_areas)}</h3>
          <h3>Atributos:</h3>
          <ul>
            {product.attributes.map((attribute, index) => (
              <li key={index}>
                {attribute.name}: {attribute.value_name}
              </li>
            ))}
          </ul>
          <h3>Avisos: {JSON.stringify(product.warnings)}</h3>
          <h3>Fonte do Anúncio: {product.listing_source}</h3>
          <h3>Variações:</h3>
          <ul>
            {product.variations.map((variation, index) => (
              <li key={index}>
                ID: {variation.id}
                <br />
                Preço: {variation.price}
                <br />
                Quantidade Disponível: {variation.available_quantity}
                <br />
                Quantidade Vendida: {variation.sold_quantity}
              </li>
            ))}
          </ul>
          <h3>Status: {product.status}</h3>
          <h3>Substatus: {JSON.stringify(product.sub_status)}</h3>
          <h3>Tags: {product.tags.join(", ")}</h3>
          <h3>Garantia: {product.warranty}</h3>
          <h3>ID do Produto no Catálogo: {product.catalog_product_id}</h3>
          <h3>Domínio ID: {product.domain_id}</h3>
          <h3>ID do Item Pai: {product.parent_item_id}</h3>
          <h3>
            Preços Diferenciados: {JSON.stringify(product.differential_pricing)}
          </h3>
          <h3>IDs de Ofertas: {product.deal_ids.join(", ")}</h3>
          <h3>
            Relistagem Automática: {product.automatic_relist ? "Sim" : "Não"}
          </h3>
          <h3>Data de Criação: {formatDate(product.date_created)}</h3>
          <h3>Data de Atualização: {formatDate(product.last_updated)}</h3>
          <h3>Status de Saúde: {product.health}</h3>
          <h3>
            Anúncio no Catálogo: {product.catalog_listing ? "Sim" : "Não"}
          </h3>
          <h3>Canais: {product.channels.join(", ")}</h3>
        </div>
      ) : (
        <p>Nenhum produto encontrado.</p>
      )}
    </div>
  );
}

export default App;
