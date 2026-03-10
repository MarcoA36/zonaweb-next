import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Footer } from "@/components/footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

// export const metadata: Metadata = {
//   metadataBase: new URL("https://www.zonaweb.site"),
//   title: {
//     default: "Zona Web - Sitios web, sistemas de gestión y apps móviles",
//     template: "%s | Zona Web",
//   },
//   description:
//     "Zona Web ofrece soluciones digitales a medida para tu negocio: sitios web, sistemas de gestión y aplicaciones móviles.",
//   robots: {
//     index: true,
//     follow: true,
//   },
//   openGraph: {
//     title: "Zona Web - Sitios, Sistemas y Apps",
//     description:
//       "Creamos soluciones digitales a medida para tu negocio.",
//     url: "https://www.zonaweb.site",
//     siteName: "Zona Web",
//     images: [
//       {
//         url: "/og-image.png",
//         width: 1200,
//         height: 630,
//       },
//     ],
//     locale: "es_AR",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Zona Web",
//     description:
//       "Creamos sitios web, sistemas y aplicaciones para tu negocio.",
//     images: ["/og-image.png"],
//   },
//   icons: {
//     icon: "/favicon.ico",
//     apple: "/apple-touch-icon.png",
//   },
//   themeColor: "#38BDF8",
// }
export const metadata: Metadata = {
  metadataBase: new URL("https://zonaweb.site"), 

  title: {
    default: "Desarrollo Web | Soluciones Digitales Profesionales",
    template: "%s | Agencia de Desarrollo Web",
  },

  description:
    "Desarrollo web profesional, aplicaciones móviles y sistemas a medida. Impulsa tu negocio con soluciones digitales modernas, rápidas y optimizadas para convertir.",

  keywords: [
    "desarrollo web",
    "sitios web",
    "sistemas a medida",
    "aplicaciones móviles",
    "agencia digital",
    "diseño web profesional",
    "software para empresas",
  ],

  authors: [{ name: "Tu Nombre" }],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://zonaweb.site",
  },

  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://zonaweb.site",
    siteName: "Agencia de Desarrollo Web",
    title: "Soluciones Digitales Profesionales",
    description:
      "Creamos sitios web, sistemas a medida y apps móviles para negocios que buscan crecer.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Agencia de Desarrollo Web",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Agencia de Desarrollo Web | Soluciones Digitales",
    description:
      "Sitios web, sistemas y apps móviles para tu negocio. Rápido. Escalable. Profesional.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
     { url: "/favicon.ico" },
    { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" }
    ],
  },
  
  
};

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