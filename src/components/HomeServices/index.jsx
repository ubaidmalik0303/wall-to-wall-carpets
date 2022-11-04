import React from "react";
import * as styles from "./styles.module.css";
import IconCard from "../IconCard";
import Heading from "../Heading";
import SisalIcon from "../../images/sisal-icon.png";
import ExhibitionIcon from "../../images/exhibition-icon.png";
import MosqueIcon from "../../images/mosque-icon.png";
import BedroomIcon from "../../images/bedroom-icon.png";
import LivingroomIcon from "../../images/livingroom-icon.png";
import OfficeIcon from "../../images/office-icon.png";

const HomeServices = () => {
  const services = [
    {
      name: "Sisal Carpets",
      link: "/wall-to-wall-carpets/sisal-carpets",
      icon: SisalIcon,
    },
    {
      name: "Office Carpets",
      link: "/wall-to-wall-carpets/office-carpets",
      icon: OfficeIcon,
    },
    {
      name: "Bedroom Carpets",
      link: "/wall-to-wall-carpets/bedroom-carpets",
      icon: BedroomIcon,
    },
    {
      name: "Living Room Carpets",
      link: "/wall-to-wall-carpets/living-room-carpets",
      icon: LivingroomIcon,
    },
    {
      name: "Mosque Carpets",
      link: "/wall-to-wall-carpets/mosque-carpets",
      icon: MosqueIcon,
    },
    {
      name: "Exhibition Carpets",
      link: "/wall-to-wall-carpets/exhibition-carpets",
      icon: ExhibitionIcon,
    },
  ];

  return (
    <div className={`${styles.homeServices} themeBgColor container-fluid py-5`}>
      <div className="container">
        <div className="py-3">
          <Heading>Our Wall To Wall Carpets</Heading>
        </div>
        <div className="row justify-content-center align-items-center">
          {services.map((val, i) => {
            return (
              <div key={i} data-aos="zoom-in" className="col-lg-4 col-md-6 p-3">
                <IconCard name={val.name} link={val.link} icon={val.icon} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
