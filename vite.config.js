import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react"],
          "react-dom": ["react-dom"],
        },
      },
    },
  },
  server: {
    historyApiFallback: true,
  },
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
})
