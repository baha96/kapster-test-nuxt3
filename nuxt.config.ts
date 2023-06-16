import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  // styles
  css: ["~/assets/styles/main.scss" ],

  // options
  modules: [
    // ...
    '@pinia/nuxt',
  ],

  // Pinia: options
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },

  devtools: { enabled: true }
})
