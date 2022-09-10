import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Form = () => {
  const [state, handleSubmit] = useForm("mnqrnrkp");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
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
      <textarea id='message' name='message' />
      <ValidationError prefix='Message' field='message' errors={state.errors} />
      <button
        type='submit'
        className='bg-blue-700 p-4 px-8 rounded-xl text-gray-50 font-bold hover:bg-blue-500 transition hover:scale-95 text-sm'
        disabled={state.submitting}
      >
        Submit
      </button>
    </form>
  );
};
export default Form;
