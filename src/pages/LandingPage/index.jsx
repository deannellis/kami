import React from "react";

import PageLayout from "../../components/PageLayout";

const LandingPage = () => (
  <PageLayout layout="no-pad">
    <section className="landing-page__hero">
      <div className="animation">
        <div className="animation__triangle-01" />
        <div className="animation__triangle-02" />
        <div className="animation__triangle-04" />
        <div className="animation__triangle-03" />
        <div className="animation__triangle-05" />
        <div className="animation__rectangle" />
        {/* <h1>kami</h1> */}
      </div>
      <h1 className="animation__title">kami</h1>
    </section>
    <section className="landing-page__intro">
      <p>
        Kami started as a boilerplate for single page applications. I also
        wanted to
      </p>
    </section>
  </PageLayout>
);

export default LandingPage;
