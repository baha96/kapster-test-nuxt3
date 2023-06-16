import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  // Styles
  css: ["~/assets/styles/main.scss" ],

  // Modules
  modules: [
    '@pinia/nuxt',
  ],

  // Pinia: options
  pinia: {
    autoImports: [
      'defineStore',
      ['defineStore', 'definePiniaStore'],
    ],
  },

  devtools: { enabled: true }
})
