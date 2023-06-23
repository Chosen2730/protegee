import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Form = () => {
  const [state, handleSubmit] = useForm("mnqrnrkp");
  if (state.succeeded) {
    return (
      <div className='my-5'>
        <h2 className='font-extrabold text-2xl text-pink-600'>
          Submission successful!
        </h2>
        <p>
          Your form has been submitted and you will get a response from us soon.{" "}
          <a
            className='text-blue-700 font-bold'
            href='https://wa.me/+2349166166949'
          >
            Chat us on WhatsApp
          </a>{" "}
          for immediate respone.
        </p>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit} className='text-gray-900'>
      <label htmlFor='name' className='block mt-5'>
        Full Name
      </label>
      <input
        id='name'
        type='name'
        className='block w-full p-2 border-b-2 border-dotted border-b-pink-700'
        name='name'
      />
      <label htmlFor='email' className='block mt-5'>
        Email Address
      </label>
      <input
        id='email'
        type='email'
        className='block w-full p-2 border-b-2 border-dotted border-b-pink-700'
        name='email'
      />
      <label htmlFor='tel' className='block mt-5'>
        Phone Number
      </label>
      <input
        id='tel'
        type='tel'
        className='block w-full p-2 border-b-2 border-dotted border-b-pink-700'
        name='tel'
      />
      <label htmlFor='class' className='block mt-5'>
        Studying Class
      </label>
      <input
        id='class'
        type='text'
        className='block w-full p-2 border-b-2 border-dotted border-b-pink-700'
        name='class'
      />
      <ValidationError prefix='Email' field='email' errors={state.errors} />

      <button
        type='submit'
        className='bg-blue-700 p-4 px-12 rounded-xl text-gray-50 font-bold hover:bg-blue-500 transition hover:scale-95 text-sm my-5'
        disabled={state.submitting}
      >
        Submit
      </button>
    </form>
  );
};
export default Form;
