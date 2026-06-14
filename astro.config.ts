import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  output: 'static',

  build: {
    assetsPrefix: 'https://cdn.jsdelivr.net/gh/e3stpavel/astro-images-cdn/dist',
  },

  server: {
    host: true,
  },
})
