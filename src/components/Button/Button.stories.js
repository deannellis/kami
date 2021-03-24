import React from "react";

import Button from "./index";

export default {
  component: Button,
  title: "Button",
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
  onClick: () => {
    console.log("default button clicked");
  },
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  onClick: () => {
    console.log("primary button clicked");
  },
  variant: "primary",
};

export const Outline = Template.bind({});
Outline.args = {
  children: "Outline",
  onClick: () => {
    console.log("outline button clicked");
  },
  variant: "outline",
};

export const NoStyle = Template.bind({});
NoStyle.args = {
  children: "No Style",
  onClick: () => {
    console.log("no style button clicked");
  },
  variant: "no-style",
};
