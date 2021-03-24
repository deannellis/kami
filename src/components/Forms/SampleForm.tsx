import * as React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextInput from "../TextInput";
import SelectInput from "../SelectInput";
import Checkbox from "../Checkbox";

const SampleForm = () => (
  <Formik
    initialValues={{
      name: "",
      email: "",
      season: "",
      acceptedTerms: false,
    }}
    validationSchema={Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      season: Yup.string()
        .oneOf(["spring", "summer", "fall", "winter"], "Invalid season")
        .required("Required"),
      acceptedTerms: Yup.boolean()
        .required("Required")
        .oneOf([true], "You must accept the terms and conditions."),
    })}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    <Form>
      <TextInput
        label="Name"
        placeholder="Hoyt Herringbone"
        type="text"
        name="name"
        helperText="Name must be 15 characters or less"
      />
      <TextInput
        label="Email"
        placeholder="hotheaded_hoyt@hotmeal.comma"
        type="email"
        name="email"
      />
      <SelectInput label="Favorite Season" name="season">
        <option value="">Select your favorite season</option>
        <option value="spring">Spring</option>
        <option value="summer">Summer</option>
        <option value="fall">Fall</option>
        <option value="winter">Winter</option>
      </SelectInput>
      <Checkbox name="acceptedTerms" id="acceptedTerms">
        I accept the Terms and Conditions
      </Checkbox>
      <button className="button--primary" type="submit">
        Submit
      </button>
    </Form>
  </Formik>
);

export default SampleForm;
