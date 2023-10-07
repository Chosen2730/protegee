import { useState, useEffect } from "react";
import { ImQuotesLeft } from "react-icons/im";
import { testimonies } from "../utils/testimonies";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import apostle from "../images/apostle.jpeg";

const Testimonial = () => {
  const [value, setValue] = useState(0);
  const changeIndex = (id) => {
    setValue(id);
  };
  const end = value + 3;
  const checkValue = (n, arr) => {
    if (n > arr.length - 1) {
      return 0;
    }
    if (n === arr.length - 2) {
      return 0;
    } else if (n < 0) {
      return arr.length - 2;
    }
    return n;
  };

  return (
    <div className='p-4 py-12 bg-pink-700 shadow-xl rounded-xl text-white my-20'>
      <h2 className='text-3xl md:text-4xl font-bold  text-center'>
        Parent Testimonials
      </h2>
      <p className='text-sm capitalize text-center'>
        What our happy parents have to say
      </p>
      <div className='flex space-x-3 justify-center my-4'>
        <i
          className='flex items-center justify-center rounded-full bg-gray-900 text-white'
          onClick={() => setValue(checkValue(value - 1, testimonies))}
        >
          <MdOutlineArrowBackIos className='w-10 h-10 p-3' />
        </i>

        <i
          className='flex items-center justify-center rounded-full bg-yellow-500 text-white'
          onClick={() => setValue(checkValue(value + 1, testimonies))}
        >
          <MdOutlineArrowForwardIos className='w-10 h-10 p-3' />
        </i>
      </div>
      <div className='grid gap-4 m-8 md:grid-cols-3 md:mt-20'>
        {testimonies
          .slice(value, end)
          .map(({ content, name, unit, image }, i) => {
            return (
              <div
                key={i}
                className={`${
                  i === 1
                    ? "md:-translate-y-14 bg-pink-900 text-white flex"
                    : "hidden bg-gray-900"
                } p-8 pb-12 md:flex flex-col justify-center items-center shadow-xl rounded-xl `}
              >
                <i className='text-center text-3xl'>
                  <ImQuotesLeft />
                </i>
                <p className='text-sm my-3'>{content}</p>

                <p className='font-bold text-sm mt-2 uppercase'>{name}</p>
              </div>
            );
          })}
      </div>
      <div className='flex flex-col items-center justify-center'>
        <img
          className='w-96 h-96 border-8 rounded-full object-cover'
          src={apostle}
          alt='image'
        />
        <h2 className='font-bold text-2xl my-2'>
          Apostle Sunday Ayokunle Popoola
        </h2>
      </div>
    </div>
  );
};

export default Testimonial;
