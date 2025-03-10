const facilities = require('./public/locales/fa/facilities.json');
const faq = require('./public/locales/fa/faq.json');
const footer = require('./public/locales/fa/footer.json');
const header = require('./public/locales/fa/header.json');
const introduction = require('./public/locales/fa/introduction.json');
const common = require('./public/locales/fa/common.json');
module.exports = {
  resources: {
    fa: {
      introduction,
      faq,
      facilities,
      header,
      footer,
      common,
    },
  },
  debug: process.env.NODE_ENV === 'development',
  i18n: {
    defaultLocale: 'fa',
    locales: ['fa'],
  },
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/locales',

  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
