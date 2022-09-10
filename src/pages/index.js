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

const Home = () => {
  return (
    <div className='max-w-7xl mx-auto p-6 overflow-hidden'>
      <Hero />
      <Mission />
      <About />
      <Why />
      <Admission />
      <Gallery />
      <Testimonial />
      <Contact />
      <Enrol />
    </div>
  );
};

export default Home;
