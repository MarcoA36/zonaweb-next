"use client"

import type { ServiceId } from "./types"
import { STEPS_BY_SERVICE, SERVICE_LABELS } from "./config"

const ICONS: Record<ServiceId, string> = { web: "🌐", sistema: "⚙️", app: "📱" }
const DESCRIPTIONS: Record<ServiceId, string> = {
  web: "Sitios institucionales, tiendas online, landing pages",
  sistema: "CRM, reservas, facturación, portales internos",
  app: "Apps iOS y Android para tu negocio",
}

export interface ServiceSelectorProps {
  onSelect: (id: ServiceId) => void
}

export function ServiceSelector({ onSelect }: ServiceSelectorProps) {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
          ¿Qué servicio querés cotizar?
        </h2>
        <p className="text-muted-foreground">
          Seleccioná el tipo de proyecto y te hacemos preguntas específicas para darte un precio preciso.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {(Object.keys(STEPS_BY_SERVICE) as ServiceId[]).map((id) => (
          <button
            key={id}
            onClick={() => onSelect(id)}
            className="group p-6 rounded-2xl bg-card border border-border hover:border-primary hover:shadow-lg transition-all text-left"
          >
            <div className="text-3xl mb-4">{ICONS[id]}</div>
            <div className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {SERVICE_LABELS[id]}
            </div>
            <div className="text-sm text-muted-foreground leading-relaxed">{DESCRIPTIONS[id]}</div>
            <div className="mt-4 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              Cotizar este servicio &rarr;
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
