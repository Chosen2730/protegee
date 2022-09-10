import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CgMenuRight, CgClose, CgFacebook } from "react-icons/cg";
import logo from "../images/logo.png";
import { BsInstagram, BsWhatsapp, BsTwitter } from "react-icons/bs";
import { MdCall } from "react-icons/md";

const Enrol = () => {
  return (
    <div className='rounded-xl shadow-xl p-8 md:px-12 py-24 bg-gray-900 flex flex-col justify-center text-center items-center '>
      <h2 className='text-yellow-500 my-4 font-extrabold text-2xl md:text-3xl'>
        Make your Children's Life special by enrolling them in our Academy
      </h2>
      <div className='grid justify-center text-center md:grid-cols-2 lg:grid-cols-3 items-center gap-12 text-gray-100 text-xl'>
        <div className='flex justify-center gap-8 my-4'>
          <a href=''>
            <CgFacebook />
          </a>
          <a href=''>
            <BsTwitter />
          </a>
          <a href=''>
            <BsWhatsapp />
          </a>
          <a href=''>
            <BsInstagram />
          </a>
          <a href=''>
            <MdCall />
          </a>
        </div>
        <a
          href='tel:+2348104113670'
          className='flex gap-3 items-center justify-center'
        >
          <i className='text-2xl'>
            <IoCallOutline />
          </i>
          <h3>+234 810 411 3670</h3>
        </a>
        <h2 className='text-yellow-500'>Jericho, Onireke GRA, Ibadan.</h2>
      </div>
    </div>
  );
};

export default Enrol;
