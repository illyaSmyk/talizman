import "./Prices.css";
import PriceCard from "../../components/ui/PriceCard/PriceCard";
import { priceRoutes } from "./data/priceRoutes";
import { useTranslation } from "react-i18next";

function Prices() {
  const { t } = useTranslation();

  return (
    <section className="prices">
      <div className="container">
        <div className="prices__intro">
          <p className="prices__label section-label">{t("prices.label")}</p>

          <h1 className="prices__title section-title">{t("prices.title")}</h1>

          <p className="prices__description">{t("prices.description")}</p>
        </div>

        <div className="prices__grid">
          {priceRoutes.map((route) => (
            <PriceCard
              key={route.id}
              id={route.id}
              from={t("prices.routes.from")}
              to={t(`prices.routes.${route.id}`)}
              price={route.price}
              image={route.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Prices;
