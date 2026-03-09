"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import type { ServiceId } from "./types"
import { BASE_PRICES, STEPS_BY_SERVICE, SERVICE_LABELS } from "./config"
import { ServiceSelector } from "./service-selector"
import { WizardSteps } from "./wizard-steps"
import { ResultSummary } from "./result-summary"
import { ContactForm } from "./contact-form"

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
  const [telefono, setTelefono] = useState("")
  const [sending, setSending] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const steps = selectedService ? STEPS_BY_SERVICE[selectedService] : []
  const basePrice = selectedService ? BASE_PRICES[selectedService] : 0

  const totalPrice = Object.entries(answers).reduce((acc, [stepId, value]) => {
    const step = steps.find((s) => s.id === stepId)
    if (!step) return acc
    const option = step.options.find((o) => o.value === value)
    return acc + (option?.price ?? 0)
  }, basePrice)

  const handleServiceSelect = (id: ServiceId) => {
    setSelectedService(id)
    setCurrentStep(0)
    setAnswers({})
    setShowResult(false)
    setShowContactForm(false)
    setSubmitSuccess(false)
    setSubmitError(null)
  }

  const handleAnswer = (value: string) => {
    const currentStepData = steps[currentStep]
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
      setSubmitSuccess(false)
      setSubmitError(null)
    }
  }

  const resetWizard = () => {
    setSelectedService(null)
    setCurrentStep(0)
    setAnswers({})
    setShowResult(false)
    setShowContactForm(false)
    setNombre("")
    setEmail("")
    setTelefono("")
    setSubmitSuccess(false)
    setSubmitError(null)
  }

  // const handleSubmit = async () => {
  //   setSending(true)
  //   setSubmitSuccess(false)
  //   setSubmitError(null)

  //   try {
  //     const { supabase } = await import("@/lib/supabase")
  //     const respuestas = steps.map((s) => ({
  //       id: s.id,
  //       value: answers[s.id],
  //       label: s.options.find((o) => o.value === answers[s.id])?.label,
  //     }))

  //     const { error } = await supabase.from("cotizaciones").insert({
  //       servicio: selectedService,
  //       nombre,
  //       email,
  //       telefono,
  //       total_estimado: totalPrice,
  //       respuestas,
  //     })

  //     if (error) throw error

  //     setSubmitSuccess(true)
  //     setTimeout(() => {
  //       setSubmitSuccess(false)
  //     }, 6000)
  //   } catch (err) {
  //     console.error("Error al enviar cotización:", err)
  //     setSubmitError("Hubo un error al enviar. Intentá de nuevo o contactanos por WhatsApp.")
  //     setTimeout(() => {
  //       setSubmitError(null)
  //     }, 6000)
  //   } finally {
  //     setSending(false)
  //   }
  // }
  const handleSubmit = async () => {
  setSending(true)
  setSubmitSuccess(false)
  setSubmitError(null)

  try {
    const { supabase } = await import("@/lib/supabase")

    const respuestas = steps.map((s) => ({
      id: s.id,
      value: answers[s.id],
      label: s.options.find((o) => o.value === answers[s.id])?.label,
    }))

    const { error } = await supabase.from("cotizaciones").insert({
      servicio: selectedService,
      nombre,
      email,
      telefono,
      total_estimado: totalPrice,
      respuestas,
    })

    if (error) throw error

    setSubmitSuccess(true)

  } catch (err) {
    console.error("Error al enviar cotización:", err)

    setSubmitError(
      "Hubo un error al enviar. Intentá de nuevo o contactanos por WhatsApp."
    )

    setTimeout(() => {
      setSubmitError(null)
    }, 6000)

  } finally {
    setSending(false)
  }
}

  const buildWhatsAppMessage = () => {
    if (!selectedService) return ""
    const lines = [
      `Hola, quiero cotizar un *${SERVICE_LABELS[selectedService]}*.`,
      nombre ? `Soy *${nombre}*${email ? ` (${email})` : ""}${telefono ? ` - Tel: ${telefono}` : ""}.` : "",
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

  const buildWhatsAppUrl = () => `https://wa.me/5492284656640?text=${buildWhatsAppMessage()}`

  // ─── Service Selector ─────────────────────────────────────────────────────
  if (!selectedService) {
    return <ServiceSelector onSelect={handleServiceSelect} />
  }

  // ─── Contact Form ─────────────────────────────────────────────────────────
  if (showContactForm) {
    return (
      <ContactForm
        service={selectedService}
        steps={steps}
        answers={answers}
        totalPrice={totalPrice}
        nombre={nombre}
        email={email}
        telefono={telefono}
        sending={sending}
        submitSuccess={submitSuccess}
        submitError={submitError}
        onNombreChange={setNombre}
        onEmailChange={setEmail}
        onTelefonoChange={setTelefono}
        onSubmit={handleSubmit}
        onBack={handleBack}
        onReset={resetWizard}
        buildWhatsAppUrl={buildWhatsAppUrl}
      />
    )
  }

  // ─── Result Summary ──────────────────────────────────────────────────────
  if (showResult) {
    return (
      <ResultSummary
        service={selectedService}
        steps={steps}
        answers={answers}
        totalPrice={totalPrice}
        onSendQuote={() => setShowContactForm(true)}
        onBack={handleBack}
      />
    )
  }

  // ─── Wizard Steps ─────────────────────────────────────────────────────────
  return (
    <WizardSteps
      service={selectedService}
      steps={steps}
      currentStep={currentStep}
      answers={answers}
      totalPrice={totalPrice}
      onAnswer={handleAnswer}
      onNext={handleNext}
      onBack={handleBack}
    />
  )
}
