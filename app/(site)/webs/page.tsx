import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Desarrollo de sitios web - Zona Web",
  description:
    "Creamos páginas web modernas, rápidas y optimizadas para Google. Ideal para empresas que quieren generar más consultas online.",
}

export default function WebsPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

      {/* Hero */}
      <div className="max-w-2xl mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Desarrollo de páginas web profesionales
        </h1>

        <p className="text-lg text-muted-foreground">
          Diseñamos sitios modernos, rápidos y optimizados para Google.
          Pensados para generar consultas y mejorar la presencia online
          de tu negocio.
        </p>
      </div>

      {/* Paquetes */}
      <div className="grid md:grid-cols-3 gap-6">

        <div className="p-6 border border-border rounded-xl bg-card">
          <h3 className="text-xl font-bold mb-2">
            Landing Page
          </h3>

          <p className="text-muted-foreground mb-4">
            Ideal para promocionar un servicio o producto.
          </p>

          <p className="text-3xl font-bold mb-6">
            $250.000
          </p>

          <Link
            href="/cotizador?servicio=web"
            className="block text-center px-5 py-3 rounded-xl bg-primary text-primary-foreground font-semibold"
          >
            Cotizar proyecto
          </Link>
        </div>


        <div className="p-6 border border-border rounded-xl bg-card">
          <h3 className="text-xl font-bold mb-2">
            Sitio institucional
          </h3>

          <p className="text-muted-foreground mb-4">
            Para empresas que necesitan presencia online profesional.
          </p>

          <p className="text-3xl font-bold mb-6">
            $350.000
          </p>

          <Link
            href="/cotizador?servicio=web"
            className="block text-center px-5 py-3 rounded-xl bg-primary text-primary-foreground font-semibold"
          >
            Cotizar proyecto
          </Link>
        </div>


        <div className="p-6 border border-border rounded-xl bg-card">
          <h3 className="text-xl font-bold mb-2">
            Tienda Online
          </h3>

          <p className="text-muted-foreground mb-4">
            Venta de productos con pagos online y gestión de pedidos.
          </p>

          <p className="text-3xl font-bold mb-6">
            Desde $500.000
          </p>

          <Link
            href="/cotizador?servicio=web"
            className="block text-center px-5 py-3 rounded-xl bg-primary text-primary-foreground font-semibold"
          >
            Cotizar proyecto
          </Link>
        </div>

      </div>

    </section>
  )
}