import Button from "../../ui/Button/Button";
import "./Header.css";
import menuIcon from "../../../assets/icons/burger-menu.svg";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import Brand from "../../ui/Brand/Brand";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="header">
      <div className="container header__inner">
        <Brand />

        <nav className="header__nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#transfers">Prices</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="header__actions">
          <div className="header__languages">
            <button
              className="header__language-trigger"
              type="button"
              aria-label="Choose language"
            >
              EN
              <span className="header__language-arrow" aria-hidden="true" />
            </button>
          </div>

          <Button href="#contact">Reservation</Button>

          <button
            className="header__menu"
            type="button"
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <img src={menuIcon} alt="" />
          </button>
        </div>
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}

export default Header;
