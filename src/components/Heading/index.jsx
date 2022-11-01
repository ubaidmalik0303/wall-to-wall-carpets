import React from "react";
import * as styles from "./styles.module.css";

const index = ({ variant, children }) => {
  return (
    <div className={styles.headingBox}>
      <div data-aos="fade-right" data-aos-delay={100}></div>
      {!variant && <h1 data-aos="fade-right">{children}</h1>}
      {variant === "h1" && <h1 data-aos="fade-right">{children}</h1>}
      {variant === "h2" && <h2 data-aos="fade-right">{children}</h2>}
      {variant === "h3" && <h3 data-aos="fade-right">{children}</h3>}
      {variant === "h4" && <h4 data-aos="fade-right">{children}</h4>}
      {variant === "h5" && <h5 data-aos="fade-right">{children}</h5>}
      {variant === "h6" && <h6 data-aos="fade-right">{children}</h6>}
    </div>
  );
};

export default index;
