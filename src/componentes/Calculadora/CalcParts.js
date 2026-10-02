import React from "react";
import { useI18n } from "../../i18n";

// Campo numérico das calculadoras: rótulo + tooltip (i) + input com prefixo.
export const CalcField = ({ id, label, tip, prefix, value, onChange, required }) => {
  const { t } = useI18n();

  return (
    <div className="inputs">
      <div className="label">
        <p>{label}</p>

        <div className="minor">
          <span className="i">i</span>
          <p className="txt">{tip}</p>
        </div>
      </div>

      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id={`${id}-addon`}>
            {prefix}
          </span>
        </div>
        <input
          pattern="[0-9]*"
          type="number"
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className="form-control"
          placeholder={t.calc.placeholder}
          aria-label={label}
          aria-describedby={`${id}-addon`}
        />
      </div>
    </div>
  );
};

// Fragmentos comuns: título, botões e cards de resultado.
export const CalcTitle = ({ name }) => {
  const { t } = useI18n();

  return (
    <div className="titulo">
      <h2>
        {t.calc.titleWord} <br /> {name}
      </h2>
    </div>
  );
};

export const CalcActions = ({ onClear }) => {
  const { t } = useI18n();

  return (
    <div className="botoes">
      <button type="submit" className="btn btn-primary btn-lg">
        {t.calc.calculate}
      </button>
      <button type="reset" className="btn btn-secondary btn-lg" onClick={onClear}>
        {t.calc.clear}
      </button>
    </div>
  );
};

export const CalcResults = ({ price, profit }) => {
  const { t } = useI18n();
  const color = (v) => ({ color: v > 0 ? "#38ae59" : "red" });

  return (
    <div className="resultados">
      <div className="res">
        <h3>{t.calc.price}</h3>
        <h2 className="lucroLiquido" style={color(price)}>
          R$ {price}
        </h2>
      </div>

      <div className="res">
        <h3>{t.calc.profit}</h3>
        <h2 className="lucroLiquido2" style={color(profit)}>
          R$ {profit}
        </h2>
      </div>
    </div>
  );
};
