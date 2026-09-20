import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const supportedLanguages = ["en", "ru", "uk"];

function LanguageSync() {
  const { i18n } = useTranslation();
  const { pathname } = useLocation();

  useEffect(() => {
    const firstSegment = pathname.split("/")[1];

    const language = supportedLanguages.includes(firstSegment)
      ? firstSegment
      : "sk";

    if (i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  }, [pathname, i18n]);

  return null;
}

export default LanguageSync;
