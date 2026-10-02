// English — shown by default to visitors outside Brazil.
// Keep the same key structure as pt.js.
const en = {
  meta: {
    title: "Calcash — Marketplace profit calculator",
    description:
      "Calcash — free net-profit calculator for Mercado Livre, Shopee and Amazon Brazil sellers. Find the right price for every sale.",
    htmlLang: "en",
  },

  lang: { switchLabel: "Language", pt: "Português (Brasil)", en: "English" },

  nav: {
    home: "Home",
    tools: "Tools",
    faq: "FAQ",
    cta: "Calculate now",
    back: "Back to site",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  hero: {
    kicker: "Free calculator for Brazilian marketplaces",
    titleA: "Know the ",
    titleHi: "net profit",
    titleB: " of every sale before you list it.",
    leadA:
      "A 100% free tool for sellers: it automatically accounts for fees, taxes and shipping on ",
    leadStrong: "Mercado Livre, Shopee and Amazon Brazil",
    leadB: " and shows the price you need to hit any margin you want.",
    cta: "Calculate now",
    how: "How it works",
    compatible: "Works with",
    mock: {
      tag: "example",
      cost: "Product cost",
      costValue: "R$ 50.00",
      tax: "Invoice tax (NF-e)",
      fee: "Marketplace fee",
      shipping: "Shipping",
      shippingValue: "Free",
      margin: "Profit margin",
      price: "Selling price",
      priceValue: "R$ 87.72",
      profit: "Profit per sale",
      profitValue: "R$ 13.16",
    },
  },

  tools: {
    kicker: "Free tools",
    titleA: "A dedicated calculator for every ",
    titleHi: "marketplace",
    lead: "Every platform has its own fee rules. Pick yours, enter your numbers and calculate as often as you like — for free.",
    open: "Open calculator",
    ml: "Classic/Premium listing fee, NF-e invoice tax, free shipping and the fixed per-item cost on items under R$79 — all in the math.",
    shopee:
      "Platform commission and per-item fee factored in, so you find the price that keeps your margin.",
    amazon:
      "Category commission and shipping costs in the calculation, with net profit per sale in real time.",
  },

  proof: {
    stats: [
      { value: "12k+", label: "sellers using it" },
      { value: "R$ 2.4M", label: "in sales calculated" },
      { value: "3", label: "marketplaces supported" },
      { value: "100%", label: "free, always" },
    ],
    kicker: "Social proof",
    titleA: "Sellers ",
    titleHi: "trust the math",
    stars: "5 out of 5 stars",
    quotes: [
      {
        text: "I stopped selling at a loss without noticing. Now I only list after checking the margin on Calcash.",
        name: "Amanda R.",
        role: "Accessories store · Mercado Livre",
      },
      {
        text: "Shopee's fees always confused me. In seconds I see the right price to hit a 15% profit.",
        name: "Diego M.",
        role: "Seller · Shopee",
      },
      {
        text: "I use it every day to price products before uploading them to Amazon. Best part: it costs nothing.",
        name: "Carla S.",
        role: "E-commerce · Amazon",
      },
    ],
  },

  faq: {
    kicker: "Help",
    titleA: "Frequently asked ",
    titleHi: "questions",
    lead: "Everything you need to know before calculating your first sale.",
    items: [
      {
        q: "What is Calcash?",
        a: "Calcash is a profit calculator for Mercado Livre, Shopee and Amazon sellers. From your product cost, taxes, fees and shipping, it shows the ideal selling price and the net profit of each sale — so you can price without selling at a loss.",
      },
      {
        q: "How do I use the calculators?",
        a: "Pick the marketplace calculator you want in the Tools section, fill in the fields in the units shown (R$, % or kg) and enter the profit margin you're aiming for. After calculating, you get the price to list on the platform and the amount you'll receive per sale. If in doubt, hover the (i) icon next to each field.",
      },
      {
        q: "Is it really free?",
        a: "Yes, 100%. All three calculators are completely free and unlimited — no sign-up, no login, no charges. Calcash is a free tool to help sellers price better.",
      },
      {
        q: "Does it factor in each platform's fees?",
        a: "Yes. Each calculator applies its own platform's rules — Classic/Premium fee and the fixed cost on items under R$79 on Mercado Livre, Shopee and Amazon commissions — plus the invoice tax, selling expenses and shipping you enter.",
      },
      {
        q: "Does it replace an accountant?",
        a: "Calcash is a pricing aid and profit estimator. It's great for deciding prices day to day, but it doesn't replace an accountant's advice on your business's tax matters.",
      },
      {
        q: "Can I use it from outside Brazil?",
        a: "Yes. The site opens in English automatically when it detects a visit from outside Brazil, and you can switch between PT and EN at any time with the selector at the top. The calculators follow Brazilian marketplace rules, so every amount is in Brazilian reais (R$).",
      },
    ],
  },

  footer: {
    ctaA: "Ready to stop selling ",
    ctaHi: "at a loss?",
    ctaLead:
      "Work out the right price for your next sale in under a minute — for free.",
    cta: "Calculate now",
    brandA: "A ",
    brandStrong: "free",
    brandB:
      " net-profit calculator for Mercado Livre, Shopee and Amazon sellers.",
    navLabel: "Footer navigation",
    navTitle: "Navigation",
    contactTitle: "Contact",
    rights: "All rights reserved.",
    tagline: "Made for people who live on margins.",
  },

  calc: {
    titleWord: "Calculator",
    placeholder: "Enter a value",
    calculate: "Calculate",
    clear: "Clear",
    price: "Selling price",
    profit: "Profit per sale",
    cost: "Product cost:",
    costTip: "Product cost in R$.",
    tax: "Invoice tax (NF-e):",
    taxTip: "Percentage of tax paid on the invoice (Nota Fiscal).",
    expenses: "Selling expenses:",
    expensesTip:
      "Amount spent on boxes, tape, plastic, transport and similar.",
    listingFee: "Listing fee:",
    margin: "Profit margin:",
    marginTip:
      "The profit margin is the % you keep out of the total sale price. We recommend at least 10%.",

    ml: {
      name: "Mercado Livre",
      listingFeeTip:
        "Fee for listing on the platform (Classic or Premium), as a % of the price.",
      shipping: "Shipping cost:",
      shippingTip:
        "Shipping cost charged by the platform (enter 0 if the buyer pays).",
      marginNote:
        "NOTE: items priced under R$79 carry a fixed per-unit cost (we use ~R$6.75 as an approximation). Since 03/2026 it varies by weight and dimensions — check the exact value in the Cost Simulator in your Mercado Livre dashboard.",
      disclaimer:
        "Estimated values. The selling fee varies by category (Classic/Premium) and, since 03/2026, the per-unit cost varies by weight and dimensions — check the exact value in the Cost Simulator in your Mercado Livre seller dashboard.",
    },

    shopee: {
      name: "Shopee",
      marginNote:
        "NOTE: Shopee's commission (% + fixed fee per item) is applied automatically based on the selling-price bracket.",
      percentError: "Add up the percentages: they can't reach 100%.",
      applied: (com, fixed) =>
        `Shopee commission applied: ${com}% + R$ ${fixed.toFixed(
          2
        )} fixed fee per item.`,
      disclaimer:
        "Estimated values based on the current commission table (2026). Always check the latest official fees on the",
      disclaimerLink: "Shopee Seller Centre",
    },

    amazon: {
      name: "Amazon",
      listingFeeTipA:
        "Fee for selling on the platform. Amazon's commission varies by product category and can be checked at",
      weight: "Product weight:",
      weightTip: "Enter the exact weight in kg (example: 5.53 kg).",
      weightNote:
        "NOTE: the weight is used to estimate shipping based on Amazon's published rates.",
      marginNote:
        "NOTE: items under R$79 pay a fixed per-unit fee (~R$4.50 to R$6.75). From R$79 up, DBA shipping is estimated by weight — the real value varies by state of origin.",
      disclaimerA:
        "Shipping and commission are estimates — DBA varies by weight and state of origin. Check the official fees by category at",
    },
  },
};

export default en;
