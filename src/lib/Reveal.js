// Reveal robusto (CSS + IntersectionObserver).
// Por que não usar só Framer aqui: o reveal precisa SEMPRE terminar visível,
// mesmo se a aba abrir em segundo plano ou o RAF for estrangulado. A transição
// é via CSS (roda no compositor, independe do RAF do JS) e usa a propriedade
// `translate` — separada de `transform` — para não conflitar com os hovers do
// Framer Motion (que usam scale/transform) nos mesmos elementos.
import React, { useRef, useEffect } from "react";

function useRevealRef() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-in");
      return;
    }
    let done = false;
    let timer;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) reveal();
      },
      { rootMargin: "0px 0px -60px 0px" }
    );
    const reveal = () => {
      if (done) return;
      done = true;
      el.classList.add("is-in");
      io.disconnect();
      clearTimeout(timer);
    };
    io.observe(el);
    // Rede de segurança: se o observer não disparar, revela mesmo assim.
    timer = setTimeout(reveal, 1500);
    return () => {
      io.disconnect();
      clearTimeout(timer);
    };
  }, []);
  return ref;
}

// Bloco único que revela ao entrar na viewport.
export function Reveal({ children, className = "", id, style }) {
  const ref = useRevealRef();
  return (
    <div ref={ref} id={id} className={`reveal ${className}`} style={style}>
      {children}
    </div>
  );
}

// Container cujos filhos diretos revelam em cascata (stagger).
export function RevealGroup({ children, className = "", id, style }) {
  const ref = useRevealRef();
  return (
    <div ref={ref} id={id} className={`rgroup ${className}`} style={style}>
      {children}
    </div>
  );
}
