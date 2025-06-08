import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // Usar rutas relativas para dominios personalizados
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
