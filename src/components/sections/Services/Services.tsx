import "./Services.css";
import airportImage from "../../../assets/images/services/airport_tr.jpg";
import slovakiaImg from "../../../assets/images/services/slovakia_tr.jpg";
import europeanImg from "../../../assets/images/services/europe_tr.jpg";
import { useTranslation } from "react-i18next";
import { localizedPath } from "../../i18n/localizedPath";

function Services() {
  const { t, i18n } = useTranslation();

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__heading">
          <p className="services__eyebrow section-label">
            {t("services.label")}
          </p>

          <h2 className="services__title section-title">
            {t("services.title")}
          </h2>
        </div>

        <div className="services__list">
          <article className="services__item">
            <div className="services__image">
              <img src={airportImage} alt={t("services.airport.imageAlt")} />
            </div>

            <div className="services__content">
              <span className="services__number">01</span>

              <h3 className="services__item-title">
                {t("services.airport.title")}
              </h3>

              <p className="services__text">
                {t("services.airport.description")}
              </p>

              <p className="services__price">{t("services.from")} €159</p>

              <a
                className="services__link"
                href={localizedPath("/prices", i18n.language)}
              >
                {t("services.viewPrices")}
                <span className="services__link-arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </article>

          <article className="services__item">
            <div className="services__image">
              <img src={slovakiaImg} alt={t("services.slovakia.imageAlt")} />
            </div>

            <div className="services__content">
              <span className="services__number">02</span>

              <h3 className="services__item-title">
                {t("services.slovakia.title")}
              </h3>

              <p className="services__text">
                {t("services.slovakia.description")}
              </p>

              <p className="services__price">{t("services.from")} €50</p>

              <a
                className="services__link"
                href={localizedPath("/prices", i18n.language)}
              >
                {t("services.viewPrices")}
                <span className="services__link-arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </article>

          <article className="services__item">
            <div className="services__image">
              <img src={europeanImg} alt={t("services.europe.imageAlt")} />
            </div>

            <div className="services__content">
              <span className="services__number">03</span>

              <h3 className="services__item-title">
                {t("services.europe.title")}
              </h3>

              <p className="services__text">
                {t("services.europe.description")}
              </p>

              <p className="services__price">{t("services.from")} €169</p>

              <a
                className="services__link"
                href={localizedPath("/prices", i18n.language)}
              >
                {t("services.viewPrices")}
                <span className="services__link-arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Services;
