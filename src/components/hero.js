import React from "react";

const Hero = () => {
  return (
    <div>
      <div className='grid md:grid-cols-2 gap-8 items-center justify-center'>
        <div className='box'>
          <img
            src='https://cdn.pixabay.com/photo/2019/05/30/12/07/emotions-4239774_960_720.jpg'
            alt='hero'
          />
        </div>
        <div className='pl-16'>
          <h2 className='font-bold text-[#190495] capitalize text-2xl'>
            We make learning interesting through creativity
          </h2>
          <h1 className='font-extrabold my-5 text-[#190495] capitalize text-4xl'>
            Protegee Faith Academy
          </h1>
          <p className='font-bold text-[#190495] capitalize text-2xl'>
            Discover | Learn | Play
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
