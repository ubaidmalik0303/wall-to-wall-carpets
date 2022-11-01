import React from "react";
import * as styles from "./styles.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "gatsby";

const Button = ({ children, link }) => {
  if (link) {
    return (
      <Link className={styles.themeButton} to={link}>
        {children}
        <FaLongArrowAltRight />
      </Link>
    );
  }

  return (
    <button className={styles.themeButton}>
      {children}
      <FaLongArrowAltRight />
    </button>
  );
};

export default Button;
