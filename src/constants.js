// Categorías de Productos
export const PRODUCT_CATEGORIES = [
  'Sonido',
  'Iluminación',
  'Instrumentos',
  'Tecnología'
]

// Temas/Estilos por Línea de Negocio
export const THEMES = {
  productos: {
    primary: '#DC143C',
    secondary: '#000000',
    accent: '#FFFFFF',
    button: 'btn-primary-productos'
  },
  party: {
    primary: '#00CED1',
    secondary: '#FFFFFF',
    accent: '#333333',
    button: 'btn-primary-party'
  },
  wedding: {
    primary: '#CC9900',
    secondary: '#FFFFFF',
    accent: '#333333',
    button: 'btn-primary-wedding'
  }
}

// Límites de Archivo
export const FILE_LIMITS = {
  MAX_IMAGE_SIZE_MB: 10,
  MAX_IMAGE_SIZE_BYTES: 10 * 1024 * 1024,
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/webp']
}

// Información de Contacto
export const CONTACT_INFO = {
  PHONE: '+593999999999',
  WHATSAPP: '+593999999999',
  EMAIL: 'admin@iluminsound.local',
  LOCATION: 'Quito, Ecuador',
  BUSINESS_NAME: 'IluminSound Multimark',
  HOURS: {
    WEEKDAY_START: '09:00',
    WEEKDAY_END: '18:00',
    SATURDAY_START: '10:00',
    SATURDAY_END: '16:00',
    CLOSED_SUNDAY: true
  }
}

// Errores de Validación
export const VALIDATION_ERRORS = {
  REQUIRED_FIELD: 'Este campo es obligatorio',
  INVALID_EMAIL: 'Email inválido',
  MIN_LENGTH: (length) => `Mínimo ${length} caracteres`,
  MAX_LENGTH: (length) => `Máximo ${length} caracteres`,
  FILE_TOO_LARGE: `El archivo es demasiado grande. Máximo ${FILE_LIMITS.MAX_IMAGE_SIZE_MB}MB`,
  INVALID_FILE_TYPE: 'Tipo de archivo no permitido. Usa JPG, PNG o WebP'
}

// Rutas de Navegación
export const ROUTES = {
  HOME: 'home',
  CATALOG: 'catalog',
  DJ_PARTY: 'dj-party',
  DJ_WEDDING: 'dj-wedding',
  ABOUT: 'about',
  CONTACT: 'contact',
  ADMIN: 'admin'
}

// Mensajes de WhatsApp por Defecto
export const WHATSAPP_TEMPLATES = {
  PRODUCT_INQUIRY: (productName, price) =>
    `Hola, me interesa el producto: ${productName}${price ? ` - $${price}` : ''}. ¿Puedes darme más información?`,

  DJ_PARTY_INQUIRY: (date, eventType) =>
    `Hola IluminSound, quiero reservar DJ Party para ${eventType} el ${date}. ¿Cuál es tu disponibilidad?`,

  WEDDING_INQUIRY: (date, venue) =>
    `Hola IluminSound, quiero reservar DJ para nuestra boda el ${date} en ${venue}. ¿Podemos hablar de paquetes?`,

  GENERAL_INQUIRY: 'Hola IluminSound, tengo una consulta sobre sus servicios'
}

// Colores Tailwind por Tema
export const TAILWIND_COLORS = {
  productos: {
    button: 'btn-primary-productos',
    text: 'text-productos-primary',
    bg: 'bg-productos-primary'
  },
  party: {
    button: 'btn-primary-party',
    text: 'text-party-primary',
    bg: 'bg-party-primary'
  },
  wedding: {
    button: 'btn-primary-wedding',
    text: 'text-wedding-primary',
    bg: 'bg-wedding-primary'
  }
}
