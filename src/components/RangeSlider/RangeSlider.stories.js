import React from "react";

import RangeSliderComponent from "./index";

export default {
  title: "Elements/Range Slider",
  component: RangeSliderComponent,
  argTypes: { onSliderUpdate: { action: "slider updated" } },
};

const Template = (args) => <RangeSliderComponent {...args} />;
export const RangeSlider = Template.bind({});
RangeSlider.args = {
  min: 0,
  max: 100,
  value: 50,
};
