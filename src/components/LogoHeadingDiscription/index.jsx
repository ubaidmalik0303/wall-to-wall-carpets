import React from "react";
import * as styles from "./styles.module.css";
import { FiAward } from "react-icons/fi";

const LogoHeadingDiscription = ({ icon, heading, discription }) => {
  return (
    <div className={styles.logoHeadingDiscription}>
      <div className={styles.icon}>{icon && icon}</div>
      <div className={styles.headingDiscription}>
        <h3>{heading && heading}</h3>
        <p>{discription && discription}</p>
      </div>
    </div>
  );
};

export default LogoHeadingDiscription;
