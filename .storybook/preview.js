import "../src/styles/styles.scss";
import React from "react";
import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router";

addDecorator((story) => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  // backgrounds: {
  //   values: [
  //     { name: "red", value: "#f00" },
  //     { name: "green", value: "#0f0" },
  //   ],
  // },
};
