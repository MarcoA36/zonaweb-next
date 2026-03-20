export function EscalableSection() {
  const features = [
    "Formularios personalizados",
    "Cobros online integrados",
    "Cálculo automático de precios o presupuestos",
    "Panel para gestionar información fácilmente",
    "Reservas o turnos desde la web",
    "Áreas privadas para clientes o usuarios",
    "Conexión con sistemas o plataformas existentes",
    "Chat o canales de atención directa",
    "Reportes y estadísticas para tu negocio",
  ]

  return (
    <section className="py-24 px-6 bg-secondary/40">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Desarrollo personalizado
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Soluciones a medida
          </h2>

          <p className="text-muted-foreground text-lg">
            Cada negocio es diferente. Podemos desarrollar herramientas
            específicas para automatizar procesos, mejorar la gestión
            y ofrecer una mejor experiencia a tus clientes.
          </p>

        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">

          {features.map((feature, i) => (
            <div
              key={i}
              className="flex items-start gap-3 border border-border rounded-xl px-5 py-4 bg-background hover:shadow-sm transition"
            >
              <span className="text-primary font-bold mt-[2px]">
                ✓
              </span>

              <span className="text-sm text-foreground">
                {feature}
              </span>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}