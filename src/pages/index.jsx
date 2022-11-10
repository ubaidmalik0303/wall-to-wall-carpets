import React from "react";
import * as styles from "../styles/index.module.css";
import Layout from "../components/Layout";
import SideImage from "../components/SideImage";
import Slider from "../components/Slider";
import WhatYouGet from "../components/WhatYouGet";
import Heading from "../components/Heading";
import Button from "../components/Button";
import CardSlider from "../components/CardSlider";
import HomeBottom from "../components/HomeBottom";
import HomeServices from "../components/HomeServices";
import ContentByNumber from "../components/ContentByNumber";
import Gallery from "../components/Gallery";
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

const index = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <Slider data={data} />
      <WhatYouGet />
      <SideImage
        image={
          <StaticImage
            src="../images/sisal-carpets-dubai.jpg"
            width={350}
            height={400}
            objectFit="contain"
          />
        }
      >
        <div className="row">
          <div className="col-lg-10 col-md-12">
            <Heading size={40} variant="h2">We Provide You The Best Experience</Heading>
          </div>
        </div>
        <p className={styles.sideImageText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          ipsam aspernatur aut qui consequatur commodi, quia autem esse quos
          perferendis voluptate minus suscipit.
        </p>
        <div className={styles.ourNumbers}>
          <div>
            <h4>543</h4>
            <span>Project Completed</span>
          </div>
          <div>
            <h4>500</h4>
            <span>Satisfied Users</span>
          </div>
          <div>
            <h4>543</h4>
            <span>Satisfied Users</span>
          </div>
        </div>
        <div className="py-4">
          <Button link="/">Explore Now</Button>
        </div>
      </SideImage>
      <SideImage
        right
        image={
          <StaticImage
            src="../images/carpets-dubai.jpg"
            width={350}
            height={400}
            objectFit="contain"
          />
        }
      >
        <div className="row mb-3">
          <div className="col-lg-10 col-md-12">
            <Heading size={40} variant="h2">We Provide You The Best Experience</Heading>
            <ContentByNumber />
          </div>
        </div>
      </SideImage>
      <HomeServices />
      <HomeBottom />
      <CardSlider />
    </Layout>
  );
};

export const query = graphql`
  query {
    slider: allFile(filter: { relativeDirectory: { eq: "slider" } }) {
      edges {
        node {
          id
          base
          publicURL
          childImageSharp {
            gatsbyImageData(
              transformOptions: { fit: COVER, cropFocus: CENTER }
              placeholder: BLURRED
              webpOptions: { quality: 50 }
            )
          }
        }
      }
    }
  }
`;

export default index;
