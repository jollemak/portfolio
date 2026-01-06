"use client";

import ContactInfo from "./ui/contact-ui/contact-info";
import ContactForm from "./ui/contact-ui/contact-form";

const Contact = () => {
  
  return (
    <div id="contact" className="w-full max-w-5xl mx-auto px-4 py-12 md:py-16">
      <h2 className="text-3xl md:text-4xl font-light text-white text-center mb-10">
        Contact
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
