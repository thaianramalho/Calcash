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
          <h2>{product.photo}</h2>
          <h2>{product.thumbnail}</h2>
          <h2>Preço: {product.price}</h2>
          <h2>{product.condition}</h2>
        </div>
      ) : (
        <p>Nenhum produto encontrado.</p>
      )}
    </div>
  );
}

export default App;
