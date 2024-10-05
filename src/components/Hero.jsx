import React from "react";
import "./Hero.css";
import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text pcontainer p-phone">
        <h1>Empowering Minds and Shaping Futures </h1>
        <p>
          At Pinnacle Crest University, we inspire and empower students with
          innovative programs, expert faculty, and a vibrant campus. Unlock your
          potential and shape your future with us.
        </p>
        <button className="mybtn">
          Explore More <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Hero;
