import React from "react";
import ad from "../images/admission2.png";

const Admission = () => {
  return (
    <div id='admissions' className='-m-8 p-8 md:p-12 py-12 bg-gray-900 my-20'>
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
            Come! Enrol your child today @ Protegee Faith Academy, located at
            ,1, Faith Drive, Off Kudeti Avenue, Onireke GRA, Ibadan for the
            incoming 2022/2023 session. Admissions are open to Creche for child
            minding & daycare, Pre School, Kindergarten, Primary, After School
          </p>
          <a
            href='https://wa.me/+2349166166949'
            className='bg-blue-700 p-4 px-20 rounded-xl text-gray-50 font-bold hover:bg-blue-500 transition hover:scale-95 text-sm my-5 inline-block'
          >
            Enrol Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Admission;
