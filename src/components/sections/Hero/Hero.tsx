import "./Hero.css";
import Button from "../../ui/Button/Button";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__container">
        <div className="hero__info">
          <div className="hero__ornament" aria-hidden="true">
            <span></span>
            <span className="hero__ornament-diamond">◆</span>
            <span></span>
          </div>

          <h1 className="hero__title">
            <span className="hero__title-accent">
              PRIVATE&nbsp;&nbsp;TRANSFERS
            </span>

            <span className="hero__title-location">BANSKÁ &nbsp;BYSTRICA</span>
          </h1>

          <p className="hero__description">
            Reliable private transfers from Banska Bystrica to Vienna, Budapest,
            Bratislava, Krakow and other destinations across Slovakia & Central
            Europe
          </p>

          <Button href="#transfers">View transfers & prices</Button>
        </div>
        <p className="hero__services">
          <span className="hero__service">
            <span className="hero__service-value">24/7</span>
            <span className="hero__service-label">Availability</span>
          </span>

          <span className="hero__services-divider" aria-hidden="true"></span>

          <span className="hero__service">
            <span className="hero__service-value">DOOR-TO-DOOR</span>
            <span className="hero__service-label">Service</span>
          </span>

          <span className="hero__services-divider" aria-hidden="true"></span>

          <span className="hero__service">
            <span className="hero__service-value">FIXED PRICES</span>
            <span className="hero__service-label">No hidden fees</span>
          </span>
        </p>
      </div>
    </section>
  );
}

export default Hero;
