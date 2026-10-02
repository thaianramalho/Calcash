// Vercel serverless function: devolve o país do visitante (ISO 3166-1 alpha-2),
// lido do header que o edge da Vercel injeta com base no IP da requisição.
// Usado por src/i18n para escolher o idioma inicial (BR → PT, resto → EN).
module.exports = (req, res) => {
  res.setHeader("Cache-Control", "private, no-store");
  res.status(200).json({ country: req.headers["x-vercel-ip-country"] || null });
};
