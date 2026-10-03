import fr from "./translations/fr.json"
import en from "./translations/en.json"

export const languages = {
  fr: 'Français',
  en: 'English',
} as const;

export const staticPath = [
    { params: { lang: 'fr' } },
    { params: { lang: 'en' } },
  ]

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'fr';

export const ui = {
  fr: fr,
  en: en,
} as const;

export function useTranslations(lang: Lang) {
  return function t(
    key: keyof typeof ui[typeof defaultLang],
    params?: Record<string, string | number>
  ): string {
    let text: string = ui[lang]?.[key] ?? ui[defaultLang][key];

    if (params) {
      Object.entries(params).forEach(([paramKey, value]) => {
        text = text.replace(`{${paramKey}}`, String(value));
      });
    }

    return text;
  };
}

export function getLocalizedPath(path: string, lang: Lang) {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return path;
  return `${lang}${cleanPath}`;
}