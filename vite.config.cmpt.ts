import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const ext: Record<string, string> = {
  cjs: 'cjs',
  es: 'mjs'
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    minify: 'terser',
    lib: {
      entry: ['src/gantt/index.vue'],
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${ext[format]}`
    },
    rollupOptions: {
      external: ['vue']
    }
  }
})
