import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsThreeDotsVertical } from "react-icons/bs";
import navStyles from "../../styles/Nav.module.css";
import { Social } from "../../utility/util";
import { useRouter } from "next/router";
import HeroButtons from "../hero/HeroButtons";
import { motion } from "framer-motion";

const navigation = [
  { name: "Home", href: "/home" },
  { name: "Menu", href: "#menues" },
  { name: "About Us", href: "#about" },
  { name: "Contact Us", href: "#contacts" },
];

const logoVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      delay: 0.6,
      duration: 1,
    },
  },
};

const navVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      delay: 0.6,
      duration: 1,
    },
  },
};

const socialVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      delay: 0.8,
      duration: 1,
    },
  },
};

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [toggle, setToggle] = useState(false);
  const router = useRouter();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const changeBg = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBg);
  }

  return (
    <nav
      className={navbar ? navStyles.containerNavWhite : navStyles.containerNav}
    >
      <div className={navStyles.navCenter}>
        <div className={navStyles.navHeader}>
          <Link href="/home">
            <motion.img
              initial="hidden"
              animate="visible"
              variants={logoVariant}
              src="/assets/cropped-Outlook-ioabnzky.png"
              alt="logo"
              className={navStyles.logo}
            />
          </Link>
          <button
            onClick={handleToggle}
            type="button"
            className={navStyles.navButton}
          >
            <BsThreeDotsVertical className={navStyles.navIcon} />
          </button>
        </div>
        <ul
          onMouseLeave={() => {
            return setToggle(false);
          }}
          className={
            toggle
              ? `${navStyles.navLinks} ${navStyles.showNav}`
              : `${navStyles.navLinks}`
          }
        >
          {navigation.map((item) => (
            <motion.li
              initial="hidden"
              animate="visible"
              variants={navVariant}
              key={item.name}
            >
              <Link href={item.href}>
                <a className={navbar ? navStyles.navLinksColorChange : null}>
                  {item.name}
                </a>
              </Link>
            </motion.li>
          ))}
          <div className={navStyles.navSocial}>
            {Social.map(({ name, link, icon }) => (
              <motion.a
                initial="hidden"
                animate="visible"
                variants={socialVariant}
                key={name}
                href={link}
                className={
                  name === "Facebook" ? navStyles.iconOne : navStyles.iconTwo
                }
              >
                {icon}
              </motion.a>
            ))}
          </div>
          <div className={navStyles.bookingBtnCtn}>
            <HeroButtons
              name="Book a Table"
              href="https://www.quandoo.com.au/place/mikys-italian-89295/widget?aid=146&utm_source=quandoo-partner&utm_medium=widget-link"
              classDynamicStyle={
                navbar
                  ? navStyles.ButtonBookingVisibile
                  : navStyles.ButtonBooking
              }
            />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
