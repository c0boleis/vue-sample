export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', '@pinia/nuxt', '@nuxt/icon', 'reka-ui/nuxt', '@unocss/nuxt'],
  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'fr',
    locales: [
      { code: 'fr', name: 'Français', file: 'fr.json' },
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'de', name: 'Deutsch', file: 'de.json' },
      { code: 'es', name: 'Español', file: 'es.json' },
      { code: 'it', name: 'Italiano', file: 'it.json' },
      { code: 'la', name: 'Lingua latīna', file: 'la.json' },
      { code: 'pt', name: 'Português', file: 'pt.json' },
      { code: 'nl', name: 'Dutch', file: 'nl.json' },
      { code: 'pl', name: 'Polski', file: 'pl.json' },
      { code: 'zu', name: 'isiZulu', file: 'zu.json' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    bundle: {
      optimizeTranslationDirective: false,
    }
  },
  icon: {
    customCollections: [
      {
        prefix: 'fa-solid',
        dir: './node_modules/@awesome.me/kit-a373433768/icons/svgs/solid'
      }, {
        prefix: 'fa-regular',
        dir: './node_modules/@awesome.me/kit-a373433768/icons/svgs/regular'
      }, {
        prefix: 'fa-brands',
        dir: './node_modules/@awesome.me/kit-a373433768/icons/svgs/brands'
      }
    ],
  },
})