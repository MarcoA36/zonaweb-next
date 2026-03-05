// import type { Metadata } from 'next'
// import { Inter, Geist_Mono } from 'next/font/google'
// import { Analytics } from '@vercel/analytics/next'
// import './globals.css'

// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

// export const metadata: Metadata = {
//   title: 'Zona Web - Sitios web, sistemas de gestión y apps móviles',
//   description: 'Creamos sitios web, plataformas y aplicaciones con una combinación de diseño, tecnología y estrategia. Soluciones pensadas para destacar, optimizar procesos y escalar sin límites.',
//   generator: 'v0.app',
// }

// export const viewport = {
//   themeColor: '#1e3a8a',
//   width: 'device-width',
//   initialScale: 1,
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="es">
//       <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
//         {children}
//         <Analytics />
//       </body>
//     </html>
//   )
// }





import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Footer } from "@/components/footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "Zona Web - Sitios web, sistemas de gestión y apps móviles",
  description:
    "Creamos sitios web, plataformas y aplicaciones con una combinación de diseño, tecnología y estrategia.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}