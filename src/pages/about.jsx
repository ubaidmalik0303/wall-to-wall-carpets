import React from "react";
import * as styles from "../styles/about.module.css";
import Layout from "../components/Layout";
import Heading from "../components/Heading";
import SideImage from "../components/SideImage";
import { StaticImage } from "gatsby-plugin-image";
import CTA from "../components/CTA"

const about = () => {
  return (
    <Layout>
      <div className={styles.about}>
        <div className="container-fluid themeBgColor">
          <div className="container">
            <div className="row py-5">
              <div className="col-md-10">
                <Heading size={70} variant="h1">
                  About Our Company
                </Heading>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque ut excepturi quae veniam. Maiores neque voluptate
              maxime, aliquid quod cumque itaque pariatur deleniti delectus
              atque quidem officiis sint esse et.Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Doloremque ut excepturi quae veniam.
              Maiores neque voluptate maxime, aliquid quod cumque itaque
              pariatur deleniti delectus atque quidem officiis sint esse
              et.Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque ut excepturi quae veniam. Maiores neque voluptate
              maxime, aliquid quod cumque itaque pariatur deleniti delectus
              atque quidem officiis sint esse et.
            </p>
          </div>
        </div>
        <SideImage
          image={
            <StaticImage
              src="../images/769fa3e2b0f7554a3c8d890fbbdf2eb3.png"
              width={500}
            />
          }
          right
        >
          <Heading variant="h2" size={70}>
            About Company
          </Heading>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            quo assumenda rerum iure sapiente commodi necessitatibus odio
            voluptatibus id magnam aspernatur provident quasi delectus fuga,
            perferendis mollitia quaerat consequatur nisi.Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Quibusdam quo assumenda rerum
            iure sapiente commodi necessitatibus odio voluptatibus id magnam
            aspernatur provident quasi delectus fuga, perferendis mollitia
            quaerat consequatur nisi. Quibusdam quo assumenda rerum iure sapiente
            commodi necessitatibus odio voluptatibus id magnam aspernatur
            provident quasi delectus fuga, perferendis mollitia quaerat
            consequatur nisi.
          </p>
        </SideImage>
        <SideImage
          image={
            <StaticImage
              src="../images/769fa3e2b0f7554a3c8d890fbbdf2eb3.png"
              width={500}
            />
          }
        >
          <Heading variant="h2" size={70}>
            About Company
          </Heading>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            quo assumenda rerum iure sapiente commodi necessitatibus odio
            voluptatibus id magnam aspernatur provident quasi delectus fuga,
            perferendis mollitia quaerat consequatur nisi.Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Quibusdam quo assumenda rerum
            iure sapiente commodi necessitatibus odio voluptatibus id magnam
            aspernatur provident quasi delectus fuga, perferendis mollitia
            quaerat consequatur nisi. Quibusdam quo assumenda rerum iure sapiente
            commodi necessitatibus odio voluptatibus id magnam aspernatur
            provident quasi delectus fuga, perferendis mollitia quaerat
            consequatur nisi.
          </p>
        </SideImage>
        <CTA />
      </div>
    </Layout>
  );
};

export default about;
