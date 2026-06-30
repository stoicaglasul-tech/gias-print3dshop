import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/gias-print3dshop/', // 👈 MAKE SURE THIS IS EXACTLY YOUR REPO NAME
})