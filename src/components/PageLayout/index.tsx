import React from "react";
import { useRouteMatch } from "react-router-dom";

import Footer from "../Footer";
import Header from "../Header";

type PageLayoutProps = {
  children: React.ReactNode;
  layout?: string;
};
const PageLayout = ({ children, layout }: PageLayoutProps) => {
  const match = useRouteMatch();
  return (
    <>
      <Header currentPath={match.path} />
      <main className={!!layout ? `page-layout--${layout}` : "page-layout"}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default PageLayout;
