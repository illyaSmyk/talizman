import "./Contact.css";
import PhoneIcon from "../../assets/icons/phone-call.svg";
import emailIkon from "../../assets/icons/email.svg";
import facebookIkon from "../../assets/icons/facebook.svg";
import instaIcon from "../../assets/icons/instagram.svg";
import Button from "../../components/ui/Button/Button";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BookingForm from "../../components/forms/BookingForm/BookingForm";

function Contact() {
  const { t } = useTranslation();
  const [isBookingOpen, setIsBookingOpen] = useState(
    () => window.location.hash === "#booking",
  );

  const [searchParams] = useSearchParams();

  const bookingFrom = searchParams.get("from") ?? "";
  const bookingTo = searchParams.get("to") ?? "";

  const bookingFormRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isBookingOpen) {
      bookingFormRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [isBookingOpen]);

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__info-box">
              <p className="contact__info-description section-label">
                {t("contact.label")}
              </p>

              <h2 className="contact__title section-title">
                {t("contact.title")}
              </h2>
            </div>

            <div className="contact__description">
              <p className="contact__description-services">
                {t("contact.description")}
              </p>
            </div>
          </div>
          <div className="contact__details">
            <a className="contact__detail" href="tel:+421XXXXXXX">
              <img
                className="contact__detail-icon"
                src={PhoneIcon}
                alt=""
                aria-hidden="true"
              />
              <span className="contact__detail-value">+421 XXX XXX XXX</span>
            </a>

            <a className="contact__detail" href="mailto:illiasmyksk@gmail.com">
              <img
                className="contact__detail-icon"
                src={emailIkon}
                alt=""
                aria-hidden="true"
              />
              <span className="contact__detail-value">
                illiasmyksk@gmail.com
              </span>
            </a>

            <a className="contact__detail" href="https://www.facebook.com/">
              <img
                className="contact__detail-icon"
                src={facebookIkon}
                alt=""
                aria-hidden="true"
              />
              <span className="contact__detail-value">Facebook</span>
            </a>

            <a className="contact__detail" href="https://www.instagram.com">
              <img
                className="contact__detail-icon"
                src={instaIcon}
                alt=""
                aria-hidden="true"
              />
              <span className="contact__detail-value">Instagram</span>
            </a>
          </div>

          <div className="contact__booking">
            <p className="contact__booking-label section-label">
              {t("contact.booking.label")}
            </p>

            <p className="contact__booking-description">
              {t("contact.booking.description")}
            </p>

            <Button onClick={() => setIsBookingOpen(!isBookingOpen)}>
              {isBookingOpen
                ? t("contact.booking.closeForm")
                : t("contact.booking.requestTransfer")}
            </Button>

            {isBookingOpen && (
              <div ref={bookingFormRef} className="contact__booking-form">
                <BookingForm initialFrom={bookingFrom} initialTo={bookingTo} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
