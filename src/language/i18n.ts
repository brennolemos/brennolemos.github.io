import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ptBR from "./pt-br.json";
import en from "./en.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translations: en,
    },
    ptBR: {
      translations: ptBR,
    },
  },
  lng: "en", // if you're using a language detector, do not define the lng option
  fallbackLng: "en",
  ns: ["translations"],
  defaultNS: "translations",

  //   keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
});
