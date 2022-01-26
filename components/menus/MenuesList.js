import React, { useState, useRef, useEffect } from "react";
import menuStyles from "../../styles/menues.module.css";
import Image from "next/image";
import HeroButtons from "../hero/HeroButtons";
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";

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

const MenuesList = ({ classNameStyleIC, classNameStyleDesC, dataMenues }) => {
  const Images = dataMenues.fields.menuImages;
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

  const details = dataMenues.fields.details.content[0].content[0].value;

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
                {Images.map((imgMenu, id) => {
                  return (
                    <div
                      className={
                        id === current
                          ? menuStyles.slideActive
                          : menuStyles.slide
                      }
                      key={id}
                    >
                      {id === current && (
                        <Image
                          key={id}
                          src={`https:${imgMenu.fields.file.url}`}
                          alt="Menu Pictures"
                          layout="fill"
                          objectFit="cover"
                        />
                      )}
                    </div>
                  );
                })}
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
                  <h2>{dataMenues.fields.title}</h2>
                  <p>{details}</p>
                  {dataMenues.fields.title === "Set Menu" ? (
                    <p className={menuStyles.setMenuBtn}>
                      Menu available on call
                    </p>
                  ) : (
                    <HeroButtons
                      name={dataMenues.fields.title}
                      href={dataMenues.fields.menuPdf.fields.file.url}
                      classDynamicStyle={menuStyles.ButtonMenu}
                    />
                  )}
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
