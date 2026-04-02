"use client";

import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    title: "Servicios profesionales",
    description:
      "Sitios pensados para mostrar tu trabajo, generar confianza y recibir consultas de forma simple.",
    href: "/servicios-profesionales",
    image: "/category-pro-corregir.webp",
    features: [
      "Diseño claro y profesional",
      "Enfoque en generar consultas",
      "Integración con WhatsApp y formularios",
      "Ideal para empresas de servicio, profesionales y oficios",
    ],
  },
  {
    title: "Negocios con gestión",
    description:
      "Plataformas dinámicas para administrar propiedades, reservas, vehículos o servicios de forma simple.",
    href: "/demos/gestion",
    image: "/demo_inmo-hotel.webp",
    features: [
      "Publicación y edición de contenido",
      "Gestión de listados dinámicos",
      "Panel administrativo simple",
      "Ideal para inmobiliarias, hoteles y agencias",
    ],
  },
  {
    title: "Tiendas online",
    description:
      "Soluciones para vender productos con catálogo, carrito y medios de pago integrados.",
    href: "/demos/tiendas",
    image: "/category-tienda.webp",
    features: [
      "Carga de productos ilimitados",
      "Carrito de compras",
      "Integración con pagos online",
      "Ideal para comercios y emprendimientos",
    ],
  },
  {
    title: "Landing & promociones",
    description:
      "Páginas enfocadas en convertir visitas en clientes; para campañas, eventos o lanzamientos.",
    href: "/demos/landing",
    image: "/category-landing.webp",
    features: [
      "Diseño enfocado en conversión",
      "Secciones claras y directas",
      "Ideal para campañas y promociones",
      "Carga rápida y optimizada",
    ],
  },
];

export function CategoriesSection() {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-white" id="servicios">
      
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
          Servicios
        </p>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
  Webs simples, claras y efectivas
</h2>

<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
  Todo lo que tu negocio necesita para estar online y captar clientes.
</p>
      </div>

      {/* Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-20 lg:space-y-28">
        {categories.map((category, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <div
              key={category.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              {/* Image */}
              <div className={`relative ${isReversed ? "lg:order-2" : ""}`}>
                {/* <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl blur-2xl scale-110" /> */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={900}
                    height={600}
                    className="w-full h-auto transition-transform duration-500 hover:scale-[1.03]"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`${isReversed ? "lg:order-1" : ""}`}>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5">
                  {category.title}
                </h2>

                <p className="text-lg text-slate-600 leading-relaxed">
                  {category.description}
                </p>

                <div className="my-4">
                  <ul className="space-y-1 text-slate-600">
                    {category.features.map((item) => (
                      <li key={item}>✔ {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href={"/#contacto"}
                    className="inline-block px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-md"
                  >
                    Consultar
                  </Link>
                  {/* <Link
                    href={category.href}
                    className="inline-block px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-md"
                  >
                    Ver más
                  </Link> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}