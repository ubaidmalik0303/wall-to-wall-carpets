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
      <h1 className={headerstyles.logoText}>
        <span>C</span>arpets
      </h1>
      <FaBars size={25} className={headerstyles.bars} onClick={handleShowNav} />
      <ul
        className={`${headerstyles.navbar} ${show ? headerstyles.showNav : headerstyles.hideNav}`}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Serices</Link>
          <FiArrowDown />
          <ul>
            <li>
              <Link to="/">Office Wall To Wall Carpets</Link>
            </li>
            <li>
              <Link to="/">Room</Link>
            </li>
            <li>
              <Link to="/">Mosque</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
