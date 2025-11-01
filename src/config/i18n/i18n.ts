export const i18n = {
	defaultLocale: 'lt',
	locales: ['lt', 'en', 'ru', 'uz', 'oz', 'qr'],
	langDirection: {
		lt: 'ltr',
		en: 'ltr',
		ru: 'ltr',
		uz: 'ltr',
		oz: 'ltr',
		qr: 'ltr',
	},
} as const;

export type Locale = (typeof i18n)['locales'][number];
