import Link from "next/link"
import { MessageCircle, Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer id="nosotros" className="bg-foreground border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">Z</span>
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                Zona<span className="text-primary">Web</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              Creamos sitios web, plataformas y aplicaciones con diseño, tecnología y estrategia. Soluciones pensadas para destacar y escalar.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/5492284656640"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:hola@zonaweb.com"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-widest">Navegación</h4>
            <ul className="space-y-3">
              {[
                { href: "#servicios", label: "Servicios" },
                { href: "#planes", label: "Planes" },
                { href: "#nosotros", label: "Nosotros" },
                { href: "#faq", label: "Preguntas frecuentes" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-widest">Servicios</h4>
            <ul className="space-y-3">
              {[
                { href: "/cotizador?servicio=web", label: "Sitios Web" },
                { href: "/cotizador?servicio=sistema", label: "Sistemas de Gestión" },
                { href: "/cotizador?servicio=app", label: "Apps Móviles" },
                { href: "/cotizador", label: "Cotizador" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Zona Web. Todos los derechos reservados.
          </p>
          <p className="text-sm text-white/40">
            Diseñado y desarrollado en Argentina
          </p>
        </div>
      </div>
    </footer>
  )
}
