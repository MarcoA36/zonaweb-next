import Link from "next/link"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Presencia Digital",
    description: "Ideal para empezar con presencia online profesional.",
    price: "$80.000",
    priceSuffix: "pago único",
    features: [
      "Diseño web responsive",
      "Optimización SEO básica",
      "Formulario de contacto",
    ],
    cta: "Me interesa",
    featured: false,
  },
  {
    name: "Profesional",
    description: "Para empresas que necesitan administrar contenido y crecer.",
    price: "$120.000",
    priceSuffix: "pago único",
    features: [
      "Todo lo del Plan Presencia",
      "Panel de administración",
      "Integraciones personalizadas",
    ],
    cta: "Me interesa",
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
    ],
    cta: "Me interesa",
    featured: false,
  },
]

export function PlansSection() {
  return (
    <section id="planes" className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/40">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Planes
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Pensados para tu negocio
          </h2>

          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Soluciones adaptadas a cada etapa de crecimiento. Desde una presencia profesional hasta sistemas completos de gestión.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                plan.featured
                  ? "bg-foreground text-white shadow-2xl md:scale-105"
                  : "bg-card border border-border"
              }`}
            >

              {/* Badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold tracking-wide whitespace-nowrap shadow">
                    Más elegido
                  </span>
                </div>
              )}

              {/* Title */}
              <h3
                className={`text-xl sm:text-2xl font-bold mb-2 ${
                  plan.featured ? "text-white" : "text-foreground"
                }`}
              >
                {plan.name}
              </h3>

              {/* Description */}
              <p
                className={`text-base mb-6 leading-relaxed ${
                  plan.featured ? "text-white/70" : "text-muted-foreground"
                }`}
              >
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span
                  className={`text-3xl sm:text-4xl font-extrabold ${
                    plan.featured ? "text-white" : "text-foreground"
                  }`}
                >
                  {plan.price}
                </span>

                <span
                  className={`text-sm ml-2 ${
                    plan.featured ? "text-white/60" : "text-muted-foreground"
                  }`}
                >
                  {plan.priceSuffix}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.featured ? "bg-primary" : "bg-primary/10"
                      }`}
                    >
                      <Check
                        className={`w-3 h-3 ${
                          plan.featured ? "text-white" : "text-primary"
                        }`}
                      />
                    </div>

                    <span
                      className={`text-base sm:text-sm ${
                        plan.featured ? "text-white/80" : "text-muted-foreground"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/cotizador"
                className={`block text-center px-5 py-3 rounded-xl font-semibold text-base sm:text-sm transition-all ${
                  plan.featured
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md"
                    : "bg-secondary text-foreground hover:bg-secondary/80 border border-border"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}