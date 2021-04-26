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
      </div>
      <h1 className="animation__title">kami</h1>
    </section>
    <section className="landing-page__intro">
      <h1>My goal with kami was threefold:</h1>
      <ul>
        <li>To create a boilerplate project for future React applications</li>
        <li>
          To capture UI patterns I have implemeneted many times and provide a
          base design system that is easily adpated
        </li>
        <li>To try new technologies & best practices</li>
      </ul>
    </section>
  </PageLayout>
);

export default LandingPage;
