import talizmanLogo from "../../../assets/icons/3.svg";
import "./Brand.css";

type BrandProps = {
  href?: string;
};

function Brand({ href = "/" }: BrandProps) {
  return (
    <a className="brand" href={href} aria-label="TALIZMAN home">
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
