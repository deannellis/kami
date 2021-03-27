import React from "react";

import HeaderComponent from "./index";

// const location
export default {
  title: "Elements/Header",
  component: HeaderComponent,
};

const Template = (args) => <HeaderComponent {...args} />;

export const Header = Template.bind({});
Header.args = {
  currentPath: "/",
};
