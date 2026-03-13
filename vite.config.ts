import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig({
  // ВАЖНО: для GitHub Pages в подпапке репозитория
  base: '/chaspobed/',
  
  plugins: [inspectAttr(), react()],
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
  // ОЧЕНЬ ВАЖНО: отключаем ручное разделение чанков
  build: {
    outDir: 'dist',
    sourcemap: false,
    // НЕ используем manualChunks - пусть Vite сам оптимизирует
    rollupOptions: {
      output: {
        // Убираем manualChunks, которые ломают загрузку
      }
    }
  },
  
  server: {
    port: 3000,
    open: true,
  },
});
