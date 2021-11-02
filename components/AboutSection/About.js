import React from "react";
import aboutStyles from "../../styles/about.module.css";
import Head from "next/head";

const About = () => {
  return (
    <section className={aboutStyles.aboutContainer} id="about">
      <div className={aboutStyles.aboutStoryContainer}>
        <h1>The Restaurant</h1>

        <p>Welcome to Mikys Restaurant</p>
      </div>
      <div className={aboutStyles.storyContainer}>
        <div className={aboutStyles.storyImgCtn}>
          <div className={aboutStyles.storyImg}>
            <img src="/assets/HeroImg.jpg" alt="owner" />
          </div>
          <div className={aboutStyles.storyImg}>
            <img src="/assets/HeroImg2.jpg" alt="owner" />
          </div>
        </div>
        <div className={aboutStyles.storyDesc}>
          <div className={aboutStyles.storyDescInner}>
            <h2>
              WELCOME TO TASTY A JOYOUS EATERY INSPIRED BY THE SPIRIT AND
              CULTURE OF ITALIAN CUISINE.
            </h2>
            <h3>MAKING DELICIOUS ITALIAN FOOD SINCE 1990</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book galley of type
              and scrambled .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
