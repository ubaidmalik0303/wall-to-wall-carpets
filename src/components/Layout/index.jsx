import React, { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Layout = ({ children }) => {
  let AOS;
  useEffect(() => {
    const AOS = require("aos");
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });

  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
