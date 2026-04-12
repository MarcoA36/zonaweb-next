import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Calendar, ArrowUpRight } from "lucide-react"
import { blogPosts } from "@/lib/blog-posts"

export const metadata: Metadata = {
  title: "Blog | ZonaWeb",
  description:
    "Aprendé cómo conseguir más clientes con tu web, mejorar tu presencia online y vender mejor.",
  alternates: {
    canonical: "https://zonaweb.site/blog",
  },
  openGraph: {
    title: "Blog | ZonaWeb",
    description:
      "Guías simples para negocios que quieren vender más con su web.",
    url: "https://zonaweb.site/blog",
  },
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background pt-10">
      
      {/* HERO */}
      <div className="border-b border-border bg-gradient-to-b from-card/60 to-transparent">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>

          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Blog ZonaWeb
          </p>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
            Articulos sobre desarrollo digital
          </h1>

          <p className="mt-4 text-lg text-muted-foreground max-w-xl">
            Ideas simples y aplicables para mejorar tu presencia online, generar confianza y convertir visitas en clientes.
          </p>
        </div>
      </div>

      {/* LISTADO */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 pb-24">
        <ul className="space-y-6">
          {blogPosts.map((a) => (
            <li key={a.slug}>
              <article className="group rounded-2xl border border-border bg-card p-6 sm:p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/40 hover:-translate-y-1">
                
                {/* FECHA */}
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={a.fechaIso}>{a.fecha}</time>
                </div>

                {/* TITLE */}
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 leading-snug">
                  <Link
                    href={`/blog/${a.slug}`}
                    className="inline-flex items-center gap-2 group-hover:text-primary transition-colors"
                  >
                    {a.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                  </Link>
                </h2>

                {/* RESUMEN */}
                <p className="text-muted-foreground leading-relaxed mb-5">
                  {a.resumen}
                </p>

                {/* CTA */}
                <Link
                  href={`/blog/${a.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                >
                  Leer artículo
                </Link>
              </article>
            </li>
          ))}
        </ul>

        {/* CTA FINAL */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            ¿Querés una web que realmente te genere clientes?
          </p>
          <Link
            href="/#contacto"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
          >
            Pedir mi web
          </Link>
        </div>
      </div>
    </main>
  )
}