import closeMenu from "../../../assets/icons/close-icon.svg";
import Button from "../../ui/Button/Button";
import Brand from "../../ui/Brand/Brand";
import whatsappIcon from "../../../assets/icons/whatsapp-icon.svg";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const languages = ["EN", "DE", "SK", "RU", "UK"];

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="mobile-menu">
      <div className="mobile-menu__top">
        <Brand />

        <button
          className="mobile-menu__close"
          type="button"
          aria-label="Close menu"
          onClick={onClose}
        >
          <img src={closeMenu} alt="" />
        </button>
      </div>

      <nav className="mobile-menu__nav" aria-label="Mobile navigation">
        <a className="mobile-menu__nav-link" href="#home" onClick={onClose}>
          Home
        </a>
        <a
          className="mobile-menu__nav-link"
          href="#transfers"
          onClick={onClose}
        >
          Prices
        </a>
        <a className="mobile-menu__nav-link" href="#gallery" onClick={onClose}>
          Gallery
        </a>
        <a className="mobile-menu__nav-link" href="#contact" onClick={onClose}>
          Contact
        </a>
      </nav>

      <div className="mobile-menu__bottom">
        <div className="mobile-menu__languages" aria-label="Choose language">
          {languages.map((language) => (
            <button className="mobile-menu__language" type="button">
              {language}
            </button>
          ))}
        </div>

        <div className="mobile-menu__contact-actions">
          <a className="mobile-menu__contact-action" href="tel:+421...">
            Call us →
          </a>

          <a
            className="mobile-menu__contact-action"
            href="https://wa.me/421..."
          >
            <img
              className="mobile-menu__contact-icon"
              src={whatsappIcon}
              alt=""
            />
            WhatsApp
          </a>
        </div>

        <Button href="#booking" onClick={onClose}>
          Reservation
        </Button>
      </div>
    </div>
  );
}

export default MobileMenu;
