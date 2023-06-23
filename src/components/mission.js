import React from "react";

const Mission = () => {
  return (
    <div className='my-24 -m-8 p-8 bg-gray-900 md:px-12 py-24 px-8 flex flex-col items-center justify-center text-center text-white'>
      <h1 className='text-3xl md:text-4xl font-bold'>Our Vision and Mission</h1>
      <p className='text-sm my-4'>
        Vision: <span>RAISING A GENERATION ENNOBLING SOCIETY</span> <br />
        <br />
        Mission: To give each child a solid 3 - dimensional educational
        foundation that includes the intellectual, moral and spiritual, thereby,
        preparing a future generation that makes for a sane, safe and successful
        society and nation.
      </p>
      {/* <button className='bg-blue-700 p-4 px-8 rounded-xl text-gray-50 font-bold hover:bg-blue-500 transition hover:scale-95 text-sm'>
        Get in touch
      </button> */}
    </div>
  );
};

export default Mission;
