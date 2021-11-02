import React from "react";
import contactStyles from "../../styles/contact.module.css";

const OpeningHours = () => {
  return (
    <section className={contactStyles.hoursContainer}>
      <h4>Opening Hour</h4>
      <ul className={contactStyles.hoursList}>
        <li>
          <span>Monday</span>
          <span>09 am - 10pm</span>
        </li>
        <li>
          <span>Tuesday</span>
          <span>09 am - 10 pm</span>
        </li>
        <li>
          <span>Wednesday</span>
          <span>09 am - 10 pm</span>
        </li>
        <li>
          <span>Thursday</span>
          <span>09 am - 10 pm</span>
        </li>
        <li>
          <span>Friday</span>
          <span>11 am - 08 pm</span>
        </li>
        <li>
          <span>Saturday</span>
          <span>10 am - 11 pm</span>
        </li>
        <li>
          <span>Sunday</span>
          <span>Closed</span>
        </li>
      </ul>
    </section>
  );
};

export default OpeningHours;
