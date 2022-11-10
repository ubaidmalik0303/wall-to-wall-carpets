import React from "react";
import * as styles from "./styles.module.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={`container-fluid themeBgColor py-3`}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            
          </div>
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
        </div>
      </div>
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
