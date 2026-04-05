import { useState } from 'react'
import ProductForm from '../components/ProductForm'

export default function AdminPanel({ isLoggedIn, setIsLoggedIn }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [products, setProducts] = useState([])
  const [showForm, setShowForm] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    // Mock login - reemplazar con Supabase Auth
    if (email && password) {
      setIsLoggedIn(true)
      setEmail('')
      setPassword('')
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setProducts([])
    setShowForm(false)
  }

  const handleAddProduct = async (formData) => {
    // Mock - reemplazar con Supabase insert
    const newProduct = {
      id: Date.now(),
      ...formData,
      image_url: URL.createObjectURL(formData.image),
    }
    setProducts([...products, newProduct])
    setShowForm(false)
    alert('Producto agregado exitosamente')
  }

  const handleDeleteProduct = (id) => {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      setProducts(products.filter(p => p.id !== id))
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container-max max-w-md">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-heading font-bold mb-6 text-center">
              Acceso Admin
            </h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-productos-primary"
                  placeholder="admin@iluminsound.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-semibold mb-2">
                  Contraseña
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-productos-primary"
                  placeholder="Tu contraseña"
                />
              </div>
              <button
                type="submit"
                className="btn-primary-productos w-full py-2"
              >
                Iniciar Sesión
              </button>
            </form>
            <p className="text-sm text-gray-500 text-center mt-4">
              Demo: usa cualquier email/contraseña
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-max">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-heading font-bold">Panel Administrativo</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700"
          >
            Cerrar Sesión
          </button>
        </div>

        {/* Action Buttons */}
        <div className="mb-8">
          <button
            onClick={() => setShowForm(!showForm)}
            className="btn-primary-productos py-3 px-6"
          >
            {showForm ? '← Volver' : '+ Agregar Producto'}
          </button>
        </div>

        {showForm ? (
          <div className="max-w-2xl">
            <ProductForm onSubmit={handleAddProduct} />
          </div>
        ) : (
          <>
            {/* Products List */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {products.length > 0 ? (
                <table className="w-full">
                  <thead className="bg-gray-100 border-b">
                    <tr>
                      <th className="text-left px-6 py-3 font-semibold">Nombre</th>
                      <th className="text-left px-6 py-3 font-semibold">Categoría</th>
                      <th className="text-left px-6 py-3 font-semibold">Precio</th>
                      <th className="text-center px-6 py-3 font-semibold">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map(product => (
                      <tr key={product.id} className="border-b hover:bg-gray-50">
                        <td className="px-6 py-3">{product.name}</td>
                        <td className="px-6 py-3">{product.category}</td>
                        <td className="px-6 py-3">
                          {product.price ? `$${product.price}` : 'Sin precio'}
                        </td>
                        <td className="px-6 py-3 text-center space-x-2">
                          <button className="text-blue-600 hover:text-blue-800">
                            Editar
                          </button>
                          <button
                            onClick={() => handleDeleteProduct(product.id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="p-8 text-center text-gray-500">
                  No hay productos aún. Haz clic en "Agregar Producto" para comenzar.
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
