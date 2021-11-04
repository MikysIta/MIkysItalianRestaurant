import { createClient } from "contentful";
import About from "../components/AboutSection/About";
import HeroBanner from "../components/hero/HeroBanner";
import HeroSlideImages from "../components/hero/HeroSlideImages";
import ImageSliderCenter from "../components/imageSliderCenter/imageSliderCenter";
import MenuesList from "../components/menus/MenuesList";
import menuStyles from "../styles/menues.module.css";
import styles from "../styles/Home.module.css";
import ContactSection from "../components/contact&map/ContactSection";
import Meta from "../components/meta/Meta";

export default function Home({
  backgroundHero,
  restaurantPage,
  galleryData,
  menuesData,
}) {
  const imgHero = backgroundHero[0].fields.heroImages;
  const aboutSection = restaurantPage[0].fields;
  const imgSliderData = galleryData[0].fields.galleryImages;

  return (
    <div className={styles.container}>
      <Meta />
      <HeroSlideImages slides={imgHero} />
      <HeroBanner />
      <About aboutData={aboutSection} />
      <ImageSliderCenter dataImg={imgSliderData} />
      <div className={menuStyles.containerMenuH1}>
        <h1> The Menus</h1>
        <p> Food and Drinks</p>
      </div>

      {menuesData.map((data, id) => {
        return (
          <MenuesList
            key={id}
            classNameStyleIC={
              data.fields.title === "Food Menu"
                ? menuStyles.containerInnerMenu
                : menuStyles.containerSecondInnerMenu
            }
            classNameStyleDesC={
              data.fields.title === "Food Menu"
                ? menuStyles.containerInnerMenuDesc
                : menuStyles.containerInnerMenuDescSecond
            }
            dataMenues={data}
          />
        );
      })}

      <ContactSection />
    </div>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const resHero = await client.getEntries({ content_type: "heroBackground" });
  const resRestPage = await client.getEntries({
    content_type: "theRestaurantPage",
  });
  const resGallery = await client.getEntries({
    content_type: "gallery",
  });

  const resMenues = await client.getEntries({
    content_type: "menuesPage",
  });

  return {
    props: {
      backgroundHero: resHero.items,
      restaurantPage: resRestPage.items,
      galleryData: resGallery.items,
      menuesData: resMenues.items,
    },
  };
}
