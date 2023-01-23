import "./App.css";
import React from "react";
// import { ReactDOM } from 'react-dom';
import Pagina1 from "./componentes/pagina-inicial/Pagina1";
import Calculadora from "./componentes/Calculadora/Calculadora";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./componentes/ScrollToTop/ScrollToTop";
import CalculadoraShopee from "./componentes/Calculadora/CalculadoraShopee";


function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
        <Routes>
          <Route path="/" element={<Pagina1 />} />
          <Route path="/Calculadora" element={<Calculadora />} />
          <Route path="/CalculadoraShopee" element={<CalculadoraShopee />} />
        </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
