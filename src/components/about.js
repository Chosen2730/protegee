import React from "react";
import logo from "../images/logo.png";

const About = () => {
  return (
    <div id='about' className='rounded-xl shadow-xl p-4 md:p-12 py-12'>
      <div className='grid md:grid-cols-2 gap-8 items-center justify-center'>
        <img src={logo} alt='about-img' className='w-1/2 mx-auto' />
        <div>
          <h2 className='text-blue-700 font-bold text-2xl md:text-4xl'>
            About Us
          </h2>
          <p className='text-sm my-4'>
            Protegee Faith Academy is a prestigious Christian School that is
            committed to educating young minds excellently and holistically.
          </p>
          <h2 className='text-blue-700 font-bold text-2xl md:text-4xl'>
            The School Anthem
          </h2>
          <p className='text-sm my-4 capitalize'>
            WE ARE PROTEGEE FAITH ACADEMY WE ARE BEST AMONGST EQUALS (2CE){" "}
            <br /> SAFE SANE AND PROGRESSIVE SOCIETY (2CE) <br /> THROUGH
            INTELLECTUAL MORAL AND SPIRITUAL EDUCATION, WE ARE THE BEST (2CE){" "}
            <br /> WE GIVE VALUE TO RIGHTEOUS WE GIVE VALUE TO EXCELLENCE WE
            GIVE VALUE TO DILLIGENCE AND WE MAKE SIGNIFICANCE THROUGH IMPACT
            (2CE)
          </p>
          {/* <button className='bg-blue-700 p-4 px-8 rounded-xl text-gray-50 font-bold hover:bg-blue-500 transition hover:scale-95 text-sm'>
            Discover More
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default About;
