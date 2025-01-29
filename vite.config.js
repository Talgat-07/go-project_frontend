import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import liveReload from 'vite-plugin-live-reload'

export default defineConfig({
  plugins: [react(), liveReload(['src/**/*'])],
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
  // test: {
  //   globals: true,
  //   environment: 'jsdom',
  //   setupFiles: './tests/runTests.js',
  // },
  // server: { hmr: true },
})
