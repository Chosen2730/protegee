import React, { useEffect, useState } from "react";
import About from "../components/about";
import Hero from "../components/hero";
import Mission from "../components/mission";
import Admission from "../components/admission";
import Why from "../components/why";
import Testimonial from "../components/testimonials";
import Contact from "../components/contact";
import Enrol from "../components/enrol";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { TbArrowTopCircle } from "react-icons/tb";
import Slider from "../components/gallerySlider";

const Home = () => {
  const [icon, setIcon] = useState(false);

  useEffect(() => {
    const action = () => {
      if (window.scrollY > 500) {
        setIcon(true);
      } else {
        setIcon(false);
      }
    };
    window.addEventListener("scroll", action);
    return () => window.removeEventListener("scroll", action);
  }, []);

  return (
    <div className='max-w-[1440px] mx-auto p-6 overflow-hidden'>
      <Hero />
      <AnimationOnScroll animateIn='animate__backInLeft'>
        <Mission />
      </AnimationOnScroll>

      <About />

      <AnimationOnScroll animateIn='animate__zoomIn'>
        <Why />
      </AnimationOnScroll>

      <Admission />

      {/* <AnimationOnScroll animateIn='animate__zoomIn'> */}

      <Slider />
      {/* </AnimationOnScroll> */}
      <AnimationOnScroll animateIn='animate__bounceInRight'>
        <Testimonial />
      </AnimationOnScroll>

      <Contact />

      <AnimationOnScroll animateIn='animate__fadeInUpBig'>
        <Enrol />
      </AnimationOnScroll>

      <a href='#nav'>
        <i
          className={`${
            icon ? "flex" : "hidden"
          }  fixed bottom-20 right-10 items-center justify-center rounded-full bg-yellow-500 text-black`}
        >
          <TbArrowTopCircle className='w-16 h-16 p-3' />
        </i>
      </a>
    </div>
  );
};

export default Home;
