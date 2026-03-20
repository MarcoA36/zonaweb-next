// export function DemoSection() {
//   return (
//     <section className="py-24 md:py-28 px-4 bg-gradient-to-b from-white to-gray-50">
//       <div className="max-w-6xl mx-auto text-center">

//         {/* Header */}
//         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
//           Portales web para{" "}
//           <span className="text-primary">inmobiliarias</span>
//         </h2>

//         <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
//           Mostrá tus propiedades de forma profesional, organizá tu catálogo y
//           facilitá que los clientes encuentren lo que buscan.
//         </p>

//         {/* Imagen preview */}
//         <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
//           <img
//             src="/demo_inmo-hotel.png"
//             alt="Portal inmobiliario"
//             className="w-full h-auto object-cover hover:scale-[1.02] transition duration-500"
//           />
//         </div>

//         {/* Features */}
//         <div className="grid md:grid-cols-2 gap-5 text-left max-w-4xl mx-auto mb-16">
//           {[
//             "Listado de propiedades en venta y alquiler",
//             "Buscador por ubicación, tipo y precio",
//             "Panel para cargar y editar propiedades",
//             "Galería de imágenes por propiedad",
//             "Diseño adaptable a celular y PC",
//             "Contacto directo por WhatsApp",
//           ].map((item) => (
//             <div
//               key={item}
//               className="flex items-start gap-3 p-5 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition"
//             >
//               <span className="text-primary font-bold text-lg mt-1">✔</span>
//               <p className="text-gray-700">{item}</p>
//             </div>
//           ))}
//         </div>

//         {/* Para quién es */}
//         <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-12 max-w-3xl mx-auto shadow-sm">
//           <p className="font-semibold text-gray-900 mb-4 text-xl">
//             Ideal para:
//           </p>

//           <ul className="space-y-2 text-gray-600">
//             <li>• Inmobiliarias</li>
//             <li>• Corredores independientes</li>
//             <li>• Alquileres temporarios</li>
//             <li>• Dueños con múltiples propiedades</li>
//           </ul>
//         </div>

//         {/* CTA FINAL (refuerza conversión) */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <a
//             href="https://inmobiliaria-demo-six.vercel.app/"
//             target="_blank"
//             className="bg-primary text-white px-10 py-5 rounded-xl font-semibold text-lg shadow-lg hover:scale-105 transition"
//           >
//             Ver demo
//           </a>

//           <a
//             href="#contacto"
//             className="bg-gray-900 text-white px-10 py-5 rounded-xl font-semibold text-lg hover:opacity-90 transition"
//           >
//             Quiero mi portal inmobiliario
//           </a>
//         </div>
//       </div>
//     </section>
//   )
// }



















// export function RealEstateSection() {
//   return (
//     <section className="py-24 md:py-28 px-4 bg-gradient-to-b from-white to-gray-50">
//       <div className="max-w-6xl mx-auto text-center">

//         {/* Header GENERAL */}
//         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
//           Mostrá tus{" "}
//           <span className="text-primary">propiedades o alojamientos</span>
//         </h2>

//         <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
//           Una plataforma pensada para organizar tu catálogo, mostrarlo de forma profesional
//           y facilitar el contacto con tus clientes.
//         </p>

//         {/* Features compartidas */}
//         <div className="grid md:grid-cols-2 gap-5 text-left max-w-4xl mx-auto mb-20">
//           {[
//             "Carga y gestión de propiedades o habitaciones",
//             "Galerías de imágenes",
//             "Diseño adaptable a celular y PC",
//             "Contacto directo por WhatsApp",
//             "Buscador o filtrado por categorías",
//             "Carga rápida y experiencia simple",
//           ].map((item) => (
//             <div
//               key={item}
//               className="flex items-start gap-3 p-5 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition"
//             >
//               <span className="text-primary font-bold text-lg mt-1">✔</span>
//               <p className="text-gray-700">{item}</p>
//             </div>
//           ))}
//         </div>

//         {/* DEMOS */}
//         <div className="grid md:grid-cols-2 gap-10 mb-16">

//           {/* Inmobiliaria */}
//           <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl transition">
//             <img
//               src="/demo-inmobiliaria.png"
//               alt="Portal inmobiliario"
//               className="w-full h-64 object-cover"
//             />

//             <div className="p-6 text-left">
//               <h3 className="text-xl font-semibold mb-2">
//                 Portal para inmobiliarias
//               </h3>

//               <p className="text-gray-600 mb-4">
//                 Mostrá propiedades en venta y alquiler con fichas completas y buscador.
//               </p>

//               <a
//                 href="https://inmobiliaria-demo-six.vercel.app/"
//                 target="_blank"
//                 className="text-primary font-semibold hover:underline"
//               >
//                 Ver demo →
//               </a>
//             </div>
//           </div>

//           {/* Hoteles */}
//           <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl transition">
//             <img
//               src="/demo-hotel.png"
//               alt="Web hotel"
//               className="w-full h-64 object-cover"
//             />

//             <div className="p-6 text-left">
//               <h3 className="text-xl font-semibold mb-2">
//                 Web para hoteles y alojamientos
//               </h3>

