export function AboutSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/80" id="quienes-somos">
      <div className="max-w-4xl mx-auto text-center">

        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
          Quiénes somos
        </p>

        {/* <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
          Tecnología pensada para impulsar negocios
        </h2> */}

        <p className="text-muted-foreground leading-relaxed text-lg">
          Nuestro objetivo es desarrollar la mejor solución posible para cada cliente.
          Cada proyecto es diferente,  por eso trabajamos con un enfoque flexible,
          adaptando la tecnología a las necesidades reales de cada negocio.
        </p>

        <p className="text-muted-foreground leading-relaxed mt-4">
          Utilizamos herramientas modernas, incluyendo inteligencia artificial,
          para optimizar tiempos de desarrollo, reducir costos y mantener siempre
          un alto estándar de calidad en cada proyecto.
        </p>

      </div>
    </section>
  )
}