import React from "react";
import Layout from "../components/Layout";
import Slider from "../components/Slider";
import WhatYouGet from "../components/WhatYouGet";

const index = () => {
  return (
    <Layout>
      <Slider />
      <WhatYouGet />
    </Layout>
  );
};

export default index;
