import Link from "next/link";

const demos = [
  {
    title: "Inmobiliaria",
    description: "Propiedades con fotos, precios y contacto directo.",
    // href: "https://inmobiliaria-demo-six.vercel.app/",
    href: "https://inmobiliaria-demo-2.vercel.app/",
    image: "/demo_inmo.webp",
  },
  {
    title: "Hotel",
    description: "Mostrá habitaciones y recibí reservas o consultas.",
    href: "https://hotel-demo-rho.vercel.app/",
    image: "/demo_hotel.webp",
  },
  {
    title: "Restaurante",
    description: "Mostra tu carta online y toma pedidos por WhatsApp.",
    href: "https://resto-demo-nine.vercel.app/",
    image: "/demo_resto.webp",
  }
];

export default function DemoSection() {
  return (
    <section className="py-24 px-4 bg-primary">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
 <h2 className="text-4xl md:text-5xl text-white font-bold mb-4">
  Tu negocio listo para recibir consultas
</h2>

<p className="text-white/80 max-w-xl mx-auto">
  Mostrá tus productos o servicios de forma clara y permití que te contacten en segundos, sin complicaciones.
</p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

          {demos.map((demo, i) => (
            <Link
              key={i}
              href={demo.href}
              className="group block bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={demo.image}
                  alt={demo.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                />

              
              </div>

              {/* CONTENT */}
              <div className="p-5 flex flex-col">
                <h3 className="text-lg font-semibold mb-1">
                  {demo.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {demo.description}
                </p>

                <span className="text-sm font-medium text-black">
                  Ver demo →
                </span>
              </div>
            </Link>
          ))}

        </div>

        {/* CTA integrado (no separado gigante) */}
        <div className="bg-white/10 rounded-2xl p-8 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-white mb-3">
            ¿Querés algo así para tu negocio?
          </h3>

          <p className="text-white/80 mb-6">
            Lo adaptamos a tu marca y lo dejamos listo para empezar a recibir consultas.
          </p>

          <a
            href="https://wa.me/5492284XXXXXX?text=Hola,%20quiero%20una%20web"
            target="_blank"
            className="inline-block bg-white text-black px-8 py-3 rounded-xl font-medium hover:bg-gray-200 transition"
          >
            Pedir mi web
          </a>
        </div>

      </div>
    </section>
  );
}