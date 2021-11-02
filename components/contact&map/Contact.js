import React from "react";
import { Contacts } from "../../utility/util";
import contactStyles from "../../styles/contact.module.css";
import { FaFax } from "react-icons/fa";
import { BsFillHouseDoorFill, BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  const { address, Email, Phone, Fax } = Contacts;
  return (
    <section className={contactStyles.contact}>
      <h4>Contact Us</h4>
      <p>Below You can find all our Contacts</p>
      <ul className={contactStyles.contactList}>
        <li>
          <a
            href="https://www.google.com/maps/place/88+Broadway,+Crawley+WA+6009/@-31.9840626,115.8128075,17z/data=!3m1!4b1!4m5!3m4!1s0x2a32a4f2f510da37:0x2544641cf7a31e7e!8m2!3d-31.9840626!4d115.8149962"
            target="_blank"
          >
            <BsFillHouseDoorFill />
            <span>{address}</span>
          </a>
        </li>
        <li>
          <a href="mailto:mikysrestaurant@hotmail.com" target="_blank">
            <HiOutlineMail />
            <span>{Email}</span>
          </a>
        </li>
        <li>
          <BsFillTelephoneFill />
          <span>{Phone}</span>
        </li>
        <li>
          <FaFax />
          <span>{Fax}</span>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
