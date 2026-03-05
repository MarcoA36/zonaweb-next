import { Suspense } from "react"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft, ArrowDown, Check } from "lucide-react"
import { CotizadorWizard } from "@/components/cotizador/cotizador-wizard"

export const metadata: Metadata = {
  title: "Precios y Cotizador - Zona Web",
  description:
    "Conocé nuestros planes y precios. Usá el cotizador para obtener un presupuesto personalizado según tu proyecto.",
}

const plans = [
  {
    name: "Presencia Digital",
    description: "Ideal para empezar con presencia online profesional.",
    price: "$ 150.000",
    priceSuffix: "pago único",
    features: [
      "Diseño web responsive",
      "Optimización SEO básica",
      "Formulario de contacto",
      "Hosting + Dominio gratis 1 año",
    ],
    featured: false,
  },
  {
    name: "Profesional",
    description: "Para empresas que necesitan administrar contenido y crecer.",
    price: "$ 280.000",
    priceSuffix: "pago único",
    features: [
      "Todo lo del Plan Presencia",
      "Panel de administración",
      "Integraciones personalizadas",
      "Hosting + Dominio gratis 1 año",
    ],
    featured: true,
  },
  {
    name: "Empresarial",
    description: "Solución completa para empresas que buscan escalar.",
    price: "A consultar",
    priceSuffix: "según proyecto",
    features: [
      "Sistema de gestión a medida",
      "Aplicación móvil personalizada",
      "Automatización de procesos",
      "Soporte y mejoras continuas",
    ],
    featured: false,
  },
]

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
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Planes y precios
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground text-balance mb-4">
            Pensados para tu negocio
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto text-pretty">
            Soluciones adaptadas a cada etapa de crecimiento. Desde una presencia profesional hasta sistemas completos de gestión.
          </p>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.featured
                  ? "bg-foreground text-white shadow-2xl md:scale-105"
                  : "bg-card border border-border"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold tracking-wide whitespace-nowrap">
                    Mas elegido
                  </span>
                </div>
              )}

              <h3 className={`text-xl font-bold mb-2 ${plan.featured ? "text-white" : "text-foreground"}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 leading-relaxed ${plan.featured ? "text-white/60" : "text-muted-foreground"}`}>
                {plan.description}
              </p>

              <div className="mb-6">
                <span className={`text-3xl font-extrabold ${plan.featured ? "text-white" : "text-foreground"}`}>
                  {plan.price}
                </span>
                <span className={`text-xs ml-2 ${plan.featured ? "text-white/50" : "text-muted-foreground"}`}>
                  {plan.priceSuffix}
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.featured ? "bg-primary" : "bg-primary/10"}`}>
                      <Check className={`w-3 h-3 ${plan.featured ? "text-white" : "text-primary"}`} />
                    </div>
                    <span className={`text-sm ${plan.featured ? "text-white/80" : "text-muted-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#cotizador"
                className={`block text-center px-5 py-3 rounded-xl font-semibold text-sm transition-all ${
                  plan.featured
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-foreground hover:bg-secondary/80 border border-border"
                }`}
              >
                Quiero este plan!
              </a>
            </div>
          ))}
        </div>

        {/* CTA bajada al cotizador */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4 text-base">
            ¿Tu proyecto necesita algo más específico? Usá el cotizador y obtenés un presupuesto personalizado.
          </p>
          <a
            href="#cotizador"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
          >
            Cotizar
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </section>

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
