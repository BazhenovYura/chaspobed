import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // На GitHub Actions mode='production', на локальной машине mode='development'
  const base = mode === 'production' && process.env.GITHUB_ACTIONS 
    ? '/chaspobed/' 
    : '/'
  
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
      minify: 'esbuild' as const,
      cssMinify: true,
    },
    server: {
      port: 3000,
      open: true,
    },
  }
})
