import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const PageLayout = ({ children, layout }) => {
  return (
    <>
      <Header />
      <main className={!!layout ? `page-layout--${layout}` : "page-layout"}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default PageLayout;
