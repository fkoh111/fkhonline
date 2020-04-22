import React from "react";
import { useFormik } from "formik";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      const envelope = JSON.stringify(values, null, 2);
      console.log(envelope);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        placeholder="First name"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        placeholder="Last name"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="E-mail Address"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <label htmlFor="message">Message</label>
      <input
        id="message"
        name="message"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.message}
      />

      <button type="submit">Submit</button>
    </form>
  );
};
export default ContactForm;
