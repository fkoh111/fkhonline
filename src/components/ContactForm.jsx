import React from "react";

import { Formik, Field, Form } from "formik";

/**
 * On the pattern, see: https://github.com/jaredpalmer/formik/issues/1420
 */

const ContactForm = () => {
  return (
    <Formik
      initialValues={{ Name: "", email: "", message: "" }}
      onSubmit={(values) => {
        const payload = JSON.stringify(values, null, 2);
        console.log(payload);
      }}
    >
      <Form>
        <div>
          <label htmlFor="name">Name: </label> <div></div>
          <Field name="name" type="text" placeholder="Name" />
        </div>
        <div>
          <label htmlFor="email">Email: </label> <div></div>
          <Field name="email" type="email" placeholder="Email" />
        </div>
        <p></p>
        <div>
          <Field
            name="message"
            component="textarea"
            placeholder="Message..."
            rows={10}
            cols={120}
          />
        </div>
        <button className="buttonStyle" type="submit">
          Send
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
