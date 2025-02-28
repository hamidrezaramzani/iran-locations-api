import { Analytics } from '@vercel/analytics/next';
import { appWithTranslation } from 'next-i18next';

import ThemeProvider from '../context/ThemeProvider';
import i18nextConfig from '../next-i18next.config';
import '../styles/globals.css';
import '@uiw/react-markdown-preview/markdown.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp, i18nextConfig);
