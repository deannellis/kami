import React from "react";

import Toggle from "./index";

export default {
  title: "Modules/Toggle",
  component: Toggle,
};

const Template = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: true,
  onToggleChange: () => {
    console.log("Toggled");
  },
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  checked: true,
  onToggleChange: () => {
    console.log("Toggled");
  },
  onIcon: "Sun Icon",
  offIcon: "Moon Icon",
};
