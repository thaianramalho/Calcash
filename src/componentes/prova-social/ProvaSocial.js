import "./ProvaSocial.css";
import React from "react";
import { Reveal, RevealGroup } from "../../lib/Reveal";
import { useI18n } from "../../i18n";

function ProvaSocial() {
  const { t } = useI18n();
  const { stats, quotes } = t.proof;

  return (
    <section className="proof section">
      <div className="container">
        <RevealGroup className="proof__stats">
          {stats.map((s) => (
            <div className="proof__stat" key={s.label}>
              <span className="proof__value grad-text">{s.value}</span>
              <span className="proof__label">{s.label}</span>
            </div>
          ))}
        </RevealGroup>

        <Reveal className="proof__head">
          <span className="kicker">{t.proof.kicker}</span>
          <h2 className="section-title">
            {t.proof.titleA}
            <span className="grad-text">{t.proof.titleHi}</span>
          </h2>
        </Reveal>

        <RevealGroup className="proof__quotes">
          {quotes.map((q) => (
            <figure className="quote" key={q.name}>
              <div className="quote__stars" aria-label={t.proof.stars}>
                {"★★★★★"}
              </div>
              <blockquote>{q.text}</blockquote>
              <figcaption>
                <span className="quote__name">{q.name}</span>
                <span className="quote__role">{q.role}</span>
              </figcaption>
            </figure>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

export default ProvaSocial;
