import { CatalogSection } from "@/components/demo-catalogo";
import { DemosSection } from "@/components/demo-section";
import DemoSection from "@/components/demos-section";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sistemas Web Autoadministrables | Catálogo, Blogs y Portales",
  description:
    "Crea tu web autoadministrable para inmobiliarias, hoteles, concesionarias, tiendas, emprendimientos o blogs. Publica, gestiona y actualiza contenido fácilmente.",
  keywords: [
    "web autoadministrable",
    "catalogo online",
    "web para inmobiliaria",
    "web para hoteles",
    "web para concesionaria",
    "blog corporativo",
    "portal de contenidos",
    "sitio web para emprendimientos",
  ],
  alternates: {
    canonical: "https://zonaweb.site/autoadministrables",
  },
  openGraph: {
    title: "Sistemas Web Autoadministrables",
    description:
      "Gestioná tu negocio o proyecto desde una web propia, clara y profesional.",
    url: "https://zonaweb.site/autoadministrables",
    images: [
      {
        url: "/demo_inmo-hotel.webp",
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
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white">
        <div className="relative max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Gestioná tu negocio desde una{" "}
              <span className="text-yellow-300">web propia y dinámica</span>
            </h1>

            <p className="text-lg md:text-xl mb-8">
              Ideal para inmobiliarias, hoteles, concesionarias, tiendas, emprendimientos, blogs y portales de contenido. Publicá, editá y actualizá todo desde un panel sencillo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link
                href="/#contacto"
                className="px-6 py-3 bg-yellow-400 text-purple-900 rounded-xl font-semibold shadow hover:bg-yellow-300 text-center"
              >
                Consultar
              </Link>
            </div>

            <p className="text-sm opacity-90">
              ✔ Panel fácil de usar  
              <br />
              ✔ Perfecto para negocios con contenido dinámico
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-white rounded-2xl blur-3xl opacity-40" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border">
              <Image
                src="/demo_inmo-hotel.webp"
                alt="Sistema autoadministrable"
                width={800}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>

        </div>
      </section>

      {/* EXPLICACION */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6 text-purple-900">
          ¿Qué es una web autoadministrable?
        </h2>

        <p className="text-slate-700 leading-relaxed mb-4">
          Es una plataforma que te permite publicar, editar y organizar contenido desde un panel privado, sin depender de terceros. Perfecta para mostrar productos, servicios o artículos.
        </p>

        <p className="text-slate-700 leading-relaxed">
          Desde inmobiliarias, hoteles y concesionarias hasta tiendas, emprendimientos y blogs/portales de noticias, tu web siempre estará actualizada y profesional.
        </p>
      </section>

      {/* BENEFICIOS */}
      <section className="bg-purple-50 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-purple-900">
            Beneficios de tu sistema web
          </h2>

          <ul className="space-y-3 text-purple-800 font-medium">
            <li>✔ Publicar y editar contenido en tiempo real</li>
            <li>✔ Gestionar catálogos de productos o servicios dinámicos</li>
            <li>✔ Mantener tu web siempre actualizada</li>
            <li>✔ Mostrar listados de propiedades, habitaciones, vehículos o artículos</li>
            <li>✔ Crear blogs o portales con artículos, noticias y tutoriales</li>
            <li>✔ Centralizar toda la información de tu negocio en un solo lugar</li>
          </ul>
        </div>
      </section>

      {/* CASOS */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6 text-purple-900">
          Ideal para
        </h2>

        <ul className="space-y-3 text-slate-700 font-semibold">
          <li>✔ Inmobiliarias</li>
          <li>✔ Hoteles y alojamientos</li>
          <li>✔ Concesionarias de autos y vehículos</li>
          <li>✔ Tiendas y emprendimientos con catálogo de productos</li>
          <li>✔ Blogs y portales de contenido temático</li>
          <li>✔ Agencias de viajes y turismo</li>
        </ul>
      </section>


   <CatalogSection/>
     <DemoSection/>

  

      {/* CTA */}
      {/* <section className="text-center py-16 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-2xl mx-4 my-10">
        <h3 className="text-3xl font-bold mb-4">
          ¡Llevá tu negocio al siguiente nivel!
        </h3>

        <p className="mb-6">
          Contactanos y armamos tu web autoadministrable, profesional, moderna y adaptada a tu rubro.
        </p>

        <Link
          href="/#contacto"
          className="px-6 py-3 bg-yellow-400 text-purple-900 rounded-xl font-semibold shadow hover:bg-yellow-300"
        >
          Consultar ahora
        </Link>
      </section> */}

    </main>
  );
}