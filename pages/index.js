import logo from "../public/assets/cropped-Outlook-ioabnzky.png";
import Image from "next/image";
import Link from "next/link";
import introStyles from "../styles/Intro.module.css";
import menueStyles from "../styles/menues.module.css";
import HeroButtons from "../components/hero/HeroButtons";

export default function Intro() {
  return (
    <div className={introStyles.containerIntro}>
      <Image src={logo} alt="logo" width={600} height={200} />
      <div className={introStyles.btnContainer}>
        <HeroButtons
          name="Book a Table"
          href="https://www.quandoo.com.au/place/mikys-italian-89295/widget?aid=146&utm_source=quandoo-partner&utm_medium=widget-link"
          classDynamicStyle={menueStyles.ButtonMenu}
        />
        <HeroButtons
          name="Order Online"
          href="/order.html"
          classDynamicStyle={menueStyles.ButtonMenu}
        />
      </div>

      <div className={introStyles.buttonEnterContainer}>
        <Link href="/home">
          <a className={introStyles.buttonEnter}>Enter</a>
        </Link>
      </div>
    </div>
  );
}
