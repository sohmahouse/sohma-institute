import { defineConfig } from 'astro/config'

export default defineConfig({
  output: 'static',
  build: {
    inlineStylesheets: 'always',
    assets: '_astro',
  },
  vite: {
    build: {
      cssMinify: true,
      minify: 'terser',
    },
  },
})
