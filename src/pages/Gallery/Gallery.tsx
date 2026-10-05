import Button from "../../components/ui/Button/Button";
import { galleryImages } from "./data/galleryImages";
import { useTranslation } from "react-i18next";
import "./Gallery.css";
import { localizedPath } from "../../components/i18n/localizedPath";
import SEO from "../../components/layout/SEO/SEO";

function Gallery() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <SEO
        title={t("seo.gallery.title")}
        description={t("seo.gallery.description")}
      />

      <section className="gallery" id="gallery">
        <div className="container">
          <div className="gallery__content">
            <div className="gallery__info">
              <p className="gallery__info-description section-label">
                {t("gallery.label")}
              </p>

              <h1 className="gallery__title section-title">
                {t("gallery.title")}
              </h1>

              <p className="gallery__description">{t("gallery.description")}</p>
            </div>

            <div className="gallery__photos">
              {galleryImages.map((image) => (
                <img
                  key={image.src}
                  className="gallery__photo"
                  src={image.src}
                  alt={t(`gallery.images.${image.altKey}`)}
                />
              ))}
            </div>

            <p className="gallery__question">{t("gallery.question")}</p>

            <Button href={localizedPath("/contact#booking", i18n.language)}>
              {t("gallery.bookTransfer")}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
