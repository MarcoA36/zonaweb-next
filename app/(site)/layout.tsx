import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen bg-background">

      {/* Top bar */}
      <div className="border-b border-border bg-card/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>

          <div className="flex items-center gap-2">
            <span className="font-bold text-base text-foreground tracking-tight">
              Zona<span className="text-primary">Web</span>
            </span>
          </div>

        </div>
      </div>

      {children}

    </main>
  )
}