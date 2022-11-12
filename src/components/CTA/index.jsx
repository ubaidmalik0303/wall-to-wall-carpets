import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import * as styles from "./styles.module.css";

const CTA = () => {
  return (
    <div className={`container-fluid themeBgColorSecond py-5`}>
      <div className="container">
        <div className={styles.cta}>
          <p data-aos="slide-right">Lorem, ipsum dolor sit amet consectetur.</p>
          <a data-aos="slide-left" className="my-md-0 my-5" href="">
            <button>
              <FaPhoneAlt />
              Call Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTA;
