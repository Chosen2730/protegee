import React from "react";
import brain from "../images/brain.png";
import create from "../images/create.png";
import star from "../images/star.png";
import trophy from "../images/trophy.png";

const Hero = () => {
  const images = [
    { img: brain, text: "Learn" },
    { img: create, text: "Creativity" },
    { img: star, text: "Nurturing" },
    { img: trophy, text: "Games" },
  ];
  return (
    <div>
      <div className='grid md:grid-cols-2 gap-8 items-center justify-center'>
        <div className='w-full after:w-full after:h-full after:bg-blue-500 after:absolute relative md:after:translate-x-20 after:translate-x-3 md:after:translate-y-20 after:translate-y-3 after:-z-10 after:top-0 after:left-0 after:shadow-xl'>
          <img
            src='https://cdn.pixabay.com/photo/2019/05/30/12/07/emotions-4239774_960_720.jpg'
            alt='hero'
          />
        </div>
        <div className='md:pl-16 mt-20 md:block md:mt-0 flex flex-col text-center justify-center items-center'>
          <h2 className='font-bold text-blue-500 capitalize text-xl md:text-2xl'>
            We make learning interesting through creativity
          </h2>
          <h1 className='font-extrabold mt-5 text-[#190495] capitalize text-3xl  md:text-4xl'>
            Protegee Faith Academy
          </h1>
          <p className='font-bold text-blue-500 capitalize text-lg mb-10 sm:mb-0'>
            Discover | Learn | Play
          </p>
        </div>
      </div>
      <div className='flex'>
        <div className='mx-auto sm:m-0 sm:ml-auto grid grid-cols-2 sm:flex items-end justify-end'>
          {images.map(({ img, text }, i) => {
            return (
              <div
                key={i}
                className={`${
                  i === 0
                    ? "bg-yellow-500"
                    : i === 1
                    ? "bg-red-600"
                    : i === 2
                    ? "bg-blue-500"
                    : "bg-pink-600"
                } text-white font-bold w-40 h-40 flex flex-col items-center justify-center p-8`}
              >
                <img src={img} className='w-16 h-16 mb-4' alt={text} />
                <h1>{text}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
