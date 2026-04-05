import '@testing-library/jest-dom'

// Mock de Supabase
vi.mock('@supabase/supabase-js', () => ({
  createClient: vi.fn(() => ({
    auth: {
      signInWithPassword: vi.fn(),
      signOut: vi.fn(),
    },
    from: vi.fn(),
  })),
}))

// Mock de URL.createObjectURL (para pruebas de imágenes)
global.URL.createObjectURL = vi.fn(() => 'blob:mock-url')

// Suppress console warnings en tests
global.console = {
  ...console,
  warn: vi.fn(),
  error: vi.fn(),
}
