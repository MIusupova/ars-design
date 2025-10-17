import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ars-design/', // 👈 обязательно для GitHub Pages
  plugins: [react()],
});
