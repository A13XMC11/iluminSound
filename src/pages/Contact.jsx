import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'productos',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Mock - reemplazar con Supabase
    const whatsappMessage = encodeURIComponent(
      `Hola IluminSound,\n\nNombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\nServicio: ${formData.serviceType}\nMensaje: ${formData.message}`
    )
    window.open(`https://wa.me/593999999999?text=${whatsappMessage}`, '_blank')
    setFormData({ name: '', email: '', phone: '', serviceType: 'productos', message: '' })
    alert('Mensaje enviado. Te contactaremos pronto.')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-4xl font-heading font-bold mb-4">Contacto</h1>
          <p className="text-xl text-gray-600">
            Ponte en contacto con nosotros para tu evento o consulta
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8 animate-scale-in">
            <h2 className="text-2xl font-heading font-bold mb-6">Envíanos un Mensaje</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Nombre *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-productos-primary transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-productos-primary transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                    Teléfono
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-productos-primary transition-all"
                    placeholder="+593 9XXXXXXXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="serviceType" className="block text-sm font-semibold mb-2">
                  ¿Qué te interesa?
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-productos-primary transition-all"
                >
                  <option value="productos">Productos</option>
                  <option value="dj-party">DJ Party</option>
                  <option value="dj-wedding">Wedding DJ</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-productos-primary transition-all"
                  placeholder="Cuéntanos sobre tu evento o consulta..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary-productos w-full py-3 font-semibold rounded-lg transition-all"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-8 animate-scale-in">
              <h2 className="text-2xl font-heading font-bold mb-6">Información de Contacto</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">📍 Ubicación</h3>
                  <p className="text-gray-700">
                    Quito, Ecuador<br />
                    Centro Comercial Multimark
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">📞 Teléfono</h3>
                  <a href="tel:+593999999999" className="text-productos-primary hover:underline transition-colors">
                    +593 (9) 9999 9999
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">💬 WhatsApp</h3>
                  <a
                    href="https://wa.me/593999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-productos-primary hover:underline inline-block transition-colors"
                  >
                    Escribir por WhatsApp
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">⏰ Horario</h3>
                  <p className="text-gray-700">
                    Lunes - Viernes: 9:00 AM - 6:00 PM<br />
                    Sábado: 10:00 AM - 4:00 PM<br />
                    Domingo: Cerrado
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">🌐 Redes Sociales</h3>
                  <div className="flex gap-4">
                    <a href="#" className="text-productos-primary hover:text-red-700 transition-colors">
                      Instagram
                    </a>
                    <a href="#" className="text-productos-primary hover:text-blue-700 transition-colors">
                      Facebook
                    </a>
                    <a href="#" className="text-productos-primary hover:text-cyan-600 transition-colors">
                      TikTok
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp CTA */}
            <div className="bg-gradient-to-r from-party-primary to-party-secondary text-white rounded-lg p-8 text-center animate-slide-up">
              <h3 className="text-2xl font-bold mb-4">Contacto Rápido</h3>
              <p className="mb-6">Comunícate con nosotros directamente por WhatsApp</p>
              <a
                href="https://wa.me/593999999999?text=Hola%20IluminSound%2C%20quiero%20hacer%20una%20consulta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-party-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors transform hover:scale-105"
              >
                Abrir WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
