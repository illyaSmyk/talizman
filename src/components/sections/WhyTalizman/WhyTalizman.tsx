import "./WhyTalizman.css";
import { useTranslation } from "react-i18next";

function WhyTalizman() {
  const { t } = useTranslation();

  return (
    <section className="whytalizman" id="whytalizman">
      <div className="container">
        <div className="whytalizman__info">
          <div className="whytalizman__info-box">
            <p className="whytalizman__info-description section-label">
              {t("whyTalizman.label")}
            </p>

            <h2 className="whytalizman__title section-title">
              <span>{t("whyTalizman.titleFirst")}</span>
              <span>{t("whyTalizman.titleSecond")}</span>
            </h2>

            <div className="whytalizman__ornament" aria-hidden="true">
              <span></span>

              <span className="whytalizman__ornament-symbol">◇</span>

              <span></span>
            </div>
          </div>

          <div className="whytalizman__description">
            <div className="whytalizman__item">
              <span className="whytalizman__number">01</span>

              <div className="whytalizman__item-content">
                <h3 className="whytalizman__description-title">
                  {t("whyTalizman.driver.title")}
                </h3>

                <p className="whytalizman__description-services">
                  {t("whyTalizman.driver.description")}
                </p>
              </div>
            </div>

            <div className="whytalizman__item">
              <span className="whytalizman__number">02</span>

              <div className="whytalizman__item-content">
                <h3 className="whytalizman__description-title">
                  {t("whyTalizman.comfort.title")}
                </h3>

                <p className="whytalizman__description-services">
                  {t("whyTalizman.comfort.description")}
                </p>
              </div>
            </div>

            <div className="whytalizman__item">
              <span className="whytalizman__number">03</span>

              <div className="whytalizman__item-content">
                <h3 className="whytalizman__description-title">
                  {t("whyTalizman.punctuality.title")}
                </h3>

                <p className="whytalizman__description-services">
                  {t("whyTalizman.punctuality.description")}
                </p>
              </div>
            </div>

            <div className="whytalizman__item">
              <span className="whytalizman__number">04</span>

              <div className="whytalizman__item-content">
                <h3 className="whytalizman__description-title">
                  {t("whyTalizman.safety.title")}
                </h3>

                <p className="whytalizman__description-services">
                  {t("whyTalizman.safety.description")}
                </p>
              </div>
            </div>

            <div className="whytalizman__item">
              <span className="whytalizman__number">05</span>

              <div className="whytalizman__item-content">
                <h3 className="whytalizman__description-title">
                  {t("whyTalizman.personalService.title")}
                </h3>

                <p className="whytalizman__description-services">
                  {t("whyTalizman.personalService.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyTalizman;
