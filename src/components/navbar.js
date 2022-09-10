import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CgMenuRight, CgClose, CgFacebook } from "react-icons/cg";
import logo from "../images/logo.png";
import { BsInstagram, BsWhatsapp, BsTwitter } from "react-icons/bs";
import { MdCall } from "react-icons/md";

const navItems = [
  { title: "Home", url: "#" },
  { title: "About Us", url: "#about" },
  { title: "Admissions", url: "#admissions" },
  { title: "Gallery", url: "#gallery" },
  { title: "Contact Us", url: "#contact" },
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [base, setBase] = useState(0);
  const [scroll, setScroll] = useState(false);

  const medias = [
    {
      logo: "/images/fb.png",
      url: "https://web.facebook.com/profile.php?id=100083690862278",
    },
    { logo: "/images/download.png", url: "tel:08034408730" },
    {
      logo: "/images/ig.png",
      url: "https://www.instagram.com/protegeefaith/",
    },
    { logo: "/images/email.png", url: "mailto:Protegeefaithacad@gmail.com" },
    { logo: "/images/wh.png", url: "https://wa.me/+2349166166949" },
  ];

  return (
    <div
      id='nav'
      className={`${
        scroll ? "fixed w-full bg-white shadow-xl " : ""
      }text-gray-800 transition z-50 shadow-xl`}
    >
      {/* TOP MENU BAR */}

      <div className='flex justify-between max-w-[1440px] mx-auto font-bold items-center px-6 p-4'>
        <div className='flex justify-between md:items-center w-full'>
          <div className='md:flex items-center justify-center gap-4'>
            <img src={logo} className='w-10' alt='logo' />
            <Link
              className={`text-xl md:text-3xl font-extrabold text-blue-700 transition md:block w-52 md:w-full hidden`}
              to='/'
            >
              Protegee Faith Academy
            </Link>
          </div>
          <i
            className={`${
              navOpen ? "opacity-20" : "opacity-full"
            } text-2xl md:hidden bg-gray-900 text-white rounded-md w-fit h-fit p-2`}
            onClick={() => setNavOpen(true)}
          >
            <CgMenuRight />
          </i>
        </div>

        <div className='md:flex gap-10 hidden'>
          {navItems.map(({ title, url }, i) => {
            return (
              <a
                key={i}
                className={`${
                  i === base
                    ? "text-blue-700 border-b-2 border-b-blue-700"
                    : "text-gray-800"
                } text-sm hover:text-violet-700 transition whitespace-nowrap`}
                href={url}
                onClick={() => setBase(i)}
              >
                {title}
              </a>
            );
          })}
        </div>

        {/* SIDE MENU BAR COMPONENT */}

        <div
          className={`${
            navOpen ? "translate-x-0" : "-translate-x-full"
          } transition fixed md:-translate-x-full top-0 z-50 left-0 p-6 bg-white shadow-xl h-screen w-[80%]`}
        >
          <div className='w-full flex flex-col'>
            <i
              className='text-xl md:hidden ml-auto p-2 w-fit flex justify-end flex-col bg-gray-900 text-white rounded-md '
              onClick={() => setNavOpen(false)}
            >
              <CgClose className='' />
            </i>
            <div className='flex flex-col items-center justify-center gap-4'>
              <img src={logo} className='w-24' alt='logo' />
              <Link
                className={`text-2xl md:text-3xl font-extrabold text-blue-700 transition text-center`}
                to='/'
              >
                Protegee Faith Academy
              </Link>
            </div>
            <div className='flex justify-center gap-4 my-4'>
              {medias.map(({ logo, url }, i) => {
                return (
                  <a href={url} target='_blank' key={i}>
                    <img src={logo} className='w-8' alt='logo' key={i} />
                  </a>
                );
              })}
            </div>
          </div>
          {navItems.map(({ title, url }, i) => {
            return (
              <a
                key={i}
                className={`${
                  i === base
                    ? "text-blue-700 border-b-2 border-b-blue-700 w-fit"
                    : "text-gray-800"
                } block my-10 py-2 text-sm transition`}
                href={url}
                onClick={() => {
                  setBase(i);
                  setNavOpen(false);
                }}
              >
                {title}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
