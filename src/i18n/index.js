import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-xhr-backend";

const options = {
  // order and from where user language should be detected
  order: ['querystring', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],

  // keys or params to lookup language from
  lookupQuerystring: 'lng',
  lookupLocalStorage: 'i18nextLng',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  // cache user language on
  caches: ['localStorage'],

  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement
}

i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    debug: true,
    detection: options,
    react: {
      wait: true
    }
  });

export default i18n;
