import NextHead from "next/head";
export const Head = ({ title, description }) => (
  <NextHead>
    <title>{title}</title>
    <meta name="description" content={description} />
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
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content="" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content="https://iran-locations-api.ir" />
    <meta property="twitter:url" content="https://iran-locations-api.ir/" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content="" />

    <link rel="apple-touch-icon" href="/apple-touch-icon-iphone-60x60.png" />
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
  </NextHead>
);
