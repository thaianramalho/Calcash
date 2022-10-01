import React, { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">Cal<span className="cash">cash</span></span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/inicio">INI<span>CIO</span></a>
        <a href="/ferramentas">FERRA<span>MENTAS</span></a>
        <a href="/contato">CONT<span>ATO</span></a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;