import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { appWithTranslation } from 'next-i18next';

import i18nextConfig from '../next-i18next.config';
import { ColorModeProvider, ThemeProvider } from '../providers';


import '../styles/globals.css';
import '@uiw/react-markdown-preview/markdown.css';

function MyApp({ Component, pageProps }) {
  return (
    <ColorModeProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
      <Analytics />
      <SpeedInsights />
    </ColorModeProvider>
  );
}

export default appWithTranslation(MyApp, i18nextConfig);
