import './App.css';
import React from 'react';

import Pagina1 from './componentes/pagina-inicial/Pagina1';


import { BrowserRouter as Router, Routes, Route } from
'react-router-dom'
import Calculadora from './componentes/Calculadora/Calculadora'
import Navbar from './componentes/Navbar/Navbar';

function App() {
  return (
    <>

    <Navbar></Navbar>

    <Calculadora></Calculadora> 

   
    {/* <Router> <Routes>

    <Route path="/" element={<Pagina1 />}></Route>
    
  
    </Routes> </Router> */}
     
    

    </>
  );
}

export default App;

