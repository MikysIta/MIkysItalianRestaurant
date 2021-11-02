import React, { useState, useRef, useEffect } from "react";
import menuStyles from "../../styles/menues.module.css";
import { Images } from "../../utility/util";
import HeroButtons from "../hero/HeroButtons";
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";
import { GrWifiNone } from "react-icons/gr";

const menuFoodPicVariant = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,

    transition: {
      duration: 1,
    },
  },
};

const menuFoodDescVariant = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,

    transition: {
      delay: 0.6,
      duration: 1,
    },
  },
};

const MenuesList = ({ classNameStyleIC, classNameStyleDesC }) => {
  const [current, setCurrent] = useState(0);
  const length = Images.length;
  const timeout = useRef(null);

  const animationPic = useAnimation();
  const animationDesc = useAnimation();

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
    <div className={menuStyles.containerMenu} id="menues">
      <div className={classNameStyleIC}>
        <InView>
          {({ inView, ref, entry }) => {
            if (inView) {
              animationPic.start(menuFoodPicVariant.visible);
            } else if (!inView) {
              animationPic.start(menuFoodPicVariant.hidden);
            }

            return (
              <motion.div
                animate={animationPic}
                ref={ref}
                className={menuStyles.imageContainer}
              >
                {Images.map(({ src, id }) => (
                  <div
                    className={
                      id === current ? menuStyles.slideActive : menuStyles.slide
                    }
                    key={id}
                  >
                    {id === current && (
                      <img
                        key={id}
                        src={src}
                        alt="try"
                        className={menuStyles.foodImageMenus}
                      />
                    )}
                  </div>
                ))}
              </motion.div>
            );
          }}
        </InView>

        <div className={menuStyles.containerMenuDesc}>
          <InView>
            {({ inView, ref, entry }) => {
              if (inView) {
                animationDesc.start(menuFoodDescVariant.visible);
              } else if (!inView) {
                animationDesc.start(menuFoodDescVariant.hidden);
              }

              return (
                <motion.div
                  animate={animationDesc}
                  ref={ref}
                  className={classNameStyleDesC}
                >
                  <h2>Food Menu</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to m
                  </p>
                  <HeroButtons
                    name="Food Menu"
                    href="https://www.quandoo.com.au/place/mikys-italian-89295/widget?aid=146&utm_source=quandoo-partner&utm_medium=widget-link"
                    classDynamicStyle={menuStyles.ButtonMenu}
                  />
                </motion.div>
              );
            }}
          </InView>
        </div>
      </div>
    </div>
  );
};

export default MenuesList;
