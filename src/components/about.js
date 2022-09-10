import React from "react";

const About = () => {
  return (
    <div className='rounded-xl shadow-xl p-4 md:p-12 py-12'>
      <div className='grid md:grid-cols-2 gap-8 items-center justify-center'>
        <div>
          <h2 className='text-blue-700 font-bold text-2xl md:text-4xl'>
            About Us
          </h2>
          <p className='text-sm my-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa non
            dolores doloribus exercitationem neque architecto fugit. Quaerat
            provident iure voluptate impedit ipsum! Adipisci, similique rerum.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            similique repellat temporibus nostrum, quaerat perspiciatis.
            Incidunt culpa quod dicta dolor?
          </p>
          <button className='bg-blue-700 p-4 px-8 rounded-xl text-gray-50 font-bold hover:bg-blue-500 transition hover:scale-95 text-sm'>
            Discover More
          </button>
        </div>
        <img
          src='https://cdn.pixabay.com/photo/2014/03/12/18/45/boys-286245_960_720.jpg'
          alt='about-img'
        />
      </div>
    </div>
  );
};

export default About;
