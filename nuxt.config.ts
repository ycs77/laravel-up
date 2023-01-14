import theme from 'windicss/defaultTheme'

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
    ['unplugin-icons/nuxt', {}],
  ],
  windicss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', theme.fontFamily.sans],
          },
        },
      },
    },
  },
})
