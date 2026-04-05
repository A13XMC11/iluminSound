import ProductCard from '../components/ProductCard'

export default function Home({ onNavigate }) {
  const featuredProducts = [
    {
      id: 1,
      name: 'Amplificador Yamaha MG Series',
      description: 'Mezclador compacto de 4 canales con entradas XLR',
      category: 'Sonido',
      price: 299.99,
      image_url: 'https://images.unsplash.com/photo-1611339555312-e607c25352ca?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      name: 'Panel LED RGB 50x50',
      description: 'Iluminación profesional RGB con control remoto',
      category: 'Iluminación',
      price: 149.99,
      image_url: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      name: 'Guitarra Acústica Yamaha',
      description: 'Guitarra acústica de 6 cuerdas, sonido profesional',
      category: 'Instrumentos',
      price: 399.99,
      image_url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Section - Productos */}
      <section className="h-screen bg-gradient-to-r from-productos-primary to-productos-secondary flex items-center justify-center text-white animate-fade-in">
        <div className="container-max text-center">
          {/* Logo splash */}
          <div className="flex justify-center mb-8 animate-scale-in">
            <div className="bg-white rounded-2xl shadow-2xl px-8 py-4 inline-block">
              <img
                src="/img/logo.jpg"
                alt="IluminSound"
                className="h-28 w-auto"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Equipos de Sonido e Iluminación
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Los mejores equipos para tus eventos
          </p>
          <button
            onClick={() => onNavigate('catalog')}
            className="bg-white text-productos-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors transform hover:scale-105"
          >
            Ver Catálogo
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container-max">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 animate-slide-up">
            Productos Destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* DJ Party Hero */}
      <section className="h-screen bg-gradient-to-r from-party-primary to-party-secondary flex items-center justify-center text-white animate-fade-in">
        <div className="container-max text-center">
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            DJ Party
          </h2>
          <p className="text-xl md:text-2xl mb-8">
            Musica y diversión para tus eventos
          </p>
          <button
            onClick={() => onNavigate('dj-party')}
            className="bg-white text-party-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors transform hover:scale-105"
          >
            Reservar DJ
          </button>
        </div>
      </section>

      {/* Wedding DJ Hero */}
      <section className="h-screen bg-gradient-to-r from-wedding-primary to-wedding-secondary flex items-center justify-center text-white animate-fade-in">
        <div className="container-max text-center">
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Wedding DJ
          </h2>
          <p className="text-xl md:text-2xl mb-8">
            Haz tu día especial aún más memorable
          </p>
          <button
            onClick={() => onNavigate('dj-wedding')}
            className="bg-white text-wedding-secondary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors transform hover:scale-105"
          >
            Reservar Wedding DJ
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 animate-slide-up">
            ¿Por Qué Elegirnos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow animate-stagger">
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="text-xl font-bold mb-3">Equipos Profesionales</h3>
              <p className="text-gray-600">
                Contamos con los mejores equipos de sonido e iluminación del mercado
              </p>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow animate-stagger">
              <div className="text-4xl mb-4">👨‍💼</div>
              <h3 className="text-xl font-bold mb-3">DJs Experimentados</h3>
              <p className="text-gray-600">
                Nuestros DJs tienen más de 10 años de experiencia en eventos
              </p>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow animate-stagger">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-3">Soluciones Personalizadas</h3>
              <p className="text-gray-600">
                Adaptamos nuestros servicios a tus necesidades específicas
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
