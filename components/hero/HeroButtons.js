import React from "react";
import heroStyles from "../../styles/hero.module.css";
import { motion } from "framer-motion";

const HeroButtons = ({ href, name, classDynamicStyle, animationBtn }) => {
  return (
    <motion.a
      initial="hidden"
      animate="visible"
      variants={animationBtn}
      href={href}
      rel="noopener"
      rel="noreferrer"
      target="_self"
      className={classDynamicStyle}
    >
      {name}
    </motion.a>
  );
};

export default HeroButtons;
