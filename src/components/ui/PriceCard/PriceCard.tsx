import "./PriceCard.css";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";
import { localizedPath } from "../../i18n/localizedPath";

type PriceCardProps = {
  from?: string;
  to: string;
  price: number;
  image: string;
  id: string;
};

function PriceCard({ id, from, to, price, image }: PriceCardProps) {
  const { t, i18n } = useTranslation();

  const bookingUrl =
    id === "individual"
      ? localizedPath("/contact#booking", i18n.language)
      : localizedPath(
          `/contact?from=${encodeURIComponent(
            from ?? "",
          )}&to=${encodeURIComponent(to)}#booking`,
          i18n.language,
        );

  return (
    <article className="price-card">
      <div className="price-card__visual">
        <img
          className="price-card__image"
          src={image}
          alt={t("prices.card.imageAlt", { destination: to })}
        />

        <div className="price-card__content">
          <h3 className="price-card__title">{to}</h3>

          <div className="price-card__route">
            <span>{from}</span>
            <span className="price-card__arrow" aria-hidden="true">
              →
            </span>
            <span>{to}</span>
          </div>
        </div>
      </div>

      <div className="price-card__price">
        <strong>€{price}</strong>
        <span>{t("prices.card.priceFrom")}</span>
      </div>

      <Button href={bookingUrl}>{t("prices.card.requestTransfer")}</Button>
    </article>
  );
}

export default PriceCard;
