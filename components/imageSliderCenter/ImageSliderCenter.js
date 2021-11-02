import React, { useState, useRef, useEffect, useCallback } from "react";
import sliderStyles from "../../styles/imageSlider.module.css";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import { Images } from "../../utility/util";

const ImageSliderCenter = () => {
  const [current, setCurrent] = useState(0);

  const length = Images.length;

  const nextSlide = useCallback(() => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log("pressing");
  }, [current, length]);

  const prevSlide = useCallback(() => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }, [current, length]);

  return (
    <div className={sliderStyles.sliderOuterContainer}>
      <div className={sliderStyles.sliderWrapper}>
        {Images.map((slide, index) => {
          return (
            <div className={sliderStyles.slideInner} key={index}>
              {index === current && (
                <div className={sliderStyles.sliderInner}>
                  <img
                    src={slide.src}
                    alt="gallery"
                    className={sliderStyles.imgGallery}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className={sliderStyles.galleryTitle}>
        <h1>Gallery</h1>
        <div className={sliderStyles.sliderButtonsContainer}>
          <IoArrowBack
            onClick={prevSlide}
            className={sliderStyles.sliderButtons}
          />
          <IoArrowForward
            onClick={nextSlide}
            className={sliderStyles.sliderButtons}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSliderCenter;
