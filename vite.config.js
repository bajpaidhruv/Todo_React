import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // This is correct
  build: {
    outDir: 'dist', // This is optional but recommended
  }
})
