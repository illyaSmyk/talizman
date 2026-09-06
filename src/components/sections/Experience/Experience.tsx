import "./Experience.css";
import Button from "../../ui/Button/Button";

import GirlToCar from "../../../assets/images/exit_section_service.png";
import Logo from "../../../assets/icons/3.svg";

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience__container">
        <div className="experience__info">
          <div className="experience__info-box">
            <p className="experience__info-description">
              PRIVATE TRAVEL, YOUR WAY
            </p>

            <h2 className="experience__title">Comfort from first moment.</h2>
            <p className="experience__description-services">
              From the moment you are picked up, every journey is designed to
              feel calm, private and comfortable.
            </p>
          </div>
        </div>

        <div className="experience__visual">
          <div className="experience__image-main">
            <img src={GirlToCar} alt="A woman getting into a car" />
          </div>

          <div className="experience__visual-text">
            <div className="experience__end">
              <h3 className="experience__end-title">Time to yourself.</h3>

              <p className="experience__end-description">
                Relax, work or simply enjoy the journey.
              </p>
            </div>

            <div className="experience__brand">
              <div className="experience__brand-heading">
                <div className="experience__brand-logo" aria-hidden="true">
                  <img src={Logo} alt="" />
                </div>

                <div className="experience__brand-name-box">
                  <span className="experience__brand-name">TALIZMAN</span>
                  <span className="experience__brand-tagline">
                    Transfer Service
                  </span>
                </div>
              </div>

              <div className="experience__brand-message">
                <p>
                  Whether you're travelling to the airport, across Slovakia or
                  further into Europe, your journey is arranged around you.
                </p>

                <p>
                  Private pick-up, direct travel and personal service from start
                  to finish.
                </p>
              </div>
              <Button href="/gallery">View gallery</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
