"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Sitios Web Profesionales",
    description:
      "Diseñamos páginas web modernas, rápidas y optimizadas para Google. Ideales para inmobiliarias, hoteles y pymes que quieren generar más consultas y mejorar su presencia online.",
    features: ["Diseño responsive", "SEO optimizado", "Velocidad de carga alta", "Panel administrable"],
    href: "/cotizador",
    image: "/card-1b.png",
    imageAlt: "Sitios Web Profesionales",
  },
  {
    title: "Sistemas de Gestión",
    description:
      "Mejoramos procesos internos con sistemas hechos a medida: administración de clientes, control de propiedades, reservas, facturación y más.",
    features: ["Desarrollo a medida", "Integración de APIs", "Automatización", "Reportes y analytics"],
    href: "/cotizador?servicio=sistema#cotizador",
    image: "/images/card-2b.png",
    imageAlt: "Sistemas de Gestión",
  },
  {
    title: "Aplicaciones Móviles",
    description:
      "Desarrollamos apps móviles que conectan tu negocio con tus clientes en cualquier momento y lugar, mejorando la comunicación y la experiencia digital.",
    features: ["iOS y Android", "UI/UX intuitivo", "Notificaciones push", "Integración con backend"],
    href: "/cotizador?servicio=app#cotizador",
    image: "/images/card-3b.png",
    imageAlt: "Aplicaciones Móviles",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Nuestros Servicios
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-4">
            Todo lo que tu negocio necesita
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Desde una presencia digital profesional hasta sistemas de gestión complejos. Siempre con el mejor diseño y tecnología.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-card rounded-2xl border border-border flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] bg-secondary overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={() => {}}
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.href}
                  className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all"
                >
                  Ver precios
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
