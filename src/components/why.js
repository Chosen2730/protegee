import React from "react";
import ad from "../images/why.png";
import { BsCodeSlash, BsMusicNoteBeamed } from "react-icons/bs";
import { RiVolumeVibrateFill } from "react-icons/ri";
import { VscNote } from "react-icons/vsc";
import {
  MdOutlineSportsTennis,
  MdOutlineSportsVolleyball,
  MdToys,
} from "react-icons/md";

const Why = () => {
  return (
    <div className='rounded-xl shadow-xl p-5 md:px-12 py-24 bg-yellow-500 my-20 text-gray-900'>
      <div className='flex flex-col items-center justify-center text-center max-w-6xl mx-auto'>
        <h2 className='font-extrabold text-3xl md:text-5xl'>
          Why you should enrol your wards with us.
        </h2>

        <p className='text-sm my-4'>
          We run the British - Nigerian Curriculum, teach French Language as the
          second official language, expose learners to speech Elocution
          training, practical computer classes involving coding and decoding
          classes, practical approach to Music which involves learning of
          various instruments like Keyboard, Violin, Saxophone, drumset and
          Trumpet all within our serene facilities with excellent outlook and
          ambience.
        </p>

        <div className='grid grid-cols-2 md:grid-cols-3 gap-8 text-left'>
          <div className='flex items-center gap-2'>
            <BsCodeSlash className='w-10 h-10 flex items-center justify-center rounded-full p-2 bg-pink-500 text-white' />
            <h2 className='font-bold text-lg'>Coding</h2>
          </div>
          <div className='flex items-center gap-2'>
            <BsMusicNoteBeamed className='w-10 h-10 flex items-center justify-center rounded-full p-2 bg-blue-700 text-white' />
            <h2 className='font-bold text-lg'>Music</h2>
          </div>
          <div className='flex items-center gap-2'>
            <RiVolumeVibrateFill className='w-10 h-10 flex items-center justify-center rounded-full p-2 bg-gray-900 text-white' />
            <h2 className='font-bold text-lg'>Phonics</h2>
          </div>
          <div className='flex items-center gap-2'>
            <VscNote className='w-10 h-10 flex items-center justify-center rounded-full p-2 bg-red-800 text-white' />
            <h2 className='font-bold text-lg'>French</h2>
          </div>
          <div className='flex items-center gap-2'>
            <MdOutlineSportsTennis className='w-10 h-10 flex items-center justify-center rounded-full p-2 bg-purple-700 text-white' />
            <h2 className='font-bold text-lg'>Outdoor Games</h2>
          </div>
          <div className='flex items-center gap-2'>
            <MdOutlineSportsVolleyball className='w-10 h-10 flex items-center justify-center rounded-full p-2 bg-green-700 text-white' />
            <h2 className='font-bold text-lg'>Sport Activities</h2>
          </div>
          <div className='flex items-center gap-2'>
            <MdToys className='w-10 h-10 flex items-center justify-center rounded-full p-2 bg-orange-700 text-white' />
            <h2 className='font-bold text-lg'>Table/Floor Toys</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
