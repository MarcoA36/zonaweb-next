import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tiendas Online | Vendé tus productos por Internet",
  description:
    "Creamos tiendas online profesionales para vender tus productos con catálogo, carrito y pagos integrados. Diseño moderno, autoadministrable y optimizado para vender.",
  keywords: [
    "tienda online",
    "crear ecommerce",
    "vender por internet",
    "carrito de compras",
    "tienda virtual argentina",
    "ecommerce autoadministrable",
    "pagina para vender productos",
  ],
  alternates: {
    canonical: "https://zonaweb.site/tiendas-online",
  },
  openGraph: {
    title: "Tiendas Online Profesionales",
    description:
      "Vendé productos con una tienda online moderna, rápida y fácil de administrar.",
    url: "https://zonaweb.site/tiendas-online",
    images: [
      {
        url: "/category-tienda.webp",
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
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white">
        <div className="relative max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Tiendas online <span className="text-yellow-300">listas para vender</span>
            </h1>

            <p className="text-lg md:text-xl mb-8">
              Vendé tus productos por internet con una tienda moderna, fácil de usar y optimizada para convertir visitas en clientes.
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
              ✔ Carrito de compras  
              <br />
              ✔ Integración con pagos online
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl ">
            <Image
              src="/category-tienda.webp"
              alt="Tienda online profesional"
              width={800}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* QUÉ ES */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6 text-purple-900">
          ¿Qué es una tienda online?
        </h2>

        <p className="text-slate-700 leading-relaxed mb-4">
          Es un sitio web diseñado para vender productos por internet. Permite mostrar tu catálogo, gestionar pedidos y recibir pagos de forma automática.
        </p>

        <p className="text-slate-700 leading-relaxed">
          Es la mejor forma de llevar tu negocio al mundo digital y vender sin límites de horario o ubicación.
        </p>
      </section>

      {/* BENEFICIOS */}
      <section className="bg-gradient-to-r from-purple-50 to-orange-50 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-purple-900">
            Beneficios de tener tu tienda online
          </h2>

          <ul className="space-y-3 text-purple-700 font-medium">
            <li>✔ Venta 24/7 sin depender de horarios</li>
            <li>✔ Catálogo de productos organizado</li>
            <li>✔ Carrito de compras y gestión de pedidos</li>
            <li>✔ Integración con pagos online</li>
            <li>✔ Posibilidad de compartir productos por WhatsApp</li>
            <li>✔ Adaptado a celular y computadora</li>
          </ul>
        </div>
      </section>

      {/* PARA QUIÉN */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6 text-purple-900">
          ¿Para quién es ideal?
        </h2>

        <ul className="space-y-3 text-slate-700 font-medium">
          <li>✔ Emprendedores que venden productos</li>
          <li>✔ Comercios físicos que quieren vender online</li>
          <li>✔ Marcas de indumentaria</li>
          <li>✔ Negocios de tecnología o accesorios</li>
          <li>✔ Cualquier negocio que quiera escalar ventas</li>
        </ul>
      </section>

      {/* CTA FINAL */}
      <section className="text-center py-16 px-2 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 text-white rounded-2xl mx-4 my-4">
        <h3 className="text-3xl font-bold mb-4">
          ¡Empezá a vender online hoy!
        </h3>

        <p className="mb-6">
          Te ayudamos a crear una tienda profesional, lista para recibir pedidos y pagos desde el primer día.
        </p>

        <Link
          href="/#contacto"
          className="px-6 py-3 bg-yellow-400 text-purple-900 rounded-xl font-semibold shadow hover:bg-yellow-300"
        >
          Consultar ahora
        </Link>
      </section>

    </main>
  );
}