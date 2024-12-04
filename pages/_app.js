import { appWithTranslation } from 'next-i18next';

import ThemeProvider from '../context/ThemeProvider';
import i18nextConfig from '../next-i18next.config';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp, i18nextConfig);
