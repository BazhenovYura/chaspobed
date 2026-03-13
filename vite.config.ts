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
  
  // Оптимизация для продакшена
  build: {
    outDir: 'dist',
    sourcemap: false,
    // Минимизация и оптимизация
    minify: 'esbuild',
    cssMinify: true,
    // Убираем manualChunks - пусть Vite сам оптимизирует
  },
  
  // Оптимизация для разработки
  server: {
    port: 3000,
    open: true,
  },
});
