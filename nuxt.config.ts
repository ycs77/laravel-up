import { defineNuxtConfig } from 'nuxt/config'
import transformerDirectives from '@unocss/transformer-directives'

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en-US',
      },
    },
  },
  css: ['@/assets/base.css'],
  modules: [
    '@vueuse/nuxt',
    'unplugin-icons/nuxt',
    '@unocss/nuxt',
  ],
  unocss: {
    uno: true,
    preflight: true,
    webFonts: {
      provider: 'bunny',
      fonts: {
        sans: {
          name: 'Inter',
          weights: ['400', '500', '600', '900'],
        },
      },
    },
    transformers: [
      transformerDirectives(),
    ],
  },
})
