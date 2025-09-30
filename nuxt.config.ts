// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en-US',
      },
      link: [
        { rel: 'preload', href: '/fonts/inter-v12-latin-regular.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
        { rel: 'preload', href: '/fonts/inter-v12-latin-500.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
        { rel: 'preload', href: '/fonts/inter-v12-latin-600.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
        { rel: 'preload', href: '/fonts/inter-v12-latin-900.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
      ],
    },
  },
  css: ['~/assets/css/index.css'],
  typescript: {
    typeCheck: true,
  },
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    'unplugin-icons/nuxt',
  ],
  unocss: {
    preflight: true,
  },
  devtools: { enabled: true },
  compatibilityDate: '2025-07-15',
})
