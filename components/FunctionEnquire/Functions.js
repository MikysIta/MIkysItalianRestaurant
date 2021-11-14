import React from "react";
import functionStyles from "../../styles/function.module.css";
import EnquireForm from "./EnquireForm";
const Functions = () => {
  return (
    <section className={functionStyles.functionCtn} id="function">
      <div className={functionStyles.functionCtnInner}>
        <h1>Functions</h1>
        <p>
          Lorem IpsumLorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book galley of type
          and scrambled .
        </p>
        <EnquireForm />
      </div>
    </section>
  );
};

export default Functions;
