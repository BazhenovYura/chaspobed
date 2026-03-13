import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig({
  // Определяем base по наличию GITHUB_ACTIONS (всегда true при деплое)
  base: process.env.GITHUB_ACTIONS ? '/chaspobed/' : '/',
  
  plugins: [inspectAttr(), react()],
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild' as const,
    cssMinify: true,
  },
  
  server: {
    port: 3000,
    open: true,
  },
});
