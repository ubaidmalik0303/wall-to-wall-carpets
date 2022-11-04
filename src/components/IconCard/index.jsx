import React from "react";
import * as styles from "./styles.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "gatsby";

const IconCard = ({ name, link, icon }) => {
  return (
    <div className={styles.iconCard}>
      <img
        src={
          icon
            ? icon
            : "https://cdn-icons-png.flaticon.com/512/5525/5525080.png"
        }
        alt=""
      />
      <h4>{name && name}</h4>
      <p>
        Lorem ipsum dolor voluptatem ullam voluptas ipsa inventore sunt impedit
        enim qui iusto exercitationem beatae reprehenderit?
      </p>
      <Link to={link && link}>
        Read More <FaLongArrowAltRight />
      </Link>
    </div>
  );
};

export default IconCard;
