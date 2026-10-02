import React, { useState, useEffect } from "react";
import "../Navbar/Navbar.css";
import "./Navbar2.css";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "../../i18n";
import LangSwitch from "../../i18n/LangSwitch";

const Navbar2 = () => {
  const { t } = useI18n();
  const LINKS = [
    { href: "/#inicio", label: t.nav.home },
    { href: "/#ferramentas", label: t.nav.tools },
    { href: "/#faq", label: t.nav.faq },
  ];
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <motion.nav
      className="nav nav--scrolled"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="nav__inner container">
        <Link to="/" className="nav__logo" onClick={close}>
          Cal<span>cash</span>
        </Link>

        <ul className="nav__links">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="nav__actions">
          <LangSwitch />
          <Link to="/" className="btn btn-primary nav__cta">
            {t.nav.back}
          </Link>
          <button
            className={`nav__burger ${open ? "is-open" : ""}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav__mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={close}>
                {l.label}
              </a>
            ))}
            <Link to="/" className="btn btn-primary" onClick={close}>
              {t.nav.back}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar2;
