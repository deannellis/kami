import React from "react";

import PageLayout from "../components/PageLayout";

const HomePage = () => (
  <PageLayout>
    <h1>Elements</h1>
    <h2>Buttons</h2>
    <div className="buttons">
      <button className="button" type="button">
        Default
      </button>
      <button className="button--primary" type="button">
        Primary
      </button>
      <button className="button--outline" type="button">
        Outline
      </button>
      <button className="button--no-style" type="button">
        No Style
      </button>
    </div>
  </PageLayout>
);

export default HomePage;
