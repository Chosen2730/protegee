import React from "react";
import About from "../components/about";
import Hero from "../components/hero";
import Mission from "../components/mission";
import Admission from "../components/admission";
import Why from "../components/why";
import Gallery from "../components/gallery";

const Home = () => {
  return (
    <div className='max-w-7xl mx-auto p-6 overflow-hidden'>
      <Hero />
      <Mission />
      <About />
      <Admission />
      <Why />
      <Gallery />
    </div>
  );
};

export default Home;
