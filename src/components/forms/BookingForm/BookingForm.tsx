import "./BookingForm.css";
import Button from "../../ui/Button/Button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { localizedPath } from "../../i18n/localizedPath";

type BookingFormData = {
  from: string;
  to: string;
  date: string;
  time: string;
  passengers: string;
  name: string;
  phone: string;
  message: string;
};

type BookingFormProps = {
  initialFrom?: string;
  initialTo?: string;
};

const formatDateForInput = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const isValidPhone = (phone: string) => {
  const allowedCharacters = /^[+\d\s()-]+$/;
  const digits = phone.replace(/\D/g, "");

  return allowedCharacters.test(phone) && digits.length >= 7;
};

function BookingForm({ initialFrom = "", initialTo = "" }: BookingFormProps) {
  const { t, i18n } = useTranslation();

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm<BookingFormData>({
    defaultValues: {
      from: initialFrom,
      to: initialTo,
    },
  });

  useEffect(() => {
    if (isSubmitted) {
      trigger();
    }
  }, [i18n.language, isSubmitted, trigger]);

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const showStatus = (newStatus: "success" | "error") => {
    setStatus(newStatus);

    setTimeout(() => {
      setStatus("idle");
    }, 5000);
  };

  const onSubmit = async (data: BookingFormData) => {
    const formData = new FormData();

    formData.append("access_key", accessKey);

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        reset();
        showStatus("success");
      } else {
        showStatus("error");
      }
    } catch {
      showStatus("error");
    }
  };

  const today = formatDateForInput(new Date());

  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 2);

  const maxDateString = formatDateForInput(maxDate);

  return (
    <form className="booking-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="booking-form__field">
        <label htmlFor="from">{t("bookingForm.from.label")}</label>

        <input
          id="from"
          type="text"
          placeholder={t("bookingForm.from.placeholder")}
          aria-invalid={errors.from ? "true" : "false"}
          {...register("from", {
            required: t("bookingForm.from.required"),
          })}
        />

        {errors.from && (
          <p className="booking-form__error">{errors.from.message}</p>
        )}
      </div>

      <div className="booking-form__field">
        <label htmlFor="to">{t("bookingForm.to.label")}</label>

        <input
          id="to"
          type="text"
          placeholder={t("bookingForm.to.placeholder")}
          aria-invalid={errors.to ? "true" : "false"}
          {...register("to", {
            required: t("bookingForm.to.required"),
          })}
        />

        {errors.to && (
          <p className="booking-form__error">{errors.to.message}</p>
        )}
      </div>

      <div className="booking-form__row">
        <div className="booking-form__field">
          <label htmlFor="date">{t("bookingForm.date.label")}</label>

          <input
            id="date"
            type="date"
            min={today}
            max={maxDateString}
            aria-invalid={errors.date ? "true" : "false"}
            {...register("date", {
              required: t("bookingForm.date.required"),
              validate: (value) =>
                (value >= today && value <= maxDateString) ||
                t("bookingForm.date.invalid"),
            })}
          />

          {errors.date && (
            <p className="booking-form__error">{errors.date.message}</p>
          )}
        </div>

        <div className="booking-form__field">
          <label htmlFor="time">{t("bookingForm.time.label")}</label>

          <input
            id="time"
            type="time"
            aria-invalid={errors.time ? "true" : "false"}
            {...register("time", {
              required: t("bookingForm.time.required"),
            })}
          />

          {errors.time && (
            <p className="booking-form__error">{errors.time.message}</p>
          )}
        </div>
      </div>

      <div className="booking-form__field">
        <span className="booking-form__label">
          {t("bookingForm.passengers.label")}
        </span>

        <div className="booking-form__passengers">
          {["1", "2", "3", "4"].map((value) => (
            <label key={value} className="booking-form__passenger">
              <input
                type="radio"
                value={value}
                {...register("passengers", {
                  required: t("bookingForm.passengers.required"),
                })}
              />

              <span>{value}</span>
            </label>
          ))}
        </div>

        {errors.passengers && (
          <p className="booking-form__error">{errors.passengers.message}</p>
        )}
      </div>

      <div className="booking-form__field">
        <label htmlFor="name">{t("bookingForm.name.label")}</label>

        <input
          id="name"
          type="text"
          placeholder={t("bookingForm.name.placeholder")}
          aria-invalid={errors.name ? "true" : "false"}
          {...register("name", {
            required: t("bookingForm.name.required"),
          })}
        />

        {errors.name && (
          <p className="booking-form__error">{errors.name.message}</p>
        )}
      </div>

      <div className="booking-form__field">
        <label htmlFor="phone">{t("bookingForm.phone.label")}</label>

        <input
          id="phone"
          type="tel"
          placeholder="+421 905 123 456"
          aria-invalid={errors.phone ? "true" : "false"}
          {...register("phone", {
            required: t("bookingForm.phone.required"),
            validate: (value) =>
              isValidPhone(value) || t("bookingForm.phone.invalid"),
          })}
        />

        {errors.phone && (
          <p className="booking-form__error">{errors.phone.message}</p>
        )}
      </div>

      <div className="booking-form__field">
        <label htmlFor="message">{t("bookingForm.message.label")}</label>

        <textarea
          id="message"
          placeholder={t("bookingForm.message.placeholder")}
          rows={4}
          {...register("message")}
        />
      </div>

      <p className="booking-form__privacy">
        {t("bookingForm.privacy.text")}{" "}
        <Link to={localizedPath("/privacy", i18n.language)}>
          {t("bookingForm.privacy.link")}
        </Link>
      </p>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting
          ? t("bookingForm.submit.sending")
          : t("bookingForm.submit.send")}
      </Button>

      {status === "success" && (
        <p className="booking-form__status booking-form__status--success">
          {t("bookingForm.status.success")}
        </p>
      )}

      {status === "error" && (
        <p className="booking-form__status booking-form__status--error">
          {t("bookingForm.status.error")}
        </p>
      )}
    </form>
  );
}

export default BookingForm;
