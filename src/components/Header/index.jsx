import React, { useState } from "react";
import * as headerstyles from "./styles.module.css";
import { FiArrowDown } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { Link } from "gatsby";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleShowNav = () => {
    show ? setShow(false) : setShow(true);
  };

  return (
    <div className={`${headerstyles.header} themeBgColor`}>
      <Link to="/" className={headerstyles.logoText}>
        <span>C</span>arpets
      </Link>
      <FaBars size={25} className={headerstyles.bars} onClick={handleShowNav} />
      <ul
        className={`${headerstyles.navbar} ${
          show ? headerstyles.showNav : headerstyles.hideNav
        }`}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/wall-to-wall-carpets">Wall To Wall Carpets</Link>
          <FiArrowDown />
          <ul>
            <li>
              <Link to="/wall-to-wall-carpets/office-carpets">
                Office Carpets
              </Link>
            </li>
            <li>
              <Link to="/wall-to-wall-carpets/sisal-carpets">
                Sisal Carpets
              </Link>
            </li>
            <li>
              <Link to="/wall-to-wall-carpets/bedroom-carpets">
                Bedroom Carpets
              </Link>
            </li>
            <li>
              <Link to="/wall-to-wall-carpets/living-room-carpets">
                Living Room Carpets
              </Link>
            </li>
            <li>
              <Link to="/wall-to-wall-carpets/mosque-carpets">
                Mosque Carpets
              </Link>
            </li>
            <li>
              <Link to="/wall-to-wall-carpets/exhibition-carpets">
                Exhibition Carpets
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
