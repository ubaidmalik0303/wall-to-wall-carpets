import React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/contact.module.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaLocationArrow,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Form from "../components/Form";

const contact = () => {
  return (
    <Layout>
      <div className={`${styles.contact} container-fluid themeBgColor`}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="mt-5 mb-3">Contact Info</h2>
              <div className={styles.contactDetails}>
                <div>
                  <FaEnvelope />
                  <span>Info@walltowallcarpets.ae</span>
                </div>
                <div>
                  <FaPhoneAlt />
                  <span>+971 55 472 2980</span>
                </div>
                <div>
                  <FaWhatsapp />
                  <span>+971 55 472 2980</span>
                </div>
                <div>
                  <FaLocationArrow size={60} />
                  <span>
                    Sheikh Zayed Road Al Qouz First Behind Bmw/Agmc 4th Street
                    Showroom No 33
                  </span>
                </div>
                <div className={styles.socialIcons}>
                  <a href="">
                    <FaFacebookF />
                  </a>
                  <a href="">
                    <FaTwitter />
                  </a>
                  <a href="">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="mt-5 mb-3">Get In Touch With Us</h2>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default contact;
