import React, { useState, useRef, useContext } from "react";
import bookigFormStyle from "../../styles/bookingForm.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { StoreContext } from "../../context/storeContext";
import emailjs from "emailjs-com";

const BookingForm = ({ setopenmodal }) => {
  const [booked, setBooked] = useState("");
  const [error, setError] = useState("");
  const { fullyBooked } = useContext(StoreContext);

  const userId = process.env.NEXT_PUBLIC_USER_ID_EMAILJS;

  const currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  //const DayAfter = new Date(new Date().getTime() + 48 * 60 * 60 * 1000);
  const tomorrow = currentDate.toISOString().split("T")[0];

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_1tndgoi", "template_xu28zqf", form.current, userId)
      .then(
        (result) => {
          setBooked("Your booking has been confirmed.") &
            setTimeout(() => {
              setBooked("");
              setopenmodal(false);
            }, 2000);
        },
        (error) => {
          setError("Sorry something went wrong, try again");
        }
      );
  };
  return (
    <div className={bookigFormStyle.modalBackground}>
      <div className={bookigFormStyle.modalContainer}>
        <div className={bookigFormStyle.modalCloseIconContainer}>
          <img
            src="assets/cropped-Outlook-ioabnzky.png"
            alt="logo"
            className={bookigFormStyle.modalCloseLogo}
          />
          <button
            className={bookigFormStyle.modalCloseIconButton}
            onClick={() => {
              setopenmodal(false);
            }}
          >
            <AiOutlineClose className={bookigFormStyle.modalCloseIcon} />
          </button>
        </div>
        {booked ? (
          <div className={bookigFormStyle.modalTableBooked}>
            <p>{booked}</p>
          </div>
        ) : error ? (
          <div className={bookigFormStyle.modalTableBookedError}>
            <p>{error}</p>
          </div>
        ) : fullyBooked ? (
          <div className={bookigFormStyle.modalTableFullyBooked}>
            <p>SORRY WE ARE FULLY BOOKED TODAY </p>
            <p>You can call the restaurant for more info.</p>
          </div>
        ) : null}

        <div className={bookigFormStyle.modalCtnTitle}>
          <h2>Reservation</h2>
          <p>
            Reserve your table between 12:00pm and 14.00pm or 17:00pm and
            20:45pm{" "}
          </p>
        </div>
        <div className={bookigFormStyle.modalCtnForm}>
          <form
            ref={form}
            className={bookigFormStyle.modalForm}
            onSubmit={sendEmail}
          >
            <div className={bookigFormStyle.modalinputCtn}>
              <label>Name </label>
              <input type="text" name="name" required />
            </div>
            <div className={bookigFormStyle.modalinputCtn}>
              <label>Email </label>
              <input type="text" name="email" required />
            </div>
            <div className={bookigFormStyle.modalinputCtn}>
              <label>Phone </label>
              <input type="text" name="phone" required />
            </div>
            <div className={bookigFormStyle.modalinputCtn}>
              <label> Date </label>
              <input
                type="date"
                name="date"
                required
                min={fullyBooked ? tomorrow : null}
              />
            </div>
            <div className={bookigFormStyle.modalinputCtn}>
              <label> Time </label>
              <input type="time" name="time" min="17:00" max="21:00" required />
            </div>
            <div className={bookigFormStyle.modalinputCtn}>
              <label> No. People</label>
              <input type="number" name="number" required />
            </div>
            <div className={bookigFormStyle.modalTextAreaCtn}>
              <div className={bookigFormStyle.modalTextAreaCtnLabel}>
                <label> Additional Message</label>
                <p>Special occasion, Dietary requirements etc..</p>
              </div>
              <textarea name="message" placeholder="Write your message..." />
            </div>
            <div className={bookigFormStyle.modalCtnSubmit}>
              <input
                className={bookigFormStyle.modalBtn}
                type="submit"
                value="Book a Table"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
