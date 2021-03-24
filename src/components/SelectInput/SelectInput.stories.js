import React from "react";
import { Formik, Form } from "formik";

import SelectComponent from "./index";

export default {
  title: "Modules/Select Input",
  component: SelectComponent,
  decorators: [
    (Story) => (
      <Formik initialValues={{ sample: "" }}>
        <Form>
          <Story />
        </Form>
      </Formik>
    ),
  ],
};

const Template = (args) => <SelectComponent {...args} />;
const selectOptions = (
  <>
    <option value="">Select an Option</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </>
);
export const SelectInput = Template.bind({});
SelectInput.args = {
  name: "sample",
  id: "sample",
  label: "Label Text",
  children: selectOptions,
  helperText: "helper text",
};
