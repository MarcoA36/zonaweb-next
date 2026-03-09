export type ServiceId = "web" | "sistema" | "app"

export interface Option {
  label: string
  description?: string
  price: number
  value: string
}

export interface Step {
  id: string
  question: string
  hint?: string
  options: Option[]
}
