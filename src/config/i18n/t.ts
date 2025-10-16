import type { Locale } from './i18n';

interface TranslationDictionary { [key: string]: string }

import en from '@/translation/en.json';
import uz from '@/translation/uz.json';
import ru from '@/translation/ru.json';
import oz from '@/translation/oz.json';
import qr from '@/translation/qr.json';

const maps: Record<string, TranslationDictionary> = { en, uz, ru, oz, qr };

function select(lang: Locale): TranslationDictionary {
  return maps[lang] || uz;
}

export const getTranslation = (lang: Locale) => {
  const dict = select(lang);
  const t = (key: string) => dict[key] ?? key;
  return { t };
};

export const useTranslations = (lang: Locale) => {
  const dict = select(lang);
  const t = (key: string) => dict[key] ?? key;
  return { t };
};
