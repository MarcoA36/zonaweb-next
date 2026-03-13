import { PlansSection } from "@/components/plans-section"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Desarrollo de sitios web - Zona Web",
  description:
    "Creamos páginas web modernas, rápidas y optimizadas para Google. Ideal para empresas que quieren generar más consultas online.",
}

export default function WebsPage() {
  return (
    <>
    <PlansSection/>
   <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

  {/* Hero */}
  <div className="max-w-2xl mb-16">
    <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
      Desarrollo de páginas web profesionales
    </h1>

    <p className="text-lg text-muted-foreground">
      Creamos sitios modernos, rápidos y optimizados para Google.
      Diseñados para que tu negocio genere más consultas y tenga
      una presencia online profesional.
    </p>
  </div>


  {/* Beneficios */}
  <div className="grid md:grid-cols-3 gap-8 mb-20">

    <div>
      <h3 className="font-semibold text-lg mb-2">
        Diseño moderno
      </h3>
      <p className="text-muted-foreground">
        Sitios visualmente atractivos que transmiten profesionalismo
        y generan confianza en tus clientes.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-lg mb-2">
        Optimización para Google
      </h3>
      <p className="text-muted-foreground">
        Estructura pensada para posicionar mejor en buscadores
        y facilitar que te encuentren online.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-lg mb-2">
        Adaptado a celulares
      </h3>
      <p className="text-muted-foreground">
        Tu página se verá perfecta en teléfonos, tablets
        y computadoras.
      </p>
    </div>

  </div>


  {/* CTA */}
  <div className="bg-card border border-border rounded-2xl p-10 text-center">

    <h2 className="text-2xl font-bold mb-4">
      ¿Querés un presupuesto para tu sitio web?
    </h2>

    <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
      Responde algunas preguntas y te responderemos con una propuesta personalizada.
    </p>

    <Link
      href="/cotizador?servicio=web"
      className="inline-block px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold"
    >
      Cotizar proyecto
    </Link>

  </div>

</section>
    </>
   
  )
}