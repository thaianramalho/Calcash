import React from "react";
import Navbar from "../Navbar/Navbar";
import Inicio from "../inicio/Inicio";
import Ferramentas from "../ferramentas/Ferramentas";
import ProvaSocial from "../prova-social/ProvaSocial";
import Ajuda from "../ajuda/ajuda";
import Footer from "../footer/Footer";

function Pagina1() {
  return (
    <>
      <Navbar />
      <main>
        <Inicio />
        <Ferramentas />
        <ProvaSocial />
        <Ajuda />
      </main>
      <Footer />
    </>
  );
}

export default Pagina1;
