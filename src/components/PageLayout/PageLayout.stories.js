import React from "react";

import PageLayoutComponent from "./index";

export default {
  title: "Usage/Page Layout",
  component: PageLayoutComponent,
};

const Template = (args) => <PageLayoutComponent {...args} />;

export const PageLayout = Template.bind({});
PageLayout.args = {
  children: <h1>Page Content Here</h1>,
};
