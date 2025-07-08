import { theme } from '@unocss/preset-wind3'
import transformerDirectives from '@unocss/transformer-directives'

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
  css: ['@/styles/index.css'],
  modules: [
    '@vueuse/nuxt',
    'unplugin-icons/nuxt',
    '@unocss/nuxt',
  ],
  unocss: {
    uno: true,
    preflight: true,
    theme: {
      fontFamily: {
        sans: ['Inter', theme.fontFamily?.sans],
      },
    },
    transformers: [
      transformerDirectives(),
    ],
  },
  compatibilityDate: '2025-05-15',
  devtools: {
    enabled: true,
  },
})
