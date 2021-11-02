import React from "react";
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

const HeroBanner = () => {
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
            Celebrate your every day dining in the beautiful atmosphere of our
            restaurant
          </motion.p>
        </div>
        <div className={heroStyles.leftTitleButtons}>
          <HeroButtons
            href="https://www.quandoo.com.au/place/mikys-italian-89295/widget?aid=146&utm_source=quandoo-partner&utm_medium=widget-link"
            name="Book Now"
            classDynamicStyle={heroStyles.herobtn}
            animationBtn={btnHeroVariant}
          />
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
