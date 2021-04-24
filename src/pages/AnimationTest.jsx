import React from "react";
import { motion } from "framer-motion";

import PageLayout from "../components/PageLayout";

const AnimationTest = () => (
  <PageLayout>
    {/* <div className="animation">
      <div className="animation__top-half" />
      <div className="animation__bottom-half" />
    </div> */}
    <div className="animation">
      <div className="triangle-01" />
      <div className="triangle-02" />
      <div className="triangle-04" />
      <div className="triangle-03" />
      <div className="triangle-05" />
      <div className="rectangle" />
    </div>
  </PageLayout>
);

export default AnimationTest;
