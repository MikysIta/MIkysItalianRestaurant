import React from "react";
import functionStyles from "../../styles/function.module.css";
const EnquireForm = () => {
  return (
    <div className={functionStyles.outerFormCtn}>
      <form className={functionStyles.formControl}>
        <div className={functionStyles.nameEmail}>
          <div className={functionStyles.inputs}>
            <label>Name *</label>
            <input type="text" name="name" required />
          </div>
          <div className={functionStyles.inputs}>
            <label>Email *</label>
            <input type="text" name="email" required />
          </div>
        </div>
        <div className={functionStyles.inputs}>
          <label>Mobile *</label>
          <input type="text" name="number" required />
        </div>
        <div className={functionStyles.functionsGuestNumber}>
          <div className={functionStyles.inputs}>
            <label>Type of Function *</label>
            <input type="text" name="function" required />
          </div>
          <div className={functionStyles.inputs}>
            <label>No. of guests *</label>
            <input type="text" name="guests" required />
          </div>
        </div>
        <div className={functionStyles.inputs}>
          <label>Preferred Date *</label>
          <input type="text" name="guests" required />
        </div>
        <div className={functionStyles.inputs}>
          <label>Enquiry *</label>
          <textarea name="message" rows="10" cols="40" required />
        </div>
        <div className={functionStyles.inputsBtn}>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default EnquireForm;
