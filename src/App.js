import './App.css';
import React from 'react';
import Navbar from './componentes/Navbar/Navbar';
import Inicio from './componentes/inicio/Inicio';
import Ferramentas from './componentes/ferramentas/Ferramentas';
import Contatos from './componentes/contatos/Contatos';

function App() {
  return (
    <>

    <Navbar></Navbar>
    
    <Inicio></Inicio>

    <Ferramentas></Ferramentas>

    <Contatos></Contatos>

    </>
  );
}

export default App;
