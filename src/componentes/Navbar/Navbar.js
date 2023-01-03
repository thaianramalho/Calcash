import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBars} from '@fortawesome/free-solid-svg-icons';


let barra = <FontAwesomeIcon id='faBars' icon={faBars} />;


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">

      <span className="nav-logo">Cal<span className="cash">cash</span></span>

      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to="/"><a href="/inicio">INI<span>CIO</span></a></Link>

        <Link to="/ferramentas"><a href="/ferramentas">FERRA<span>MENTAS</span></a></Link>
        <Link to="/contato"><a href="/contato">CONT<span>ATO</span></a></Link>
      </div>

      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)} >

        <div className="bar"></div>
      </div>

    </div>
  );
};

export default Navbar;