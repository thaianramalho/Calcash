---
name: frontend-design
description: Sistema de design do Calcash — tokens de cor, escala tipográfica, grid de 8px e padrões de componente para telas dark. Use ao criar ou reestilizar qualquer UI do projeto (landing, calculadoras, navbar, cards, botões).
---

# Calcash — Frontend Design (UI/UX Pro Max)

Regras de design para o Calcash. **Siga estes tokens em vez de inventar valores soltos.**
Todo espaçamento, cor e tamanho de fonte deve sair daqui.

## Princípio #0 — Evite a estética genérica de IA

Não entregue o visual "template de SaaS gerado por IA". Especificamente **evite**:

- Gradiente roxo→rosa em tudo, glassmorphism em toda superfície, blur exagerado.
- Emoji como ícone de feature, "blobs" coloridos aleatórios de fundo, mesh gradients sem propósito.
- Sombras difusas gigantes em todo card; bordas de 1px cinza-claro em fundo branco.
- Texto centralizado por padrão em tudo; hero com "headline vaga + subtítulo vago + 2 botões".
- Contraste fraco (cinza sobre cinza) e hierarquia tipográfica achatada.

**Em vez disso:** fundo quase-preto com profundidade por camadas (não por sombra), 1 gradiente de
marca (azul→verde) usado com parcimônia como destaque, tipografia com contraste forte de peso e
tamanho, grid disciplinado, e micro-interações com propósito (Framer Motion). Menos efeito, mais
intenção. Cada elemento justifica sua existência.

## Tokens de cor

Marca preservada: **azul `#5850FE`** (primária) e **verde `#38AE59`** (destaque/positivo).
Base migrada para **dark**. Definidos em `src/styles/tokens.css` como CSS custom properties.

```
/* Marca */
--brand:        #5850FE;   /* primária — CTAs, links, foco */
--brand-strong: #6f68ff;   /* hover/realce da primária no dark */
--brand-soft:   #a9a4ff;   /* texto/detalhe primário em superfície escura */
--accent:       #38AE59;   /* verde — sucesso, lucro, destaque secundário */
--accent-strong:#43c96a;

/* Neutros (base dark, do mais fundo ao mais claro) */
--bg:        #07080d;   /* fundo da página (quase-preto azulado) */
--surface-1: #0d0f17;   /* seções/cards */
--surface-2: #141726;   /* cards elevados, inputs */
--surface-3: #1c2033;   /* hover de superfície, bordas ativas */
--border:    rgba(255,255,255,.08);
--border-strong: rgba(255,255,255,.14);

/* Texto */
--text:      #f3f5fb;   /* títulos/primário */
--text-muted:#a7adc2;   /* corpo secundário */
--text-dim:  #6b7186;   /* legendas, placeholders */

/* Gradiente de marca (usar com parcimônia) */
--grad-brand: linear-gradient(135deg, #5850FE 0%, #38AE59 100%);
```

Regras de uso:
- Verde = sempre positivo (lucro, sucesso, confirmação). Nunca use verde para erro.
- Erro/negativo = `#ff5c6a`. Aviso = `#ffb020`.
- Gradiente de marca só em: destaque de palavra no título, 1 botão primário por tela, e borda/realce de card em foco. Não use como fundo de seção inteira.
- Contraste mínimo AA: texto sobre `--bg`/`--surface-*` deve ficar ≥ 4.5:1 (use `--text`/`--text-muted`, nunca `--text-dim` para conteúdo essencial).

## Escala tipográfica

Fontes: **Space Grotesk** (display/headings) e **Inter** (corpo/UI). `display=swap`, pesos limitados.

Base 16px. Escala de tipo (modular ~1.25), expressa em `rem`:

```
--fs-xs:   0.75rem;  /* 12 — labels, tags */
--fs-sm:   0.875rem; /* 14 — legendas, nav */
--fs-base: 1rem;     /* 16 — corpo */
--fs-md:   1.125rem; /* 18 — corpo destaque / subtítulo */
--fs-lg:   1.5rem;   /* 24 — título de card */
--fs-xl:   2rem;     /* 32 — título de seção (mobile) */
--fs-2xl:  2.75rem;  /* 44 — título de seção */
--fs-3xl:  clamp(2.75rem, 6vw, 4.5rem); /* hero headline, fluido */
```

