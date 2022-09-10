import React from "react";
import About from "../components/about";
import Hero from "../components/hero";
import Mission from "../components/mission";
import Admission from "../components/admission";
import Why from "../components/why";
import Gallery from "../components/gallery";
import Testimonial from "../components/testimonials";
import Contact from "../components/contact";
import Enrol from "../components/enrol";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Home = () => {
  return (
    <div className='max-w-7xl mx-auto p-6 overflow-hidden'>
      <AnimationOnScroll
        animateIn='animate__backInRight'
        initiallyVisible={true}
      >
        <Hero />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn='animate__backInLeft'>
        <Mission />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn='animate__fadeInUp'>
        <About />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn='animate__zoomIn'>
        <Why />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn='animate__rotateInDownRight'>
        <Admission />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn='animate__zoomIn'>
        <Gallery />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn='animate__bounceInRight'>
        <Testimonial />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn='animate__bounceInLeft'>
        <Contact />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn='animate__fadeInUpBig'>
        <Enrol />
      </AnimationOnScroll>
    </div>
  );
};

export default Home;
