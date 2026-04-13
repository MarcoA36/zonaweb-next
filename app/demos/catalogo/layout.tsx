import Link from "next/link"

export default function CatalogoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen bg-background">
      {/* HEADER */}
      <header className="border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 flex items-center justify-between">
          <Link href="/demos" className="text-sm text-muted-foreground hover:text-foreground">
            ← Volver a demos
          </Link>

          <Link
            href="/contacto"
            className="text-sm font-semibold text-primary hover:underline"
          >
            Pedir mi web
          </Link>
        </div>
      </header>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        {children}
      </div>
    </main>
  )
}