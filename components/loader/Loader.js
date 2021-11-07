import React from "react";
import loaderStyles from "../../styles/loader.module.css";

const Loader = () => (
  <div className={loaderStyles.custom}>
    <div className={loaderStyles.balls}>
      <div className={`${loaderStyles.ball} ${loaderStyles.ball1}`}></div>
      <div className={`${loaderStyles.ball} ${loaderStyles.ball2}`}></div>
      <div className={`${loaderStyles.ball}  ${loaderStyles.ball3}`}></div>
    </div>
    <span className={loaderStyles.customText}>Loading...</span>
  </div>
);

export default Loader;
