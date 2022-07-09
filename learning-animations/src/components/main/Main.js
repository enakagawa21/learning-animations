import React from "react";
import HeroImg from "../../assets/hero-main.svg";
import PageNum from "../../assets/pg-1.svg";
import Para from "../para/Para";

import About from "../about/About";

// import { useInView } from "react-intersection-observer";

import { useState, useEffect, useRef } from "react";

import "./Main.css";

function Main() {
  // hero paralax effect
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // hero parralax effect end

  return (
    <div className='grid-container'>
      {/* herosection start */}
      <div className='grid grid-1'>
        <img
          src={HeroImg}
          alt='hero-img'
          className='hero-img'
          style={{ transform: `translateY(-${offsetY * 0.05}px)` }}
        />
        <a href='#about'>
          <img
            src={PageNum}
            alt='pg-1'
            className='pg-1'
            style={{ transform: `translateY(-${offsetY * 0.35}px)` }}
          />
        </a>{" "}
      </div>
      {/* hero section end */}

      <div className='grid grid-2'>
        <Para />
      </div>
      <div id='about' className='grid grid-3'>
        <About />
      </div>
      <div className='grid grid-4'>
        <h1>section-4</h1>
      </div>
      <div className='grid grid-5'>
        <h1>section-5</h1>
      </div>
      <div className='grid grid-6'>
        <h1>section-6</h1>
      </div>
    </div>
  );
}
export default Main;
