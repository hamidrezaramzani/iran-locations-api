import { ThemeContext } from "../context/ThemeProvider";
import { CssBaseline, Grid, Typography } from "@mui/material";
import Head from "next/head";
import { useContext, useMemo } from "react";
import Examples from "../components/Examples/Examples";
import Guide from "../components/Guide/Guide";
import Header from "../components/Header/Header";
import Introduction from "../components/Header/Introduction/Introduction";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer/Footer";
import Donates from "../components/Donates/Donates";
export default function Home({ domain, starCount }) {
  const { state } = useContext(ThemeContext);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: state,
        },
      }),
    [state]
  );

  const META_TITLE =
    "وب سرویس شهرها و استان‌های ایران | اطلاعات جامع شهری و استانی";
  const META_DESCRIPTION =
    "وب سرویس شهرها و استان‌های ایران: دسترسی به اطلاعات جامع و به‌روز درباره شهرها و استان‌های ایران. انواع داده ها بر اساس دسته بندی های متفاوت را میتوانید داشته باشید.";
  const META_KEWORDS = "";
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>{META_TITLE}</title>
        <meta name="description" content={META_DESCRIPTION} />
        <meta
          name="keywords"
          content="وب سرویس, شهر, ایران, api, وب سرویس شهر و استان"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="google-site-verification"
          content="c-xDePdvlKty9pfIjRAoZf6vk718iZCl1U3oKqMOfmU"
        />
        <meta name="author" content="Hamidreza Ramzani" />
        <link
          rel="preload"
          href="/fonts/ttf/iranyekanwebmediumfanum.ttf"
          as="font"
          type="font/ttf"
        />

        <link
          rel="preload"
          href="/fonts/ttf/iranyekanwebblackfanum.ttf"
          as="font"
          type="font/ttf"
        />
        <link rel="icon" href="/logo.png" />

        <meta property="og:url" content="https://iran-locations-api.ir/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={META_TITLE} />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta property="og:image" content="" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="https://iran-locations-api.ir"
        />
        <meta property="twitter:url" content="https://iran-locations-api.ir/" />
        <meta name="twitter:title" content={META_TITLE} />
        <meta name="twitter:description" content={META_DESCRIPTION} />
        <meta name="twitter:image" content="" />

        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon-iphone-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-touch-icon-ipad-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-touch-icon-iphone-retina-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-touch-icon-ipad-retina-152x152.png"
        />

        <meta httpEquiv="content-language" content="fa" />
      </Head>
      <Grid
        width="100%"
        display="flex"
        justifyContent="center"
        container
        height="100vh"
        className={state === "light" ? styles.darkWelcome : styles.lightWelcome}
      >
        <Header />
        <Introduction starCount={starCount} domain={domain} />
      </Grid>
      <Examples domain={domain} />
      <Guide domain={domain} />
      <Donates />
      <Footer />
    </ThemeProvider>
  );
}

export async function getServerSideProps({ req }) {
  const domain = req.headers.host;

  const owner = "hamidrezaramzani";
  const repo = "iran-locations-api";
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
  const data = await res.json();

  const starCount = data.stargazers_count || 0;

  return {
    props: {
      starCount,
      domain,
    },
  };
}
