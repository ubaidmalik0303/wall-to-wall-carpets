import React, { useState } from "react";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import Heading from "../Heading";
import { Modal } from "react-bootstrap";
import * as styles from "./styles.module.css";
import { FaSearchPlus } from "react-icons/fa";

const Gallery = ({ data }) => {
  const [image, setImage] = useState("");
  const [show, setShow] = useState(false);

  const handleModal = (url) => {
    setImage(url);
    show ? setShow(false) : setShow(true);
  };

  return (
    <div className="row">
      <Modal show={show} onHide={handleModal}>
        <Modal.Header closeButton />
        <Modal.Body>
          <img src={image} width="100%" />
        </Modal.Body>
      </Modal>
      {data.map(({ node }) => {
        const alt = node.base.split(".")[0];
        return (
          <div key={node.id} className="col-md-3 col-sm-6 p-3">
            <div
              data-aos="fade-up"
              className={styles.imageContainer}
              onClick={() => handleModal(node.publicURL)}
            >
              <div className={styles.hoverIcon}>
                <FaSearchPlus />
              </div>
              <GatsbyImage
                image={getImage(node)}
                alt={alt}
                className={styles.imageClass}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
