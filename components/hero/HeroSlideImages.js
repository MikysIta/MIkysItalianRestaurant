import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import heroStyles from "../../styles/hero.module.css";
import menuStyles from "../../styles/menues.module.css";

const HeroSlideImages = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextAutoSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };

    timeout.current = setTimeout(nextAutoSlide, 4000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);
  return (
    <div className={heroStyles.sliderContainer}>
      <div className={heroStyles.sliderContainerWrapper}>
        <div className={heroStyles.slide}>
          {slides.map((slide, id) => (
            <div
              className={
                id === current ? menuStyles.slideActive : menuStyles.slide
              }
              key={id}
            >
              {id === current && (
                <Image
                  key={id}
                  src={`https:${slide.fields.file.url}`}
                  alt="try"
                  layout="fill"
                  className={heroStyles.foodImage}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlideImages;
