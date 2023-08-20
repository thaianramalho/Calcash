import axios from "axios";

const MercadoLivreAPI = axios.create({
  baseURL: "https://api.mercadolibre.com",
});

export default MercadoLivreAPI;
