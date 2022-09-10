import React from "react";
import ad from "../images/admission2.png";

const Admission = () => {
  return (
    <div className='rounded-xl shadow-xl p-4 md:p-12 py-12 bg-gray-900 my-20'>
      <div className='grid md:grid-cols-2 md:gap-8 items-center justify-center'>
        <img src={ad} className='w-full' alt='about-img' />
        <div>
          <h2 className='text-white font-bold text-6xl md:text-7xl xl:text-8xl'>
            Admission{" "}
            <span className='block uppercase text-xl text-yellow-300'>
              Open for{" "}
              <span className='text-3xl font-extrabold'>2022 - 2023</span>
            </span>{" "}
          </h2>
          <p className='font-bold text-base text-white'>
            Creche | Kindargarten | Grade 1 - 5
          </p>
          <p className='text-sm my-4 text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa non
            dolores doloribus exercitationem neque architecto fugit.
          </p>
          <button className='bg-blue-700 p-4 px-8 rounded-xl text-gray-50 font-bold hover:bg-blue-500 transition hover:scale-95 text-sm'>
            Enrol Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admission;
