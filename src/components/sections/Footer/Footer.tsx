import "./Footer.css";
import Logo from "../../../assets/icons/3.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__brand-heading">
              <div className="footer__logo" aria-hidden="true">
                <img src={Logo} alt="" />
              </div>

              <div className="footer__brand-text">
                <span className="footer__brand-name">TALIZMAN</span>
                <span className="footer__brand-tagline">Transfer Service</span>
              </div>
            </div>

            <p className="footer__description">
              Private transfers from Banská Bystrica across Slovakia and Central
              Europe.
            </p>
          </div>

          <a className="footer__contact-link" href="#contact">
            Contact →
          </a>
        </div>

        <div className="footer__bottom">
          <p>© 2026 TALIZMAN. All rights reserved.</p>

          <p>Banská Bystrica, Slovakia</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
