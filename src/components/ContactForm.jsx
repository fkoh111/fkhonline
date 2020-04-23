import React from "react";

import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

/**
 * On the pattern, see:
 *     - https://jaredpalmer.com/formik/docs/api/formik#initialvalues-values
 *     - https://github.com/jaredpalmer/formik/issues/1420
 */

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),
  email: Yup.string().email("Invalid email!"),
  message: Yup.string()
    .min(20, "Message too short!")
    .max(500, "Message too long!"),
});

const ContactForm = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={ContactSchema}
      onSubmit={(values, { resetForm }) => {
        const payload = JSON.stringify(values, null, 2);
        console.log(payload);
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
          <p></p>
          <div>
            <Field
              name="message"
              component="textarea"
              placeholder="Message..."
              rows={10}
            />
            <div></div>
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
