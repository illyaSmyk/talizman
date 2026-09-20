import "./Experience.css";
import Button from "../../ui/Button/Button";
import { useTranslation } from "react-i18next";

import GirlToCar from "../../../assets/images/exit_section_service.png";
import Logo from "../../../assets/icons/3.svg";
import { localizedPath } from "../../i18n/localizedPath";

function Experience() {
  const { t, i18n } = useTranslation();

  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="experience__info">
          <div className="experience__info-box">
            <p className="experience__info-description section-label">
              {t("experience.label")}
            </p>

            <h2 className="experience__title section-title">
              {t("experience.title")}
            </h2>

            <p className="experience__description-services">
              {t("experience.description")}
            </p>
          </div>
        </div>

        <div className="experience__visual">
          <div className="experience__image-main">
            <img src={GirlToCar} alt={t("experience.imageAlt")} />
          </div>

          <div className="experience__visual-text">
            <div className="experience__end">
              <h3 className="experience__end-title">
                {t("experience.end.title")}
              </h3>

              <p className="experience__end-description">
                {t("experience.end.description")}
              </p>
            </div>

            <div className="experience__brand">
              <div className="experience__brand-heading">
                <div className="experience__brand-logo" aria-hidden="true">
                  <img src={Logo} alt="" />
                </div>

                <div className="experience__brand-name-box">
                  <span className="experience__brand-name">TALIZMAN</span>
                  <span className="experience__brand-tagline">
                    {t("experience.brand.tagline")}
                  </span>
                </div>
              </div>

              <div className="experience__brand-message">
                <p className="experience__brand-message-text">
                  {t("experience.brand.descriptionFirst")}
                </p>

                <p className="experience__brand-message-text">
                  {t("experience.brand.descriptionSecond")}
                </p>
              </div>

              <Button href={localizedPath("/gallery", i18n.language)}>
                {t("experience.viewGallery")}
              </Button>

              <Button href={localizedPath("/contact#booking", i18n.language)}>
                {t("experience.bookTransfer")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
