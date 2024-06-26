import { theme } from '@unocss/preset-wind'
import transformerDirectives from '@unocss/transformer-directives'

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
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL ?? 'http://localhost:3000',
    },
  },
  css: ['@/styles/index.css'],
  modules: [
    '@vueuse/nuxt',
    'unplugin-icons/nuxt',
    '@unocss/nuxt',
  ],
  devtools: {
    enabled: true,
  },
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
})
