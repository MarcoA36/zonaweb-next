import Image from "next/image";

export function CatalogSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 bg-foreground" id="negocios">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 md:items-start gap-8 sm:gap-10 md:gap-10 lg:gap-14 xl:gap-16">
        {/* IMAGEN — columna izquierda en md+ */}
        <div className="flex min-w-0 justify-center md:justify-end md:pr-2 lg:pr-4">
          <div className="relative aspect-[19/38] w-full max-w-[240px] sm:max-w-[280px] md:max-w-[300px] lg:max-w-[340px]">
            <Image
              src="/catalogo-mobile.png"
              alt="Catálogo online"
              fill
              className="object-contain object-center"
              sizes="(max-width: 767px) 72vw, (max-width: 1024px) 38vw, 360px"
              priority
            />
          </div>
        </div>

        {/* COPY + FEATURES + CTA — columna derecha en md+ */}
        <div className="min-w-0 flex flex-col md:pt-1 lg:pt-2">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Para tiendas en crecimiento
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-[2rem] lg:text-4xl xl:text-5xl font-bold text-white mb-5 md:mb-4 lg:mb-6 leading-tight">
            Ordená tu venta online sin complicarte
          </h2>

          <p className="text-white/70 text-base sm:text-lg mb-4 md:mb-3">
            Si ya vendés y tenés movimiento, pero seguís pasando fotos, precios y stock por WhatsApp,
            tu proceso no está a la altura de tu negocio.
          </p>

          <p className="text-white/70 text-base sm:text-lg mb-6 md:mb-6 lg:mb-8">
            Con un catálogo online, centralizás todo en un solo lugar y le das a tus clientes
            una forma clara, rápida y profesional de ver y elegir tus productos.
          </p>

          <div className="space-y-3 md:space-y-3.5 mb-6 md:mb-7 lg:mb-8">
            <p className="text-white text-sm sm:text-base">
              ✔ Imagen más profesional frente a tus clientes
            </p>
            <p className="text-white text-sm sm:text-base">
              ✔ Menos tiempo respondiendo consultas repetidas
            </p>
            <p className="text-white text-sm sm:text-base">
              ✔ Más orden, más control y más ventas
            </p>
          </div>

          <div className="mt-auto flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="https://catalogo-indumentaria-demo.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center px-7 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition text-center text-sm sm:text-base"
            >
              Ver ejemplo
            </a>

            <a
              href="#contacto"
              className="inline-flex justify-center px-7 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition text-center text-sm sm:text-base"
            >
              Solicitar catálogo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
