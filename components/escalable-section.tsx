export function EscalableSection() {
  const features = [
    "Formularios avanzados",
    "Integración con WhatsApp",
    "Pagos online (MercadoPago / Stripe)",
    "Tarifadores automáticos",
    "Panel de administración",
    "Reservas o turnos online",
    "Área privada para clientes",
    "Integraciones con otros sistemas",
  ]

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Tu sitio puede crecer cuando lo necesites
        </h2>

        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          Empezá con lo esencial y agregá nuevas funciones cuando tu negocio lo requiera.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-left mb-12">
          {features.map((feature, i) => (
            <div
              key={i}
              className="border rounded-lg px-4 py-3 bg-background hover:shadow-sm transition"
            >
              {feature}
            </div>
          ))}
        </div>

        <a
          href="#cotizador"
          className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Cotizar mi proyecto
        </a>
      </div>
    </section>
  )
}