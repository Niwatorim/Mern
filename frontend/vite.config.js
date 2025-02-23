import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      "/api":{
        target:'https://localhost:5000' //basically everytime /api is called it prefixes with this as a kind of 'proxy'
      }
    }
  }
})
