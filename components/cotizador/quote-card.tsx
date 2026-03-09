"use client"

import type { ServiceId, Step } from "./types"
import { SERVICE_LABELS } from "./config"

export interface QuoteCardProps {
  service: ServiceId
  steps: Step[]
  answers: Record<string, string>
  totalPrice: number
  nombre: string
  email: string
}

export function QuoteCard({
  service,
  steps,
  answers,
  totalPrice,
  nombre,
  email,
}: QuoteCardProps) {
  return (
    <div
      id="quote-card"
      style={{
        fontFamily: "Inter, system-ui, sans-serif",
        background: "#0f172a",
        borderRadius: 20,
        padding: 40,
        width: 560,
        color: "#f8fafc",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28 }}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#3b82f6", marginBottom: 4 }}>
            Zona Web
          </div>
          <div style={{ fontSize: 22, fontWeight: 700, color: "#f8fafc" }}>
            Presupuesto estimado
          </div>
          <div style={{ fontSize: 13, color: "#94a3b8", marginTop: 2 }}>
            {SERVICE_LABELS[service]}
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 34, fontWeight: 800, color: "#f8fafc" }}>
            ${totalPrice.toLocaleString("es-AR")}
          </div>
          <div style={{ fontSize: 11, color: "#64748b" }}>estimación aprox.</div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: "#1e293b", marginBottom: 24 }} />

      {/* Detail rows */}
      <div style={{ marginBottom: 28 }}>
        {steps.map((step) => {
          const option = step.options.find((o) => o.value === answers[step.id])
          return (
            <div
              key={step.id}
              style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12, gap: 16 }}
            >
              <div style={{ fontSize: 13, color: "#94a3b8", flex: 1 }}>
                {step.question.replace("¿", "").replace("?", "")}
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#f8fafc", textAlign: "right" }}>
                {option?.label ?? "-"}
              </div>
            </div>
          )
        })}
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: "#1e293b", marginBottom: 20 }} />

      {/* Contact & disclaimer */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          {nombre && (
            <div style={{ fontSize: 13, fontWeight: 600, color: "#f8fafc" }}>{nombre}</div>
          )}
          {email && (
            <div style={{ fontSize: 12, color: "#64748b" }}>{email}</div>
          )}
        </div>
        <div style={{ fontSize: 11, color: "#475569", textAlign: "right" }}>
          Presupuesto no vinculante<br />
          zona-web-2026.vercel.app
        </div>
      </div>
    </div>
  )
}
