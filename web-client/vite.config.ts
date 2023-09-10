import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'components': '/src/components',
      'routes': '/src/routes',
      'view': '/src/view',
      'API': '/src/API',
      'interfaces': '/src/interfaces',
      'assets': '/src/assets',
      'store': '/src/store'
    },
  },
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'RC-UA',
        short_name: 'RC-UA',
        start_url: '/',
        display: 'standalone',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        icons: [
          {
            src: '/path/to/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/path/to/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),]
})
