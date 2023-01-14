import { defineNuxtConfig } from 'nuxt'
import defaultTheme from 'windicss/defaultTheme'

// https://nuxt.com/docs/getting-started/configuration
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.bunny.net' },
        { rel: 'stylesheet', href: 'https://fonts.bunny.net/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap' },
      ],
    },
  },
  css: ['@/assets/base.css'],
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
