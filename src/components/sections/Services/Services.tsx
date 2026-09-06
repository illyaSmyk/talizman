import "./Services.css";
import airportImage from "../../../assets/images/airport_tr.png";
import slovakiaImg from "../../../assets/images/slovakia_tr.png";
import europeanImg from "../../../assets/images/europe_tr.png";

function Services() {
  return (
    <section className="services" id="services">
      <div className="services__container">
        <div className="services__heading">
          <p className="services__eyebrow">Our services</p>

          <h2 className="services__title">Travel where you need to be.</h2>
        </div>

        <div className="services__list">
          <article className="services__item">
            <div className="services__image">
              <img src={airportImage} alt="Airport transfer" />
            </div>

            <div className="services__content">
              <span className="services__number">01</span>

              <h3 className="services__item-title">Airport Transfers</h3>

              <p className="services__text">
                Private transfers to major airports across Central Europe.
              </p>

              <p className="services__price">From €130</p>

              <a className="services__link" href="#prices">
                View prices
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>

          <article className="services__item">
            <div className="services__image">
              <img src={slovakiaImg} alt="Transfer across Slovakia" />
            </div>

            <div className="services__content">
              <span className="services__number">02</span>

              <h3 className="services__item-title">Slovakia Transfers</h3>

              <p className="services__text">
                Comfortable private transfers to destinations across Slovakia.
              </p>

              <p className="services__price">From €60</p>

              <a className="services__link" href="#prices">
                View prices
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>

          <article className="services__item">
            <div className="services__image">
              <img src={europeanImg} alt="European transfer" />
            </div>

            <div className="services__content">
              <span className="services__number">03</span>

              <h3 className="services__item-title">European Transfers</h3>

              <p className="services__text">
                Private long-distance transfers across Central Europe.
              </p>

              <p className="services__price">From €95</p>

              <a className="services__link" href="#prices">
                View prices
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Services;
