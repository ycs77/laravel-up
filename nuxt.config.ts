import { defineNuxtConfig } from 'nuxt'
import defaultTheme from 'windicss/defaultTheme'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: [
    '@/assets/base.css',
    '@/assets/font.css',
  ],
  modules: [
    'nuxt-windicss',
    '@vueuse/nuxt',
    ['unplugin-icons/nuxt', { /* options */ }],
  ],
  windicss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', defaultTheme.fontFamily.sans],
          },
        },
      },
    },
  },
})
