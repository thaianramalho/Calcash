import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import pt from "./pt";
import en from "./en";

const DICTIONARIES = { pt, en };
const isLang = (v) => Object.prototype.hasOwnProperty.call(DICTIONARIES, v);
const LANG_KEY = "calcash:lang"; // escolha manual do usuário (sempre vence)
const COUNTRY_KEY = "calcash:country"; // país detectado por IP (cache)

// Fontes de geolocalização por IP, em ordem. A primeira é a função serverless
// do próprio site (api/region.js, lê o header do edge da Vercel); a segunda é
// um fallback público para hosts sem essa função (dev local, gh-pages, Docker).
const GEO_SOURCES = ["/api/region", "https://api.country.is/"];

const store = {
  get(key) {
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch {
      /* modo privado / storage bloqueado: segue sem persistir */
    }
  },
};

// Brasil → português; qualquer outro país → inglês.
const langFromCountry = (country) => (country === "BR" ? "pt" : "en");

const langFromBrowser = () => {
  const preferred = (navigator.languages && navigator.languages[0]) || navigator.language;
  return /^pt\b/i.test(preferred || "") ? "pt" : "en";
};

async function detectCountry() {
  for (const url of GEO_SOURCES) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 3000);
    try {
      const res = await fetch(url, { signal: controller.signal });
      if (!res.ok) continue;
      const { country } = await res.json();
      if (typeof country === "string" && /^[A-Za-z]{2}$/.test(country)) {
        return country.toUpperCase();
      }
    } catch {
      /* timeout, rede, CORS ou resposta não-JSON: tenta a próxima fonte */
    } finally {
      clearTimeout(timer);
    }
  }
  return null;
}

// Idioma escolhido de forma explícita: ?lang=en|pt na URL (e persiste) ou a
// escolha salva no seletor. Retorna null quando o usuário nunca escolheu.
function explicitLang() {
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (isLang(fromUrl)) {
    store.set(LANG_KEY, fromUrl);
    return fromUrl;
  }
  const saved = store.get(LANG_KEY);
  return isLang(saved) ? saved : null;
}

// Palpite inicial (sem esperar a rede): país em cache ou idioma do navegador.
function autoLang() {
  const country = store.get(COUNTRY_KEY);
  return country ? langFromCountry(country) : langFromBrowser();
}

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [explicit] = useState(explicitLang);
  const [lang, setLangState] = useState(() => explicit || autoLang());
  const manualRef = useRef(Boolean(explicit));

  // Detecta o país uma única vez por visitante (cache) e só aplica se o
  // usuário ainda não escolheu um idioma manualmente.
  useEffect(() => {
    if (manualRef.current || store.get(COUNTRY_KEY)) return;
    let cancelled = false;
    detectCountry().then((country) => {
      if (!country) return;
      store.set(COUNTRY_KEY, country);
      if (!cancelled && !manualRef.current) setLangState(langFromCountry(country));
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const t = DICTIONARIES[lang];

  // Mantém <html lang>, título e meta description coerentes com o idioma.
  useEffect(() => {
    document.documentElement.lang = t.meta.htmlLang;
    document.title = t.meta.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t.meta.description);
  }, [t]);

  const setLang = useCallback((next) => {
    if (!isLang(next)) return;
    manualRef.current = true;
    store.set(LANG_KEY, next);
    setLangState(next);
  }, []);

  const value = useMemo(() => ({ lang, t, setLang }), [lang, t, setLang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n deve ser usado dentro de <I18nProvider>");
  return ctx;
}
