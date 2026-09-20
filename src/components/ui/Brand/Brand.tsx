import talizmanLogo from "../../../assets/icons/3.svg";
import "./Brand.css";
import { localizedPath } from "../../i18n/localizedPath";
import { useTranslation } from "react-i18next";

type BrandProps = {
  href?: string;
};

function Brand({ href }: BrandProps) {
  const { i18n } = useTranslation();

  const brandHref = href ?? localizedPath("/", i18n.language);

  return (
    <a className="brand" href={brandHref} aria-label="TALIZMAN home">
      <div className="brand__logo" aria-hidden="true">
        <img src={talizmanLogo} alt="" />
      </div>

      <div className="brand__text">
        <span className="brand__name">TALIZMAN</span>
        <span className="brand__tagline">Transfer Service</span>
      </div>
    </a>
  );
}

export default Brand;
