import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Landing Pages | Páginas para captar clientes",
  description:
    "Creamos landing pages enfocadas en generar consultas y ventas. Ideales para campañas, anuncios y promociones. Diseño optimizado para convertir visitas en clientes.",
  keywords: [
    "landing page",
    "pagina de ventas",
    "captar clientes",
    "pagina para anuncios",
    "landing argentina",
    "pagina de conversion",
    "web para campañas",
  ],
  alternates: {
    canonical: "https://zonaweb.site/landing-pages",
  },
  openGraph: {
    title: "Landing Pages Profesionales",
    description:
      "Páginas diseñadas para convertir visitas en consultas o ventas.",
    url: "https://zonaweb.site/landing-pages",
    images: [
      {
        url: "/category-landing.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Page() {
  return (
    <main className="bg-white pt-10">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white">
        <div className="relative max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Landing pages <span className="text-yellow-300">que convierten</span>
            </h1>

            <p className="text-lg md:text-xl mb-8">
              Diseñadas para transformar visitas en consultas o ventas. Ideales para campañas, anuncios y promociones.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link
                href="/#contacto"
                className="px-6 py-3 bg-yellow-400 text-red-900 rounded-xl font-semibold shadow hover:bg-yellow-300 text-center"
              >
                Consultar
              </Link>
            </div>

            <p className="text-sm opacity-90">
              ✔ Enfoque en resultados  
              <br />
              ✔ Integración con WhatsApp y formularios
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-white">
            <Image
              src="/category-landing.webp"
              alt="Landing page profesional"
              width={800}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* QUÉ ES */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6 text-red-900">
          ¿Qué es una landing page?
        </h2>

        <p className="text-slate-700 leading-relaxed mb-4">
          Es una página diseñada con un único objetivo: que el visitante realice una acción. Puede ser enviar un mensaje, completar un formulario o concretar una compra.
        </p>

        <p className="text-slate-700 leading-relaxed">
          A diferencia de una web tradicional, elimina distracciones y guía al usuario directamente hacia la conversión.
        </p>
      </section>

      {/* BENEFICIOS */}
      <section className="bg-gradient-to-r from-orange-50 to-pink-50 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-red-900">
            Beneficios de una landing page
          </h2>

          <ul className="space-y-3 text-red-700 font-medium">
            <li>✔ Mayor conversión de visitas en clientes</li>
            <li>✔ Ideal para campañas publicitarias (Meta Ads, Google Ads)</li>
            <li>✔ Mensaje claro y directo</li>
            <li>✔ Integración con WhatsApp y formularios</li>
            <li>✔ Carga rápida y optimizada</li>
            <li>✔ Diseño enfocado en resultados</li>
          </ul>
        </div>
      </section>

      {/* PARA QUIÉN */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6 text-red-900">
          ¿Para quién es ideal?
        </h2>

        <ul className="space-y-3 text-slate-700 font-medium">
          <li>✔ Negocios que hacen publicidad online</li>
          <li>✔ Servicios que buscan generar consultas</li>
          <li>✔ Lanzamientos de productos o eventos</li>
          <li>✔ Promociones o campañas específicas</li>
          <li>✔ Emprendedores que quieren resultados rápidos</li>
        </ul>
      </section>

      {/* CTA FINAL */}
      <section className="text-center py-16 px-2 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-white rounded-2xl mx-4 my-4">
        <h3 className="text-3xl font-bold mb-4">
          Convertí visitas en clientes
        </h3>

        <p className="mb-6">
          Creamos landing pages optimizadas para que cada visita tenga un objetivo claro: generar resultados.
        </p>

        <Link
          href="/#contacto"
          className="px-6 py-3 bg-yellow-400 text-red-900 rounded-xl font-semibold shadow hover:bg-yellow-300"
        >
          Consultar ahora
        </Link>
      </section>

    </main>
  );
}