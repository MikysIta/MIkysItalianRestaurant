import React from "react";
import contactStyles from "../../styles/contact.module.css";

const Map = () => {
  return (
    <div className={contactStyles.ctnMap}>
      <iframe
        className={contactStyles.map}
        src="https://maps.google.com/maps?q=88%20broadway%20Crawley%2C%20Nedlands%2C%20WA%206009&t=m&z=12&output=embed&iwloc=near"
      />
    </div>
  );
};

export default Map;