//               <p className="text-gray-600 mb-4">
//                 Mostrá habitaciones, servicios y recibí consultas o reservas fácilmente.
//               </p>

//               <a
//                 href="https://hotel-demo-rho.vercel.app/"
//                 className="text-primary font-semibold hover:underline"
//               >
//                 Ver demo →
//               </a>
//             </div>
//           </div>

//         </div>

//         {/* CTA FINAL */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <a
//             href="#contacto"
//             className="bg-primary text-white px-10 py-5 rounded-xl font-semibold text-lg shadow-lg hover:scale-105 transition"
//           >
//             Quiero mi plataforma
//           </a>

//           <a
//             href="https://inmobiliaria-demo-six.vercel.app/"
//             target="_blank"
//             className="bg-gray-900 text-white px-10 py-5 rounded-xl font-semibold text-lg hover:opacity-90 transition"
//           >
//             Ver demo completa
//           </a>
//         </div>

//       </div>
//     </section>
//   )
// }




// export function RealEstateSection() {
//   return (
//     <section className="py-24 md:py-28 px-4 bg-gradient-to-b from-white to-gray-50">
//       <div className="max-w-6xl mx-auto text-center">

//         {/* Header */}
//         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
//           Webs para{" "}
//           <span className="text-primary">inmobiliarias y hoteles</span>
//         </h2>

//         <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
//           Mostrá tus propiedades o habitaciones de forma profesional, organizá tu catálogo
//           y facilitá que los clientes encuentren lo que buscan.
//         </p>

//         {/* Features compartidas */}
//         <div className="grid md:grid-cols-2 gap-5 text-left max-w-4xl mx-auto mb-16">
//           {[
//             "Carga y gestión de propiedades o habitaciones",
//             "Galerías de imágenes",
//             "Diseño para celulares",
//             "Contacto directo por WhatsApp",
//             "Filtros y organización por categorías",
//             "Carga rápida y experiencia simple",
//           ].map((item) => (
//             <div
//               key={item}
//               className="flex items-start gap-3 p-5 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition"
//             >
//               <span className="text-primary font-bold text-lg mt-1">✔</span>
//               <p className="text-gray-700">{item}</p>
//             </div>
//           ))}
//         </div>

//         {/* DEMOS */}
//         <div className="grid md:grid-cols-2 gap-10 mb-20">

//           {/* Inmobiliaria */}
//           <div className="group bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl transition">
//             <div className="overflow-hidden">
//               <img
//                 src="/demo-inmobiliaria.png"
//                 alt="Portal inmobiliario"
//                 className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
//               />
//             </div>

//             <div className="p-6 text-left">
//               <h3 className="text-xl font-semibold mb-2">
//                 Portal inmobiliario
//               </h3>

//               <p className="text-gray-600 mb-4">
//                 Publicá propiedades en venta o alquiler con fichas completas,
//                 imágenes y contacto directo.
//               </p>

//               <a
//                 href="https://inmobiliaria-demo-six.vercel.app/"
//                 target="_blank"
//                 className="text-primary font-semibold hover:underline"
//               >
//                 Ver demo →
//               </a>
//             </div>
//           </div>

//           {/* Hoteles */}
//           <div className="group bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl transition">
//             <div className="overflow-hidden">
//               <img
//                 src="/demo-hotel.png"
//                 alt="Web hotel"
//                 className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
//               />
//             </div>

//             <div className="p-6 text-left">
//               <h3 className="text-xl font-semibold mb-2">
//                 Web para alojamientos
//               </h3>

//               <p className="text-gray-600 mb-4">
//                 Mostrá habitaciones, servicios y recibí consultas o reservas
//                 directamente desde tu web.
//               </p>

//               <a
//                 href="#contacto"
//                 className="text-primary font-semibold hover:underline"
//               >
//                 Solicitar demo →
//               </a>
//             </div>
//           </div>

//         </div>

//         {/* CTA FINAL */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <a
//             href="#contacto"
//             className="bg-primary text-white px-10 py-5 rounded-xl font-semibold text-lg shadow-lg hover:scale-105 transition"
//           >
//             Quiero mi web
//           </a>

//           <a
//             href="https://inmobiliaria-demo-six.vercel.app/"
//             target="_blank"
//             className="bg-gray-900 text-white px-10 py-5 rounded-xl font-semibold text-lg hover:opacity-90 transition"
//           >
//             Ver demo
//           </a>
//         </div>

//         {/* Extra */}
//         <p className="text-sm text-gray-500 mt-6">
//           Adaptamos cada proyecto según el tipo de negocio y tus necesidades.
//         </p>

//       </div>
//     </section>
//   )
// }

// export function RealEstateSection() {
//   return (
//     <section className="py-24 md:py-28 px-4 bg-gradient-to-b from-white to-gray-50">
//       <div className="max-w-6xl mx-auto text-center">

//         {/* Header */}
//         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
//           Webs para{" "}
//           <span className="text-primary">inmobiliarias y alojamientos</span>
//         </h2>

