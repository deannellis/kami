import React from "react";
import Header from "../Header";

const PageLayout = ({ children, layout }) => {
  return (
    <>
      <Header />
      <main className={!!layout ? `page-layout--${layout}` : "page-layout"}>
        {children}
      </main>
      <footer>footer</footer>
    </>
  );
};

export default PageLayout;
