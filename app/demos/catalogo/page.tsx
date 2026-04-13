import Link from "next/link"

export default function CatalogoDemoPage() {
  return (
    <div className="space-y-14">

      {/* HERO */}
      <section>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
          Catálogo de productos para tu negocio
        </h1>

        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          Una forma simple de mostrar productos, precios e información sin depender de redes sociales o mensajes repetidos.
        </p>

        <Link
          href="/contacto"
          className="inline-flex mt-6 items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
        >
          Quiero un catálogo así
        </Link>
      </section>

      {/* EJEMPLO GRID */}
      <section>
        <h2 className="text-xl font-semibold mb-6">
          Ejemplo de catálogo
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">

          <div className="border border-border rounded-2xl p-5 bg-card">
            <h3 className="font-semibold">Producto 1</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Descripción del producto con detalles básicos y precio.
            </p>
          </div>

          <div className="border border-border rounded-2xl p-5 bg-card">
            <h3 className="font-semibold">Producto 2</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Descripción del producto con detalles básicos y precio.
            </p>
          </div>

          <div className="border border-border rounded-2xl p-5 bg-card">
            <h3 className="font-semibold">Producto 3</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Descripción del producto con detalles básicos y precio.
            </p>
          </div>

          <div className="border border-border rounded-2xl p-5 bg-card">
            <h3 className="font-semibold">Producto 4</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Descripción del producto con detalles básicos y precio.
            </p>
          </div>

        </div>
      </section>

      {/* BENEFICIO */}
      <section>
        <h2 className="text-xl font-semibold">
          Para qué sirve
        </h2>

        <p className="mt-4 text-muted-foreground">
          Permite centralizar todos tus productos en un solo lugar, con información clara y ordenada para que tus clientes puedan ver todo sin preguntar por WhatsApp cada vez.
        </p>
      </section>

      {/* CIERRE */}
      <section className="border-t border-border pt-10">
        <h3 className="text-xl font-semibold">
          ¿Querés algo así para tu negocio?
        </h3>

        <p className="mt-2 text-muted-foreground">
          Lo adaptamos a tus productos, tu marca y tu forma de vender.
        </p>

        <Link
          href="/contacto"
          className="inline-flex mt-5 items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
        >
          Contactar ahora
        </Link>
      </section>

    </div>
  )
}