- Headings: `font-family: var(--font-display)`, `font-weight: 600–700`, `letter-spacing: -0.02em`, `line-height: 1.05–1.15`.
- Corpo: `font-family: var(--font-sans)`, `weight 400`, `line-height: 1.6`, `max-width: 65ch` em blocos de texto.
- Nunca mais de 2 pesos por bloco. Hierarquia por tamanho + peso, não por cor.

## Espaçamento — grid base 8px

Todo espaçamento é múltiplo de 8 (com 4px permitido para ajuste fino). Use os tokens:

```
--space-1: 4px;   --space-2: 8px;   --space-3: 12px;  --space-4: 16px;
--space-5: 24px;  --space-6: 32px;  --space-8: 48px;  --space-10: 64px;
--space-12: 96px; --space-16: 128px;
```

- Padding vertical de seção: `--space-16` (desktop) / `--space-10` (mobile).
- Gap de grid de cards: `--space-6`.
- Largura máxima de conteúdo: `--maxw: 1200px`, centralizado, com `padding-inline: --space-5`.
- Raio: `--r-sm: 10px`, `--r-md: 16px`, `--r-lg: 24px`, `--r-pill: 999px`.

## Padrões de componente

**Botão primário:** fundo `--grad-brand` (ou `--brand` sólido), texto `#fff`, `--r-pill` ou `--r-md`,
padding `14px 28px`, `font-weight 600`. Hover: `scale(1.03)` + brilho sutil (Framer Motion `whileHover`).
Máximo **um** botão com gradiente por tela; o resto é `--surface-2` com `--border`.

**Botão secundário/ghost:** transparente, `1px solid var(--border-strong)`, texto `--text`. Hover: `--surface-2`.

**Card:** `background: var(--surface-1)`, `1px solid var(--border)`, `--r-lg`, padding `--space-6`.
Profundidade por camada (surface mais claro) e por borda que acende no hover (`--border-strong` +
leve glow da cor de marca), **não** por drop-shadow pesada. No hover: `translateY(-4px)`.

**Navbar:** fixa no topo, fundo `color-mix(--bg + transparência)` com `backdrop-filter: blur(12px)`
e `border-bottom: 1px solid var(--border)`. Encolhe/ganha opacidade ao rolar.

**Inputs:** `--surface-2`, `1px solid var(--border)`, foco = `--brand` + ring `0 0 0 3px rgba(88,80,254,.25)`.

**Seção:** título com "kicker" (tag pequena em `--brand-soft`/`--fs-sm` maiúscula) + heading + descrição
curta alinhados à esquerda (ou centralizados só quando fizer sentido, não por padrão).

## Movimento (Framer Motion)

- **Scroll reveal:** `initial={{opacity:0, y:24}}` → `whileInView={{opacity:1, y:0}}`,
  `viewport={{once:true, margin:"-80px"}}`, `transition={{duration:.5, ease:[0.16,1,0.3,1]}}`.
- **Stagger** de listas/cards: container com `staggerChildren: 0.08`.
- **Hover:** `whileHover={{scale:1.03}}`, `whileTap={{scale:0.97}}`, transição `spring` suave.
- Respeite `prefers-reduced-motion`: desligue transforms grandes.
- Duração 0.2–0.6s. Easing padrão `[0.16, 1, 0.3, 1]` (expo-out). Nada de bounce exagerado.

## Acessibilidade & performance (Lighthouse 90+)

- Contraste AA, foco visível (`:focus-visible`), `alt` em imagens, ordem semântica de headings.
- Imagens abaixo da dobra: `loading="lazy"` + `width`/`height` para evitar CLS.
- Fontes com `display=swap` + `preconnect`. Sem libs de UI pesadas para enfeite.
- Animar só `transform`/`opacity`. `will-change` com moderação.
