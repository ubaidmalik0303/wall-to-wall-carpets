import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../../components/Layout";
import * as styles from "../../styles/services-page.module.css";
import SideImage from "../../components/SideImage";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import { FaCheckCircle } from "react-icons/fa";
import Gallery from "../../components/Gallery";
import { graphql } from "gatsby";
import WorkProcess from "../../components/WorkProcess";
import Form from "../../components/Form";
import ContentByNumber from "../../components/ContentByNumber";

const BedroomCarpets = ({ data }) => {
  const imagesData = data.gallery.edges;

  return (
    <Layout>
      <div className={`${styles.servicesPage} themeBgColor`}>
        <div className="container">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <StaticImage
              src="../../images/bedroom-icon.png"
              width={150}
              height={150}
            />
            <h1>Bedroom Carpets</h1>
          </div>
        </div>
        <SideImage
          image={
            <StaticImage
              src="../../images/bedroom-carpet.jpg"
              width={500}
              height={500}
            />
          }
        >
          <div className="py-4">
            <Heading size={"4rem"} variant="h2">
              Bedroom Carpet
            </Heading>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            perferendis quibusdam beatae, eos veritatis minus, quod tenetur
            eveniet aperiam repellat quo quia enim laborum debitis. Perferendis
            quibusdam cupiditate illum aperiam!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Doloribus perferendis quibusdam
            beatae, eos veritatis minus, quod tenetur eveniet aperiam repellat
            quo quia enim laborum debitis. Perferendis quibusdam cupiditate
            illum aperiam!
          </p>
          <Button>Call Us For A Visit</Button>
        </SideImage>

        <div className="container py-5">
          <div className="row py-4">
            <div className="col-md-10">
              <Heading variant="h2" size={70}>
                Bedroom Carpets Dubai
              </Heading>
            </div>
          </div>
          <p data-aos="fade-in">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            sequi doloremque sapiente, necessitatibus beatae illo. Asperiores
            debitis, corrupti consequatur enim magnam maxime impedit. Quasi
            soluta ducimus suscipit quos harum architecto! Inventore alias magni
            id, natus beatae voluptatem fugiat quas? Error eius optio
            voluptates, incidunt voluptas, officia amet corporis quam
            repellendus perferendis nisi voluptate consequuntur! Alias inventore
            possimus cupiditate a sint? Ea tempore ad voluptatibus minima atque
            recusandae optio ab placeat officia mollitia modi nihil eos, a
            sapiente iste ipsa nemo ratione debitis consequuntur suscipit. Enim
            molestias nobis assumenda omnis praesentium. Sit fugiat minus eius
            optio fugit quod voluptatem sed explicabo veniam inventore
            accusantium esse, voluptates, eveniet blanditiis quaerat! Assumenda
            itaque eos, facilis fugiat ducimus temporibus dolore reprehenderit
            incidunt nostrum hic. Quidem illo placeat praesentium magni optio,
            quas, cupiditate corporis, illum ab similique reprehenderit tempora
            fugit. Officia repudiandae asperiores magnam nemo ipsa. Totam, nobis
            praesentium sequi atque sunt maiores cupiditate amet.
          </p>
        </div>

        <SideImage
          right
          image={
            <StaticImage
              src="../../images/bedroom-carpet (2).jpg"
              width={500}
              height={500}
            />
          }
        >
          <div className="py-4">
            <Heading size={"4rem"} variant="h2">
              Bedroom Carpet
            </Heading>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            perferendis quibusdam beatae, eos veritatis minus, quod tenetur
            eveniet aperiam repellat quo quia enim laborum debitis. Perferendis
            quibusdam cupiditate illum aperiam!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Doloribus perferendis quibusdam
            beatae, eos veritatis minus, quod tenetur eveniet aperiam repellat
            quo quia enim laborum debitis. Perferendis quibusdam cupiditate
            illum aperiam!
          </p>
        </SideImage>
        <div className="themeBgColorSecond py-5">
          <div data-aos="fade-up" className="container text-center">
            <FaCheckCircle color="white" size={60} />
            <h3 className="my-4">Why Choose Bedroom Carpets</h3>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              eius, alias id incidunt odio ad suscipit, a quaerat facere
              laboriosam accusamus vero. Quo rem inventore quisquam tempore,
              voluptatum magni aut? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Atque eius, alias id incidunt odio ad suscipit,
              a quaerat facere laboriosam accusamus vero. Quo rem inventore
              quisquam tempore, voluptatum magni aut?
            </p>
            <WorkProcess />
          </div>
        </div>
        <div className="container">
          <div className="row py-5">
            <div className="col-md-10">
              <Heading size={"4rem"} variant="h4">
                Bedroom Carpets Gallery
              </Heading>
            </div>
          </div>
          <Gallery data={imagesData} />
        </div>
        <div className="container py-5">
          <div className="col-md-10">
            <Heading size={"4rem"} variant="h4">
              Contact For Book Appointment
            </Heading>
          </div>
          <div className="row py-5 justify-content-center">
            <div data-aos="fade-right" className="col-md-6 py-md-0 py-4">
              <ContentByNumber />
            </div>
            <div data-aos="fade-left" className="col-md-6">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    gallery: allFile(
      filter: { relativeDirectory: { eq: "gallery/Bedroom Carpets" } }
    ) {
      edges {
        node {
          id
          base
          publicURL
          childImageSharp {
            gatsbyImageData(
              height: 500
              width: 500
              transformOptions: { fit: COVER }
              placeholder: BLURRED
              webpOptions: { quality: 50 }
            )
          }
        }
      }
    }
  }
`;

export default BedroomCarpets;
