import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import { postHandler } from "../helpers/utils";

/**
 * On the pattern, see:
 *     - https://jaredpalmer.com/formik/docs/api/formik#initialvalues-values
 *     - https://github.com/jaredpalmer/formik/issues/1420
 */

const ContactForm = () => {
  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too short!")
      .max(50, "Too long!")
      .required("Name is required!"),
    email: Yup.string().email("Invalid email!").required("Email is required!"),
    message: Yup.string()
      .min(20, "Message too short!")
      .max(500, "Message too long!")
      .required("Message is required!"),
  });

  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={ContactSchema}
      onSubmit={(values, { resetForm }) => {
        const payload = values;
        postHandler(
          payload,
          `https://fkhonlineapi.azurewebsites.net/api/contact/form`
        );
        resetForm({ values: "" });
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div>
            <label htmlFor="name">Name: </label> <div></div>
            <Field name="name" type="text" placeholder="Name" />
            {errors.name && touched.name ? (
              <div className="errStyle">{errors.name}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="email">Email: </label> <div></div>
            <Field name="email" type="email" placeholder="Email" />
            {errors.email && touched.email ? (
              <div className="errStyle">{errors.email}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="message">Message: </label> <div></div>
            <Field
              name="message"
              component="textarea"
              placeholder="Message..."
              rows={10}
              cols={135}
            />
            {errors.message && touched.message ? (
              <div className="errStyle">{errors.message}</div>
            ) : null}
          </div>
          <button className="buttonStyle" type="submit">
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
