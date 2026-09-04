import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { tapHover } from "../../lib/motion";
import { Reveal } from "../../lib/Reveal";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <Reveal className="footer__cta">
          <div>
            <h2 className="footer__cta-title">
              Pronto para parar de vender{" "}
              <span className="grad-text">no prejuízo?</span>
            </h2>
            <p className="footer__cta-lead">
              Calcule o preço certo da sua próxima venda em menos de um minuto —
              de graça.
            </p>
          </div>
          <motion.a href="#ferramentas" {...tapHover} className="btn btn-primary">
            Calcular agora
          </motion.a>
        </Reveal>

        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              Calc<span>cash</span>
            </Link>
            <p>
              Calculadora de lucro líquido <strong>gratuita</strong> para
              vendedores de Mercado Livre, Shopee e Amazon.
            </p>
          </div>

          <nav className="footer__col" aria-label="Navegação do rodapé">
            <h3>Navegação</h3>
            <a href="#inicio">Início</a>
            <a href="#ferramentas">Ferramentas</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="footer__col">
            <h3>Contato</h3>
            <a
              href="https://api.whatsapp.com/send?phone=5532985148692"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__contact"
            >
              <FaWhatsapp />
              (32) 98514-8692
            </a>
            <a href="mailto:thaianramalho9@gmail.com" className="footer__contact">
              <IoMail />
              thaianramalho9@gmail.com
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Calcash. Todos os direitos reservados.</span>
          <span>Feito para quem vive de margem.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
