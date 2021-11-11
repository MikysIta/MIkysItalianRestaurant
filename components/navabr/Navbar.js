import React, { useState, useEffect } from "react";
import Link from "next/link";

import navStyles from "../../styles/Nav.module.css";
import { Social } from "../../utility/util";

import HeroButtons from "../hero/HeroButtons";
import { motion } from "framer-motion";

import MediaQuery from "react-responsive";
const navigation = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "#menues" },
  { name: "Functions", href: "#function" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contacts" },
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
            className={
              toggle
                ? `${navStyles.navButton} ${navStyles.navIconOpen}`
                : `${navStyles.navButton}`
            }
          >
            <svg
              width="48px"
              height="48px"
              viewBox="0 0 48 48"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <line x1="0" y1="17" x2="48" y2="17" stroke-width="1" />
                <line x1="0" y1="31" x2="48" y2="31" stroke-width="1" />
              </g>

              <g>
                <line x1="0" y1="24" x2="48" y2="24" stroke-width="1" />
                <line x1="0" y1="24" x2="48" y2="24" stroke-width="1" />
              </g>
            </svg>
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
          <MediaQuery minWidth={859}>
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
          </MediaQuery>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
