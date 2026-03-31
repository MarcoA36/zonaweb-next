import { TrendingUp, Eye, Layers } from "lucide-react";

const benefits = [
  {
    icon: Layers,
    title: "Gestión Inteligente",
    description:
      "Reducí tareas repetitivas y errores manuales con sistemas diseñados específicamente para tu negocio. Más eficiencia, menos tiempo perdido y mayor rentabilidad.",
  },
  {
    icon: Eye,
    title: "Mayor Visibilidad Online",
    description:
      "Sitios optimizados para buscadores y adaptados a todos los dispositivos. Convertimos visitas en consultas reales y oportunidades de negocio.",
  },
  {
    icon: TrendingUp,
    title: "Tecnología Escalable",
    description:
      "Creamos soluciones preparadas para crecer con tu empresa. Agregá funciones, integraciones o nuevos módulos sin empezar de cero.",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-foreground" id="nosotros">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              Por qué elegirnos
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-balance mb-6">
              Resultados reales para tu negocio
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              No solo construimos sitios web. Construimos herramientas digitales
              que generan resultados medibles para tu empresa.
            </p>
            <a
              href="#contacto"
            
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              Hablemos de tu proyecto
            </a>
          </div>

          {/* Right: cards */}
          <div className="flex flex-col gap-4">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="flex gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}





















// import { TrendingUp, Eye, Layers } from "lucide-react";

// const benefits = [
//   {
//     icon: Layers,
//     title: "Adaptado a cada negocio",
//     description:
//       "No todos necesitan lo mismo. Definimos qué tipo de solución te sirve y la construimos en base a eso.",
//   },
//   {
//     icon: Eye,
//     title: "Claro y funcional",
//     description:
//       "Priorizamos que sea fácil de usar, entender y mantener. Sin cosas innecesarias.",
//   },
//   {
//     icon: TrendingUp,
//     title: "Listo para crecer",
//     description:
//       "Podés empezar simple y sumar funcionalidades cuando lo necesites, sin rehacer todo.",
//   },
// ];

// export function BenefitsSection() {
//   return (
//     <section className="py-24 px-4 sm:px-6 lg:px-8 bg-foreground" id="nosotros">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
//           {/* Left */}
//           <div>
//             <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
//               Enfoque
//             </p>

//             <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
//               Cada proyecto es distinto
//             </h2>

//             <p className="text-white/60 text-lg leading-relaxed mb-6">
//               Un sitio web puede servir para mostrar, vender, organizar o automatizar procesos. Depende del negocio.
//             </p>

//             <p className="text-white/60 text-lg leading-relaxed mb-8">
//               Trabajamos con distintas herramientas según el caso, buscando siempre una solución simple y bien hecha.
//             </p>

//             <a
//               href="#contacto"
//               className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
//             >
//               Hablemos
//             </a>
//           </div>

//           {/* Right */}
//           <div className="flex flex-col gap-4">
//             {benefits.map((benefit) => {
//               const Icon = benefit.icon;
//               return (
//                 <div
//                   key={benefit.title}
//                   className="flex gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 transition-colors"
//                 >
//                   <div className="w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
//                     <Icon className="w-5 h-5 text-primary" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-white mb-1">
//                       {benefit.title}
//                     </h3>
//                     <p className="text-sm text-white/60 leading-relaxed">
//                       {benefit.description}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }