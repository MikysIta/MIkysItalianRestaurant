import React from "react";
import HeroButtons from "../components/hero/HeroButtons";
import notFoundStyles from "../styles/notFound.module.css";

const NotFound = () => {
  return (
    <div className={notFoundStyles.ctnNotFound}>
      <h1>Hi There this page does not exist</h1>
      <HeroButtons
        href="/"
        name="Back To The Website"
        classDynamicStyle={notFoundStyles.notFoundBtn}
      />
    </div>
  );
};

export default NotFound;
