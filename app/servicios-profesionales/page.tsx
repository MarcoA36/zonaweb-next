import Link from "next/link";

export default function ServiciosProfesionalesPage() {
  return (
    <main className="px-4 py-16 max-w-5xl mx-auto">

      {/* HERO */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Web profesional para ofrecer tus servicios
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          Mostrá tu trabajo, generá confianza y empezá a recibir consultas todos los días 
          sin depender solo de redes sociales.
        </p>

        <p className="text-2xl font-semibold mb-6">
          Desde $90.000
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/demos/servicios"
            className="bg-black text-white px-6 py-3 rounded-lg"
          >
            Ver demo 
          </Link>

          <a
            href="https://wa.me/5492284XXXXXX?text=Hola,%20quiero%20una%20web%20de%20servicios"
            target="_blank"
            className="border px-6 py-3 rounded-lg"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </section>

      {/* PARA QUIEN ES */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          ¿Para quién es esta web?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold mb-2">Profesionales</h3>
            <p className="text-sm text-gray-600">
              Abogados, contadores, psicólogos y más que quieran presencia online seria.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold mb-2">Oficios</h3>
            <p className="text-sm text-gray-600">
              Electricistas, plomeros, técnicos que necesitan más clientes.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold mb-2">Empresas de servicio</h3>
            <p className="text-sm text-gray-600">
              Negocios que quieren mostrar lo que hacen y generar confianza.
            </p>
          </div>
        </div>
      </section>

      {/* PROBLEMA → SOLUCION */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          ¿Por qué necesitás una web?
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-xl bg-gray-50">
            <h3 className="font-semibold mb-2">Sin web</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>❌ Dependés solo de redes sociales</li>
              <li>❌ Perdés clientes que no te encuentran</li>
              <li>❌ Menos confianza al no tener presencia profesional</li>
            </ul>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold mb-2">Con tu web</h3>
            <ul className="text-sm space-y-2">
              <li>✅ Te encuentran en Google</li>
              <li>✅ Mostrás tus servicios claramente</li>
              <li>✅ Recibís consultas directas por WhatsApp</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          ¿Qué incluye?
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Diseño claro y profesional",
            "Optimizado para celular y PC",
            "Botón de WhatsApp directo",
            "Formulario de contacto",
            "Sección de servicios",
            "Sección de testimonios",
            "Carga rápida",
            "SEO básico (Google)",
          ].map((item, i) => (
            <div key={i} className="p-4 border rounded-lg text-sm">
              ✔ {item}
            </div>
          ))}
        </div>
      </section>

      {/* DEMO DESTACADA */}
      <section className="mb-16 text-center">
        <h2 className="text-2xl font-semibold mb-6">
          Mirá cómo puede verse tu web
        </h2>

        <div className="border rounded-xl p-6 mb-6">
          {/* después metés iframe o imagen */}
          <p className="text-gray-500">[Acá va la demo]</p>
        </div>

        <Link
          href="/demos/servicios"
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Ver demo completa
        </Link>
      </section>

      {/* CTA FINAL */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Empezá a recibir más consultas
        </h2>

        <p className="text-gray-600 mb-6">
          Tu web lista en pocos días, sin complicaciones.
        </p>

        <a
          href="https://wa.me/5492284XXXXXX?text=Hola,%20quiero%20una%20web%20de%20servicios"
          target="_blank"
          className="bg-black text-white px-8 py-4 rounded-xl text-lg"
        >
          Pedir mi web ahora
        </a>
      </section>

    </main>
  );
}