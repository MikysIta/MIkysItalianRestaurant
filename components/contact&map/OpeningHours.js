import React from "react";
import contactStyles from "../../styles/contact.module.css";

const OpeningHours = ({ hours }) => {
  const sortedArray = hours.sort(
    (a, b) =>
      new Date(a.sys.createdAt).getTime() - new Date(b.sys.createdAt).getTime()
  );
  return (
    <section className={contactStyles.hoursContainer}>
      <h4>Opening Hour</h4>
      <ul className={contactStyles.hoursList}>
        {sortedArray.map((day, id) => {
          return (
            <li key={id}>
              <span>{day.fields.day}</span>
              <span>{day.fields.hour}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default OpeningHours;
