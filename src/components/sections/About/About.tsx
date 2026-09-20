import "./About.css";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__info">
          <div className="about__info-box">
            <p className="about__info-description section-label">
              {t("about.label")}
            </p>

            <h2 className="about__title">
              <span>{t("about.titleJourney")}</span>
              <span>{t("about.titleComfort")}</span>
            </h2>
          </div>

          <div className="about__description">
            <p className="about__description-services">
              {t("about.descriptionFirst")}
            </p>

            <p className="about__description-services">
              {t("about.descriptionSecond")}
            </p>

            <div className="about__description-signature">
              <p className="about__description-sign">Talizman</p>

              <p className="about__description-sign-text">{t("about.label")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
