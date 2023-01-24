import React from "react";
import Users from "../components/Users";
import Img from "../assets/img/banner-img.png";

const Banner = () => {
  return (
    <section className="bg-blue-100 min-h-[600px] pt-24 pb-12 text-center relative lg:pt-48 lg:text-left lg:pb-0 ">
      <div className="container bg-red-300 mx-auto">
        <div className="flex flex-col lg:flex-row ">
          <div className="bg-blue-300 ">
            <h1 className="text-3xl font-bold mb-8 lg:text-5xl lg:leading-snug">
              Let's Explore <br /> Three-Dimensional Visually
            </h1>
            <p className="font-secondary mb-12 max-w-[440px] mx-auto lg:mx-0">
              With virtual technology you can see the digital world feel more
              real and you can play the game with a new style.
            </p>
            <div
              className="flex bg-purple-300 items-center justify-around space-x-4 
              max-w-[320px] mx-auto mb-12 lg:space-x-8 lg:mx-0 lg:max-w-none
              lg:justify-start"
            >
              <button className="btn">Get it now</button>
              <a
                className="border-b-2 border-transparent hover:border-white 
              transition ease-out"
                href="/"
              >
                Explore Device
              </a>
            </div>
            <Users />
          </div>
          <div className="bg-green-300">
            <img src={Img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
