const introduction = require("./public/locales/fa/introduction.json");
const queryBuilder = require("./public/locales/fa/query-builder.json");
const header = require("./public/locales/fa/header.json");
const footer = require("./public/locales/fa/footer.json");

/**
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
  resources: {
    fa: {
      introduction,
      queryBuilder,
      header,
      footer,
    },
  },
  // https://www.i18next.com/overview/configuration-options#logging
  debug: process.env.NODE_ENV === "development",
  i18n: {
    defaultLocale: "fa",
    locales: ["fa"],
  },
  /** To avoid issues when deploying to some paas (vercel...) */
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "/locales",

  reloadOnPrerender: process.env.NODE_ENV === "development",

  /**
   * @link https://github.com/i18next/next-i18next#6-advanced-configuration
   */
  // saveMissing: false,
  // strictMode: true,
  // serializeConfig: false,
  // react: { useSuspense: false }
};
