import React from "react";

import PageLayout from "../components/PageLayout";

const HomePage = () => {
  return (
    <PageLayout>
      <h1>Elements</h1>
      <h2>Buttons</h2>
      <div className="buttons">
        <button className="button">Default</button>
        <button className="button--primary">Primary</button>
        <button className="button--outline">Outline</button>
        <button className="button--no-style">No Style</button>
      </div>
    </PageLayout>
  );
};

export default HomePage;
