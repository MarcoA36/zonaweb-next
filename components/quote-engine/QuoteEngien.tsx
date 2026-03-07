"use client"

import { useState } from "react"
import { QuoteConfig } from "@/types/quote"

export function QuoteEngine({ config }: { config: QuoteConfig }) {

  const { steps, basePrice } = config

  const [stepIndex, setStepIndex] = useState(0)

  const [answers, setAnswers] = useState<Record<string, string>>({})

  const step = steps[stepIndex]

  const totalPrice = Object.entries(answers).reduce((acc, [stepId, value]) => {
    const s = steps.find((s) => s.id === stepId)
    const opt = s?.options.find((o) => o.value === value)

    return acc + (opt?.price || 0)

  }, basePrice)


  function select(value: string) {
    setAnswers((prev) => ({
      ...prev,
      [step.id]: value,
    }))
  }


  function next() {
    if (stepIndex < steps.length - 1) {
      setStepIndex(stepIndex + 1)
    } else {
      setStepIndex(steps.length)
    }
  }


  if (stepIndex >= steps.length) {
    return (
      <div>
        <h2>Precio estimado</h2>
        <h3>${totalPrice.toLocaleString("es-AR")}</h3>
      </div>
    )
  }


  return (
    <div>

      <h2>{step.question}</h2>

      {step.options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => select(opt.value)}
        >
          {opt.label}
        </button>
      ))}

      <button onClick={next}>
        Siguiente
      </button>

    </div>
  )
}