import { Suspense } from "react"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft, ArrowDown, Check } from "lucide-react"
import { CotizadorWizard } from "@/components/cotizador/cotizador-wizard"
import { PlansSection } from "@/components/plans-section"

export const metadata: Metadata = {
  title: "Precios y Cotizador - Zona Web",
  description:
    "Conocé nuestros planes y precios. Usá el cotizador para obtener un presupuesto personalizado según tu proyecto.",
}


export default function CotizadorPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="border-b border-border bg-card/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">Z</span>
            </div>
            <span className="font-bold text-base text-foreground tracking-tight">
              Zona<span className="text-primary">Web</span>
            </span>
          </div>
        </div>
      </div>

      {/* ── PLANES ──────────────────────────────────────────────────────── */}
      {/* <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Header */}
        
     
 <PlansSection/>
    
      {/* Divisor */}
      <div className="border-t border-border" />

      {/* ── COTIZADOR ───────────────────────────────────────────────────── */}
      <section id="cotizador" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          {/* <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Cotizador online
          </p> */}
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance mb-4">
            ¿Cuánto cuesta tu proyecto?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto text-pretty">
            Respondé algunas preguntas y obtené un presupuesto estimado en segundos.
          </p>
        </div>

        {/* Wizard */}
        <Suspense
          fallback={
            <div className="flex items-center justify-center py-20">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          }
        >
          <CotizadorWizard />
        </Suspense>

        {/* Trust indicators */}
        {/* <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {[
            { label: "Sin compromiso", description: "El cotizador es completamente gratuito" },
            { label: "95% de precisión", description: "Precios reales, sin sorpresas" },
            { label: "Respuesta en 24hs", description: "Te contactamos para confirmar" },
          ].map((item) => (
            <div key={item.label} className="text-center p-4 rounded-xl bg-card border border-border">
              <div className="font-semibold text-foreground text-sm mb-1">{item.label}</div>
              <div className="text-xs text-muted-foreground">{item.description}</div>
            </div>
          ))}
        </div> */}
      </section>
    </main>
  )
}
