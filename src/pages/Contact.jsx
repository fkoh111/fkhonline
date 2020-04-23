import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="textStyle">
      <h2>Contact</h2>
      <div className="contactLayout">
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
export default Contact;
