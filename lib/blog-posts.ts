type BlogBlock =
  | { type: "p"; content: string }
  | { type: "h2"; content: string }
  | { type: "h3"; content: string }
  | { type: "img"; src: string; alt: string }
  | { type: "cta"; content: string }

export type BlogPost = {
  slug: string
  title: string
  fecha: string
  fechaIso: string
  resumen: string
  contenido: BlogBlock[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "por-que-tu-negocio-necesita-web",
    title: "Redes sociales y web propia: el sistema básico para conseguir clientes",
    fecha: "12 de marzo de 2026",
    fechaIso: "2026-03-12",
    resumen:
      "Las redes generan visibilidad. Tu web ordena, profesionaliza y convierte ese interés en clientes reales.",
contenido: [
  { type: "p", content: "Un negocio que quiere crecer necesita dos cosas: visibilidad y conversión." },

  { type: "h2", content: "El rol de las redes sociales" },

  { type: "p", content: "Las redes sociales permiten llegar a muchas personas..." },

  { type: "p", content: "El problema es que todo sucede dentro de una plataforma..." },

  { type: "h2", content: "El rol de una web propia" },

  { type: "p", content: "Una web ordena y convierte ese interés en clientes." },

  {
    type: "img",
    src: "/images/card-1b.png",
    alt: "Diferencia entre redes sociales y pagina web para negocios",
  },

  { type: "p", content: "En redes, el usuario navega entre distracciones..." },

  { type: "h2", content: "Conclusión" },

  { type: "p", content: "Las redes sociales atraen tráfico. La web convierte." },

  {
    type: "cta",
    content: "Si querés una web que te genere clientes, dejanos un mensaje.",
  },
]
  },
  {
    slug: "importancia-de-tener-una-web-para-negocio",
    title: "Por qué una página web define la identidad de tu negocio",
    fecha: "28 de febrero de 2026",
    fechaIso: "2026-02-28",
    resumen:
      "Una web no es solo presencia online: es la identidad digital de tu negocio. Sin eso, es difícil generar confianza y atraer clientes.",
   contenido: [
  {
    type: "p",
    content:
      "Tener una página web no es solo estar en internet. Es definir cómo se ve y cómo se entiende tu negocio.",
  },

  {
    type: "h2",
    content: "La web como identidad del negocio",
  },

  {
    type: "p",
    content:
      "Pensalo como un local físico. Cuando alquilás un espacio, lo primero que hacés es poner un cartel, ordenar el lugar y mostrar qué ofrecés.",
  },

  {
    type: "p",
    content:
      "Podés hacerlo simple, con lo justo, o invertir más en diseño. Pero hay algo que no cambia: necesitás que la gente entienda qué es ese lugar.",
  },

  {
    type: "p",
    content:
      "Una página web cumple exactamente esa función en internet. Es el espacio donde tu negocio toma forma.",
  },

  {
    type: "h2",
    content: "Qué pasa cuando no tenés una web",
  },

  {
    type: "p",
    content:
      "Se puede vender solo con redes sociales. Muchos negocios lo hacen y les funciona.",
  },

  {
    type: "p",
    content:
      "Pero es como tener un local sin cartel. Desde afuera no se entiende qué hay adentro. No hay identidad clara, no hay estructura.",
  },

  {
    type: "p",
    content:
      "La gente puede llegar igual, pero depende de que alguien los traiga o de que ya te conozcan.",
  },

  {
    type: "h2",
    content: "El problema de depender solo de redes",
  },

  {
    type: "p",
    content:
      "Las redes sociales sirven para atraer gente, pero no para construir una identidad sólida.",
  },

  {
    type: "p",
    content:
      "El contenido se pierde, las publicaciones compiten entre sí y todo depende del algoritmo.",
  },

  {
    type: "p",
    content:
      "No hay un lugar claro donde alguien pueda entender tu negocio de forma completa.",
  },

  {
    type: "h2",
    content: "Una web ordena y da claridad",
  },

  {
    type: "p",
    content:
      "Con una web, todo está en su lugar. Servicios, productos, contacto, información clave.",
  },

  {
    type: "p",
    content:
      "No hay distracciones ni competencia alrededor. La atención está puesta únicamente en tu negocio.",
  },

  {
    type: "p",
    content:
      "Eso mejora la percepción y facilita que una persona pase de interesada a cliente.",
  },

  {
    type: "h2",
    content: "Incluso si tu negocio no está en una zona 'ideal'",
  },

  {
    type: "p",
    content:
      "Un local puede estar en un barrio poco transitado o de difícil acceso. Aun así, si está bien presentado, transmite seriedad.",
  },

  {
    type: "p",
    content:
      "En internet pasa lo mismo. No importa tanto desde dónde llega el tráfico, sino qué encuentra cuando llega.",
  },

  {
    type: "p",
    content:
      "Si no hay una base clara, la oportunidad se pierde.",
  },

  {
    type: "h2",
    content: "Conclusión",
  },

  {
    type: "p",
    content:
      "Una página web no garantiza ventas por sí sola, pero define cómo se percibe tu negocio.",
  },

  {
    type: "p",
    content:
      "Sin eso, todo depende del esfuerzo constante en redes. Con eso, tenés una base sólida para crecer.",
  },

  {
    type: "cta",
    content:
      "Si necesitás una web que represente bien tu negocio y te ayude a conseguir clientes, podés empezar por acá.",
  },
]
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getAllPostSlugs(): string[] {
  return blogPosts.map((p) => p.slug)
}
