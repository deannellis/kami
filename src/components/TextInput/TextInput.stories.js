import React from "react";
import { Formik, Form } from "formik";

import TextInputComponent from "./index";

export default {
  title: "Modules/Text Input",
  component: TextInputComponent,
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

const Template = (args) => <TextInputComponent {...args} />;

export const TextInput = Template.bind({});
TextInput.args = {
  name: "sample",
  id: "sample",
  type: "text",
  label: "Label",
  placeholder: "placeholder text",
  helperText: "helper text",
};
