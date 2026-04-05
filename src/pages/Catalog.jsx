import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'

// Mock data - reemplazar con Supabase
const MOCK_PRODUCTS = [
  {
    id: 1,
    name: 'Amplificador Yamaha MG Series',
    description: 'Mezclador compacto de 4 canales con entradas XLR y controles de volumen independientes',
    category: 'Sonido',
    price: 299.99,
    image_url: 'https://images.unsplash.com/photo-1611339555312-e607c25352ca?w=400&h=300&fit=crop',
  },
  {
    id: 2,
    name: 'Micrófono Dinámico Shure SM58',
    description: 'Micrófono dinámico profesional para vocales en vivo',
    category: 'Sonido',
    price: 99.99,
    image_url: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop',
  },
  {
    id: 3,
    name: 'Panel LED RGB 50x50',
    description: 'Iluminación profesional RGB con control remoto y múltiples efectos',
    category: 'Iluminación',
    price: 149.99,
    image_url: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=300&fit=crop',
  },
  {
    id: 4,
    name: 'Proyector LED Gobo',
    description: 'Proyector LED con patrones personalizables para eventos',
    category: 'Iluminación',
    price: 199.99,
    image_url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=300&fit=crop',
  },
  {
    id: 5,
    name: 'Guitarra Acústica Yamaha',
    description: 'Guitarra acústica de 6 cuerdas, sonido profesional y construcción robusta',
    category: 'Instrumentos',
    price: 399.99,
    image_url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
  },
  {
    id: 6,
    name: 'Teclado 88 Teclas',
    description: 'Teclado digital con 88 teclas contrapesadas y sonidos profesionales',
    category: 'Instrumentos',
    price: 549.99,
    image_url: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=300&fit=crop',
  },
  {
    id: 7,
    name: 'Cable XLR Profesional 10m',
    description: 'Cable XLR balanceado para audio profesional',
    category: 'Tecnología',
    price: 29.99,
    image_url: 'https://images.unsplash.com/photo-1505470468204-cb674d48fbdf?w=400&h=300&fit=crop',
  },
  {
    id: 8,
    name: 'Adaptador USB Estéreo',
    description: 'Convertidor de audio USB para conexión moderna',
    category: 'Tecnología',
    price: 49.99,
    image_url: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=300&fit=crop',
  },
]

const CATEGORIES = ['Todos', 'Sonido', 'Iluminación', 'Instrumentos', 'Tecnología']

export default function Catalog() {
  const [products, setProducts] = useState(MOCK_PRODUCTS)
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [searchTerm, setSearchTerm] = useState('')

  // Filter products
  useEffect(() => {
    let filtered = MOCK_PRODUCTS

    if (selectedCategory !== 'Todos') {
      filtered = filtered.filter(p => p.category === selectedCategory)
    }

    if (searchTerm) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setProducts(filtered)
  }, [selectedCategory, searchTerm])

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-max">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-heading font-bold mb-2">Catálogo de Productos</h1>
          <p className="text-gray-600">Explora nuestros equipos de sonido, iluminación, instrumentos y accesorios</p>
        </div>

        {/* Search & Filters */}
        <div className="mb-8 space-y-4">
          {/* Search */}
          <div>
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-productos-primary"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-productos-primary text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-productos-primary hover:shadow-sm'
                }`}
                aria-pressed={selectedCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 animate-fade-in">
            <p className="text-gray-500 text-lg">No se encontraron productos</p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('Todos')
              }}
              className="mt-4 btn-primary-productos text-sm py-2 px-4 rounded-lg"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
