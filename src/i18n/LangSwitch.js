import "./LangSwitch.css";
import React from "react";
import { useI18n } from "./index";

const OPTIONS = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
];

function LangSwitch() {
  const { lang, t, setLang } = useI18n();

  return (
    <div className="lang" role="group" aria-label={t.lang.switchLabel}>
      {OPTIONS.map((o) => (
        <button
          key={o.code}
          type="button"
          className={`lang__btn ${lang === o.code ? "is-active" : ""}`}
          onClick={() => setLang(o.code)}
          aria-pressed={lang === o.code}
          aria-label={t.lang[o.code]}
          title={t.lang[o.code]}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export default LangSwitch;
