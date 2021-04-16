import React from "react";

import Toggle from "./index";

export default {
  title: "Modules/Toggle",
  component: Toggle,
  argTypes: { onToggleChange: { action: "toggled" } },
};

const Template = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: true,
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  checked: true,
  onIcon: "Sun Icon",
  offIcon: "Moon Icon",
};
