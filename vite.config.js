import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  resolve: {
    alias: {
      '@': '/src',
      '@assets': '/src/assets',
      '@styles': '/src/styles',
      '@components': '/src/components',
      '@pages': '/src/components/pages'
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
         // Additional Sass/SCSS options
      },
    }
  },
});
