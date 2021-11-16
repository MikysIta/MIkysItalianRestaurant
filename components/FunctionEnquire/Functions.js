import React from "react";
import functionStyles from "../../styles/function.module.css";
import EnquireForm from "./EnquireForm";
const Functions = () => {
  return (
    <section className={functionStyles.functionCtn} id="function">
      <div className={functionStyles.functionCtnInner}>
        <h1>Functions</h1>
        <p>
          With more than 15 years of experience all around the world, we are able to offer the perfect
          function with tasty italian authentic food and crazy drinks.
          Send us an enquire and we will help you to organize your ideal function and a personalize menu.
        </p>
        <EnquireForm />
      </div>
    </section>
  );
};

export default Functions;
