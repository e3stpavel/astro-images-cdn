import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  output: 'static',

  site: 'https://e3stpavel.github.io',
  base: '/astro-images-cdn',

  build: {
    assetsPrefix: 'https://cdn.jsdelivr.net/gh/e3stpavel/astro-images-cdn/dist',
  },

  server: {
    host: true,
  },
})
