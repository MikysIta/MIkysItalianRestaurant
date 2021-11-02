import React from "react";
import contactStyles from "../../styles/contact.module.css";
import { BsInstagram } from "react-icons/bs";
import { Images } from "../../utility/util";

const Instagram = () => {
  return (
    <section className={contactStyles.instagramCtn}>
      <h4>
        <span>
          <BsInstagram />
        </span>{" "}
        <a href="https://www.instagram.com/mikysitalian/?hl=en" target="_blank">
          Instagram
        </a>
      </h4>
      <div className={contactStyles.instagramCtnPic}>
        {Images.map(({ id, src }) => {
          return (
            <div key={id} className={contactStyles.instagramPic}>
              <a
                href="https://www.instagram.com/mikysitalian/?hl=en"
                target="_blank"
              >
                <img src={src} alt="Insta pic" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Instagram;
