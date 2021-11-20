import React from "react";
import contactStyles from "../../styles/contact.module.css";

const Map = () => {
  return (
    <div className={contactStyles.ctnMap}>
      <iframe
        className={contactStyles.map}
        src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJZX_z5mmlMioRjJ5ofUKWjZA&key=${process.env.NEXT_PUBLIC_MAP_API_KEY}`}
      />
    </div>
  );
};

export default Map;
