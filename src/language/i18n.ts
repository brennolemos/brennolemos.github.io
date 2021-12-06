import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translations: {
        "To get started, edit <1>src/App.js</1> and save to reload.":
          "To get started, edit <1>src/App.js</1> and save to reload.",
        "Welcome to React": "Welcome to React and react-i18next",
        welcome: "Hello <br/> <strong>World</strong>",
      },
    },
    ptBR: {
      translations: {
        "To get started, edit <1>src/App.js</1> and save to reload.":
          "Starte in dem du, <1>src/App.js</1> editierst und speicherst.",
        "Welcome to React": "Bem-vindo ao React e react-i18next",
      },
    },
  },
  lng: "en", // if you're using a language detector, do not define the lng option
  fallbackLng: "en",
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
});
