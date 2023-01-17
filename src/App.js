import './App.css';
import React from 'react';
// import { ReactDOM } from 'react-dom';

import Pagina1 from './componentes/pagina-inicial/Pagina1';
import Calculadora from './componentes/Calculadora/Calculadora';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Calc2 from './componentes/Calculadora/Calc2';


function App() {
  return (
    <>
   
   <Router>
       <Routes>
         <Route path="/" element={<Pagina1 />} />
         <Route path="/Calculadora" element={<Calculadora />} />
         <Route path="/Calculadora2" element={<Calc2 />} />
       </Routes>
   </Router>


      
    </>
    
  );
}

export default App;

