import React from "react";
import ad from "../images/contact.jpg";
import Form from "./form";

const Contact = () => {
  return (
    <div className='rounded-xl shadow-xl p-4 md:p-12 py-12  my-20'>
      <h2 className='font-extrabold text-3xl lg:text-4xl uppercase text-center my-3'>
        Admission/Contact Form
      </h2>
      <div className='grid md:grid-cols-2 md:gap-8 items-center justify-center'>
        <img src={ad} className='w-full' alt='about-img' />
        <Form />
      </div>
    </div>
  );
};

export default Contact;
