import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Páginas Web Profesionales para Negocios | Diseño Web Efectivo",
  description:
    "Creamos páginas web claras y profesionales para mostrar tu negocio, generar confianza y recibir consultas por WhatsApp. Incluye dominio, hosting y mantenimiento.",
  keywords: [
    "pagina web para negocios",
    "diseño web argentina",
    "crear pagina web profesional",
    "pagina web con whatsapp",
    "sitio web servicios",
    "web para profesionales",
    "sitio web consultores",
  ],
  alternates: {
    canonical: "https://zonaweb.site/servicios-profesionales",
  },
  openGraph: {
    title: "Páginas Web Profesionales para Negocios",
    description:
      "Sitios claros, rápidos y pensados para generar clientes desde el primer contacto.",
    url: "https://zonaweb.site/servicios-profesionales",
    images: [
      {
        url: "/category-pro-corregir.webp",
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
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white">
        <div className="relative max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Páginas web <span className="text-yellow-300">claras, simples y efectivas</span> para tu negocio
            </h1>

            <p className="text-lg md:text-xl mb-8">
              Diseñadas para mostrar tu negocio, generar confianza y recibir consultas directas por WhatsApp o formulario. Profesionales, consultores, marcas personales o cualquier servicio pueden destacarse online.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link
                href="/#contacto"
                className="px-6 py-3 bg-yellow-400 text-indigo-900 rounded-xl font-semibold shadow hover:bg-yellow-300 text-center"
              >
                Consultar
              </Link>
            </div>

            <p className="text-sm opacity-90">
              ✔ Diseño profesional y moderno  
              <br />
              ✔ Web optimizada para Google y WhatsApp
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-white">
            <Image
              src="/category-pro-corregir.webp"
              alt="Página web profesional"
              width={800}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* QUÉ TIPO DE WEB */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6 text-indigo-900">
          ¿Qué tipo de página es esta?
        </h2>

        <p className="text-slate-700 leading-relaxed mb-4">
          Este sitio está pensado para negocios y profesionales que necesitan presencia online clara, rápida y confiable. Su objetivo: mostrar lo que ofrecés, transmitir seguridad y convertir visitas en consultas.
        </p>

        <p className="text-slate-700 leading-relaxed">
          Perfecto para profesionales independientes, consultores, marcas personales y servicios locales. No es una tienda online ni un sistema complejo: es simple, efectiva y directa.
        </p>
      </section>

      {/* BENEFICIOS */}
      <section className="bg-gradient-to-r from-purple-50 to-pink-50 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-indigo-900">
            Beneficios de tener tu web profesional
          </h2>

          <ul className="space-y-3 text-indigo-700 font-medium">
            <li>✔ Mostrar tu negocio de forma clara y profesional</li>
            <li>✔ Generar confianza desde el primer contacto</li>
            <li>✔ Recibir consultas directas por WhatsApp o formulario</li>
            <li>✔ Mejorar tu posicionamiento en Google</li>
            <li>✔ Explicar tus servicios sin depender de redes sociales</li>
            <li>✔ Diseño adaptable a móviles y computadoras</li>
          </ul>
        </div>
      </section>

      {/* SEO */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6 text-indigo-900">
          Una web que atrae clientes
        </h2>

        <p className="text-slate-700 leading-relaxed mb-4">
          La mayoría de las personas busca en Google antes de contratar un servicio. Una página web profesional mejora tu imagen y multiplica tus oportunidades de ser elegido.
        </p>

        <p className="text-slate-700 leading-relaxed">
          Ideal para profesionales, consultores, marcas personales y negocios de servicios que quieren mostrarse online de manera simple, rápida y efectiva.
        </p>
      </section>

      {/* PRECIO */}
      {/* <section className="max-w-5xl mx-auto px-4 py-12 bg-yellow-50 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-indigo-900">
          Inversión
        </h2>

        <p className="text-indigo-800 mb-4">
          El desarrollo de esta página web tiene un valor desde <strong>$90.000 ARS anuales</strong>.
        </p>

        <p className="text-indigo-800 mb-4">
          El pago anual incluye todo lo necesario para que tu web funcione correctamente:
        </p>

        <ul className="space-y-2 text-indigo-800">
          <li>✔ Hosting</li>
          <li>✔ Dominio</li>
          <li>✔ Mantenimiento básico</li>
        </ul>

        <p className="text-indigo-800 mt-4">
          Todo listo y sin preocuparte por lo técnico.
        </p>
      </section> */}

      {/* CTA FINAL */}
      <section className="text-center py-16 px-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-2xl mx-4 my-4">
        <h3 className="text-3xl font-bold mb-4">
          ¡Tu página web lista para conseguir clientes!
        </h3>

        <p className="mb-6">
          Te ayudamos a crear una web profesional, clara, moderna y enfocada en resultados.
        </p>

        <Link
          href="/#contacto"
          className="px-6 py-3 bg-yellow-400 text-indigo-900 rounded-xl font-semibold shadow hover:bg-yellow-300"
        >
          Consultar ahora
        </Link>
      </section>

    </main>
  );
}