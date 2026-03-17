import Link from "next/link"
import { ArrowRight, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-foreground">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
        {/* Badge */}
        {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary mb-8">
          <Zap className="w-3.5 h-3.5" />
          <span className="text-xs font-semibold tracking-wide uppercase">Zona Web 2026</span>
        </div> */}

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight text-balance mb-6">
          Soluciones digitales{" "}
          <span className="text-primary">para negocios</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-10 text-pretty">
          Creamos sitios web, plataformas y aplicaciones combinando diseño,
          tecnología y estrategia. Pensadas para destacar, optimizar procesos y
          escalar sin límites.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/#planes"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
          >
            Empezar
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="#servicios"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 text-white font-medium text-base hover:bg-white/10 transition-colors"
          >
            Servicios
          </Link>
        </div>

        {/* Stats */}
        {/* <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: "+80", label: "Proyectos entregados" },
            { value: "95%", label: "Precisión en presupuestos" },
            { value: "+5", label: "Años de experiencia" },
            { value: "100%", label: "Clientes satisfechos" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-white/50 leading-relaxed">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}
