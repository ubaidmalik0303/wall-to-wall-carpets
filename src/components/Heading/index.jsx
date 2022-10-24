import React from "react";
import * as styles from "./styles.module.css";

const index = ({ variant, children }) => {
  return (
    <div className={styles.headingBox}>
      <div></div>
      {variant === "h1" && <h1>{children}</h1>}
      {variant === "h2" && <h2>{children}</h2>}
      {variant === "h3" && <h3>{children}</h3>}
      {variant === "h4" && <h4>{children}</h4>}
      {variant === "h5" && <h5>{children}</h5>}
      {variant === "h6" && <h6>{children}</h6>}
    </div>
  );
};

export default index;
