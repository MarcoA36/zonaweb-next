import { demos } from "@/lib/demos"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Demos | ZonaWeb",
  description:
    "Ejemplos reales de sitios web para negocios. Inspirate y pedí una web similar para tu emprendimiento.",
  alternates: {
    canonical: "https://zonaweb.site/demos",
  },
}

export default function DemosPage() {
  return (
    <main className="min-h-screen bg-background pt-10">
      {/* HEADER */}
      <div className="border-b border-border bg-card/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
            Demos
          </p>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
            Ejemplos de sitios web listos para negocios
          </h1>

          <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
            Estas son ideas reales de cómo puede verse una web para tu negocio.
            Cada una se puede adaptar a tu marca, servicios y estilo.
          </p>
        </div>
      </div>

      {/* GRID */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid gap-6 sm:grid-cols-2">
          {demos.map((demo) => (
            <Link
              key={demo.slug}
                href={demo.external ? demo.href : `/demos/${demo.slug}`}
  target={demo.external ? "_blank" : undefined}
              className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-md transition-all"
            >
              {/* IMAGE */}
              <div className="aspect-video bg-muted overflow-hidden">
                <img
                  src={demo.image}
                  alt={demo.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {demo.title}
                </h2>

                <p className="mt-2 text-sm text-muted-foreground">
                  {demo.description}
                </p>

                <p className="mt-4 text-sm font-medium text-primary">
                  Ver demo →
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA FINAL */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-foreground">
            ¿Querés algo así para tu negocio?
          </h3>

          <p className="mt-2 text-muted-foreground">
            Podemos adaptarlo a tu marca, tus servicios y tu estilo.
          </p>

          <Link
            href="/contacto"
            className="inline-flex mt-5 items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
          >
            Pedir mi web
          </Link>
        </div>
      </div>
    </main>
  )
}