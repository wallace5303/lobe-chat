import { ResolvingViewport } from 'next';
import storage from 'store2';
import { PropsWithChildren } from 'react';

import Analytics from '@/components/Analytics';
import { getServerConfig } from '@/config/server';
import { DEFAULT_LANG, LOBE_LOCALE_COOKIE } from '@/const/locale';
import {
  LOBE_THEME_APPEARANCE,
  LOBE_THEME_NEUTRAL_COLOR,
  LOBE_THEME_PRIMARY_COLOR,
} from '@/const/theme';
import Layout from '@/layout/GlobalLayout';
import { isMobileDevice } from '@/utils/responsive';

import StyleRegistry from './StyleRegistry';

const { ENABLE_OAUTH_SSO } = getServerConfig();

const RootLayout = ({ children }: PropsWithChildren) => {
  // get default theme config to use with ssr
  const appearance = storage.get(LOBE_THEME_APPEARANCE);
  const neutralColor = storage.get(LOBE_THEME_NEUTRAL_COLOR);
  const primaryColor = storage.get(LOBE_THEME_PRIMARY_COLOR);
  const lang = storage.get(LOBE_LOCALE_COOKIE);

  const direction = 'ltr';

  return (
    <html dir={direction} lang={lang?.value || DEFAULT_LANG} suppressHydrationWarning={true}>
      <body>
        <StyleRegistry>
          <Layout
            defaultAppearance={appearance?.value}
            defaultLang={lang?.value}
            defaultNeutralColor={neutralColor?.value as any}
            defaultPrimaryColor={primaryColor?.value as any}
            enableOAuthSSO={ENABLE_OAUTH_SSO}
          >
            {children}
          </Layout>
        </StyleRegistry>
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;

export { default as metadata } from './metadata';

export const generateViewport = async (): ResolvingViewport => {
  const isMobile = isMobileDevice();

  const dynamicScale = isMobile ? { maximumScale: 1, userScalable: false } : {};

  return {
    ...dynamicScale,
    initialScale: 1,
    minimumScale: 1,
    themeColor: [
      { color: '#f8f8f8', media: '(prefers-color-scheme: light)' },
      { color: '#000', media: '(prefers-color-scheme: dark)' },
    ],
    viewportFit: 'cover',
    width: 'device-width',
  };
};
