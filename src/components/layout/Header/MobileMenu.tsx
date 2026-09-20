import closeMenu from "../../../assets/icons/close-icon.svg";
import whatsappIcon from "../../../assets/icons/whatsapp-icon.svg";
import Button from "../../ui/Button/Button";
import Brand from "../../ui/Brand/Brand";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { localizedPath } from "../../i18n/localizedPath";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

type Language = "sk" | "en" | "ru" | "uk";

const languages: { code: Language; label: string }[] = [
  { code: "sk", label: "SK" },
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
  { code: "uk", label: "UA" },
];

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const firstSegment = pathname.split("/")[1];

  const currentLanguage: Language = ["en", "ru", "uk"].includes(firstSegment)
    ? (firstSegment as Language)
    : "sk";

  const changeLanguage = (language: Language) => {
    const segments = pathname.split("/").filter(Boolean);

    if (["en", "ru", "uk"].includes(segments[0])) {
      segments.shift();
    }

    const pagePath = segments.length ? `/${segments.join("/")}` : "";

    const newPath =
      language === "sk" ? pagePath || "/" : `/${language}${pagePath}`;

    navigate(newPath);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="mobile-menu">
      <div className="mobile-menu__top">
        <Brand />

        <button
          className="mobile-menu__close"
          type="button"
          aria-label={t("mobileMenu.closeMenu")}
          onClick={onClose}
        >
          <img src={closeMenu} alt="" aria-hidden="true" />
        </button>
      </div>

      <nav className="mobile-menu__nav" aria-label={t("mobileMenu.navigation")}>
        <NavLink
          end
          className="mobile-menu__nav-link"
          to={localizedPath("/", currentLanguage)}
          onClick={onClose}
        >
          {t("navigation.home")}
        </NavLink>

        <NavLink
          className="mobile-menu__nav-link"
          to={localizedPath("/prices", currentLanguage)}
          onClick={onClose}
        >
          {t("navigation.prices")}
        </NavLink>

        <NavLink
          className="mobile-menu__nav-link"
          to={localizedPath("/gallery", currentLanguage)}
          onClick={onClose}
        >
          {t("navigation.gallery")}
        </NavLink>

        <NavLink
          className="mobile-menu__nav-link"
          to={localizedPath("/contact", currentLanguage)}
          onClick={onClose}
        >
          {t("navigation.contact")}
        </NavLink>
      </nav>

      <div className="mobile-menu__bottom">
        <div
          className="mobile-menu__languages"
          aria-label={t("header.chooseLanguage")}
        >
          {languages.map((language) => (
            <button
              key={language.code}
              className="mobile-menu__language"
              type="button"
              disabled={language.code === currentLanguage}
              onClick={() => changeLanguage(language.code)}
            >
              {language.label}
            </button>
          ))}
        </div>

        <div className="mobile-menu__contact-actions">
          <a className="mobile-menu__contact-action" href="tel:+421...">
            {t("mobileMenu.callUs")} →
          </a>

          <a
            className="mobile-menu__contact-action"
            href="https://wa.me/421..."
          >
            <img
              className="mobile-menu__contact-icon"
              src={whatsappIcon}
              alt=""
              aria-hidden="true"
            />
            WhatsApp
          </a>
        </div>

        <Button
          href={localizedPath("/contact#booking", currentLanguage)}
          onClick={onClose}
        >
          {t("mobileMenu.reservation")}
        </Button>
      </div>
    </div>
  );
}

export default MobileMenu;
