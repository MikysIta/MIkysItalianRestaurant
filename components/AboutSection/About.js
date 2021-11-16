import React from "react";
import aboutStyles from "../../styles/about.module.css";
import Image from "next/image";
import { FaTripadvisor } from "react-icons/fa";
import { GrFacebook } from "react-icons/gr";

const About = ({ aboutData }) => {
  const paragraph = aboutData.paragraph.content[0].content[0].value;

  return (
    <section className={aboutStyles.aboutContainer} id="about">
      <div className={aboutStyles.aboutStoryContainer}>
        <h1>The Restaurant</h1>

        <p>Welcome to Mikys Restaurant</p>
        <div className={aboutStyles.scoreCtn}>
          <a
            href="https://www.tripadvisor.com.au/Restaurant_Review-g12497842-d23127933-Reviews-Mikys_Italian-Crawley_Greater_Perth_Western_Australia.html"
            target="_blank"
            className={aboutStyles.scoretrip}
          >
            <span>
              <FaTripadvisor />{" "}
            </span>
            4.5/5
          </a>
          <a
            href="https://www.ubereats.com/au/store/mikys-italian-fusion/oggSSAtpTw-F1tE1cB1EnQ"
            target="_blank"
            className={aboutStyles.scoreUber}
          >
            Uber <span>Eats</span>
            4.6/5
          </a>
          <a
            href="https://www.facebook.com/MikysItalian/reviews/?ref=page_internal"
            target="_blank"
            className={aboutStyles.scoreFacebook}
          >
            <span>
              <GrFacebook className={aboutStyles.iconFb} />
            </span>{" "}
            5/5
          </a>
        </div>
      </div>
      <div className={aboutStyles.storyContainer}>
        <div className={aboutStyles.storyImgCtn}>
          {aboutData.pictures.map((pic, id) => {
            return (
              <div className={aboutStyles.storyImg} key={id}>
                <Image
                  src={`https:${pic.fields.file.url}`}
                  alt="owner"
                  layout="fill"
                />
              </div>
            );
          })}
        </div>
        <div className={aboutStyles.storyDesc}>
          <div className={aboutStyles.storyDescInner}>
            <h2>{aboutData.titleParagraph}</h2>
            <h3>{aboutData.subtitleParagraph}</h3>
            <p>{paragraph}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
