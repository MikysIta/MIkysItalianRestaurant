import React from "react";
import footerStyles from "../../styles/footer.module.css";

const Footer = () => {
  return (
    <div className={footerStyles.ctnFooter}>
      <div className={footerStyles.ctnFooterInner}>
        <p>
          Copyright © 2021 <span>Mikys Italian Restaurant.</span> All rights
          reserved, Developed and Designed by{" "}
          <a href="https://www.linkedin.com/in/michele-merola/" target="_blank">
            Michele Merola
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
