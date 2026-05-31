import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/pharma-dictionary/',
  server: {
    watch: {
      ignored: ['**/node_modules/**', '**/.git/**', '**/AppData/**', '**/dist/**'],
    },
  },
})