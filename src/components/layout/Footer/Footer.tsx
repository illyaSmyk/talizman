import "./Footer.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "../../../assets/icons/3.svg";
import { localizedPath } from "../../i18n/localizedPath";

function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__brand-heading">
              <div className="footer__logo" aria-hidden="true">
                <img src={Logo} alt="" />
              </div>

              <div className="footer__brand-text">
                <span className="footer__brand-name">TALIZMAN</span>
                <span className="footer__brand-tagline">
                  {t("footer.tagline")}
                </span>
              </div>
            </div>

            <p className="footer__description">{t("footer.description")}</p>
          </div>

          <Link
            className="footer__contact-link"
            to={localizedPath("/contact", i18n.language)}
          >
            {t("footer.contact")} →
          </Link>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2026 TALIZMAN. {t("footer.copyright")}
          </p>

          <Link
            className="footer__privacy-link"
            to={localizedPath("/privacy", i18n.language)}
          >
            {t("footer.privacy")}
          </Link>

          <div className="footer__business">
            <p className="footer__business-label">
              {t("footer.businessAddress")}
            </p>

            <address className="footer__business-address">
              Horná 92/37, 974 01 Banská Bystrica
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
