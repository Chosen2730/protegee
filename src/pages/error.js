import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen p-4'>
      <h1 className='text-9xl md:text-[15rem] font-bold text-gray-800'>404</h1>
      <p className='text-center my-5 text-base'>
        The Page you are requesting is under development and will be available
        shortly.
      </p>
      <Link to='/'>
        <button className='bg-[#190495] p-4 px-8 rounded-xl text-white font-bold hover:bg-violet-700 transition hover:scale-95 text-xs'>
          Return Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
