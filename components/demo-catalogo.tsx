import Image from "next/image";

export function CatalogSection() {
  return (
    <section className="py-28 px-6 bg-foreground">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* IZQUIERDA - IMAGEN LIMPIA */}
        <div className="flex justify-center items-center">
          <Image
            src="/catalogo-mobile.png"
            alt="Catálogo online"
            width={380}
            height={760}
            className="object-contain"
            priority
          />
        </div>

        {/* DERECHA - NUEVO COPY */}
       <div>

  <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
    Para tiendas en crecimiento
  </p>

  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
    Ordená tu venta online sin complicarte
  </h2>

  <p className="text-white/70 text-lg mb-6">
    Si ya vendés y tenés movimiento, pero seguís pasando fotos, precios y stock por WhatsApp,
    tu proceso no está a la altura de tu negocio.
  </p>

  <p className="text-white/70 text-lg mb-10">
    Con un catálogo online, centralizás todo en un solo lugar y le das a tus clientes
    una forma clara, rápida y profesional de ver y elegir tus productos.
  </p>

  {/* BENEFICIOS */}
  <div className="space-y-4 mb-10">
    <p className="text-white">
      ✔ Imagen más profesional frente a tus clientes
    </p>
    <p className="text-white">
      ✔ Menos tiempo respondiendo consultas repetidas
    </p>
    <p className="text-white">
      ✔ Más orden, más control y más ventas
    </p>
  </div>

  {/* CTA */}
  <div className="flex flex-col sm:flex-row gap-4">
    <a
      href="https://catalogo-indumentaria-demo.vercel.app/"
      target="_blank"
      className="px-7 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition text-center"
    >
      Ver ejemplo
    </a>

    <a
      href="#contacto"
      className="px-7 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition text-center"
    >
      Solicitar catálogo
    </a>
  </div>

</div>
      </div>
    </section>
  );
}