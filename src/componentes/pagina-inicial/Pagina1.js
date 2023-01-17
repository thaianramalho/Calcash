import React from "react";
// import { Link as LinkR } from 'react-router'

import Contatos from "../contatos/Contatos";
import Ferramentas from "../ferramentas/Ferramentas";
import Inicio from "../inicio/Inicio";
import Navbar from "../Navbar/Navbar";

function Pagina1() {
  return (
    <>
      <Navbar></Navbar>

      <Inicio></Inicio>

      <Ferramentas></Ferramentas>

      <Contatos></Contatos>
    </>
  );
}

export default Pagina1;
