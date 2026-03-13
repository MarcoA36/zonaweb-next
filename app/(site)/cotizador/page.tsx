import { Suspense } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowDown, Check } from "lucide-react";
import { CotizadorWizard } from "@/components/cotizador/cotizador-wizard";
import { PlansSection } from "@/components/plans-section";

export const metadata: Metadata = {
  title: "Precios y Cotizador - Zona Web",
  description:
    "Conocé nuestros planes y precios. Usá el cotizador para obtener un presupuesto personalizado según tu proyecto.",
};

export default function CotizadorPage() {
  return (
      <section
        id="cotizador"
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
      >
        {/* Header */}
        <div className="text-center mb-12">
          {/* <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Cotizador online
          </p> */}
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance mb-4">
            ¿Cuánto cuesta tu proyecto?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto text-pretty">
            Respondé algunas preguntas y obtené un presupuesto estimado en
            segundos.
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
      </section>
  );
}
