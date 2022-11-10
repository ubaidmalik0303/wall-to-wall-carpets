import React from "react";
import * as styles from "./styles.module.css";

const index = () => {
  return (
    <form action="" className={styles.contactForm}>
      <input type="text" placeholder="Your Name" />
      <input type="number" placeholder="Phone No" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Your Message" cols="30" rows="10"></textarea>
      <input type="submit" value="Send Your Message" />
    </form>
  );
};

export default index;
