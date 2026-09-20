import "./Hero.css";
import Button from "../../ui/Button/Button";
import { useTranslation } from "react-i18next";
import { localizedPath } from "../../i18n/localizedPath";

function Hero() {
  const { t, i18n } = useTranslation();

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero__info">
          <div className="hero__ornament" aria-hidden="true">
            <span></span>
            <span className="hero__ornament-diamond">◆</span>
            <span></span>
          </div>

          <h1 className="hero__title">
            <span className="hero__title-accent">{t("hero.title")}</span>

            <span className="hero__title-location">BANSKÁ BYSTRICA</span>
          </h1>

          <p className="hero__description">{t("hero.description")}</p>

          <Button href={localizedPath("/prices", i18n.language)}>
            {t("hero.button")}
          </Button>
        </div>

        <div className="hero__services">
          <div className="hero__service">
            <span className="hero__service-value">24/7</span>
            <span className="hero__service-label">
              {t("hero.availability")}
            </span>
          </div>

          <span className="hero__services-divider" aria-hidden="true" />

          <div className="hero__service">
            <span className="hero__service-value">{t("hero.doorToDoor")}</span>
            <span className="hero__service-label">{t("hero.service")}</span>
          </div>

          <span className="hero__services-divider" aria-hidden="true" />

          <div className="hero__service">
            <span className="hero__service-value">{t("hero.fixedPrices")}</span>
            <span className="hero__service-label">
              {t("hero.noHiddenFees")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
