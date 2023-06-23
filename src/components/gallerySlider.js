import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { images } from "../utils/images";
import "swiper/css";

export default function Slider() {
  // console.log(images);
  const list = [
    { name: "Chosen", value: 6 },
    { name: "Simon", value: 7 },
  ];
  return (
    <div
    // className='md:my-10 container p-4 mx-auto'
    >
      <h3 className='font-extrabold text-3xl md:text-4xl text-gray-900 text-center'>
        Our gallery
      </h3>
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
      >
        {images.map((img, i) => {
          return (
            <SwiperSlide key={i}>
              <div className='hover:scale-105 transition flex flex-col items-center justify-center my-6 py-6'>
                <img
                  src={img}
                  className='w-full h-[400px] rounded-xl object-cover'
                  alt='image'
                />
                {/* <p>{name}</p>
                <p>{value}</p> */}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
