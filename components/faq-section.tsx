"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "¿Qué incluye el desarrollo del sitio web?",
    answer:
      "El desarrollo incluye diseño personalizado, adaptación para celulares, optimización básica para Google, configuración inicial y publicación online. Dependiendo del plan también puede incluir formulario de contacto, integración con WhatsApp y panel de administración.",
  },
 {
  question: "¿Tengo que pagar hosting y dominio?",
  answer:
    "No tenés que preocuparte por nada técnico. Nuestros planes incluyen el dominio y el hosting, por lo que nos encargamos de que tu sitio esté siempre online, seguro y funcionando correctamente. Ofrecemos planes mensuales o anuales que incluyen soporte, mantenimiento y acompañamiento continuo para que vos solo te enfoques en tu negocio.",
},
  {
    question: "¿Puedo pedir cambios después de que el sitio esté terminado?",
    answer:
      "Sí. Durante el desarrollo podés solicitar ajustes y modificaciones. Una vez entregado el sitio también ofrecemos soporte y mantenimiento para realizar cambios cuando lo necesites.",
  },
  {
    question: "¿El sitio funciona bien en celulares?",
    answer:
      "Sí. Todos los sitios que desarrollamos son responsive, lo que significa que se adaptan automáticamente a celulares, tablets y computadoras.",
  },
  {
    question: "¿Ofrecen mantenimiento del sitio?",
    answer:
      "Sí. Ofrecemos planes de mantenimiento que incluyen actualizaciones, mejoras, soporte técnico y monitoreo para que tu sitio funcione correctamente todo el tiempo.",
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {/* <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">FAQ</p> */}
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            Respondemos las dudas más comunes de nuestros clientes.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col divide-y divide-border">
          {faqs.map((faq, i) => (
            <div key={i} className="py-5">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex items-start justify-between w-full text-left gap-4 group"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 w-6 h-6 rounded-full border border-border flex items-center justify-center text-muted-foreground">
                  {open === i ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                </span>
              </button>
              {open === i && (
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed pr-10">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
