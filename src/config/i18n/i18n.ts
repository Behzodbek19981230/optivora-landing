export const i18n = {
  defaultLocale: 'uz',
  locales: ['en', 'ru', 'uz', 'oz', 'qr'],
  langDirection: {
    en: 'ltr',
    ru: 'ltr',
    uz: 'ltr',
    oz: 'ltr',
    qr: 'ltr'
  }
} as const

export type Locale = (typeof i18n)['locales'][number]
