import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  base: '/ars-design/', // 👈 добавь base: '/имя-репозитория/'
})
