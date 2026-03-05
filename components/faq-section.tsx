"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "¿Cuánto tiempo tarda el desarrollo de un sitio web?",
    answer:
      "El tiempo varía según la complejidad del proyecto. Un sitio institucional básico puede estar listo en 1-3 días, mientras que proyectos más complejos con sistemas de gestión pueden requerir semanas.",
  },
  {
    question: "¿Qué es el hosting?",
    answer:
      "Es el servicio donde se aloja tu página web para que esté disponible en internet las 24 horas del día, los 365 días del año.",
  },
  {
    question: "¿Qué es el dominio?",
    answer:
      "Es el nombre de tu sitio web (por ejemplo: tunegocio.com). Es lo que las personas escriben en el navegador para encontrarte.",
  },
  {
    question: "¿Cuánto se paga después del primer año?",
    answer:
      "Luego del primer año, el costo depende del proveedor elegido. Podés renovar con nosotros o contratar planes de hosting compartido en Hostinger, DonWeb, etc.",
  },
  {
    question: "¿Ofrecen soporte después de entregado el proyecto?",
    answer:
      "Sí, ofrecemos planes de mantenimiento y soporte mensual. También podés contratar horas de soporte puntual según tus necesidades.",
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">FAQ</p>
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
