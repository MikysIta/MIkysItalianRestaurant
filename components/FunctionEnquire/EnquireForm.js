import React, { useState } from "react";
import functionStyles from "../../styles/function.module.css";
import emailjs from "emailjs-com";

const EnquireForm = () => {
  const [email, setEmail] = useState(null);
  const [error, setError] = useState("");
  const [mexDelivered, setMexDelivered] = useState("");
  const [status, setStatus] = useState(false);
  const userId = process.env.NEXT_PUBLIC_USER_ID_EMAILJS;
  const handleChange = (e) => {
    return setEmail(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    email
      ? setStatus(true) &
        emailjs
          .sendForm("service_1767zhj", "template_hwib3yj", e.target, userId)
          .then(
            (result) => {
              setStatus(false);
              setMexDelivered("Message Delivered") &
                setTimeout(() => {
                  setMexDelivered("");
                }, 2000);
            },
            (error) => {
              console.log(error.text);
            }
          )
      : setError("Please leave your Email To send the Enquire") &
        setTimeout(() => {
          setError("");
        }, 2000);
    e.target.reset();
    setEmail(null);
  };

  return (
    <div className={functionStyles.outerFormCtn}>
      <form onSubmit={sendEmail} className={functionStyles.formControl}>
        <div className={functionStyles.nameEmail}>
          <div className={functionStyles.inputs}>
            <label>Name *</label>
            <input type="text" name="name" required />
          </div>
          <div className={functionStyles.inputs}>
            <label>Email *</label>
            <input type="text" name="email" required onChange={handleChange} />
          </div>
        </div>
        <div className={functionStyles.inputs}>
          <label>Mobile *</label>
          <input type="text" name="mobile" required />
        </div>
        <div className={functionStyles.functionsGuestNumber}>
          <div className={functionStyles.inputs}>
            <label>Type of Function *</label>
            <input type="text" name="function" required />
          </div>
          <div className={functionStyles.inputs}>
            <label>No. of guests *</label>
            <input type="text" name="guests" required />
          </div>
        </div>
        <div className={functionStyles.inputs}>
          <label>Preferred Date *</label>
          <input type="text" name="date" required />
        </div>
        <div className={functionStyles.inputs}>
          <label>Enquiry *</label>
          <textarea name="message" rows="10" cols="40" required />
        </div>
        {mexDelivered ? (
          <div className={functionStyles.okStatusDeliveryCtn}>
            <p>{mexDelivered}</p>
          </div>
        ) : null}
        <div className={functionStyles.inputsBtn}>
          <input
            type="submit"
            value={!status ? "Submit" : "Sending your Enquire..."}
          />
        </div>
      </form>
    </div>
  );
};

export default EnquireForm;