//         <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
//           Mostrá tus propiedades o habitaciones en todos los dispositivos,
//           con una experiencia moderna y enfocada en generar consultas.
//         </p>

//         {/* Imagen principal */}
//         <div className="relative mb-20">
//           <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full"></div>

//           <img
//             src="/demo_inmo-hotel.png"
//             alt="Demo inmobiliaria y hotel en web y app"
//             className="relative w-full max-w-5xl mx-auto rounded-2xl shadow-2xl border border-gray-200 hover:scale-[1.02] transition duration-500"
//           />
//         </div>

//         {/* Features */}
//         <div className="grid md:grid-cols-2 gap-5 text-left max-w-4xl mx-auto mb-16">
//           {[
//             "Publicación de propiedades o habitaciones",
//             "Galerías de imágenes atractivas",
//             "Diseño adaptable a celular y PC",
//             "Contacto directo por WhatsApp",
//             "Organización por categorías",
//             "Carga rápida y experiencia simple",
//           ].map((item) => (
//             <div
//               key={item}
//               className="flex items-start gap-3 p-5 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition"
//             >
//               <span className="text-primary font-bold text-lg mt-1">✔</span>
//               <p className="text-gray-700">{item}</p>
//             </div>
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <a
//             href="#contacto"
//             className="bg-primary text-white px-10 py-5 rounded-xl font-semibold text-lg shadow-lg hover:scale-105 transition"
//           >
//             Quiero mi web
//           </a>

//           <a
//             href="https://inmobiliaria-demo-six.vercel.app/"
//             target="_blank"
//             className="bg-gray-900 text-white px-10 py-5 rounded-xl font-semibold text-lg hover:opacity-90 transition"
//           >
//             Ver demo
//           </a>
//         </div>

//         {/* Extra */}
//         <p className="text-sm text-gray-500 mt-6">
//           Adaptado para inmobiliarias, hoteles y alquileres temporarios.
//         </p>

//       </div>
//     </section>
//   )
// }


"use client";

import Image from "next/image";

const demos = [
  {
    title: "Inmobiliarias",
    description:
      "Mostrá tus propiedades con una plataforma moderna que convierte visitas en consultas reales.",
    image: "/demo_inmo.png",
    demo: "https://inmobiliaria-demo-six.vercel.app/",
    features: [
      "Listado de propiedades con fotos y precios",
      "Ficha completa con detalles y ubicación",
      "Filtro por tipo, precio y zona",
      "Contacto directo por WhatsApp",
      "Carga simple de nuevas propiedades",
    ],
  },
  {
    title: "Hoteles y alojamientos",
    description:
      "Atraé más reservas mostrando habitaciones y servicios con una experiencia clara y profesional.",
    image: "/demo_hotel.png",
    demo: "https://hotel-demo-rho.vercel.app/",
    features: [
      "Listado de habitaciones con fotos",
      "Detalle de servicios y comodidades",
      "Galería visual atractiva",
      "Botón de reserva o consulta directa",
      "Diseño optimizado para celulares",
    ],
  },

    {
    title: "Restaurante - Casas de Comida",
    description:
      "Atraé más reservas mostrando habitaciones y servicios con una experiencia clara y profesional.",
    image: "/demo_resto.png",
    demo: "https://resto-demo-nine.vercel.app/",
    features: [
      "Menu digital",
      "Detalle de servicios y comodidades",
      "Galería visual atractiva",
      "Botón de reserva o consulta directa",
      "Diseño optimizado para celulares",
    ],
  },

   {
    title: "Agencia de turismo",
    description:
      "Atraé más reservas mostrando habitaciones y servicios con una experiencia clara y profesional.",
    image: "/demo_turismo.png",
    demo: "https://turismo-demo-eta.vercel.app/",
    features: [
      "Administra ofertas y viajes",
      "Detalle de servicios y comodidades",
      "Galería visual atractiva",
      "Botón de reserva o consulta directa",
      "Diseño optimizado para celulares",
    ],
  },
];

export function DemosSection() {
  return (
    <section className="py-24 md:py-28 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
           Webs para{" "}
          <span className="text-primary">inmobiliarias y hoteles</span>
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Elegí el tipo de sitio que mejor se adapta a tu negocio y mirá una demo real en funcionamiento.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-20">
        {demos.map((item, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <div
              key={item.title}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Imagen */}
              <div className={`${isReversed ? "lg:order-2" : ""}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={900}
                    height={600}
                    className="w-full h-auto transition duration-500 group-hover:scale-105"
                  />

                  {/* <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <span className="bg-white text-black px-6 py-3 rounded-xl font-semibold">
                      Ver demo
                    </span>
                  </div> */}
                </div>
              </div>

              {/* Contenido */}
              <div className={`${isReversed ? "lg:order-1" : ""}`}>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-lg mb-6">
                  {item.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="text-primary font-bold">✔</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex gap-4 flex-wrap">
                  <a
                    href="#contacto"
                    className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
                  >
                    Quiero mi web
                  </a>

                  <a
                    href={item.demo}
                    target="_blank"
                    className="bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
                  >
                    Ver demo
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}