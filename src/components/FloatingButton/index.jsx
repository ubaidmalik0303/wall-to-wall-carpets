import React, { useState } from "react";
import "./floatingButton.css";
import {
  FaPhone,
  FaWhatsapp,
  FaMailBulk,
  FaFacebook,
  FaPhoneAlt,
} from "react-icons/fa";

const FloatingButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <menu className={`${open && "open"}`}>
      <a href="#" class="action">
        <FaPhone />
      </a>
      <a href="#" class="action">
        <FaWhatsapp />
      </a>
      <a href="#" class="action">
        <FaFacebook />
      </a>
      <a href="#" class="action">
        <FaMailBulk />
      </a>
      <a
        class="trigger"
        onClick={() => (open ? setOpen(false) : setOpen(true))}
      >
        <FaPhoneAlt />
      </a>
    </menu>
  );
};

export default FloatingButton;
