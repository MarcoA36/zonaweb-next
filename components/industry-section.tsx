// "use client"

// import { Building2, Hotel, Stethoscope, GraduationCap, ShoppingCart, Briefcase } from "lucide-react"

// const industries = [
//   {
//     title: "Inmobiliarias",
//     description:
//       "Portales de propiedades con buscadores avanzados, fichas detalladas, panel de administración y gestión de consultas.",
//     icon: Building2,
//   },
//   {
//     title: "Hoteles y Alojamientos",
//     description:
//       "Sistemas de reservas online, administración de habitaciones, calendario de disponibilidad y gestión de clientes.",
//     icon: Hotel,
//   },
//   {
//     title: "Profesionales de la salud",
//     description:
//       "Turnos online, gestión de pacientes, recordatorios automáticos y panel de administración para clínicas o consultorios.",
//     icon: Stethoscope,
//   },
//   {
//     title: "Educación y academias",
//     description:
//       "Plataformas para cursos, gestión de alumnos, materiales online, pagos e interacción con estudiantes.",
//     icon: GraduationCap,
//   },
//   {
//     title: "Comercios y tiendas",
//     description:
//       "Tiendas online, catálogos de productos, control de pedidos, pagos online e integración con logística.",
//     icon: ShoppingCart,
//   },
//   {
//     title: "Empresas de servicios",
//     description:
//       "Sistemas de gestión interna, administración de clientes, presupuestos, reservas o agendas profesionales.",
//     icon: Briefcase,
//   },
// ]

// export function IndustrySolutionsSection() {
//   return (
//     <section className="py-20 px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">

//         {/* Header */}
//         <div className="text-center mb-16">

//           <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
//             Soluciones digitales
//           </p>

//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//             Tecnología adaptada a tu rubro
//           </h2>

//           <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
//             Diseñamos plataformas y sistemas pensados para resolver necesidades
//             específicas de distintos sectores.
//           </p>

//         </div>

//         {/* Cards */}

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

//           {industries.map((industry) => {
//             const Icon = industry.icon

//             return (
//               <div
//                 key={industry.title}
//                 className="p-8 rounded-xl border border-border bg-card hover:shadow-lg transition-all"
//               >
//                 <div className="mb-5 w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10">
//                   <Icon className="w-6 h-6 text-primary" />
//                 </div>

//                 <h3 className="text-xl font-semibold mb-3">
//                   {industry.title}
//                 </h3>

//                 <p className="text-muted-foreground leading-relaxed">
//                   {industry.description}
//                 </p>
//               </div>
//             )
//           })}

//         </div>

//       </div>
//     </section>
//   )
// }
"use client"

import {
  Building2,
  Car,
  List,
  CalendarDays,
  ShoppingCart,
  GraduationCap,
  Settings,
  Smartphone,
} from "lucide-react"

const solutionGroups = [
  {
    title: "Plataformas para mostrar y organizar información",
    solutions: [
      {
        title: "Portales de propiedades y vehículos",
        description:
          "Portales con buscadores, filtros y fichas detalladas para inmobiliarias, concesionarias o alquileres.",
        icon: Building2,
      },
      {
        title: "Catálogos digitales",
        description:
          "Sitios para mostrar productos o servicios con fichas, imágenes, categorías y formularios de consulta.",
        icon: List,
      },
      {
        title: "Directorios y plataformas de contenido",
        description:
          "Plataformas con listados organizados de empresas, servicios o profesionales.",
        icon: Car,
      },
    ],
  },
  {
    title: "Sistemas para reservas y ventas",
    solutions: [
      {
        title: "Reservas y turnos online",
        description:
          "Calendarios de disponibilidad, reservas online y gestión de citas para hoteles, médicos o servicios.",
        icon: CalendarDays,
      },
      {
        title: "Tiendas online",
        description:
          "Ecommerce con carrito de compras, pagos online, control de pedidos y gestión de productos.",
        icon: ShoppingCart,
      },
      {
        title: "Plataformas educativas",
        description:
          "Sistemas para cursos, gestión de alumnos, contenidos y seguimiento de aprendizaje.",
        icon: GraduationCap,
      },
    ],
  },
  {
    title: "Herramientas para gestionar tu negocio",
    solutions: [
      {
        title: "Sistemas de gestión a medida",
        description:
          "Paneles administrativos para gestionar clientes, propiedades, pedidos o procesos internos.",
        icon: Settings,
      },
      {
        title: "Aplicaciones móviles",
        description:
          "Apps para clientes o equipos de trabajo que necesitan acceder al sistema desde el teléfono.",
        icon: Smartphone,
      },
    ],
  },
]

export function SolutionsSection() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="text-center mb-20">

          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Soluciones digitales
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tecnología adaptada a tu rubro
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Diseñamos plataformas pensadas para resolver necesidades específicas:
            portales, reservas, ecommerce o sistemas de gestión.
          </p>

        </div>

        {/* Groups */}

        <div className="space-y-20">

          {solutionGroups.map((group) => (
            <div key={group.title}>

              {/* Group title */}

              <h3 className="text-xl font-semibold text-foreground mb-8">
                {group.title}
              </h3>

              {/* Cards */}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {group.solutions.map((solution) => {
                  const Icon = solution.icon

                  return (
                    <div
                      key={solution.title}
                      className="p-7 rounded-xl border border-border bg-card hover:shadow-md transition"
                    >
                      <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-primary/10 mb-4">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>

                      <h4 className="text-lg font-semibold mb-2">
                        {solution.title}
                      </h4>

                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  )
                })}
              </div>

            </div>
          ))}

        </div>

        {/* Bottom text */}

        <p className="text-center text-muted-foreground mt-20 max-w-2xl mx-auto">
          Cada proyecto se adapta a las necesidades del negocio, integrando las
          herramientas necesarias para mejorar procesos y experiencia de usuario.
        </p>

      </div>
    </section>
  )
}