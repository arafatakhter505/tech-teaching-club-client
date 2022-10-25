import React from "react";
import { hero } from "../../assets";

const Hero = () => {
  return (
    <section className="flex justify-between items-center md:flex-row flex-col-reverse lg:px-[80px] md:px-[50px] px-[20px] py-[100px] ">
      <div className="md:w-1/2">
        <h4 className="text-2xl my-3">Explore The Computer____</h4>
        <h2 className="lg:text-6xl md:text-4xl text-3xl font-bold text-sky-500 mb-6">
          Tech Teaching Club
        </h2>
        <p className="mb-6">
          In this time of technology, Tech Teaching Club offers you a complete
          course in Computer Science. So that you can control the computer as
          you like.
        </p>
        <button className="bg-sky-500 text-white px-4 py-2 rounded">
          Get Started
        </button>
      </div>
      <div className="md:w-1/2">
        <img src={hero} alt="" />
      </div>
    </section>
  );
};

export default Hero;
