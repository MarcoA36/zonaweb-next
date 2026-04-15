import { Analytics } from "@vercel/analytics/next"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="font-sans antialiased">
      {children}
      {process.env.NODE_ENV === 'production' && <Analytics />}
    </div>
  )
}