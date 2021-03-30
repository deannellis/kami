import React from "react";

import IconComponent from "./index";

export default {
  title: "Elements/Icons/Icon",
  component: IconComponent,
};

const Template = (args) => <IconComponent {...args} />;

export const Icon = Template.bind({});
Icon.args = {
  title: "Moon Icon",
  size: 64,
};
