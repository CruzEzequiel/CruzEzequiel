import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(() => {
  const base = import.meta.env.VITE_BASE || '/'

  return {
    plugins: [react(), tailwindcss()],
    base,
  }
})
