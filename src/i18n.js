import { createI18n } from 'vue-i18n'
import en from './i18n/locales/en.json'
import de from './i18n/locales/de.json'

const i18n = createI18n({
  legacy: false, // usar Composition API (recomendado con Vue 3)
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    de
  }
})

export default i18n