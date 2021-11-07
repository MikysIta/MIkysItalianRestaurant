import React from "react";
import contactStyles from "../../styles/contact.module.css";
import { BsInstagram } from "react-icons/bs";
import Image from "next/image";

const Instagram = ({ dataPictures }) => {
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
        {dataPictures.map((a, id) => {
          return (
            <div key={id} className={contactStyles.instagramPic}>
              <a
                href="https://www.instagram.com/mikysitalian/?hl=en"
                target="_blank"
              >
                <Image
                  src={`https:${a.fields.file.url}`}
                  alt="Insta pic"
                  layout="fill"
                />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Instagram;
