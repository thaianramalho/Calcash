import './App.css';
import React from 'react';

import Pagina1 from './componentes/pagina-inicial/Pagina1';
import Calculadora from './componentes/Calculadora/Calculadora';


import { BrowserRouter as Router, Switch, Route, Link } from
'react-router-dom'
// import Calculadora from './componentes/Calculadora/Calculadora'


function App() {
  return (
    <>

    <Router>

    

   {/* <Calculadora></Calculadora>   */}

   
   <Pagina1></Pagina1> 
    
  
     
   </Router>

    </>
  );
}

export default App;

