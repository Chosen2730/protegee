import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { CgFacebook } from "react-icons/cg";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { MdCall, MdOutlineMailOutline } from "react-icons/md";

const Enrol = () => {
  return (
    <div className='-m-8 p-8 md:px-12 py-24 bg-gray-900 flex flex-col justify-center text-center items-center '>
      <h2 className='text-yellow-500 my-4 font-extrabold text-2xl md:text-3xl'>
        Make your Children's Life special by enrolling them in our Academy
      </h2>
      <div className='text-gray-100 text-xl'>
        <h2>Follow us on Social Media</h2>
        <div className='flex justify-center gap-8 my-4'>
          <a
            href='https://web.facebook.com/profile.php?id=100083690862278'
            target='_blank'
          >
            <CgFacebook />
          </a>
          <a href='mailto:Protegeefaithacad@gmail.com' target='_blank'>
            <MdOutlineMailOutline />
          </a>
          <a href='https://wa.me/09166166949'>
            <BsWhatsapp />
          </a>
          <a href='https://www.instagram.com/protegeefaith/' target='_blank'>
            <BsInstagram />
          </a>
          <a href='tel:08034408730' target='_blank'>
            <MdCall />
          </a>
        </div>
        <div className='my-10'>
          <h3>+234 810 411 3670</h3>
          <h2 className='text-yellow-500'>Jericho, Onireke GRA, Ibadan.</h2>
        </div>
      </div>
      <p className='text-white text-sm'>
        Copyright (c) Protegee Faith Academy {new Date().getFullYear()}{" "}
      </p>
    </div>
  );
};

export default Enrol;
