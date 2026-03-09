"use client"

import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import type { ServiceId, Step } from "./types"
import { SERVICE_LABELS } from "./config"

export interface WizardStepsProps {
  service: ServiceId
  steps: Step[]
  currentStep: number
  answers: Record<string, string>
  totalPrice: number
  onAnswer: (value: string) => void
  onNext: () => void
  onBack: () => void
}

export function WizardSteps({
  service,
  steps,
  currentStep,
  answers,
  totalPrice,
  onAnswer,
  onNext,
  onBack,
}: WizardStepsProps) {
  const currentStepData = steps[currentStep]
  const currentAnswer = currentStepData ? answers[currentStepData.id] : undefined
  const progress = steps.length > 0 ? ((currentStep + 1) / steps.length) * 100 : 0

  if (!currentStepData) return null

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-muted-foreground">{SERVICE_LABELS[service]}</span>
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
              onClick={() => onAnswer(option.value)}
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
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {currentStep === 0 ? "Cambiar servicio" : "Anterior"}
          </button>
          <button
            onClick={onNext}
            disabled={!currentAnswer}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {currentStep === steps.length - 1 ? "Ver presupuesto" : "Siguiente"}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

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
