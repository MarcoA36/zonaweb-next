export type Demo = {
  slug: string
  title: string
  description: string
  href: string
  image: string
  external: boolean
}

export const demos: Demo[] = [
  {
    slug: "inmobiliarias",
    title: "Portal para Inmobiliarias",
    description: "Propiedades con fotos, precios y contacto directo.",
    href: "https://inmobiliaria-demo-2.vercel.app/",
    image: "/demo_inmo.webp",
    external: true,
  },
  {
    slug: "hoteles",
    title: "Web para Hoteles",
    description: "Mostrá habitaciones y recibí reservas o consultas.",
    href: "https://hotel-demo-rho.vercel.app/",
    image: "/demo_hotel.webp",
    external: true,
  },
  {
    slug: "restaurantes",
    title: "Web para Restaurantes",
    description: "Mostrá tu carta online y toma pedidos por WhatsApp.",
    href: "https://resto-demo-nine.vercel.app/",
    image: "/demo_resto.webp",
    external: true,
  },
  {
    slug: "agencias-viajes",
    title: "Agencias de viajes",
    description: "Mostrá toda la información de tus destinos.",
    href: "https://turismo-demo-eta.vercel.app/",
    image: "/demo_turismo.webp",
    external: true,
  },
]