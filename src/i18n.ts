import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import sk from "./locales/sk/common.json";
import en from "./locales/en/common.json";
import ru from "./locales/ru/common.json";
import uk from "./locales/uk/common.json";

i18next.use(initReactI18next).init({
    resources: {
      sk: { translation: sk },
      en: { translation: en },
      ru: { translation: ru },
      uk: { translation: uk },
    },

    lng: "sk",
    fallbackLng: "sk",

    interpolation: {
    escapeValue: false,
  },
})