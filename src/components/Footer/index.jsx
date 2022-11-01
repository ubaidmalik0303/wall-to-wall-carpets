import React from "react";
import * as styles from "./styles.module.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={`container-fluid themeBgColor py-3`}>
      <div className={`${styles.footer} container`}>
        <span>FixitDesign. Designed By Ubaid Malik</span>
        <div className={styles.footerSocialIcons}>
          <a href="">
            <FaFacebookF />
          </a>
          <a href="">
            <FaTwitter />
          </a>
          <a href="">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
