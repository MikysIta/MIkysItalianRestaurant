import React from "react";
import contactStyles from "../../styles/contact.module.css";
import Contact from "./Contact";
import OpeningHours from "./OpeningHours";
import { Social } from "../../utility/util";
import navStyles from "../../styles/Nav.module.css";
import Instagram from "./Instagram";
import Map from "./Map";

const ContactSection = ({ hours, insta }) => {
  return (
    <section className={contactStyles.contactContainer} id="contacts">
      <h1>GET IN TOUCH</h1>
      <div className={contactStyles.InfoContainer}>
        <Contact />
        <OpeningHours hours={hours} />
        <Instagram dataPictures={insta} />
      </div>

      <div className={contactStyles.aboutMikysContainer}>
        <h2 className={contactStyles.titleH2}>About Mikys</h2>
        <p>
          Mikys a child friendly restaurant a place of meeting and simply a
          fantastic experience. We acept all sort of payment from card like
          (Visa,Mastercard) to cash and digital card.
        </p>
      </div>
      <h2 className={contactStyles.titleH2}>Follow Us</h2>

      <div className={contactStyles.ctnSocial}>
        {Social.map(({ name, link, icon }) => (
          <a
            key={name}
            href={link}
            className={
              name === "Facebook"
                ? contactStyles.iconOneSocialBottom
                : contactStyles.iconTwoSocialBottom
            }
          >
            {icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
