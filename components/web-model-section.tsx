import Link from "next/link"

export function WebModelSection() {
  return (
    <section className="py-24 md:py-28 px-4 bg-primary">
      <div className="max-w-5xl mx-auto text-center">

        {/* Header */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          ¿Querés una{" "}
          <span className="text-white/80">web como esta</span>{" "}
          adaptada a tu negocio?
        </h2>

        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-12">
          Una página pensada para mostrar tu negocio, generar confianza y facilitar el contacto con tus clientes.
        </p>

        {/* Features */}
        <div className="grid gap-3 text-left max-w-2xl mx-auto mb-12">
          {[
        
            "Diseño adaptable a todos los dispositivos",
            "Botón de WhatsApp con mensaje directo",
            "Integración con redes sociales",
            "Formulario de contacto conectado a tu email",
            "Carga rápida y experiencia simple para el usuario",
          ].map((item) => (
            <div 
              key={item} 
              className="flex items-start gap-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition"
            >
              <span className="text-white font-bold mt-1">✔</span>
              <p className="text-white/90">{item}</p>
            </div>
          ))}
        </div>

        {/* Para quién es */}
        <div className="bg-white/10 border border-white/20 rounded-2xl p-6 mb-12">
          <p className="font-semibold text-white mb-4 text-lg">
            Ideal para:
          </p>

          <ul className="space-y-2 text-white/80">
            <li>• Negocios que quieren tener presencia online</li>
            <li>• Emprendedores que necesitan recibir consultas</li>
            <li>• Profesionales que quieren mostrar sus servicios</li>
            <li>• Comercios que buscan más clientes</li>
          </ul>
        </div>

        {/* CTA */}
        {/* <Link
        //   href="https://wa.me/5492284656640?text=Hola,%20me%20interesaría%20tener%20una%20web%20como%20esta%20para%20mi%20negocio"
          href="#contacto"
          target="_blank"
          className="inline-block bg-white text-primary px-10 py-5 rounded-xl font-semibold text-lg hover:bg-white/90 transition-all shadow-lg hover:scale-105"
        >
          Quiero una web así
        </Link> */}
        <a
  href="#contacto"
  className="inline-block bg-white text-primary px-10 py-5 rounded-xl font-semibold text-lg hover:bg-white/90 transition-all shadow-lg hover:scale-105"
>
  Quiero una web así
</a>

        {/* Extra */}
        <p className="text-sm text-white/70 mt-6">
          Cada sitio se adapta al rubro, contenido y necesidades de tu negocio.
        </p>

      </div>
    </section>
  )
}