// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: {
    public: {
      baseUrl: process.env.NODE_ENV === 'production'
        ? 'https://nuxtjs.org'
        : 'http://localhost:3000'
    }
  },
  build: {
    transpile: ['oh-vue-icons']
  }
})
