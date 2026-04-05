export default function About() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-4xl font-heading font-bold mb-4">Sobre Nosotros</h1>
          <p className="text-xl text-gray-600">
            Conoce la historia detrás de IluminSound Multimark
          </p>
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="animate-slide-up">
            <h2 className="text-2xl font-heading font-bold mb-4">Nuestra Historia</h2>
            <p className="text-gray-700 mb-4">
              Fundada en 2015, IluminSound Multimark nació de la pasión por la música y los eventos de calidad.
              Lo que comenzó como un pequeño negocio de equipos de sonido se ha convertido en una empresa
              integral de soluciones para eventos en Quito, Ecuador.
            </p>
            <p className="text-gray-700">
              Hoy somos referentes en la ciudad, proporcionando equipos profesionales, DJs experimentados
              y servicios personalizados para hacer que cada evento sea único e inolvidable.
            </p>
          </div>
          <div className="flex items-center justify-center animate-scale-in">
            <img
              src="/img/logo.jpg"
              alt="IluminSound - Nuestra Historia"
              className="w-full max-w-xs rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mb-12">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center animate-slide-up">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow animate-stagger">
              <h3 className="text-xl font-bold mb-3">🎯 Excelencia</h3>
              <p className="text-gray-700">
                Nos comprometemos con la máxima calidad en cada proyecto y servicio que ofrecemos.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow animate-stagger">
              <h3 className="text-xl font-bold mb-3">💼 Profesionalismo</h3>
              <p className="text-gray-700">
                Nuestro equipo está altamente capacitado y comprometido con tus necesidades.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow animate-stagger">
              <h3 className="text-xl font-bold mb-3">🎨 Creatividad</h3>
              <p className="text-gray-700">
                Buscamos soluciones innovadoras para que tu evento sea verdaderamente especial.
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-12">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center animate-slide-up">
            Nuestro Equipo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Carlos Mendoza', role: 'Gerente General', specialty: 'Sonido Profesional' },
              { name: 'María Rodríguez', role: 'DJ Principal', specialty: 'Eventos y Bodas' },
              { name: 'Juan López', role: 'Técnico de Iluminación', specialty: 'Efectos Visuales' },
            ].map((member, idx) => (
              <div key={idx} className="bg-white border-2 border-productos-primary rounded-lg p-6 text-center hover:shadow-lg transition-all animate-stagger">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-productos-primary font-semibold">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-productos-primary to-productos-secondary text-white rounded-lg p-8 animate-slide-up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="animate-stagger">
              <div className="text-4xl font-bold">500+</div>
              <p>Eventos Realizados</p>
            </div>
            <div className="animate-stagger">
              <div className="text-4xl font-bold">98%</div>
              <p>Satisfacción</p>
            </div>
            <div className="animate-stagger">
              <div className="text-4xl font-bold">10+</div>
              <p>Años Experiencia</p>
            </div>
            <div className="animate-stagger">
              <div className="text-4xl font-bold">1000+</div>
              <p>Clientes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
