import { useState } from 'react'

export default function Header({ currentPage, onNavigate, isAdminLoggedIn }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'catalog', label: 'Catálogo' },
    { id: 'dj-party', label: 'DJ Party' },
    { id: 'dj-wedding', label: 'Wedding DJ' },
    { id: 'about', label: 'Sobre Nosotros' },
    { id: 'contact', label: 'Contacto' },
  ]

  const handleNavClick = (pageId) => {
    onNavigate(pageId)
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed w-full top-0 bg-white shadow-md z-50">
      <nav className="container-max flex items-center justify-between py-4">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center"
          aria-label="Ir al inicio - IluminSound"
        >
          <img
            src="/img/logo.jpg"
            alt="IluminSound"
            className="h-12 w-auto"
          />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-medium transition-colors px-2 py-1 rounded ${
                currentPage === item.id
                  ? 'text-productos-primary font-bold'
                  : 'text-gray-600 hover:text-productos-primary'
              }`}
              aria-current={currentPage === item.id ? 'page' : undefined}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Admin & WhatsApp Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/593999999999?text=Hola%20IluminSound%20Multimark"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-productos text-sm py-2 px-4 rounded-lg"
          >
            WhatsApp
          </a>
          {isAdminLoggedIn && (
            <button
              onClick={() => handleNavClick('admin')}
              className="btn-primary-productos text-sm py-2 px-4 rounded-lg"
            >
              Admin
            </button>
          )}
          {!isAdminLoggedIn && (
            <button
              onClick={() => handleNavClick('admin')}
              className="text-sm font-medium text-gray-600 hover:text-productos-primary transition-colors px-2 py-1 rounded"
            >
              Acceso Admin
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-50 border-t animate-slide-down">
          <div className="container-max py-4 flex flex-col gap-3">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-2 transition-colors ${
                  currentPage === item.id
                    ? 'text-productos-primary font-bold'
                    : 'text-gray-600 hover:text-productos-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
            <hr />
            <a
              href="https://wa.me/593999999999?text=Hola%20IluminSound%20Multimark"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-productos text-center text-sm py-2 rounded-lg"
            >
              WhatsApp
            </a>
            <button
              onClick={() => handleNavClick('admin')}
              className="text-left py-2 text-gray-600 hover:text-productos-primary transition-colors"
            >
              Acceso Admin
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
