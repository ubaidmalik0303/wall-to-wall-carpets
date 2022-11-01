import React from "react";
import * as styles from "./styles.module.css";
import HoverCard from "../HoverCard";

const HomeServices = () => {
  return (
    <div className={`${styles.homeServices} themeBgColor container-fluid`}>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-4 col-md-6 p-3">
            <HoverCard />
          </div>
          <div className="col-lg-4 col-md-6 p-3">
            <HoverCard />
          </div>
          <div className="col-lg-4 col-md-6 p-3">
            <HoverCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
