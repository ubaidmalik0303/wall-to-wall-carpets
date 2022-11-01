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

const index = () => {
  return (
    <Layout>
      <Slider />
      <WhatYouGet />
      <SideImage
        image={
          <img
            src="https://i.pinimg.com/736x/9f/83/4c/9f834c1bbb783ce57c8545dd4c7fae3b.jpg"
            width={350}
            height={400}
          />
        }
      >
        <div className="row">
          <div className="col-lg-10 col-md-12">
            <Heading variant="h2">We Provide You The Best Experience</Heading>
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
          <img
            src="https://i.pinimg.com/736x/9f/83/4c/9f834c1bbb783ce57c8545dd4c7fae3b.jpg"
            width={350}
            height={400}
          />
        }
      >
        <div className="row mb-3">
          <div className="col-lg-10 col-md-12">
            <Heading variant="h2">We Provide You The Best Experience</Heading>
          </div>
        </div>
        <div className={`${styles.headingDiscriptionBox}`}>
          <h4>1. Office</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae mollitia non soluta Repudiandae mollitia non soluta
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae mollitia non soluta Repudiandae mollitia non soluta
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae mollitia non soluta Repudiandae mollitia non soluta
          </p>
          <h4>1. Office</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae mollitia non soluta Repudiandae mollitia non soluta
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae mollitia non soluta Repudiandae mollitia non soluta
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae mollitia non soluta Repudiandae mollitia non soluta
          </p>
        </div>
      </SideImage>
      <HomeServices />
      <HomeBottom />
      <CardSlider />
    </Layout>
  );
};

export default index;
