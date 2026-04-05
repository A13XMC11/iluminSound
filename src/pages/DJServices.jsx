export default function DJServices({ type = 'party' }) {
  if (type === 'party') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-party-primary to-party-light py-12">
        <div className="container-max">
          {/* Header */}
          <div className="text-center mb-12 text-white animate-slide-up">
            <h1 className="text-5xl font-heading font-bold mb-4">DJ Party</h1>
            <p className="text-xl">
              Haz que tu evento sea inolvidable con la mejor música en vivo
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[1, 2, 3, 4].map(i => (
              <div
                key={i}
                className="h-64 bg-party-secondary rounded-lg overflow-hidden shadow-lg animate-stagger hover:shadow-xl transition-shadow"
              >
                <img
                  src={`https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop&q=60`}
                  alt={`DJ Event ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Services */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8 animate-scale-in">
            <h2 className="text-3xl font-heading font-bold mb-6 text-gray-900">
              Nuestros Servicios
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-party-primary font-bold mr-3">✓</span>
                <span>DJ profesional con 10+ años de experiencia</span>
              </li>
              <li className="flex items-start">
                <span className="text-party-primary font-bold mr-3">✓</span>
                <span>Equipos de sonido e iluminación de última generación</span>
              </li>
              <li className="flex items-start">
                <span className="text-party-primary font-bold mr-3">✓</span>
                <span>Personalización de lista de canciones según tu gusto</span>
              </li>
              <li className="flex items-start">
                <span className="text-party-primary font-bold mr-3">✓</span>
                <span>Disponible para eventos corporativos, cumpleaños, bodas y más</span>
              </li>
              <li className="flex items-start">
                <span className="text-party-primary font-bold mr-3">✓</span>
                <span>Opciones de paquetes flexibles según tu presupuesto</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center animate-slide-up">
            <a
              href="https://wa.me/593999999999?text=Hola%20IluminSound%21%20Me%20interesa%20los%20servicios%20de%20DJ%20Party"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-party-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Reservar DJ Party
            </a>
          </div>
        </div>
      </div>
    )
  }

  // Wedding DJ
  return (
    <div className="min-h-screen bg-gradient-to-b from-wedding-primary to-wedding-light py-12">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-12 text-white animate-slide-up">
          <h1 className="text-5xl font-heading font-bold mb-4">Wedding DJ</h1>
          <p className="text-xl">
            Haz tu día especial aún más memorable con la música perfecta
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[1, 2, 3, 4].map(i => (
            <div
              key={i}
              className="h-64 bg-wedding-secondary rounded-lg overflow-hidden shadow-lg animate-stagger hover:shadow-xl transition-shadow"
            >
              <img
                src={`https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&h=400&fit=crop&q=60`}
                alt={`Wedding Event ${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 animate-scale-in">
          <h2 className="text-3xl font-heading font-bold mb-6 text-gray-900">
            Experiencia Premium
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="text-wedding-primary font-bold mr-3">✓</span>
              <span>DJ especializado en bodas con amplia experiencia</span>
            </li>
            <li className="flex items-start">
              <span className="text-wedding-primary font-bold mr-3">✓</span>
              <span>Sistema de iluminación y sonido premium</span>
            </li>
            <li className="flex items-start">
              <span className="text-wedding-primary font-bold mr-3">✓</span>
              <span>Ceremonia, cena y fiesta - música perfecta para cada momento</span>
            </li>
            <li className="flex items-start">
              <span className="text-wedding-primary font-bold mr-3">✓</span>
              <span>Asesoramiento personalizado sobre selección de canciones</span>
            </li>
            <li className="flex items-start">
              <span className="text-wedding-primary font-bold mr-3">✓</span>
              <span>Profesionalismo, discreción y atención al detalle</span>
            </li>
            <li className="flex items-start">
              <span className="text-wedding-primary font-bold mr-3">✓</span>
              <span>Paquetes completos que incluyen producción y coordinación</span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center animate-slide-up">
          <a
            href="https://wa.me/593999999999?text=Hola%20IluminSound%21%20Me%20interesa%20los%20servicios%20de%20Wedding%20DJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-wedding-secondary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Reservar Wedding DJ
          </a>
        </div>
      </div>
    </div>
  )
}
