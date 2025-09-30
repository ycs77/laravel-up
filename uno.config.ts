import { theme } from '@unocss/preset-wind3'
import transformerDirectives from '@unocss/transformer-directives'
import { defineConfig } from 'unocss'

export default defineConfig({
  transformers: [
    transformerDirectives(),
  ],
  theme: {
    fontFamily: {
      sans: `Inter,${theme.fontFamily?.sans}`.trim(),
    },
  },
})
