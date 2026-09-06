import "./WhyTalizman.css";

function WhyTalizman() {
  return (
    <section className="whytalizman" id="whytalizman">
      <div className="whytalizman__container">
        <div className="whytalizman__info">
          <div className="whytalizman__info-box">
            <p className="whytalizman__info-description">WHY TALIZMAN</p>

            <h2 className="whytalizman__title">
              <span>Every journey,</span>
              <span>handled with care.</span>
            </h2>

            <div className="whytalizman__ornament" aria-hidden="true">
              <span></span>

              <span className="whytalizman__ornament-symbol">◇</span>

              <span></span>
            </div>
          </div>

          <div className="whytalizman__description">
            <div className="whytalizman__item">
              <span className="whytalizman__number">01</span>

              <div className="whytalizman__item-content">
                <h3 className="whytalizman__description-title">
                  Professional Driver
                </h3>

                <p className="whytalizman__description-services">
                  Professional, courteous and attentive service throughout your
                  journey.
                </p>
              </div>
            </div>

            <div className="whytalizman__item">
              <span className="whytalizman__number">02</span>

              <div className="whytalizman__item-content">
                <h3 className="whytalizman__description-title">Comfort</h3>

                <p className="whytalizman__description-services">
                  A clean and comfortable vehicle prepared for every journey,
                  whether it’s an airport transfer or a long-distance trip.
                </p>
              </div>
            </div>

            <div className="whytalizman__item">
              <span className="whytalizman__number">03</span>

              <div className="whytalizman__item-content">
                <h3 className="whytalizman__description-title">Punctuality</h3>

                <p className="whytalizman__description-services">
                  Reliable pick-up at the agreed time, with every journey
                  planned in advance.
                </p>
              </div>
            </div>

            <div className="whytalizman__item">
              <span className="whytalizman__number">04</span>

              <div className="whytalizman__item-content">
                <h3 className="whytalizman__description-title">Safety</h3>

                <p className="whytalizman__description-services">
                  A calm and responsible approach to driving, with your safety
                  and comfort in mind throughout the journey.
                </p>
              </div>
            </div>

            <div className="whytalizman__item">
              <span className="whytalizman__number">05</span>

              <div className="whytalizman__item-content">
                <h3 className="whytalizman__description-title">
                  Personal Service
                </h3>

                <p className="whytalizman__description-services">
                  Every transfer is arranged individually around your
                  destination, schedule and travel requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyTalizman;
