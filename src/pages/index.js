import React from "react";
import About from "../components/about";
import Hero from "../components/hero";
import Mission from "../components/mission";

const Home = () => {
  return (
    <div className='max-w-6xl mx-auto p-6 overflow-hidden'>
      <Hero />
      <Mission />
      <About />
    </div>
  );
};

export default Home;
