import React, { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">Calcash</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/inicio">INICIO</a>
        <a href="/ferramentas">FERRAMENTAS</a>
        <a href="/contato">CONTATO</a>
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