import React from "react";

import { motion } from "framer-motion";

const HeroButtons = ({ href, name, classDynamicStyle, animationBtn }) => {
  return (
    <motion.a
      initial="hidden"
      animate="visible"
      variants={animationBtn}
      href={href}
      rel="noopener"
      target="_self"
      className={classDynamicStyle}
    >
      {name}
    </motion.a>
  );
};

export default HeroButtons;
