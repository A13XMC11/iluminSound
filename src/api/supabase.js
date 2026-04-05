import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('⚠️ Supabase credentials not configured. Features will be limited.')
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '')

// Funciones de Productos
export async function fetchProducts() {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return data || []
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

export async function fetchProductById(id) {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single()

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error fetching product:', error)
    return null
  }
}

export async function createProduct(productData) {
  try {
    const { data, error } = await supabase
      .from('products')
      .insert([productData])
      .select()
      .single()

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error creating product:', error)
    throw error
  }
}

export async function updateProduct(id, productData) {
  try {
    const { data, error } = await supabase
      .from('products')
      .update({
        ...productData,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error updating product:', error)
    throw error
  }
}

export async function deleteProduct(id) {
  try {
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id)

    if (error) throw error
    return true
  } catch (error) {
    console.error('Error deleting product:', error)
    throw error
  }
}

// Funciones de Autenticación
export async function signInAdmin(email, password) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) throw error
    return data.session
  } catch (error) {
    console.error('Error signing in:', error)
    throw error
  }
}

export async function signOutAdmin() {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    return true
  } catch (error) {
    console.error('Error signing out:', error)
    throw error
  }
}

export async function getCurrentUser() {
  try {
    const { data, error } = await supabase.auth.getUser()
    if (error) throw error
    return data.user
  } catch (error) {
    console.error('Error getting current user:', error)
    return null
  }
}

export async function uploadImage(file, folder = 'products') {
  try {
    const fileName = `${folder}/${Date.now()}-${file.name}`

    // Usar Vercel Blob si está configurado, sino Supabase Storage
    if (import.meta.env.VITE_VERCEL_BLOB_TOKEN) {
      // Implementar Vercel Blob upload aquí
      console.log('Using Vercel Blob for image upload')
    } else {
      // Fallback a Supabase Storage
      const { data, error } = await supabase.storage
        .from('products')
        .upload(fileName, file)

      if (error) throw error
      return data.path
    }
  } catch (error) {
    console.error('Error uploading image:', error)
    throw error
  }
}

export function getImageUrl(path) {
  if (!path) return null
  try {
    const { data } = supabase.storage
      .from('products')
      .getPublicUrl(path)
    return data.publicUrl
  } catch (error) {
    console.error('Error getting image URL:', error)
    return null
  }
}
