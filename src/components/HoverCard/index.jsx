import React from "react";
import * as styles from "./styles.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";

const HoverCard = () => {
  return (
    <div className={`${styles.hoverCard} themeBgColorSecond`}>
      <img
        src="https://i.pinimg.com/736x/9f/83/4c/9f834c1bbb783ce57c8545dd4c7fae3b.jpg"
        alt=""
      />
      <h4>Sisal Carpets</h4>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in
        illum, accusantium ullam corporis molestiae pariatur reiciendis iure ex
        ea architecto beatae quaerat unde? Assumenda corrupti adipisci nisi
        autem quasi!
      </p>
      <FaLongArrowAltRight />
    </div>
  );
};

export default HoverCard;
