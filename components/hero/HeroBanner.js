import React, { useState } from "react";
import heroStyles from "../../styles/hero.module.css";
import HeroButtons from "./HeroButtons";
import { motion } from "framer-motion";

const titleVariant = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    x: 0,
    opacity: 1,

    transition: {
      delay: 1,
      duration: 1,
    },
  },
};

const subTitleVariant = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    x: 0,
    opacity: 1,

    transition: {
      delay: 1.2,
      duration: 1,
    },
  },
};

const btnHeroVariant = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,

    transition: {
      delay: 1.4,
      duration: 1,
    },
  },
};

const btnHeroTwoVariant = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,

    transition: {
      delay: 1.5,
      duration: 1,
    },
  },
};

const HeroBanner = ({ setopenModal }) => {
  return (
    <div className={heroStyles.leftContainer}>
      <div className={heroStyles.leftContainerInner}>
        <div className={heroStyles.leftTitleContainer}>
          <motion.h1 initial="hidden" animate="visible" variants={titleVariant}>
            MIKYS
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={subTitleVariant}
          >
            The Taste of Italy on Broadway Street
          </motion.p>
        </div>
        <div className={heroStyles.leftTitleButtons}>
          <motion.button
            className={heroStyles.herobtn}
            initial="hidden"
            animate="visible"
            variants={btnHeroVariant}
            onClick={() => {
              setopenModal(true);
            }}
          >
            Book Now
          </motion.button>

          <HeroButtons
            href="/order.html"
            name="Order Online"
            classDynamicStyle={heroStyles.herobtnTwo}
            animationBtn={btnHeroTwoVariant}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
