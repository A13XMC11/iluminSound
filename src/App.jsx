import { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import DJServices from './pages/DJServices'
import AdminPanel from './pages/AdminPanel'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false)

  const handleNavigation = (page) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigation} />
      case 'catalog':
        return <Catalog />
      case 'dj-party':
        return <DJServices type="party" />
      case 'dj-wedding':
        return <DJServices type="wedding" />
      case 'about':
        return <About />
      case 'contact':
        return <Contact />
      case 'admin':
        return <AdminPanel isLoggedIn={isAdminLoggedIn} setIsLoggedIn={setIsAdminLoggedIn} />
      default:
        return <Home onNavigate={handleNavigation} />
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigation}
        isAdminLoggedIn={isAdminLoggedIn}
      />
      <main className="pt-16">
        {renderPage()}
      </main>
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container-max text-center">
          <p>&copy; 2026 IluminSound Multimark. Todos los derechos reservados.</p>
          <p className="text-sm text-gray-400 mt-2">Quito, Ecuador</p>
        </div>
      </footer>
    </div>
  )
}
