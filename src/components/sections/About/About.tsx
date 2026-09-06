import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__info">
          <div className="about__info-box">
            <p className="about__info-description">
              PRIVATE TRANSFERS & EXECUTIVE TRAVEL
            </p>
            <h2 className="about__title">
              <span>Your &nbsp;journey.</span>
              <span>Your &nbsp;comfort.</span>
            </h2>
          </div>

          <div className="about__description">
            <p className="about__description-services">
              @Talizman provides private transfers from Banská Bystrica with a
              focus on comfort, reliability and personal service.
            </p>

            <p className="about__description-services">
              Every journey is arranged individually — from airport and business
              transfers to long-distance travel across Slovakia and Central
              Europe.
            </p>

            <div className="about__description-signature">
              <p className="about__description-sign"> Talizman </p>

              <p className="about__description-sign-text">
                {" "}
                PRIVATE TRANSFERS & EXECUTIVE TRAVEL
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
