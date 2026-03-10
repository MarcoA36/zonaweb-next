import type { ServiceId, Step } from "./types"

export const BASE_PRICES: Record<ServiceId, number> = {
  web: 150000,
  sistema: 400000,
  app: 600000,
}

export const STEPS_BY_SERVICE: Record<ServiceId, Step[]> = {
web: [
{
  id: "tipo",
  question: "¿Qué tipo de sitio necesitás?",
  hint: "Elegí el que mejor describe tu proyecto",
  options: [
    { label: "Landing page", description: "Una página enfocada en captar clientes", price: 80000, value: "landing" },
    { label: "Sitio institucional", description: "Presentación de empresa o servicio", price: 120000, value: "institucional" },
    { label: "Catálogo de productos", description: "Mostrar productos sin venta online", price: 160000, value: "catalogo" },
    { label: "Tienda online", description: "Venta con carrito y pagos", price: 220000, value: "ecommerce" },
  ],
},

{
  id: "contenido",
  question: "¿Cuántas secciones o páginas tendrá el sitio?",
  options: [
    { label: "1 a 3 secciones", price: 0, value: "simple" },
    { label: "4 a 8 secciones", price: 30000, value: "medio" },
    { label: "Más de 8 secciones", price: 60000, value: "grande" },
  ],
},

{
  id: "panel",
  question: "¿Necesitás administrar el contenido?",
  options: [
    { label: "No", description: "Contenido fijo", price: 0, value: "no" },
    { label: "Sí, edición básica", description: "Editar textos e imágenes", price: 40000, value: "basico" },
    { label: "Administración completa", description: "Productos, páginas y contenido", price: 80000, value: "completo" },
  ],
},

{
  id: "funciones",
  question: "¿Necesitás funcionalidades especiales?",
  options: [
    { label: "Formulario de contacto", price: 0, value: "form" },
    { label: "Integración WhatsApp", price: 10000, value: "whatsapp" },
    { label: "Blog o noticias", price: 30000, value: "blog" },
    { label: "Área privada de usuarios", price: 90000, value: "usuarios" },
  ],
},

{
  id: "diseno",
  question: "¿Cómo está tu identidad visual?",
  options: [
    { label: "Tengo logo y marca", price: 0, value: "completa" },
    { label: "Tengo logo pero necesita mejoras", price: 30000, value: "mejoras" },
    { label: "Necesito identidad visual completa", price: 80000, value: "branding" },
  ],
},

{
  id: "contenido_texto",
  question: "¿Tenés el contenido listo?",
  options: [
    { label: "Sí, tengo textos e imágenes", price: 0, value: "listo" },
    { label: "Necesito asesoramiento", price: 25000, value: "asesoria" },
    { label: "Necesito redacción completa", price: 60000, value: "copywriting" },
  ],
},

{
  id: "seo",
  question: "¿Querés optimización SEO?",
  options: [
    { label: "SEO básico", price: 0, value: "basico" },
    { label: "SEO avanzado", price: 50000, value: "avanzado" },
  ],
},
],
  sistema: [
    {
      id: "tipo",
      question: "¿Qué tipo de sistema necesitás?",
      options: [
        { label: "CRM / Clientes", description: "Gestión de contactos y ventas", price: 0, value: "crm" },
        { label: "Reservas / Turnos", description: "Sistema de agendamiento online", price: 80000, value: "reservas" },
        { label: "Inventario / Stock", description: "Control de productos y movimientos", price: 60000, value: "inventario" },
        { label: "Facturación", description: "Presupuestos, facturas y pagos", price: 100000, value: "facturacion" },
        { label: "Portal inmobiliario", description: "Propiedades, visitas y clientes", price: 150000, value: "inmobiliario" },
      ],
    },
    {
      id: "usuarios",
      question: "¿Cuántos usuarios van a usar el sistema?",
      options: [
        { label: "1 a 3 usuarios", price: 0, value: "pequeño" },
        { label: "4 a 10 usuarios", price: 80000, value: "mediano" },
        { label: "Más de 10 usuarios", description: "Requiere infraestructura escalable", price: 180000, value: "grande" },
      ],
    },
    {
      id: "integraciones",
      question: "¿Necesitás integraciones externas?",
      options: [
        { label: "No por ahora", price: 0, value: "ninguna" },
        { label: "WhatsApp / Email automático", price: 50000, value: "mensajeria" },
        { label: "Pasarela de pago", description: "MercadoPago, Stripe, etc.", price: 80000, value: "pago" },
        { label: "Múltiples integraciones", price: 150000, value: "multiples" },
      ],
    },
    {
      id: "soporte",
      question: "¿Qué tipo de soporte necesitás?",
      options: [
        { label: "Sin soporte continuo", price: 0, value: "ninguno" },
        { label: "Soporte por email / WhatsApp", price: 30000, value: "remoto" },
        { label: "Soporte + mejoras mensuales", price: 80000, value: "completo" },
      ],
    },
  ],
  app: [
    {
      id: "plataforma",
      question: "¿En qué plataformas necesitás la app?",
      options: [
        { label: "Solo Android", price: 0, value: "android" },
        { label: "Solo iOS (iPhone)", price: 30000, value: "ios" },
        { label: "Android + iOS", description: "Recomendado para mayor alcance", price: 100000, value: "ambas" },
      ],
    },
    {
      id: "tipo",
      question: "¿Cuál es la función principal de la app?",
      options: [
        { label: "App informativa / vitrina", description: "Contenido y noticias", price: 0, value: "informativa" },
        { label: "App con usuarios y perfiles", price: 120000, value: "usuarios" },
        { label: "Marketplace / E-commerce", description: "Compra-venta entre usuarios", price: 300000, value: "marketplace" },
        { label: "App de gestión interna", description: "Uso del equipo de trabajo", price: 200000, value: "gestion" },
      ],
    },
    {
      id: "backend",
      question: "¿Necesitás backend / base de datos propia?",
      options: [
        { label: "No, con servicios de terceros alcanza", price: 0, value: "terceros" },
        { label: "Sí, quiero mi propio servidor", description: "Mayor control y seguridad", price: 150000, value: "propio" },
      ],
    },
    {
      id: "diseño",
      question: "¿Cómo está tu identidad visual?",
      options: [
        { label: "Tengo branding completo", description: "Guía de estilos, colores, tipografía", price: 0, value: "completa" },
        { label: "Tengo logo básico", price: 40000, value: "basico" },
        { label: "Necesito diseño desde cero", description: "Branding + UI/UX de la app", price: 120000, value: "ninguna" },
      ],
    },
    {
      id: "extras",
      question: "¿Qué funciones adicionales necesitás?",
      hint: "Seleccioná la que aplica",
      options: [
        { label: "Notificaciones push", price: 40000, value: "push" },
        { label: "Chat en tiempo real", price: 80000, value: "chat" },
        { label: "Mapa / Geolocalización", price: 60000, value: "mapa" },
        { label: "Sin extras por ahora", price: 0, value: "ninguno" },
      ],
    },
  ],
}

export const SERVICE_LABELS: Record<ServiceId, string> = {
  web: "Sitio Web",
  sistema: "Sistema de Gestión",
  app: "App Móvil",
}
