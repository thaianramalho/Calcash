import "./App.css";
import React from "react";
import Pagina1 from "./componentes/pagina-inicial/Pagina1";
import Calculadora from "./componentes/Calculadora/Calculadora";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./componentes/ScrollToTop/ScrollToTop";
import CalculadoraShopee from "./componentes/Calculadora/CalculadoraShopee";
import CalculadoraAmazon from "./componentes/Calculadora/CalculadoraAmazon";
import BuscaAnuncio from "./componentes/buscaAnuncio/BuscaAnuncio";
import { I18nProvider } from "./i18n";

function App() {
  return (
    <I18nProvider>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Pagina1 />} />
            <Route path="/Calculadora" element={<Calculadora />} />
            <Route path="/CalculadoraShopee" element={<CalculadoraShopee />} />
            <Route path="/CalculadoraAmazon" element={<CalculadoraAmazon />} />
            <Route path="/BuscarAnuncio" element={<BuscaAnuncio />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </I18nProvider>
  );
}

export default App;
