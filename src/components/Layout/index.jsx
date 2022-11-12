import React, { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FloatingButton from "../FloatingButton";

const Layout = ({ children }) => {
  let AOS;
  useEffect(() => {
    const AOS = require("aos");
    AOS.init({
      duration: 700,
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
      <FloatingButton />
    </div>
  );
};

export default Layout;
