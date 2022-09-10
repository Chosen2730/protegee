import React, { useState } from "react";
import { images } from "../utils/images";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const next = () => {
    setIndex(() => {
      const newIndex = index + 1;
      if (newIndex > images.length - 1) {
        return 0;
      }
      return newIndex;
    });
  };
  const prev = () => {
    setIndex(() => {
      const newIndex = index - 1;
      if (newIndex < 0) {
        return images.length - 1;
      }
      return newIndex;
    });
  };

  const image1 = images[index];
  const image2 = images[index + 1];
  const image3 = images[index + 2];
  return (
    <div
      id='gallery'
      className='flex flex-col items-center justify-center p-4 md:p-12 my-20'
    >
      <h3 className='font-extrabold text-3xl md:text-4xl text-gray-900'>
        Our gallery
      </h3>
      <div className='flex items-center justify-center gap-8'>
        <i
          className='flex items-center justify-center rounded-full bg-pink-700 text-white'
          onClick={prev}
        >
          <MdOutlineArrowBackIos className='w-10 h-10 p-3' />
        </i>

        <div className='grid md:grid-cols-3 gap-4 my-4'>
          {image1 && (
            <div>
              <img
                src={image1}
                className='w-full h-full object-cover'
                alt='event-img'
              />
            </div>
          )}
          {image2 && (
            <div className='hidden md:block'>
              <img
                src={image2}
                className='w-full h-full object-cover'
                alt='event-img'
              />
            </div>
          )}
          {image3 && (
            <div className='hidden md:block'>
              <img
                src={image3}
                className='w-full h-full object-cover'
                alt='event-img'
              />
            </div>
          )}
        </div>
        <i
          className='flex items-center justify-center rounded-full bg-yellow-500 text-white'
          onClick={next}
        >
          <MdOutlineArrowForwardIos className='w-10 h-10 p-3' />
        </i>
      </div>
      {/* <button className='bg-blue-700 p-4 px-8 rounded-xl text-gray-50 font-bold hover:bg-blue-500 transition hover:scale-95 text-sm my-5'>
        See More
      </button> */}
    </div>
  );
};

export default Gallery;
