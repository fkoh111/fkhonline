import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="textStyle">
      <h2>Contact</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed
        placerat erat, a pellentesque metus. Phasellus purus nisl, suscipit at
        scelerisque at, faucibus a nibh. Aenean et finibus nunc, ut ultricies
        velit. Nunc finibus vel est ac semper.
      </p>
      <div className="contactLayout">
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
export default Contact;
