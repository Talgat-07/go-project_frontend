// https://vite.dev/config/
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      app: '/src/app',
      modules: '/src/modules',
      pages: '/src/pages',
      ui: '/src/ui',
      utils: '/src/utils',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/runTests.js',
  },
  // build: {
  //   rollupOptions: {
  //     external: ['/src/app/Routing/main.jsx'],
  //   },
  // },
})
