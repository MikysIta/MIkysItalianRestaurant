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
            <a
              href="https://www.instagram.com/mikysitalian/?hl=en"
              target="_blank"
              key={id}
            >
              <div className={contactStyles.instagramPic}>
                <Image
                  src={`https:${a.fields.file.url}`}
                  alt="Insta pic"
                  layout="fill"
                  className="widthHeight"
                />
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Instagram;
