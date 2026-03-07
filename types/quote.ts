export type QuoteOption = {
  label: string
  value: string
  price: number
  description?: string
}

export type QuoteStep = {
  id: string
  question: string
  hint?: string
  options: QuoteOption[]
}

export type QuoteConfig = {
  service: string
  basePrice: number
  steps: QuoteStep[]
}