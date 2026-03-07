export const webQuoteConfig = {
  service: "Sitio web",

  basePrice: 250000,

  steps: [
    {
      id: "tipo",
      question: "¿Qué tipo de web necesitás?",
      options: [
        { label: "Landing page", value: "landing", price: 0 },
        { label: "Sitio institucional", value: "corporativa", price: 80000 },
        { label: "Tienda online", value: "ecommerce", price: 200000 },
      ],
    },

    {
      id: "paginas",
      question: "¿Cuántas páginas?",
      options: [
        { label: "1 a 3", value: "3", price: 0 },
        { label: "4 a 8", value: "8", price: 50000 },
        { label: "Más de 8", value: "8+", price: 100000 },
      ],
    },

    {
      id: "seo",
      question: "¿Querés SEO optimizado?",
      options: [
        { label: "No", value: "no", price: 0 },
        { label: "Sí", value: "si", price: 60000 },
      ],
    },
  ],
}