import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
        {/* <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight text-balance mb-6">
          Soluciones digitales{" "}
          <span className="text-primary">para negocios</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-10 text-pretty">
          Creamos sitios web, plataformas y aplicaciones combinando diseño,
          tecnología y estrategia. Pensadas para destacar, optimizar procesos y
          escalar sin límites.
        </p> */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight text-balance mb-6">
          Tu negocio online,{" "}
          <span className="text-primary">listo para recibir consultas</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-10 text-pretty">
          Diseñamos páginas web simples y rápidas para que tus clientes te
          contacten fácilmente desde el celular.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#contacto"
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
      </div>
    </section>
  );
}
