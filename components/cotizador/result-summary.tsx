"use client";

import { ArrowLeft, Check, Send, Download } from "lucide-react";
import { useRef } from "react";


import type { ServiceId, Step } from "./types";
import { SERVICE_LABELS } from "./config";
import { QuotePDF } from "./QuotePdf";
import { PDFDownloadLink } from "@react-pdf/renderer";
export interface ResultSummaryProps {
  service: ServiceId;
  steps: Step[];
  answers: Record<string, string>;
  totalPrice: number;
  onSendQuote: () => void;
  onBack: () => void;
}

export function ResultSummary({
  service,
  steps,
  answers,
  totalPrice,
  onSendQuote,
  onBack,
}: ResultSummaryProps) {
  const pdfRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* CONTENIDO QUE SE EXPORTA */}
      <div
        ref={pdfRef}
        className="bg-card rounded-2xl border border-border overflow-hidden"
      >
        {/* Header */}
        <div className="bg-foreground p-8 text-center">
          <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
            <Check className="w-7 h-7 text-primary" />
          </div>

          <p className="text-white/60 text-sm mb-1">
            Estimación para tu {SERVICE_LABELS[service]}
          </p>

          <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
            ${totalPrice.toLocaleString("es-AR")}
          </div>

          <p className="text-white/40 text-xs">Esto es una estimación</p>
        </div>

        {/* Summary */}
        <div className="p-8">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Resumen de tu proyecto
          </h3>

          <div className="space-y-3 mb-8">
            {steps.map((step) => {
              const option = step.options.find(
                (o) => o.value === answers[step.id],
              );

              return (
                <div
                  key={step.id}
                  className="flex items-start justify-between gap-4 py-2 border-b border-border last:border-0"
                >
                  <span className="text-sm text-muted-foreground">
                    {step.question.replace("¿", "").replace("?", "")}
                  </span>

                  <span className="text-sm font-medium text-foreground text-right">
                    {option?.label ?? "-"}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="p-8">

  {/* SECCION CONTINUAR */}
  <div className="mb-10">

    <h3 className="text-lg font-bold text-foreground mb-3">
      ¿Querés continuar con el proceso?
    </h3>

    <p className="text-sm text-muted-foreground mb-6">
      Envianos tus datos y nos pondremos en contacto a la brevedad.
    </p>

    <button
      onClick={onSendQuote}
      className="w-full sm:w-auto flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
    >
      <Send className="w-4 h-4" />
      Continuar
    </button>

  </div>


  {/* SECCION ACCIONES */}
  <div className="border-t border-border pt-6">

    <p className="text-xs text-muted-foreground mb-4">
      También podés guardar o modificar este presupuesto.
    </p>

    <div className="flex flex-col sm:flex-row gap-3">

      <PDFDownloadLink
        document={
          <QuotePDF
            service={service}
            steps={steps}
            answers={answers}
            totalPrice={totalPrice}
          />
        }
        fileName="presupuesto-web.pdf"
        className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors text-sm"
      >
        {({ loading }) => (
          <>
            <Download className="w-4 h-4" />
            {loading ? "Generando..." : "Descargar PDF"}
          </>
        )}
      </PDFDownloadLink>


      <button
        onClick={onBack}
        className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors text-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        Modificar respuestas
      </button>

    </div>

  </div>

</div>
        </div>
      </div>
    </div>
  );
}
