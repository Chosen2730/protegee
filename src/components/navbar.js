import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CgMenuRight, CgClose, CgFacebook } from "react-icons/cg";
import logo from "../images/logo.png";
import { BsInstagram, BsWhatsapp, BsTwitter } from "react-icons/bs";
import { MdCall } from "react-icons/md";

const navItems = [
  { title: "Home", url: "/" },
  { title: "About Us", url: "/about" },
  { title: "Admissions", url: "/service" },
  { title: "Gallery", url: "/portfolio" },
  { title: "Contact Us", url: "/contact" },
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [base, setBase] = useState(0);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const event = () => {
      if (window.scrollY > 300) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", event);
    return () => window.removeEventListener("scroll", event);
  }, []);

  return (
    <div
      className={`${
        scroll ? "fixed w-full bg-white shadow-xl z-10" : ""
      } p-6 text-gray-800 transition shadow-xl`}
    >
      {/* TOP MENU BAR */}

      <div className='flex justify-between max-w-6xl mx-auto font-bold items-center'>
        <div className='flex justify-between md:items-center w-full'>
          <div className='md:flex items-center justify-center gap-4'>
            <img src={logo} className='w-10' alt='logo' />
            <Link
              className={`text-xl md:text-3xl font-extrabold text-[#190495] transition md:block w-52 md:w-full hidden`}
              to='/'
            >
              Protegee Faith Academy
            </Link>
          </div>
          <i
            className={`${
              navOpen ? "opacity-20" : "opacity-full"
            } text-2xl md:hidden bg-[#190495] text-white rounded-md w-fit h-fit p-2`}
            onClick={() => setNavOpen(true)}
          >
            <CgMenuRight />
          </i>
        </div>

        <div className='md:flex gap-10 hidden'>
          {navItems.map(({ title, url }, i) => {
            return (
              <Link
                key={i}
                className={`${
                  i === base
                    ? "text-[#190495] border-b-2 border-b-[#190495]"
                    : "text-gray-800"
                } text-sm hover:text-violet-700 transition whitespace-nowrap`}
                to={url}
                onClick={() => setBase(i)}
              >
                {title}
              </Link>
            );
          })}
        </div>

        {/* SIDE MENU BAR COMPONENT */}

        <div
          className={`${
            navOpen ? "translate-x-0" : "-translate-x-full"
          } transition fixed md:-translate-x-full top-0 z-10 left-0 p-6 bg-white shadow-xl h-screen w-[80%]`}
        >
          <div className='w-full flex flex-col'>
            <i
              className='text-xl md:hidden ml-auto p-2 w-fit flex justify-end flex-col bg-[#190495] text-white rounded-md '
              onClick={() => setNavOpen(false)}
            >
              <CgClose className='' />
            </i>
            <div className='flex flex-col items-center justify-center gap-4'>
              <img src={logo} className='w-24' alt='logo' />
              <Link
                className={`text-2xl md:text-3xl font-extrabold text-[#190495] transition`}
                to='/'
              >
                Protegee Faith Academy
              </Link>
            </div>
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
          </div>
          {navItems.map(({ title, url }, i) => {
            return (
              <Link
                key={i}
                className={`${
                  i === base
                    ? "text-[#190495] border-b-2 border-b-[#190495] w-fit"
                    : "text-gray-800"
                } block my-10 py-2 text-sm transition`}
                to={url}
                onClick={() => {
                  setBase(i);
                  setNavOpen(false);
                }}
              >
                {title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
