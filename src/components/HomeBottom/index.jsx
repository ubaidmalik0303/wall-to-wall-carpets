import React from "react";
import * as styles from "./styles.module.css";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaLocationArrow,
} from "react-icons/fa";

const HomeBottom = () => {
  return (
    <div className="container-fluid py-5 themeBgColor">
      <div
        data-aos="zoom-in"
        data-aos-duration={500}
        className={`${styles.homeBottom} container py-4`}
      >
        <h3 className="text-center">Wall To Wall Carpets</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
          laboriosam. Accusamus est quidem repellat illo laboriosam debitis
          consequatur reiciendis eius quia velit! Qui animi voluptate minus
          beatae, atque in. Pariatur. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Veniam, laboriosam. Accusamus est quidem repellat
          illo laboriosam debitis consequatur reiciendis eius quia velit! Qui
          animi voluptate minus beatae, atque in. Pariatur.
        </p>
        <div className={styles.homeBottomContactIcons}>
          <a href="">
            <FaPhoneAlt />
            +971 55 472 2980
          </a>
          <a href="">
            <FaWhatsapp />
            +971 55 472 2980
          </a>
          <a href="">
            <FaEnvelope />
            info@walltowallcarpets.ae
          </a>
          <a href="">
            <FaLocationArrow />
            info@walltowallcarpets.ae
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeBottom;
