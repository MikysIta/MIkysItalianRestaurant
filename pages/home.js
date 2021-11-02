import Head from "next/head";
import About from "../components/AboutSection/About";
import HeroBanner from "../components/hero/HeroBanner";
import HeroSlideImages from "../components/hero/HeroSlideImages";
import ImageSliderCenter from "../components/imageSliderCenter/imageSliderCenter";
import MenuesList from "../components/menus/MenuesList";
import menuStyles from "../styles/menues.module.css";
import styles from "../styles/Home.module.css";
import ContactSection from "../components/contact&map/ContactSection";
import Meta from "../components/meta/Meta";

export default function Home() {
  return (
    <div className={styles.container}>
      <Meta />
      <HeroSlideImages />
      <HeroBanner />
      <About />
      <ImageSliderCenter />
      <div className={menuStyles.containerMenuH1}>
        <h1> The Menus</h1>
        <p> Food and Drinks</p>
      </div>

      <MenuesList
        classNameStyleIC={menuStyles.containerInnerMenu}
        classNameStyleDesC={menuStyles.containerInnerMenuDesc}
      />
      <MenuesList
        classNameStyleIC={menuStyles.containerSecondInnerMenu}
        classNameStyleDesC={menuStyles.containerInnerMenuDescSecond}
      />
      <ContactSection />
    </div>
  );
}
