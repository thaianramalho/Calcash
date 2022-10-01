import React from 'react';
import './Navbar.css';

export default function Navbar() {
    return <nav className="navbar">
        <a href="/" className="tituloSite">Calcash</a>
        <ul>
            <li>
                <a href="/"><span className='navbar'>Inicio</span></a>
            </li>
            <li>
                <a href="/"><span className='navbar'>Ferramentas</span></a>
            </li>
            <li>
                <a href="/"><span className='navbar'>Contato</span></a>
            </li>
        </ul>
    </nav>
}