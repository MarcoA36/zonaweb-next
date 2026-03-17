"use client";

import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Sitios Web",
    description:
      "Diseñamos páginas web modernas, rápidas y optimizadas para Google. Ideales para inmobiliarias, hoteles y pymes que quieren generar más consultas y mejorar su presencia online.",
    //  href: "/cotizador?servicio=web#cotizador",
      href: "/webs",
    image: "/card-1b.png",
    features: [
      "Diseño moderno adaptado a celulares y tablets",
      "Optimización para aparecer en Google (SEO básico)",
      "Panel para administrar contenido fácilmente",
      "Integración con WhatsApp, formularios y redes sociales",
      "Alta velocidad de carga y seguridad",
    ],
  },
  {
    title: "Sistemas de Gestión",
    description:
      "Mejoramos procesos internos con sistemas hechos a medida: administración de clientes, control de propiedades, reservas, facturación y más.",
    href: "/cotizador?servicio=sistema#cotizador",
    image: "/images/card-2b.png",
    features: [
      "Sistema personalizado según las necesidades del negocio",
      "Gestión de clientes, productos o servicios",
      "Automatización de procesos y tareas repetitivas",
      "Reportes y estadísticas para tomar decisiones",
    ],
  },
  {
    title: "Aplicaciones Móviles",
    description:
      "Desarrollamos apps móviles que conectan tu negocio con tus clientes en cualquier momento y lugar, mejorando la comunicación y la experiencia digital.",
    href: "/cotizador?servicio=app#cotizador",
    image: "/images/card-3b.png",
    features: [
      "Aplicaciones para Android e iOS",
      "Conexión directa con clientes mediante notificaciones",
      "Integración con sistemas o plataformas existentes",
      "Interfaz intuitiva y fácil de usar",
    ],
  },
];
export function ServicesSection() {
  return (
    <section id="servicios" className="py-16 md:py-20 lg:py-28 bg-white">
        <div className="text-center mb-16">

    <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
      Soluciones digitales
    </p>

    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-4">
      Como podemos ayudarte
    </h2>

    {/* <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
      Desarrollamos sitios web, sistemas y aplicaciones que ayudan a 
      mejorar tu presencia online, automatizar procesos y generar más consultas.
    </p> */}

  </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-20 lg:space-y-28">
        {services.map((service, index) => {
          const isReversed = index % 2 !== 0;
          const message = encodeURIComponent(
            `Hola! Quisiera más información sobre el desarrollo de ${service.title}`
          );

          const whatsappUrl = `https://wa.me/5492284656640?text=${message}`;
          return (
            <div
              key={service.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center`}
            >
              {/* Image */}
              <div className={`relative ${isReversed ? "lg:order-2" : ""}`}>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl blur-2xl scale-110" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={900}
                    height={600}
                    className="w-full h-auto transition-transform duration-500 hover:scale-[1.03]"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`${isReversed ? "lg:order-1" : ""}`}>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5">
                  {service.title}
                </h2>

                <p className="text-lg text-slate-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="my-4">
                  {/* <p className="font-semibold text-slate-900 mb-2">
      Como te podemos ayudar:
    </p> */}

                  <ul className="space-y-1 text-slate-600">
                    {service.features?.map((item) => (
                      <li key={item}>✔ {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3">
                  {/* <Link
                    href={service.href}
                    className="inline-block px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-md"
                  >
                    Ver precios
                  </Link> */}

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-md"
                  >
                    Consultar
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
