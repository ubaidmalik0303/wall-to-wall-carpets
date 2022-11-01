import React from "react";
import * as styles from "./styles.module.css";
import { FaShieldAlt, FaAward, FaTruck } from "react-icons/fa";
import LogoHeadingDiscription from "../LogoHeadingDiscription";
import Heading from "../Heading";

const WhatYouGet = () => {
  const Features = [
    {
      icon: <FaAward />,
      heading: "Best Quality",
      discription:
        "Lorem, ipsum dolor sit amet consectetur illo consequatur doloremque quam impedit similique nobis.",
    },
    {
      icon: <FaTruck />,
      heading: "Free Shipping",
      discription:
        "Lorem, ipsum dolor sit amet consectetur illo consequatur doloremque quam impedit similique nobis.",
    },
    {
      icon: <FaShieldAlt />,
      heading: "Warranty",
      discription:
        "Lorem, ipsum dolor sit amet consectetur illo consequatur doloremque quam impedit similique nobis.",
    },
  ];

  return (
    <div className={`container-fluid themeBgColor ${styles.WhatYouGet}`}>
      <div className="container">
        <div className="row pt-5 pb-4">
          <div
            className="col-md-8"
            data-aos="fade-zoom-in"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <Heading variant="h2">
              Benefits You Get When Using Our Services
            </Heading>
          </div>
        </div>
        <div className="row">
          {Features.map((val, i) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-delay={i * 200}
                key={i}
                className="col-md-4 px-2 py-3"
              >
                <LogoHeadingDiscription
                  icon={val.icon}
                  heading={val.heading}
                  discription={val.discription}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatYouGet;
