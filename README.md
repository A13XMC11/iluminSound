# IluminSound Multimark - Plataforma Web

Sitio web profesional para IluminSound Multimark: catálogo de productos, servicios de DJ y panel administrativo.

## Stack Tecnológico

- **Frontend:** React 18 + Vite
- **Styling:** Tailwind CSS 3
- **State Management:** React Context API
- **Forms:** React Hook Form + Zod
- **Backend:** Supabase (PostgreSQL + Auth)
- **File Storage:** Vercel Blob
- **Deployment:** Vercel
- **Testing:** Vitest + Testing Library

## Instalación

### Requisitos Previos
- Node.js 18+ 
- npm o pnpm

### Setup Local

1. **Clonar el repositorio**
   ```bash
   git clone <repo-url>
   cd IluminSound
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env.local
   ```
   
   Luego edita `.env.local` con tus credenciales:
   - Supabase URL y anon key
   - Vercel Blob token (para subida de imágenes)
   - Configuración de WhatsApp (n8n o Twilio)

4. **Iniciar servidor de desarrollo**
   ```bash
   npm run dev
   ```
   
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Header.jsx
│   ├── ProductCard.jsx
│   └── ProductForm.jsx
├── pages/              # Páginas principales
│   ├── Home.jsx
│   ├── Catalog.jsx
│   ├── DJServices.jsx
│   ├── AdminPanel.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── context/            # Context API (próximo: auth, products)
├── api/                # Clientes API (próximo: Supabase)
├── utils/              # Funciones auxiliares
├── tests/              # Tests unitarios e integración
├── App.jsx             # Componente raíz
├── main.jsx            # Punto de entrada
└── index.css           # Estilos globales
```

## Guía de Características

### 1. Home Page
- Hero sections para cada línea de negocio
- Productos destacados
- CTA buttons a catálogo y servicios de DJ
- Testimonios y diferenciadores

### 2. Catálogo de Productos
- Grid responsive
- Filtros por categoría
- Búsqueda por nombre/descripción
- Botones de WhatsApp pre-rellenados
- Cargas de imágenes lazy

### 3. DJ Services
- DJ Party (eventos generales, colores cyan)
- Wedding DJ (bodas, colores dorados)
- Galerías de fotos
- Reserva vía WhatsApp

### 4. Admin Panel
- Autenticación (Supabase Auth)
- CRUD de productos
- Subida de imágenes a Vercel Blob
- Validación de formularios
- Gestión de categorías

### 5. Contacto
- Formulario de contacto
- Integración con WhatsApp
- Información de ubicación y horarios
- Links a redes sociales

## Desarrollo

### Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Inicia servidor Vite

# Build
npm run build            # Crea build de producción
npm run preview          # Vista previa del build

# Testing
npm test                 # Ejecuta tests
npm run test:ui          # Vista interactiva de tests
npm run test:coverage    # Reporte de cobertura
```

### Guía de Componentes

#### ProductCard
```jsx
import ProductCard from './components/ProductCard'

<ProductCard 
  product={{ 
    name: 'Producto',
    description: 'Desc',
    category: 'Sonido',
    price: 299.99,
    image_url: 'url'
  }}
  theme="productos"  // productos, party, wedding
/>
```

#### ProductForm
```jsx
import ProductForm from './components/ProductForm'

<ProductForm 
  onSubmit={handleSubmit}
  initialData={product}  // optional para edición
  isLoading={false}
/>
```

## Configuración de Supabase

### Crear tabla de productos
```sql
CREATE TABLE products (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('Sonido', 'Iluminación', 'Instrumentos', 'Tecnología')),
  price DECIMAL(10,2),
  image_url TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE admins (
  id BIGSERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### RLS Policies (Row Level Security)
```sql
-- Productos: cualquiera puede leer
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Productos lectura pública" ON products FOR SELECT USING (true);

-- Productos: solo admins pueden escribir
CREATE POLICY "Productos escritura admin" ON products FOR INSERT 
  WITH CHECK (auth.jwt() ->> 'email' IN (SELECT email FROM admins));
```

## Integración WhatsApp

### Opción 1: n8n (Recomendado para MVP)
1. Crea workflow en n8n.io
2. Configura webhook como trigger
3. Parsea el mensaje y guarda en Supabase
4. Envía confirmación

### Opción 2: Twilio API
1. Crea cuenta en Twilio
2. Consigue número WhatsApp Business
3. Configura API keys en .env.local
4. Implementa en `src/api/whatsapp.js`

## Despliegue a Producción

### Vercel (Recomendado)

1. **Pushea a GitHub**
   ```bash
   git push origin main
   ```

2. **Conecta en Vercel Dashboard**
   - Importa proyecto desde GitHub
   - Configura environment variables
   - Deploy automático en push

3. **Configura Dominio Personalizado**
   - Vercel DNS (recomendado)
   - O apunta DNS personalizado

### Variables de Entorno en Vercel
Copia las variables de `.env.local` al dashboard de Vercel:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_VERCEL_BLOB_TOKEN`
- `VITE_N8N_WEBHOOK_URL` (o Twilio vars)

## Testing

### Ejecución de Tests
```bash
npm test                    # Watch mode
npm run test:coverage       # Genera reporte
npm run test:ui             # Dashboard interactivo
```

### Cobertura Objetivo
- Unit: 30% (ProductCard, ProductForm, utils)
- Integration: 40% (Catalog, AdminPanel, forms)
- E2E: 10% (user journeys críticos)
- **Total: 80%+**

## Troubleshooting

### Puerto 3000 en uso
```bash
# macOS/Linux
lsof -ti:3000 | xargs kill -9

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Problemas con Tailwind
```bash
# Limpia caché
rm -rf node_modules/.vite
npm run dev
```

### Supabase no conecta
- Verifica `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY`
- Comprueba que Supabase project está activo
- Revisa CORS settings en Supabase

## Roadmap (Fases Futuras)

### Phase 2 (Próximas 2 semanas)
- [ ] Email como fallback de WhatsApp
- [ ] Analytics básicas
- [ ] Admin: bulk upload de productos
- [ ] Multi-idioma (español + Quichua)
- [ ] Dark mode

### Phase 3 (Próximo mes)
- [ ] Booking calendar para DJ services
- [ ] Sistema de reservas con confirmación
- [ ] Integración con Zapier/n8n para workflow
- [ ] Mobile app (React Native)
- [ ] Panel de reportes para admin

## Documentación Adicional

- [Plan General](./PLAN.md) - Estrategia, diseño y arquitectura
- [Componentes](./docs/COMPONENTS.md) - API de cada componente
- [API Integration](./docs/API.md) - Guía Supabase + Blob

## Contacto & Soporte

- **Email Admin:** admin@iluminsound.local
- **WhatsApp:** +593 9 9999 9999
- **Repositorio:** [GitHub](https://github.com/)

---

**Última actualización:** 2026-04-04  
**Versión:** 0.1.0 (MVP)
