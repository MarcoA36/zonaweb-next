"use client"

import { useState, useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"
import { ArrowLeft, ArrowRight, Check, MessageCircle, Download, Send, User, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

// ─── Types ────────────────────────────────────────────────────────────────────

type ServiceId = "web" | "sistema" | "app"

interface Option {
  label: string
  description?: string
  price: number
  value: string
}

interface Step {
  id: string
  question: string
  hint?: string
  options: Option[]
}

// ─── Pricing config ───────────────────────────────────────────────────────────

const BASE_PRICES: Record<ServiceId, number> = {
  web: 150000,
  sistema: 400000,
  app: 600000,
}

const STEPS_BY_SERVICE: Record<ServiceId, Step[]> = {
  web: [
    {
      id: "tipo",
      question: "¿Qué tipo de sitio necesitás?",
      hint: "Elegí el que mejor describe tu proyecto",
      options: [
        { label: "Sitio institucional", description: "Presentación de tu empresa o servicio", price: 0, value: "institucional" },
        { label: "Landing page", description: "Página de captación de clientes", price: -30000, value: "landing" },
        { label: "Tienda online", description: "Venta de productos o servicios", price: 120000, value: "ecommerce" },
        { label: "Portal / Directorio", description: "Listados, inmobiliaria, etc.", price: 90000, value: "portal" },
      ],
    },
    {
      id: "panel",
      question: "¿Necesitás panel para gestionar el contenido?",
      options: [
        { label: "No necesito", description: "El contenido no cambia seguido", price: 0, value: "no" },
        { label: "Edición básica", description: "Textos e imágenes simples", price: 40000, value: "basico" },
        { label: "Gestión completa", description: "Productos, entradas, formularios", price: 90000, value: "completo" },
      ],
    },
    {
      id: "seo",
      question: "¿Qué nivel de SEO necesitás?",
      options: [
        { label: "SEO básico", description: "Metadatos y estructura base", price: 0, value: "basico" },
        { label: "SEO avanzado", description: "Optimización completa + velocidad", price: 50000, value: "avanzado" },
        { label: "Sin SEO por ahora", price: -20000, value: "ninguno" },
      ],
    },
    {
      id: "identidad",
      question: "¿Cómo está tu identidad visual?",
      options: [
        { label: "Tengo logo y marca", description: "Solo necesito aplicar mi branding", price: 0, value: "completa" },
        { label: "Tengo logo pero necesita mejoras", price: 30000, value: "parcial" },
        { label: "No tengo identidad visual", description: "Necesito diseño desde cero", price: 80000, value: "ninguna" },
      ],
    },
    {
      id: "contenido",
      question: "¿Cómo está tu contenido?",
      options: [
        { label: "Tengo textos listos", description: "Solo necesito publicarlos", price: 0, value: "listo" },
        { label: "Necesito asesoramiento", price: 25000, value: "asesoramiento" },
        { label: "Necesito redacción completa", description: "Copywriting + estructura", price: 60000, value: "completo" },
      ],
    },
  ],
  sistema: [
    {
      id: "tipo",
      question: "¿Qué tipo de sistema necesitás?",
      options: [
        { label: "CRM / Clientes", description: "Gestión de contactos y ventas", price: 0, value: "crm" },
        { label: "Reservas / Turnos", description: "Sistema de agendamiento online", price: 80000, value: "reservas" },
        { label: "Inventario / Stock", description: "Control de productos y movimientos", price: 60000, value: "inventario" },
        { label: "Facturación", description: "Presupuestos, facturas y pagos", price: 100000, value: "facturacion" },
        { label: "Portal inmobiliario", description: "Propiedades, visitas y clientes", price: 150000, value: "inmobiliario" },
      ],
    },
    {
      id: "usuarios",
      question: "¿Cuántos usuarios van a usar el sistema?",
      options: [
        { label: "1 a 3 usuarios", price: 0, value: "pequeño" },
        { label: "4 a 10 usuarios", price: 80000, value: "mediano" },
        { label: "Más de 10 usuarios", description: "Requiere infraestructura escalable", price: 180000, value: "grande" },
      ],
    },
    {
      id: "integraciones",
      question: "¿Necesitás integraciones externas?",
      options: [
        { label: "No por ahora", price: 0, value: "ninguna" },
        { label: "WhatsApp / Email automático", price: 50000, value: "mensajeria" },
        { label: "Pasarela de pago", description: "MercadoPago, Stripe, etc.", price: 80000, value: "pago" },
        { label: "Múltiples integraciones", price: 150000, value: "multiples" },
      ],
    },
    {
      id: "soporte",
      question: "¿Qué tipo de soporte necesitás?",
      options: [
        { label: "Sin soporte continuo", price: 0, value: "ninguno" },
        { label: "Soporte por email / WhatsApp", price: 30000, value: "remoto" },
        { label: "Soporte + mejoras mensuales", price: 80000, value: "completo" },
      ],
    },
  ],
  app: [
    {
      id: "plataforma",
      question: "¿En qué plataformas necesitás la app?",
      options: [
        { label: "Solo Android", price: 0, value: "android" },
        { label: "Solo iOS (iPhone)", price: 30000, value: "ios" },
        { label: "Android + iOS", description: "Recomendado para mayor alcance", price: 100000, value: "ambas" },
      ],
    },
    {
      id: "tipo",
      question: "¿Cuál es la función principal de la app?",
      options: [
        { label: "App informativa / vitrina", description: "Contenido y noticias", price: 0, value: "informativa" },
        { label: "App con usuarios y perfiles", price: 120000, value: "usuarios" },
        { label: "Marketplace / E-commerce", description: "Compra-venta entre usuarios", price: 300000, value: "marketplace" },
        { label: "App de gestión interna", description: "Uso del equipo de trabajo", price: 200000, value: "gestion" },
      ],
    },
    {
      id: "backend",
      question: "¿Necesitás backend / base de datos propia?",
      options: [
        { label: "No, con servicios de terceros alcanza", price: 0, value: "terceros" },
        { label: "Sí, quiero mi propio servidor", description: "Mayor control y seguridad", price: 150000, value: "propio" },
      ],
    },
    {
      id: "diseño",
      question: "¿Cómo está tu identidad visual?",
      options: [
        { label: "Tengo branding completo", description: "Guía de estilos, colores, tipografía", price: 0, value: "completa" },
        { label: "Tengo logo básico", price: 40000, value: "basico" },
        { label: "Necesito diseño desde cero", description: "Branding + UI/UX de la app", price: 120000, value: "ninguna" },
      ],
    },
    {
      id: "extras",
      question: "¿Qué funciones adicionales necesitás?",
      hint: "Seleccioná la que aplica",
      options: [
        { label: "Notificaciones push", price: 40000, value: "push" },
        { label: "Chat en tiempo real", price: 80000, value: "chat" },
        { label: "Mapa / Geolocalización", price: 60000, value: "mapa" },
        { label: "Sin extras por ahora", price: 0, value: "ninguno" },
      ],
    },
  ],
}

const SERVICE_LABELS: Record<ServiceId, string> = {
  web: "Sitio Web",
  sistema: "Sistema de Gestión",
  app: "App Móvil",
}

// ─── Result Card (rendered & captured as image) ───────────────────────────────

function QuoteCard({
  service,
  steps,
  answers,
  totalPrice,
  nombre,
  email,
}: {
  service: ServiceId
  steps: Step[]
  answers: Record<string, string>
  totalPrice: number
  nombre: string
  email: string
}) {
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

// ─── Main Component ───────────────────────────────────────────────────────────

export function CotizadorWizard() {
  const searchParams = useSearchParams()
  const initialService = (searchParams.get("servicio") as ServiceId) || null

  const [selectedService, setSelectedService] = useState<ServiceId | null>(initialService)
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResult, setShowResult] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [sending, setSending] = useState(false)
  const quoteRef = useRef<HTMLDivElement>(null)

  const steps = selectedService ? STEPS_BY_SERVICE[selectedService] : []
  const basePrice = selectedService ? BASE_PRICES[selectedService] : 0

  const totalPrice = Object.entries(answers).reduce((acc, [stepId, value]) => {
    const step = steps.find((s) => s.id === stepId)
    if (!step) return acc
    const option = step.options.find((o) => o.value === value)
    return acc + (option?.price ?? 0)
  }, basePrice)

  const currentStepData = steps[currentStep]
  const currentAnswer = currentStepData ? answers[currentStepData.id] : undefined
  const progress = steps.length > 0 ? ((currentStep + 1) / steps.length) * 100 : 0

  const handleServiceSelect = (id: ServiceId) => {
    setSelectedService(id)
    setCurrentStep(0)
    setAnswers({})
    setShowResult(false)
    setShowContactForm(false)
  }

  const handleAnswer = (value: string) => {
    if (!currentStepData) return
    setAnswers((prev) => ({ ...prev, [currentStepData.id]: value }))
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((s) => s + 1)
    } else {
      setShowResult(true)
    }
  }

  const handleBack = () => {
    if (showContactForm) {
      setShowContactForm(false)
    } else if (showResult) {
      setShowResult(false)
    } else if (currentStep > 0) {
      setCurrentStep((s) => s - 1)
    } else {
      setSelectedService(null)
      setAnswers({})
    }
  }

  const captureImage = async (): Promise<Blob | null> => {
    const el = document.getElementById("quote-card")
    if (!el) return null
    try {
      const html2canvas = (await import("html2canvas")).default
      const canvas = await html2canvas(el, {
        backgroundColor: "#0f172a",
        scale: 2,
        useCORS: true,
        logging: false,
      })
      return await new Promise((resolve) => canvas.toBlob((b) => resolve(b), "image/png"))
    } catch {
      return null
    }
  }

  const handleDownload = async () => {
    setSending(true)
    const blob = await captureImage()
    if (blob) {
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `cotizacion-zona-web-${selectedService}.png`
      a.click()
      URL.revokeObjectURL(url)
    }
    setSending(false)
  }

  const handleShare = async () => {
    setSending(true)
    const blob = await captureImage()
    if (blob && navigator.share) {
      try {
        const file = new File([blob], "cotizacion-zona-web.png", { type: "image/png" })
        await navigator.share({ files: [file], title: "Presupuesto Zona Web" })
      } catch {
        // user cancelled or not supported, fallback to download
        const url = URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = `cotizacion-zona-web-${selectedService}.png`
        a.click()
        URL.revokeObjectURL(url)
      }
    } else if (blob) {
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `cotizacion-zona-web-${selectedService}.png`
      a.click()
      URL.revokeObjectURL(url)
    }
    setSending(false)
  }

  const buildWhatsAppMessage = () => {
    const lines = [
      `Hola, quiero cotizar un *${SERVICE_LABELS[selectedService!]}*.`,
      nombre ? `Soy *${nombre}*${email ? ` (${email})` : ""}.` : "",
      "",
      ...steps.map((step) => {
        const option = step.options.find((o) => o.value === answers[step.id])
        return `• ${step.question.replace("¿", "").replace("?", "")}: *${option?.label ?? "Sin respuesta"}*`
      }),
      "",
      `*Estimación: $${totalPrice.toLocaleString("es-AR")}*`,
    ].filter((l) => l !== undefined)
    return encodeURIComponent(lines.join("\n"))
  }

  // ─── Service Selector ─────────────────────────────────────────────────────
  if (!selectedService) {
    const icons: Record<ServiceId, string> = { web: "🌐", sistema: "⚙️", app: "📱" }
    const descriptions: Record<ServiceId, string> = {
      web: "Sitios institucionales, tiendas online, landing pages",
      sistema: "CRM, reservas, facturación, portales internos",
      app: "Apps iOS y Android para tu negocio",
    }
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
              onClick={() => handleServiceSelect(id)}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary hover:shadow-lg transition-all text-left"
            >
              <div className="text-3xl mb-4">{icons[id]}</div>
              <div className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {SERVICE_LABELS[id]}
              </div>
              <div className="text-sm text-muted-foreground leading-relaxed">{descriptions[id]}</div>
              <div className="mt-4 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Cotizar este servicio &rarr;
              </div>
            </button>
          ))}
        </div>
      </div>
    )
  }

  // ─── Contact Form (before sending) ───────────────────────────────────────
  if (showContactForm) {
    return (
      <div className="w-full max-w-2xl mx-auto">
        {/* Hidden quote card for capture */}
        <div style={{ position: "fixed", left: -9999, top: 0, pointerEvents: "none", opacity: 0 }}>
          {selectedService && (
            <QuoteCard
              service={selectedService}
              steps={steps}
              answers={answers}
              totalPrice={totalPrice}
              nombre={nombre}
              email={email}
            />
          )}
        </div>

        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          {/* Price header */}
          <div className="bg-foreground p-8 text-center">
            <p className="text-white/60 text-sm mb-1">Tu estimación para {SERVICE_LABELS[selectedService]}</p>
            <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
              ${totalPrice.toLocaleString("es-AR")}
            </div>
            <p className="text-white/40 text-xs">Precisión aproximada del 95%</p>
          </div>

          <div className="p-8">
            <h3 className="text-lg font-bold text-foreground mb-1">Tus datos de contacto</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Completá para personalizar la cotización. Podés dejarlos en blanco si preferís.
            </p>

            <div className="space-y-4 mb-8">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Tu nombre (opcional)"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="Tu email (opcional)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col gap-3">
              <button
                onClick={handleShare}
                disabled={sending}
                className="flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-xl bg-foreground text-white font-semibold text-sm hover:bg-foreground/90 transition-colors disabled:opacity-60"
              >
                <Download className="w-4 h-4" />
                {sending ? "Generando imagen..." : "Descargar cotización (imagen)"}
              </button>

              <a
                href={`https://wa.me/5492284656640?text=${buildWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Enviar por WhatsApp
              </a>
            </div>

            <button
              onClick={handleBack}
              className="mt-4 flex items-center justify-center gap-2 w-full py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al resumen
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ─── Result Summary ───────────────────────────────────────────────────────
  if (showResult) {
    return (
      <div className="w-full max-w-2xl mx-auto">
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          {/* Header */}
          <div className="bg-foreground p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Check className="w-7 h-7 text-primary" />
            </div>
            <p className="text-white/60 text-sm mb-1">Estimación para tu {SERVICE_LABELS[selectedService]}</p>
            <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
              ${totalPrice.toLocaleString("es-AR")}
            </div>
            <p className="text-white/40 text-xs">Precisión aproximada del 95%</p>
          </div>

          {/* Summary */}
          <div className="p-8">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              Resumen de tu proyecto
            </h3>
            <div className="space-y-3 mb-8">
              {steps.map((step) => {
                const option = step.options.find((o) => o.value === answers[step.id])
                return (
                  <div key={step.id} className="flex items-start justify-between gap-4 py-2 border-b border-border last:border-0">
                    <span className="text-sm text-muted-foreground">{step.question.replace("¿", "").replace("?", "")}</span>
                    <span className="text-sm font-medium text-foreground text-right">{option?.label ?? "-"}</span>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowContactForm(true)}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                <Send className="w-4 h-4" />
                Enviar cotización
              </button>
              <button
                onClick={handleBack}
                className="flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Modificar respuestas
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ─── Wizard Steps ─────────────────────────────────────────────────────────
  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-muted-foreground">{SERVICE_LABELS[selectedService]}</span>
          <span className="text-sm text-muted-foreground">
            Pregunta {currentStep + 1} de {steps.length}
          </span>
        </div>
        <div className="h-1.5 bg-border rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Card */}
      {currentStepData && (
        <div className="bg-card rounded-2xl border border-border p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2 text-balance">
            {currentStepData.question}
          </h2>
          {currentStepData.hint && (
            <p className="text-sm text-muted-foreground mb-6">{currentStepData.hint}</p>
          )}
          {!currentStepData.hint && <div className="mb-6" />}

          <div className="flex flex-col gap-3 mb-8">
            {currentStepData.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(option.value)}
                className={cn(
                  "flex items-start justify-between gap-4 p-4 rounded-xl border-2 text-left transition-all",
                  currentAnswer === option.value
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/40 hover:bg-secondary/50"
                )}
              >
                <div className="flex-1">
                  <div className="font-medium text-foreground text-sm">{option.label}</div>
                  {option.description && (
                    <div className="text-xs text-muted-foreground mt-0.5">{option.description}</div>
                  )}
                </div>
                <div
                  className={cn(
                    "w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5",
                    currentAnswer === option.value ? "border-primary bg-primary" : "border-border"
                  )}
                >
                  {currentAnswer === option.value && <Check className="w-3 h-3 text-white" />}
                </div>
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {currentStep === 0 ? "Cambiar servicio" : "Anterior"}
            </button>
            <button
              onClick={handleNext}
              disabled={!currentAnswer}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {currentStep === steps.length - 1 ? "Ver presupuesto" : "Siguiente"}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Price preview */}
      {Object.keys(answers).length > 0 && (
        <div className="mt-4 text-center text-sm text-muted-foreground">
          Estimación parcial:{" "}
          <span className="font-semibold text-foreground">${totalPrice.toLocaleString("es-AR")}</span>
        </div>
      )}
    </div>
  )
}
