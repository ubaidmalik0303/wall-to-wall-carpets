import React from "react";
import * as styles from "./styles.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaLocationArrow,
} from "react-icons/fa";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer className={`container-fluid ${styles.footer} themeBgColor py-3`}>
      <div className="container pt-5">
        <div className="row">
          <div data-aos="fade-up" className="col-md-3 py-md-0 py-4">
            <h5 className={styles.logoText}>
              <span>C</span>arpets
            </h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              repellendus ut harum praesentium amet expedita, officiis neque
              autem laboriosam molestiae tempora?
            </p>
          </div>
          <div data-aos="fade-up" className="col-md-3 py-md-0 py-4">
            <h5>Quick Links</h5>
            <ul>
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>About</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
              <li>
                <Link>Sitemap</Link>
              </li>
            </ul>
          </div>
          <div data-aos="fade-up" className="col-md-3 py-md-0 py-4">
            <h5>Services</h5>
            <ul>
              <li>
                <Link>Sisal Carpets</Link>
              </li>
              <li>
                <Link>Bedroom Carpets</Link>
              </li>
              <li>
                <Link>Office Carpets</Link>
              </li>
              <li>
                <Link>Mosque Carpets</Link>
              </li>
            </ul>
          </div>
          <div data-aos="fade-up" className="col-md-3 py-md-0 py-4">
            <h5>Contact</h5>
            <div className={styles.footerContact}>
              <div>
                <FaPhoneAlt />
                <a href="">+971 55 472 2980</a>
              </div>
              <div>
                <FaWhatsapp />
                <a href="">+971 55 472 2980</a>
              </div>
              <div>
                <FaEnvelope />
                <a href="">info@walltowallcarpets.ae</a>
              </div>
              <div>
                <FaLocationArrow />
                <a href="">
                  Sheikh Zayed Road Al Qouz First Behind Bmw/Agmc 4th Street
                  Showroom No 33
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.footerBottom} container`}>
        <span>FixitDesign. Designed By Ubaid Malik</span>
        <div className={styles.footerSocialIcons}>
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
    </footer>
  );
};

export default Footer;
