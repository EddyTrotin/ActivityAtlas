// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt3-leaflet',
    '@pinia/nuxt',
    '@nuxt/test-utils/module',
  ],
})
