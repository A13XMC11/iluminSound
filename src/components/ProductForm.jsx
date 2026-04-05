import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const productSchema = z.object({
  name: z.string().min(3, 'El nombre debe tener al menos 3 caracteres'),
  description: z.string().min(10, 'La descripción debe tener al menos 10 caracteres'),
  category: z.enum(['Sonido', 'Iluminación', 'Instrumentos', 'Tecnología']),
  price: z.coerce.number().positive('El precio debe ser positivo').optional(),
})

export default function ProductForm({ onSubmit, initialData = null, isLoading = false }) {
  const [imageFile, setImageFile] = useState(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: initialData || {
      name: '',
      description: '',
      category: 'Sonido',
      price: '',
    },
  })

  const handleImageChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert('El archivo es demasiado grande. Máximo 10MB.')
        return
      }
      setImageFile(file)
    }
  }

  const onSubmitForm = async (data) => {
    const formData = {
      ...data,
      image: imageFile,
    }
    await onSubmit(formData)
    setImageFile(null)
  }

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="bg-white p-6 rounded-lg shadow-md space-y-4 animate-scale-in">
      {/* Nombre */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold mb-2">
          Nombre del Producto *
        </label>
        <input
          id="name"
          type="text"
          {...register('name')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-productos-primary transition-all"
          placeholder="Ej: Amplificador Yamaha MG"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1 animate-fade-in">{errors.name.message}</p>}
      </div>

      {/* Descripción */}
      <div>
        <label htmlFor="description" className="block text-sm font-semibold mb-2">
          Descripción *
        </label>
        <textarea
          id="description"
          {...register('description')}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-productos-primary transition-all"
          placeholder="Describe las características del producto..."
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1 animate-fade-in">{errors.description.message}</p>
        )}
      </div>

      {/* Categoría */}
      <div>
        <label htmlFor="category" className="block text-sm font-semibold mb-2">
          Categoría *
        </label>
        <select
          id="category"
          {...register('category')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-productos-primary transition-all"
        >
          <option value="Sonido">Sonido</option>
          <option value="Iluminación">Iluminación</option>
          <option value="Instrumentos">Instrumentos Musicales</option>
          <option value="Tecnología">Tecnología/Accesorios</option>
        </select>
      </div>

      {/* Precio */}
      <div>
        <label htmlFor="price" className="block text-sm font-semibold mb-2">
          Precio (opcional)
        </label>
        <input
          id="price"
          type="number"
          {...register('price')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-productos-primary transition-all"
          placeholder="Ej: 299.99"
          step="0.01"
        />
        {errors.price && <p className="text-red-500 text-sm mt-1 animate-fade-in">{errors.price.message}</p>}
      </div>

      {/* Imagen */}
      <div>
        <label htmlFor="image" className="block text-sm font-semibold mb-2">
          Imagen (máximo 10MB)
        </label>
        <input
          id="image"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-productos-primary transition-all"
        />
        {imageFile && <p className="text-green-600 text-sm mt-1 animate-fade-in">✓ {imageFile.name}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="btn-primary-productos w-full py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      >
        {isLoading ? 'Guardando...' : initialData ? 'Actualizar Producto' : 'Crear Producto'}
      </button>
    </form>
  )
}
