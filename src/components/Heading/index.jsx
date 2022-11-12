import React from "react";
import * as styles from "./styles.module.css";

const index = ({ variant, children, size }) => {
  return (
    <div className={styles.headingBox}>
      <div data-aos="slide-right" data-aos-delay={100}></div>
      {!variant && (
        <h1 style={{ fontSize: size }} data-aos="slide-right">
          {children}
        </h1>
      )}
      {variant === "h1" && <h1 style={{ fontSize: size }} data-aos="slide-right">{children}</h1>}
      {variant === "h2" && <h2 style={{ fontSize: size }} data-aos="slide-right">{children}</h2>}
      {variant === "h3" && <h3 style={{ fontSize: size }} data-aos="slide-right">{children}</h3>}
      {variant === "h4" && <h4 style={{ fontSize: size }} data-aos="slide-right">{children}</h4>}
      {variant === "h5" && <h5 style={{ fontSize: size }} data-aos="slide-right">{children}</h5>}
      {variant === "h6" && <h6 style={{ fontSize: size }} data-aos="slide-right">{children}</h6>}
    </div>
  );
};

export default index;
