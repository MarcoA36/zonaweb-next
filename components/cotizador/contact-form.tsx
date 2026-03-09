"use client"

import { ArrowLeft, Download, Home, RefreshCcw, Send } from "lucide-react"
import { useRouter } from "next/navigation"

import type { ServiceId, Step } from "./types"
import { SERVICE_LABELS } from "./config"
import { QuotePDF } from "./QuotePdf"
import { PDFDownloadLink } from "@react-pdf/renderer"

export interface ContactFormProps {
  service: ServiceId
  steps: Step[]
  answers: Record<string, string>
  totalPrice: number

  nombre: string
  email: string
  telefono: string

  sending: boolean
  submitSuccess: boolean
  submitError: string | null

  onNombreChange: (value: string) => void
  onEmailChange: (value: string) => void
  onTelefonoChange: (value: string) => void

  onSubmit: () => void
  onBack: () => void
  onReset: () => void
}

export function ContactForm({
  service,
  steps,
  answers,
  totalPrice,
  nombre,
  email,
  telefono,
  sending,
  submitSuccess,
  submitError,
  onNombreChange,
  onEmailChange,
  onTelefonoChange,
  onSubmit,
  onBack,
  onReset,
}: ContactFormProps) {
  const router = useRouter()

  /* ---------------- SUCCESS SCREEN ---------------- */

  if (submitSuccess) {
    return (
      <div className="w-full max-w-2xl mx-auto">
        <div className="bg-card rounded-2xl border border-border p-8 text-center space-y-6">

          <h2 className="text-2xl font-semibold">
            Cotización enviada correctamente
          </h2>

          <p className="text-sm text-muted-foreground">
            Gracias por tu interés en {SERVICE_LABELS[service]}.  
            Nos pondremos en contacto pronto.
          </p>

          <div className="flex flex-col gap-3 pt-4">

            {/* <button
              className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition"
            >
              <Download className="w-4 h-4" />
              Descargar presupuesto
            </button> */}
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
              onClick={onReset}
              className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl border border-border text-sm hover:bg-secondary transition"
            >
              <RefreshCcw className="w-4 h-4" />
              Cotizar otro proyecto
            </button>

            <button
              onClick={() => router.push("/")}
              className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl border border-border text-sm hover:bg-secondary transition"
            >
              <Home className="w-4 h-4" />
              Volver al inicio
            </button>

          </div>
        </div>
      </div>
    )
  }

  /* ---------------- FORM ---------------- */

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-card rounded-2xl border border-border overflow-hidden">

        {/* Price */}
        <div className="bg-foreground p-8 text-center">
          <p className="text-white/60 text-sm mb-1">
            Tu estimación para {SERVICE_LABELS[service]}
          </p>

          <div className="text-4xl font-bold text-white">
            ${totalPrice.toLocaleString("es-AR")}
          </div>
        </div>

        <div className="p-8">

          {submitError && (
            <div className="mb-4 rounded-xl border border-red-500/40 bg-red-500/10 text-red-400 text-sm px-4 py-3">
              {submitError}
            </div>
          )}

          <div className="space-y-4 mb-8">

            <input
              type="text"
              placeholder="Tu nombre"
              value={nombre}
              onChange={(e) => onNombreChange(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm"
            />

            <input
              type="email"
              placeholder="Tu email"
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm"
            />

            <input
              type="tel"
              placeholder="Tu teléfono"
              value={telefono}
              onChange={(e) => onTelefonoChange(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm"
            />

          </div>

          <div className="flex flex-col gap-3">

            <button
              onClick={onSubmit}
              disabled={sending}
              className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition disabled:opacity-60"
            >
              <Send className="w-4 h-4" />
              {sending ? "Enviando..." : "Enviar cotización"}
            </button>

          </div>

          <button
            onClick={onBack}
            className="mt-4 flex items-center justify-center gap-2 w-full py-2.5 text-sm text-muted-foreground hover:text-foreground transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al resumen
          </button>

        </div>
      </div>
    </div>
  )
}