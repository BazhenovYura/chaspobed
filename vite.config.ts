import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  // Определяем base в зависимости от того, где запускается сборка
  const base = process.env.NODE_ENV === 'production' && process.env.GITHUB_ACTIONS 
    ? '/chaspobed/'  // Для GitHub Pages (в подпапке)
    : '/';           // Для продакшена на своём домене (в корне)
  
  return {
    base,
    
    plugins: [inspectAttr(), react()],
    
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    
    build: {
      outDir: 'dist',
      sourcemap: false,
      minify: 'esbuild',
      cssMinify: true,
    },
    
    server: {
      port: 3000,
      open: true,
    },
  }
});
