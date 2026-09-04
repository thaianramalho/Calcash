// Presets de animação Framer Motion — centralizados para consistência.
// Regras em .claude/skills/frontend-design/SKILL.md (seção Movimento).

export const EASE = [0.16, 1, 0.3, 1];

// Reveal ao entrar na viewport (usar com whileInView)
export const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

// Container que escalona os filhos
export const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

// Item filho de um container com stagger
export const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

// Props prontas para um bloco que revela sozinho ao rolar
export const revealOnScroll = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, margin: "-80px" },
  variants: reveal,
};

// Props prontas para um container com stagger que revela ao rolar
export const staggerOnScroll = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, margin: "-80px" },
  variants: stagger,
};

// Interação de hover/tap padrão para elementos clicáveis
export const tapHover = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.97 },
  transition: { type: "spring", stiffness: 400, damping: 22 },
};
