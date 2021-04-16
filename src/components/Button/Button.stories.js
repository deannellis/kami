import React from "react";

import Button from "./index";

export default {
  component: Button,
  title: "Elements/Button",
  argTypes: { onClick: { action: "button clicked" } },
  decorators: [
    (Story) => (
      <div className="buttons">
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default",
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  variant: "primary",
};

export const Outline = Template.bind({});
Outline.args = {
  children: "Outline",
  variant: "outline",
};

export const NoStyle = Template.bind({});
NoStyle.args = {
  children: "No Style",
  variant: "no-style",
};
