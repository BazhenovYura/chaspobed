import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig({
  // ВАЖНО: base должен точно соответствовать названию репозитория
  // GitHub Pages будет обслуживать сайт по адресу:
  // https://bazhenovyura.github.io/chaspobed/
  base: '/chaspobed/',
  
  plugins: [inspectAttr(), react()],
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
  // Полезные настройки для сборки
  build: {
    outDir: 'dist',
    sourcemap: true, // поможет при отладке
    // Оптимизация для продакшена
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  
  // Оптимизация сервера разработки
  server: {
    port: 3000,
    open: true, // автоматически открывать браузер
  },
});
