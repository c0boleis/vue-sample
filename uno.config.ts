import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      primary: {
        '1': 'var(--color-primary-1)',
        '2': 'var(--color-primary-2)',
        '3': 'var(--color-primary-3)',
        '4': 'var(--color-primary-4)',
        '5': 'var(--color-primary-5)',
        '6': 'var(--color-primary-6)',
      },
      neutral: {
        '1': 'var(--color-neutral-1)',
        '2': 'var(--color-neutral-2)',
        '3': 'var(--color-neutral-3)',
        '4': 'var(--color-neutral-4)',
        '5': 'var(--color-neutral-5)',
        '6': 'var(--color-neutral-6)',
      }
    }
  },
  presets: [
    presetWind4(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})