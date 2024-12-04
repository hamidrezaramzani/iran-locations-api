import { appWithTranslation } from "next-i18next";
import i18nextConfig from "../next-i18next.config";
import ThemeProvider from "../context/ThemeProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp, i18nextConfig);
