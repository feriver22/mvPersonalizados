import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    open: true,
  },
  build: {
    rollupOptions: {
      // Solo usamos index.html como punto de entrada para el SPA
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
})
