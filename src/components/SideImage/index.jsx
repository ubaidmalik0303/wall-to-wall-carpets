import React from "react";

const SideImage = ({ children, image, right }) => {
  return (
    <div className={`container-fluid py-5 themeBgColor`}>
      <div className="container">
        <div className="row align-items-center">
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
