import React from "react";
import { Formik, Field, Form } from "formik";

const ContactForm = () => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "", message: "" }}
      onSubmit={(values) => {
        const payload = JSON.stringify(values, null, 2);
        console.log(payload);
      }}
    >
      <Form>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" type="text" placeholder="First name" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" type="text" placeholder="Last name" />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <Field name="email" type="email" placeholder="Email address" />
        </div>
        <label htmlFor="message">Message</label>
        <div>
          <Field
            name="message"
            component="textarea"
            placeholder="Post a message.."
            rows={10}
            cols={100}
          />
        </div>
        <button type="submit">Post</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
