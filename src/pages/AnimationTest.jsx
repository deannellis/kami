import React from "react";

import PageLayout from "../components/PageLayout";

const AnimationTest = () => (
  <PageLayout>
    {/* <div className="animation">
      <div className="animation__top-half" />
      <div className="animation__bottom-half" />
    </div> */}
    <div className="animation">
      <div className="animation__triangle-01" />
      <div className="animation__triangle-02" />
      <div className="animation__triangle-04" />
      <div className="animation__triangle-03" />
      <div className="animation__triangle-05" />
      <div className="animation__rectangle" />
    </div>
  </PageLayout>
);

export default AnimationTest;
