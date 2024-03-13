import resources from './default';

export const locales = ['en-US', 'zh-CN', 'zh-TW'] as const;

export type DefaultResources = typeof resources;
export type Locales = (typeof locales)[number];

export const normalizeLocale = (locale?: string) => {
  if (!locale) return 'en-US';

  switch (locale) {
    case 'zh-CN':
    case 'zh': {
      return 'zh-CN';
    }

    case 'en': {
      return 'en-US';
    }

    default: {
      return locale;
    }
  }
};

type LocaleOptions = {
  label: string;
  value: Locales;
}[];

export const localeOptions: LocaleOptions = [
  {
    label: 'English',
    value: 'en-US',
  },
  {
    label: '简体中文',
    value: 'zh-CN',
  },
  {
    label: '繁體中文',
    value: 'zh-TW',
  },
] as LocaleOptions;

export const supportLocales: string[] = [...locales, 'en', 'zh'];
