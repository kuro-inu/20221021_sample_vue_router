import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    // outDir: "docs",
  },
  // https://ja.vitejs.dev/config/shared-options.html#base
  // base: "./"
})
