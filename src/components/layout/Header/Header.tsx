import "./Header.css";
import menuIcon from "../../../assets/icons/burger-menu.svg";
import phoneIcon from "../../../assets/icons/phone-call.svg";
import MobileMenu from "./MobileMenu";
import { useEffect, useRef, useState } from "react";
import Brand from "../../ui/Brand/Brand";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { localizedPath } from "../../i18n/localizedPath";

type Language = "sk" | "en" | "ru" | "uk";

const languages: { code: Language; label: string }[] = [
  { code: "sk", label: "SK" },
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
  { code: "uk", label: "UA" },
];

function Header() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const languageRef = useRef<HTMLDivElement>(null);

  const firstSegment = pathname.split("/")[1];

  const currentLanguage: Language = ["en", "ru", "uk"].includes(firstSegment)
    ? (firstSegment as Language)
    : "sk";

  const currentLanguageLabel =
    languages.find((language) => language.code === currentLanguage)?.label ??
    "SK";

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

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isLanguageOpen) return;

    const handleScroll = () => {
      setIsLanguageOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageRef.current &&
        !languageRef.current.contains(event.target as Node)
      ) {
        setIsLanguageOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLanguageOpen]);

  return (
    <header className="header">
      <div className="container header__inner">
        <Brand />

        <nav className="header__nav" aria-label={t("header.mainNavigation")}>
          <NavLink
            end
            className={({ isActive }) =>
              `header__nav-link${isActive ? " header__nav-link--active" : ""}`
            }
            to={localizedPath("/", currentLanguage)}
          >
            {t("navigation.home")}
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `header__nav-link${isActive ? " header__nav-link--active" : ""}`
            }
            to={localizedPath("/prices", currentLanguage)}
          >
            {t("navigation.prices")}
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `header__nav-link${isActive ? " header__nav-link--active" : ""}`
            }
            to={localizedPath("/gallery", currentLanguage)}
          >
            {t("navigation.gallery")}
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `header__nav-link${isActive ? " header__nav-link--active" : ""}`
            }
            to={localizedPath("/contact", currentLanguage)}
          >
            {t("navigation.contact")}
          </NavLink>
        </nav>

        <div className="header__actions">
          <div className="header__languages" ref={languageRef}>
            <button
              className="header__language-trigger"
              type="button"
              aria-label={t("header.chooseLanguage")}
              aria-expanded={isLanguageOpen}
              onClick={() => setIsLanguageOpen((current) => !current)}
            >
              {currentLanguageLabel}
              <span className="header__language-arrow" aria-hidden="true" />
            </button>

            {isLanguageOpen && (
              <div className="header__language-dropdown">
                {languages
                  .filter((language) => language.code !== currentLanguage)
                  .map((language) => (
                    <button
                      key={language.code}
                      type="button"
                      onClick={() => {
                        changeLanguage(language.code);
                        setIsLanguageOpen(false);
                      }}
                    >
                      {language.label}
                    </button>
                  ))}
              </div>
            )}
          </div>

          <a
            className="header__phone"
            href="tel:+421XXXXXXXXX"
            aria-label="Call +421 XXX XXX XXX"
          >
            <img
              className="header__phone-icon"
              src={phoneIcon}
              alt=""
              aria-hidden="true"
            />

            <span className="header__phone-number">+421 XXX XXX XXX</span>
          </a>

          <button
            className="header__menu"
            type="button"
            aria-label={t("header.openMenu")}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <img src={menuIcon} alt="" />
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}

export default Header;
