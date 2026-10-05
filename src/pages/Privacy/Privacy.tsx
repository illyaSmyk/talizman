import "./Privacy.css";
import { useTranslation } from "react-i18next";
import SEO from "../../components/layout/SEO/SEO";

function Privacy() {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t("seo.privacy.title")}
        description={t("seo.privacy.description")}
      />

      <section className="privacy">
        <div className="container">
          <div className="privacy__content">
            <p className="privacy__label">{t("privacy.label")}</p>

            <h1 className="privacy__title">{t("privacy.title")}</h1>

            <p className="privacy__updated">{t("privacy.lastUpdated")}</p>

            <section className="privacy__section">
              <h2>{t("privacy.sections.whoWeAre.title")}</h2>

              <p>{t("privacy.sections.whoWeAre.description")}</p>

              <address>
                Illia Smyk
                <br />
                {t("privacy.sections.whoWeAre.soleTrader")}
                <br />
                IČO: 57 855 005
                <br />
                Horná 92/37
                <br />
                974 01 Banská Bystrica
                <br />
                {t("privacy.sections.whoWeAre.country")}
              </address>

              <p>
                {t("privacy.sections.whoWeAre.email")}:{" "}
                <a href="mailto:illiasmyksk@gmail.com">illiasmyksk@gmail.com</a>
              </p>
            </section>

            <section className="privacy__section">
              <h2>{t("privacy.sections.dataCollected.title")}</h2>

              <p>{t("privacy.sections.dataCollected.intro")}</p>

              <ul>
                <li>{t("privacy.sections.dataCollected.name")}</li>
                <li>{t("privacy.sections.dataCollected.phone")}</li>
                <li>{t("privacy.sections.dataCollected.departure")}</li>
                <li>{t("privacy.sections.dataCollected.destination")}</li>
                <li>{t("privacy.sections.dataCollected.dateTime")}</li>
                <li>{t("privacy.sections.dataCollected.passengers")}</li>
                <li>{t("privacy.sections.dataCollected.additionalInfo")}</li>
              </ul>

              <p>{t("privacy.sections.dataCollected.sensitiveInfo")}</p>
            </section>

            <section className="privacy__section">
              <h2>{t("privacy.sections.purpose.title")}</h2>

              <p>{t("privacy.sections.purpose.intro")}</p>

              <ul>
                <li>{t("privacy.sections.purpose.respond")}</li>
                <li>{t("privacy.sections.purpose.communicate")}</li>
                <li>{t("privacy.sections.purpose.arrange")}</li>
                <li>{t("privacy.sections.purpose.provideService")}</li>
              </ul>

              <p>{t("privacy.sections.purpose.legalBasis")}</p>
            </section>

            <section className="privacy__section">
              <h2>{t("privacy.sections.bookingProcessing.title")}</h2>

              <p>{t("privacy.sections.bookingProcessing.description")}</p>

              <p>{t("privacy.sections.bookingProcessing.provider")}</p>
            </section>

            <section className="privacy__section">
              <h2>{t("privacy.sections.retention.title")}</h2>

              <p>{t("privacy.sections.retention.bookingEmails")}</p>

              <p>{t("privacy.sections.retention.web3forms")}</p>

              <p>{t("privacy.sections.retention.legalObligations")}</p>
            </section>

            <section className="privacy__section">
              <h2>{t("privacy.sections.sharing.title")}</h2>

              <p>{t("privacy.sections.sharing.noSale")}</p>

              <p>{t("privacy.sections.sharing.providers")}</p>

              <p>{t("privacy.sections.sharing.law")}</p>
            </section>

            <section className="privacy__section">
              <h2>{t("privacy.sections.rights.title")}</h2>

              <p>{t("privacy.sections.rights.intro")}</p>

              <ul>
                <li>{t("privacy.sections.rights.access")}</li>
                <li>{t("privacy.sections.rights.correction")}</li>
                <li>{t("privacy.sections.rights.deletion")}</li>
                <li>{t("privacy.sections.rights.restriction")}</li>
                <li>{t("privacy.sections.rights.portability")}</li>
                <li>{t("privacy.sections.rights.object")}</li>
              </ul>

              <p>{t("privacy.sections.rights.complaint")}</p>

              <p>
                {t("privacy.sections.rights.contact")}{" "}
                <a href="mailto:illiasmyksk@gmail.com">illiasmyksk@gmail.com</a>
                .
              </p>
            </section>

            <section className="privacy__section">
              <h2>{t("privacy.sections.cookies.title")}</h2>

              <p>{t("privacy.sections.cookies.current")}</p>

              <p>{t("privacy.sections.cookies.future")}</p>
            </section>

            <section className="privacy__section">
              <h2>{t("privacy.sections.changes.title")}</h2>

              <p>{t("privacy.sections.changes.description")}</p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default Privacy;
