import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blogs y Portales Online | Publicá Noticias y Contenido",
  description:
    "Creamos blogs y portales modernos para que publiques artículos, noticias o contenido especializado. Panel autoadministrable, diseño profesional y optimización SEO.",
  keywords: [
    "blog profesional",
    "portal de noticias",
    "crear blog online",
    "publicar artículos",
    "sitio web para contenido",
    "blog autoadministrable",
    "portal de contenido",
  ],
  alternates: {
    canonical: "https://zonaweb.site/blog-portales",
  },
  openGraph: {
    title: "Blogs y Portales Profesionales",
    description:
      "Publicá noticias, artículos y contenido especializado con un diseño moderno y fácil de administrar.",
    url: "https://zonaweb.site/blog-portales",
    images: [
      {
        url: "/category-portal.webp",
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
      <section className="relative overflow-hidden bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white">
        <div className="relative max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Blogs y portales <span className="text-yellow-300">profesionales</span> para publicar tu contenido
            </h1>

            <p className="text-lg md:text-xl mb-8">
              Ideal para periodistas, creadores de contenido, empresas y medios que quieren compartir noticias, artículos o información especializada de forma clara y moderna.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link
                href="/#contacto"
                className="px-6 py-3 bg-yellow-400 text-teal-900 rounded-xl font-semibold shadow hover:bg-yellow-300 text-center"
              >
                Consultar
              </Link>
            </div>

            <p className="text-sm opacity-90">
              ✔ Panel fácil de usar  
              <br />
              ✔ Contenido actualizado en tiempo real
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-white">
            <Image
              src="/category-portal.webp"
              alt="Blog y Portal profesional"
              width={800}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* QUÉ ES UN BLOG / PORTAL */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6 text-teal-900">
          ¿Qué es un blog o portal profesional?
        </h2>

        <p className="text-slate-700 leading-relaxed mb-4">
          Es un sitio web pensado para publicar contenido de manera regular: artículos, noticias, análisis o información especializada. Cada entrada se administra fácilmente desde un panel propio.
        </p>

        <p className="text-slate-700 leading-relaxed">
          Perfecto para periodistas, empresas con contenido de valor, startups, educadores o cualquier persona que quiera construir un espacio digital propio para publicar información y noticias.
        </p>
      </section>

      {/* BENEFICIOS */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-teal-900">
            Beneficios de tener tu blog o portal
          </h2>

          <ul className="space-y-3 text-teal-700 font-medium">
            <li>✔ Publicar artículos y noticias con facilidad</li>
            <li>✔ Panel de administración autoadministrable</li>
            <li>✔ Optimización SEO para Google</li>
            <li>✔ Compartir contenido en redes y WhatsApp</li>
            <li>✔ Categorías, etiquetas y búsqueda interna</li>
            <li>✔ Diseños adaptables a móvil y desktop</li>
          </ul>
        </div>
      </section>

      {/* PARA QUIÉN */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6 text-teal-900">
          ¿Para quién es ideal?
        </h2>

        <ul className="space-y-3 text-slate-700 font-medium">
          <li>✔ Periodistas y medios de comunicación</li>
          <li>✔ Bloggers y creadores de contenido</li>
          <li>✔ Empresas que quieren publicar noticias o información</li>
          <li>✔ Portales educativos o de comunidad</li>
          <li>✔ Startups que necesitan mostrar novedades</li>
        </ul>
      </section>

      {/* INVERSIÓN */}
      {/* <section className="max-w-5xl mx-auto px-4 py-12 bg-yellow-50 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-teal-900">
          Inversión
        </h2>

        <p className="text-teal-800 mb-4">
          El desarrollo de un blog o portal profesional tiene un valor desde <strong>$85.000 ARS anuales</strong>.
        </p>

        <p className="text-teal-800 mb-4">
          Incluye todo lo necesario para que tu sitio funcione correctamente:
        </p>

        <ul className="space-y-2 text-teal-800">
          <li>✔ Hosting</li>
          <li>✔ Dominio</li>
          <li>✔ Mantenimiento básico</li>
          <li>✔ Panel autoadministrable para publicar contenido</li>
        </ul>
      </section> */}

      {/* CTA FINAL */}
      <section className="text-center py-16 px-2 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 text-white rounded-2xl mx-4 my-4">
        <h3 className="text-3xl font-bold mb-4">
          ¡Comenzá tu blog o portal profesional hoy!
        </h3>

        <p className="mb-6">
          Te ayudamos a crear un espacio digital propio, moderno y optimizado para atraer lectores y compartir contenido de valor.
        </p>

        <Link
          href="/#contacto"
          className="px-6 py-3 bg-yellow-400 text-teal-900 rounded-xl font-semibold shadow hover:bg-yellow-300"
        >
          Consultar ahora
        </Link>
      </section>

    </main>
  );
}