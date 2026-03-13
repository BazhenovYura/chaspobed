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
    sourcemap: false, // отключаем для продакшена (экономим место)
    // Минимизация и оптимизация
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      output: {
        // Разделяем библиотеки на отдельные чанки для лучшего кэширования
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-hook-form'],
          'radix-ui': Object.keys(require('./package.json').dependencies)
            .filter(dep => dep.startsWith('@radix-ui/')),
          'utils': ['clsx', 'tailwind-merge', 'class-variance-authority'],
        },
      },
    },
  },
  
  // Оптимизация для разработки
  server: {
    port: 3000,
    open: true,
  },
});
