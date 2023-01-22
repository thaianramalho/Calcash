import React, { useState } from "react";
import "./Navbar2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

let barra = <FontAwesomeIcon id="faBars" icon={faBars} />;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">
        <Link to="/" style={{ textDecoration: "none", color: "#5850FE" }}>
          Cal
        </Link>
        <span className="cash">
          <Link style={{ textDecoration: "none", color: "#38AE59" }} to="/">
            cash
          </Link>
        </span>
      </span>

      <div className={`nav-items ${isOpen && "open"}`}>
        <Link className="link" to="/">
          <a href="#principal">
            INI<span>CIO</span>
          </a>
        </Link>

        <Link className="link" to="/">
          <a href="#ferramenta">
            FERRA<span>MENTAS</span>
          </a>
        </Link>

        <Link  className="link" to="/">
          <a href="#contatos">
            CONT<span>ATO</span>
          </a>
        </Link>
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
