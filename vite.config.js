import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
<<<<<<< HEAD

export default defineConfig({
  plugins: [
    react(),
  ],
  
  base:process.env.VITE_BASE_PATH || ""
=======
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base:process.env.VITE_BASE_PATH || "/Vznx"
>>>>>>> 0c51e77eaa8e2a04f0ee88da6f3983da03d1990f
})
