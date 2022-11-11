import React from "react";
import * as styles from "./styles.module.css";

const SideImage = ({ children, image, right }) => {
  return (
    <div className={`container-fluid py-5 themeBgColor ${styles.sideImage}`}>
      <div className="container h-100">
        <div className="row align-items-center h-100">
          {right ? (
            <>
              <div data-aos="fade-right" className="col-lg-6 py-3">
                {children}
              </div>
              <div data-aos="fade-left" className="col-lg-6 py-3 text-center">
                {image}
              </div>
            </>
          ) : (
            <>
              <div data-aos="fade-right" className="col-lg-6 py-3 text-center">
                {image}
              </div>
              <div data-aos="fade-left" className="col-lg-6 py-3">
                {children}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideImage;
