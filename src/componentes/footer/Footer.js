import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { tapHover } from "../../lib/motion";
import { Reveal } from "../../lib/Reveal";
import { useI18n } from "../../i18n";

function Footer() {
  const { t } = useI18n();
  const f = t.footer;

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <Reveal className="footer__cta">
          <div>
            <h2 className="footer__cta-title">
              {f.ctaA}
              <span className="grad-text">{f.ctaHi}</span>
            </h2>
            <p className="footer__cta-lead">
              {f.ctaLead}
            </p>
          </div>
          <motion.a href="#ferramentas" {...tapHover} className="btn btn-primary">
            {f.cta}
          </motion.a>
        </Reveal>

        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              Cal<span>cash</span>
            </Link>
            <p>
              {f.brandA}
              <strong>{f.brandStrong}</strong>
              {f.brandB}
            </p>
          </div>

          <nav className="footer__col" aria-label={f.navLabel}>
            <h3>{f.navTitle}</h3>
            <a href="#inicio">{t.nav.home}</a>
            <a href="#ferramentas">{t.nav.tools}</a>
            <a href="#faq">{t.nav.faq}</a>
          </nav>

          <div className="footer__col">
            <h3>{f.contactTitle}</h3>
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
          <span>© {new Date().getFullYear()} Calcash. {f.rights}</span>
          <span>{f.tagline}</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
