import React from "react";
import { Formik, Form } from "formik";

import CheckboxComponent from "./index";

export default {
  title: "Modules/Checkbox",
  component: CheckboxComponent,
  decorators: [
    (Story) => (
      <Formik initialValues={{ sample: false }}>
        <Form>
          <Story />
        </Form>
      </Formik>
    ),
  ],
};

const Template = (args) => <CheckboxComponent {...args} />;

export const Checkbox = Template.bind({});
Checkbox.args = {
  name: "sample",
  id: "sample",
  children: "Checkbox Label Text",
};
