export default function ProductCard({ product, theme = 'productos' }) {
  const themeClasses = {
    productos: 'btn-primary-productos',
    party: 'btn-primary-party',
    wedding: 'btn-primary-wedding',
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hola, me interesa el producto: ${product.name}${
        product.price ? ` - $${product.price}` : ''
      }. ¿Puedes darme más información?`
    )
    window.open(`https://wa.me/593999999999?text=${message}`, '_blank')
  }

  return (
    <div className="card animate-stagger overflow-hidden">
      {/* Image */}
      <div className="relative w-full h-48 bg-gray-100">
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <span className="text-gray-400">Sin imagen</span>
          </div>
        )}
        <span className="absolute top-2 right-2 bg-white px-3 py-1 rounded text-xs font-semibold text-gray-800">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
          {product.description}
        </p>

        {product.price && (
          <p className="text-xl font-bold text-productos-primary mb-4">
            ${product.price}
          </p>
        )}

        <button
          onClick={handleWhatsApp}
          className={`${themeClasses[theme]} w-full text-center text-sm font-semibold py-2 rounded-lg`}
          aria-label={`Consultar ${product.name} por WhatsApp`}
        >
          Consultar por WhatsApp
        </button>
      </div>
    </div>
  )
}
