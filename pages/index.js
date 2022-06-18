import React, { useContext, useState } from "react";
import { StoreContext } from "../context/storeContext";
import { client } from "../contentful/Contentful";
//import About from "../components/AboutSection/About";
import HeroBanner from "../components/hero/HeroBanner";
import HeroSlideImages from "../components/hero/HeroSlideImages";
//import ImageSliderCenter from "../components/imageSliderCenter/ImageSliderCenter";
//import MenuesList from "../components/menus/MenuesList";
import menuStyles from "../styles/menues.module.css";
import styles from "../styles/Home.module.css";
//import ContactSection from "../components/contact&map/ContactSection";
import Meta from "../components/meta/Meta";
//import Functions from "../components/FunctionEnquire/Functions";
import dynamic from "next/dynamic";
import BookingForm from "../components/Modal booking Form/bookingForm";

const DynamicAbout = dynamic(() => import("../components/AboutSection/About"));
const DynamicSlider = dynamic(() =>
  import("../components/imageSliderCenter/ImageSliderCenter")
);
const DynamicMap = dynamic(() => import("../components/contact&map/Map"));
const DynamicFunctions = dynamic(() =>
  import("../components/FunctionEnquire/Functions")
);
const DynamicContacts = dynamic(() =>
  import("../components/contact&map/ContactSection")
);

const DynamicMenues = dynamic(() => import("../components/menus/MenuesList"));

export default function Home({
  restaurantPage,
  galleryData,

  tradingHoursData,
  instagramData,
}) {
  const { imgHero, sortedMenuData, openmodal, setOpenModal } =
    useContext(StoreContext);

  const aboutSection = restaurantPage[0].fields;
  const imgSliderData = galleryData[0].fields.galleryImages;
  const instaPicArray = instagramData[0].fields.pictures;

  console.log(openmodal);
  return (
    <div className={styles.container}>
      <Meta />
      <HeroSlideImages slides={imgHero} />
      <HeroBanner setopenModal={setOpenModal} />
      {openmodal ? <BookingForm setopenmodal={setOpenModal} /> : null}
      <DynamicAbout aboutData={aboutSection} />
      <DynamicSlider dataImg={imgSliderData} />
      <div className={menuStyles.containerMenuH1}>
        <h1> The Menus</h1>
        <p> Food and Drinks</p>
      </div>

      {sortedMenuData.map((data, id) => {
        return (
          <DynamicMenues
            key={id}
            classNameStyleIC={
              data.fields.title === "Food Menu" ||
              data.fields.title === "Set Menu"
                ? menuStyles.containerInnerMenu
                : menuStyles.containerSecondInnerMenu
            }
            classNameStyleDesC={
              data.fields.title === "Food Menu" ||
              data.fields.title === "Set Menu"
                ? menuStyles.containerInnerMenuDesc
                : menuStyles.containerInnerMenuDescSecond
            }
            dataMenues={data}
          />
        );
      })}
      <DynamicFunctions />
      <DynamicContacts hours={tradingHoursData} insta={instaPicArray} />
      <DynamicMap />
    </div>
  );
}

export async function getServerSideProps() {
  const resRestPage = await client.getEntries({
    content_type: "theRestaurantPage",
  });
  const resGallery = await client.getEntries({
    content_type: "gallery",
  });

  const resTradingHours = await client.getEntries({
    content_type: "tradingHours",
  });

  const resInsta = await client.getEntries({
    content_type: "instagramPic",
  });

  return {
    props: {
      restaurantPage: resRestPage.items,
      galleryData: resGallery.items,

      tradingHoursData: resTradingHours.items,
      instagramData: resInsta.items,
    },
  };
}

//Michele developed and designed//
