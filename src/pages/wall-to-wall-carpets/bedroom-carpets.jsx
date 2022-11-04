import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../../components/Layout";
import * as styles from "../../styles/bedroom-carpets.module.css";

const BedroomCarpets = () => {
  return (
    <Layout>
      <div className={`container-fluid ${styles.servicesPage} themeBgColor`}>
        <StaticImage imgClassName={`${styles.myImage}`} src="../../images/bedroom-icon.png" width={150} height={150} />
        <h1>Bedroom Carpets</h1>
      </div>
    </Layout>
  );
};

export default BedroomCarpets;
